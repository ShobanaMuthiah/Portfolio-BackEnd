import { sendEmail } from '../Utils/Nodemailer.js';
import dotenv from 'dotenv';

dotenv.config();

export const comments = async (req, res) => {
  const { name, email, description } = req.body;
  
  try {
    await sendEmail(email, `${name} - From Portfolio`, description);
    res.status(200).json({ message: 'successful' });
  } catch (error) {
    res.status(404).json({ message: 'Failed to send email', error });
  }
};
