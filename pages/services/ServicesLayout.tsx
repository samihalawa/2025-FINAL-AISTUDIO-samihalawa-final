import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';

const ServicesLayout: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Servicios de IA | Sami Halawa</title>
        <meta name="description" content="Formación, consultoría y desarrollo en IA: desde ChatGPT básico y automatización sin código hasta proyectos avanzados con LangChain y AutoGPT." />
        <link rel="canonical" href="/services" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-6xl py-10">
        {/* Render nested service routes (index and children) */}
        <Outlet />
      </div>
    </>
  );
};

export default ServicesLayout;
