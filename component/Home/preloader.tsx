// Preloader.js
import React from "react";
import { motion } from "framer-motion";
import Style from "./Home.module.css";

const Preloader = () => {
  return (
    <div className={Style.preloader}>
      <motion.div
        className={Style.spinner}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <h2 className={Style.text}>Loading...</h2>
    </div>
  );
};

export default Preloader;
