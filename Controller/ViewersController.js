import { sendEmail } from '../Utils/Nodemailer.js';
import dotenv from 'dotenv';

dotenv.config();

export const comments = async (req, res) => {
  const { name, email, description } = req.body;
  console.log('Received form data:', { name, email, description });
  
  try {
    await sendEmail(email, `${name} - From Portfolio`, description);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'successful' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(404).json({ message: 'Failed to send email', error });
  }
};
