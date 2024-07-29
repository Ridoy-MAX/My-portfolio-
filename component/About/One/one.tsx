import React from 'react'
import { motion } from 'framer-motion';
import Style from './one.module.css';
import Link from 'next/link';
const one = () => {
    return (
        <div>
            <div className={Style.About_section_one}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className={Style.Heading_one}>
                                <div className="row">

                                    <div className="col-md-6">

                                        <motion.div
                                            initial={{ y: 100, opacity: 0, }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ ease: "easeOut", duration: 0.6 }}>
                                            <h1>About Me</h1>
                                            {/* <h2>Trust in a name</h2> */}
                                            <p>With three years of development experience, I excel in creating robust web applications. Skilled in PHP, RESTful APIs, Eloquent ORM, and authentication systems, I ensure seamless front-end and back-end integration. My expertise includes performance optimization, debugging, and Git version control, delivering high-quality, client-focused solutions
                                                I love to Develop interesting and unique design. I also like to challenge myself to learn new things And I crave for new experiences And Challenges.
                                            </p>


                                        </motion.div>


                                        <div className='mt-5'>

                                            <div className={Style.social_link}>
                                                <div className={Style.one}>
                                                    <motion.a
                                                        initial={{ opacity: 0, scale: 0.5 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 1 }}
                                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}

                                                        className={Style.buttion_primary} >

                                                        <h6>Download CV <i className="fa-solid fa-download"></i> </h6>

                                                    </motion.a>
                                                </div>
                                                <div className={Style.two}>
                                                    <div className={Style.icon}>
                                                        <a href=""> <i className="fa-brands fa-linkedin-in"></i></a>

                                                    </div>
                                                    <div className={Style.icon}>
                                                        <a href=""> <i className="fa-brands fa-whatsapp"></i></a>

                                                    </div>
                                                    <div className={Style.icon}>
                                                        <a href=""> <i className="fa-brands fa-github"></i></a>

                                                    </div>
                                                    <div className={Style.icon}>
                                                        <a href=""> <i className="fa-solid fa-at"></i></a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mt-5">
                                        <div className={Style.photo_my}>
                                            <img src="me.jpg" alt="" className={Style.my_image} />

                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default one