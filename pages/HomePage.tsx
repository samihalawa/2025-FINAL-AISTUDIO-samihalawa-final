import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedCaseStudies from '../components/FeaturedCaseStudies';
import Testimonials from '../components/Testimonials';
import AdditionalProjects from '../components/AdditionalProjects';
import HireCTA from '../components/HireCTA';
import ServicesShowcase from '../components/ServicesShowcase';

const HomePage: React.FC = () => {
  return (
    <>
<Hero />
      <About />
      <FeaturedCaseStudies />
      <AdditionalProjects />
      <Testimonials />
      <ServicesShowcase />
      <div className="container mx-auto px-6">
        <HireCTA />
      </div>
    </>
  );
};

export default HomePage;
