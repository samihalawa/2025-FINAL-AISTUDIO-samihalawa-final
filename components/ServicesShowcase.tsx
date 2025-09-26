import React from 'react';
import { SERVICE_MENU_SECTIONS } from '../constants';
import { useTranslation } from '../i18n/LanguageContext';

const ServicesShowcase: React.FC = () => {
  const { t } = useTranslation();
  const services = SERVICE_MENU_SECTIONS.flatMap(section => (
    section.items.map(item => ({
      ...item,
      sectionKey: section.titleKey,
    }))
  ));

  const featured = services.slice(0, 6);

  return (
    <section className="relative py-24" aria-labelledby="home-services-title">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-pill inline-flex items-center gap-2 text-brand-700">
            <i className="fas fa-layer-group"></i>
            {t('home.servicesShowcase.badge')}
          </span>
          <h2 id="home-services-title" className="section-heading mt-4">{t('home.servicesShowcase.title')}</h2>
          <p className="section-subtitle mx-auto mt-3">{t('home.servicesShowcase.description')}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="group glass-panel relative flex h-full flex-col justify-between overflow-hidden p-6 shadow-soft-xl transition hover:-translate-y-1"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                <span>{t(item.sectionKey)}</span>
                <span className="rounded-full bg-brand-50 px-2 py-1 text-brand-600">#{index + 1}</span>
              </div>
              <div className="mt-5">
                <h3 className="text-xl font-semibold text-slate-900">{t(item.labelKey)}</h3>
                <p className="mt-3 text-sm text-slate-600">{t('home.servicesShowcase.subtitle')}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                {t('home.servicesShowcase.learnMore')}
                <i className="fas fa-arrow-right transition group-hover:translate-x-1"></i>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-slate-600">{t('home.servicesShowcase.meta')}</p>
          <a href="/services" className="btn-secondary">
            {t('home.servicesShowcase.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
