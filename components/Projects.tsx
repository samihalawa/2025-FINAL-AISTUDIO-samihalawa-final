import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';
import ProductionArchive from './ProductionArchive';
import {
  PORTFOLIO_STORIES,
  categoryCopy,
  getProjectStoryCopy,
  getStoryIncludes,
  type PortfolioCategory,
} from '../portfolio';

const storyLabels: Record<LanguageCode, { challenge: string; build: string; role: string }> = {
  en: { challenge: 'The problem', build: 'What I built', role: 'Role' },
  es: { challenge: 'El problema', build: 'Qué construí', role: 'Rol' },
  fr: { challenge: 'Le problème', build: 'Ce que j’ai construit', role: 'Rôle' },
  zh: { challenge: '问题', build: '构建内容', role: '角色' },
};

const headings: Record<LanguageCode, {
  eyebrow: string;
  title: string;
  body: string;
  stats: [string, string, string, string];
  approachEyebrow: string;
  approachTitle: string;
  approachBody: string;
  approach: { number: string; title: string; body: string }[];
  selectedEyebrow: string;
  selectedTitle: string;
  selectedBody: string;
  visit: string;
  archiveEyebrow: string;
  archiveTitle: string;
  archiveBody: string;
  search: string;
  allLanes: string;
  results: string;
  noResults: string;
  open: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
  cta: string;
}> = {
  en: {
    eyebrow: 'Selected work · 2023–today',
    title: 'AI products built from first decision to live operation.',
    body: 'Three engineering stories showing multilingual platforms, data and ERP integration, agent tooling, deployment and production operation.',
    stats: ['flagship programmes', 'original public repositories', 'public videos', 'technical articles'],
    approachEyebrow: 'End-to-end technical ownership',
    approachTitle: 'End-to-end technical ownership across product, architecture, engineering and production.',
    approachBody: 'I keep product decisions, technical architecture and operating reality connected from the first decision to the live service.',
    approach: [
      { number: '01', title: 'Frame the product', body: 'Turn an ambiguous opportunity into a clear user journey, scope and release path.' },
      { number: '02', title: 'Build the system', body: 'Connect agents, data, APIs, web and mobile interfaces, infrastructure and analytics.' },
      { number: '03', title: 'Operate and improve', body: 'Launch, observe real use, solve the rough edges and keep the product moving.' },
    ],
    selectedEyebrow: 'Portfolio',
    selectedTitle: 'Three featured engineering case studies, selected for role relevance.',
    selectedBody: 'A multilingual production platform, a reviewable pricing and ERP workflow, and open-source tooling for agent visibility and context.',
    visit: 'Visit project',
    archiveEyebrow: 'Earlier work',
    archiveTitle: 'More products, collaborations and research.',
    archiveBody: 'Search projects by name, technology or year, or filter by area of work.',
    search: 'Search projects',
    allLanes: 'All workstreams',
    results: 'projects',
    noResults: 'No projects match this search.',
    open: 'Open project',
    ctaEyebrow: 'Engagement options',
    ctaTitle: 'Need this level of system built and operated for your team?',
    ctaBody: 'Direct B2B systems engineering, fractional AI leadership and technical due diligence from Madrid, across Europe and remote.',
    cta: 'Book a consultation',
  },
  es: {
    eyebrow: 'Trabajo seleccionado · 2023–hoy',
    title: 'Productos de IA, desde la primera decisión hasta la operación real.',
    body: 'Tres historias de ingeniería sobre plataformas multilingües, integración de datos y ERP, tooling de agentes, despliegue y operación en producción.',
    stats: ['programas principales', 'repositorios públicos propios', 'vídeos públicos', 'artículos técnicos'],
    approachEyebrow: 'Responsabilidad técnica integral',
    approachTitle: 'Responsabilidad técnica integral en producto, arquitectura, ingeniería y producción.',
    approachBody: 'Mantengo conectadas las decisiones de producto, la arquitectura técnica y la realidad operativa desde la primera decisión hasta el servicio en marcha.',
    approach: [
      { number: '01', title: 'Definir el producto', body: 'Convertir una oportunidad ambigua en un recorrido claro, un alcance y una ruta de lanzamiento.' },
      { number: '02', title: 'Construir el sistema', body: 'Conectar agentes, datos, APIs, interfaces web y móvil, infraestructura y analítica.' },
      { number: '03', title: 'Operar y mejorar', body: 'Lanzar, observar el uso real, resolver fricciones y mantener el producto avanzando.' },
    ],
    selectedEyebrow: 'Portfolio',
    selectedTitle: 'Tres casos de ingeniería destacados, seleccionados por relevancia profesional.',
    selectedBody: 'Una plataforma multilingüe en producción, un flujo revisable de pricing y ERP, y tooling open source para visibilidad y contexto de agentes.',
    visit: 'Visitar proyecto',
    archiveEyebrow: 'Trabajos anteriores',
    archiveTitle: 'Más productos, colaboraciones e investigación.',
    archiveBody: 'Busca proyectos por nombre, tecnología o año, o filtra por área de trabajo.',
    search: 'Buscar proyectos',
    allLanes: 'Todos los tipos',
    results: 'proyectos',
    noResults: 'Ningún proyecto coincide con la búsqueda.',
    open: 'Abrir proyecto',
    ctaEyebrow: 'Opciones de colaboración',
    ctaTitle: '¿Necesitas un sistema de este nivel construido y operado para tu equipo?',
    ctaBody: 'Ingeniería de sistemas B2B directa, liderazgo de IA fraccional y due diligence técnica desde Madrid, en Europa y en remoto.',
    cta: 'Reservar consulta',
  },
  fr: {
    eyebrow: 'Travaux sélectionnés · 2023–aujourd’hui',
    title: 'Des produits IA, de la première décision à l’exploitation réelle.',
    body: 'Trois récits d’ingénierie couvrant plateformes multilingues, intégration data et ERP, outils pour agents, déploiement et exploitation.',
    stats: ['programmes phares', 'dépôts publics originaux', 'vidéos publiques', 'articles techniques'],
    approachEyebrow: 'Responsabilité technique de bout en bout',
    approachTitle: 'Responsabilité technique de bout en bout : produit, architecture, ingénierie et production.',
    approachBody: 'Je maintiens les décisions produit, l’architecture technique et la réalité d’exploitation reliées, de la première décision au service en production.',
    approach: [
      { number: '01', title: 'Cadrer le produit', body: 'Transformer une opportunité ambiguë en parcours utilisateur, périmètre et trajectoire de lancement.' },
      { number: '02', title: 'Construire le système', body: 'Relier agents, données, APIs, interfaces web et mobiles, infrastructure et analyse.' },
      { number: '03', title: 'Exploiter et améliorer', body: 'Lancer, observer l’usage réel, corriger les frictions et poursuivre l’évolution.' },
    ],
    selectedEyebrow: 'Portfolio',
    selectedTitle: 'Trois études d’ingénierie mises en avant, choisies pour leur pertinence professionnelle.',
    selectedBody: 'Une plateforme multilingue en production, un workflow de pricing et ERP vérifiable, et des outils open source pour la visibilité et le contexte des agents.',
    visit: 'Visiter le projet',
    archiveEyebrow: 'Travaux antérieurs',
    archiveTitle: 'Plus de produits, collaborations et recherche.',
    archiveBody: 'Recherchez les projets par nom, technologie ou année, ou filtrez par domaine.',
    search: 'Rechercher des projets',
    allLanes: 'Tous les domaines',
    results: 'projets',
    noResults: 'Aucun projet ne correspond à cette recherche.',
    open: 'Ouvrir le projet',
    ctaEyebrow: 'Modes de collaboration',
    ctaTitle: 'Besoin d’un système de ce niveau, construit et exploité pour votre équipe ?',
    ctaBody: 'Ingénierie de systèmes B2B directe, leadership IA fractionné et due diligence technique depuis Madrid, en Europe et à distance.',
    cta: 'Réserver une consultation',
  },
  zh: {
    eyebrow: '精选作品 · 2023 至今',
    title: '从第一项决策到真实运营的 AI 产品。',
    body: '三个工程案例，涵盖多语言平台、数据与 ERP 集成、智能体工具、部署及生产运营。',
    stats: ['旗舰项目集', '原创公开仓库', '公开视频', '技术文章'],
    approachEyebrow: '端到端技术负责',
    approachTitle: '在产品、架构、工程与生产环节承担端到端技术责任。',
    approachBody: '我让产品决策、技术架构与真实运营情况从第一项决策一直连接到上线服务。',
    approach: [
      { number: '01', title: '定义产品', body: '把模糊机会转化为清晰的用户路径、范围与发布计划。' },
      { number: '02', title: '构建系统', body: '连接智能体、数据、API、Web 与移动界面、基础设施和分析。' },
      { number: '03', title: '运营与改进', body: '发布、观察真实使用、解决摩擦并持续推动产品。' },
    ],
    selectedEyebrow: '作品集',
    selectedTitle: '三个精选的工程案例，按岗位相关性挑选。',
    selectedBody: '一个生产级多语言平台、一个可审阅的定价与 ERP 工作流，以及提升智能体可见性与上下文能力的开源工具。',
    visit: '访问项目',
    archiveEyebrow: '早期作品',
    archiveTitle: '更多产品、合作与研究。',
    archiveBody: '按名称、技术或年份搜索项目，也可按工作方向筛选。',
    search: '搜索项目',
    allLanes: '全部类型',
    results: '个项目',
    noResults: '没有符合搜索条件的项目。',
    open: '打开项目',
    ctaEyebrow: '合作方式',
    ctaTitle: '需要为你的团队构建并运营这一水准的系统？',
    ctaBody: '直接 B2B 系统工程、兼职 AI 领导与技术尽调，常驻马德里，覆盖欧洲与远程。',
    cta: '预约咨询',
  },
};

const categoryOrder: PortfolioCategory[] = ['platforms', 'agents', 'applied', 'education'];
const flagshipStoryIds = new Set(['oulang', 'autopricing', 'vuda']);

const Projects: React.FC = () => {
  const { language } = useTranslation();
  const h = headings[language];

  return (
    <section id="projects" className="overflow-hidden border-b border-slate-300 bg-[#f8f6f1] pb-24 pt-12 sm:pt-16" aria-labelledby="projects-heading">
      <div className="container">
        <header className="border-b border-slate-400 pb-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,.8fr)] lg:items-end lg:gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">{h.eyebrow}</span>
              <h1 id="projects-heading" className="cv-serif mt-5 max-w-5xl text-[clamp(3rem,7vw,6.5rem)] font-normal leading-[.92] tracking-[-.045em] text-slate-950">{h.title}</h1>
            </div>
            <p className="border-t border-slate-400 pt-5 text-lg leading-relaxed text-slate-700 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">{h.body}</p>
          </div>
        </header>

        <section className="py-20 sm:py-24" aria-labelledby="portfolio-approach-heading">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div><span className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">{h.approachEyebrow}</span><h2 id="portfolio-approach-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">{h.approachTitle}</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">{h.approachBody}</p></div>
            <div className="grid border-t border-slate-400 sm:grid-cols-3">
              {h.approach.map((item, index) => <article key={item.number} className={`border-b border-slate-300 py-6 sm:px-6 ${index < 2 ? 'sm:border-r' : ''}`}><span className="font-mono text-sm font-bold text-brand-800">{item.number}</span><h3 className="cv-serif mt-8 text-xl font-semibold text-slate-950">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p></article>)}
            </div>
          </div>
        </section>

        <div className="max-w-4xl pt-20 sm:pt-24"><span className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">{h.selectedEyebrow}</span><h2 className="cv-serif mt-5 text-4xl font-normal tracking-[-.035em] text-slate-950 sm:text-5xl">{h.selectedTitle}</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{h.selectedBody}</p><Link to="/case-studies" className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-slate-600 text-sm font-bold text-slate-900 no-underline hover:border-slate-950">{language === 'es' ? 'Ver los cinco casos de estudio' : language === 'fr' ? 'Voir les cinq études de cas' : language === 'zh' ? '查看全部五个案例' : 'See all five case studies'}<i className="fas fa-arrow-right text-xs" /></Link></div>
        {categoryOrder.map(category => {
          const items = PORTFOLIO_STORIES.filter(story => story.category === category && flagshipStoryIds.has(story.id));
          if (!items.length) return null;
          return <section key={category} className="mt-14" aria-labelledby={`category-${category}`}><div className="mb-6 flex items-center gap-4"><h3 id={`category-${category}`} className="text-xl font-bold text-slate-950 sm:text-2xl">{categoryCopy[category][language]}</h3><span className="h-px flex-1 bg-slate-300" /><span className="text-sm font-bold tabular-nums text-slate-500">{String(items.length).padStart(2, '0')}</span></div>
            <div className="grid border-l border-t border-slate-400 lg:grid-cols-2">{items.map(story => { const copy = getProjectStoryCopy(story, language); return <article id={story.id} key={story.id} className="group scroll-mt-24 flex min-h-full flex-col border-b border-r border-slate-400 bg-white">
              <div className="aspect-[16/9] overflow-hidden border-b border-slate-300 bg-slate-100"><img src={story.image} alt={`${story.name} ${story.imageKind === 'illustration' ? 'project cover' : 'interface'}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.015]" style={{ objectPosition: story.imagePosition || 'center' }} loading="lazy" /></div>
              <div className="flex flex-1 flex-col p-6 sm:p-8"><div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[.14em]"><span className="text-slate-500">{storyLabels[language].role}: {copy.role}</span></div><h4 className="cv-serif mt-4 text-3xl font-semibold leading-tight text-slate-950">{story.name}</h4><p className="mt-3 text-base leading-7 text-slate-600">{copy.description}</p>
                <dl className="mt-7 grid border-t border-slate-300 sm:grid-cols-2"><div className="border-b border-slate-300 py-5 sm:border-r sm:pr-5"><dt className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{storyLabels[language].challenge}</dt><dd className="mt-2 text-sm leading-6 text-slate-700">{copy.challenge}</dd></div><div className="border-b border-slate-300 py-5 sm:pl-5"><dt className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{storyLabels[language].build}</dt><dd className="mt-2 text-sm leading-6 text-slate-700">{copy.build}</dd></div></dl>
                <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-3 pt-6"><span className="text-xs font-semibold text-slate-500">{getStoryIncludes(story, language).join(' · ')}</span>{story.caseStudy && <Link to={story.caseStudy} className="ml-auto inline-flex min-h-11 items-center gap-2 border-b border-slate-600 text-sm font-bold text-slate-900 hover:border-slate-950">{h.open}<i className="fas fa-arrow-right text-xs" /></Link>}{story.href && !story.caseStudy && <a href={story.href} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex min-h-11 items-center gap-2 border-b border-slate-600 text-sm font-bold text-slate-900 hover:border-slate-950">{h.visit}<i className="fas fa-arrow-up-right-from-square text-xs" /></a>}</div>
              </div>
            </article>; })}</div>
          </section>;
        })}

        <ProductionArchive />

        <section className="mt-24 border-y border-slate-950 bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl"><span className="text-xs font-bold uppercase tracking-[.18em] text-brand-200">{h.ctaEyebrow}</span><h2 className="mt-4 font-display text-3xl font-bold tracking-[-.04em] text-white sm:text-5xl">{h.ctaTitle}</h2><p className="mt-4 text-lg leading-relaxed text-slate-300">{h.ctaBody}</p></div>
          <Link to="/contact" className="btn-primary mt-8 shrink-0 bg-white text-slate-950 hover:bg-brand-50 hover:text-slate-950 lg:mt-0">{h.cta}<i className="fas fa-arrow-right text-sm" /></Link>
        </section>
      </div>
    </section>
  );
};

export default Projects;
