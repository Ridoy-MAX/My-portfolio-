import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Style from '../service.module.css';

const Web = () => {
  return (
    <>
      <Navbar />
      <section className={Style.service}>
        <div className="container-wide">
          <div className={Style.head}>
            <span className={Style.eyebrow}>Services</span>
            <h1 className={Style.title}>
              <span className="text-gradient">Web</span> Development
            </h1>
            <p className={Style.lead}>
              Modern, performant web applications built with React, Next.js,
              Laravel, and the rest of the modern stack.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Web;
