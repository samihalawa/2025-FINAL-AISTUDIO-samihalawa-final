import React from 'react';
import { SERVICE_MENU_SECTIONS } from '../constants';
import { useTranslation } from '../i18n/LanguageContext';

const ServicesShowcase: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-white" aria-labelledby="home-services-title">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-10">
          <h2 id="home-services-title" className="text-3xl md:text-4xl font-bold text-slate-900">{t('home.servicesShowcase.title')}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-2">{t('home.servicesShowcase.description')}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_MENU_SECTIONS.flatMap(section => (
            section.items.map(item => (
              <a key={item.href} href={item.href} className="block border border-slate-200 rounded-lg p-5 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="text-sm uppercase tracking-wide text-slate-500 mb-1">{t(section.titleKey)}</div>
                <div className="text-lg font-semibold text-slate-900">{t(item.labelKey)}</div>
              </a>
            ))
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;