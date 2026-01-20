import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, inquiryType, message } = body;

    // Validate input
    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Create mailto link - this will be handled client-side or you can integrate with an email service
    // For a simple solution, we'll log the message and return success
    // In production, you would integrate with SendGrid, Resend, or similar

    console.log("Contact form submission:", {
      name,
      email,
      inquiryType,
      message,
      timestamp: new Date().toISOString(),
    });

    // Format email content
    const emailContent = `
New Contact Form Submission
---------------------------
Name: ${name}
Email: ${email}
Inquiry Type: ${inquiryType}
Message: ${message}
Timestamp: ${new Date().toISOString()}
`;

    console.log(emailContent);

    // For now, we'll just return success
    // To actually send emails, you would add email service integration here
    // Example with nodemailer or similar:
    /*
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({...});
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'jbrauck417@gmail.com',
      subject: `Contact Form: ${inquiryType}`,
      text: emailContent,
    });
    */

    return NextResponse.json(
      {
        success: true,
        message:
          "Message received. For immediate response, please email directly at jbrauck417@gmail.com",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
