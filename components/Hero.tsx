import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

const content: Record<LanguageCode, {
  eyebrow: string; title: string; intro: string; work: string; cv: string; available: string;
  proofTitle: string; proofBody: string; now: string; building: string[]; stats: { value: string; label: string }[];
}> = {
  en: {
    eyebrow: 'Founder-engineer · Madrid · Europe',
    title: 'I build the complete product around AI.',
    intro: 'From agents and data pipelines to the interface, mobile release, deployment, analytics and customer operations. The work here is shown with real products, timestamped evidence and explicit gaps.',
    work: 'Explore the work', cv: 'Open complete CV', available: 'Open to founding and platform roles',
    proofTitle: 'Current public proof', proofBody: 'OULANG is live on the web and has public App Store / Google Play listing pages under its legacy store identity. VUDA reached 80 GitHub stars. Public work spans 249 non-fork repositories and 12 Hugging Face articles.',
    now: 'Now building', building: ['Multilingual marketplaces', 'MCP and operational agents', 'Voice, pricing and evidence systems'],
    stats: [{ value: '87', label: 'evidence-classified project entries' }, { value: '249', label: 'public non-fork repositories' }, { value: '80★', label: 'VUDA on GitHub' }, { value: '12', label: 'Hugging Face articles' }]
  },
  es: {
    eyebrow: 'Fundador e ingeniero · Madrid · Europa',
    title: 'Construyo el producto completo alrededor de la IA.',
    intro: 'Desde agentes y datos hasta interfaz, app móvil, despliegue, analítica y operaciones. Aquí el trabajo se demuestra con productos reales, evidencia fechada y lagunas explícitas.',
    work: 'Ver proyectos', cv: 'Abrir CV completo', available: 'Disponible para roles founding y de plataforma',
    proofTitle: 'Prueba pública actual', proofBody: 'OULANG está activo en web y tiene páginas públicas en App Store / Google Play bajo su identidad heredada de tienda. VUDA alcanzó 80 estrellas. El trabajo público incluye 249 repositorios propios y 12 artículos en Hugging Face.',
    now: 'Construyendo ahora', building: ['Marketplaces multilingües', 'MCP y agentes operativos', 'Voz, pricing y sistemas de evidencia'],
    stats: [{ value: '87', label: 'entradas de proyectos con evidencia' }, { value: '249', label: 'repositorios propios públicos' }, { value: '80★', label: 'VUDA en GitHub' }, { value: '12', label: 'artículos en Hugging Face' }]
  },
  fr: {
    eyebrow: 'Fondateur-ingénieur · Madrid · Europe',
    title: 'Je construis le produit complet autour de l’IA.',
    intro: 'Des agents et données à l’interface, au mobile, au déploiement, à l’analytique et aux opérations. Chaque preuve est liée à un produit réel.',
    work: 'Voir les projets', cv: 'Ouvrir le CV complet', available: 'Ouvert aux rôles founding et plateforme',
    proofTitle: 'Preuves publiques actuelles', proofBody: 'OULANG est en ligne sur le web et dispose de pages publiques App Store / Google Play sous son identité store historique. VUDA compte 80 étoiles. Le travail public couvre 249 dépôts non-forks et 12 articles Hugging Face.',
    now: 'En cours', building: ['Marketplaces multilingues', 'MCP et agents opérationnels', 'Voix, pricing et systèmes de preuve'],
    stats: [{ value: '87', label: 'entrées de projets classées' }, { value: '249', label: 'dépôts publics non-forks' }, { value: '80★', label: 'VUDA sur GitHub' }, { value: '12', label: 'articles Hugging Face' }]
  },
  zh: {
    eyebrow: '创始人工程师 · 马德里 · 欧洲',
    title: '我构建围绕 AI 的完整产品系统。',
    intro: '从智能体与数据管道，到界面、移动端发布、部署、分析和客户运营。这里展示真实产品、注明日期的数据和公开证据。',
    work: '查看项目', cv: '打开完整简历', available: '开放创始工程师与平台岗位',
    proofTitle: '当前公开证据', proofBody: 'OULANG Web 端已上线，并在旧商店身份下拥有公开 App Store / Google Play 页面。VUDA 获得 80 个 GitHub 星标。公开工作包括 249 个非 fork 仓库和 12 篇 Hugging Face 文章。',
    now: '正在构建', building: ['多语言市场平台', 'MCP 与运营智能体', '语音、定价与证据系统'],
    stats: [{ value: '87', label: '证据分类项目记录' }, { value: '249', label: '公开非 fork 仓库' }, { value: '80★', label: 'VUDA GitHub' }, { value: '12', label: 'Hugging Face 文章' }]
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
              <img src="/portfolio/sami-photo.png" alt="Sami Halawa Ribas" width="184" height="178" className="h-[92px] w-[92px] rounded-2xl object-cover object-top" />
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
