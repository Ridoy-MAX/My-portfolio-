import React from 'react'
import { motion } from 'framer-motion';
import Style from '../Home.module.css'
const two = () => {
    return (
        <div>
            <div className="row">
                <div className={Style.home_section_two} id='skill'>
                    <div className={Style.head}>
                        <h1 className='text-center'>My Skills</h1>
                        <p className='text-center'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                    </div>
                    <div className="container">
                    <div className="row">
                        
                        <div className="col-md-2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                // whileHover={{ scale: 1.1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                className={Style.card}
                            >
                            
                                <div className={Style.php}>
                                <i className="fa-brands fa-php"></i>
                                </div>
                                <h2>PHP</h2>

                            </motion.div>
                        </div>


                        <div className="col-md-2">
                               <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                className={Style.card}
                            >
                            
                                <div className={Style.laravel}>
                                <i className="fa-brands fa-laravel"></i>
                                    {/* <img src="one.svg" alt="" className="template-image b-lazy b-loaded" /> */}
                                </div>
                                <h2>Laravel</h2>
                                </motion.div>
                        </div>
                        <div className="col-md-2">
                               <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                className={Style.card}
                            >
                            
                                <div className={Style.javaScript}>
                                <i className="fa-brands fa-js"></i>
                                </div>
                                <h2>JavaScript</h2>
                                </motion.div>
                        </div>
                        <div className="col-md-2">
                               <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                className={Style.card}
                            >
                            
                                <div className={Style.react}>
                                <i className="fa-brands fa-react"></i>

                                </div>
                                <h2>React</h2>
                                </motion.div>
                        </div>
                        <div className="col-md-2">
                               <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                className={Style.card}
                            >
                            
                                <div className={Style.bootstrap}>
                                <i className="fa-brands fa-bootstrap"></i>
                                </div>
                                <h2>Bootstrap</h2>
                                </motion.div>
                        </div>
                        <div className="col-md-2">
                               <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}
                                className={Style.card}
                            >
                            
                                <div className={Style.github}>
                                <i className="fa-brands fa-github"></i>
                                </div>
                                <h2>Github</h2>
                                </motion.div>
                        </div>




                    </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default two