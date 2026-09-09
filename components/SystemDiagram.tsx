import React from 'react';

export interface DiagramNode {
  label: string;
  detail: string;
  tag?: string;
}

interface SystemDiagramProps {
  eyebrow?: string;
  title: string;
  nodes: DiagramNode[];
  caption?: string;
  feedback?: string;
  dark?: boolean;
}

/**
 * Responsive flow diagram used by the anchor case studies. Renders as a
 * horizontal pipeline on large screens and stacks vertically on small ones,
 * so the same architecture reads correctly on every device.
 */
const SystemDiagram: React.FC<SystemDiagramProps> = ({ eyebrow = 'System diagram', title, nodes, caption, feedback, dark = false }) => {
  const frame = dark ? 'border-slate-700 bg-slate-950' : 'border-slate-400 bg-[#f8f6f1]';
  const rule = dark ? 'border-slate-700' : 'border-slate-300';
  const box = dark ? 'border-slate-700 bg-slate-900' : 'border-slate-400 bg-white';
  const heading = dark ? 'text-white' : 'text-slate-950';
  const muted = dark ? 'text-slate-400' : 'text-slate-500';
  const body = dark ? 'text-slate-300' : 'text-slate-600';
  const accent = dark ? 'text-brand-200' : 'text-brand-800';
  const arrow = dark ? 'bg-slate-950 text-slate-500' : 'bg-[#f8f6f1] text-slate-500';

  return (
    <figure className={`border ${frame} p-5 sm:p-7`} role="group" aria-label={title}>
      <div className={`flex flex-wrap items-baseline justify-between gap-3 border-b ${rule} pb-4`}>
        <span className={`text-xs font-bold uppercase tracking-[.2em] ${accent}`}>{eyebrow}</span>
        <span className={`font-mono text-xs ${muted}`}>{String(nodes.length).padStart(2, '0')} stages</span>
      </div>
      <p className={`cv-serif mt-4 text-2xl font-semibold leading-tight ${heading} sm:text-3xl`}>{title}</p>

      <ol className="mt-6 grid gap-4 lg:grid-flow-col lg:auto-cols-fr lg:gap-6">
        {nodes.map((node, index) => {
          const last = index === nodes.length - 1;
          return (
            <li key={node.label} className="relative flex flex-col">
              <div className={`flex flex-1 flex-col border ${box} p-4`}>
                <div className="flex items-center justify-between gap-3">
                  <span className={`font-mono text-xs font-bold ${accent}`}>{String(index + 1).padStart(2, '0')}</span>
                  {node.tag && <span className={`text-[0.65rem] font-bold uppercase tracking-[.14em] ${muted}`}>{node.tag}</span>}
                </div>
                <strong className={`mt-3 block font-display text-sm font-bold leading-snug ${heading}`}>{node.label}</strong>
                <p className={`mt-2 text-xs leading-5 ${body}`}>{node.detail}</p>
              </div>
              {!last && (
                <>
                  <span aria-hidden className={`flex justify-center py-1 text-sm lg:hidden ${muted}`}><i className="fas fa-arrow-down" /></span>
                  <span aria-hidden className={`absolute right-[-1.35rem] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center text-sm lg:flex ${arrow}`}><i className="fas fa-arrow-right" /></span>
                </>
              )}
            </li>
          );
        })}
      </ol>

      {feedback && (
        <div className={`mt-5 flex items-start gap-3 border-t border-dashed ${rule} pt-4 text-xs leading-5 ${body}`}>
          <i className={`fas fa-rotate-left mt-0.5 ${accent}`} aria-hidden />
          <span>{feedback}</span>
        </div>
      )}
      {caption && <figcaption className={`mt-4 text-sm leading-6 ${muted}`}>{caption}</figcaption>}
    </figure>
  );
};

export default SystemDiagram;
