import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (you can replace this with actual data fetching)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Unleash Your Inner Otaku' title='OUR EVENTS' />
        <Programs />
        <About />
        <Title subTitle='GALLERY' title='PHOTOS FROM LAST EVENT' />
        <Gallery />
        <Title subTitle='Contact Us' title='Get In Touch' />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;