import React from 'react';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

const content: Record<LanguageCode, {
  eyebrow: string; title: string; intro: string; evidence: string;
  principles: { title: string; body: string }[];
  timeline: { years: string; title: string; body: string }[];
  achievementsTitle: string;
  achievements: { meta: string; title: string; body: string; links: { label: string; href: string }[] }[];
}> = {
  en: {
    eyebrow: 'How I work', title: 'Senior AI engineering with end-to-end product ownership.',
    intro: 'I combine agentic AI, RAG and automation with the full-stack engineering needed to put them into real products. My background in web platforms, operations and technical education supports that delivery without competing with its focus.', evidence: 'Hands-on by default: I move from product framing through Python and TypeScript implementation, APIs, data, deployment, observability and iteration without splitting the system into disconnected handoffs.',
    principles: [
      { title: 'Engineer the full AI workflow', body: 'Retrieval, tools, structured outputs, APIs, data, interfaces, deployment and observability belong to one system.' },
      { title: 'Build for operation', body: 'Reliable AI work includes monitoring, human review and the real workflow around the model—not only a successful response.' },
      { title: 'Bridge product and engineering', body: 'Spanish, English and Mandarin delivery helps connect technical decisions with users, teams and executives.' }
    ],
    timeline: [
      { years: '2009–2016', title: 'Digital design instruction · Megacursos.com', body: 'Digital-design education supported by practical web systems and learning materials.' },
      { years: '2016–2023', title: 'Web platform engineering · Megawebs', body: 'Full-stack web platforms, technical SEO, Linux operations and delivery.' },
      { years: '2024–2026', title: 'ML / LLMOps engineering · Agents AI Ltd', body: 'Production AI workflows across agents, RAG, automation, deployment and observability.' }
    ],
    achievementsTitle: 'Selected distinctions & publications',
    achievements: [
      {
        meta: 'Nogarejas · 2012',
        title: 'Youth Prize — II Nogarejas Poetry Competition',
        body: '“Olvidaste una llave en mi costado”, submitted as “El arte de la fuga”, received the €200 youth prize in an international field of more than 200 works. The jury included Juan Carlos Mestre, Carmen Busmayor and Eloísa Otero.',
        links: [
          { label: 'Diario de León', href: 'https://www.diariodeleon.es/leon/provincia/120904/102485/premio-poesia-nogarejas-viaja-argentina_amp.html' },
          { label: 'Archived volume', href: 'https://archive.org/details/MemoriaGrfica19532013' }
        ]
      },
      {
        meta: 'Li Po Chun UWC Hong Kong · 2012',
        title: 'Rafael del Pino Foundation scholarship',
        body: 'Awarded the Foundation’s two-year International Baccalaureate scholarship to study at Li Po Chun United World College of Hong Kong.',
        links: [{ label: '2012 annual report', href: 'https://www.frdelpino.es/wp-content/uploads/2013/05/Memoria-de-Actividades-2012.pdf' }]
      },
      {
        meta: 'Published · 2024',
        title: 'ChinoTotal — Mandarin from zero to HSK2 / A2',
        body: 'Author of the 296-page Spanish-language beginner course published independently through Amazon KDP. ISBN 9798873249237.',
        links: [{ label: 'Bibliographic record', href: 'https://www.agapea.com/libros/ChinoTotal-Aprende-Chino-Mandarin-desde-0-Validado-para-HSK-Aprende-Chino-Mandarin-desde-0-y-consigue-un-nivel-A2-HSK2--9798873249237-i.htm' }]
      }
    ]
  },
  es: {
    eyebrow: 'Cómo trabajo', title: 'Ingeniería sénior de IA con responsabilidad de producto de principio a fin.',
    intro: 'Combino IA agéntica, RAG y automatización con la ingeniería full-stack necesaria para integrarlas en productos reales. Mi experiencia en plataformas web, operaciones y formación técnica apoya esa entrega sin competir con su foco.', evidence: 'Trabajo directamente de la definición a la implementación con Python y TypeScript, APIs, datos, despliegue, observabilidad e iteración, sin dividir el sistema en entregas desconectadas.',
    principles: [
      { title: 'Diseñar el flujo completo de IA', body: 'Recuperación, herramientas, salidas estructuradas, APIs, datos, interfaces, despliegue y observabilidad forman un único sistema.' },
      { title: 'Construir para operar', body: 'La IA fiable incluye monitorización, revisión humana y el flujo real alrededor del modelo, no solo una respuesta correcta.' },
      { title: 'Unir producto e ingeniería', body: 'La entrega en español, inglés y mandarín conecta decisiones técnicas con usuarios, equipos y dirección.' }
    ],
    timeline: [
      { years: '2009–2016', title: 'Docencia de diseño digital · Megacursos.com', body: 'Formación en diseño digital apoyada por sistemas web y materiales de aprendizaje.' },
      { years: '2016–2023', title: 'Ingeniería de plataformas web · Megawebs', body: 'Plataformas full-stack, SEO técnico, operaciones Linux y entrega.' },
      { years: '2024–2026', title: 'Ingeniería ML / LLMOps · Agents AI Ltd', body: 'Flujos de IA en producción con agentes, RAG, automatización, despliegue y observabilidad.' }
    ],
    achievementsTitle: 'Premios y publicaciones seleccionados',
    achievements: [
      {
        meta: 'Nogarejas · 2012',
        title: 'Premio Juvenil — II Certamen de Poesía de Nogarejas',
        body: '“Olvidaste una llave en mi costado”, presentado como “El arte de la fuga”, recibió el premio juvenil de 200 € en un certamen internacional con más de 200 obras. El jurado incluyó a Juan Carlos Mestre, Carmen Busmayor y Eloísa Otero.',
        links: [
          { label: 'Diario de León', href: 'https://www.diariodeleon.es/leon/provincia/120904/102485/premio-poesia-nogarejas-viaja-argentina_amp.html' },
          { label: 'Memoria archivada', href: 'https://archive.org/details/MemoriaGrfica19532013' }
        ]
      },
      {
        meta: 'Li Po Chun UWC Hong Kong · 2012',
        title: 'Beca Fundación Rafael del Pino',
        body: 'Beca de dos años de la Fundación para cursar el Bachillerato Internacional en Li Po Chun United World College of Hong Kong.',
        links: [{ label: 'Memoria de 2012', href: 'https://www.frdelpino.es/wp-content/uploads/2013/05/Memoria-de-Actividades-2012.pdf' }]
      },
      {
        meta: 'Publicado · 2024',
        title: 'ChinoTotal — mandarín desde cero hasta HSK2 / A2',
        body: 'Autor del curso para principiantes de 296 páginas en español, publicado de forma independiente mediante Amazon KDP. ISBN 9798873249237.',
        links: [{ label: 'Ficha bibliográfica', href: 'https://www.agapea.com/libros/ChinoTotal-Aprende-Chino-Mandarin-desde-0-Validado-para-HSK-Aprende-Chino-Mandarin-desde-0-y-consigue-un-nivel-A2-HSK2--9798873249237-i.htm' }]
      }
    ]
  },
  fr: {
    eyebrow: 'Ma façon de travailler', title: 'Ingénierie IA senior avec une responsabilité produit de bout en bout.',
    intro: 'Je combine IA agentique, RAG et automatisation avec l’ingénierie full-stack nécessaire pour les intégrer à de vrais produits. Mon expérience des plateformes web, des opérations et de la formation technique soutient cette mise en œuvre sans en brouiller le focus.', evidence: 'J’interviens directement du cadrage à Python et TypeScript, aux APIs, aux données, au déploiement, à l’observabilité et à l’itération, sans multiplier les relais.',
    principles: [{ title: 'Concevoir tout le flux IA', body: 'Retrieval, outils, sorties structurées, APIs, données, interfaces, déploiement et observabilité forment un seul système.' }, { title: 'Construire pour l’exploitation', body: 'Une IA fiable inclut le suivi, la validation humaine et le parcours réel autour du modèle, pas seulement une réponse correcte.' }, { title: 'Relier produit et ingénierie', body: 'Espagnol, anglais et mandarin relient les décisions techniques aux utilisateurs, équipes et dirigeants.' }],
    timeline: [{ years: '2009–2016', title: 'Formation au design numérique · Megacursos.com', body: 'Formation au design numérique soutenue par des systèmes web et des supports pédagogiques.' }, { years: '2016–2023', title: 'Ingénierie de plateformes web · Megawebs', body: 'Plateformes full-stack, SEO technique, opérations Linux et livraison.' }, { years: '2024–2026', title: 'Ingénierie ML / LLMOps · Agents AI Ltd', body: 'Workflows IA en production : agents, RAG, automatisation, déploiement et observabilité.' }],
    achievementsTitle: 'Distinctions et publications sélectionnées',
    achievements: [
      { meta: 'Nogarejas · 2012', title: 'Prix jeunesse — IIe Concours de poésie de Nogarejas', body: '« Olvidaste una llave en mi costado », soumis sous le pseudonyme « El arte de la fuga », a reçu le prix jeunesse de 200 € parmi plus de 200 œuvres d’un concours international.', links: [{ label: 'Diario de León', href: 'https://www.diariodeleon.es/leon/provincia/120904/102485/premio-poesia-nogarejas-viaja-argentina_amp.html' }, { label: 'Volume archivé', href: 'https://archive.org/details/MemoriaGrfica19532013' }] },
      { meta: 'Li Po Chun UWC Hong Kong · 2012', title: 'Bourse de la Fondation Rafael del Pino', body: 'Bourse de deux ans pour suivre le Baccalauréat international au Li Po Chun United World College de Hong Kong.', links: [{ label: 'Rapport 2012', href: 'https://www.frdelpino.es/wp-content/uploads/2013/05/Memoria-de-Actividades-2012.pdf' }] },
      { meta: 'Publié · 2024', title: 'ChinoTotal — mandarin de zéro au HSK2 / A2', body: 'Auteur d’un cours d’initiation de 296 pages en espagnol, publié indépendamment via Amazon KDP. ISBN 9798873249237.', links: [{ label: 'Notice bibliographique', href: 'https://www.agapea.com/libros/ChinoTotal-Aprende-Chino-Mandarin-desde-0-Validado-para-HSK-Aprende-Chino-Mandarin-desde-0-y-consigue-un-nivel-A2-HSK2--9798873249237-i.htm' }] }
    ]
  },
  zh: {
    eyebrow: '我的工作方式', title: '具备端到端产品责任的高级 AI 工程。',
    intro: '我把智能体 AI、RAG 和自动化，与将其落地到真实产品所需的全栈工程结合起来。Web 平台、运营与技术教育经验为交付提供支撑，同时保持清晰的工程主线。', evidence: '默认亲自推进：从产品定义到 Python 与 TypeScript、API、数据、部署、可观测性和迭代，避免把系统拆成彼此断开的交接。',
    principles: [{ title: '设计完整 AI 工作流', body: '检索、工具、结构化输出、API、数据、界面、部署与可观测性属于同一个系统。' }, { title: '面向真实运营构建', body: '可靠的 AI 包含监控、人工审核和模型周边的真实流程，而不只是一次正确响应。' }, { title: '连接产品与工程', body: '西班牙语、英语和中文帮助把技术决策连接到用户、团队与管理层。' }],
    timeline: [{ years: '2009–2016', title: '数字设计教学 · Megacursos.com', body: '通过配套 Web 系统与学习材料开展数字设计教育。' }, { years: '2016–2023', title: 'Web 平台工程 · Megawebs', body: '全栈 Web 平台、技术 SEO、Linux 运维与交付。' }, { years: '2024–2026', title: 'ML / LLMOps 工程 · Agents AI Ltd', body: '涵盖智能体、RAG、自动化、部署与可观测性的生产级 AI 工作流。' }],
    achievementsTitle: '精选荣誉与出版物',
    achievements: [
      { meta: 'Nogarejas · 2012', title: '第二届 Nogarejas 诗歌大赛青年奖', body: '诗作《Olvidaste una llave en mi costado》以笔名“El arte de la fuga”参赛，在收到 200 多篇作品的国际赛事中获得 200 欧元青年奖。', links: [{ label: 'Diario de León', href: 'https://www.diariodeleon.es/leon/provincia/120904/102485/premio-poesia-nogarejas-viaja-argentina_amp.html' }, { label: '档案文集', href: 'https://archive.org/details/MemoriaGrfica19532013' }] },
      { meta: '香港李宝椿联合世界书院 · 2012', title: 'Rafael del Pino 基金会奖学金', body: '获得基金会两年制奖学金，赴香港李宝椿联合世界书院攻读国际文凭课程。', links: [{ label: '2012 年报告', href: 'https://www.frdelpino.es/wp-content/uploads/2013/05/Memoria-de-Actividades-2012.pdf' }] },
      { meta: '出版 · 2024', title: 'ChinoTotal — 从零到 HSK2 / A2', body: '296 页西班牙语普通话入门课程作者，通过 Amazon KDP 独立出版。ISBN 9798873249237。', links: [{ label: '图书记录', href: 'https://www.agapea.com/libros/ChinoTotal-Aprende-Chino-Mandarin-desde-0-Validado-para-HSK-Aprende-Chino-Mandarin-desde-0-y-consigue-un-nivel-A2-HSK2--9798873249237-i.htm' }] }
    ]
  }
};

const About: React.FC = () => {
  const { language } = useTranslation();
  const c = content[language];
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="badge-pill">{c.eyebrow}</span>
            <h2 className="section-heading mt-5">{c.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">{c.intro}</p>
            <div className="mt-8 rounded-2xl border border-brand-200 bg-brand-50 p-5 text-sm font-semibold leading-relaxed text-brand-900">{c.evidence}</div>
            <div className="mt-8 space-y-5">{c.principles.map((item, index) => <div key={item.title} className="grid grid-cols-[36px_1fr] gap-4"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-800">{index + 1}</span><div><h3 className="font-bold text-slate-950">{item.title}</h3><p className="mt-1 text-slate-600">{item.body}</p></div></div>)}</div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <ol className="space-y-0">{c.timeline.map((item, index) => <li key={item.title} className="relative grid grid-cols-[40px_1fr] gap-5 pb-7 last:pb-0"><div className="font-mono text-sm font-bold text-brand-700">0{index + 1}</div><div className="relative border-l border-slate-200 pl-6"><span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-brand-600 ring-4 ring-brand-50"></span><h3 className="font-bold text-slate-950">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{item.body}</p>{index < c.timeline.length - 1 && <span className="sr-only">then</span>}</div></li>)}</ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
