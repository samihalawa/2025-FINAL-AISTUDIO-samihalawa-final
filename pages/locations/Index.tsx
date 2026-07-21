import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import type { TranslationKey } from '../../i18n/translations';

const cities: Array<{ href: string; titleKey: TranslationKey; descKey: TranslationKey }> = [
  { href: '/locations/madrid', titleKey: 'city.madrid', descKey: 'locations.index.city.madrid.description' },
  { href: '/locations/barcelona', titleKey: 'city.barcelona', descKey: 'locations.index.city.barcelona.description' },
  { href: '/locations/valencia', titleKey: 'city.valencia', descKey: 'locations.index.city.valencia.description' },
  { href: '/locations/spain', titleKey: 'locations.index.city.spain.title', descKey: 'locations.index.city.spain.description' },
  { href: '/locations/online', titleKey: 'locations.index.city.online.title', descKey: 'locations.index.city.online.description' },
];

const LocationsIndex: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">{t('locations.title')}</h1>
        <p className="text-lg text-slate-700 mb-8">{t('locations.description')}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map(c => (
            <Link key={c.href} to={c.href} className="block bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">{t(c.titleKey)}</h2>
              <p className="text-slate-700">{t(c.descKey)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsIndex;
