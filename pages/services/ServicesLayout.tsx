import React from 'react';
import { Outlet } from 'react-router-dom';
import HireCTA from '../../components/HireCTA';

const ServicesLayout: React.FC = () => {
  return (
    <>
<div className="container mx-auto px-6 max-w-6xl py-10">
        {/* Render nested service routes (index and children) */}
        <Outlet />
        <HireCTA />
      </div>
    </>
  );
};

export default ServicesLayout;
