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
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] overflow-hidden">
        <div className="absolute -right-40 -top-56 h-[620px] w-[620px] rounded-full border-[80px] border-brand-100/60"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-grid-slate opacity-[0.16]"></div>
      </div>

      <Header />
      <main id="main-content" role="main" tabIndex={-1} className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <AnalyticsManager />
      <a
        href="https://wa.me/34679794037"
        className="fixed bottom-4 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg shadow-brand-900/30 transition-all hover:-translate-y-1 hover:scale-105 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
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
