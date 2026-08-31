import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, email, message, honeypot } = req.body;

    // Basic spam protection (honeypot field)
    if (honeypot) {
      return res.status(200).json({ message: 'Message sent successfully' }); // fake success for bots
    }

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    if (message.length > 5000) {
      return res.status(400).json({ message: 'Message is too long' });
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use a verified domain or resend default for testing
      to: 'iqbalfadila161222@gmail.com', // Your email
      replyTo: email,
      subject: `New Portfolio Message — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ message: 'Message sent successfully', data });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ message: 'Something went wrong. Please try again.' });
  }
}
