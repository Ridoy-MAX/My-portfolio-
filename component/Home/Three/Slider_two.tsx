import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../Home.module.css';

const Slider_two = () => {
    const SliderTwo = {
        dots: false,
        infinite: true,
        // vertical: true,  // Set the slider to vertical mode
        // verticalSwiping: true,  // Enable vertical swiping
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
              }
            }
          ]

    };
    return (
        <div>
            <div className={styles.slider_two}>
                <h2>ORGANIZATIONS WE SECUR</h2>
                <div className="col-12">
                    <Slider {...SliderTwo} className="main-slider">

                        <div className={styles.item}>
                            <div className={styles.img}>
                                <img src="2slider1.svg" alt="" />
                            </div>

                        </div>
                        <div className={styles.item}>
                            <div className={styles.img}>
                                <img src="2slider2.svg" alt="" />
                            </div>

                        </div>
                        <div className={styles.item}>
                            <div className={styles.img}>
                                <img src="2slider3.svg" alt="" />
                            </div>

                        </div>
                        <div className={styles.item}>
                            <div className={styles.img}>
                            <img src="2slider4.svg" alt="" />
                            </div>

                        </div>
                        <div className={styles.item}>
                            <div className={styles.img}>
                                <img src="2slider5.svg" alt="" />
                            </div>

                        </div>
                        <div className={styles.item}>
                            <div className={styles.img}>
                                <img src="2slider2.svg" alt="" />
                            </div>

                        </div>



                    </Slider>

                </div>
            </div>
        </div>
    )
}

export default Slider_two