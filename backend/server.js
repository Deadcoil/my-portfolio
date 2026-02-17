import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Contact Message",
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    });

    // ✅ VERY IMPORTANT
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ success: false });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
