import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesLayout: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Servicios de IA | Sami Halawa</title>
        <meta name="description" content="Formación, consultoría y desarrollo en IA: desde ChatGPT básico y automatización sin código hasta proyectos avanzados con LangChain y AutoGPT." />
        <link rel="canonical" href="/services" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-6xl py-10">
        {/* Renders the nested service pages or index */}
      </div>
    </>
  );
};

export default ServicesLayout;

