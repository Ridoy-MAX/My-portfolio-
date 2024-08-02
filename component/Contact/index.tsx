import React, { useState } from 'react'
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Style from './contact.module.css';
import Link from 'next/link';
import Experties from '../Why_octagram/One/one'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs.send(
            'service_wpnqlsg', // Replace with your EmailJS service ID
            'template_27bkvxe', // Replace with your EmailJS template ID
            formData,
            'OB7CXWdJSzwKt9lD0' // Replace with your EmailJS user ID
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }, (err) => {
            console.log('FAILED...', err);
            alert('Failed to send message. Please try again later.');
        });

        // Reset form data
        setFormData({
            fullName: '',
            email: '',
            subject: '',
            message: ''
        });
    };

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
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ ease: "easeOut", duration: 0.6 }}>
                                        <div className={Style.contact_left}>
                                            <h1 className='mb-3'>Get in Touch</h1>
                                            <form className={Style.from} onSubmit={handleSubmit}>
                                                <div className={Style.from_control}>
                                                    <p>Full Name</p>
                                                    <div className={Style.input}>
                                                        <input 
                                                            type="text" 
                                                            id="fullName" 
                                                            name="fullName"
                                                            value={formData.fullName}
                                                            onChange={handleChange}
                                                            required 
                                                        />
                                                    </div>
                                                </div>
                                                <div className={Style.from_control}>
                                                    <p>Email address</p>
                                                    <div className={Style.input}>
                                                        <input 
                                                            type="email" 
                                                            id="email" 
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            required 
                                                        />
                                                    </div>
                                                </div>
                                                <div className={Style.from_control}>
                                                    <p>Subject</p>
                                                    <div className={Style.input}>
                                                        <input 
                                                            type="text" 
                                                            id="subject" 
                                                            name="subject"
                                                            value={formData.subject}
                                                            onChange={handleChange}
                                                            required 
                                                        />
                                                    </div>
                                                </div>
                                                <div className={Style.from_control}>
                                                    <p>Message</p>
                                                    <div className={Style.input}>
                                                        <textarea 
                                                            id="message" 
                                                            name="message"
                                                            rows={3} 
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            required 
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <button type="submit" className={Style.send}>
                                                    <h6 className='mb-0'>Send</h6>
                                                </button>
                                            </form>



                                        </div>
                                    </motion.div>
                                </div>
                                <div className="col-md-5">
                                    <div className={Style.contact_right}>
                                        <div className='mt-5'>
                                            <div className={Style.social_link}>
                                                <div className={Style.one}></div>
                                                <div className={Style.two}>
                                                    <div className={Style.icon_box}>
                                                        <div className={Style.icon}>
                                                            <a href=""><i className="fa-solid fa-envelope"></i></a>
                                                        </div>
                                                        <a>pou4w98y@gmail.com</a>
                                                    </div>
                                                    <div className={Style.icon_box}>
                                                        <div className={Style.icon}>
                                                            <a href=""><i className="fa-solid fa-phone-volume"></i></a>
                                                        </div>
                                                        <a>+8801717311750</a>
                                                    </div>
                                                    <div className={Style.icon_box}>
                                                        <div className={Style.icon}>
                                                            <a href=""><i className="fa-solid fa-location-dot"></i></a>
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
    );
}

export default Contact;











