import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../../i18n/LanguageContext';
import { PORTFOLIO_STORIES, getProjectStoryCopy } from '../../portfolio';

const headings: Record<LanguageCode, { eyebrow: string; title: string; body: string; challenge: string; build: string; open: string; technical: string; technicalBody: string; read: string }> = {
  en: { eyebrow: 'Case studies', title: 'Seven real systems, examined in depth.', body: 'Follow the product decisions, interface work and system architecture behind seven very different operating problems.', challenge: 'Operating problem', build: 'System delivered', open: 'Open case study', technical: 'AI engineering deep dives', technicalBody: 'Three evidence-led accounts of the production boundaries, failures and verification behind working AI systems.', read: 'Read technical case study' },
  es: { eyebrow: 'Casos de estudio', title: 'Siete sistemas reales, explicados en profundidad.', body: 'Descubre las decisiones de producto, el trabajo de interfaz y la arquitectura detrás de siete problemas operativos muy distintos.', challenge: 'Problema operativo', build: 'Sistema construido', open: 'Abrir caso', technical: 'Análisis de ingeniería de IA', technicalBody: 'Tres estudios basados en evidencia sobre los límites, fallos y verificaciones de sistemas de IA en producción.', read: 'Leer caso técnico' },
  fr: { eyebrow: 'Études de cas', title: 'Sept systèmes réels, étudiés en profondeur.', body: 'Découvrez les décisions produit, le travail d’interface et l’architecture derrière sept problèmes opérationnels très différents.', challenge: 'Problème opérationnel', build: 'Système construit', open: 'Ouvrir l’étude', technical: 'Analyses d’ingénierie IA', technicalBody: 'Trois études fondées sur des preuves sur les limites, échecs et vérifications de systèmes IA en production.', read: 'Lire l’étude technique' },
  zh: { eyebrow: '案例研究', title: '深入拆解七个真实系统。', body: '深入了解七个不同运营问题背后的产品决策、界面工作与系统架构。', challenge: '运营问题', build: '构建系统', open: '打开案例', technical: 'AI 工程深度解析', technicalBody: '三个基于证据的生产案例，展示真实 AI 系统的边界、故障与验证方法。', read: '阅读技术案例' },
};

const ids = ['oulang', 'autopricing', 'autoclient', 'medical-systems'];

const technicalCases = [
  {
    title: 'How I Made a Real-Time Voice AI Prove What It Heard',
    summary: 'Semantic transcript routing, bounded model fallbacks, replayable audio fixtures and account-isolated verification in MagicInterview.',
    image: '/case-study-media/magicinterview-verification-architecture.png',
    href: '/blog/real-time-ai-verification-magicinterview',
    meta: 'Voice AI · Production verification',
  },
  {
    title: 'Moving OULANG from Cloud Run to Hetzner and Coolify',
    summary: 'A staged migration of application hosting, storage, database and proxy boundaries—without erasing useful optional providers.',
    image: '/case-study-media/oulang-hetzner-coolify-architecture.png',
    href: '/blog/oulang-cloud-run-to-hetzner-coolify',
    meta: 'Cloud migration · Platform engineering',
  },
  {
    title: 'Building Agentic Outreach Around Evidence, Not Autonomy',
    summary: 'How AutoClient carries research evidence, ownership, review and real workflow state from market brief to CRM and outreach.',
    image: '/case-study-media/autoclient-evidence-pipeline.png',
    href: '/blog/autoclient-evidence-carrying-agent-workflows',
    meta: 'AI agents · Workflow engineering',
  },
];

const CaseStudiesIndex: React.FC = () => {
  const { language } = useTranslation();
  const h = headings[language];
  const cases = ids.map(id => PORTFOLIO_STORIES.find(story => story.id === id)).filter(Boolean) as typeof PORTFOLIO_STORIES;

  return (
    <section className="bg-[#f8f6f1] py-16 sm:py-24">
      <div className="container">
        <header className="grid gap-8 border-b border-slate-400 pb-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div><span className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">{h.eyebrow}</span><h1 className="cv-serif mt-5 max-w-4xl text-5xl font-normal leading-[.98] tracking-[-.045em] text-slate-950 sm:text-7xl">{h.title}</h1></div>
          <p className="border-t border-slate-400 pt-5 text-lg leading-relaxed text-slate-700 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">{h.body}</p>
        </header>

        <div className="border-l border-slate-400">
          {cases.map((story, index) => {
            const copy = getProjectStoryCopy(story, language);
            return (
              <article key={story.id} className="grid border-b border-r border-slate-400 bg-white lg:grid-cols-[1.05fr_.95fr]">
                <div className={`aspect-[16/10] overflow-hidden bg-slate-100 lg:aspect-auto ${index % 2 ? 'lg:order-2' : ''}`}><img src={story.image} alt={`${story.name} ${story.imageKind === 'illustration' ? 'project cover' : 'interface'}`} className="h-full min-h-[22rem] w-full object-cover" style={{ objectPosition: story.imagePosition || 'center' }} /></div>
                <div className={`flex flex-col border-t border-slate-300 p-7 sm:p-10 lg:border-t-0 ${index % 2 ? 'lg:order-1 lg:border-r' : 'lg:border-l'}`}>
                  <div className="text-xs font-bold uppercase tracking-[.16em] text-brand-800">{story.period} · {copy.role}</div>
                  <h2 className="cv-serif mt-5 text-4xl font-semibold leading-tight text-slate-950">{story.name}</h2>
                  <p className="mt-4 text-base leading-7 text-slate-600">{copy.description}</p>
                  <dl className="mt-7 border-t border-slate-300"><div className="border-b border-slate-300 py-5"><dt className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{h.challenge}</dt><dd className="mt-2 text-sm leading-6 text-slate-700">{copy.challenge}</dd></div><div className="border-b border-slate-300 py-5"><dt className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{h.build}</dt><dd className="mt-2 text-sm leading-6 text-slate-700">{copy.build}</dd></div></dl>
                  <Link to={story.caseStudy || `/projects#${story.id}`} className="mt-7 inline-flex min-h-11 w-fit items-center gap-2 border-b border-slate-700 text-sm font-bold text-slate-950">{h.open}<i className="fas fa-arrow-right text-xs" /></Link>
                </div>
              </article>
            );
          })}
        </div>

        <section className="mt-20">
          <header className="mb-8 grid gap-4 border-b border-slate-400 pb-7 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <h2 className="cv-serif text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{h.technical}</h2>
            <p className="text-base leading-7 text-slate-600">{h.technicalBody}</p>
          </header>
          <div className="grid border-l border-t border-slate-400 lg:grid-cols-3">
            {technicalCases.map(item => (
              <article key={item.href} className="flex flex-col border-b border-r border-slate-400 bg-white">
                <div className="aspect-[16/9] overflow-hidden border-b border-slate-300 bg-slate-950">
                  <img src={item.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="text-xs font-bold uppercase tracking-[.14em] text-brand-800">{item.meta}</div>
                  <h3 className="cv-serif mt-4 text-3xl font-semibold leading-tight text-slate-950">{item.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{item.summary}</p>
                  <Link to={item.href} className="mt-7 inline-flex min-h-11 w-fit items-center gap-2 border-b border-slate-700 text-sm font-bold text-slate-950">{h.read}<i className="fas fa-arrow-right text-xs" /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default CaseStudiesIndex;
