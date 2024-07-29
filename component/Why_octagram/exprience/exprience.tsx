import React from 'react'
import { motion } from 'framer-motion';
import Style from '../One/one.module.css';

const exprience = () => {
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
                                        <h1>Experience <br />
                                        </h1>


                                    </div>
                                </div>

                            </motion.div>

                            <div className={Style.heading_two}>
                                {/* <h2>FOUNDATIONAL DIFFERENCE</h2> */}
                                {/* <h3>
                                Expertise</h3> */}

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={Style.card}>
                                            <div className={Style.one}>
                                                <div className={Style.img}>
                                                    <img src="Platform1.svg" alt="" />
                                                </div>
                                                <h4>Frontend Developer (2021-2022)
                                                    Gotmyhost - Dhaka</h4>
                                            </div>

                                            <div className={Style.two}>
                                                <p>As frontend developer, I specialize in building responsive web applications using React and Next.js. I focus on creating user-friendly interfaces that adapt seamlessly to different devices and screen sizes.</p>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={Style.card}>
                                            <div className={Style.one}>
                                                <div className={Style.img}>
                                                    <img src="Platform1.svg" alt="" />
                                                </div>
                                                <h4>Full Stack Web Developer (2022 - 2024)
                                                    Ryven.co - Dhaka
                                                </h4>
                                            </div>

                                            <div className={Style.two}>
                                                <p>Contributed to developing multiple web applications using Laravel,
                                                    React, Tailwind, and Bootstrap.
                                                    I have integrated several payment gateways including Stripe, SSL,
                                                    Paypal, and bkash.</p>


                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <motion.div
                                initial={{ y: 100, opacity: 0, }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeOut", duration: 0.6 }}>
                                <div className={Style.heading_one}>
                                    <div className="row mt-3">
                                        <h1 className='mt-5'>Education <br />
                                        </h1>


                                    </div>
                                </div>

                            </motion.div>

                            <div className={Style.heading_two}>
                                {/* <h2>FOUNDATIONAL DIFFERENCE</h2> */}
                                {/* <h3>
                                Expertise</h3> */}

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={Style.card}>
                                            <div className={Style.one}>
                                                <div className={Style.img}>
                                                    <img src="https://pgc.studentpay.net/public/storage/upload/conf/230714010408_9770yvtzgqhbqcfog3ilnewqulrtqszrq0y5o0jiicyu.png" alt="" />
                                                </div>
                                                <h4 className='ms-2'>Higher Secondary School Certificate-HSC (2019-2023)                                                
                                                    </h4>
                                            </div>

                                            <div className={Style.two}>
                                                <h4 className='ms-3'>Pangsa govt college <br/>   Location - Pangsa,Rajbari <br/> GPA-3.75 </h4>
                                               
                                              

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={Style.card}>
                                            <div className={Style.one}>
                                                <div className={Style.img}>
                                                    <img src="https://uoda.edu.bd/public/images/logo.png" alt="" />
                                                </div>
                                                <h4 className='ms-2'>Bachelor of Computer Science-BSC (2019-2023)
                                                    
                                                </h4>
                                            </div>

                                            <div className={Style.two}>
                                            <h4 className='ms-3'>University of development alternative(UODA) <br/>   Location - Dhanmondi,Dhaka <br/> GPA-3.75CGPA-3.14
                                            </h4>

                                            </div>
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

export default exprience