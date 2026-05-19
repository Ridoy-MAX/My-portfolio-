import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../Home.module.css';

interface Skill {
  name: string;
  iconClass: string;
}

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  previewLink: string;
  skills: Skill[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  previewLink,
  skills,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.article
      className={styles.projectCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
    >
      <div className={styles.projectImageWrap}>
        {!imageLoaded && <div className={styles.projectImageSkeleton} />}
        <img
          src={imageSrc}
          alt={title}
          className={`${styles.projectImage} ${imageLoaded ? styles.imageVisible : ''}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <div className={styles.projectImageOverlay}>
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectPreview}
          >
            Live Preview
            <i className="fa-solid fa-arrow-up-right-from-square" />
          </a>
        </div>
      </div>

      <div className={styles.projectBody}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDesc}>{description}</p>
        <div className={styles.projectSkills}>
          {skills.map((skill) => (
            <span key={skill.name} className={styles.projectSkillChip}>
              <i className={skill.iconClass} />
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
