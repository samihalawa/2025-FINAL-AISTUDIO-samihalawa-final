import React from 'react';
import { Helmet } from 'react-helmet-async';
import Corporate from '../components/Corporate';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
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
      <Skills />
      <Experience />
    </>
  );
};

export default ServicesPage;
