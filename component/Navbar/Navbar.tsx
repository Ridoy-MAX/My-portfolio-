import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#work', label: 'Works' },
  { href: '/#skill', label: 'Skills' },
  { href: '/exprience', label: 'Experience' },
  { href: '/about', label: 'About' },
];

const SOCIAL = [
  {
    href: 'https://www.linkedin.com/in/ridoy-hasan-54a449182/',
    label: 'LinkedIn',
    icon: 'fa-brands fa-linkedin-in',
  },
  {
    href: 'https://github.com/Ridoy-MAX',
    label: 'GitHub',
    icon: 'fa-brands fa-github',
  },
  {
    href: 'https://api.whatsapp.com/send/?phone=%2B01717311750',
    label: 'WhatsApp',
    icon: 'fa-brands fa-whatsapp',
  },
  {
    href: 'mailto:harunorrashid@gmail.com',
    label: 'Email',
    icon: 'fa-solid fa-at',
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    return () => {
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={closeMenu}>
          <span className={styles.brandMark}>R</span>
          <span className={styles.brandText}>Ridoy</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link
            href="mailto:harunorrashid@gmail.com?subject=Hello&body=I%20would%20like%20to%20contact%20you%20regarding%20your%20portfolio."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.emailPill}
          >
            <i className="fa-solid fa-at" />
            <span>harunorrashid@gmail.com</span>
          </Link>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Link href="/contact" className={styles.hireBtn} onClick={closeMenu}>
              Hire me
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </motion.div>

          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <>
                <motion.div
                  key="backdrop"
                  className={styles.backdrop}
                  onClick={closeMenu}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  aria-hidden="true"
                />
                <motion.aside
                  key="drawer"
                  id="mobile-drawer"
                  className={styles.drawer}
                  role="dialog"
                  aria-modal="true"
                  aria-label="Site menu"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                >
              <div className={styles.drawerHead}>
                <Link href="/" className={styles.brand} onClick={closeMenu}>
                  <span className={styles.brandMark}>R</span>
                  <span>Ridoy</span>
                </Link>
                <button
                  type="button"
                  className={styles.closeBtn}
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>

              <nav className={styles.drawerNav} aria-label="Mobile">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      className={styles.drawerLink}
                      onClick={closeMenu}
                    >
                      <span className={styles.drawerLinkIndex}>
                        0{idx + 1}
                      </span>
                      <span className={styles.drawerLinkLabel}>
                        {link.label}
                      </span>
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className={styles.drawerFoot}>
                <Link
                  href="/contact"
                  className={styles.drawerCta}
                  onClick={closeMenu}
                >
                  Hire me
                  <i className="fa-solid fa-arrow-right" />
                </Link>

                <div className={styles.drawerSocials}>
                  {SOCIAL.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className={styles.drawerSocial}
                    >
                      <i className={s.icon} />
                    </a>
                  ))}
                </div>

                <a
                  href="mailto:harunorrashid@gmail.com"
                  className={styles.drawerEmail}
                >
                  harunorrashid@gmail.com
                </a>
              </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
};

export default Navbar;
