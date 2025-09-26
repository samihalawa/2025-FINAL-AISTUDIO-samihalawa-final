import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const items = [
  { href: '/case-studies/autoclient', titleKey: 'home.caseStudies.autoclient.title' as const, descKey: 'home.caseStudies.autoclient.description' as const },
  { href: '/case-studies/radiology-ai', titleKey: 'home.caseStudies.radiology.title' as const, descKey: 'home.caseStudies.radiology.description' as const },
  { href: '/case-studies/banking-assistant', titleKey: 'home.caseStudies.banking.title' as const, descKey: 'home.caseStudies.banking.description' as const },
];

const FeaturedCaseStudies: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-24" aria-labelledby="home-case-studies-heading" id="case-studies">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill inline-flex items-center gap-2 text-brand-700">
            <i className="fas fa-briefcase"></i>
            {t('home.caseStudies.badge')}
          </span>
          <h2 id="home-case-studies-heading" className="section-heading mt-4">{t('home.caseStudies.title')}</h2>
          <p className="section-subtitle mx-auto mt-3">{t('home.caseStudies.subtitle')}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map(item => (
            <a key={item.href} href={item.href} className="group glass-panel flex h-full flex-col justify-between overflow-hidden p-6 shadow-soft-xl transition hover:-translate-y-1">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{t('home.caseStudies.category')}</div>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{t(item.titleKey)}</h3>
                <p className="mt-3 text-sm text-slate-600">{t(item.descKey)}</p>
              </div>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                {t('home.caseStudies.learnMore')}
                <i className="fas fa-arrow-right transition group-hover:translate-x-1"></i>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
