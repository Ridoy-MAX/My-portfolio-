import React from 'react'
import { motion } from 'framer-motion';
import Style from '../Home.module.css'
import Link from 'next/link';
const One = () => {
  return (
    <div>
      <div className="row mt-5">
        <div className="col-md-6">
          <motion.div
            initial={{ y: 100, opacity: 0, }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.6 }}

            className={Style.home_section_one}>
            <h1>I am Ridoy</h1>
            {/* <h2>Continuous</h2> */}
            <h2>Full Stack </h2>
            <h2>Web Developer</h2>
            <p>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>


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







          </motion.div>
        </div>
        <div className="col-md-6">
          <div className={Style.photo_my}>
            <img src="me.jpg" alt="" className={Style.my_image} />

          </div>

        </div>

      </div>
    </div>
  )
}

export default One