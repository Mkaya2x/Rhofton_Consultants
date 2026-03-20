import express from "express";
import nodemailer from "nodemailer";

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, organization, service, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const emailOk = /\S+@\S+\.\S+/.test(email);
  if (!emailOk) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  const mailUser = process.env.EMAIL_USER;
  const mailPass = process.env.EMAIL_PASS;
  const mailTo = process.env.EMAIL_TO;

  if (!mailUser || !mailPass || !mailTo) {
    return res.status(501).json({
      error: "Email service not configured. Set EMAIL_USER, EMAIL_PASS, and EMAIL_TO."
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: mailUser,
      pass: mailPass
    }
  });

  const subject = `New inquiry from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${organization || "N/A"}`,
    `Service Interest: ${service || "N/A"}`,
    "",
    message
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"Rhofton Consultants" <${mailUser}>`,
      to: mailTo,
      replyTo: email,
      subject,
      text
    });

    return res.json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
