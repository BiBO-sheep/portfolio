import { motion } from "framer-motion";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import "./Projects.css";
import bixboStoreImage from "../assets/bixbo-store.png";
import klinikImage from "../assets/klinik.png";

function Projects() {
  const projects = [
    {
      title: "BixBO Store",
      description: "E-Commerce berbasis web yang saya kembangkan untuk mengelola produk, keranjang belanja, checkout, pesanan, dan berbagai fitur toko online.",
      tech: ["PHP", "Laravel", "Livewire", "MySQL"],
      link: "",
      github: "https://github.com/BiBO-sheep/250458302004-Muhammad-Iqbal-Fadila-TRPL-M-BIxBO-Store",
      year: "2025",
      image: bixboStoreImage
    },
    {
      title: "Klinik App dan Web",
      description: "Sistem manajemen klinik terintegrasi yang terdiri dari aplikasi mobile dan platform web untuk mempermudah administrasi serta pelayanan pasien.",
      tech: ["PHP", "Laravel", "Flutter", "MySQL"],
      link: "",
      githubs: [
        { link: "https://github.com/BiBO-sheep/gnb-care-clinic", label: "GitHub Web" },
        { link: "https://github.com/BiBO-sheep/gandb_care_clinic", label: "GitHub App" }
      ],
      year: "2026",
      image: klinikImage
    },
    {
      title: "Qurban Web Management",
      description: "Sistem manajemen berbasis web untuk membantu proses pengelolaan data dan kebutuhan administrasi kegiatan Qurban secara lebih terstruktur.",
      tech: ["PHP", "Laravel", "Livewire", "MySQL"],
      link: "",
      github: "https://github.com/BiBO-sheep/qurban-app-management",
      year: "2026"
    },
    {
      title: "School System Management",
      description: "Sistem informasi manajemen sekolah yang dikembangkan untuk memfasilitasi administrasi, pengelolaan data siswa, dan operasional akademik secara terintegrasi.",
      tech: ["PHP", "Laravel", "MySQL"],
      link: "",
      github: "https://github.com/BiBO-sheep/student-management",
      year: "2026"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="section-header-editorial"
        >
          <span className="section-number">02 //</span>
          <h2 className="section-title">SELECTED WORK</h2>
        </motion.div>

        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div 
              className="project-row" 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            >
              <div className="project-visual">
                {project.image ? (
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="image-overlay"></div>
                  </div>
                ) : (
                  <div className="project-image-placeholder">
                    <span className="placeholder-text">{project.title}</span>
                    <div className="image-overlay"></div>
                  </div>
                )}
              </div>

              <div className="project-info">
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <div className="project-tech-stack">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-links">
                  {project.link && (
                    <a href={project.link} className="project-link-primary" target="_blank" rel="noopener noreferrer">
                      <span>View Case Study</span>
                      <FaArrowRight className="arrow-icon" />
                    </a>
                  )}
                  {project.githubs ? (
                    project.githubs.map((gh, i) => (
                      <a key={i} href={gh.link} className="project-link-icon" aria-label={gh.label} title={gh.label} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} />
                      </a>
                    ))
                  ) : (
                    project.github && (
                      <a href={project.github} className="project-link-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} />
                      </a>
                    )
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

export default Projects;