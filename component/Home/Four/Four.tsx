import React, { useState } from 'react';
import styles from '../Home.module.css'; // Import CSS module styles
import SliderRed from '../Four/Slider_red';
import ProjectCard from '../Four/ProjectCard/ProjectCard'; // Import the ProjectCard component
import Link from 'next/link';

// Define the type for a single skill
interface Skill {
    name: string;
    iconClass: string;
}

// Define the type for a project
interface Project {
    imageSrc: string;
    title: string;
    description: string;
    previewLink: string;
    skills: Skill[];
}

const Four = () => {
    const [activeTab, setActiveTab] = useState('cyber'); // Default active tab

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    // laravel project
    const projects: Project[] = [
        {
            imageSrc: 'project-one.png',
            title: 'The Unique Network',
            description:
                'This is a SaaS platform where users create accounts with a subscription. They can complete daily tasks to earn money, which can be used to buy products on the website. Users can also earn money by referring others.',
            previewLink: 'https://www.theuniquenetwork.store/',
            skills: [
                { name: 'Laravel', iconClass: 'fa-brands fa-laravel' },
                { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
                { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
            ],
        },
        // Add more projects here as needed
        {
            imageSrc: 'project-two.png',
            title: 'Virtual Bones',
            description:
                'With an intuitive interface and powerful features, Virtual Bones is designed to drive efficiency in fracture management',
            previewLink: 'https://virtualbones.com/',
            skills: [
                { name: 'Laravel', iconClass: 'fa-brands fa-laravel' },
                { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
                { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
            ],
        },
        // Add more projects here as needed
        {
            imageSrc: 'project-three.png',
            title: 'Seeking Massages',
            description:
                'SeekingMassages Inc serves as a bridge connecting clients and massage therapists, offering benefits to both parties',
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
                'This is an art marketplace where users can buy and sell customized art. They can also send proposals for customizations.',
            previewLink: 'https://commzy.sifztech.com/',
            skills: [
                { name: 'Laravel', iconClass: 'fa-brands fa-laravel' },
                { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
                { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
            ],
        },

    ];
    // frontend project
    const front_projects: Project[] = [
        {
            imageSrc: 'front-project-one.png',
            title: 'Octagram Limited',
            description:
                'This is a company portfolio that offers penetration testing and vulnerability management. We identify your most critical vulnerabilities and monitor your progress over time.',
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
                'This is an online game streaming platform where gamers can play and stream their games. They can also interact with viewers through features like super chat.',
            previewLink: 'https://game-network.vercel.app/',
            skills: [
               
                { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
                { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
            ],
        },
 
        {
            imageSrc: 'front-project-two.png',
            title: 'Pepesync ',
            description:
                'Solution & work',
            previewLink: 'https://game-kyby-git-main-ridoymaxs-projects.vercel.app/',
            skills: [
                { name: 'React', iconClass: 'fa-brands fa-react' },
                { name: 'TypeScript', iconClass: 'fa-brands fa-js' },
                { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
            ],
        },
        {
            imageSrc: 'front-project-four.png',
            title: 'Orbital ',
            description:
                'Digital Consulting Agency.Unique Business Consulting.',
            previewLink: 'https://ridoy-max.github.io/orbital/',
            skills: [
            
                { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
                { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
            ],
        },
        {
            imageSrc: 'front-project-six.png',
            title: 'Influencer ',
            description:
                ' A beauty and lifestyle influencer portfolio.',
            previewLink: 'https://ridoy-max.github.io/influencer/index.html',
            skills: [
            
                { name: 'JavaScript', iconClass: 'fa-brands fa-js' },
                { name: 'Bootstrap', iconClass: 'fa-brands fa-bootstrap' },
            ],
        },

    ];

    return (
        <div>
            <div className={styles.home_section_four} id="work">
                {/* Use styles.home_section_four */}
                <div className={styles.head}>
                    <h1 className="text-center">My Recent Works</h1>
                </div>
                <div className={styles.tab}>
                    <button
                        className={`${activeTab === 'cyber' ? styles.activeButton : ''}`}
                        onClick={() => handleTabClick('cyber')}
                    >
                        Laravel Project
                    </button>
                    <button
                        className={`${activeTab === 'red' ? styles.activeButton : ''}`}
                        onClick={() => handleTabClick('red')}
                    >
                        Frontend Design
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'cyber' && (
                        <div className={`${styles.cyber} ${styles.red}`}>
                            <div className="container">
                                <div className="row">
                                    {projects.map((project, index) => (
                                        <ProjectCard
                                            key={index}
                                            imageSrc={project.imageSrc}
                                            title={project.title}
                                            description={project.description}
                                            previewLink={project.previewLink}
                                            skills={project.skills}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'red' && (
                        <div className={styles.red}>
                            <div className="container">
                                <div className="row">
                                {front_projects.map((project, index) => (
                                        <ProjectCard
                                            key={index}
                                            imageSrc={project.imageSrc}
                                            title={project.title}
                                            description={project.description}
                                            previewLink={project.previewLink}
                                            skills={project.skills}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Four;
