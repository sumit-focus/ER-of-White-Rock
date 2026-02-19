export const prerender = false;

import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.json();
    const { name, email, phone, subject, message } = data;

    // Validation
    if (!name || !email || !message) {
        return new Response(
            JSON.stringify({
                message: "Missing required fields",
            }),
            { status: 400 }
        );
    }

    // SMTP Transporter
    const transporter = nodemailer.createTransport({
        host: import.meta.env.SMTP_HOST,
        port: parseInt(import.meta.env.SMTP_PORT || "587"),
        secure: import.meta.env.SMTP_SECURE === "true", // true for 465, false for other ports
        auth: {
            user: import.meta.env.SMTP_USER,
            pass: import.meta.env.SMTP_PASS,
        },
    });

    try {
        // Send Email
        await transporter.sendMail({
            from: `"${name}" <${import.meta.env.SMTP_USER}>`, // Sender address
            replyTo: email,
            to: "info@erofwhiterock.com", // Receiver address
            subject: `New Contact Form Submission: ${subject}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
      `,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
          <p>You have received a new message from the website contact form.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Subject:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${subject}</td>
            </tr>
          </table>

          <h3 style="color: #1e3a8a;">Message:</h3>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
        });

        return new Response(
            JSON.stringify({
                message: "Email sent successfully",
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error("SMTP Error:", error);
        return new Response(
            JSON.stringify({
                message: "Failed to send email",
                error: error instanceof Error ? error.message : "Unknown error",
            }),
            { status: 500 }
        );
    }
};
