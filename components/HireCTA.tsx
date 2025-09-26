import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const HireCTA: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative mt-16 overflow-hidden rounded-3xl bg-slate-900 text-white">
      <div aria-hidden className="absolute inset-y-0 right-[-10%] h-full w-1/2 bg-gradient-to-l from-brand-500/60 to-transparent blur-3xl"></div>
      <div className="relative flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">{t('hireCta.badge')}</p>
          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{t('hireCta.title')}</h3>
          <p className="mt-4 text-sm sm:text-base text-white/80">{t('hireCta.description')}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100">
            {t('hireCta.primary')}
            <i className="fas fa-arrow-right text-sm"></i>
          </a>
          <a href="https://wa.me/34679794037" target="_blank" rel="noopener noreferrer" className="btn-secondary border-white/60 bg-white/10 text-white hover:bg-white/20">
            {t('hireCta.secondary')}
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HireCTA;
