import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedCaseStudies from '../components/FeaturedCaseStudies';
import Testimonials from '../components/Testimonials';
import HireCTA from '../components/HireCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedCaseStudies />
      <Testimonials />
      <div className="container mx-auto px-6">
        <HireCTA />
      </div>
    </>
  );
};

export default HomePage;
