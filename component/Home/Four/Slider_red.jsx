import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../Home.module.css';

// import "../../../styles/slick-slider-custom.css";

const Slider_red = () => {
    const Slider_red = {
        dots: false,
        arrows: false,
        infinite: true,
        vertical: true,  // Set the slider to vertical mode
        verticalSwiping: true,  // Enable vertical swiping
        slidesToShow: 1,
        // centerMode: true,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
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
              vertical: false, 
              // centerMode: true,
              slidesToShow: 1, // screens
            },
          },
        ],
      };
  return (
    <div>
          <div className={styles.slider_red_one}>
        <div className="col-12">
          <Slider {...Slider_red} className="red-slider">

            <div className={styles.item}>
                <h1>Ridoy Khan</h1>
                <h3>WEb Development</h3>
              <div className={styles.img}>
              <img src="user.webp" alt="" />
              </div>

              <p>WebApp <span>/</span> API <span>/</span>Network <span>/</span>Lot</p>
              <p>Andriod <span>/</span> Cloud <span>/</span>Network </p>
              <div className={styles.icon}>
                <img src="1.svg" alt="" />
                <img src="2.svg" alt="" />
                <img src="3.svg" alt="" />
                <img src="4.svg" alt="" />
                <img src="5.svg" alt="" />
              </div>
            </div>
            <div className={styles.item}>
                <h1>Ridoy Khan</h1>
                <h3>WEb Development</h3>
              <div className={styles.img}>
              <img src="user2.webp" alt="" />
              </div>

              <p>WebApp <span>/</span> API <span>/</span>Network <span>/</span>Lot</p>
              <p>Andriod <span>/</span> Cloud <span>/</span>Network </p>
              <div className={styles.icon}>
                <img src="1.svg" alt="" />
                <img src="2.svg" alt="" />
                <img src="3.svg" alt="" />
                <img src="4.svg" alt="" />
                <img src="5.svg" alt="" />
              </div>
            </div>
            <div className={styles.item}>
                <h1>Ridoy Khan</h1>
                <h3>WEb Development</h3>
              <div className={styles.img}>
              <img src="user2.webp" alt="" />
              </div>

              <p>WebApp <span>/</span> API <span>/</span>Network <span>/</span>Lot</p>
              <p>Andriod <span>/</span> Cloud <span>/</span>Network </p>
              <div className={styles.icon}>
                <img src="1.svg" alt="" />
                <img src="2.svg" alt="" />
                <img src="3.svg" alt="" />
                <img src="4.svg" alt="" />
                <img src="5.svg" alt="" />
              </div>
            </div>
            <div className={styles.item}>
                <h1>Ridoy Khan</h1>
                <h3>WEb Development</h3>
              <div className={styles.img}>
              <img src="user.webp" alt="" />
              </div>

              <p>WebApp <span>/</span> API <span>/</span>Network <span>/</span>Lot</p>
              <p>Andriod <span>/</span> Cloud <span>/</span>Network </p>
              <div className={styles.icon}>
                <img src="1.svg" alt="" />
                <img src="2.svg" alt="" />
                <img src="3.svg" alt="" />
                <img src="4.svg" alt="" />
                <img src="5.svg" alt="" />
              </div>
            </div>
            <div className={styles.item}>
                <h1>Ridoy Khan</h1>
                <h3>WEb Development</h3>
              <div className={styles.img}>
              <img src="user2.webp" alt="" />
              </div>

              <p>WebApp <span>/</span> API <span>/</span>Network <span>/</span>Lot</p>
              <p>Andriod <span>/</span> Cloud <span>/</span>Network </p>
              <div className={styles.icon}>
                <img src="1.svg" alt="" />
                <img src="2.svg" alt="" />
                <img src="3.svg" alt="" />
                <img src="4.svg" alt="" />
                <img src="5.svg" alt="" />
              </div>
            </div>

        
       
          </Slider>

        </div>
      </div>
    </div>
  )
}

export default Slider_red