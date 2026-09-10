import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

type ProofKind = 'product' | 'client' | 'oss' | 'research' | 'advisory';
interface Proof { label: string; href?: string; external?: boolean; kind: ProofKind }
interface PillarCopy { title: string; summary: string; proof: Proof[] }

interface PillarDefinition {
  id: string;
  stack: string[];
  copy: Record<LanguageCode, PillarCopy>;
}

const kindCopy: Record<LanguageCode, Record<ProofKind, string>> = {
  en: { product: 'Own product', client: 'Client delivery', oss: 'Open source', research: 'Research', advisory: 'Advisory' },
  es: { product: 'Producto propio', client: 'Entrega a cliente', oss: 'Open source', research: 'Investigación', advisory: 'Asesoría' },
  fr: { product: 'Produit propre', client: 'Livraison client', oss: 'Open source', research: 'Recherche', advisory: 'Conseil' },
  zh: { product: '自有产品', client: '客户交付', oss: '开源', research: '研究', advisory: '顾问' },
};

const headings: Record<LanguageCode, { eyebrow: string; title: string; body: string; stack: string; proof: string }> = {
  en: { eyebrow: 'Four production system pillars', title: 'Every shipped system maps to one of four architectures.', body: 'Four architectures demonstrated through live products, client deliveries, public tools and applied research. The full record behind them is classified in the archive.', stack: 'Stack', proof: 'Proof highlights' },
  es: { eyebrow: 'Cuatro pilares de sistemas en producción', title: 'Cada sistema entregado encaja en una de cuatro arquitecturas.', body: 'Cuatro arquitecturas demostradas con productos en producción, entregas a clientes, herramientas públicas e investigación aplicada. El registro completo está clasificado en el archivo.', stack: 'Stack', proof: 'Evidencia destacada' },
  fr: { eyebrow: 'Quatre piliers de systèmes en production', title: 'Chaque système livré correspond à l’une de quatre architectures.', body: 'Quatre architectures démontrées par des produits en production, des livraisons clients, des outils publics et de la recherche appliquée. Le dossier complet est classé dans l’archive.', stack: 'Stack', proof: 'Preuves clés' },
  zh: { eyebrow: '四大生产系统支柱', title: '每个已交付的系统都对应四种架构之一。', body: '四种架构，由在线产品、客户交付、公开工具与应用研究共同印证。完整记录已在档案中分类。', stack: '技术栈', proof: '关键证据' },
};

const pillars: PillarDefinition[] = [
  {
    id: 'orchestration',
    stack: ['Python', 'FastAPI', 'LangGraph', 'Custom MCP tooling', 'Async execution', 'Human-in-the-loop'],
    copy: {
      en: { title: 'Multi-Agent Orchestration & Autonomous Tooling', summary: 'Agent systems that research, decide and act across email, WhatsApp, voice and developer environments, with an explicit operator checkpoint before external action.', proof: [
        { label: 'AutoClient AI lead engines — 200+ qualified contacts in two weeks, 30% conversion lift', href: '/case-studies/autoclient', kind: 'product' },
        { label: 'VUDA visual debugging agent — 80★ on GitHub, 900+ npm installs', href: '/case-studies/vuda', kind: 'oss' },
        { label: 'email-smtp-imap-mcp server — 1,700+ npm installs', href: 'https://github.com/samihalawa/mcp-server-smtp', external: true, kind: 'oss' },
      ] },
      es: { title: 'Orquestación multiagente y tooling autónomo', summary: 'Sistemas de agentes que investigan, deciden y actúan en email, WhatsApp, voz y entornos de desarrollo, con un punto de revisión explícito antes de cualquier acción externa.', proof: [
        { label: 'Motores de leads AutoClient — 200+ contactos cualificados en dos semanas, +30% de conversión', href: '/case-studies/autoclient', kind: 'product' },
        { label: 'Agente de depuración visual VUDA — 80★ en GitHub, 900+ instalaciones npm', href: '/case-studies/vuda', kind: 'oss' },
        { label: 'Servidor email-smtp-imap-mcp — 1.700+ instalaciones npm', href: 'https://github.com/samihalawa/mcp-server-smtp', external: true, kind: 'oss' },
      ] },
      fr: { title: 'Orchestration multi-agents et outillage autonome', summary: 'Systèmes d’agents qui recherchent, décident et agissent sur email, WhatsApp, voix et environnements de développement, avec un point de contrôle opérateur explicite avant toute action externe.', proof: [
        { label: 'Moteurs de leads AutoClient — 200+ contacts qualifiés en deux semaines, +30 % de conversion', href: '/case-studies/autoclient', kind: 'product' },
        { label: 'Agent de débogage visuel VUDA — 80★ sur GitHub, 900+ installations npm', href: '/case-studies/vuda', kind: 'oss' },
        { label: 'Serveur email-smtp-imap-mcp — 1 700+ installations npm', href: 'https://github.com/samihalawa/mcp-server-smtp', external: true, kind: 'oss' },
      ] },
      zh: { title: '多智能体编排与自主工具', summary: '在邮件、WhatsApp、语音与开发环境中进行调研、决策与执行的智能体系统，并在任何外部动作前设置明确的人工审核点。', proof: [
        { label: 'AutoClient AI 线索引擎 — 两周内 200+ 合格联系人，转化率提升 30%', href: '/case-studies/autoclient', kind: 'product' },
        { label: 'VUDA 视觉调试智能体 — GitHub 80★，900+ npm 安装', href: '/case-studies/vuda', kind: 'oss' },
        { label: 'email-smtp-imap-mcp 服务器 — 1,700+ npm 安装', href: 'https://github.com/samihalawa/mcp-server-smtp', external: true, kind: 'oss' },
      ] },
    },
  },
  {
    id: 'rag',
    stack: ['Vector DBs', 'BM25 hybrid search', 'Query DSL', 'Reranking', 'LLM-as-judge evals'],
    copy: {
      en: { title: 'High-Throughput RAG & Search Platforms', summary: 'Retrieval, ranking and assistant layers that serve real marketplace traffic in Mandarin, Spanish and English, evaluated against operator-defined quality checks.', proof: [
        { label: 'OULANG (欧浪AI) Mandarin-first marketplace — 17k+ registered users, 89k+ contact operations across web, iOS and Android', href: '/case-studies/oulang', kind: 'product' },
        { label: 'Behavioral recommendation workflow with inspectable evaluation-and-dispatch logs', href: '/case-studies/oulang', kind: 'product' },
      ] },
      es: { title: 'Plataformas RAG y de búsqueda de alto rendimiento', summary: 'Capas de recuperación, ranking y asistente que sirven tráfico real de marketplace en mandarín, español e inglés, evaluadas con controles de calidad definidos por el operador.', proof: [
        { label: 'Marketplace OULANG (欧浪AI) en mandarín — 17k+ usuarios registrados, 89k+ operaciones de contacto en web, iOS y Android', href: '/case-studies/oulang', kind: 'product' },
        { label: 'Flujo de recomendaciones por comportamiento con logs de evaluación y despacho inspeccionables', href: '/case-studies/oulang', kind: 'product' },
      ] },
      fr: { title: 'Plateformes RAG et recherche à haut débit', summary: 'Couches de retrieval, de classement et d’assistant servant un trafic marketplace réel en mandarin, espagnol et anglais, évaluées par des contrôles qualité définis par l’opérateur.', proof: [
        { label: 'Marketplace OULANG (欧浪AI) en mandarin — 17k+ utilisateurs inscrits, 89k+ opérations de contact sur web, iOS et Android', href: '/case-studies/oulang', kind: 'product' },
        { label: 'Workflow de recommandations comportementales avec journaux d’évaluation et de dispatch inspectables', href: '/case-studies/oulang', kind: 'product' },
      ] },
      zh: { title: '高吞吐 RAG 与搜索平台', summary: '面向真实市场流量的检索、排序与助手层，支持中文、西班牙语和英语，并按运营方定义的质量标准持续评估。', proof: [
        { label: 'OULANG（欧浪AI）中文优先市场平台 — 17k+ 注册用户，Web、iOS 与 Android 三端 89k+ 次联系操作', href: '/case-studies/oulang', kind: 'product' },
        { label: '行为推荐工作流，评估与派发日志可随时查看', href: '/case-studies/oulang', kind: 'product' },
      ] },
    },
  },
  {
    id: 'cloud',
    stack: ['AWS', 'GCP', 'Hetzner / Docker control planes', 'Redis / PostgreSQL', 'LangSmith / Langfuse observability'],
    copy: {
      en: { title: 'Cloud Architecture, Cost Optimization & MLOps', summary: 'Control planes, model routing and observability that keep AI products cheap to run and easy to operate, from managed cloud to self-hosted inference.', proof: [
        { label: 'Enterprise cloud AI compute spend reduced from ~€18k/month to ~€200/month through hybrid model routing and self-hosted inference', kind: 'client' },
        { label: 'OULANG migration from Cloud Run to Hetzner and Coolify with Cloudflare at the edge', href: '/case-studies/oulang', kind: 'product' },
        { label: 'AutoPricing / IWAKY ERP and pricing-intelligence workflows', href: '/case-studies/autopricing', kind: 'client' },
      ] },
      es: { title: 'Arquitectura cloud, optimización de costes y MLOps', summary: 'Planos de control, enrutado de modelos y observabilidad que mantienen los productos de IA baratos de operar y fáciles de gestionar, desde cloud gestionado hasta inferencia autoalojada.', proof: [
        { label: 'Gasto empresarial en cómputo de IA reducido de ~18.000 €/mes a ~200 €/mes mediante enrutado híbrido de modelos e inferencia autoalojada', kind: 'client' },
        { label: 'Migración de OULANG de Cloud Run a Hetzner y Coolify con Cloudflare en el borde', href: '/case-studies/oulang', kind: 'product' },
        { label: 'Flujos ERP y de inteligencia de precios AutoPricing / IWAKY', href: '/case-studies/autopricing', kind: 'client' },
      ] },
      fr: { title: 'Architecture cloud, optimisation des coûts et MLOps', summary: 'Plans de contrôle, routage de modèles et observabilité qui gardent les produits IA peu coûteux à exploiter et simples à opérer, du cloud managé à l’inférence auto-hébergée.', proof: [
        { label: 'Dépenses de calcul IA d’entreprise réduites de ~18 k€/mois à ~200 €/mois grâce au routage hybride de modèles et à l’inférence auto-hébergée', kind: 'client' },
        { label: 'Migration d’OULANG de Cloud Run vers Hetzner et Coolify avec Cloudflare en périphérie', href: '/case-studies/oulang', kind: 'product' },
        { label: 'Workflows ERP et d’intelligence tarifaire AutoPricing / IWAKY', href: '/case-studies/autopricing', kind: 'client' },
      ] },
      zh: { title: '云架构、成本优化与 MLOps', summary: '控制平面、模型路由与可观测性，让 AI 产品运行成本低、易于运营，覆盖托管云到自托管推理。', proof: [
        { label: '通过混合模型路由与自托管推理，将企业云端 AI 算力支出从约 €18k/月降至约 €200/月', kind: 'client' },
        { label: 'OULANG 从 Cloud Run 迁移到 Hetzner 与 Coolify，由 Cloudflare 承担边缘层', href: '/case-studies/oulang', kind: 'product' },
        { label: 'AutoPricing / IWAKY ERP 与定价情报工作流', href: '/case-studies/autopricing', kind: 'client' },
      ] },
    },
  },
  {
    id: 'regulated',
    stack: ['GDPR-compliant document intelligence', 'EU AI Act Article 50 transparency', 'Fine-tuned VLMs (DeepSeek-VL2)', 'Human review by design'],
    copy: {
      en: { title: 'Regulated-Domain & Medical AI Systems', summary: 'Clinical, legal and compliance workflows where image interpretation, reasoning, reporting and professional review stay separate and auditable.', proof: [
        { label: 'AutoMedical clinical AI engines and the APOLO multimodal model (DeepSeek-VL2-tiny) published on Hugging Face', href: '/case-studies/apolo-medical-framework', kind: 'research' },
        { label: 'PIME.ai compliance frameworks — multilingual EU AI Act readiness pack', href: 'https://pime.ai/ai-act', external: true, kind: 'product' },
        { label: 'AI Act Express advisory for Article 50 transparency obligations', kind: 'advisory' },
      ] },
      es: { title: 'Sistemas de IA médica y de dominios regulados', summary: 'Flujos clínicos, legales y de cumplimiento donde interpretación de imagen, razonamiento, informes y revisión profesional permanecen separados y auditables.', proof: [
        { label: 'Motores clínicos AutoMedical y el modelo multimodal APOLO (DeepSeek-VL2-tiny) publicado en Hugging Face', href: '/case-studies/apolo-medical-framework', kind: 'research' },
        { label: 'Marcos de cumplimiento PIME.ai — pack multilingüe de preparación para la Ley de IA de la UE', href: 'https://pime.ai/ai-act', external: true, kind: 'product' },
        { label: 'Asesoría AI Act Express sobre las obligaciones de transparencia del artículo 50', kind: 'advisory' },
      ] },
      fr: { title: 'Systèmes IA médicaux et domaines réglementés', summary: 'Workflows cliniques, juridiques et de conformité où interprétation d’image, raisonnement, reporting et revue professionnelle restent séparés et auditables.', proof: [
        { label: 'Moteurs cliniques AutoMedical et modèle multimodal APOLO (DeepSeek-VL2-tiny) publié sur Hugging Face', href: '/case-studies/apolo-medical-framework', kind: 'research' },
        { label: 'Cadres de conformité PIME.ai — pack multilingue de préparation à l’AI Act européen', href: 'https://pime.ai/ai-act', external: true, kind: 'product' },
        { label: 'Conseil AI Act Express sur les obligations de transparence de l’article 50', kind: 'advisory' },
      ] },
      zh: { title: '受监管领域与医疗 AI 系统', summary: '临床、法律与合规工作流，让影像解读、推理、报告与专业审核保持分离且可审计。', proof: [
        { label: 'AutoMedical 临床 AI 引擎与发布于 Hugging Face 的 APOLO 多模态模型（DeepSeek-VL2-tiny）', href: '/case-studies/apolo-medical-framework', kind: 'research' },
        { label: 'PIME.ai 合规框架 — 多语言欧盟 AI 法案就绪包', href: 'https://pime.ai/ai-act', external: true, kind: 'product' },
        { label: 'AI Act Express 咨询，覆盖第 50 条透明度义务', kind: 'advisory' },
      ] },
    },
  },
];

const ProofLink: React.FC<{ item: Proof }> = ({ item }) => {
  const className = 'border-b border-slate-400 text-slate-800 no-underline transition-colors hover:border-slate-950 hover:text-slate-950';
  if (!item.href) return <span className="text-slate-800">{item.label}</span>;
  if (item.external) return <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>{item.label}<i className="fas fa-arrow-up-right-from-square ml-2 text-[0.6rem] text-slate-500" aria-hidden /></a>;
  return <Link to={item.href} className={className}>{item.label}</Link>;
};

const ProductionPillars: React.FC = () => {
  const { language } = useTranslation();
  const h = headings[language];

  return (
    <section id="pillars" className="scroll-mt-20 border-b border-slate-300 bg-[#f8f6f1] py-20 sm:py-24" aria-labelledby="pillars-heading">
      <div className="container">
        <div className="grid gap-8 border-b border-slate-400 pb-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-brand-800">{h.eyebrow}</span>
            <h2 id="pillars-heading" className="cv-serif mt-5 max-w-4xl text-4xl font-normal leading-[1.02] tracking-[-.04em] text-slate-950 sm:text-6xl">{h.title}</h2>
          </div>
          <p className="border-t border-slate-400 pt-5 text-lg leading-relaxed text-slate-600 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">{h.body}</p>
        </div>

        <div className="grid border-l border-slate-400 md:grid-cols-2">
          {pillars.map((pillar, index) => {
            const copy = pillar.copy[language];
            return (
              <article key={pillar.id} id={`pillar-${pillar.id}`} className="flex flex-col border-b border-r border-slate-400 bg-white p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-sm font-bold text-brand-800">{String(index + 1).padStart(2, '0')}</span>
                  <span className="h-px flex-1 bg-slate-300" />
                </div>
                <h3 className="cv-serif mt-5 text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">{copy.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{copy.summary}</p>

                <div className="mt-6 border-t border-slate-300 pt-5">
                  <p className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{h.stack}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {pillar.stack.map(item => <li key={item} className="border border-slate-300 bg-[#f8f6f1] px-2.5 py-1 font-mono text-[0.7rem] font-semibold text-slate-700">{item}</li>)}
                  </ul>
                </div>

                <div className="mt-6 border-t border-slate-300 pt-5">
                  <p className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">{h.proof}</p>
                  <ul className="mt-3 space-y-3">
                    {copy.proof.map(item => (
                      <li key={item.label} className="grid grid-cols-[1rem_1fr] gap-3 text-sm leading-6">
                        <span className="mt-2 h-1.5 w-1.5 bg-brand-700" aria-hidden />
                        <span><span className="mr-2 inline-block border border-slate-300 px-1.5 py-0.5 align-middle text-[0.6rem] font-bold uppercase tracking-[.12em] text-slate-500">{kindCopy[language][item.kind]}</span><ProofLink item={item} /></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductionPillars;
