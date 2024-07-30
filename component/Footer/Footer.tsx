import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import logo from '../../public/c1.png'
import logo1 from '../../public/oc2.png'
import Style from '../Footer/Footer.module.css'
const Footer = () => {
    return (
        <div>
            <div className={Style.footer}>
                <div className='container-fluid' >
                    <div className={Style.footer_head}>
                        <div className="row">
                            <div className="col-md-2 d-flex justify-content-center">

                            </div>
                            <div className="col-md-9 d-flex justify-content-end">

                            </div>
                        </div>
                    </div>

                    <div className={Style.footer_body}>
                        <div className="row">
                            <div className="col-md-2 d-flex justify-content-center">
                                <Link href="/" className={Style.footer_logo}>


                                    <div className={Style.logo_email}>
                                        <i className="fa-solid fa-at"></i>
                                        <p>pou4w98y@gmail.com</p>

                                    </div>

                                </Link>
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className={Style.content}>
                                            <div className={Style.one}>
                                                <Link href="/" >
                                                    <h2>Home</h2>

                                                </Link>




                                            </div>

                                            <div className={Style.one}>
                                                <Link href="/#work" >

                                                    <h2>Works</h2>

                                                </Link>



                                            </div>
                                            <div className={Style.one}>

                                                <Link href="/#skill" >
                                                    <h2>Skills</h2>


                                                </Link>


                                            </div>
                                            <div className={Style.one}>
                                                <Link href="/exprience" >
                                                    <h2>
                                                        Experience</h2>

                                                </Link>

                                            </div>
                                            <div className={Style.one}>
                                                <Link href="/about" >

                                                    <h2>
                                                        About</h2>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-around">


                                        <div className={Style.footer_contact2}>
                                            <div className={Style.one}>


                                                <div className={Style.link}>
                                                    <Link href="/contact" className={Style.buttton}>
                                                        Contact
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <h6>© 2023 Ridoy Hasan</h6>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default Footer