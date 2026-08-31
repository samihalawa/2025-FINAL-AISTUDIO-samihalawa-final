import React from 'react';
import Corporate from '../components/Corporate';
import Skills from '../components/Skills';
import HireCTA from '../components/HireCTA';

const ServicesPage: React.FC = () => {
  return (
    <>
<Corporate />
      <Skills />
      <div className="container mx-auto px-6">
        <HireCTA />
      </div>
    </>
  );
};

export default ServicesPage;
