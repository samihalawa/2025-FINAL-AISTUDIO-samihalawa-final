import React from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import { Link } from 'react-router-dom';

type Props = {
  serviceKey: string;
  cityKey: 'madrid' | 'barcelona' | 'valencia';
  path: string;
};

const CityServicePage: React.FC<Props> = ({ serviceKey, cityKey }) => {
  const { t } = useTranslation();
  const titleBase = t(`services.${serviceKey}.title` as any);
  const description = t(`services.${serviceKey}.description` as any);
  const city = t(`city.${cityKey}` as any);
  const title = `${titleBase} — ${city}`;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">{description}</p>
        <div className="mt-8 flex gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">{t('hero.contactButton')}</Link>
          <Link to="/ai-training" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">{t('nav.training')}</Link>
        </div>
      </div>
    </section>
  );
};

export default CityServicePage;
