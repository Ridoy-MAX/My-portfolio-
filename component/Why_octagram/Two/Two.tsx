import React from 'react'
import { motion } from 'framer-motion';
import Style from './two.module.css';
import Link from 'next/link';

const Two = () => {
    return (
        <div>
            <div className={Style.why_section_two}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <div className={Style.heading_one}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={Style.card}>
                                            <h1>Two hackers and a laptop
                                                have you covered. Right?</h1>

                                            <div className={Style.one}>
                                                <img src="why.webp" alt="" />
                                                <p>We didn’t think so. One-off pentests can’t keep up with constantly evolving cyberthreats. Our platform connects you with vetted, elite security researchers on the SRT, whose diversity, technical chops and creativity set them apart from the pack. Our Vulnerability Operations team reviews reports to eliminate noise and tease out actionable insights to demonstrably improve your security posture over time.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">

                                    </div>
                                    <div className="col-md-6">
                                        <div className={Style.card}>
                                            <h1>Actionable reports at your
                                                fingertips</h1>

                                            <div className={Style.one}>
                                                <img src="why2.webp" alt="" />
                                                <p>We didn’t think so. One-off pentests can’t keep up with constantly evolving cyberthreats. Our platform connects you with vetted, elite security researchers on the SRT, whose diversity, technical chops and creativity set them apart from the pack. Our Vulnerability Operations team reviews reports to eliminate noise and tease out actionable insights to demonstrably improve your security posture over time.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={Style.card}>
                                            <h1>A quicker way to pentest</h1>

                                            <div className={Style.one}>
                                                <img src="why3.webp" alt="" />
                                                <p>We didn’t think so. One-off pentests can’t keep up with constantly evolving cyberthreats. Our platform connects you with vetted, elite security researchers on the SRT, whose diversity, technical chops and creativity set them apart from the pack. Our Vulnerability Operations team reviews reports to eliminate noise and tease out actionable insights to demonstrably improve your security posture over time.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className={Style.heading_two}>
                <div className="row">
                    <div className="col-md-10 m-auto">
                    <h1>Ready to level up your security strategy?</h1>
                    <div className={Style.one}>
                        <Link href="#" className={Style.button}>
                            Talk to us now
                        </Link>
                    </div>
                    </div>
                  
                </div>
            </div>
            </div>

         
        </div>
    )
}

export default Two