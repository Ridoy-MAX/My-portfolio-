import React from 'react';
import styles from '../../Home.module.css'; // Import CSS module styles

// Define the type for a single skill
interface Skill {
  name: string;
  iconClass: string;
}

// Define the type for the component's props
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
  return (
    <div className="col-md-4">
      <div className={styles.card_project}>
        <img src={imageSrc} alt={title} className={styles.project_image} />
        <div className={styles.card_details}>
          <h2>{title}</h2>
          <p>{description}</p>

          <div className={styles.preview_details}>
            <div className={styles.preview}>
              <a
                className={styles.button}
                href={previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            </div>

            <div className={styles.skills}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.card_skill}>
                  <i className={skill.iconClass}></i> {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
