import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Training & Solutions | Sami Halawa</title>
        <meta name="description" content="AI training for teams, hands-on workshops, and custom automation projects. Learn ChatGPT, RAG, LangChain, agents and no-code workflows." />
      </Helmet>
      <Hero />
      <About />
      <Testimonials />
    </>
  );
};

export default HomePage;
