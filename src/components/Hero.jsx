import { motion } from "framer-motion";
import "./Hero.css";
import profileImage from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="badge">
              <span className="badge-dot"></span>
              <span className="badge-text">AVAILABLE FOR INTERNSHIP</span>
            </div>

            <h1>
              Muhammad Iqbal Fadila<span className="accent-dot">.</span>
            </h1>

            <h2 className="hero-subtitle">Software Engineering Student</h2>

            <p className="hero-description">
              Mahasiswa Teknik Rekayasa Perangkat Lunak yang mengembangkan aplikasi berbasis web dan mobile melalui berbagai proyek akademik. Saat ini berfokus memperkuat dasar pemrograman dan kemampuan pengembangan aplikasi menggunakan Laravel, Flutter, PHP, dan MySQL.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary-editorial">
                Selected Work
              </a>
              <a href="#contact" className="btn-secondary-editorial">
                Contact Me
              </a>
            </div>
          </motion.div>

          <div className="hero-visual">
            <motion.div 
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Orbital Ring Animation */}
              <div className="orbital-ring orbital-ring-outer" aria-hidden="true"></div>
              <div className="orbital-ring orbital-ring-inner" aria-hidden="true"></div>
              
              {/* Profile Photo */}
              <div className="hero-photo-wrapper">
                <img src={profileImage} alt="Muhammad Iqbal Fadila - Software Engineering Student" className="hero-image" />
              </div>
              
              {/* Decorative Floating Elements */}
              <motion.div 
                className="floating-element el-1"
                aria-hidden="true"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >+</motion.div>
              <motion.div 
                className="floating-element el-2"
                aria-hidden="true"
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              >•</motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;