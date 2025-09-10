import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../../i18n/LanguageContext';
import { Link } from 'react-router-dom';

type Props = {
  serviceKey: string; // e.g., 'aiReadinessAudit'
  cityKey: 'madrid' | 'barcelona' | 'valencia';
  path: string; // canonical path
};

const ogMap: Record<string, string> = {
  aiReadinessAudit: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=80',
  promptEngineering: 'https://images.unsplash.com/photo-1556157382-1b4a2e0?auto=format&fit=crop&w=1200&h=630&q=80',
  ragLangChain: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&h=630&q=80',
  businessAutomation: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&h=630&q=80',
};

const CityServicePage: React.FC<Props> = ({ serviceKey, cityKey, path }) => {
  const { t } = useTranslation();
  const titleBase = t(`services.${serviceKey}.title` as any);
  const descBase = t(`services.${serviceKey}.description` as any);
  const city = t(`city.${cityKey}` as any);
  const title = `${titleBase} — ${city}`;
  const description = `${descBase}`;
  const ogImage = ogMap[serviceKey] || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80';
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="canonical" href={path} />
      </Helmet>
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

