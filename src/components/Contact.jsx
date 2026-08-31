import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", honeypot: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="section-header-editorial"
        >
          <span className="section-number">05 //</span>
          <h2 className="section-title">GET IN TOUCH</h2>
        </motion.div>

        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h3>Let's collaborate.</h3>
            <p className="contact-desc">
              Tertarik untuk mendiskusikan peluang kerja sama atau sekadar menyapa? 
              Saya selalu terbuka untuk percakapan tentang desain, teknologi, dan inovasi.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">iqbalfadila161222@gmail.com</span>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Indonesia</span>
                </div>
              </div>
            </div>

            <div className="social-links-editorial">
              <a href="https://www.instagram.com/mbibooo?igsi=MWJkdnpqa3E3dTh0Yg==" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={18} />
                <span>Instagram</span>
              </a>
              <a href="https://github.com/BiBO-sheep" aria-label="Github" target="_blank" rel="noopener noreferrer">
                <FaGithub size={18} />
                <span>Github</span>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-iqbal-fadila-29a378342" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form-editorial"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            {/* Honeypot field for anti-spam */}
            <input type="text" id="honeypot" style={{ display: 'none' }} value={formData.honeypot} onChange={handleChange} tabIndex="-1" autoComplete="off" />

            <div className="form-group-editorial">
              <input type="text" id="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
              <label htmlFor="name">Name</label>
            </div>

            <div className="form-group-editorial">
              <input type="email" id="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
              <label htmlFor="email">Email Address</label>
            </div>

            <div className="form-group-editorial">
              <textarea id="message" rows="1" placeholder="Message" required maxLength="5000" value={formData.message} onChange={handleChange}></textarea>
              <label htmlFor="message">Message</label>
            </div>

            <button type="submit" className="btn-submit-editorial" disabled={status === "sending"}>
              <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
              <FaArrowRight size={14} className="submit-icon" />
            </button>

            {status === "success" && <p className="form-status success">Message sent successfully!</p>}
            {status === "error" && <p className="form-status error">Something went wrong. Please try again.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;