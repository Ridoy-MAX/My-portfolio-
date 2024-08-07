import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Five from "../Home/Five/Five";
import Four from "../Home/Four/Four";
import Three from "../Home/Three/Three";
import Two from "../Home/two/two";
import One from "../Home/One/One";
import Style from "./Home.module.css";
import Preloader from "./preloader"; // Import the Preloader component

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set a 2-second delay before removing the preloader

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />

          <div className="container-fluid">
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

          <div className="container">
            <Two />
          </div>

     
          <Four />
          <Five />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
