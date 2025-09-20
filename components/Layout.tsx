import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import { useTranslation } from '../i18n/LanguageContext';

const Layout: React.FC = () => {
  const location = useLocation();
  const { language } = useTranslation();
  const siteUrl = 'https://samihalawa.com';
  const canonical = `${siteUrl}${location.pathname}`;
  const defaultOg = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80';
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sami Halawa',
    url: siteUrl,
    sameAs: [
      'https://www.linkedin.com/in/samihalawa',
      'https://github.com/samihalawa'
    ],
    jobTitle: 'AI Trainer & Engineer'
  };
  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sami Halawa — AI Training & Solutions',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
  return (
    <div className="bg-white text-slate-800">
      <Helmet>
        <meta name="theme-color" content="#0f172a" />
        <meta property="og:site_name" content="Sami Halawa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={defaultOg} />
        <meta name="twitter:image" content={defaultOg} />
        <meta property="og:locale" content={language === 'en' ? 'en_US' : language === 'es' ? 'es_ES' : language === 'fr' ? 'fr_FR' : 'zh_CN'} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(webSiteJsonLd)}</script>
      </Helmet>
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
