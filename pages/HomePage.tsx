import React from 'react';
import Hero from '../components/Hero';
import ProofMetrics from '../components/ProofMetrics';
import ProductionPillars from '../components/ProductionPillars';
import About from '../components/About';
import FeaturedCaseStudies from '../components/FeaturedCaseStudies';
import Testimonials from '../components/Testimonials';
import EngagementOptions from '../components/EngagementOptions';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ProofMetrics />
      <ProductionPillars />
      <FeaturedCaseStudies />
      <About />
      <Testimonials />
      <EngagementOptions />
    </>
  );
};

export default HomePage;
