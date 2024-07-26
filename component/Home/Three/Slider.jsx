import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../Home.module.css';

const ProductSlider = () => {
  const mainSliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    vertical: true,  // Set the slider to vertical mode
    verticalSwiping: true,  // Enable vertical swiping
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Number of slides to show at once on medium-sized screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Number of slides to show at once on smaller screens
        },
      },
    ],

  };



  return (
    <div>
      <div className={styles.slider_one}>
        <div className="col-12">
          <Slider {...mainSliderSettings} className="main-slider">

            <div className={styles.item}>
              <div className={styles.img}>
              <img src="slider1.webp" alt="" />
              </div>
              <div className={styles.text}>
                <h2>API & Integrations</h2>
                <p>Real-time and customizable reporting for security teams, CISOs or auditors.</p>
                <div className={styles.button}>
                  <a href="#"> Learn more</a>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.img}>
               <img src="slider2.webp" alt="" />
              </div>
              <div className={styles.text}>
                <h2>Vulnerability Management</h2>
                <p>Real-time and customizable reporting for security teams, CISOs or auditors.</p>
                <div className={styles.button}>
                  <a href="#"> Learn more</a>
                </div>
              </div>
            </div>

            
            <div className={styles.item}>
              <div className={styles.img}>
               <img src="slider3.webp" alt="" />
              </div>
              <div className={styles.text}>
                <h2>Operations & Support</h2>
                <p>Real-time and customizable reporting for security teams, CISOs or auditors.</p>
                <div className={styles.button}>
                  <a href="#"> Learn more</a>
                </div>
              </div>
            </div>


            <div className={styles.item}>
              <div className={styles.img}>
               <img src="slider3.webp" alt="" />
              </div>
              <div className={styles.text}>
                <h2>Operations & Support</h2>
                <p>Real-time and customizable reporting for security teams, CISOs or auditors.</p>
                <div className={styles.button}>
                  <a href="#"> Learn more</a>
                </div>
              </div>
            </div>


            <div className={styles.item}>
              <div className={styles.img}>
               <img src="slider3.webp" alt="" />
              </div>
              <div className={styles.text}>
                <h2>Operations & Support</h2>
                <p>Real-time and customizable reporting for security teams, CISOs or auditors.</p>
                <div className={styles.button}>
                  <a href="#"> Learn more</a>
                </div>
              </div>
            </div>

       
          </Slider>

        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
