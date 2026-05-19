import { motion } from 'framer-motion';
import Style from '../Home.module.css';

const SKILLS = [
  { name: 'React', icon: 'fa-brands fa-react', color: '#61dafb' },
  { name: 'Angular', icon: 'fa-brands fa-angular', color: '#dd0031' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#5fa04e' },
  { name: 'Laravel', icon: 'fa-brands fa-laravel', color: '#ff2d20' },
  { name: 'PHP', icon: 'fa-brands fa-php', color: '#777bb4' },
  { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' },
  { name: 'AWS EC2', icon: 'fa-brands fa-aws', color: '#ff9900' },
  { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#7952b3' },
  { name: 'Github', icon: 'fa-brands fa-github', color: '#ffffff' },
];

const Two = () => {
  return (
    <section className={Style.skills} id="skill">
      <div className="container">
        <div className={Style.sectionHead}>
          <span className={Style.eyebrow}>Toolkit</span>
          <h2 className={Style.sectionTitle}>
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className={Style.sectionLead}>
            We put your ideas and your wishes into the form of a unique web
            project that inspires you and your customers.
          </p>
        </div>

        <div className={Style.skillsGrid}>
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className={Style.skillCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
            >
              <div
                className={Style.skillIcon}
                style={{ color: skill.color }}
              >
                <i className={skill.icon} />
              </div>
              <h3 className={Style.skillName}>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Two;
