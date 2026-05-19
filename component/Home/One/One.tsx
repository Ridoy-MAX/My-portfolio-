import { motion } from 'framer-motion';
import Style from '../Home.module.css';

const fadeUp = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const One = () => {
  return (
    <section className={Style.hero}>
      <div className={Style.heroBg} aria-hidden="true">
        <span className={`${Style.orb} ${Style.orb1}`} />
        <span className={`${Style.orb} ${Style.orb2}`} />
        <span className={`${Style.orb} ${Style.orb3}`} />
        <span className={Style.ring} />
      </div>
      <div className="container-wide">
        <div className={Style.heroGrid}>
          <motion.div
            className={Style.heroContent}
            {...fadeUp}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.7 }}
          >
            <span className={Style.heroEyebrow}>
              <span className={Style.heroDot} />
              Available for work
            </span>
            <h1 className={Style.heroTitle}>
              I&apos;m Ridoy Hasan
              <br />
              <span className="text-gradient">Full Stack</span>
              <br />
              Web Developer
            </h1>
            <p className={Style.heroName} aria-label="Full name">
              Harun Or Rashid · Dhaka, Bangladesh
            </p>
            <p className={Style.heroLead}>
              I break down complex user-experience problems to create
              integrity-focused solutions. Currently a Full Stack Developer at{' '}
              <a
                href="https://hybri.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className={Style.heroLink}
              >
                Hybri.tech
              </a>{' '}
              — building ERP and MES applications with React, Next.js,
              Laravel, Node.js, AWS EC2, and SAP UI5 Web Components.
            </p>

            <div className={Style.heroActions}>
              <motion.a
                href="/CV.pdf"
                download="CV.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={Style.btnPrimary}
              >
                Download CV
                <i className="fa-solid fa-download" />
              </motion.a>

              <div className={Style.socialIcons}>
                <a
                  href="https://www.linkedin.com/in/ridoy-hasan-54a449182/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={Style.socialIcon}
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B01717311750"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className={Style.socialIcon}
                >
                  <i className="fa-brands fa-whatsapp" />
                </a>
                <a
                  href="https://github.com/Ridoy-MAX"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={Style.socialIcon}
                >
                  <i className="fa-brands fa-github" />
                </a>
                <a
                  href="mailto:harunorrashid@gmail.com?subject=Hello&body=I%20would%20like%20to%20contact%20you%20regarding%20your%20portfolio."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className={Style.socialIcon}
                >
                  <i className="fa-solid fa-at" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={Style.heroVisual}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.9, delay: 0.15 }}
          >
            <div className={Style.heroPhotoWrap}>
              <div className={Style.heroPhotoGlow} />
              <img
                src="me.jpg"
                alt="Ridoy Hasan (Harun Or Rashid) — Full Stack Web Developer from Dhaka, Bangladesh"
                className={Style.heroPhoto}
              />
              <div className={Style.heroBadge}>
                <span className={Style.heroBadgeDot} />
                3+ years exp
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default One;
