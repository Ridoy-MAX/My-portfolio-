import { useState } from 'react';
import styles from '../Home.module.css';
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

const Four = () => {
  const [tab, setTab] = useState<Tab>('laravel');
  const projects = tab === 'laravel' ? laravelProjects : frontendProjects;

  return (
    <section className={styles.work} id="work">
      <div className="container-wide">
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Portfolio</span>
          <h2 className={styles.sectionTitle}>
            My Recent <span className="text-gradient">Works</span>
          </h2>
        </div>

        <div className={styles.tabBar} role="tablist">
          <button
            role="tab"
            aria-selected={tab === 'laravel'}
            className={`${styles.tabBtn} ${tab === 'laravel' ? styles.tabBtnActive : ''}`}
            onClick={() => setTab('laravel')}
          >
            Laravel Projects
          </button>
          <button
            role="tab"
            aria-selected={tab === 'frontend'}
            className={`${styles.tabBtn} ${tab === 'frontend' ? styles.tabBtnActive : ''}`}
            onClick={() => setTab('frontend')}
          >
            Frontend Design
          </button>
        </div>

        <div className={styles.projectsGrid} key={tab}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Four;
