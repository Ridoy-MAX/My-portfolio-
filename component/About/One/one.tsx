import { motion } from 'framer-motion';
import Style from './one.module.css';

const One = () => {
  return (
    <section className={Style.about}>
      <div className="container-wide">
        <div className={Style.grid}>
          <motion.div
            className={Style.content}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.7 }}
          >
            <span className={Style.eyebrow}>Get to know me</span>
            <h1 className={Style.title}>
              About <span className="text-gradient">Ridoy</span>
            </h1>
            <p className={Style.lead}>
              Hi, I&apos;m <strong>Ridoy Hasan</strong> (full name{' '}
              <strong>Harun Or Rashid</strong>) — a Full Stack Web Developer
              based in Dhaka, Bangladesh. With three years of development
              experience, I excel in creating robust web applications. Skilled
              in PHP, RESTful APIs, Eloquent ORM, and authentication systems,
              I ensure seamless front-end and back-end integration. My
              expertise includes performance optimization, debugging, and Git
              version control — delivering high-quality, client-focused
              solutions.
            </p>
            <p className={Style.lead}>
              I love developing interesting and unique designs. I also
              challenge myself to learn new things, and I crave new experiences
              and challenges.
            </p>

            <div className={Style.actions}>
              <motion.a
                href="/CV.pdf"
                download="CV.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={Style.btnPrimary}
              >
                Download CV <i className="fa-solid fa-download" />
              </motion.a>

              <div className={Style.socials}>
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
                  href="mailto:harunorrashid@gmail.com"
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
            className={Style.visual}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.9, delay: 0.15 }}
          >
            <div className={Style.photoWrap}>
              <div className={Style.photoGlow} />
              <img
                src="me.jpg"
                alt="Ridoy Hasan (Harun Or Rashid) — Full Stack Web Developer"
                className={Style.photo}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default One;
