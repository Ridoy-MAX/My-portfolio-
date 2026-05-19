import { motion } from 'framer-motion';
import Style from './one.module.css';

const EXPERTISE = [
  {
    icon: 'Platform1.svg',
    title: 'Problem Solving',
    description:
      'Hone analytical skills and boost coding proficiency with problem solving and competitive programming.',
  },
  {
    icon: 'Platform2.svg',
    title: 'Project Management',
    description:
      'Understanding project management tools like JIRA, Trello, or Asana for task tracking and project planning.',
  },
  {
    icon: 'Platform3.svg',
    title: 'Frontend Development',
    description:
      'Responsive design with media queries, flexible grids, and fluid images to ensure applications work on any device.',
  },
  {
    icon: 'Platform3.svg',
    title: 'Leadership',
    description:
      'Lead a team of bright minds to solve technical, business, and comprehensive problems.',
  },
  {
    icon: 'Platform3.svg',
    title: 'Team Work',
    description:
      'A character that forms a formidable collaboration with team members to deliver great products.',
  },
  {
    icon: 'Platform3.svg',
    title: 'Backend Development',
    description:
      'Designing and consuming RESTful APIs for efficient client–server communication.',
  },
];

const One = () => {
  return (
    <section className={Style.expertise}>
      <div className="container-wide">
        <motion.div
          className={Style.head}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.7 }}
        >
          <span className={Style.eyebrow}>What I bring</span>
          <h2 className={Style.title}>
            <span className="text-gradient">Expertise</span>
          </h2>
          <p className={Style.lead}>
            A blend of technical depth and product-minded craft across the full
            stack.
          </p>
        </motion.div>

        <div className={Style.grid}>
          {EXPERTISE.map((item, idx) => (
            <motion.article
              key={item.title + idx}
              className={Style.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
            >
              <div className={Style.cardIcon}>
                <img src={item.icon} alt="" />
              </div>
              <h3 className={Style.cardTitle}>{item.title}</h3>
              <p className={Style.cardDesc}>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default One;
