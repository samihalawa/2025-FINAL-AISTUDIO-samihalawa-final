import React from 'react';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

const content: Record<LanguageCode, {
  eyebrow: string; title: string; intro: string; evidence: string;
  principles: { title: string; body: string }[];
  timeline: { years: string; title: string; body: string }[];
}> = {
  en: {
    eyebrow: 'Why the work connects', title: 'Product, systems, distribution and communication.',
    intro: 'My career did not begin with LLMs. Full-stack engineering, mobile apps, growth, teaching and China-based media work became the operating layer beneath the AI products I build now.', evidence: 'No skill percentages. No placeholder testimonials. Every headline number on this site is dated and tied to a public or current primary source.',
    principles: [
      { title: 'Build the whole system', body: 'Agents, APIs, data, interface, deployment, analytics, payments and operations belong to one product.' },
      { title: 'Prove at the user layer', body: 'A build or HTTP 200 is not the outcome. I verify the live screen, real workflow and resulting state.' },
      { title: 'Explain across boundaries', body: 'Spanish, English and Mandarin delivery helps bridge engineering, users, clients and executives.' }
    ],
    timeline: [
      { years: '2009–2023', title: 'Web, mobile, growth & education', body: 'Products, course creation, digital-design instruction and a 70+ project first-party history.' },
      { years: '2013–2017', title: 'Media work in China', body: 'Commercial production, presenting and multilingual on-camera communication.' },
      { years: '2019–2023', title: 'Production full-stack engineering', body: 'Web systems, Linux/server operations, CI/CD practices, reviews and mentoring.' },
      { years: '2022–present', title: 'AI teaching & technical consulting', body: 'Implementation-first agents, automation, Python and AI product engineering.' },
      { years: '2025–present', title: 'Agents AI Ltd', body: 'Founder-led AI platforms, agentic operations and specialist product delivery.' }
    ]
  },
  es: {
    eyebrow: 'Por qué todo conecta', title: 'Producto, sistemas, distribución y comunicación.',
    intro: 'Mi carrera no empezó con los LLM. Full-stack, apps móviles, growth, docencia y medios en China forman la capa operativa de los productos de IA que construyo hoy.', evidence: 'Sin porcentajes arbitrarios. Sin testimonios de relleno. Cada cifra principal está fechada y ligada a una fuente pública o primaria actual.',
    principles: [
      { title: 'Construir el sistema completo', body: 'Agentes, APIs, datos, interfaz, despliegue, analítica, pagos y operaciones son un único producto.' },
      { title: 'Demostrar en la capa del usuario', body: 'Un build o un HTTP 200 no es el resultado. Verifico la pantalla, el flujo y el estado real.' },
      { title: 'Explicar entre mundos', body: 'La entrega en español, inglés y mandarín une ingeniería, usuarios, clientes y dirección.' }
    ],
    timeline: [
      { years: '2009–2023', title: 'Web, móvil, growth y educación', body: 'Productos, cursos, docencia de diseño digital y una trayectoria declarada de 70+ proyectos.' },
      { years: '2013–2017', title: 'Medios en China', body: 'Producción comercial, presentación y comunicación multilingüe en cámara.' },
      { years: '2019–2023', title: 'Ingeniería full-stack en producción', body: 'Web, Linux/servidores, CI/CD, revisiones y mentoring.' },
      { years: '2022–actualidad', title: 'Docencia de IA y consultoría', body: 'Agentes, automatización, Python e ingeniería de producto orientados a implementación.' },
      { years: '2025–actualidad', title: 'Agents AI Ltd', body: 'Plataformas de IA, operaciones agénticas y entrega especializada de producto.' }
    ]
  },
  fr: {
    eyebrow: 'Pourquoi tout se relie', title: 'Produit, systèmes, distribution et communication.',
    intro: 'Ma carrière n’a pas commencé avec les LLM. Full-stack, mobile, croissance, formation et médias en Chine forment la base de mes produits IA actuels.', evidence: 'Aucun pourcentage arbitraire. Aucun faux témoignage. Chaque chiffre important est daté et sourcé.',
    principles: [{ title: 'Construire le système complet', body: 'Agents, APIs, données, interface, déploiement, analyse et opérations forment un seul produit.' }, { title: 'Prouver au niveau utilisateur', body: 'Un build n’est pas le résultat. Je vérifie l’écran et le workflow réel.' }, { title: 'Expliquer entre les mondes', body: 'Espagnol, anglais et mandarin relient ingénierie, utilisateurs et décideurs.' }],
    timeline: [{ years: '2009–2023', title: 'Web, mobile, croissance & éducation', body: 'Produits, cours, design numérique et 70+ projets déclarés.' }, { years: '2013–2017', title: 'Médias en Chine', body: 'Production commerciale et présentation multilingue.' }, { years: '2019–2023', title: 'Ingénierie full-stack', body: 'Web, Linux, CI/CD, revues et mentoring.' }, { years: '2022–présent', title: 'Formation IA & conseil', body: 'Agents, automatisation, Python et produit.' }, { years: '2025–présent', title: 'Agents AI Ltd', body: 'Plateformes IA et opérations agentiques.' }]
  },
  zh: {
    eyebrow: '这些经历为何相连', title: '产品、系统、增长与沟通。',
    intro: '我的职业并非始于 LLM。全栈、移动应用、增长、教学以及在中国的媒体经历，构成了今天 AI 产品的运营基础。', evidence: '不使用任意技能百分比，不使用占位推荐语。网站的核心数据均注明日期并绑定公开或当前一手来源。',
    principles: [{ title: '构建完整系统', body: '智能体、API、数据、界面、部署、分析、支付和运营属于同一个产品。' }, { title: '在用户层验证', body: '构建成功或 HTTP 200 并非结果；必须验证真实界面、流程和状态。' }, { title: '跨边界解释', body: '西班牙语、英语和中文帮助连接工程、用户、客户与管理层。' }],
    timeline: [{ years: '2009–2023', title: 'Web、移动、增长与教育', body: '产品、课程、数字设计教学与 70+ 项目的一手职业记录。' }, { years: '2013–2017', title: '中国媒体工作', body: '商业制作、主持与多语言镜头沟通。' }, { years: '2019–2023', title: '生产级全栈工程', body: 'Web、Linux、CI/CD、评审和指导。' }, { years: '2022–至今', title: 'AI 教学与技术咨询', body: '面向实现的智能体、自动化、Python 与产品工程。' }, { years: '2025–至今', title: 'Agents AI Ltd', body: 'AI 平台、智能体运营与专业产品交付。' }]
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
            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm font-semibold leading-relaxed text-amber-950">{c.evidence}</div>
            <div className="mt-8 space-y-5">{c.principles.map((item, index) => <div key={item.title} className="grid grid-cols-[36px_1fr] gap-4"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-800">{index + 1}</span><div><h3 className="font-bold text-slate-950">{item.title}</h3><p className="mt-1 text-slate-600">{item.body}</p></div></div>)}</div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <ol className="space-y-0">{c.timeline.map((item, index) => <li key={item.years} className="relative grid grid-cols-[90px_1fr] gap-5 pb-7 last:pb-0"><div className="text-sm font-bold text-brand-700">{item.years}</div><div className="relative border-l border-slate-200 pl-6"><span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-brand-600 ring-4 ring-brand-50"></span><h3 className="font-bold text-slate-950">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{item.body}</p>{index < c.timeline.length - 1 && <span className="sr-only">then</span>}</div></li>)}</ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
