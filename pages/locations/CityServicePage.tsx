import React from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { CITY_SERVICE_CONTENT, labels, pick } from './locationContent';

type Props = {
  serviceKey: string;
  cityKey: 'madrid' | 'barcelona' | 'valencia';
  path: string;
};

const CityServicePage: React.FC<Props> = ({ serviceKey, cityKey, path }) => {
  const { t, language } = useTranslation();
  const titleBase = t(`services.${serviceKey}.title` as any);
  const description = t(`services.${serviceKey}.description` as any);
  const city = t(`city.${cityKey}` as any);
  const title = `${titleBase} — ${city}`;
  const entry = CITY_SERVICE_CONTENT[path];
  const content = entry ? pick(entry, language) : null;
  const l = labels(language);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-6">{description}</p>

        {content && (
          <>
            <p className="text-lg leading-relaxed text-slate-700 mb-10">{content.lead}</p>

            <div className="grid gap-6 md:grid-cols-2">
              {content.sections.map((section) => (
                <div key={section.heading} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <h2 className="text-xl font-bold text-slate-900">{section.heading}</h2>
                  <p className="mt-3 text-slate-700 leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-slate-900">{l.faq}</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {content.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-sm text-slate-700">
              <span className="font-semibold">{l.related}</span>
              <ul className="mt-2 list-disc list-inside space-y-1">
                {content.related.map((link) => (
                  <li key={link.href}>
                    <Link className="underline" to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">{t('hero.contactButton')}</Link>
          <Link to="/ai-training" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">{t('nav.training')}</Link>
        </div>
      </div>
    </section>
  );
};

export default CityServicePage;
