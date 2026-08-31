import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error('RESEND_API_KEY is missing from environment variables.');
      return res.status(500).json({ message: 'Server configuration error.' });
    }

    const resend = new Resend(apiKey);

    const { name, email, message, honeypot } = req.body || {};

    // Basic spam protection (honeypot field)
    if (honeypot) {
      // Fake success for bots
      return res.status(200).json({ message: 'Message sent successfully' }); 
    }

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    if (message.length > 5000) {
      return res.status(400).json({ message: 'Message is too long' });
    }

    // Format the email content
    const date = new Date().toLocaleString('en-US', { timeZoneName: 'short' });
    const emailBody = `New message from your portfolio.

Name:
${name}

Email:
${email}

Message:
${message}

Sent:
${date}`;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend testing email
      to: 'iqbalfadila161222@gmail.com', // Destination email
      replyTo: email,
      subject: `New Portfolio Contact — ${name}`,
      text: emailBody,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(500).json({ message: 'Failed to send email. Check API key and configuration.' });
    }

    return res.status(200).json({ message: 'Message sent successfully', data });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ message: 'Something went wrong. Please try again.' });
  }
}
