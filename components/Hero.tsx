import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

const content: Record<LanguageCode, {
  eyebrow: string; title: string; intro: string; work: string; cv: string; available: string;
  proofTitle: string; proofBody: string; now: string; building: string[]; stats: { value: string; label: string }[];
}> = {
  en: {
    eyebrow: 'Senior / Lead AI Engineer · Madrid · Europe · ES / EN / 中文',
    title: 'I build production AI systems across agents, RAG, voice and automation.',
    intro: 'Hands-on across Python, TypeScript, APIs, SQL, web and mobile, deployment and observability. I lead cross-functional delivery and connect model workflows to real product context, operations and human review.',
    work: 'Explore the portfolio', cv: 'Open concise CV', available: 'Available immediately · open to full-time roles · Madrid or remote in Europe',
    proofTitle: 'At a glance', proofBody: 'Senior AI and software engineer, and technical lead. I design and deliver production AI and software end to end — from architecture through deployment and operation — across AI systems and integration. Delivery and client work run trilingually in Spanish, English and Mandarin (中文).',
    now: 'Core strengths', building: ['Agentic AI, RAG and MCP', 'Python and TypeScript production systems', 'Cross-functional leadership and mentoring'],
    stats: [{ value: '7', label: 'flagship programmes' }, { value: '249', label: 'original public repositories' }, { value: '80★', label: 'VUDA · 7 forks' }, { value: '125+', label: 'recorded training hours' }]
  },
  es: {
    eyebrow: 'Ingeniero sénior / lead de IA · Madrid · Europa · ES / EN / 中文',
    title: 'Construyo sistemas de IA en producción con agentes, RAG, voz y automatización.',
    intro: 'Trabajo directamente con Python, TypeScript, APIs, SQL, web y móvil, despliegue y observabilidad. Lidero entregas multidisciplinares y conecto los modelos con el contexto real de producto, las operaciones y la revisión humana.',
    work: 'Explorar el portfolio', cv: 'Abrir CV conciso', available: 'Disponibilidad inmediata · abierto a puestos de jornada completa · Madrid o remoto en Europa',
    proofTitle: 'En pocas palabras', proofBody: 'Ingeniero sénior de IA y software, y technical lead. Diseño y entrego IA y software en producción de principio a fin — de la arquitectura al despliegue y la operación — en sistemas de IA e integración. Entrega y trabajo con clientes en español, inglés y mandarín (中文).',
    now: 'Fortalezas', building: ['IA agéntica, RAG y MCP', 'Sistemas en producción con Python y TypeScript', 'Liderazgo multidisciplinar y mentoring'],
    stats: [{ value: '7', label: 'programas principales' }, { value: '249', label: 'repositorios públicos propios' }, { value: '80★', label: 'VUDA · 7 forks' }, { value: '125+', label: 'horas grabadas de formación' }]
  },
  fr: {
    eyebrow: 'Ingénieur IA senior / lead · Madrid · Europe · ES / EN / 中文',
    title: 'Je construis des systèmes IA en production avec agents, RAG, voix et automatisation.',
    intro: 'J’interviens directement sur Python, TypeScript, APIs, SQL, web et mobile, déploiement et observabilité. Je pilote des livraisons pluridisciplinaires et relie les modèles au contexte produit, aux opérations et à la validation humaine.',
    work: 'Explorer le portfolio', cv: 'Ouvrir le CV concis', available: 'Disponible immédiatement · ouvert aux postes à temps plein · Madrid ou télétravail en Europe',
    proofTitle: 'En bref', proofBody: 'Ingénieur IA et logiciel senior, et technical lead. Je conçois et livre de l’IA et du logiciel en production de bout en bout — de l’architecture au déploiement et à l’exploitation — sur les systèmes d’IA et l’intégration. Livraison et relation client en espagnol, anglais et mandarin (中文).',
    now: 'Points forts', building: ['IA agentique, RAG et MCP', 'Systèmes Python et TypeScript en production', 'Leadership pluridisciplinaire et mentorat'],
    stats: [{ value: '7', label: 'programmes phares' }, { value: '249', label: 'dépôts publics originaux' }, { value: '80★', label: 'VUDA · 7 forks' }, { value: '125+', label: 'heures de formation enregistrées' }]
  },
  zh: {
    eyebrow: '高级 / 主管 AI 工程师 · 马德里 · 欧洲 · 西班牙语 / 英语 / 中文',
    title: '我构建涵盖智能体、RAG、语音与自动化的生产级 AI 系统。',
    intro: '亲自负责 Python、TypeScript、API、SQL、Web 与移动端、部署和可观测性，领导跨职能交付，并把模型工作流连接到真实产品、运营与人工审核。',
    work: '浏览作品集', cv: '打开精简简历', available: '可立即到岗 · 寻找全职职位 · 马德里或欧洲远程',
    proofTitle: '快速了解', proofBody: '高级 AI 与软件工程师、技术负责人。我端到端设计并交付生产级 AI 与软件——从架构到部署与运营——覆盖 AI 系统与集成。交付与客户沟通均可用西班牙语、英语和中文进行。',
    now: '核心能力', building: ['智能体 AI、RAG 与 MCP', '生产级 Python 与 TypeScript 系统', '跨职能领导与指导'],
    stats: [{ value: '7', label: '旗舰项目集' }, { value: '249', label: '原创公开仓库' }, { value: '80★', label: 'VUDA · 7 个 fork' }, { value: '125+', label: '已录制培训小时' }]
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
              <Link to="/contact" className="btn-secondary">{c.available.includes('inmediata') ? 'Hablemos' : c.available.includes('immédiat') ? 'Discutons' : c.available.includes('可立即') ? '联系我' : 'Get in touch'}<i className="fas fa-arrow-right text-sm"></i></Link>
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
      </div>
    </section>
  );
};

export default Hero;
