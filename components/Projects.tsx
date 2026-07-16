import React, { useMemo, useState } from 'react';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';
import {
  EVIDENCE_GAPS,
  LINKEDIN_MEDIA_ASSETS,
  PORTFOLIO_INVENTORY,
  PORTFOLIO_PROJECTS,
  PROGRESSION_PLAN_STEPS,
  categoryCopy,
  getEvidenceGapCopy,
  getInventoryCopy,
  getLinkedInMediaAssetCopy,
  getProgressionPlanStepCopy,
  getProjectCopy,
  inventoryLaneCopy,
  type InventoryLane,
  type InventoryStatus,
  type PortfolioCategory,
} from '../portfolio';

type InventoryFilter = 'all' | InventoryLane;
type StatusFilter = 'all' | InventoryStatus;

const headings: Record<LanguageCode, {
  eyebrow: string;
  title: string;
  body: string;
  curatedEyebrow: string;
  curatedTitle: string;
  curatedBody: string;
  mediaEyebrow: string;
  mediaTitle: string;
  mediaBody: string;
  mediaBoundary: string;
  proof: string;
  boundary: string;
  ledgerEyebrow: string;
  ledgerTitle: string;
  ledgerBody: string;
  search: string;
  allLanes: string;
  allStatuses: string;
  verified: string;
  approximate: string;
  source: string;
  openSource: string;
  results: string;
  noResults: string;
  methodology: string;
  methodologyBody: string;
  progressionEyebrow: string;
  progressionTitle: string;
  progressionBody: string;
  progressionCurrent: string;
  progressionAction: string;
  progressionUnlocks: string;
  knownGaps: string;
  knownGapsBody: string;
  gapStatus: string;
  gapNextStep: string;
}> = {
  en: {
    eyebrow: 'Evidence portfolio · 2023–today',
    title: 'The full body of work, without pretending every artifact is the same thing.',
    body: 'Products, client collaborations, open source, medical and agent research, infrastructure, teaching and publishing—organized chronologically and labelled at the evidence boundary.',
    curatedEyebrow: 'Selected case files',
    curatedTitle: 'The strongest work, with the proof attached.',
    curatedBody: 'These are the projects worth opening first. Live products, prototypes, proposals and pre-release apps keep their real status.',
    mediaEyebrow: 'Public-safe media queue',
    mediaTitle: 'The LinkedIn series now has verified media, but it is not scheduled.',
    mediaBody: 'These assets are reusable evidence cards for the chronological post series and the portfolio. They are shown here because they are already privacy-safe and visually verified.',
    mediaBoundary: 'Posts 2–20 are still drafts. This site section is not LinkedIn publication or scheduling proof.',
    proof: 'Open proof',
    boundary: 'Evidence boundary',
    ledgerEyebrow: 'Complete chronology',
    ledgerTitle: '87 classified entries. Nothing silently dropped.',
    ledgerBody: 'Search the full evidence ledger or filter it by workstream and verification state. Dates run oldest to newest inside each era.',
    search: 'Search projects, clients, tools or evidence',
    allLanes: 'All workstreams',
    allStatuses: 'All evidence states',
    verified: 'Verified',
    approximate: 'Approximate',
    source: 'Source boundary',
    openSource: 'Open primary source',
    results: 'matching entries',
    noResults: 'No entries match these filters.',
    methodology: 'How this was rebuilt',
    methodologyBody: 'Primary sources outrank summaries: repositories, direct contracts and messages, queried cashflow rows, official profiles, Drive files, recordings, store emails and current live surfaces. A proposal is not delivery; a contract is not acceptance; a reachable URL is not a product metric.',
    progressionEyebrow: 'Next proof sequence',
    progressionTitle: 'The remaining work is ordered so nothing gets missed.',
    progressionBody: 'This is the public-safe execution plan behind the CV, Notion master, LinkedIn queue and site. Each step upgrades evidence before it upgrades claims.',
    progressionCurrent: 'Current state',
    progressionAction: 'Next proof action',
    progressionUnlocks: 'What it unlocks',
    knownGaps: 'What is still missing',
    knownGapsBody: 'Deleted or transferred repositories, three unresolved old remote identities, three approximate local family matches, a GitHub public-gist surfacing mismatch, a capped Colab folder, recording content-review gaps, non-Coolify provider exports, authenticated app-store console states, several client outcomes and LinkedIn Posts 2–20 scheduling proof remain open evidence gaps.',
    gapStatus: 'Current state',
    gapNextStep: 'Next proof action',
  },
  es: {
    eyebrow: 'Portfolio con evidencia · 2023–hoy',
    title: 'Todo el trabajo, sin fingir que cada artefacto significa lo mismo.',
    body: 'Productos, clientes, open source, investigación médica y de agentes, infraestructura, docencia y publicaciones—en cronología y con su límite de evidencia.',
    curatedEyebrow: 'Casos seleccionados',
    curatedTitle: 'El trabajo más fuerte, con la prueba adjunta.',
    curatedBody: 'Los proyectos que merece la pena abrir primero. Productos activos, prototipos, propuestas y apps pre-lanzamiento conservan su estado real.',
    mediaEyebrow: 'Cola pública de medios',
    mediaTitle: 'La serie de LinkedIn ya tiene medios verificados, pero no está programada.',
    mediaBody: 'Estos assets son tarjetas reutilizables de evidencia para la serie cronológica y el portfolio. Se muestran aquí porque ya son seguros para público y están revisados visualmente.',
    mediaBoundary: 'Los Posts 2–20 siguen siendo borradores. Esta sección no prueba publicación ni programación en LinkedIn.',
    proof: 'Abrir prueba',
    boundary: 'Límite de evidencia',
    ledgerEyebrow: 'Cronología completa',
    ledgerTitle: '87 entradas clasificadas. Nada desaparece en silencio.',
    ledgerBody: 'Busca en todo el registro o filtra por tipo de trabajo y estado de verificación. Dentro de cada etapa, las fechas van de más antiguas a más nuevas.',
    search: 'Buscar proyectos, clientes, herramientas o evidencia',
    allLanes: 'Todos los tipos',
    allStatuses: 'Todos los estados',
    verified: 'Verificado',
    approximate: 'Aproximado',
    source: 'Fuente y límite',
    openSource: 'Abrir fuente primaria',
    results: 'entradas coincidentes',
    noResults: 'Ninguna entrada coincide con estos filtros.',
    methodology: 'Cómo se reconstruyó',
    methodologyBody: 'Las fuentes primarias mandan: repositorios, contratos y mensajes directos, movimientos consultados, perfiles oficiales, Drive, grabaciones, emails de tienda y sitios actuales. Una propuesta no es una entrega; un contrato no es aceptación; una URL accesible no es una métrica de producto.',
    progressionEyebrow: 'Siguiente secuencia de pruebas',
    progressionTitle: 'Lo pendiente queda ordenado para no perder nada.',
    progressionBody: 'Este es el plan público detrás del CV, Notion master, cola de LinkedIn y sitio. Cada paso mejora la evidencia antes de mejorar los claims.',
    progressionCurrent: 'Estado actual',
    progressionAction: 'Siguiente prueba',
    progressionUnlocks: 'Qué desbloquea',
    knownGaps: 'Qué sigue faltando',
    knownGapsBody: 'Siguen abiertos: repositorios borrados o transferidos, tres identidades remotas antiguas sin resolver, tres coincidencias locales aproximadas, la discrepancia de exposición pública de GitHub gists, Colab limitado, grabaciones sin indexar, proveedores no-Coolify, estados autenticados de tiendas, resultados de varios clientes y la prueba de programación de los Posts 2–20 de LinkedIn.',
    gapStatus: 'Estado actual',
    gapNextStep: 'Siguiente prueba',
  },
  fr: {
    eyebrow: 'Portfolio avec preuves · 2023–aujourd’hui',
    title: 'Tout le travail, sans faire croire que chaque artefact a le même statut.',
    body: 'Produits, clients, open source, recherche, infrastructure, enseignement et publications—classés chronologiquement avec leur niveau de preuve.',
    curatedEyebrow: 'Dossiers sélectionnés',
    curatedTitle: 'Les travaux les plus forts, preuves jointes.',
    curatedBody: 'Produits en ligne, prototypes, propositions et applications en pré-lancement conservent leur statut réel.',
    mediaEyebrow: 'Médias publics vérifiés',
    mediaTitle: 'La série LinkedIn a maintenant des médias vérifiés, mais elle n’est pas planifiée.',
    mediaBody: 'Ces visuels sont des cartes de preuve réutilisables pour la série chronologique et le portfolio.',
    mediaBoundary: 'Les posts 2–20 restent des brouillons. Cette section ne prouve aucune publication ou planification LinkedIn.',
    proof: 'Ouvrir la preuve', boundary: 'Limite de preuve', ledgerEyebrow: 'Chronologie complète',
    ledgerTitle: '87 entrées classées. Rien ne disparaît.',
    ledgerBody: 'Recherchez dans le registre complet ou filtrez par domaine et niveau de vérification.',
    search: 'Rechercher projets, clients, outils ou preuves', allLanes: 'Tous les domaines', allStatuses: 'Tous les états', verified: 'Vérifié', approximate: 'Approximatif', source: 'Source et limite', openSource: 'Ouvrir la source primaire', results: 'entrées correspondantes', noResults: 'Aucune entrée ne correspond.',
    methodology: 'Méthode de reconstruction', methodologyBody: 'Les sources primaires priment sur les résumés: dépôts, contrats et messages directs, données interrogées, profils officiels, Drive, enregistrements et surfaces en ligne.',
    progressionEyebrow: 'Prochaine séquence de preuve',
    progressionTitle: 'Le travail restant est ordonné pour ne rien perdre.',
    progressionBody: 'Plan public derrière le CV, Notion, LinkedIn et le site. Chaque étape améliore les preuves avant les affirmations.',
    progressionCurrent: 'État actuel',
    progressionAction: 'Prochaine preuve',
    progressionUnlocks: 'Ce que cela débloque',
    knownGaps: 'Ce qui manque encore', knownGapsBody: 'Dépôts supprimés ou transférés, trois anciennes identités distantes non résolues, trois correspondances locales approximatives, écart d’exposition publique des gists GitHub, Colab, enregistrements, fournisseurs hors Coolify, états de stores authentifiés, résultats clients et preuve de planification des posts LinkedIn 2–20 restent ouverts.',
    gapStatus: 'État actuel',
    gapNextStep: 'Prochaine preuve',
  },
  zh: {
    eyebrow: '证据作品集 · 2023–今天', title: '完整工作记录，并明确区分每种证据的含义。',
    body: '产品、客户合作、开源、医疗与智能体研究、基础设施、教学和出版，按时间整理并标注证据边界。',
    curatedEyebrow: '精选案例', curatedTitle: '最值得先看的作品，附带真实证据。', curatedBody: '线上产品、原型、提案与预发布应用保持真实状态。',
    mediaEyebrow: '公开安全媒体队列', mediaTitle: 'LinkedIn 系列已有验证媒体，但尚未排期。', mediaBody: '这些视觉素材可作为时间线帖子和作品集的证据卡使用。', mediaBoundary: '第 2–20 条仍是草稿；此处不是 LinkedIn 发布或排期证明。',
    proof: '打开证据', boundary: '证据边界', ledgerEyebrow: '完整时间线', ledgerTitle: '87 条分类记录，没有静默遗漏。', ledgerBody: '搜索完整证据账本，或按工作类型和验证状态筛选。',
    search: '搜索项目、客户、工具或证据', allLanes: '全部类型', allStatuses: '全部状态', verified: '已验证', approximate: '近似/待确认', source: '来源边界', openSource: '打开主要来源', results: '条匹配记录', noResults: '没有符合筛选条件的记录。',
    methodology: '重建方法', methodologyBody: '主要来源优先于摘要：仓库、合同与直接消息、查询数据、官方资料、Drive、录音、商店邮件和当前线上页面。',
    progressionEyebrow: '下一步证据序列',
    progressionTitle: '剩余工作按顺序推进，避免遗漏。',
    progressionBody: '这是 CV、Notion、LinkedIn 队列和网站背后的公开安全执行计划；每一步先升级证据，再升级对外说法。',
    progressionCurrent: '当前状态',
    progressionAction: '下一步证据',
    progressionUnlocks: '可解锁内容',
    knownGaps: '仍缺少的证据', knownGapsBody: '已删除或转移的仓库、3 个未解决的旧远程身份、3 个近似本地项目匹配、GitHub 公开 gist 展示不一致、Colab、录音索引、非 Coolify 提供商、需认证的商店状态、客户结果，以及 LinkedIn 第 2–20 条帖子的排期证明仍需补全。',
    gapStatus: '当前状态',
    gapNextStep: '下一步证据',
  },
};

const categoryOrder: PortfolioCategory[] = ['platforms', 'agents', 'applied', 'education'];
const laneOrder: InventoryLane[] = ['products', 'clients', 'open-source', 'research', 'education', 'infrastructure', 'archive'];

const Projects: React.FC = () => {
  const { language } = useTranslation();
  const h = headings[language];
  const [query, setQuery] = useState('');
  const [lane, setLane] = useState<InventoryFilter>('all');
  const [status, setStatus] = useState<StatusFilter>('all');

  const filteredInventory = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase(language);
    return PORTFOLIO_INVENTORY.filter(item => {
      const c = getInventoryCopy(item, language);
      const matchesQuery = !normalizedQuery || [item.title, item.period, item.era, c.summary, c.source]
        .some(value => value.toLocaleLowerCase(language).includes(normalizedQuery));
      return matchesQuery && (lane === 'all' || item.lane === lane) && (status === 'all' || item.status === status);
    });
  }, [language, lane, query, status]);

  const eras = useMemo(() => Array.from(new Set(filteredInventory.map(item => item.era))), [filteredInventory]);
  const statCards = [
    { value: PORTFOLIO_INVENTORY.length, label: language === 'es' ? 'entradas clasificadas' : 'classified entries' },
    { value: 249, label: language === 'es' ? 'repositorios públicos originales' : 'public original repositories' },
    { value: 12, label: language === 'es' ? 'artículos públicos en Hugging Face' : 'public Hugging Face articles' },
    { value: 111, label: language === 'es' ? 'archivos media de Meet válidos' : 'valid Meet media files' },
  ];

  return (
    <section id="projects" className="overflow-hidden pb-24 pt-12 sm:pt-16" aria-labelledby="projects-heading">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 px-5 py-9 text-white shadow-2xl sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_14%,rgba(45,212,191,.22),transparent_28%),radial-gradient(circle_at_8%_88%,rgba(99,102,241,.25),transparent_30%)]" />
          <div className="relative max-w-5xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-[.18em] text-teal-200">{h.eyebrow}</span>
            <h1 id="projects-heading" className="mt-6 max-w-5xl font-display text-4xl font-bold leading-[.98] tracking-[-.055em] text-white sm:text-6xl lg:text-7xl">{h.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">{h.body}</p>
          </div>
          <div className="relative mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {statCards.map(stat => <div key={stat.label} className="bg-slate-950/80 p-5 sm:p-6"><div className="font-display text-3xl font-bold text-white sm:text-4xl">{stat.value}</div><div className="mt-2 text-xs font-semibold uppercase leading-relaxed tracking-[.12em] text-slate-400">{stat.label}</div></div>)}
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
            <div className="flex gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-200/70 text-amber-900"><i className="fas fa-scale-balanced" /></div><div><h2 className="text-lg font-bold text-amber-950">{h.methodology}</h2><p className="mt-2 max-w-4xl text-sm leading-relaxed text-amber-900/80 sm:text-base">{h.methodologyBody}</p></div></div>
          </div>
          <a href="https://app.notion.com/p/9a489d2d400c4aeebcd9828ac7ad31af" target="_blank" rel="noopener noreferrer" className="btn-secondary min-w-fit">Unified Master Inventory <i className="fas fa-arrow-up-right-from-square text-xs" /></a>
        </div>

        <div className="mt-24 max-w-4xl"><span className="badge-pill">{h.curatedEyebrow}</span><h2 className="mt-5 font-display text-4xl font-bold tracking-[-.045em] text-slate-950 sm:text-5xl">{h.curatedTitle}</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{h.curatedBody}</p></div>
        {categoryOrder.map(category => {
          const items = PORTFOLIO_PROJECTS.filter(project => project.category === category);
          return <div key={category} className="mt-14"><div className="mb-6 flex items-center gap-4"><h3 className="text-xl font-bold text-slate-950 sm:text-2xl">{categoryCopy[category][language]}</h3><span className="h-px flex-1 bg-slate-200" /><span className="text-sm font-bold tabular-nums text-slate-400">{String(items.length).padStart(2, '0')}</span></div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{items.map((project, index) => { const c = getProjectCopy(project, language); return <article id={project.id} key={project.id} className="group scroll-mt-24 flex min-h-[27rem] flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              {project.image ? <div className="h-52 overflow-hidden border-b border-slate-200 bg-slate-100"><img src={project.image} alt={`${project.name} interface evidence`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" style={{ objectPosition: project.imagePosition || 'center' }} loading="lazy" /></div> : <div className="flex h-36 items-end justify-between border-b border-slate-800 bg-slate-950 p-6 text-white"><span className="font-display text-5xl font-bold text-teal-200">{String(index + 1).padStart(2, '0')}</span><i className="fas fa-code-branch text-xl text-white/35" /></div>}
              <div className="flex flex-1 flex-col p-6"><div className="text-xs font-bold uppercase tracking-[.16em] text-brand-700">{project.period}</div><h4 className="mt-2 text-xl font-bold text-slate-950">{project.name}</h4><p className="mt-3 text-sm leading-relaxed text-slate-600">{c.description}</p><div className="mt-5 rounded-xl bg-slate-50 p-4"><div className="text-[11px] font-bold uppercase tracking-[.14em] text-slate-500">{h.boundary}</div><p className="mt-1 text-xs leading-relaxed text-slate-600">{c.proof}</p></div><div className="mt-auto flex flex-wrap items-center gap-2 pt-5">{project.tags.map(tag => <span key={tag} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-600">{tag}</span>)}{project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-bold text-brand-700 hover:bg-brand-50">{h.proof}<i className="fas fa-arrow-up-right-from-square text-xs" /></a>}</div></div>
            </article>; })}</div>
          </div>;
        })}

        <div id="linkedin-media" className="scroll-mt-28 mt-24 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
            <div>
              <span className="badge-pill">{h.mediaEyebrow}</span>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-[-.045em] text-slate-950 sm:text-5xl">{h.mediaTitle}</h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{h.mediaBody}</p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm font-semibold leading-relaxed text-amber-950">{h.mediaBoundary}</div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {LINKEDIN_MEDIA_ASSETS.map(asset => {
              const c = getLinkedInMediaAssetCopy(asset, language);
              return <article key={asset.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <div className="aspect-video overflow-hidden bg-slate-950">
                  <img src={asset.image} alt={`${asset.post}: ${c.title}`} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="text-xs font-bold uppercase tracking-[.16em] text-brand-700">{asset.post}</div>
                  <h3 className="mt-2 text-lg font-bold text-slate-950">{c.title}</h3>
                  <div className="mt-4 rounded-xl bg-white p-4">
                    <div className="text-[11px] font-bold uppercase tracking-[.14em] text-slate-500">{h.boundary}</div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{c.proof}</p>
                  </div>
                </div>
              </article>;
            })}
          </div>
        </div>

        <div id="progression-plan" className="scroll-mt-28 mt-24 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="max-w-4xl">
            <span className="badge-pill">{h.progressionEyebrow}</span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-[-.045em] text-slate-950 sm:text-5xl">{h.progressionTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{h.progressionBody}</p>
          </div>
          <div className="mt-8 space-y-4">
            {PROGRESSION_PLAN_STEPS.map(step => {
              const c = getProgressionPlanStepCopy(step, language);
              return <article key={step.id} className="grid gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 lg:grid-cols-[5rem_1fr]">
                <div className="font-display text-4xl font-bold tracking-[-.05em] text-brand-700">{String(step.order).padStart(2, '0')}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950">{c.title}</h3>
                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[.14em] text-slate-500">{h.progressionCurrent}</div>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{c.currentState}</p>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[.14em] text-brand-700">{h.progressionAction}</div>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700">{c.nextProofAction}</p>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[.14em] text-emerald-700">{h.progressionUnlocks}</div>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{c.unlocks}</p>
                    </div>
                  </div>
                </div>
              </article>;
            })}
          </div>
        </div>

        <div id="inventory" className="scroll-mt-28 mt-28 border-t border-slate-200 pt-20">
          <div className="max-w-4xl"><span className="badge-pill">{h.ledgerEyebrow}</span><h2 className="mt-5 font-display text-4xl font-bold tracking-[-.045em] text-slate-950 sm:text-5xl">{h.ledgerTitle}</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{h.ledgerBody}</p></div>

          <div className="sticky top-20 z-20 -mx-4 mt-10 border-y border-slate-200 bg-surface/95 px-4 py-4 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border sm:px-5">
            <label className="relative block"><span className="sr-only">{h.search}</span><i className="fas fa-magnifying-glass pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" /><input value={query} onChange={event => setQuery(event.target.value)} placeholder={h.search} className="min-h-12 w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" /></label>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label={h.allLanes}>
              <button type="button" onClick={() => setLane('all')} aria-pressed={lane === 'all'} className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-bold transition ${lane === 'all' ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-300 bg-white text-slate-600 hover:border-brand-400'}`}>{h.allLanes}</button>
              {laneOrder.map(option => <button type="button" key={option} onClick={() => setLane(option)} aria-pressed={lane === option} className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-bold transition ${lane === option ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-300 bg-white text-slate-600 hover:border-brand-400'}`}>{inventoryLaneCopy[option][language]}</button>)}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2"><button type="button" onClick={() => setStatus('all')} aria-pressed={status === 'all'} className={`min-h-11 rounded-full border px-4 text-sm font-bold ${status === 'all' ? 'border-brand-600 bg-brand-50 text-brand-800' : 'border-slate-300 bg-white text-slate-600'}`}>{h.allStatuses}</button><button type="button" onClick={() => setStatus('verified')} aria-pressed={status === 'verified'} className={`min-h-11 rounded-full border px-4 text-sm font-bold ${status === 'verified' ? 'border-emerald-600 bg-emerald-50 text-emerald-800' : 'border-slate-300 bg-white text-slate-600'}`}>✓ {h.verified}</button><button type="button" onClick={() => setStatus('approximate')} aria-pressed={status === 'approximate'} className={`min-h-11 rounded-full border px-4 text-sm font-bold ${status === 'approximate' ? 'border-amber-600 bg-amber-50 text-amber-900' : 'border-slate-300 bg-white text-slate-600'}`}>~ {h.approximate}</button><span className="w-full pr-20 text-left text-sm font-semibold tabular-nums text-slate-500 sm:ml-auto sm:w-auto sm:pr-0 sm:text-right">{filteredInventory.length} {h.results}</span></div>
          </div>

          <div className="mt-12 space-y-16">
            {eras.map(era => <section key={era} aria-labelledby={`era-${era.replace(/\W+/g, '-')}`}>
              <div className="grid gap-6 lg:grid-cols-[12rem_1fr]"><div><h3 id={`era-${era.replace(/\W+/g, '-')}`} className="sticky top-[18rem] font-display text-3xl font-bold tracking-[-.035em] text-slate-950">{era}</h3><div className="mt-2 h-1 w-12 rounded-full bg-brand-500" /></div><div className="space-y-4">{filteredInventory.filter(item => item.era === era).map(item => { const c = getInventoryCopy(item, language); return <article key={item.id} id={item.id} className="scroll-mt-80 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex flex-wrap items-center gap-2"><span className="font-mono text-xs font-bold tabular-nums text-slate-400">#{String(item.number).padStart(2, '0')}</span><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${item.status === 'verified' ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-900'}`}>{item.status === 'verified' ? `✓ ${h.verified}` : `~ ${h.approximate}`}</span><span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">{inventoryLaneCopy[item.lane][language]}</span><span className="ml-auto text-xs font-bold uppercase tracking-[.12em] text-slate-400">{item.period}</span></div>
                <div className={`mt-4 grid gap-5 ${item.image ? 'sm:grid-cols-[9rem_1fr]' : ''}`}>{item.image && <img src={item.image} alt={`${item.title} evidence`} className="h-28 w-full rounded-xl object-cover sm:h-28" loading="lazy" />}<div><h4 className="text-xl font-bold text-slate-950">{item.title}</h4><p className="mt-2 leading-relaxed text-slate-600">{c.summary}</p><div className="mt-4 border-l-2 border-slate-200 pl-4"><div className="text-[11px] font-bold uppercase tracking-[.14em] text-slate-400">{h.source}</div><p className="mt-1 text-sm leading-relaxed text-slate-500">{c.source}</p></div>{item.href && <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full px-1 font-bold text-brand-700">{h.openSource}<i className="fas fa-arrow-up-right-from-square text-xs" /></a>}</div></div>
              </article>; })}</div></div>
            </section>)}
            {!filteredInventory.length && <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">{h.noResults}</div>}
          </div>
        </div>

        <div id="evidence-gaps" className="scroll-mt-28 mt-24 rounded-[2rem] border border-amber-200 bg-amber-50/70 p-6 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[.18em] text-amber-700">Evidence debt</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[-.035em] text-slate-950 sm:text-4xl">{h.knownGaps}</h2>
              <p className="mt-4 max-w-4xl leading-relaxed text-slate-700">{h.knownGapsBody}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="btn-secondary" href="https://github.com/samihalawa?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub <i className="fas fa-arrow-up-right-from-square text-xs" /></a>
              <a className="btn-secondary" href="https://huggingface.co/samihalawa" target="_blank" rel="noopener noreferrer">Hugging Face <i className="fas fa-arrow-up-right-from-square text-xs" /></a>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {EVIDENCE_GAPS.map((gap, index) => {
              const c = getEvidenceGapCopy(gap, language);
              return <article key={gap.id} className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 font-mono text-sm font-bold text-amber-900">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-lg font-bold text-slate-950">{c.title}</h3>
                </div>
                <div className="mt-5 space-y-4">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[.14em] text-slate-500">{h.gapStatus}</div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{c.status}</p>
                  </div>
                  <div className="border-l-2 border-amber-300 pl-4">
                    <div className="text-[11px] font-bold uppercase tracking-[.14em] text-amber-700">{h.gapNextStep}</div>
                    <p className="mt-1 text-sm leading-relaxed text-amber-950">{c.nextStep}</p>
                  </div>
                </div>
              </article>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
