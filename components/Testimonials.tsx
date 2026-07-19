import React from 'react';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

const copy: Record<LanguageCode, { eyebrow: string; title: string; body: string; items: { value: string; label: string; href: string }[] }> = {
  en: { eyebrow: 'Across the public work', title: 'Follow the work where it lives.', body: 'Explore the code, technical writing, open-source community and full career profile.', items: [
    { value: '249', label: 'original public repositories on GitHub', href: 'https://github.com/samihalawa' },
    { value: '12', label: 'technical articles on Hugging Face', href: 'https://huggingface.co/samihalawa/posts' },
    { value: '80★', label: 'for the VUDA visual debugging agent', href: 'https://github.com/samihalawa/visual-ui-debug-agent-mcp' },
    { value: '4', label: 'portfolio languages: English, Spanish, French and Chinese', href: '/cv' },
  ]},
  es: { eyebrow: 'Trabajo público', title: 'Sigue el trabajo donde vive.', body: 'Explora el código, la escritura técnica, la comunidad open source y el perfil profesional completo.', items: [
    { value: '249', label: 'repositorios públicos propios en GitHub', href: 'https://github.com/samihalawa' },
    { value: '12', label: 'artículos técnicos en Hugging Face', href: 'https://huggingface.co/samihalawa/posts' },
    { value: '80★', label: 'para el agente de depuración visual VUDA', href: 'https://github.com/samihalawa/visual-ui-debug-agent-mcp' },
    { value: '4', label: 'idiomas: inglés, español, francés y chino', href: '/cv' },
  ]},
  fr: { eyebrow: 'Travail public', title: 'Suivez le travail là où il vit.', body: 'Explorez le code, les articles techniques, la communauté open source et le parcours complet.', items: [
    { value: '249', label: 'dépôts publics originaux sur GitHub', href: 'https://github.com/samihalawa' },
    { value: '12', label: 'articles techniques sur Hugging Face', href: 'https://huggingface.co/samihalawa/posts' },
    { value: '80★', label: 'pour l’agent de débogage visuel VUDA', href: 'https://github.com/samihalawa/visual-ui-debug-agent-mcp' },
    { value: '4', label: 'langues : anglais, espagnol, français et chinois', href: '/cv' },
  ]},
  zh: { eyebrow: '公开作品', title: '在作品真实所在之处继续探索。', body: '查看代码、技术文章、开源社区与完整职业资料。', items: [
    { value: '249', label: 'GitHub 原创公开仓库', href: 'https://github.com/samihalawa' },
    { value: '12', label: 'Hugging Face 技术文章', href: 'https://huggingface.co/samihalawa/posts' },
    { value: '80★', label: 'VUDA 视觉调试智能体', href: 'https://github.com/samihalawa/visual-ui-debug-agent-mcp' },
    { value: '4', label: '作品集语言：英语、西班牙语、法语和中文', href: '/cv' },
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
