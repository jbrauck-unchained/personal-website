import { NextResponse } from "next/server";
import { rateLimit, getClientIdentifier } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    // Rate limiting: 3 submissions per hour per IP
    const identifier = getClientIdentifier(request);
    const rateLimitResult = rateLimit(identifier, 3, 60 * 60 * 1000);

    if (!rateLimitResult.success) {
      const resetDate = new Date(rateLimitResult.resetTime);
      return NextResponse.json(
        {
          error: `Too many requests. Please try again after ${resetDate.toLocaleTimeString()}.`,
          resetTime: rateLimitResult.resetTime,
        },
        { 
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)),
          }
        }
      );
    }

    const body = await request.json();
    const { name, email, inquiryType, message } = body;

    // Validate input
    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Length validation to prevent abuse
    if (name.length > 100 || email.length > 100 || message.length > 2000) {
      return NextResponse.json(
        { error: "Input exceeds maximum length" },
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

    // Basic spam detection
    const spamKeywords = ['viagra', 'casino', 'lottery', 'bitcoin giveaway', 'free money'];
    const lowerMessage = message.toLowerCase();
    if (spamKeywords.some(keyword => lowerMessage.includes(keyword))) {
      // Silently reject spam
      console.log('Spam detected from:', identifier);
      return NextResponse.json(
        { success: true, message: "Message received." },
        { status: 200 }
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
        message: "Message received. For immediate response, please email directly at jbrauck417@gmail.com",
        remaining: rateLimitResult.remaining,
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
