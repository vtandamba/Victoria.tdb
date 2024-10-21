// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configurer Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASSWORD,  
      },
    });

    // Options de l'email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, 
      subject: `Message de ${name} sur le portfolio`,
      text: message,
    };

    try {
      // Envoyer l'email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email envoyé avec succès!' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
