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
    eyebrow: 'Why the work connects', title: 'Product, systems, distribution and communication.',
    intro: 'My career did not begin with LLMs. Full-stack engineering, mobile apps, growth, teaching and China-based media work became the operating layer beneath the AI products I build now.', evidence: 'Hands-on by default: I can move from product framing to code, infrastructure, launch and iteration without splitting the work into disconnected handoffs.',
    principles: [
      { title: 'Build the whole system', body: 'Agents, APIs, data, interface, deployment, analytics, payments and operations belong to one product.' },
      { title: 'Close the loop', body: 'A product is only finished when the interface, workflow and operating reality work together.' },
      { title: 'Explain across boundaries', body: 'Spanish, English and Mandarin delivery helps bridge engineering, users, clients and executives.' }
    ],
    timeline: [
      { years: '2009–2023', title: 'Web, mobile, growth & education', body: 'More than 70 projects spanning products, course creation, digital-design instruction and acquisition.' },
      { years: '2013–2017', title: 'Media work in China', body: 'Commercial production, presenting and multilingual on-camera communication.' },
      { years: '2019–2023', title: 'Production full-stack engineering', body: 'Web systems, Linux/server operations, CI/CD practices, reviews and mentoring.' },
      { years: '2022–present', title: 'AI teaching & technical consulting', body: 'Implementation-first agents, automation, Python and AI product engineering.' },
      { years: '2025–present', title: 'Agents AI Ltd', body: 'Founder-led AI platforms, agentic operations and specialist product delivery.' }
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
    eyebrow: 'Por qué todo conecta', title: 'Producto, sistemas, distribución y comunicación.',
    intro: 'Mi carrera no empezó con los LLM. Full-stack, apps móviles, growth, docencia y medios en China forman la capa operativa de los productos de IA que construyo hoy.', evidence: 'Trabajo con las manos en el producto: puedo pasar de definición a código, infraestructura, lanzamiento e iteración sin dividirlo en entregas desconectadas.',
    principles: [
      { title: 'Construir el sistema completo', body: 'Agentes, APIs, datos, interfaz, despliegue, analítica, pagos y operaciones son un único producto.' },
      { title: 'Cerrar el ciclo', body: 'Un producto termina cuando interfaz, flujo y realidad operativa funcionan juntos.' },
      { title: 'Explicar entre mundos', body: 'La entrega en español, inglés y mandarín une ingeniería, usuarios, clientes y dirección.' }
    ],
    timeline: [
      { years: '2009–2023', title: 'Web, móvil, growth y educación', body: 'Más de 70 proyectos entre producto, cursos, docencia de diseño digital y adquisición.' },
      { years: '2013–2017', title: 'Medios en China', body: 'Producción comercial, presentación y comunicación multilingüe en cámara.' },
      { years: '2019–2023', title: 'Ingeniería full-stack en producción', body: 'Web, Linux/servidores, CI/CD, revisiones y mentoring.' },
      { years: '2022–actualidad', title: 'Docencia de IA y consultoría', body: 'Agentes, automatización, Python e ingeniería de producto orientados a implementación.' },
      { years: '2025–actualidad', title: 'Agents AI Ltd', body: 'Plataformas de IA, operaciones agénticas y entrega especializada de producto.' }
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
    eyebrow: 'Pourquoi tout se relie', title: 'Produit, systèmes, distribution et communication.',
    intro: 'Ma carrière n’a pas commencé avec les LLM. Full-stack, mobile, croissance, formation et médias en Chine forment la base de mes produits IA actuels.', evidence: 'J’interviens directement du cadrage produit au code, à l’infrastructure, au lancement et à l’itération, sans multiplier les relais.',
    principles: [{ title: 'Construire le système complet', body: 'Agents, APIs, données, interface, déploiement, analyse et opérations forment un seul produit.' }, { title: 'Fermer la boucle', body: 'Un produit est abouti lorsque l’interface, le parcours et la réalité opérationnelle fonctionnent ensemble.' }, { title: 'Expliquer entre les mondes', body: 'Espagnol, anglais et mandarin relient ingénierie, utilisateurs et décideurs.' }],
    timeline: [{ years: '2009–2023', title: 'Web, mobile, croissance & éducation', body: 'Plus de 70 projets couvrant produits, cours, design numérique et acquisition.' }, { years: '2013–2017', title: 'Médias en Chine', body: 'Production commerciale et présentation multilingue.' }, { years: '2019–2023', title: 'Ingénierie full-stack', body: 'Web, Linux, CI/CD, revues et mentoring.' }, { years: '2022–présent', title: 'Formation IA & conseil', body: 'Agents, automatisation, Python et produit.' }, { years: '2025–présent', title: 'Agents AI Ltd', body: 'Plateformes IA et opérations agentiques.' }],
    achievementsTitle: 'Distinctions et publications sélectionnées',
    achievements: [
      { meta: 'Nogarejas · 2012', title: 'Prix jeunesse — IIe Concours de poésie de Nogarejas', body: '« Olvidaste una llave en mi costado », soumis sous le pseudonyme « El arte de la fuga », a reçu le prix jeunesse de 200 € parmi plus de 200 œuvres d’un concours international.', links: [{ label: 'Diario de León', href: 'https://www.diariodeleon.es/leon/provincia/120904/102485/premio-poesia-nogarejas-viaja-argentina_amp.html' }, { label: 'Volume archivé', href: 'https://archive.org/details/MemoriaGrfica19532013' }] },
      { meta: 'Li Po Chun UWC Hong Kong · 2012', title: 'Bourse de la Fondation Rafael del Pino', body: 'Bourse de deux ans pour suivre le Baccalauréat international au Li Po Chun United World College de Hong Kong.', links: [{ label: 'Rapport 2012', href: 'https://www.frdelpino.es/wp-content/uploads/2013/05/Memoria-de-Actividades-2012.pdf' }] },
      { meta: 'Publié · 2024', title: 'ChinoTotal — mandarin de zéro au HSK2 / A2', body: 'Auteur d’un cours d’initiation de 296 pages en espagnol, publié indépendamment via Amazon KDP. ISBN 9798873249237.', links: [{ label: 'Notice bibliographique', href: 'https://www.agapea.com/libros/ChinoTotal-Aprende-Chino-Mandarin-desde-0-Validado-para-HSK-Aprende-Chino-Mandarin-desde-0-y-consigue-un-nivel-A2-HSK2--9798873249237-i.htm' }] }
    ]
  },
  zh: {
    eyebrow: '这些经历为何相连', title: '产品、系统、增长与沟通。',
    intro: '我的职业并非始于 LLM。全栈、移动应用、增长、教学以及在中国的媒体经历，构成了今天 AI 产品的运营基础。', evidence: '默认亲自推进：从产品定义到代码、基础设施、发布与迭代，避免把工作拆成彼此断开的交接。',
    principles: [{ title: '构建完整系统', body: '智能体、API、数据、界面、部署、分析、支付和运营属于同一个产品。' }, { title: '闭合产品循环', body: '只有界面、用户流程与真实运营共同顺畅，产品才算完成。' }, { title: '跨边界解释', body: '西班牙语、英语和中文帮助连接工程、用户、客户与管理层。' }],
    timeline: [{ years: '2009–2023', title: 'Web、移动、增长与教育', body: '完成 70 多个产品、课程、数字设计教学与增长项目。' }, { years: '2013–2017', title: '中国媒体工作', body: '商业制作、主持与多语言镜头沟通。' }, { years: '2019–2023', title: '生产级全栈工程', body: 'Web、Linux、CI/CD、评审和指导。' }, { years: '2022–至今', title: 'AI 教学与技术咨询', body: '面向实现的智能体、自动化、Python 与产品工程。' }, { years: '2025–至今', title: 'Agents AI Ltd', body: 'AI 平台、智能体运营与专业产品交付。' }],
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
            <ol className="space-y-0">{c.timeline.map((item, index) => <li key={item.years} className="relative grid grid-cols-[90px_1fr] gap-5 pb-7 last:pb-0"><div className="text-sm font-bold text-brand-700">{item.years}</div><div className="relative border-l border-slate-200 pl-6"><span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-brand-600 ring-4 ring-brand-50"></span><h3 className="font-bold text-slate-950">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{item.body}</p>{index < c.timeline.length - 1 && <span className="sr-only">then</span>}</div></li>)}</ol>
          </div>
        </div>
        <div className="mt-14 border-t border-slate-200 pt-10">
          <h3 className="text-2xl font-black tracking-tight text-slate-950">{c.achievementsTitle}</h3>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {c.achievements.map((item) => (
              <article key={item.title} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-700">{item.meta}</p>
                <h4 className="mt-3 text-lg font-black leading-snug text-slate-950">{item.title}</h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{item.body}</p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {item.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-brand-700 hover:text-brand-900">
                      {link.label} <span aria-hidden>↗</span>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
