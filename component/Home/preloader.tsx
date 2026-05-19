import { motion } from 'framer-motion';
import Style from './Home.module.css';

const Preloader = () => (
  <div className={Style.preloader}>
    <motion.div
      className={Style.preloaderRing}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
    />
    <motion.div
      className={Style.preloaderText}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      Loading
    </motion.div>
  </div>
);

export default Preloader;
