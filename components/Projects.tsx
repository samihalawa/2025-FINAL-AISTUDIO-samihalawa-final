import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';
import {
  PORTFOLIO_INVENTORY,
  PORTFOLIO_PROJECTS,
  categoryCopy,
  getInventoryCopy,
  getProjectCopy,
  inventoryLaneCopy,
  type InventoryLane,
  type PortfolioCategory,
} from '../portfolio';

type InventoryFilter = 'all' | InventoryLane;

const workstreamHeadings: Record<LanguageCode, { eyebrow: string; title: string; body: string; open: string }> = {
  en: { eyebrow: 'Areas of work', title: 'Seven connected areas of product and engineering.', body: 'Browse products, client systems, open source, infrastructure, research, education and earlier work.', open: 'Explore area' },
  es: { eyebrow: 'Áreas de trabajo', title: 'Siete áreas conectadas de producto e ingeniería.', body: 'Explora productos, sistemas para clientes, open source, infraestructura, investigación, educación y trabajos anteriores.', open: 'Explorar área' },
  fr: { eyebrow: 'Domaines de travail', title: 'Sept domaines reliés de produit et d’ingénierie.', body: 'Découvrez produits, systèmes clients, open source, infrastructure, recherche, éducation et travaux antérieurs.', open: 'Explorer le domaine' },
  zh: { eyebrow: '工作方向', title: '七个相互关联的产品与工程方向。', body: '浏览产品、客户系统、开源、基础设施、研究、教育与早期作品。', open: '探索方向' },
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
    body: 'A portfolio of multilingual platforms, agent systems, applied AI and technical education—designed, engineered and operated end to end.',
    stats: ['projects & collaborations', 'original public repositories', 'public videos', 'technical articles'],
    approachEyebrow: 'End-to-end ownership',
    approachTitle: 'One builder across product, engineering and launch.',
    approachBody: 'The strongest work happens when product decisions, technical architecture and the operating reality stay connected.',
    approach: [
      { number: '01', title: 'Frame the product', body: 'Turn an ambiguous opportunity into a clear user journey, scope and release path.' },
      { number: '02', title: 'Build the system', body: 'Connect agents, data, APIs, web and mobile interfaces, infrastructure and analytics.' },
      { number: '03', title: 'Operate and improve', body: 'Launch, observe real use, solve the rough edges and keep the product moving.' },
    ],
    selectedEyebrow: 'Portfolio',
    selectedTitle: 'Products and systems worth opening.',
    selectedBody: 'Current platforms, open-source tools, client systems and focused prototypes across four areas of work.',
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
    body: 'Un portfolio de plataformas multilingües, sistemas de agentes, IA aplicada y formación técnica, diseñado y construido de principio a fin.',
    stats: ['proyectos y colaboraciones', 'repositorios públicos propios', 'vídeos públicos', 'artículos técnicos'],
    approachEyebrow: 'Responsabilidad integral',
    approachTitle: 'Producto, ingeniería y lanzamiento en una sola visión.',
    approachBody: 'El mejor trabajo ocurre cuando las decisiones de producto, la arquitectura y la realidad operativa siguen conectadas.',
    approach: [
      { number: '01', title: 'Definir el producto', body: 'Convertir una oportunidad ambigua en un recorrido claro, un alcance y una ruta de lanzamiento.' },
      { number: '02', title: 'Construir el sistema', body: 'Conectar agentes, datos, APIs, interfaces web y móvil, infraestructura y analítica.' },
      { number: '03', title: 'Operar y mejorar', body: 'Lanzar, observar el uso real, resolver fricciones y mantener el producto avanzando.' },
    ],
    selectedEyebrow: 'Portfolio',
    selectedTitle: 'Productos y sistemas que merece la pena abrir.',
    selectedBody: 'Plataformas actuales, herramientas open source, sistemas para clientes y prototipos específicos en cuatro áreas.',
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
    body: 'Un portfolio de plateformes multilingues, de systèmes d’agents, d’IA appliquée et de formation technique, conçu et construit de bout en bout.',
    stats: ['projets et collaborations', 'dépôts publics originaux', 'vidéos publiques', 'articles techniques'],
    approachEyebrow: 'Responsabilité de bout en bout',
    approachTitle: 'Produit, ingénierie et lancement dans une même vision.',
    approachBody: 'Les meilleurs produits gardent les décisions produit, l’architecture technique et la réalité opérationnelle connectées.',
    approach: [
      { number: '01', title: 'Cadrer le produit', body: 'Transformer une opportunité ambiguë en parcours utilisateur, périmètre et trajectoire de lancement.' },
      { number: '02', title: 'Construire le système', body: 'Relier agents, données, APIs, interfaces web et mobiles, infrastructure et analyse.' },
      { number: '03', title: 'Exploiter et améliorer', body: 'Lancer, observer l’usage réel, corriger les frictions et poursuivre l’évolution.' },
    ],
    selectedEyebrow: 'Portfolio',
    selectedTitle: 'Des produits et systèmes à découvrir.',
    selectedBody: 'Plateformes actuelles, outils open source, systèmes clients et prototypes ciblés dans quatre domaines.',
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
    body: '涵盖多语言平台、智能体系统、应用型 AI 与技术教育，贯穿设计、开发与运营全过程。',
    stats: ['项目与合作', '原创公开仓库', '公开视频', '技术文章'],
    approachEyebrow: '端到端负责',
    approachTitle: '让产品、工程与发布保持同一视角。',
    approachBody: '当产品决策、技术架构和真实运营持续连接时，才能做出更强的产品。',
    approach: [
      { number: '01', title: '定义产品', body: '把模糊机会转化为清晰的用户路径、范围与发布计划。' },
      { number: '02', title: '构建系统', body: '连接智能体、数据、API、Web 与移动界面、基础设施和分析。' },
      { number: '03', title: '运营与改进', body: '发布、观察真实使用、解决摩擦并持续推动产品。' },
    ],
    selectedEyebrow: '作品集',
    selectedTitle: '值得打开体验的产品与系统。',
    selectedBody: '涵盖四个方向的当前平台、开源工具、客户系统与重点原型。',
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
const laneOrder: InventoryLane[] = ['products', 'clients', 'open-source', 'research', 'education', 'infrastructure', 'archive'];
const publicInventory = PORTFOLIO_INVENTORY.filter(item => item.status === 'verified');

const Projects: React.FC = () => {
  const { language } = useTranslation();
  const h = headings[language];
  const [query, setQuery] = useState('');
  const [lane, setLane] = useState<InventoryFilter>('all');

  const filteredInventory = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase(language);
    return publicInventory.filter(item => {
      const c = getInventoryCopy(item, language);
      const matchesQuery = !normalizedQuery || [item.title, item.period, item.era, c.summary]
        .some(value => value.toLocaleLowerCase(language).includes(normalizedQuery));
      return matchesQuery && (lane === 'all' || item.lane === lane);
    });
  }, [language, lane, query]);

  const eras = useMemo(() => Array.from(new Set(filteredInventory.map(item => item.era))), [filteredInventory]);
  const workstreams = useMemo(() => laneOrder.map(option => {
    const items = publicInventory.filter(item => item.lane === option);
    return { lane: option, count: items.length, examples: items.slice(-3).reverse().map(item => item.title) };
  }), []);
  const stats = [
    { value: publicInventory.length, label: h.stats[0] },
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

        <section className="border-y border-slate-200 py-20 sm:py-24" aria-labelledby="portfolio-workstreams-heading">
          <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start"><span className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">{workstreamHeadings[language].eyebrow}</span><h2 id="portfolio-workstreams-heading" className="cv-serif mt-5 text-4xl font-normal leading-tight text-slate-950">{workstreamHeadings[language].title}</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">{workstreamHeadings[language].body}</p></div>
            <div className="grid border-t border-slate-400 sm:grid-cols-2">
              {workstreams.map((stream, index) => <button key={stream.lane} type="button" onClick={() => { setQuery(''); setLane(stream.lane); document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className={`group min-h-48 border-b border-slate-300 bg-transparent p-5 text-left transition hover:bg-white sm:p-6 ${index % 2 === 0 ? 'sm:border-r' : ''}`}>
                <div className="flex items-start justify-between gap-4"><span className="font-mono text-xs font-bold text-brand-800">{String(index + 1).padStart(2, '0')}</span><span className="font-mono text-xs font-bold text-slate-600">{String(stream.count).padStart(2, '0')}</span></div>
                <h3 className="cv-serif mt-5 text-2xl font-semibold text-slate-950">{inventoryLaneCopy[stream.lane][language]}</h3>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-500">{stream.examples.join(' · ')}</p>
                <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-700">{workstreamHeadings[language].open}<i className="fas fa-arrow-down text-xs transition group-hover:translate-y-0.5" /></span>
              </button>)}
            </div>
          </div>
        </section>

        <div className="max-w-4xl pt-20 sm:pt-24"><span className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">{h.selectedEyebrow}</span><h2 className="cv-serif mt-5 text-4xl font-normal tracking-[-.035em] text-slate-950 sm:text-5xl">{h.selectedTitle}</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{h.selectedBody}</p></div>
        {categoryOrder.map(category => {
          const items = PORTFOLIO_PROJECTS.filter(project => project.category === category);
          return <section key={category} className="mt-14" aria-labelledby={`category-${category}`}><div className="mb-6 flex items-center gap-4"><h3 id={`category-${category}`} className="text-xl font-bold text-slate-950 sm:text-2xl">{categoryCopy[category][language]}</h3><span className="h-px flex-1 bg-slate-200" /><span className="text-sm font-bold tabular-nums text-slate-400">{String(items.length).padStart(2, '0')}</span></div>
            <div className="grid border-t border-slate-400 md:grid-cols-2 xl:grid-cols-3">{items.map((project, index) => { const c = getProjectCopy(project, language); return <article id={project.id} key={project.id} className="group scroll-mt-24 flex min-h-[24rem] flex-col overflow-hidden border-b border-r border-slate-300 bg-white">
              {project.image ? <div className="h-52 overflow-hidden border-b border-slate-200 bg-slate-100"><img src={project.image} alt={`${project.name} interface`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" style={{ objectPosition: project.imagePosition || 'center' }} loading="lazy" /></div> : <div className="flex h-36 items-end justify-between border-b border-slate-800 bg-slate-950 p-6 text-white"><span className="font-display text-5xl font-bold text-teal-200">{String(index + 1).padStart(2, '0')}</span><i className="fas fa-code-branch text-xl text-white/35" /></div>}
              <div className="flex flex-1 flex-col p-6"><div className="text-xs font-bold uppercase tracking-[.16em] text-brand-800">{project.period}</div><h4 className="cv-serif mt-2 text-2xl font-semibold text-slate-950">{project.name}</h4><p className="mt-3 text-sm leading-relaxed text-slate-600">{c.description}</p><div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-6">{project.tags.map(tag => <span key={tag} className="text-xs font-semibold text-slate-500">{tag}</span>)}{project.caseStudy && <Link to={project.caseStudy} className="ml-auto inline-flex min-h-11 items-center gap-2 border-b border-slate-500 text-sm font-bold text-slate-800 hover:border-slate-950">{h.open}<i className="fas fa-arrow-right text-xs" /></Link>}{project.href && !project.caseStudy && <a href={project.href} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex min-h-11 items-center gap-2 border-b border-slate-500 text-sm font-bold text-slate-800 hover:border-slate-950">{h.visit}<i className="fas fa-arrow-up-right-from-square text-xs" /></a>}</div></div>
            </article>; })}</div>
          </section>;
        })}

        <section id="inventory" className="scroll-mt-28 mt-28 border-t border-slate-200 pt-20" aria-labelledby="archive-heading">
          <div className="max-w-4xl"><span className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">{h.archiveEyebrow}</span><h2 id="archive-heading" className="cv-serif mt-5 text-4xl font-normal tracking-[-.035em] text-slate-950 sm:text-5xl">{h.archiveTitle}</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{h.archiveBody}</p></div>

          <div className="sticky top-20 z-20 -mx-4 mt-10 border-y border-slate-400 bg-[#f8f6f1]/95 px-4 py-4 backdrop-blur sm:mx-0 sm:px-5">
            <label className="relative block"><span className="sr-only">{h.search}</span><i className="fas fa-magnifying-glass pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input value={query} onChange={event => setQuery(event.target.value)} placeholder={h.search} className="min-h-12 w-full border border-slate-400 bg-white py-3 pl-11 pr-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-brand-500/20" /></label>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label={h.allLanes}>
              <button type="button" onClick={() => setLane('all')} aria-pressed={lane === 'all'} className={`min-h-11 shrink-0 border-b-2 px-2 text-sm font-bold transition ${lane === 'all' ? 'border-slate-950 text-slate-950' : 'border-transparent text-slate-500 hover:border-slate-400'}`}>{h.allLanes}</button>
              {laneOrder.map(option => <button type="button" key={option} onClick={() => setLane(option)} aria-pressed={lane === option} className={`min-h-11 shrink-0 border-b-2 px-2 text-sm font-bold transition ${lane === option ? 'border-slate-950 text-slate-950' : 'border-transparent text-slate-500 hover:border-slate-400'}`}>{inventoryLaneCopy[option][language]}</button>)}
            </div>
            <div className="mt-3 text-sm font-semibold tabular-nums text-slate-500">{filteredInventory.length} {h.results}</div>
          </div>

          <div className="mt-12 space-y-16">
            {eras.map(era => <section key={era} aria-labelledby={`era-${era.replace(/\W+/g, '-')}`}>
              <div className="grid gap-6 lg:grid-cols-[12rem_1fr]"><div><h3 id={`era-${era.replace(/\W+/g, '-')}`} className="cv-serif text-3xl font-semibold tracking-[-.025em] text-slate-950 lg:sticky lg:top-[16rem]">{era}</h3><div className="mt-3 h-px w-12 bg-slate-500" /></div><div className="grid border-t border-slate-400 md:grid-cols-2">{filteredInventory.filter(item => item.era === era).map((item, index) => { const c = getInventoryCopy(item, language); return <article key={item.id} id={item.id} className={`scroll-mt-72 border-b border-slate-300 bg-white p-5 sm:p-6 ${index % 2 === 0 ? 'md:border-r' : ''}`}>
                <div className="flex flex-wrap items-center gap-2"><span className="text-xs font-bold uppercase tracking-[.12em] text-brand-800">{inventoryLaneCopy[item.lane][language]}</span><span className="ml-auto text-xs font-bold uppercase tracking-[.12em] text-slate-600">{item.period}</span></div>
                {item.image && <img src={item.image} alt={`${item.title} interface`} className="mt-4 h-32 w-full border border-slate-300 object-cover" loading="lazy" />}
                <h4 className="cv-serif mt-4 text-2xl font-semibold text-slate-950">{item.title}</h4><p className="mt-2 text-sm leading-relaxed text-slate-600">{c.summary}</p>{item.href && <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 border-b border-slate-500 font-bold text-slate-800">{h.open}<i className="fas fa-arrow-up-right-from-square text-xs" /></a>}
              </article>; })}</div></div>
            </section>)}
            {!filteredInventory.length && <div className="border border-dashed border-slate-400 bg-white p-10 text-center text-slate-600">{h.noResults}</div>}
          </div>
        </section>

        <section className="mt-24 border-y border-slate-950 bg-slate-950 px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl"><span className="text-xs font-bold uppercase tracking-[.18em] text-brand-200">{h.ctaEyebrow}</span><h2 className="mt-4 font-display text-3xl font-bold tracking-[-.04em] text-white sm:text-5xl">{h.ctaTitle}</h2><p className="mt-4 text-lg leading-relaxed text-slate-300">{h.ctaBody}</p></div>
          <Link to="/contact" className="btn-primary mt-8 shrink-0 bg-white text-slate-950 hover:bg-brand-50 hover:text-slate-950 lg:mt-0">{h.cta}<i className="fas fa-arrow-right text-sm" /></Link>
        </section>
      </div>
    </section>
  );
};

export default Projects;
