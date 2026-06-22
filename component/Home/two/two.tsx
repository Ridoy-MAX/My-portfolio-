import { motion } from 'framer-motion';
import Style from '../HeroAdvanced.module.css';

const SKILLS = [
  { name: 'Angular', icon: 'fa-brands fa-angular' },
  { name: 'React', icon: 'fa-brands fa-react' },
  { name: 'Nest.js', icon: 'fa-brands fa-node-js' },
  { name: 'TypeScript', icon: 'fa-brands fa-js' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js' },
  { name: 'Laravel', icon: 'fa-brands fa-laravel' },
  { name: 'AWS', icon: 'fa-brands fa-aws' },
  { name: 'PostgreSQL', icon: 'fa-solid fa-database' },
  { name: 'Docker', icon: 'fa-brands fa-docker' },
  { name: 'Git', icon: 'fa-brands fa-github' },
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 40, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Two = () => {
  return (
    <section className={`${Style.section} ${Style.alternate}`} id="skill">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={Style.sectionTitle}>Tech Stack</h2>
          <div className={Style.accentBar} />
        </motion.div>

        <motion.div
          className={Style.gridContainer}
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              className={Style.card}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <div
                style={{
                  fontSize: '36px',
                  marginBottom: '16px',
                  color: 'var(--accent)',
                }}
              >
                <i className={skill.icon} />
              </div>
              <h3 className={Style.cardTitle}>{skill.name}</h3>
              <p className={Style.cardDescription}>
                Core technology in my daily workflow
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: '80px',
            padding: '40px',
            background: 'rgba(0, 240, 255, 0.05)',
            border: '1px solid rgba(0, 240, 255, 0.2)',
            borderRadius: '12px',
          }}
        >
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: 'rgba(232, 234, 237, 0.9)',
              margin: 0,
            }}
          >
            I specialize in building scalable full-stack applications with modern
            frameworks and robust architectures. From interactive frontend
            experiences to complex backend systems, I approach every project with
            attention to performance, accessibility, and user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Two;
