import React from 'react'
import { motion } from 'framer-motion';
import Style from './contact.module.css';
import Link from 'next/link';
import Experties from '../Why_octagram/One/one'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const index = () => {
    return (
        <div>
            <Navbar />
            <div className={Style.contact}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-7">
                                    <motion.div
                                        initial={{ y: 100, opacity: 0, }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeOut", duration: 0.6 }}>
                                        <div className={Style.contact_left}>
                                            <h1 className='mb-3'>Get in Touch</h1>
                                            {/* <h2>Let us know how we can help.</h2> */}

                                            <div className={Style.from}>

                                                <div className={Style.from_control}>
                                                    <p>Full Name</p>
                                                    <div className={Style.input}>
                                                        <input type="text" id="exampleFormControlInput1" />
                                                    </div>

                                                </div>
                                                <div className={Style.from_control}>
                                                    <p>Email address</p>
                                                    <div className={Style.input}>
                                                        <input type="text" id="exampleFormControlInput1" />
                                                    </div>

                                                </div>
                                                <div className={Style.from_control}>
                                                    <p>Subject</p>
                                                    <div className={Style.input}>
                                                        <input type="text" id="exampleFormControlInput1" />
                                                    </div>

                                                </div>
                                                <div className={Style.from_control}>
                                                    <p>Message</p>
                                                    <div className={Style.input}>
                                                        <textarea id="exampleFormControlTextarea1" rows={3}></textarea>
                                                    </div>

                                                </div>


                                                <Link href="#" className={Style.send}>
                                                    <h6 className='mb-0'>Send </h6>
                                                </Link>

                                            </div>

                                        </div>

                                    </motion.div>
                                </div>
                                <div className="col-md-5">
                                    <div className={Style.contact_right}>
                                        <div className='mt-5'>

                                            <div className={Style.social_link}>
                                                <div className={Style.one}>

                                                </div>
                                                <div className={Style.two}>
                                                    <div className={Style.icon_box}>
                                                        <div className={Style.icon}>
                                                            <a href=""> <i className="fa-solid fa-envelope"></i></a>


                                                        </div>
                                                        <a>pou4w98y@gmail.com</a>
                                                    </div>


                                                    <div className={Style.icon_box}>
                                                        <div className={Style.icon}>
                                                            <a href=""> <i className="fa-solid fa-phone-volume"></i> </a>
                                                        </div>
                                                        <a>+8801717311750</a>
                                                    </div>
                                                    <div className={Style.icon_box}>
                                                        <div className={Style.icon}>
                                                        <a href=""> <i className="fa-solid fa-location-dot"></i> </a>
                                                        </div>
                                                        <a>Mohammadpur,Dhaka</a>
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
            </div>

            <Experties />
            <Footer />
        </div>
    )
}

export default index