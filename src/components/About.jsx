import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaLightbulb } from 'react-icons/fa';
import { SiPhp, SiLaravel, SiJavascript, SiFlutter, SiDart, SiTailwindcss, SiMysql, SiGit, SiReact } from 'react-icons/si';
import './About.css';
import aboutImage from '../assets/About.jpg';

function About() {
  const imageRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // 3D Tilt for photo
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
  // Parallax translation for the whole orbit system
  const parallaxX = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]);
  const parallaxY = useTransform(mouseYSpring, [-0.5, 0.5], [-20, 20]);
  
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="section-header-editorial"
        >
          <span className="section-number">01 //</span>
          <h2 className="section-title">ABOUT ME</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="about-visual-area"
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "1000px" }}
          >
            <motion.div 
              className="orbit-system-wrapper"
              style={{
                x: shouldReduceMotion ? 0 : parallaxX,
                y: shouldReduceMotion ? 0 : parallaxY,
              }}
            >
              {/* Outer Orbit */}
              <div className="orbit orbit-outer">
                <div className="orbit-item" style={{ '--angle': '0deg' }}>
                  <div className="tech-node"><SiReact /><span className="tooltip">React</span></div>
                </div>
                <div className="orbit-item" style={{ '--angle': '120deg' }}>
                  <div className="tech-node"><SiFlutter /><span className="tooltip">Flutter</span></div>
                </div>
                <div className="orbit-item" style={{ '--angle': '240deg' }}>
                  <div className="tech-node"><SiGit /><span className="tooltip">Git</span></div>
                </div>
                <div className="orbit-item decorative" style={{ '--angle': '60deg' }} aria-hidden="true">{`</>`}</div>
                <div className="moving-light"></div>
              </div>

              {/* Middle Orbit */}
              <div className="orbit orbit-middle">
                <div className="orbit-item" style={{ '--angle': '45deg' }}>
                  <div className="tech-node"><SiLaravel /><span className="tooltip">Laravel</span></div>
                </div>
                <div className="orbit-item" style={{ '--angle': '165deg' }}>
                  <div className="tech-node"><SiPhp /><span className="tooltip">PHP</span></div>
                </div>
                <div className="orbit-item" style={{ '--angle': '285deg' }}>
                  <div className="tech-node"><SiTailwindcss /><span className="tooltip">Tailwind</span></div>
                </div>
                <div className="orbit-item decorative" style={{ '--angle': '100deg' }} aria-hidden="true">{`{ }`}</div>
                <div className="orbit-item decorative" style={{ '--angle': '220deg' }} aria-hidden="true">{`01`}</div>
                <div className="moving-light"></div>
              </div>

              {/* Inner Orbit */}
              <div className="orbit orbit-inner">
                <div className="orbit-item" style={{ '--angle': '90deg' }}>
                  <div className="tech-node"><SiJavascript /><span className="tooltip">JavaScript</span></div>
                </div>
                <div className="orbit-item" style={{ '--angle': '210deg' }}>
                  <div className="tech-node"><SiMysql /><span className="tooltip">MySQL</span></div>
                </div>
                <div className="orbit-item" style={{ '--angle': '330deg' }}>
                  <div className="tech-node"><SiDart /><span className="tooltip">Dart</span></div>
                </div>
                <div className="moving-light"></div>
              </div>

              {/* Center Profile Photo */}
              <motion.div 
                className="about-image-container"
                style={{
                  rotateX: shouldReduceMotion ? 0 : rotateX,
                  rotateY: shouldReduceMotion ? 0 : rotateY,
                  transformStyle: "preserve-3d"
                }}
              >
                <div className="about-image">
                  <img src={aboutImage} alt="Muhammad Iqbal Fadila - Profile" style={{ transform: "translateZ(30px)" }} loading="lazy" />
                  <div className="image-overlay" style={{ transform: "translateZ(40px)" }}></div>
                  <div className="about-image-glow" style={{ transform: "translateZ(-20px)" }}></div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="about-text"
          >
            <h3 className="about-greeting">Hi, I'm Muh Iqbal</h3>

            <p className="about-desc">
              Saya mahasiswa Teknik Rekayasa Perangkat Lunak yang sedang mengembangkan kemampuan di bidang web dan mobile development. Saya memiliki pengalaman mengerjakan berbagai proyek akademik menggunakan Laravel, Flutter, PHP, MySQL, dan JavaScript. Saat ini saya terus memperkuat pemahaman dasar pemrograman dan software development melalui proyek dan proses belajar.
            </p>

            <div className="about-traits">
              <div className="trait-item">
                <FaCode className="trait-icon" />
                <div className="trait-content">
                  <h4>Web Development</h4>
                  <p>Mengembangkan aplikasi web menggunakan PHP, Laravel, MySQL, HTML, CSS, dan JavaScript melalui berbagai proyek akademik.</p>
                </div>
              </div>

              <div className="trait-item">
                <FaLaptopCode className="trait-icon" />
                <div className="trait-content">
                  <h4>Mobile Development</h4>
                  <p>Mengembangkan aplikasi mobile menggunakan Flutter dan Dart serta mempelajari pengelolaan state dan integrasi API.</p>
                </div>
              </div>

              <div className="trait-item">
                <FaLightbulb className="trait-icon" />
                <div className="trait-content">
                  <h4>Learning & Problem Solving</h4>
                  <p>Terbiasa mempelajari teknologi baru melalui proyek, mencari solusi ketika menemukan masalah, dan terus memperkuat dasar pemrograman.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;