import React from 'react'
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import One from '../Why_octagram/One/one'
import Two from '../Why_octagram/Two/Two'

const index = () => {
  return (
    <div>
                <Navbar />
                <One />
                <Two />
             
                <Footer />
    </div>
  )
}

export default index