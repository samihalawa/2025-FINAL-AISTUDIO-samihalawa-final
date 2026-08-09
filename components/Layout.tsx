import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useTranslation } from '../i18n/LanguageContext';
import BackToTop from './BackToTop';
import SeoHead from './SeoHead';
import AnalyticsManager from './AnalyticsManager';

const Layout: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="relative min-h-screen text-slate-800">
      <SeoHead />
      <a
        href="#main-content"
        className="sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[200] focus-visible:rounded-full focus-visible:bg-slate-900 focus-visible:px-4 focus-visible:py-2 focus-visible:text-white focus-visible:no-underline"
      >
        {t('ui.skipToContent')}
      </a>
      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <AnalyticsManager />
      <a
        href="https://wa.me/34679794037"
        className="relative z-40 mb-4 ml-auto mr-4 mt-4 flex h-12 w-12 items-center justify-center rounded-sm border border-white/40 bg-slate-950 text-white shadow-lg transition-colors hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 md:fixed md:bottom-6 md:right-0.5 md:m-0 md:h-11 md:w-11"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('ui.contactViaWhatsApp')}
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
    </div>
  );
};

export default Layout;
