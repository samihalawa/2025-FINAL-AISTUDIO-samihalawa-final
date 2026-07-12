import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedCaseStudies from '../components/FeaturedCaseStudies';
import Testimonials from '../components/Testimonials';
import AdditionalProjects from '../components/AdditionalProjects';
import HireCTA from '../components/HireCTA';
import ServicesShowcase from '../components/ServicesShowcase';
import TrustBar from '../components/TrustBar';
import LeadMagnets from '../components/LeadMagnets';
import { usePageMeta } from '../hooks/usePageMeta';

const HomePage: React.FC = () => {
  const { title, description } = usePageMeta('home');
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Hero />
      <div className="container mx-auto px-6">
        <TrustBar />
      </div>
      <About />
      <ServicesShowcase />
      <div className="container mx-auto px-6">
        <LeadMagnets />
      </div>
      <FeaturedCaseStudies />
      <AdditionalProjects />
      <Testimonials />
      <div className="container mx-auto px-6">
        <HireCTA />
      </div>
    </>
  );
};

export default HomePage;
