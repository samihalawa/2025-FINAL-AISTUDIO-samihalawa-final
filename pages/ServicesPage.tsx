import React from 'react';
import { Helmet } from 'react-helmet-async';
import Corporate from '../components/Corporate';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import HireCTA from '../components/HireCTA';
import TrustBar from '../components/TrustBar';
import LeadMagnets from '../components/LeadMagnets';
import { usePageMeta } from '../hooks/usePageMeta';

const ServicesPage: React.FC = () => {
  const { title, description } = usePageMeta('corporate');
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="/corporate" />
      </Helmet>
      <Corporate />
      <div className="container mx-auto px-6">
        <TrustBar />
      </div>
      <Skills />
      <Experience />
      <div className="container mx-auto px-6">
        <LeadMagnets />
        <HireCTA />
      </div>
    </>
  );
};

export default ServicesPage;
