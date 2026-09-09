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
      { value: '80+', label: 'Production AI modules & workflows shipped', detail: 'Products, client systems, open-source tools and internal workflows, catalogued in the project archive.', href: '/projects' },
      { value: '2,500+', label: 'Open-source MCP tool installs', detail: 'VUDA visual debugging agent (900+ npm installs, 80★) and email-smtp-imap-mcp (1,700+ npm installs).', href: '/case-studies/vuda' },
      { value: '17,000+', label: 'Registered users served across web, iOS & Android', detail: 'OULANG marketplace: 17,262 registered users, 38,857 listings and 89,913 contact reveals as of July 2026.', href: '/case-studies/oulang' },
      { value: 'ES · EN · 中文', label: 'Trilingual architecture execution', detail: 'Discovery, architecture, delivery and stakeholder communication in Spanish, English and Mandarin.' },
    ],
  },
  es: {
    eyebrow: 'Evidencia de producción',
    metrics: [
      { value: '80+', label: 'Módulos y flujos de IA en producción entregados', detail: 'Productos, sistemas para clientes, herramientas open source y flujos internos catalogados en el archivo de proyectos.', href: '/projects' },
      { value: '2.500+', label: 'Instalaciones de herramientas MCP open source', detail: 'Agente de depuración visual VUDA (900+ instalaciones npm, 80★) y email-smtp-imap-mcp (1.700+ instalaciones npm).', href: '/case-studies/vuda' },
      { value: '17.000+', label: 'Usuarios registrados atendidos en web, iOS y Android', detail: 'Marketplace OULANG: 17.262 usuarios registrados, 38.857 anuncios y 89.913 contactos revelados a julio de 2026.', href: '/case-studies/oulang' },
      { value: 'ES · EN · 中文', label: 'Ejecución de arquitectura trilingüe', detail: 'Discovery, arquitectura, entrega y comunicación con stakeholders en español, inglés y mandarín.' },
    ],
  },
  fr: {
    eyebrow: 'Preuves de production',
    metrics: [
      { value: '80+', label: 'Modules et workflows IA livrés en production', detail: 'Produits, systèmes clients, outils open source et workflows internes catalogués dans l’archive des projets.', href: '/projects' },
      { value: '2 500+', label: 'Installations d’outils MCP open source', detail: 'Agent de débogage visuel VUDA (900+ installations npm, 80★) et email-smtp-imap-mcp (1 700+ installations npm).', href: '/case-studies/vuda' },
      { value: '17 000+', label: 'Utilisateurs inscrits servis sur web, iOS et Android', detail: 'Marketplace OULANG : 17 262 utilisateurs inscrits, 38 857 annonces et 89 913 contacts révélés en juillet 2026.', href: '/case-studies/oulang' },
      { value: 'ES · EN · 中文', label: 'Exécution d’architecture trilingue', detail: 'Cadrage, architecture, livraison et communication avec les parties prenantes en espagnol, anglais et mandarin.' },
    ],
  },
  zh: {
    eyebrow: '生产证据',
    metrics: [
      { value: '80+', label: '已交付的生产级 AI 模块与工作流', detail: '产品、客户系统、开源工具与内部工作流，均记录在项目档案中。', href: '/projects' },
      { value: '2,500+', label: '开源 MCP 工具安装量', detail: 'VUDA 视觉调试智能体（900+ npm 安装，80★）与 email-smtp-imap-mcp（1,700+ npm 安装）。', href: '/case-studies/vuda' },
      { value: '17,000+', label: 'Web、iOS 与 Android 三端服务的注册用户', detail: 'OULANG 市场平台：截至 2026 年 7 月，17,262 名注册用户、38,857 条信息与 89,913 次联系方式查看。', href: '/case-studies/oulang' },
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
