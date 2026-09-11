import React from 'react';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

const copy: Record<LanguageCode, { eyebrow: string; title: string; body: string; items: { value: string; label: string; href: string }[] }> = {
  en: { eyebrow: 'Across the public work', title: 'Follow the work where it lives.', body: 'Explore the code, technical writing, open-source tools and videos.', items: [
    { value: 'GitHub', label: 'Open-source code and developer tools', href: 'https://github.com/samihalawa' },
    { value: 'Hugging Face', label: 'Technical writing and model work', href: 'https://huggingface.co/samihalawa' },
    { value: 'LinkedIn', label: 'Experience, recommendations and profile', href: 'https://www.linkedin.com/in/samihalawa/' },
    { value: 'YouTube', label: 'Videos on AI, automation and product', href: 'https://www.youtube.com/@autoclientai' },
  ]},
  es: { eyebrow: 'Trabajo público', title: 'Sigue el trabajo donde vive.', body: 'Explora el código, la escritura técnica, las herramientas open source y los vídeos.', items: [
    { value: 'GitHub', label: 'Código open source y herramientas de desarrollo', href: 'https://github.com/samihalawa' },
    { value: 'Hugging Face', label: 'Escritura técnica y trabajo con modelos', href: 'https://huggingface.co/samihalawa' },
    { value: 'LinkedIn', label: 'Experiencia, recomendaciones y perfil', href: 'https://www.linkedin.com/in/samihalawa/' },
    { value: 'YouTube', label: 'Vídeos sobre IA, automatización y producto', href: 'https://www.youtube.com/@autoclientai' },
  ]},
  fr: { eyebrow: 'Travail public', title: 'Suivez le travail là où il vit.', body: 'Explorez le code, les articles techniques, les outils open source et les vidéos.', items: [
    { value: 'GitHub', label: 'Code open source et outils de développement', href: 'https://github.com/samihalawa' },
    { value: 'Hugging Face', label: 'Articles techniques et travail sur les modèles', href: 'https://huggingface.co/samihalawa' },
    { value: 'LinkedIn', label: 'Expérience, recommandations et profil', href: 'https://www.linkedin.com/in/samihalawa/' },
    { value: 'YouTube', label: 'Vidéos sur l’IA, l’automatisation et le produit', href: 'https://www.youtube.com/@autoclientai' },
  ]},
  zh: { eyebrow: '公开作品', title: '在作品真实所在之处继续探索。', body: '查看代码、技术文章、开源工具与视频。', items: [
    { value: 'GitHub', label: '开源代码与开发者工具', href: 'https://github.com/samihalawa' },
    { value: 'Hugging Face', label: '技术文章与模型工作', href: 'https://huggingface.co/samihalawa' },
    { value: 'LinkedIn', label: '经历、推荐与个人资料', href: 'https://www.linkedin.com/in/samihalawa/' },
    { value: 'YouTube', label: '关于 AI、自动化与产品的视频', href: 'https://www.youtube.com/@autoclientai' },
  ]},
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
