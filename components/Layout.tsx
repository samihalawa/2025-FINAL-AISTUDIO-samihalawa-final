import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="bg-white text-slate-800">
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <a
        href="https://wa.me/34679794037"
        className="whatsapp-float fixed bottom-6 right-6 bg-slate-900 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-slate-800 transition-all transform hover:scale-110 z-40"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>
    </div>
  );
};

export default Layout;

