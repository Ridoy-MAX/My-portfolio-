import React from 'react'
import { motion } from 'framer-motion';
import Style from './one.module.css';


import Link from 'next/link';

const one = () => {
    return (
        <div>
            <div className={Style.why_section_one}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <motion.div
                                initial={{ y: 100, opacity: 0, }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeOut", duration: 0.6 }}>
                                <div className={Style.heading_one}>
                                    <div className="row">
                                        <h1>Expertise <br />
                                            </h1>
                                  

                                    </div>
                                </div>

                            </motion.div>

                            <div className={Style.heading_two}>
                                {/* <h2>FOUNDATIONAL DIFFERENCE</h2> */}
                                {/* <h3>
                                Expertise</h3> */}

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className={Style.card}>
                                            <div className={Style.one}>
                                                <div className={Style.img}>
                                                    <img src="Platform1.svg" alt=""  />
                                                </div>
                                                <h4>Problem Solving</h4>
                                            </div>

                                            <div className={Style.two}>
                                                <p>Hone analytical skills and boost coding proficiency with problem solving and competitive programming.</p>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className={Style.card}>
                                            <div className={Style.one}>
                                                <div className={Style.img}>
                                                    <img src="Platform2.svg" alt="" />
                                                </div>
                                                <h4>Project Management</h4>
                                            </div>

                                            <div className={Style.two}>
                                                <p>Understanding project management tools like JIRA, Trello, or Asana for task tracking and project planning.</p>

                                               

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className={Style.card}>
                                            <div className={Style.one}>
                                                <div className={Style.img}>
                                                    <img src="Platform3.svg" alt="" />
                                                </div>
                                                <h4>Frontend Development</h4>
                                            </div>

                                            <div className={Style.two}>
                                                <p>Responsive Design: Techniques like media queries, flexible grids, and fluid images to ensure applications work on various devices.</p>

                                              

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className={Style.card}>
                                            <div className={Style.one}>
                                                <div className={Style.img}>
                                                    <img src="Platform3.svg" alt="" />
                                                </div>
                                                <h4>Leadership</h4>
                                            </div>

                                            <div className={Style.two}>
                                                <p>
                                                Lead a team of bright minds to solve technical, business and comprehensive problems.
                                                </p>

                                              

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className={Style.card}>
                                            <div className={Style.one}>
                                                <div className={Style.img}>
                                                    <img src="Platform3.svg" alt="" />
                                                </div>
                                                <h4>Team Work</h4>
                                            </div>

                                            <div className={Style.two}>
                                                <p>
                                                A character that forms a formidable collaboration with team members to deliver great product.
                                                </p>

                                              

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className={Style.card}>
                                            <div className={Style.one}>
                                                <div className={Style.img}>
                                                    <img src="Platform3.svg" alt="" />
                                                </div>
                                                <h4>Backend Development</h4>
                                            </div>

                                            <div className={Style.two}>
                                                <p>
                                                RESTful Services: Designing and consuming REST APIs for efficient client-server communication.
                                                </p>

                                              

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>



        </div >
    )
}

export default one