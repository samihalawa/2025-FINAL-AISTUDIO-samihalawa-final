import React from 'react';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

const copy: Record<LanguageCode, { eyebrow: string; title: string; body: string; items: { value: string; label: string; href: string }[] }> = {
  en: { eyebrow: 'Evidence instead of testimonials', title: 'Inspect the work directly.', body: 'This site no longer uses placeholder people or invented quotes. These links expose the public artifacts and current product surfaces.', items: [
    { value: '700', label: 'public GitHub repositories · 249 non-forks', href: 'https://github.com/samihalawa' },
    { value: '12', label: 'public Hugging Face articles · API lists 17 Spaces', href: 'https://huggingface.co/samihalawa/posts' },
    { value: 'LIVE', label: 'OULANG web product · public store listings and current wrapper identity tracked separately', href: 'https://oulang.ai' },
    { value: '97', label: 'verified lesson, meeting and project videos', href: '/cv' }
  ]},
  es: { eyebrow: 'Evidencia en vez de testimonios', title: 'Inspecciona el trabajo directamente.', body: 'La web ya no usa personas de relleno ni citas inventadas. Estos enlaces muestran artefactos públicos y productos actuales.', items: [
    { value: '700', label: 'repositorios públicos · 249 no-forks', href: 'https://github.com/samihalawa' }, { value: '12', label: 'artículos públicos · la API lista 17 Spaces', href: 'https://huggingface.co/samihalawa/posts' }, { value: 'LIVE', label: 'producto web OULANG · tiendas públicas e identidad actual separadas', href: 'https://oulang.ai' }, { value: '97', label: 'vídeos verificados de clases, reuniones y proyectos', href: '/cv' }
  ]},
  fr: { eyebrow: 'Des preuves, pas de faux témoignages', title: 'Inspectez directement le travail.', body: 'Ces liens montrent les artefacts publics et produits actuels.', items: [
    { value: '700', label: 'dépôts publics · 249 non-forks', href: 'https://github.com/samihalawa' }, { value: '12', label: 'articles publics · l’API liste 17 Spaces', href: 'https://huggingface.co/samihalawa/posts' }, { value: 'LIVE', label: 'produit web OULANG · stores publics et identité actuelle séparés', href: 'https://oulang.ai' }, { value: '97', label: 'vidéos vérifiées', href: '/cv' }
  ]},
  zh: { eyebrow: '用证据代替占位推荐语', title: '直接检查工作成果。', body: '这些链接展示公开工件和当前产品，不再使用虚构人物或引语。', items: [
    { value: '700', label: '公开 GitHub 仓库 · 249 非 fork', href: 'https://github.com/samihalawa' }, { value: '12', label: '公开文章 · API 列出 17 个 Spaces', href: 'https://huggingface.co/samihalawa/posts' }, { value: 'LIVE', label: 'OULANG Web 产品 · 公开商店页面与当前身份分开记录', href: 'https://oulang.ai' }, { value: '97', label: '已验证课程、会议与项目视频', href: '/cv' }
  ]}
};

const Testimonials: React.FC = () => {
  const { language } = useTranslation();
  const c = copy[language];
  return (
    <section className="border-y border-slate-800 bg-slate-950 py-20 text-white sm:py-24">
      <div className="container"><div className="max-w-3xl"><span className="inline-flex rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[.15em] text-brand-200">{c.eyebrow}</span><h2 className="mt-5 font-display text-4xl font-bold tracking-[-.035em] text-white sm:text-5xl">{c.title}</h2><p className="mt-4 text-lg leading-relaxed text-slate-300">{c.body}</p></div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">{c.items.map(item => <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="group min-h-44 bg-slate-950 p-6 text-white hover:bg-slate-900"><div className="text-4xl font-bold tracking-tight text-brand-200">{item.value}</div><p className="mt-3 text-sm font-semibold leading-relaxed text-slate-300">{item.label}</p><i className="fas fa-arrow-up-right-from-square mt-5 text-xs text-white/40 transition group-hover:text-brand-200"></i></a>)}</div>
      </div>
    </section>
  );
};

export default Testimonials;
