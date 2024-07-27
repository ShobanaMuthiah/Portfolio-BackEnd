import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config()
const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});


export const sendEmail = async (from, subject, text) => {
  const mailOptions = {
    from,
    to:process.env.EMAIL,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log('Error sending email:', error);
  }
};