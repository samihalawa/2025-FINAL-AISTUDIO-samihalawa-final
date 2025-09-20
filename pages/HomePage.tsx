import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedCaseStudies from '../components/FeaturedCaseStudies';
import Testimonials from '../components/Testimonials';
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
      <About />
      <FeaturedCaseStudies />
      <Testimonials />
    </>
  );
};

export default HomePage;
