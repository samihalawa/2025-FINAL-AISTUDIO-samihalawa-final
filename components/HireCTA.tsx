import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

const content: Record<LanguageCode, { badge: string; title: string; body: string; action: string }> = {
  en: { badge: 'Open to full-time roles', title: 'Need a senior AI engineer who can take a system from architecture to production?', body: 'Based in Madrid and available for senior or lead software and AI engineering roles across Spain and Europe.', action: 'Discuss a role' },
  es: { badge: 'Abierto a puestos a jornada completa', title: '¿Necesitas un ingeniero sénior de IA que lleve un sistema desde la arquitectura hasta producción?', body: 'En Madrid y disponible para puestos sénior o lead de ingeniería de software e IA en España y Europa.', action: 'Hablar de un rol' },
  fr: { badge: 'Ouvert aux postes à temps plein', title: 'Besoin d’un ingénieur IA senior capable de mener un système de l’architecture à la production ?', body: 'Basé à Madrid et disponible pour des postes senior ou lead en ingénierie logicielle et IA en Espagne et en Europe.', action: 'Parler d’un rôle' },
  zh: { badge: '寻找全职职位', title: '需要一位能把系统从架构推进到生产的高级 AI 工程师吗？', body: '常驻马德里，可在西班牙及欧洲担任高级或主管级软件与 AI 工程岗位。', action: '沟通岗位' },
};

const HireCTA: React.FC = () => {
  const { language } = useTranslation();
  const c = content[language];
  return (
    <section className="relative mt-16 overflow-hidden rounded-3xl bg-slate-900 text-white">
      <div aria-hidden className="absolute inset-y-0 right-[-10%] h-full w-1/2 bg-gradient-to-l from-brand-500/60 to-transparent blur-3xl" />
      <div className="relative flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">{c.badge}</p>
          <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{c.title}</h3>
          <p className="mt-4 text-sm text-white/80 sm:text-base">{c.body}</p>
        </div>
        <Link to="/contact" className="btn-primary shrink-0 bg-white text-slate-900 hover:bg-slate-100">
          {c.action}<i className="fas fa-arrow-right text-sm" />
        </Link>
      </div>
    </section>
  );
};

export default HireCTA;
