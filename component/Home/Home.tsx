import React from 'react'
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Five from '../Home/Five/Five'
import Four from '../Home/Four/Four'
import Three from '../Home/Three/Three'
import Two from '../Home/two/two'
import One from '../Home/One/One'
import Style from './Home.module.css'
const Home = () => {
    return (
        <div>

            <Navbar />
            {/* <video autoPlay loop muted playsInline className={Style.backround_vedio}>
                <source src="11-04.mp4" type="video/mp4" />
            </video> */}


            <div className="container-fluid ">

                <div className="row">


                    <div className="col-md-2 d-flex justify-content-center">
                        <div className={Style.home_line}>

                            <div className={Style.text}>

                                <i className="fa-solid fa-chevron-down"></i>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-9">


                        <One />
                    
                  
                     


                   


                    </div>
                </div>

            </div>


            <Two />

        
            <Four />
            <Five />
            <Footer />


        </div>
    )
}

export default Home