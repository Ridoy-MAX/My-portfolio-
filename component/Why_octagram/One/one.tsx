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
                                        <h1>Why <br />
                                            Octagram</h1>
                                        <h2>Better security testing that’s always <br /> on offense</h2>
                                        <p>The Synack Platform provides a more skillful approach to security testing with on-demand access to the best security researchers in the world and automated scanning. We deliver continuous, scalable pentesting to find the vulnerabilities that matter and show improvement of your security posture over time.</p>

                                    </div>
                                </div>

                            </motion.div>

                            <div className={Style.heading_two}>
                                <h2>FOUNDATIONAL DIFFERENCE</h2>
                                <h3>Learn what sets Synack’s pentesting approach apart</h3>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className={Style.card}>
                                            <div className={Style.one}>
                                                <div className={Style.img}>
                                                    <img src="Platform1.svg" alt="" />
                                                </div>
                                                <h4>The Synack Platform</h4>
                                            </div>

                                            <div className={Style.two}>
                                                <p>Experience a better way to pentest with intelligent vulnerability management workflows, automated scanning, on-demand security tasks and convenient integrations. Transform your security testing with the help of 1,500 of the world’s most diverse, skilled and trusted security researchers.</p>

                                                <Link href={''} className={Style.button}>
                                                    Contact Us
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className={Style.card}>
                                            <div className={Style.one}>
                                                <div className={Style.img}>
                                                    <img src="Platform2.svg" alt="" />
                                                </div>
                                                <h4>The Synack Platform</h4>
                                            </div>

                                            <div className={Style.two}>
                                                <p>Experience a better way to pentest with intelligent vulnerability management workflows, automated scanning, on-demand security tasks and convenient integrations. Transform your security testing with the help of 1,500 of the world’s most diverse, skilled and trusted security researchers.</p>

                                                <Link href={''} className={Style.button}>
                                                    Contact Us
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className={Style.card}>
                                            <div className={Style.one}>
                                                <div className={Style.img}>
                                                    <img src="Platform3.svg" alt="" />
                                                </div>
                                                <h4>The Synack Platform</h4>
                                            </div>

                                            <div className={Style.two}>
                                                <p>Experience a better way to pentest with intelligent vulnerability management workflows, automated scanning, on-demand security tasks and convenient integrations. Transform your security testing with the help of 1,500 of the world’s most diverse, skilled and trusted security researchers.</p>

                                                <Link href={''} className={Style.button}>
                                                    Contact Us
                                                </Link>

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