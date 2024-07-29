import React from 'react'
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import One from '../Why_octagram/One/one'
import Exprience from '../Why_octagram/exprience/exprience'
import Contact from '../Home/Five/Five'
import Two from '../Home/two/two'
// import Two from '../Why_octagram/Two/Two'

const index = () => {
  return (
    <div>
                <Navbar />
                <Exprience />
                <One />
                <Two />
                <Contact />
                
             
                <Footer />
    </div>
  )
}

export default index