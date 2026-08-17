import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { 
  validateContactForm, 
  sanitizeHtml, 
  sanitizeEmail, 
  sanitizePhone,
  sanitizeText,
  hasSuspiciousPatterns
} from '@/lib/validation';
import { rateLimitMiddleware, getClientIp } from '@/lib/rateLimit';
import { validateCSRFToken } from '@/lib/csrf';

// Safe interface for Cloudflare environment
interface CloudflareEnv {
  env?: {
    RESEND_API_KEY?: string;
  };
}

// Helper function to get Resend instance (lazy load API key)
// Safely accesses environment variables with proper type checking
function getResendClient(request: NextRequest) {
  // For Cloudflare Pages, access env from request
  const cfRequest = request as NextRequest & CloudflareEnv;
  const apiKey = cfRequest.env?.RESEND_API_KEY || process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set');
  }
  
  return new Resend(apiKey);
}

// Helper function to get the base URL
function getBaseUrl(request: NextRequest): string {
  const host = request.headers.get('host') || 'localhost:3000';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  return `${protocol}://${host}`;
}

export async function POST(request: NextRequest) {
  try {
    console.log('\n🚀 [API] Contact form submission received');
    const clientIp = getClientIp(request);
    console.log(`[API] Client IP: ${clientIp}`);

    // ========== SECURITY CHECK 1: RATE LIMITING ==========
    const rateLimit = rateLimitMiddleware(request, 5, 3600000); // 5 requests per hour
    if (!rateLimit.allowed) {
      console.warn(`⚠️ [SECURITY] Rate limit exceeded for IP: ${clientIp}`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimit.retryAfter || 3600),
          },
        }
      );
    }
    console.log('✅ [SECURITY] Rate limit check passed');

    // Parse request body
    const body = await request.json();
    console.log('[API] Request body received');

    // ========== SECURITY CHECK 2: CSRF TOKEN VALIDATION ==========
    const { csrfToken, fullName, email, phone, city, projectType, timeline, message } = body;
    
    if (!csrfToken || !validateCSRFToken(csrfToken)) {
      console.warn(`⚠️ [SECURITY] Invalid or missing CSRF token from IP: ${clientIp}`);
      return NextResponse.json(
        { error: 'Invalid request. Please refresh and try again.' },
        { status: 403 }
      );
    }
    console.log('✅ [SECURITY] CSRF token validation passed');

    // ========== SECURITY CHECK 3: INPUT VALIDATION ==========
    const validation = validateContactForm({
      fullName,
      email,
      phone,
      city,
      projectType,
      timeline,
      message: message || '',
    });

    if (!validation.isValid) {
      console.warn(`⚠️ [VALIDATION] Input validation failed: ${validation.errors.join(', ')}`);
      return NextResponse.json(
        { error: validation.errors.join(', ') },
        { status: 400 }
      );
    }
    console.log('✅ [SECURITY] Input validation passed');

    // ========== SECURITY CHECK 4: SUSPICIOUS PATTERN CHECK ==========
    if (
      hasSuspiciousPatterns(fullName) ||
      hasSuspiciousPatterns(email) ||
      hasSuspiciousPatterns(message || '')
    ) {
      console.warn(`⚠️ [SECURITY] Suspicious patterns detected in input from IP: ${clientIp}`);
      return NextResponse.json(
        { error: 'Invalid input detected. Please review your submission.' },
        { status: 400 }
      );
    }
    console.log('✅ [SECURITY] Suspicious pattern check passed');

    // ========== SECURITY CHECK 5: SANITIZE ALL INPUTS ==========
    const sanitizedFullName = sanitizeHtml(sanitizeText(fullName.trim()));
    const sanitizedEmail = sanitizeEmail(email.trim());
    const sanitizedPhone = sanitizePhone(phone.trim());
    const sanitizedCity = sanitizeHtml(sanitizeText(city.trim()));
    const sanitizedMessage = sanitizeHtml(sanitizeText(message?.trim() || ''));

    console.log('✅ [SECURITY] All inputs sanitized');

    // Get Resend client (will throw if API key is missing)
    let resend;
    try {
      resend = getResendClient(request);
      console.log('✅ [API] Resend client initialized successfully');
    } catch (error) {
      console.error('❌ [API] Failed to initialize Resend client');
      console.error('Error:', error instanceof Error ? error.message : String(error));
      return NextResponse.json(
        { error: 'Email service configuration error. Please try again later.' },
        { status: 500 }
      );
    }

    const baseUrl = getBaseUrl(request);
    console.log('[API] Base URL:', baseUrl);

    // Send email to business
    const businessEmailResult = await resend.emails.send({
      from: 'noreply@sarvmaan.com',
      to: 'contact@sarvmaan.com',
      subject: `New Project Inquiry from ${sanitizedFullName}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 700px; margin: 0 auto;">
          <!-- Logo Header -->
          <div style="text-align: center; margin-bottom: 25px; padding-bottom: 20px; border-bottom: 3px solid #d4af37;">
            <img src="${baseUrl}/logo.png" alt="SarvMaan Interiors Logo" style="max-width: 150px; height: auto; margin-bottom: 15px;">
            <h1 style="color: #1a1410; margin: 0; font-size: 28px;">SarvMaan Interiors</h1>
            <p style="color: #b8956a; margin: 5px 0; font-size: 14px;">Premium Interior Design Solutions</p>
          </div>

          <h2 style="color: #1a1410;">🎯 New Project Inquiry</h2>
          <div style="background-color: #faf8f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #1a1410;">Name:</strong> ${sanitizedFullName}</p>
            <p><strong style="color: #1a1410;">Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
            <p><strong style="color: #1a1410;">Phone:</strong> <a href="tel:${sanitizedPhone}">${sanitizedPhone}</a></p>
            <p><strong style="color: #1a1410;">City/Area:</strong> ${sanitizedCity}</p>
            <p><strong style="color: #1a1410;">Project Type:</strong> ${projectType}</p>
            <p><strong style="color: #1a1410;">Timeline:</strong> ${timeline}</p>
          </div>
          ${sanitizedMessage ? `
            <h3 style="color: #1a1410;">Message:</h3>
            <p style="line-height: 1.6; color: #333;">${sanitizedMessage.replace(/\n/g, '<br>')}</p>
          ` : ''}
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 12px; color: #999; text-align: center;">
            This email was generated from your website contact form.
          </p>
        </div>
      `,
    });

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: 'noreply@sarvmaan.com',
      to: sanitizedEmail,
      subject: 'Thank You for Your Enquiry – SarvMaan Interiors',
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 700px; margin: 0 auto; color: #333; line-height: 1.6;">
          <!-- Logo Header -->
          <div style="text-align: center; margin-bottom: 25px; padding-bottom: 20px; border-bottom: 3px solid #d4af37;">
            <img src="${baseUrl}/logo.png" alt="SarvMaan Interiors Logo" style="max-width: 150px; height: auto; margin-bottom: 15px;">
            <h1 style="color: #1a1410; margin: 0; font-size: 28px;">SarvMaan Interiors</h1>
            <p style="color: #b8956a; margin: 5px 0; font-size: 14px;">Premium Interior Design Solutions</p>
          </div>

          <!-- Greeting -->
          <p style="font-size: 16px; color: #1a1410;">
            <strong>Hello ${sanitizedFullName},</strong>
          </p>

          <p style="color: #333; font-size: 15px;">
            Thank you for sharing your project details with SarvMaan Interiors. We've received your enquiry and appreciate the clarity you provided. Here's a quick summary of the information you submitted:
          </p>

          <!-- Project Details Section -->
          <div style="background-color: #faf8f6; padding: 20px; border-left: 4px solid #d4af37; margin: 25px 0;">
            <p style="margin-top: 0; color: #1a1410; font-weight: bold; font-size: 16px;">YOUR PROJECT DETAILS</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #666;">• Project Type:</td>
                <td style="padding: 8px 0; color: #1a1410; font-weight: 500;">${projectType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;">• Location:</td>
                <td style="padding: 8px 0; color: #1a1410; font-weight: 500;">${sanitizedCity}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;">• Expected Timeline:</td>
                <td style="padding: 8px 0; color: #1a1410; font-weight: 500;">${timeline}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;">• Contact Number:</td>
                <td style="padding: 8px 0; color: #1a1410; font-weight: 500;">${sanitizedPhone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;">• Email:</td>
                <td style="padding: 8px 0; color: #1a1410; font-weight: 500;">${sanitizedEmail}</td>
              </tr>
            </table>
          </div>

          <p style="color: #333; font-size: 14px; font-style: italic;">This helps us understand your vision and prepare the right design approach for you.</p>

          <!-- Social Media & Portfolio Links -->
          <div style="margin: 30px 0;">
            <p style="color: #1a1410; font-weight: bold; font-size: 16px; border-bottom: 2px solid #d4af37; padding-bottom: 10px; margin-bottom: 20px;">FOLLOW OUR WORK</p>
            
            <p style="color: #333; font-size: 14px; margin-bottom: 20px;">
              Connect with us on social media to see our latest projects and design inspirations:
            </p>

            <!-- Social Media Links -->
            <div style="margin: 20px 0; padding: 15px; background-color: #faf8f6; border-radius: 8px;">
              <p style="color: #333; font-size: 14px; margin: 8px 0;">
                <strong>Instagram:</strong> <a href="https://www.instagram.com/sarvmaan_india/" style="color: #d4af37; text-decoration: none;">https://www.instagram.com/sarvmaan_india/</a>
              </p>
              <p style="color: #333; font-size: 14px; margin: 8px 0;">
                <strong>Facebook:</strong> <a href="https://www.facebook.com/HomeSuperhero" style="color: #d4af37; text-decoration: none;">https://www.facebook.com/HomeSuperhero</a>
              </p>
              <p style="color: #333; font-size: 14px; margin: 8px 0;">
                <strong>YouTube:</strong> <a href="https://www.youtube.com/@SarvMaan" style="color: #d4af37; text-decoration: none;">https://www.youtube.com/@SarvMaan</a>
              </p>
              <p style="color: #333; font-size: 14px; margin: 8px 0;">
                <strong>WhatsApp:</strong> <a href="https://wa.me/917447722255" style="color: #d4af37; text-decoration: none;">https://wa.me/917447722255</a>
              </p>
            </div>

          <!-- Next Steps -->
          <div style="background-color: #faf8f6; padding: 20px; border-left: 4px solid #d4af37; margin: 25px 0;">
            <p style="margin-top: 0; color: #1a1410; font-weight: bold; font-size: 16px;">NEXT STEPS</p>
            <p style="color: #333; margin: 10px 0; font-size: 14px;">Our team will now review your details and prepare:</p>
            <ul style="color: #666; margin: 10px 0; padding-left: 20px; font-size: 14px;">
              <li style="margin: 6px 0;">A personalized design proposal</li>
              <li style="margin: 6px 0;">Estimated timeline & budget guidance</li>
              <li style="margin: 6px 0;">Optional site visit or virtual consultation</li>
              <li style="margin: 6px 0;">Design recommendations tailored to your style</li>
            </ul>
            <p style="color: #333; margin: 10px 0; font-size: 14px;">If you'd like to share additional reference images or clarify anything, feel free to reply to this email or <a href="https://wa.me/917447722255" style="color: #d4af37; text-decoration: none; font-weight: bold;">chat with us on WhatsApp</a>.</p>
          </div>

          <!-- Call to Action -->
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #333; font-size: 15px; margin-bottom: 15px;">
              <strong>Want to discuss your project right away?</strong>
            </p>
            <a href="https://wa.me/917447722255" style="color: #fff; background-color: #25D366; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block; margin-right: 10px; font-size: 14px;">Chat on WhatsApp</a>
            <a href="tel:+917447722255" style="color: #fff; background-color: #1a1410; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block; font-size: 14px;">Call Us</a>
          </div>

          <!-- Closing -->
          <p style="color: #333; margin-top: 30px; margin-bottom: 10px; font-size: 15px;">
            Thank you again for considering SarvMaan Interiors.<br>
            <strong>We look forward to creating something beautiful for you.</strong>
          </p>

          <!-- Footer -->
          <hr style="border: none; border-top: 2px solid #d4af37; margin: 30px 0;">
          <div style="text-align: center; padding-top: 20px;">
            <p style="color: #1a1410; font-weight: bold; margin: 5px 0; font-size: 14px;">SarvMaan Interiors</p>
            <p style="color: #666; margin: 3px 0; font-size: 12px;">Premium Interior Design Solutions</p>
            <div style="margin: 12px 0; font-size: 13px;">
              <p style="margin: 3px 0; color: #666;">
                <a href="tel:+917447722255" style="color: #d4af37; text-decoration: none;">+91 7447 722 255</a> | 
                <a href="mailto:contact@sarvmaan.com" style="color: #d4af37; text-decoration: none;">contact@sarvmaan.com</a>
              </p>
              <p style="margin: 8px 0; color: #999;">
                <a href="https://sarvmaan.com" style="color: #b8956a; text-decoration: none;">Website</a> | 
                <a href="https://wa.me/917447722255" style="color: #b8956a; text-decoration: none;">WhatsApp</a> | 
                <a href="https://sarvmaan.com/projects" style="color: #b8956a; text-decoration: none;">Portfolio</a>
              </p>
            </div>
            <p style="color: #999; font-size: 11px; margin-top: 15px; font-style: italic;">
              This email was generated from our website contact form. If you have any questions, don't hesitate to reach out!
            </p>
          </div>
        </div>
      `,
    });

    // Check if both emails were sent successfully
    if (businessEmailResult.error || userEmailResult.error) {
      console.error('❌ [API] Email sending error:');
      console.error('[API] Business Email Error:', JSON.stringify(businessEmailResult.error, null, 2));
      console.error('[API] User Email Error:', JSON.stringify(userEmailResult.error, null, 2));
      return NextResponse.json(
        { 
          error: 'Failed to send email. Please try again.',
          details: {
            businessError: businessEmailResult.error?.message || String(businessEmailResult.error),
            userError: userEmailResult.error?.message || String(userEmailResult.error),
          }
        },
        { status: 500 }
      );
    }

    console.log('\n✅ EMAILS SENT SUCCESSFULLY!\n');
    console.log('📧 Business Email:');
    console.log('   To:', 'contact@sarvmaan.com');
    console.log('   From:', 'noreply@sarvmaan.com');
    console.log('   EmailID:', businessEmailResult.data?.id);
    console.log('\n📧 User Confirmation Email:');
    console.log('   To:', sanitizedEmail);
    console.log('   From:', 'noreply@sarvmaan.com');
    console.log('   EmailID:', userEmailResult.data?.id);
    console.log('\n📋 Form Data Received:');
    console.log({
      fullName: sanitizedFullName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      city: sanitizedCity,
      projectType,
      timeline,
    });
    console.log('\n');

    return NextResponse.json(
      { success: true, message: 'Thank you! We will contact you shortly.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Form submission error:');
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    } else {
      console.error('Unknown error:', error);
    }
    
    // More specific error messages
    let errorMessage = 'Internal server error. Please try again later.';
    if (error instanceof Error && error.message.includes('RESEND_API_KEY')) {
      errorMessage = 'Email service is not configured. Please contact support.';
    }
    
    return NextResponse.json(
      { error: errorMessage, details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
