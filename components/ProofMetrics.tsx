import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';

interface Metric {
  value: string;
  label: string;
  detail: string;
  href?: string;
}

const content: Record<LanguageCode, { eyebrow: string; metrics: Metric[] }> = {
  en: {
    eyebrow: 'Production proof',
    metrics: [
      { value: '85', label: 'Catalogued systems & workstreams', detail: 'Products, client deliveries, open-source tools, research, education and infrastructure work, each classified in the production archive.', href: '/projects#archive' },
      { value: '2,500+', label: 'Open-source MCP tool installs', detail: 'VUDA visual debugging agent (900+ npm installs, 80+★) and email-smtp-imap-mcp (1,700+ npm installs), as recorded on npm and GitHub in September 2026.', href: '/case-studies/vuda' },
      { value: '17,000+', label: 'Registered users across web, iOS & Android', detail: 'OULANG marketplace: 17,262 registered users, 38,857 listings and 89,913 contact reveals as of July 2026.', href: '/case-studies/oulang' },
      { value: 'ES · EN · 中文', label: 'Trilingual architecture execution', detail: 'Discovery, architecture, delivery and stakeholder communication in Spanish, English and Mandarin.' },
    ],
  },
  es: {
    eyebrow: 'Evidencia de producción',
    metrics: [
      { value: '85', label: 'Sistemas y líneas de trabajo catalogados', detail: 'Productos, entregas a clientes, herramientas open source, investigación, educación e infraestructura, cada uno clasificado en el archivo de producción.', href: '/projects#archive' },
      { value: '2.500+', label: 'Instalaciones de herramientas MCP open source', detail: 'Agente de depuración visual VUDA (900+ instalaciones npm, 80+★) y email-smtp-imap-mcp (1.700+ instalaciones npm), según npm y GitHub en septiembre de 2026.', href: '/case-studies/vuda' },
      { value: '17.000+', label: 'Usuarios registrados en web, iOS y Android', detail: 'Marketplace OULANG: 17.262 usuarios registrados, 38.857 anuncios y 89.913 contactos revelados a julio de 2026.', href: '/case-studies/oulang' },
      { value: 'ES · EN · 中文', label: 'Ejecución de arquitectura trilingüe', detail: 'Discovery, arquitectura, entrega y comunicación con stakeholders en español, inglés y mandarín.' },
    ],
  },
  fr: {
    eyebrow: 'Preuves de production',
    metrics: [
      { value: '85', label: 'Systèmes et chantiers catalogués', detail: 'Produits, livraisons clients, outils open source, recherche, formation et infrastructure, chacun classé dans l’archive de production.', href: '/projects#archive' },
      { value: '2 500+', label: 'Installations d’outils MCP open source', detail: 'Agent de débogage visuel VUDA (900+ installations npm, 80+★) et email-smtp-imap-mcp (1 700+ installations npm), relevés sur npm et GitHub en septembre 2026.', href: '/case-studies/vuda' },
      { value: '17 000+', label: 'Utilisateurs inscrits sur web, iOS et Android', detail: 'Marketplace OULANG : 17 262 utilisateurs inscrits, 38 857 annonces et 89 913 contacts révélés en juillet 2026.', href: '/case-studies/oulang' },
      { value: 'ES · EN · 中文', label: 'Exécution d’architecture trilingue', detail: 'Cadrage, architecture, livraison et communication avec les parties prenantes en espagnol, anglais et mandarin.' },
    ],
  },
  zh: {
    eyebrow: '生产证据',
    metrics: [
      { value: '85', label: '已归档的系统与工作线', detail: '产品、客户交付、开源工具、研究、教育与基础设施工作，每一项都在生产档案中分类记录。', href: '/projects#archive' },
      { value: '2,500+', label: '开源 MCP 工具安装量', detail: 'VUDA 视觉调试智能体（900+ npm 安装，80+★）与 email-smtp-imap-mcp（1,700+ npm 安装），数据取自 2026 年 9 月的 npm 与 GitHub。', href: '/case-studies/vuda' },
      { value: '17,000+', label: 'Web、iOS 与 Android 三端注册用户', detail: 'OULANG 市场平台：截至 2026 年 7 月，17,262 名注册用户、38,857 条信息与 89,913 次联系方式查看。', href: '/case-studies/oulang' },
      { value: 'ES · EN · 中文', label: '三语架构执行', detail: '以西班牙语、英语和中文完成需求发现、架构设计、交付与干系人沟通。' },
    ],
  },
};

const ProofMetrics: React.FC = () => {
  const { language } = useTranslation();
  const c = content[language];

  return (
    <section className="border-b border-slate-300 bg-white" aria-label={c.eyebrow}>
      <div className="container">
        <dl className="grid border-l border-slate-300 sm:grid-cols-2 lg:grid-cols-4">
          {c.metrics.map((metric, index) => {
            const inner = (
              <>
                <dd className={`cv-serif font-semibold tracking-tight text-slate-950 ${metric.value.length > 8 ? 'text-3xl sm:text-[2.1rem]' : 'text-4xl sm:text-[2.6rem]'}`}>{metric.value}</dd>
                <dt className="mt-2 text-xs font-bold uppercase leading-relaxed tracking-[.12em] text-slate-700">{metric.label}</dt>
                <p className="mt-3 text-sm leading-6 text-slate-500">{metric.detail}</p>
              </>
            );
            const classes = `flex h-full flex-col border-b border-r border-slate-300 px-5 py-7 sm:px-6 ${index === 0 ? 'lg:pl-0' : ''}`;
            return metric.href
              ? <Link key={metric.label} to={metric.href} className={`${classes} group text-inherit no-underline transition-colors hover:bg-[#f8f6f1] hover:text-inherit`}>{inner}<span className="mt-auto pt-4 text-xs font-bold text-brand-800 opacity-0 transition group-hover:opacity-100"><i className="fas fa-arrow-right" /></span></Link>
              : <div key={metric.label} className={classes}>{inner}</div>;
          })}
        </dl>
      </div>
    </section>
  );
};

export default ProofMetrics;
