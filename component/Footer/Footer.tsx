import Link from 'next/link';
import Style from './Footer.module.css';

const FOOTER_LINKS = [
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

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className="container-wide">
        <div className={Style.top}>
          <div className={Style.brandCol}>
            <Link href="/" className={Style.brand}>
              <span className={Style.brandMark}>R</span>
              <span>Ridoy</span>
            </Link>
            <p className={Style.tagline}>
              Full Stack Web Developer crafting integrity-focused digital
              experiences.
            </p>
            <a
              href="mailto:harunorrashid@gmail.com?subject=Hello&body=I%20would%20like%20to%20contact%20you%20regarding%20your%20portfolio."
              className={Style.email}
            >
              <i className="fa-solid fa-at" />
              harunorrashid@gmail.com
            </a>
          </div>

          <div className={Style.linksCol}>
            <h4 className={Style.colTitle}>Navigate</h4>
            <ul className={Style.linkList}>
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={Style.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={Style.linksCol}>
            <h4 className={Style.colTitle}>Connect</h4>
            <div className={Style.socials}>
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={Style.socialBtn}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
            <Link href="/contact" className={Style.contactBtn}>
              Get in touch
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>

        <div className={Style.divider} />

        <div className={Style.bottom}>
          <span>© {new Date().getFullYear()} Ridoy Hasan. All rights reserved.</span>
          <span className={Style.builtWith}>
            Built with <span className="text-gradient">Next.js</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
