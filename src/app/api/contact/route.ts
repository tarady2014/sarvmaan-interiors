import { NextRequest, NextResponse } from 'next/server';

// This is a basic handler. For production, integrate with Cloudflare Workers or your backend
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, serviceType, budget, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send WhatsApp message
    // 4. Create lead in CRM

    // Example: Send email (using a service like SendGrid, Resend, etc.)
    // await sendEmail({
    //   to: 'hello@sarvmaan.com',
    //   subject: `New Project Inquiry from ${name}`,
    //   html: `
    //     <h2>New Lead</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Service:</strong> ${serviceType}</p>
    //     <p><strong>Budget:</strong> ${budget}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `
    // });

    console.log('Form submission received:', { name, email, phone, serviceType, budget });

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
