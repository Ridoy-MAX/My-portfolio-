import React from 'react'
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import One from '../About/One/one'
import Experties from '../Why_octagram/One/one'
import Four from '../Home/Four/Four'
// import Two from '../Home/two/two'
import Five from '../Home/Five/Five'
// import Two from '../Why_octagram/Two/Two'

const About = () => {
  return (
    <div>
           <Navbar />
    
             
                <One />
                <Four />
                <Five />
                <Footer />
    </div>
  )
}

export default About