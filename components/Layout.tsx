import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import { useTranslation } from '../i18n/LanguageContext';
import BackToTop from './BackToTop';

const Layout: React.FC = () => {
  const location = useLocation();
  const { language, t } = useTranslation();
  const siteUrl = 'https://samihalawa.com';
  const canonical = `${siteUrl}${location.pathname}`;
  const defaultOg = `${siteUrl}/portfolio/vuda-annotated.png`;
  const defaultTitle = t('layout.defaultTitle');
  const titleTemplate = t('layout.titleTemplate');
  const siteName = t('layout.siteName');
  const jobTitle = t('layout.jobTitle');
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sami Halawa',
    url: siteUrl,
    sameAs: [
      'https://www.linkedin.com/in/samihalawa',
      'https://github.com/samihalawa',
      'https://huggingface.co/samihalawa'
    ],
    jobTitle,
  };
  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
  return (
    <div className="relative min-h-screen text-slate-800">
      <a
        href="#main-content"
        className="sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[200] focus-visible:rounded-full focus-visible:bg-slate-900 focus-visible:px-4 focus-visible:py-2 focus-visible:text-white focus-visible:no-underline"
      >
        {t('ui.skipToContent')}
      </a>
      <Helmet defaultTitle={defaultTitle} titleTemplate={titleTemplate}>
        <meta name="theme-color" content="#0f172a" />
        <meta property="og:site_name" content="Sami Halawa" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content={defaultOg} />
        <meta name="twitter:image" content={defaultOg} />
        <meta property="og:locale" content={language === 'en' ? 'en_US' : language === 'es' ? 'es_ES' : language === 'fr' ? 'fr_FR' : 'zh_CN'} />
        {/* Alternate locales for social previews */}
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="zh_CN" />
        {/* Canonical and hreflang alternates */}
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href={canonical} />
        <link rel="alternate" hrefLang="en" href={canonical} />
        <link rel="alternate" hrefLang="es" href={canonical} />
        <link rel="alternate" hrefLang="fr" href={canonical} />
        <link rel="alternate" hrefLang="zh" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(webSiteJsonLd)}</script>
      </Helmet>

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
