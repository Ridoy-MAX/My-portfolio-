import Link from 'next/link';
import { motion } from 'framer-motion';
import ModernStyle from '../HeroAdvanced.module.css';

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Five = () => {
  return (
    <section
      className={ModernStyle.section}
      style={{
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a0a2e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 40px' }}>
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <motion.span
            variants={itemVariants}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontFamily: "'Courier Prime', monospace",
              fontWeight: 600,
              color: 'var(--accent)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                background: 'var(--accent)',
                borderRadius: '50%',
                boxShadow:
                  '0 0 20px rgba(0, 240, 255, 0.6)',
              }}
            />
            Let's Build Something Great
          </motion.span>

          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: 'clamp(36px, 6vw, 56px)',
              fontFamily: "'Courier Prime', monospace",
              fontWeight: 700,
              margin: '0 0 24px 0',
              lineHeight: 1.2,
              background:
                'linear-gradient(135deg, var(--text) 0%, var(--accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Ready to Transform Your Ideas Into Reality?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '18px',
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(232, 234, 237, 0.8)',
              margin: '24px 0 48px 0',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.6,
            }}
          >
            Whether you need a sophisticated web application, a seamless API, or a
            complete digital solution — I'm here to execute with precision and creativity.
          </motion.p>

          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '18px 40px',
                  fontSize: '16px',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(255, 0, 255, 0.1))',
                  color: 'var(--accent)',
                  border: '1px solid var(--accent)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
                className="cta-btn"
              >
                Start Your Project
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </motion.div>

            <motion.a
              href="mailto:harunorrashid@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '18px 40px',
                fontSize: '16px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                background: 'rgba(255, 0, 255, 0.1)',
                color: 'var(--accent-2)',
                border: '1px solid var(--accent-2)',
                borderRadius: '8px',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              Send me an email
              <i className="fa-solid fa-envelope" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.05), transparent)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Five;
