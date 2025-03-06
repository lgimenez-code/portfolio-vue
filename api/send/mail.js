import nodemailer from "nodemailer";

export async function POST(req, res) {
  try {
    const { email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: import.meta.env.VITE_FROM_EMAIL,
        pass: import.meta.env.VITE_PASS_APP_EMAIL,
      },
    });

    const mailOptions = {
      from: email,
      to: import.meta.env.VITE_FROM_EMAIL,
      subject: subject,
      html: `
        <div>
          <i style="color:gray;">
            mail sended from
              <a href="#" target="_blank" style="text-decoration:none; color:gray;">
                ${email}:
              </a>
            </i>
          <div style="margin: 20px 0 0 20px; font-size:14px;">
            ${message}
          </div>
        </div>`,
    };

    const info = transporter.sendMail(mailOptions);

    return res.status(200).json({
      messageId: info.messageId,
      previewUrl: nodemailer.getTestMessageUrl(info),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
