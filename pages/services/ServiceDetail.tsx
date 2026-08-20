import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import { SERVICE_DETAILS, detailLabels } from './serviceDetails';

// Shared depth block for every /services/* page: who it is for, the operating
// problem, scope and exclusions, deliverables, duration, and the case study
// that shows the same work delivered. The page keeps its own single CTA.
const ServiceDetail: React.FC<{ slug: string }> = ({ slug }) => {
  const { language } = useTranslation();
  const detail = SERVICE_DETAILS[slug];
  if (!detail) return null;
  const l = detailLabels(language);

  const List: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
    <div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <ul className="mt-3 list-disc list-inside space-y-2 text-slate-700">
        {items.map((item) => (<li key={item}>{item}</li>))}
      </ul>
    </div>
  );

  return (
    <div className="mt-12 border-t border-slate-200 pt-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-slate-900">{l.audience}</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">{detail.audience}</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900">{l.problem}</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">{detail.problem}</p>
        </div>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <List title={l.scope} items={detail.scope} />
        <List title={l.exclusions} items={detail.exclusions} />
        <List title={l.deliverables} items={detail.deliverables} />
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
          <h3 className="text-lg font-bold text-slate-900">{l.duration}</h3>
          <p className="mt-2 text-slate-700">{detail.duration}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
          <h3 className="text-lg font-bold text-slate-900">{l.related}</h3>
          <ul className="mt-2 list-disc list-inside space-y-1 text-slate-700">
            {detail.related.map((link) => (
              <li key={link.href}>
                <Link className="underline" to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
