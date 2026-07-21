import React from 'react';
import Corporate from '../components/Corporate';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import HireCTA from '../components/HireCTA';

const ServicesPage: React.FC = () => {
  return (
    <>
<Corporate />
      <Skills />
      <Experience />
      <div className="container mx-auto px-6">
        <HireCTA />
      </div>
    </>
  );
};

export default ServicesPage;
