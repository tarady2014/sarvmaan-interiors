import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Helper function to get Resend instance (lazy load API key)
function getResendClient(request: NextRequest) {
  // For Cloudflare Pages, access env from request.cf or use process.env
  // Cloudflare Pages now requires accessing via request context
  const apiKey = (request as any).env?.RESEND_API_KEY || process.env.RESEND_API_KEY;
  
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
    // Get Resend client (will throw if API key is missing)
    let resend;
    try {
      resend = getResendClient(request);
    } catch (error) {
      console.error('RESEND_API_KEY is missing or empty');
      return NextResponse.json(
        { error: 'Email service configuration error. Please try again later.' },
        { status: 500 }
      );
    }

    const baseUrl = getBaseUrl(request);
    const body = await request.json();
    const { fullName, email, phone, city, projectType, timeline, message } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !city || !projectType || !timeline) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to business
    const businessEmailResult = await resend.emails.send({
      from: 'noreply@sarvmaan.com',
      to: 'contact@sarvmaan.com',
      subject: `New Project Inquiry from ${fullName}`,
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
            <p><strong style="color: #1a1410;">Name:</strong> ${fullName}</p>
            <p><strong style="color: #1a1410;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong style="color: #1a1410;">Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong style="color: #1a1410;">City/Area:</strong> ${city}</p>
            <p><strong style="color: #1a1410;">Project Type:</strong> ${projectType}</p>
            <p><strong style="color: #1a1410;">Timeline:</strong> ${timeline}</p>
          </div>
          ${message ? `
            <h3 style="color: #1a1410;">Message:</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
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
      to: email,
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
            <strong>Hello ${fullName},</strong>
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
                <td style="padding: 8px 0; color: #1a1410; font-weight: 500;">${city}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;">• Expected Timeline:</td>
                <td style="padding: 8px 0; color: #1a1410; font-weight: 500;">${timeline}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;">• Contact Number:</td>
                <td style="padding: 8px 0; color: #1a1410; font-weight: 500;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;">• Email:</td>
                <td style="padding: 8px 0; color: #1a1410; font-weight: 500;">${email}</td>
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

            <!-- Social Media Icons Only -->
            <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 30px; flex-wrap: wrap;">
              <!-- Instagram -->
              <a href="https://www.instagram.com/sarvmaan_india/" style="text-align: center; text-decoration: none; display: inline-block;">
                <div style="width: 60px; height: 60px; background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; transition: transform 0.2s;">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <p style="color: #1a1410; font-weight: bold; font-size: 12px; margin-top: 8px;">Instagram</p>
              </a>
              
              <!-- Facebook -->
              <a href="https://www.facebook.com/HomeSuperhero" style="text-align: center; text-decoration: none; display: inline-block;">
                <div style="width: 60px; height: 60px; background-color: #1877F2; border-radius: 8px; display: flex; align-items: center; justify-content: center; transition: transform 0.2s;">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <p style="color: #1a1410; font-weight: bold; font-size: 12px; margin-top: 8px;">Facebook</p>
              </a>

              <!-- YouTube -->
              <a href="https://www.youtube.com/@SarvMaan" style="text-align: center; text-decoration: none; display: inline-block;">
                <div style="width: 60px; height: 60px; background-color: #FF0000; border-radius: 8px; display: flex; align-items: center; justify-content: center; transition: transform 0.2s;">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <p style="color: #1a1410; font-weight: bold; font-size: 12px; margin-top: 8px;">YouTube</p>
              </a>

              <!-- WhatsApp -->
              <a href="https://wa.me/917447722255" style="text-align: center; text-decoration: none; display: inline-block;">
                <div style="width: 60px; height: 60px; background-color: #25D366; border-radius: 8px; display: flex; align-items: center; justify-content: center; transition: transform 0.2s;">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a6.963 6.963 0 00-6.961 6.961c0 1.921.561 3.795 1.623 5.394L2.36 21.9l5.821-1.524a6.963 6.963 0 005.529 2.738h.005c3.837 0 6.961-3.124 6.961-6.961 0-1.858-.72-3.603-2.028-4.911-1.308-1.308-3.053-2.028-4.911-2.028zM20.067 2.957a10.03 10.03 0 00-7.979-3.295c-5.537 0-10.033 4.496-10.033 10.033 0 1.77.46 3.521 1.327 5.065L.467 23.585l5.338-1.402a10.034 10.034 0 004.802 1.226h.005c5.537 0 10.033-4.496 10.033-10.033 0-2.682-1.044-5.2-2.94-7.097"/>
                  </svg>
                </div>
                <p style="color: #1a1410; font-weight: bold; font-size: 12px; margin-top: 8px;">WhatsApp</p>
              </a>
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
      console.error('Email sending error:', {
        businessEmail: businessEmailResult.error,
        userEmail: userEmailResult.error,
      });
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    console.log('\n✅ EMAILS SENT SUCCESSFULLY!\n');
    console.log('📧 Business Email:');
    console.log('   To:', 'contact@sarvmaan.com');
    console.log('   From:', 'noreply@sarvmaan.com');
    console.log('   EmailID:', businessEmailResult.data?.id);
    console.log('\n📧 User Confirmation Email:');
    console.log('   To:', email);
    console.log('   From:', 'noreply@sarvmaan.com');
    console.log('   EmailID:', userEmailResult.data?.id);
    console.log('\n📋 Form Data Received:');
    console.log({
      fullName,
      email,
      phone,
      city,
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
