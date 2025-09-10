import React from 'react';
import { Helmet } from 'react-helmet-async';
import Corporate from '../components/Corporate';
import Skills from '../components/Skills';
import Experience from '../components/Experience';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Corporate AI Training & Solutions | Sami Halawa</title>
        <meta name="description" content="Tailored AI training programs for leaders and teams, plus hands-on consulting to automate workflows and ship AI features." />
        <link rel="canonical" href="/corporate" />
      </Helmet>
      <Corporate />
      <Skills />
      <Experience />
    </>
  );
};

export default ServicesPage;
