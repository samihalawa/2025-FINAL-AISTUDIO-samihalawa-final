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
    <section className="border-b border-slate-300 py-14 sm:py-20">
      <div className="container">
        <div className="flex flex-col gap-3 border-b border-slate-400 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-900">{c.eyebrow}</span>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700"><span className="h-2 w-2 bg-emerald-600"></span>{c.available}</span>
        </div>

        <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(21rem,.75fr)] lg:gap-16 lg:py-14">
          <div>
            <h1 className="cv-serif max-w-5xl text-[clamp(3.4rem,7vw,7.1rem)] font-normal leading-[0.91] tracking-[-0.05em] text-slate-950">{c.title}</h1>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-700">{c.intro}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/projects" className="btn-primary">{c.work}<i className="fas fa-arrow-right text-sm"></i></Link>
              <Link to="/cv" className="btn-secondary">{c.cv}<i className="fas fa-file-lines text-sm"></i></Link>
            </div>
          </div>

          <aside className="flex flex-col justify-end border-t border-slate-400 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="grid grid-cols-[6.25rem_1fr] items-start gap-5">
              <img src="/portfolio/sami-photo.webp" alt="Sami Halawa Ribas" width="184" height="178" className="h-[100px] w-[100px] border border-slate-400 object-cover object-top" />
              <div><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-900">{c.proofTitle}</p><p className="mt-2 text-sm leading-relaxed text-slate-600">{c.proofBody}</p></div>
            </div>
            <div className="mt-8 border-t border-slate-400 pt-5">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-slate-600">{c.now}</p>
              <ol className="mt-3 border-t border-slate-300">
                {c.building.map((item, index) => <li key={item} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-slate-300 py-3"><span className="font-mono text-xs font-bold text-brand-800">0{index + 1}</span><span className="font-semibold text-slate-800">{item}</span></li>)}
              </ol>
            </div>
          </aside>
        </div>

        <dl className="grid grid-cols-2 border-y border-slate-400 sm:grid-cols-4">
          {c.stats.map((stat, index) => <div key={stat.label} className={`py-5 pr-4 sm:px-5 ${index % 2 === 1 ? 'border-l border-slate-300' : ''} ${index > 1 ? 'border-t border-slate-300 sm:border-t-0' : ''} ${index > 0 ? 'sm:border-l' : ''}`}><dd className="cv-serif text-3xl font-semibold tracking-tight text-slate-950">{stat.value}</dd><dt className="mt-1 text-xs font-bold uppercase leading-tight tracking-[0.1em] text-slate-500">{stat.label}</dt></div>)}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
