import Link from "next/link";
import { motion } from 'framer-motion';
import styles from "./Navbar.module.css";
import Image from 'next/image'
import logo from '../../public/oc2.png'
import logo2 from '../../public/black.png'
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    // Event listener for scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // User has scrolled, add the scrolled class
        setScrolled(true);
      } else {
        // User is at the top, remove the scrolled class
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [darkMode]);


  function handleMenuToggle(event: React.MouseEvent<HTMLElement, MouseEvent>): void {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>

      <div >
        <header className={`${styles.header} ${scrolled ? styles.scrolledNavbar : ''}`}>
        {/* <i className={`fa-regular fa-user ${styles.menuser}`}></i> */}

          <Link href="/" className={styles.mobile_logo}>
            <div className={styles.logo}>
              <img src="oc2.png" alt="" className={styles.one} />
              <img src="black.png" alt=""  className={styles.two}/>
            </div>
          </Link>

         

          <i
            className={`fa-solid fa-bars ${styles.menuToggle}`}
            onClick={handleMenuToggle}
          ></i>



          <nav className={`${styles.nav} ${menuOpen ? styles.show : ""}`}>
            <div className="sm_none">

              <div className="container-fluid">
                <div className="row">

                  <div className="col-md-11 m-auto">
                    <div className={styles.menu}>

                      <a className={styles.close}>
                        <i
                          className={`fa-solid fa-xmark ${styles.menuToggle}`}
                          onClick={handleMenuToggle}
                        ></i>
                      </a>







                      <div className="d-flex justify-content-center">
                        <Link href="/" className={styles.logo_email_link} >

                          {/* <Image
                            src={logo}
                            alt="Picture of the author"
                            width={50}

                          />

                          <Image 
                          className="ms-2"
                            src={logo2}
                            alt="Picture of the author"
                            width={120} 

                          /> */}
                          <div className={styles.logo_email}>
                          <i className="fa-solid fa-at"></i>
                            <p>pou4w98y@gmail.com</p>

                          </div>

                        </Link>
                      </div>

                      <div className={styles.nav_item}>
                        <ul className={styles.list}>

                          <li className={styles.menu_item_has_children}>
                            <Link href="/" className={styles.buttion_primary_none}> <p>Home</p></Link>

                          </li>

                          <li>
                            <Link href="/#work" className={styles.buttion_primary_none}>
                              <p>  Works       
                              </p>

                       
                            </Link>

                            {/* <div className={styles.sub_menu_list}>
                              <div className="container">
                                <div className="row">
                                  <h6> My Works</h6>

                                  <div className={styles.services}>
                                    <div className="row">
                                      <div className="col">
                                        <div className="row">
                                          <div className="col-md-4">
                                          <Link href="/cyber" >
                                            <div className="row">
                                            <div className={styles.one}>
                                                <div className={styles.img}>
                                                  <img src="three.svg" alt="" />
                                                </div>
                                                <div className={styles.text}>
                                                  <h4>  Cyber Security & VAPT</h4>
                                                  <p>Our team can secure your IT infrastructure with professional testing and assessments.</p>
                                                </div>
                                              </div>
                                            </div>
                                           

                                            </Link>
                                          </div>
                                          <div className="col-md-4">
                                          <Link href="/web" className={styles.service_link}>
                                              <div className={styles.one}>
                                                <div className={styles.img}>
                                                  <img src="one.svg" alt="" />
                                                </div>
                                                <div className={styles.text}>
                                                  <h4> Web Design & Dev</h4>
                                                  <p>Our programmers are ready to develop your web site or application with expertise and attention.</p>
                                                </div>
                                              </div>

                                            </Link>
                                          </div>
                                          <div className="col-md-4">
                                          <Link href="/cyber" className={styles.service_link}>
                                              <div className={styles.one}>
                                                <div className={styles.img}>
                                                  <img src="one.svg" alt="" />
                                                </div>
                                                <div className={styles.text}>
                                                  <h4>Graphics Design</h4>
                                                  <p>From eye catching social media posts to Logo design, we got you covered..</p>
                                                </div>
                                              </div>

                                            </Link>
                                          </div>
                                          <div className="col-md-4">
                                          <Link href="/web" className={styles.service_link}>
                                              <div className={styles.one}>
                                                <div className={styles.img}>
                                                  <img src="one.svg" alt="" />
                                                </div>
                                                <div className={styles.text}>
                                                  <h4>  Mobile App Development</h4>
                                                  <p>We are always ready to develop your desired mobile application.</p>
                                                </div>
                                              </div>

                                            </Link>
                                          </div>
                                          <div className="col-md-4">
                                          <Link href="/cyber" className={styles.service_link}>
                                              <div className={styles.one}>
                                                <div className={styles.img}>
                                                  <img src="one.svg" alt="" />
                                                </div>
                                                <div className={styles.text}>
                                                  <h4>Hardware Import</h4>
                                                  <p>We import high quality and in-budget IT devices from multiple trusted vendors.</p>
                                                </div>
                                              </div>

                                            </Link>
                                          </div>
                                          <div className="col-md-4">
                                            
                                          <Link href="/web" className={styles.service_link}>
                                              <div className={styles.one}>
                                                <div className={styles.img}>
                                                  <img src="one.svg" alt="" />
                                                </div>
                                                <div className={styles.text}>
                                                  <h4>Hardware Import</h4>
                                                  <p>We import high quality and in-budget IT devices from multiple trusted vendors.</p>
                                                </div>
                                              </div>

                                            </Link>
                                          </div>
                                     


                                        </div>
                                      </div>
                                    </div>


                                  </div>
                                </div>
                              </div>





                            </div> */}


                          </li>
                          <li>
                            <Link href="/#skill" className={styles.buttion_primary_none}>
                              <p> Skills</p>
                            </Link>
                          </li>
                          <li>
                            <Link href="/why_octagram" className={styles.buttion_primary_none}>
                              <p> Experience</p>
                            </Link>
                          </li>
                          {/* <li>
                            <Link href="/why_octagram" className={styles.buttion_primary_none}>
                              <p> Why Me</p>
                            </Link>
                          </li> */}
                          <li>
                            <Link href="/about" className={styles.buttion_primary_none}>
                              <p>   About</p>
                            </Link>
                          </li>


                          {/* <li>
                            <Link href="" className={styles.buttion_primary_none}>
                              <p>  Contact</p>
                            </Link>
                          </li> */}
                          {/* <li>
                            <Link href="" className={styles.them} onClick={() => setDarkMode(!darkMode)}>
                              <i className="fa-regular fa-sun"></i>

                            </Link>
                          </li> */}
                          <motion.div
                            // initial={{ opacity: 0, scale: 0.5 }}
                            // animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <li>

                              <Link
                                href="/contact" className={styles.buttion_primary} >
                                <p>
                                  Contact </p>

                              </Link>

                            </li>

                          </motion.div>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </nav>
        </header>
      </div>
    </div >
  )
}

export default Navbar