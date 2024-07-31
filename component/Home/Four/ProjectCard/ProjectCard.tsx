import React, { useState } from 'react';
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
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="col-md-4">
      <div className={styles.card_project}>
        {/* Preloader */}
        {!imageLoaded && (
          <div className={styles.image_preloader}>
            <div className={styles.spinner}></div>
          </div>
        )}
        
        {/* Image */}
        <img
          src={imageSrc}
          alt={title}
          className={`${styles.project_image} ${imageLoaded ? styles.image_visible : styles.image_hidden}`}
          onLoad={handleImageLoad}
        />

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
