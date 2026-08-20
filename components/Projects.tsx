import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';
import {
  PORTFOLIO_STORIES,
  categoryCopy,
  getProjectStoryCopy,
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
    body: 'Seven sustained programmes spanning multilingual platforms, agent systems, applied AI and technical education—delivered with clients, specialists, engineers and operators.',
    stats: ['flagship programmes', 'original public repositories', 'public videos', 'technical articles'],
    approachEyebrow: 'End-to-end leadership',
    approachTitle: 'Product, engineering and cross-functional delivery.',
    approachBody: 'I lead from product framing through architecture and operation, working with teams and specialists so technical decisions stay connected to real use.',
    approach: [
      { number: '01', title: 'Frame the product', body: 'Turn an ambiguous opportunity into a clear user journey, scope and release path.' },
      { number: '02', title: 'Build the system', body: 'Connect agents, data, APIs, web and mobile interfaces, infrastructure and analytics.' },
      { number: '03', title: 'Operate and improve', body: 'Launch, observe real use, solve the rough edges and keep the product moving.' },
    ],
    selectedEyebrow: 'Portfolio',
    selectedTitle: 'Seven flagship programmes, grouped by outcome.',
    selectedBody: 'Sustained platforms, open-source systems and client collaborations. Focused teaching builds remain grouped inside the education experience rather than appearing as parallel commercial work.',
    visit: 'Visit project',
    archiveEyebrow: 'Earlier work',
    archiveTitle: 'More products, collaborations and research.',
    archiveBody: 'Search projects by name, technology or year, or filter by area of work.',
    search: 'Search projects',
    allLanes: 'All workstreams',
    results: 'projects',
    noResults: 'No projects match this search.',
    open: 'Open project',
    ctaEyebrow: 'Build together',
    ctaTitle: 'Have an ambitious AI product in mind?',
    ctaBody: 'I work best on projects that need product judgment, hands-on engineering and a clear path to real use.',
    cta: 'Start a conversation',
  },
  es: {
    eyebrow: 'Trabajo seleccionado · 2023–hoy',
    title: 'Productos de IA, desde la primera decisión hasta la operación real.',
    body: 'Siete programas sostenidos de plataformas multilingües, sistemas de agentes, IA aplicada y formación técnica, entregados con clientes, especialistas, ingenieros y operaciones.',
    stats: ['programas principales', 'repositorios públicos propios', 'vídeos públicos', 'artículos técnicos'],
    approachEyebrow: 'Liderazgo integral',
    approachTitle: 'Producto, ingeniería y entrega multidisciplinar.',
    approachBody: 'Lidero desde la definición del producto hasta la arquitectura y la operación, trabajando con equipos y especialistas para conectar las decisiones técnicas con el uso real.',
    approach: [
      { number: '01', title: 'Definir el producto', body: 'Convertir una oportunidad ambigua en un recorrido claro, un alcance y una ruta de lanzamiento.' },
      { number: '02', title: 'Construir el sistema', body: 'Conectar agentes, datos, APIs, interfaces web y móvil, infraestructura y analítica.' },
      { number: '03', title: 'Operar y mejorar', body: 'Lanzar, observar el uso real, resolver fricciones y mantener el producto avanzando.' },
    ],
    selectedEyebrow: 'Portfolio',
    selectedTitle: 'Siete programas principales, agrupados por resultado.',
    selectedBody: 'Plataformas sostenidas, sistemas open source y colaboraciones con clientes. Los ejercicios de formación se agrupan dentro de la experiencia docente, no como trabajos comerciales paralelos.',
    visit: 'Visitar proyecto',
    archiveEyebrow: 'Trabajos anteriores',
    archiveTitle: 'Más productos, colaboraciones e investigación.',
    archiveBody: 'Busca proyectos por nombre, tecnología o año, o filtra por área de trabajo.',
    search: 'Buscar proyectos',
    allLanes: 'Todos los tipos',
    results: 'proyectos',
    noResults: 'Ningún proyecto coincide con la búsqueda.',
    open: 'Abrir proyecto',
    ctaEyebrow: 'Construyamos juntos',
    ctaTitle: '¿Tienes en mente un producto de IA ambicioso?',
    ctaBody: 'Trabajo mejor en proyectos que necesitan criterio de producto, ingeniería práctica y una ruta clara hacia el uso real.',
    cta: 'Empezar una conversación',
  },
  fr: {
    eyebrow: 'Travaux sélectionnés · 2023–aujourd’hui',
    title: 'Des produits IA, de la première décision à l’exploitation réelle.',
    body: 'Sept programmes durables couvrant plateformes multilingues, systèmes d’agents, IA appliquée et formation technique, livrés avec clients, spécialistes, ingénieurs et opérations.',
    stats: ['programmes phares', 'dépôts publics originaux', 'vidéos publiques', 'articles techniques'],
    approachEyebrow: 'Leadership de bout en bout',
    approachTitle: 'Produit, ingénierie et livraison pluridisciplinaire.',
    approachBody: 'Je pilote du cadrage produit à l’architecture et à l’exploitation, avec équipes et spécialistes, afin de relier les choix techniques à l’usage réel.',
    approach: [
      { number: '01', title: 'Cadrer le produit', body: 'Transformer une opportunité ambiguë en parcours utilisateur, périmètre et trajectoire de lancement.' },
      { number: '02', title: 'Construire le système', body: 'Relier agents, données, APIs, interfaces web et mobiles, infrastructure et analyse.' },
      { number: '03', title: 'Exploiter et améliorer', body: 'Lancer, observer l’usage réel, corriger les frictions et poursuivre l’évolution.' },
    ],
    selectedEyebrow: 'Portfolio',
    selectedTitle: 'Sept programmes phares, regroupés par résultat.',
    selectedBody: 'Plateformes durables, systèmes open source et collaborations clients. Les réalisations pédagogiques restent regroupées dans l’expérience de formation plutôt que présentées comme des missions commerciales parallèles.',
    visit: 'Visiter le projet',
    archiveEyebrow: 'Travaux antérieurs',
    archiveTitle: 'Plus de produits, collaborations et recherche.',
    archiveBody: 'Recherchez les projets par nom, technologie ou année, ou filtrez par domaine.',
    search: 'Rechercher des projets',
    allLanes: 'Tous les domaines',
    results: 'projets',
    noResults: 'Aucun projet ne correspond à cette recherche.',
    open: 'Ouvrir le projet',
    ctaEyebrow: 'Construisons ensemble',
    ctaTitle: 'Vous avez un produit IA ambitieux en tête ?',
    ctaBody: 'J’interviens sur les projets qui demandent du jugement produit, une ingénierie concrète et un chemin clair vers l’usage réel.',
    cta: 'Démarrer une conversation',
  },
  zh: {
    eyebrow: '精选作品 · 2023 至今',
    title: '从第一项决策到真实运营的 AI 产品。',
    body: '七个持续交付的旗舰项目集，涵盖多语言平台、智能体系统、应用型 AI 与技术教育，并与客户、专家、工程师和运营团队共同完成。',
    stats: ['旗舰项目集', '原创公开仓库', '公开视频', '技术文章'],
    approachEyebrow: '端到端领导',
    approachTitle: '产品、工程与跨职能交付。',
    approachBody: '我从产品定义一直领导到架构与运营，并与团队和专家协作，让技术决策始终连接真实使用。',
    approach: [
      { number: '01', title: '定义产品', body: '把模糊机会转化为清晰的用户路径、范围与发布计划。' },
      { number: '02', title: '构建系统', body: '连接智能体、数据、API、Web 与移动界面、基础设施和分析。' },
      { number: '03', title: '运营与改进', body: '发布、观察真实使用、解决摩擦并持续推动产品。' },
    ],
    selectedEyebrow: '作品集',
    selectedTitle: '按成果归类的七个旗舰项目集。',
    selectedBody: '持续运营的平台、开源系统和客户合作。教学练习统一归入教育经历，不再呈现为并行商业项目。',
    visit: '访问项目',
    archiveEyebrow: '早期作品',
    archiveTitle: '更多产品、合作与研究。',
    archiveBody: '按名称、技术或年份搜索项目，也可按工作方向筛选。',
    search: '搜索项目',
    allLanes: '全部类型',
    results: '个项目',
    noResults: '没有符合搜索条件的项目。',
    open: '打开项目',
    ctaEyebrow: '一起构建',
    ctaTitle: '有一个有野心的 AI 产品想法吗？',
    ctaBody: '我最适合需要产品判断、动手工程能力与清晰落地路径的项目。',
    cta: '开始交流',
  },
};

const categoryOrder: PortfolioCategory[] = ['platforms', 'agents', 'applied', 'education'];
const flagshipStoryIds = new Set(['oulang', 'huatong', 'autopricing', 'autoclient', 'vuda', 'medical-systems', 'chinototal']);

const Projects: React.FC = () => {
  const { language } = useTranslation();
  const h = headings[language];
  const stats = [
    { value: flagshipStoryIds.size, label: h.stats[0] },
    { value: '249', label: h.stats[1] },
    { value: '373', label: h.stats[2] },
    { value: '12', label: h.stats[3] },
  ];

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
          <dl className="mt-10 grid grid-cols-2 border-t border-slate-400 lg:grid-cols-4">
            {stats.map((stat, index) => <div key={stat.label} className={`border-b border-slate-300 py-5 sm:px-5 ${index % 2 === 0 ? 'border-r' : ''} lg:border-r lg:last:border-r-0`}><dd className="cv-serif text-4xl font-semibold text-slate-950">{stat.value}</dd><dt className="mt-2 text-xs font-bold uppercase leading-relaxed tracking-[.12em] text-slate-500">{stat.label}</dt></div>)}
          </dl>
        </header>

        <section className="py-20 sm:py-24" aria-labelledby="portfolio-approach-heading">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <div><span className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">{h.approachEyebrow}</span><h2 id="portfolio-approach-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">{h.approachTitle}</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">{h.approachBody}</p></div>
            <div className="grid border-t border-slate-400 sm:grid-cols-3">
              {h.approach.map((item, index) => <article key={item.number} className={`border-b border-slate-300 py-6 sm:px-6 ${index < 2 ? 'sm:border-r' : ''}`}><span className="font-mono text-sm font-bold text-brand-800">{item.number}</span><h3 className="cv-serif mt-8 text-xl font-semibold text-slate-950">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p></article>)}
            </div>
          </div>
        </section>

        <div className="max-w-4xl pt-20 sm:pt-24"><span className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">{h.selectedEyebrow}</span><h2 className="cv-serif mt-5 text-4xl font-normal tracking-[-.035em] text-slate-950 sm:text-5xl">{h.selectedTitle}</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{h.selectedBody}</p></div>
        {categoryOrder.map(category => {
          const items = PORTFOLIO_STORIES.filter(story => story.category === category && flagshipStoryIds.has(story.id));
          if (!items.length) return null;
          return <section key={category} className="mt-14" aria-labelledby={`category-${category}`}><div className="mb-6 flex items-center gap-4"><h3 id={`category-${category}`} className="text-xl font-bold text-slate-950 sm:text-2xl">{categoryCopy[category][language]}</h3><span className="h-px flex-1 bg-slate-300" /><span className="text-sm font-bold tabular-nums text-slate-500">{String(items.length).padStart(2, '0')}</span></div>
            <div className="grid border-l border-t border-slate-400 lg:grid-cols-2">{items.map(story => { const copy = getProjectStoryCopy(story, language); return <article id={story.id} key={story.id} className="group scroll-mt-24 flex min-h-full flex-col border-b border-r border-slate-400 bg-white">
              <div className="aspect-[16/9] overflow-hidden border-b border-slate-300 bg-slate-100"><img src={story.image} alt={`${story.name} ${story.imageKind === 'illustration' ? 'project cover' : 'interface'}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.015]" style={{ objectPosition: story.imagePosition || 'center' }} loading="lazy" /></div>
              <div className="flex flex-1 flex-col p-6 sm:p-8"><div className="flex flex-wrap items-center justify-between gap-3 text-xs font-bold uppercase tracking-[.14em]"><span className="text-brand-800">{story.period}</span><span className="text-slate-500">{storyLabels[language].role}: {copy.role}</span></div><h4 className="cv-serif mt-4 text-3xl font-semibold leading-tight text-slate-950">{story.name}</h4><p className="mt-3 text-base leading-7 text-slate-600">{copy.description}</p>
                <dl className="mt-7 grid border-t border-slate-300 sm:grid-cols-2"><div className="border-b border-slate-300 py-5 sm:border-r sm:pr-5"><dt className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{storyLabels[language].challenge}</dt><dd className="mt-2 text-sm leading-6 text-slate-700">{copy.challenge}</dd></div><div className="border-b border-slate-300 py-5 sm:pl-5"><dt className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{storyLabels[language].build}</dt><dd className="mt-2 text-sm leading-6 text-slate-700">{copy.build}</dd></div></dl>
                <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-3 pt-6"><span className="text-xs font-semibold text-slate-500">{story.includes.join(' · ')}</span>{story.caseStudy && <Link to={story.caseStudy} className="ml-auto inline-flex min-h-11 items-center gap-2 border-b border-slate-600 text-sm font-bold text-slate-900 hover:border-slate-950">{h.open}<i className="fas fa-arrow-right text-xs" /></Link>}{story.href && !story.caseStudy && <a href={story.href} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex min-h-11 items-center gap-2 border-b border-slate-600 text-sm font-bold text-slate-900 hover:border-slate-950">{h.visit}<i className="fas fa-arrow-up-right-from-square text-xs" /></a>}</div>
              </div>
            </article>; })}</div>
          </section>;
        })}

        <section className="mt-24 border-y border-slate-950 bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl"><span className="text-xs font-bold uppercase tracking-[.18em] text-brand-200">{h.ctaEyebrow}</span><h2 className="mt-4 font-display text-3xl font-bold tracking-[-.04em] text-white sm:text-5xl">{h.ctaTitle}</h2><p className="mt-4 text-lg leading-relaxed text-slate-300">{h.ctaBody}</p></div>
          <Link to="/contact" className="btn-primary mt-8 shrink-0 bg-white text-slate-950 hover:bg-brand-50 hover:text-slate-950 lg:mt-0">{h.cta}<i className="fas fa-arrow-right text-sm" /></Link>
        </section>
      </div>
    </section>
  );
};

export default Projects;
