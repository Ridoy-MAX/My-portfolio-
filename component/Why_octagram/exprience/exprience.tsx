import { motion } from 'framer-motion';
import Style from './exprience.module.css';

const EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    org: 'Hybri.tech',
    orgHref: 'https://hybri.tech/',
    period: '2024 – Present',
    description:
      'Working on enterprise ERP and MES systems, building modern web interfaces with SAP UI5 Web Components alongside the full backend stack — from architecture and API design to UI implementation and deployment.',
  },
  {
    role: 'Full Stack Web Developer',
    org: 'Ryven.co — Dhaka',
    period: '2022 – 2024',
    description:
      'Contributed to developing multiple web applications using Laravel, React, Tailwind, and Bootstrap. Integrated several payment gateways including Stripe, SSL, PayPal, and bKash.',
  },
  {
    role: 'Frontend Developer',
    org: 'Gotmyhost — Dhaka',
    period: '2021 – 2022',
    description:
      'Built responsive web applications using React and Next.js, focused on user-friendly interfaces that adapt across devices and screen sizes.',
  },
];

const EDUCATION = [
  {
    logo: 'https://uoda.edu.bd/public/images/logo.png',
    title: 'BSc in Computer Science',
    org: 'University of Development Alternative (UODA)',
    period: '2019 – 2023',
    meta: 'Dhanmondi, Dhaka · CGPA 3.14',
  },
  {
    logo: 'https://pgc.studentpay.net/public/storage/upload/conf/230714010408_9770yvtzgqhbqcfog3ilnewqulrtqszrq0y5o0jiicyu.png',
    title: 'Higher Secondary School Certificate (HSC)',
    org: 'Pangsa Govt. College',
    period: '2019 – 2023',
    meta: 'Pangsa, Rajbari · GPA 3.75',
  },
];

const Experience = () => {
  return (
    <section className={Style.experience}>
      <div className="container-wide">
        <motion.div
          className={Style.head}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.7 }}
        >
          <span className={Style.eyebrow}>Career journey</span>
          <h1 className={Style.title}>
            <span className="text-gradient">Experience</span>
          </h1>
        </motion.div>

        <div className={Style.timeline}>
          {EXPERIENCE.map((job, idx) => (
            <motion.article
              key={job.role + idx}
              className={Style.timelineItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <span className={Style.dot} />
              <div className={Style.card}>
                <div className={Style.cardHead}>
                  <h3 className={Style.role}>{job.role}</h3>
                  <span className={Style.period}>{job.period}</span>
                </div>
                <p className={Style.org}>
                  {job.orgHref ? (
                    <a
                      href={job.orgHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.org}
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </a>
                  ) : (
                    job.org
                  )}
                </p>
                <p className={Style.desc}>{job.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className={Style.eduHead}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={Style.subtitle}>Education</h2>
        </motion.div>

        <div className={Style.eduGrid}>
          {EDUCATION.map((edu, idx) => (
            <motion.article
              key={edu.title + idx}
              className={Style.eduCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className={Style.eduLogo}>
                <img src={edu.logo} alt={edu.org} />
              </div>
              <div className={Style.eduBody}>
                <h3 className={Style.eduTitle}>{edu.title}</h3>
                <p className={Style.eduOrg}>{edu.org}</p>
                <p className={Style.eduMeta}>
                  <span className={Style.periodPill}>{edu.period}</span>
                  <span>{edu.meta}</span>
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
