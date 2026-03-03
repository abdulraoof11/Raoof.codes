import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, Email, and Message are required." }, { status: 400 });
    }

    // Nodemailer transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "raoof4581@gmail.com", // your Gmail
        pass: "lhte wede ergr shdo",  // Gmail App Password
      },
    });

    // Logo: we can convert your JSX logo into an image (host it online)
    const logoUrl = "https://i.ibb.co/6Xf2f4y/logo.png"; // replace with your hosted logo

    // Styled HTML email
    const htmlBody = `
      <div style="
        font-family: Arial, sans-serif; 
        background: #0f0f0f; 
        color: #ffffff; 
        padding: 30px; 
        border-radius: 15px;
      ">
        <div style="text-align: center; margin-bottom: 20px;">
        
        </div>
        <h1 style="text-align: center; color: #FF7A00; margin-bottom: 20px;">New Contact Request</h1>
        <div style="background: #1B1B1B; padding: 20px; border-radius: 10px;">
          <p><strong style="color: #FF7A00;">Name:</strong> ${name}</p>
          <p><strong style="color: #FF7A00;">Email:</strong> ${email}</p>
          <p><strong style="color: #FF7A00;">Phone:</strong> ${phone || "N/A"}</p>
          <p><strong style="color: #FF7A00;">Service:</strong> ${service || "N/A"}</p>
          <p><strong style="color: #FF7A00;">Message:</strong></p>
          <p style="background: #0f0f0f; padding: 10px; border-radius: 5px;">${message}</p>
        </div>
        <p style="text-align: center; margin-top: 20px; color: #888;">Sent via <span style="color: #FF7A00;">Raoof.codes</span> Contact Form</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "raoof4581@gmail.com",
      subject: `New Contact from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Service: ${service || "N/A"}
        Message: ${message}
      `,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}