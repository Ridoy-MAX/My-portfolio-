import { motion } from 'framer-motion';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Style from '../service.module.css';

const BENEFITS = [
  {
    icon: 'three.svg',
    title: 'Scalable Testing Programs',
    description:
      'Test at scale from a single to thousands of assets through a vetted community of researchers paired with smart technology.',
  },
  {
    icon: 'three.svg',
    title: 'Continuous Pentesting',
    description:
      'On-demand security testing on web and mobile apps, networks, APIs, and cloud assets — continuously, not annually.',
  },
  {
    icon: 'three.svg',
    title: 'Adversarial by Design',
    description:
      'Findings rooted in real attacker behavior, prioritized by exploitability so your team focuses on what truly matters.',
  },
];

const ASSETS = [
  { name: 'Web Application Testing', icon: 'flip.svg' },
  { name: 'Mobile Application Testing', icon: 'flip.svg' },
  { name: 'Network Penetration Testing', icon: 'flip.svg' },
  { name: 'API Security Testing', icon: 'flip.svg' },
  { name: 'Cloud Configuration Review', icon: 'flip.svg' },
  { name: 'Source Code Review', icon: 'flip.svg' },
];

const Cyber = () => {
  return (
    <>
      <Navbar />
      <section className={Style.service}>
        <div className="container-wide">
          <motion.div
            className={Style.head}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.7 }}
          >
            <span className={Style.eyebrow}>Services</span>
            <h1 className={Style.title}>
              Cyber Security &{' '}
              <span className="text-gradient">VAPT</span>
            </h1>
            <p className={Style.lead}>A better way to pentest.</p>
          </motion.div>

          <div className={Style.intro}>
            <h2 className={Style.introTitle}>
              Scale your pentesting program today
            </h2>
            <p className={Style.introBody}>
              Digital transformation is happening at breakneck speed, putting
              security teams under intense pressure. We find exploitable
              vulnerabilities faster than traditional pentesting with a
              community of ethical security researchers paired with smart
              technology — enabling continuous pentesting on web and mobile
              applications, networks, APIs, and cloud assets.
            </p>
          </div>

          <div className={Style.benefits}>
            <h3 className={Style.sectionLabel}>The benefits</h3>
            <h2 className={Style.sectionTitle}>
              Going beyond traditional pentesting
            </h2>
            <div className={Style.benefitsGrid}>
              {BENEFITS.map((b, idx) => (
                <motion.article
                  key={b.title}
                  className={Style.benefitCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className={Style.benefitIcon}>
                    <img src={b.icon} alt="" />
                  </div>
                  <h4 className={Style.benefitTitle}>{b.title}</h4>
                  <p className={Style.benefitDesc}>{b.description}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className={Style.assets}>
            <h3 className={Style.sectionLabel}>Penetration testing</h3>
            <h2 className={Style.sectionTitle}>For specific assets</h2>
            <div className={Style.assetsGrid}>
              {ASSETS.map((a, idx) => (
                <motion.div
                  key={a.name}
                  className={Style.assetCard}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <div className={Style.assetIcon}>
                    <img src={a.icon} alt="" />
                  </div>
                  <span className={Style.assetName}>{a.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cyber;
