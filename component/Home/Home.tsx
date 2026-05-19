import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import One from './One/One';
import Two from './two/two';
import Four from './Four/Four';
import Five from './Five/Five';
import Preloader from './preloader';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <>
      <Navbar />
      <main>
        <One />
        <Two />
        <Four />
        <Five />
      </main>
      <Footer />
    </>
  );
};

export default Home;
