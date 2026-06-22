import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModernStyle from '../HeroAdvanced.module.css';
import ProjectCard from './ProjectCard/ProjectCard';

interface Skill {
  name: string;
  iconClass: string;
}

interface Project {
  imageSrc: string;
  title: string;
  description: string;
  previewLink: string;
  skills: Skill[];
}

const laravelProjects: Project[] = [
  {
    imageSrc: 'project-one.png',
    title: 'The Unique Network',
    description:
      'A SaaS platform where users create subscriptions, complete daily tasks to earn, spend in the in-app shop, and earn through referrals.',
    previewLink: 'https://www.theuniquenetwork.store/',
    skills: [
      { name: 'Laravel', iconClass: 'fa-brands fa-laravel' },
      { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
      { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
    ],
  },
  {
    imageSrc: 'project-two.png',
    title: 'Virtual Bones',
    description:
      'An intuitive platform designed to drive efficiency in fracture management with powerful tooling for clinicians.',
    previewLink: 'https://virtualbones.com/',
    skills: [
      { name: 'Laravel', iconClass: 'fa-brands fa-laravel' },
      { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
      { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
    ],
  },
  {
    imageSrc: 'project-three.png',
    title: 'Seeking Massages',
    description:
      'A bridge connecting clients and massage therapists with benefits and tooling for both sides of the marketplace.',
    previewLink: 'https://seekingmassages.com/',
    skills: [
      { name: 'Laravel', iconClass: 'fa-brands fa-laravel' },
      { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
      { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
    ],
  },
  {
    imageSrc: 'project-four.png',
    title: 'Commzy.art',
    description:
      'An art marketplace where users buy and sell customized art and send proposals for custom commissions.',
    previewLink: 'https://commzy.sifztech.com/',
    skills: [
      { name: 'Laravel', iconClass: 'fa-brands fa-laravel' },
      { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
      { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
    ],
  },
];

const frontendProjects: Project[] = [
  {
    imageSrc: 'front-project-one.png',
    title: 'Octagram Limited',
    description:
      'A company portfolio offering penetration testing and vulnerability management — surfacing critical issues and tracking progress over time.',
    previewLink: 'https://octagram-git-main-ridoy-max.vercel.app/',
    skills: [
      { name: 'React', iconClass: 'fa-brands fa-react' },
      { name: 'TypeScript', iconClass: 'fa-brands fa-js' },
      { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
    ],
  },
  {
    imageSrc: 'front-project-five.png',
    title: 'Game Network',
    description:
      'An online game streaming platform where gamers play, stream, and interact with viewers through features like super chat.',
    previewLink: 'https://game-network.vercel.app/',
    skills: [
      { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
      { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
    ],
  },
  {
    imageSrc: 'front-project-two.png',
    title: 'Pepesync',
    description: 'Solution & work.',
    previewLink: 'https://game-kyby-git-main-ridoymaxs-projects.vercel.app/',
    skills: [
      { name: 'React', iconClass: 'fa-brands fa-react' },
      { name: 'TypeScript', iconClass: 'fa-brands fa-js' },
      { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
    ],
  },
  {
    imageSrc: 'front-project-four.png',
    title: 'Orbital',
    description: 'Digital Consulting Agency — unique business consulting.',
    previewLink: 'https://ridoy-max.github.io/orbital/',
    skills: [
      { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
      { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
    ],
  },
  {
    imageSrc: 'front-project-six.png',
    title: 'Influencer',
    description: 'A beauty and lifestyle influencer portfolio.',
    previewLink: 'https://ridoy-max.github.io/influencer/index.html',
    skills: [
      { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
      { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
    ],
  },
];

type Tab = 'laravel' | 'frontend';

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    scale: 0.95,
    transition: {
      duration: 0.3,
    },
  },
};

const Four = () => {
  const [tab, setTab] = useState<Tab>('laravel');
  const projects = tab === 'laravel' ? laravelProjects : frontendProjects;

  return (
    <section className={ModernStyle.section} id="work">
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={ModernStyle.sectionTitle}>Featured Work</h2>
          <div className={ModernStyle.accentBar} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '60px',
            flexWrap: 'wrap',
          }}
        >
          <motion.button
            onClick={() => setTab('laravel')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '12px 28px',
              fontSize: '15px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              background:
                tab === 'laravel'
                  ? 'rgba(0, 240, 255, 0.15)'
                  : 'rgba(0, 240, 255, 0.05)',
              color: 'var(--accent)',
              borderBottom:
                tab === 'laravel' ? '2px solid var(--accent)' : 'none',
              transition: 'all 0.3s ease',
            }}
          >
            Backend Projects
          </motion.button>
          <motion.button
            onClick={() => setTab('frontend')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '12px 28px',
              fontSize: '15px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              background:
                tab === 'frontend'
                  ? 'rgba(0, 240, 255, 0.15)'
                  : 'rgba(0, 240, 255, 0.05)',
              color: 'var(--accent)',
              borderBottom:
                tab === 'frontend' ? '2px solid var(--accent)' : 'none',
              transition: 'all 0.3s ease',
            }}
          >
            Frontend Projects
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Four;
