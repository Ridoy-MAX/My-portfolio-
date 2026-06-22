import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import AdvancedGeometricHero from '../AdvancedGeometricHero';
import Style from '../HeroAdvanced.module.css';

const One = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [scrollValue, setScrollValue] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const unsubscribe = scrollY.onChange((v) => setScrollValue(v));
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  // Scroll-driven parallax
  const contentY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={sectionRef} className={Style.heroSection}>
      <div className={Style.depthLayer}>
        <div className={Style.depthLayerFront} />
        <div className={Style.depthLayerBack} />
      </div>

      <div className={Style.canvasWrapper}>
        <AdvancedGeometricHero
          scrollY={scrollValue}
          mouseX={mousePos.x}
          mouseY={mousePos.y}
        />
      </div>

      <motion.div
        className={Style.heroContent}
        variants={containerVariants}
        initial="initial"
        animate="animate"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.span className={Style.heroEyebrow} variants={itemVariants}>
          <span className={Style.heroDot} />
          Available for work
        </motion.span>

        <motion.h1 className={Style.heroTitle} variants={itemVariants}>
          Ridoy Hasan
          <br />
          Full-Stack Engineer
        </motion.h1>

        <motion.p className={Style.heroSubtitle} variants={itemVariants}>
          I design and build sophisticated interactive experiences.
          <br />
          Currently engineering ERP and MES applications at{' '}
          <span style={{ color: '#00f0ff' }}>Hybri.tech</span>
          <br />
          with React, Next.js, Node.js, and AWS.
        </motion.p>

        <motion.div className={Style.heroActions} variants={itemVariants}>
          <motion.a
            href="/CV.pdf"
            download="CV.pdf"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.92, y: -1 }}
            className={Style.btnPrimary}
          >
            Download CV
            <i className="fa-solid fa-download" />
          </motion.a>

          <motion.div className={Style.socialIcons}>
            <motion.a
              href="https://www.linkedin.com/in/ridoy-hasan-54a449182/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={Style.socialIcon}
              whileHover={{ scale: 1.12, y: -6 }}
              whileTap={{ scale: 0.88 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.7,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <i className="fa-brands fa-linkedin-in" />
            </motion.a>
            <motion.a
              href="https://github.com/Ridoy-MAX"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={Style.socialIcon}
              whileHover={{ scale: 1.12, y: -6 }}
              whileTap={{ scale: 0.88 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <i className="fa-brands fa-github" />
            </motion.a>
            <motion.a
              href="mailto:harunorrashid@gmail.com?subject=Hello Ridoy"
              aria-label="Email"
              className={Style.socialIcon}
              whileHover={{ scale: 1.12, y: -6 }}
              whileTap={{ scale: 0.88 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.9,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <i className="fa-solid fa-envelope" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.p
          className={Style.heroSubtitle}
          variants={itemVariants}
          style={{ fontSize: '13px', marginTop: '40px', opacity: 0.5 }}
        >
          Dhaka, Bangladesh · {new Date().getFullYear()}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default One;
