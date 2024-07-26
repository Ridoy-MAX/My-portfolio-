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
                                            <h1>About </h1>
                                            <h2>Trust in a name</h2>
                                            <p>The name Synack comes from a cornerstone of cybersecurity. The “three-way handshake” used to establish trusted network connections has synchronize and acknowledge steps for transferring information between sender and receiver. In that constant flow of data, we saw the potential to unite technology and human intelligence in a different kind of handshake that would revolutionize the cybersecurity world: <strong>Octagram</strong>.</p>


                                        </motion.div>
                                    </div>

                                    <div className="col-md-6 mt-5">
                                        <div className={Style.photo_my}>
                                            <img src="me.jpeg" alt="" className={Style.my_image} />

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