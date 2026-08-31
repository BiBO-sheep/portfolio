import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss, SiJavascript, SiPhp, SiLaravel, 
  SiMysql, SiFlutter, SiDart 
} from "react-icons/si";
import { FaCode, FaCubes } from "react-icons/fa";
import "./Skills.css";

function Skills() {
  const toolkit = [
    {
      category: "Backend & Database",
      desc: "Arsitektur server dan manajemen data yang skalabel.",
      skills: [
        { name: "PHP", icon: <SiPhp className="skill-icon" /> },
        { name: "Laravel", icon: <SiLaravel className="skill-icon" /> },
        { name: "MySQL", icon: <SiMysql className="skill-icon" /> },
      ]
    },
    {
      category: "Frontend Development",
      desc: "Merancang interaksi visual dan antarmuka pengguna.",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="skill-icon" /> },
        { name: "Livewire", icon: <FaCubes className="skill-icon" /> },
        { name: "HTML5", icon: <SiHtml5 className="skill-icon" /> },
        { name: "CSS3", icon: <SiCss className="skill-icon" /> },
      ]
    },
    {
      category: "Mobile Engineering",
      desc: "Pengembangan aplikasi lintas platform native-like.",
      skills: [
        { name: "Flutter", icon: <SiFlutter className="skill-icon" /> },
        { name: "Dart", icon: <SiDart className="skill-icon" /> },
        { name: "GetX", icon: <FaCode className="skill-icon" /> },
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="section-header-editorial"
        >
          <span className="section-number">03 //</span>
          <h2 className="section-title">DEVELOPER TOOLKIT</h2>
        </motion.div>

        <div className="toolkit-grid">
          {toolkit.map((section, idx) => (
            <motion.div 
              className={`toolkit-section section-${idx}`} 
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
            >
              <div className="toolkit-header">
                <h3>{section.category}</h3>
                <p>{section.desc}</p>
              </div>
              
              <div className="toolkit-items">
                {section.skills.map((skill) => (
                  <div className="toolkit-item" key={skill.name}>
                    <div className="toolkit-icon-wrapper" aria-hidden="true">
                      {skill.icon}
                    </div>
                    <span className="toolkit-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;