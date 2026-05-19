import Link from 'next/link';
import { motion } from 'framer-motion';
import Style from '../Home.module.css';

const Five = () => {
  return (
    <section className={Style.cta}>
      <div className="container">
        <motion.div
          className={Style.ctaCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={Style.ctaGlow} aria-hidden />
          <span className={Style.eyebrow}>Let&apos;s collaborate</span>
          <h2 className={Style.ctaTitle}>
            Ready to get <span className="text-gradient">started?</span>
          </h2>
          <p className={Style.ctaLead}>
            Have a project in mind? Let&apos;s build something exceptional
            together.
          </p>
          <Link href="/contact" className={Style.ctaBtn}>
            Get in touch
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Five;
