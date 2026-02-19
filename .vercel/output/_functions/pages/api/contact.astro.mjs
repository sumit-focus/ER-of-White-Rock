import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const data = await request.json();
  const { name, email, phone, subject, message } = data;
  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields"
      }),
      { status: 400 }
    );
  }
  const transporter = nodemailer.createTransport({
    host: undefined                         ,
    port: parseInt("587"),
    secure: undefined                            === "true",
    // true for 465, false for other ports
    auth: {
      user: undefined                         ,
      pass: undefined                         
    }
  });
  try {
    await transporter.sendMail({
      from: `"${name}" <${undefined                         }>`,
      // Sender address
      replyTo: email,
      to: "info@erofwhiterock.com",
      // Receiver address
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
      `
    });
    return new Response(
      JSON.stringify({
        message: "Email sent successfully"
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("SMTP Error:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to send email",
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
