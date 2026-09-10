import React, { useMemo, useState } from 'react';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';
import { PORTFOLIO_INVENTORY, inventoryLaneCopy, getInventoryCopy, type InventoryLane } from '../portfolio';

const laneOrder: InventoryLane[] = ['products', 'clients', 'open-source', 'research', 'education', 'infrastructure', 'archive'];

const copy: Record<LanguageCode, { eyebrow: string; title: string; body: string; legend: string; legendBody: string; search: string; all: string; results: string; none: string; open: string; verified: string; approximate: string }> = {
  en: { eyebrow: 'Complete production archive', title: 'Every catalogued system, classified by what it was.', body: 'The four pillars organise the depth; this archive preserves it. Each record carries one classification so a product, a client delivery, an open-source tool and a research prototype are never read as the same kind of work or as overlapping employment.', legend: 'Classification', legendBody: 'Products are owned systems. Client & collaboration entries are delivered for a third party. Open source is public code. Research covers prototypes and experiments. Education and infrastructure are supporting work. Earlier work groups foundational work outside the current production-architecture lanes.', search: 'Search by name, technology or year', all: 'All lanes', results: 'records', none: 'No records match this search.', open: 'Open', verified: 'verified', approximate: 'approximate date' },
  es: { eyebrow: 'Archivo completo de producción', title: 'Cada sistema catalogado, clasificado según lo que fue.', body: 'Los cuatro pilares organizan la profundidad; este archivo la conserva. Cada registro lleva una única clasificación para que un producto, una entrega a cliente, una herramienta open source y un prototipo de investigación nunca se lean como el mismo tipo de trabajo ni como empleos solapados.', legend: 'Clasificación', legendBody: 'Los productos son sistemas propios. Cliente y colaboración son entregas para terceros. Open source es código público. Investigación cubre prototipos y experimentos. Educación e infraestructura son trabajo de apoyo. Trabajos anteriores agrupa trabajo fundacional fuera de las líneas actuales de arquitectura de producción.', search: 'Buscar por nombre, tecnología o año', all: 'Todas las líneas', results: 'registros', none: 'Ningún registro coincide con la búsqueda.', open: 'Abrir', verified: 'verificado', approximate: 'fecha aproximada' },
  fr: { eyebrow: 'Archive de production complète', title: 'Chaque système catalogué, classé selon ce qu’il était.', body: 'Les quatre piliers organisent la profondeur ; cette archive la conserve. Chaque fiche porte une seule classification afin qu’un produit, une livraison client, un outil open source et un prototype de recherche ne soient jamais lus comme le même type de travail ni comme des emplois qui se chevauchent.', legend: 'Classification', legendBody: 'Les produits sont des systèmes en propre. Clients et collaborations sont livrés pour un tiers. Open source désigne du code public. Recherche couvre prototypes et expérimentations. Éducation et infrastructure sont des travaux de soutien. Travaux antérieurs regroupe des travaux fondateurs hors des catégories actuelles d’architecture de production.', search: 'Rechercher par nom, technologie ou année', all: 'Toutes les catégories', results: 'fiches', none: 'Aucune fiche ne correspond à cette recherche.', open: 'Ouvrir', verified: 'vérifié', approximate: 'date approximative' },
  zh: { eyebrow: '完整生产档案', title: '每个已归档的系统，按其本质分类。', body: '四大支柱负责组织深度，这个档案负责保留深度。每条记录只有一个分类，因此产品、客户交付、开源工具和研究原型不会被误读为同类工作或重叠的雇佣关系。', legend: '分类', legendBody: '产品是自有系统；客户与合作是为第三方交付；开源是公开代码；研究涵盖原型与实验；教育与基础设施是支撑性工作；早期作品归集当前生产架构类别之外的基础性工作。', search: '按名称、技术或年份搜索', all: '全部类型', results: '条记录', none: '没有符合搜索条件的记录。', open: '打开', verified: '已核实', approximate: '日期为约数' },
};

const ProductionArchive: React.FC = () => {
  const { language } = useTranslation();
  const c = copy[language];
  const [lane, setLane] = useState<InventoryLane | 'all'>('all');
  const [query, setQuery] = useState('');

  const counts = useMemo(() => {
    const map = new Map<InventoryLane, number>();
    PORTFOLIO_INVENTORY.forEach(item => map.set(item.lane, (map.get(item.lane) || 0) + 1));
    return map;
  }, []);

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...PORTFOLIO_INVENTORY]
      .sort((a, b) => b.number - a.number)
      .filter(item => lane === 'all' || item.lane === lane)
      .filter(item => !q || `${item.title} ${item.period} ${item.era} ${getInventoryCopy(item, language).summary}`.toLowerCase().includes(q));
  }, [lane, query, language]);

  return (
    <section id="archive" className="scroll-mt-24 mt-24 border-t border-slate-400 pt-16" aria-labelledby="archive-heading">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:gap-16">
        <div>
          <span className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">{c.eyebrow}</span>
          <h2 id="archive-heading" className="cv-serif mt-5 max-w-4xl text-4xl font-normal leading-[1.02] tracking-[-.04em] text-slate-950 sm:text-5xl">{c.title}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{c.body}</p>
        </div>
        <aside className="border-l-2 border-brand-700 bg-white p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-slate-950">{c.legend}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">{c.legendBody}</p>
        </aside>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-y border-slate-300 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label={c.legend}>
          <button type="button" onClick={() => setLane('all')} className={`min-h-9 border px-3 text-xs font-bold uppercase tracking-[.12em] transition-colors ${lane === 'all' ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-400 bg-transparent text-slate-700 hover:border-slate-950'}`}>{c.all} · {PORTFOLIO_INVENTORY.length}</button>
          {laneOrder.map(key => (
            <button key={key} type="button" onClick={() => setLane(key)} className={`min-h-9 border px-3 text-xs font-bold uppercase tracking-[.12em] transition-colors ${lane === key ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-400 bg-transparent text-slate-700 hover:border-slate-950'}`}>{inventoryLaneCopy[key][language]} · {counts.get(key) || 0}</button>
          ))}
        </div>
        <label className="flex min-h-11 items-center gap-3 border border-slate-400 bg-white px-3 lg:w-80">
          <i className="fas fa-search text-xs text-slate-500" aria-hidden />
          <input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={c.search} aria-label={c.search} className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none" />
        </label>
      </div>

      <p className="mt-4 text-xs font-bold uppercase tracking-[.14em] text-slate-500" aria-live="polite">{items.length} {c.results}</p>

      {items.length === 0
        ? <p className="mt-6 border border-dashed border-slate-400 p-6 text-sm text-slate-600">{c.none}</p>
        : (
          <ol className="mt-4 grid border-l border-t border-slate-300 md:grid-cols-2 xl:grid-cols-3">
            {items.map(item => {
              const summary = getInventoryCopy(item, language).summary;
              return (
                <li key={item.id} className="flex flex-col border-b border-r border-slate-300 bg-white p-5">
                  <div className="text-[0.68rem] font-bold uppercase tracking-[.14em]">
                    <span className="text-brand-800">{inventoryLaneCopy[item.lane][language]}</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold leading-snug text-slate-950">{item.title}</h3>
                  <p className="mt-1 text-xs font-semibold text-slate-500">{item.period}{item.status === 'approximate' ? ` · ${c.approximate}` : ''}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{summary}</p>
                  {item.href && <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-9 w-fit items-center gap-2 border-b border-slate-500 pt-3 text-xs font-bold text-slate-900 no-underline hover:border-slate-950">{c.open}<i className="fas fa-arrow-up-right-from-square text-[0.6rem]" /></a>}
                </li>
              );
            })}
          </ol>
        )}
    </section>
  );
};

export default ProductionArchive;
