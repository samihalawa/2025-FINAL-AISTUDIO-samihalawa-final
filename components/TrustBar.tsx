import React from 'react';
import { PARTNERS } from '../constants';

const trustStats = [
  { label: 'Production launches', value: '40+' },
  { label: 'Avg ROI uplift', value: '3.4x' },
  { label: 'Time-to-value', value: '21 days' },
];

const TrustBar: React.FC = () => (
  <div className="bg-white/80 border border-slate-200 rounded-2xl shadow-soft-xl px-6 py-4 mt-6">
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-6 text-slate-600">
        {trustStats.map((item) => (
          <div key={item.label} className="text-sm">
            <div className="text-2xl font-extrabold text-slate-900">{item.value}</div>
            <div className="uppercase tracking-wide text-xs font-semibold">{item.label}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4 text-slate-500">
        {PARTNERS.map((partner) => (
          <div key={partner.name} className="flex items-center gap-2 text-sm font-semibold">
            <i className={`${partner.icon} text-lg`}></i>
            <span>{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
