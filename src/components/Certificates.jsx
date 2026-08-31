import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import "./Certificates.css";

import js2Pdf from "../assets/certificates/JavaScript_Essentials_2_certificate.pdf";
import js2Img from "../assets/certificates/JavaScript_Essentials_2_certificate.png";

import js1Pdf from "../assets/certificates/JavaScript_Essentials_1_certificate.pdf";
import js1Img from "../assets/certificates/JavaScript_Essentials_1_certificate.png";

import javaPdf from "../assets/certificates/sertifikat memulai pemrograman dengan java.pdf";
import javaImg from "../assets/certificates/sertifikat memulai pemrograman dengan java.png";

import cPdf from "../assets/certificates/sertifikat memulai pemograman dengan c.pdf";
import cImg from "../assets/certificates/sertifikat memulai pemograman dengan c.png";

import haskellPdf from "../assets/certificates/sertifikat haskell.pdf";
import haskellImg from "../assets/certificates/sertifikat haskell.png";

import aiPdf from "../assets/certificates/Sertifikat Belajar Dasar AI.pdf";
import aiImg from "../assets/certificates/Sertifikat Belajar Dasar AI.png";

import financePdf from "../assets/certificates/Sertifikat Introduction to Financial Literacy.pdf";
import financeImg from "../assets/certificates/Sertifikat Introduction to Financial Literacy.png";

function Certificates() {
  const certificates = [
    {
      title: "JavaScript Essentials 2",
      issuer: "SMK IDN / Cisco",
      date: "24 Feb 2026",
      pdf: js2Pdf,
      image: js2Img
    },
    {
      title: "JavaScript Essentials 1",
      issuer: "SMK IDN / Cisco",
      date: "12 Feb 2026",
      pdf: js1Pdf,
      image: js1Img
    },
    {
      title: "Memulai Pemrograman Dengan Java",
      issuer: "Dicoding",
      date: "30 Nov 2025",
      verifyLink: "https://dicoding.com/certificates/JLX15JK75Z72",
      pdf: javaPdf,
      image: javaImg
    },
    {
      title: "Memulai Pemrograman Dengan C",
      issuer: "Dicoding",
      date: "30 Nov 2025",
      verifyLink: "https://dicoding.com/certificates/72ZDKRMVVPYW",
      pdf: cPdf,
      image: cImg
    },
    {
      title: "Memulai Pemrograman dengan Haskell",
      issuer: "Dicoding",
      date: "01 Des 2025",
      verifyLink: "https://dicoding.com/certificates/1OP8JMENLPQK",
      pdf: haskellPdf,
      image: haskellImg
    },
    {
      title: "Belajar Dasar AI",
      issuer: "Dicoding",
      date: "05 Nov 2025",
      verifyLink: "https://dicoding.com/certificates/1RXYQW9GQZVM",
      pdf: aiPdf,
      image: aiImg
    },
    {
      title: "Introduction to Financial Literacy",
      issuer: "Dicoding",
      date: "05 Nov 2025",
      verifyLink: "https://dicoding.com/certificates/1RXYQW9RQZVM",
      pdf: financePdf,
      image: financeImg
    }
  ];

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="section-header-editorial"
        >
          <span className="section-number">04 //</span>
          <h2 className="section-title">CERTIFICATES</h2>
        </motion.div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div 
              className="certificate-card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.1 }}
            >
              <div className="cert-image-container">
                <img src={cert.image} alt={`Certificate of completion for ${cert.title}`} className="cert-image" loading="lazy" />
              </div>
              
              <div className="cert-info">
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                
                <h3 className="cert-title">{cert.title}</h3>
                
                <div className="cert-actions">
                  <a href={cert.pdf} className="cert-link" target="_blank" rel="noopener noreferrer">
                    <span>View Certificate</span>
                    <FaArrowRight className="cert-icon" />
                  </a>
                  
                  {cert.verifyLink && (
                    <a href={cert.verifyLink} className="cert-link verify-link" target="_blank" rel="noopener noreferrer" title="Verify Credential">
                      <FaExternalLinkAlt size={12} />
                      <span>Verify</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
