import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

const content: Record<LanguageCode, {
  eyebrow: string; title: string; intro: string; work: string; cv: string; available: string;
  proofTitle: string; proofBody: string; now: string; building: string[]; stats: { value: string; label: string }[];
}> = {
  en: {
    eyebrow: 'Founder-engineer · Madrid · Europe',
    title: 'I build AI products from first decision to live operation.',
    intro: 'Founder-engineer working across product strategy, agents, data, web and mobile, deployment and growth. One owner from the first useful prototype to the product people actually use.',
    work: 'Explore the portfolio', cv: 'Open complete CV', available: 'Open to founding AI, product and platform roles',
    proofTitle: 'At a glance', proofBody: 'Founder of Agents AI Ltd and builder of OULANG, AutoClient and specialist agent systems, with 84 projects and collaborations across products, open source, research and education.',
    now: 'Core strengths', building: ['Zero-to-one product engineering', 'Agent, MCP and automation systems', 'Multilingual web and mobile platforms'],
    stats: [{ value: '84', label: 'projects & collaborations' }, { value: '249', label: 'original public repositories' }, { value: '373', label: 'public videos' }, { value: '12', label: 'technical articles' }]
  },
  es: {
    eyebrow: 'Fundador e ingeniero · Madrid · Europa',
    title: 'Construyo productos de IA desde la primera decisión hasta la operación real.',
    intro: 'Fundador e ingeniero entre estrategia de producto, agentes, datos, web y móvil, despliegue y crecimiento. Un único responsable desde el primer prototipo útil hasta el producto que usa la gente.',
    work: 'Explorar el portfolio', cv: 'Abrir CV completo', available: 'Disponible para roles founding, producto y plataforma',
    proofTitle: 'En pocas palabras', proofBody: 'Fundador de Agents AI Ltd y creador de OULANG, AutoClient y sistemas de agentes especializados, con 84 proyectos y colaboraciones en producto, open source, investigación y educación.',
    now: 'Fortalezas', building: ['Ingeniería de producto zero-to-one', 'Agentes, MCP y automatización', 'Plataformas multilingües web y móvil'],
    stats: [{ value: '84', label: 'proyectos y colaboraciones' }, { value: '249', label: 'repositorios públicos propios' }, { value: '373', label: 'vídeos públicos' }, { value: '12', label: 'artículos técnicos' }]
  },
  fr: {
    eyebrow: 'Fondateur-ingénieur · Madrid · Europe',
    title: 'Je construis des produits IA, de la première décision à l’exploitation réelle.',
    intro: 'Fondateur-ingénieur entre stratégie produit, agents, données, web et mobile, déploiement et croissance. Un seul responsable du premier prototype utile au produit réellement utilisé.',
    work: 'Explorer le portfolio', cv: 'Ouvrir le CV complet', available: 'Ouvert aux rôles founding, produit et plateforme',
    proofTitle: 'En bref', proofBody: 'Fondateur d’Agents AI Ltd et créateur d’OULANG, AutoClient et de systèmes d’agents spécialisés, avec 84 projets et collaborations en produit, open source, recherche et formation.',
    now: 'Points forts', building: ['Ingénierie produit zero-to-one', 'Agents, MCP et automatisation', 'Plateformes web et mobiles multilingues'],
    stats: [{ value: '84', label: 'projets et collaborations' }, { value: '249', label: 'dépôts publics originaux' }, { value: '373', label: 'vidéos publiques' }, { value: '12', label: 'articles techniques' }]
  },
  zh: {
    eyebrow: '创始人工程师 · 马德里 · 欧洲',
    title: '我把 AI 产品从第一项决策构建到真实运营。',
    intro: '创始人工程师，横跨产品战略、智能体、数据、Web 与移动端、部署和增长。从第一个有用原型到真正被使用的产品，全程负责。',
    work: '浏览作品集', cv: '打开完整简历', available: '开放创始工程师、产品与平台岗位',
    proofTitle: '快速了解', proofBody: 'Agents AI Ltd 创始人，OULANG、AutoClient 及专业智能体系统的构建者，拥有覆盖产品、开源、研究与教育的 84 个项目与合作。',
    now: '核心能力', building: ['从零到一的产品工程', '智能体、MCP 与自动化系统', '多语言 Web 与移动平台'],
    stats: [{ value: '84', label: '项目与合作' }, { value: '249', label: '原创公开仓库' }, { value: '373', label: '公开视频' }, { value: '12', label: '技术文章' }]
  }
};

const Hero: React.FC = () => {
  const { language } = useTranslation();
  const c = content[language];

  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 py-16 sm:py-20 lg:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,.85fr)] lg:gap-16">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="badge-pill">{c.eyebrow}</span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800"><span className="h-2 w-2 rounded-full bg-emerald-500"></span>{c.available}</span>
          </div>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">{c.title}</h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-slate-600">{c.intro}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/projects" className="btn-primary">{c.work}<i className="fas fa-arrow-right text-sm"></i></Link>
            <Link to="/cv" className="btn-secondary">{c.cv}<i className="fas fa-file-lines text-sm"></i></Link>
          </div>
          <dl className="mt-11 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-4">
            {c.stats.map((stat) => <div key={stat.label} className="bg-white px-4 py-5"><dd className="text-2xl font-bold tracking-tight text-slate-950">{stat.value}</dd><dt className="mt-1 text-xs font-semibold leading-tight text-slate-500">{stat.label}</dt></div>)}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft-xl sm:p-6">
            <div className="grid grid-cols-[92px_1fr] items-center gap-5 border-b border-slate-200 pb-5">
              <img src="/portfolio/sami-photo.webp" alt="Sami Halawa Ribas" width="184" height="178" className="h-[92px] w-[92px] rounded-2xl object-cover object-top" />
              <div><p className="text-sm font-bold uppercase tracking-[.18em] text-brand-700">{c.proofTitle}</p><p className="mt-2 text-sm leading-relaxed text-slate-600">{c.proofBody}</p></div>
            </div>
            <div className="pt-5"><p className="text-xs font-bold uppercase tracking-[.2em] text-slate-500">{c.now}</p><ul className="mt-3 space-y-3">{c.building.map((item, index) => <li key={item} className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-800">0{index + 1}</span><span className="font-semibold text-slate-800">{item}</span></li>)}</ul></div>
          </div>
          <div className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-[2rem] border border-brand-200 bg-brand-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
