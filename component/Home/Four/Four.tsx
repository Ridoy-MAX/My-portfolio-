import React, { useState } from 'react';
import styles from '../Home.module.css'; // Import CSS module styles
import SliderRed from '../Four/Slider_red'
import Link from 'next/link';

const Four = () => {
    const [activeTab, setActiveTab] = useState('cyber'); // Default active tab

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className={styles.home_section_four} id='work'> {/* Use styles.home_section_four */}

                <div className={styles.head}>
                    <h1 className='text-center'>My Recent Works</h1>

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

                <div className='tab-content'>
                    {activeTab === 'cyber' && (
                        <div className={`${styles.cyber} ${styles.red}`}>

                            <div className='container' >
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="">
                                            <div className={styles.card_project}>
                                                <img src="project-one.png" alt="" className={styles.project_image} />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="">
                                            <div className={styles.card_project}>
                                                <img src="project-one.png" alt="" className={styles.project_image} />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="">
                                            <div className={styles.card_project}>
                                                <img src="project-one.png" alt="" className={styles.project_image} />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="">
                                            <div className={styles.card_project}>
                                                <img src="project-one.png" alt="" className={styles.project_image} />

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'red' && (
                        <div className={styles.red}>



                            <div className='container' >
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="">
                                            <div className={styles.card_project}>
                                                <img src="project-one.png" alt="" className={styles.project_image} />

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="">
                                            <div className={styles.card_project}>
                                                <img src="project-one.png" alt="" className={styles.project_image} />

                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="col-md-4">
                                        <div className="">
                                            <div className={styles.card_project}>
                                                <img src="project-one.png" alt="" className={styles.project_image} />

                                            </div>
                                        </div>
                                    </div>

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
