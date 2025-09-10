import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
    </>
  );
};

export default HomePage;

