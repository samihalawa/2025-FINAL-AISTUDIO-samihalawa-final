import React from 'react';

type Props = {
  accent?: 'architecture' | 'readiness' | 'general';
};

const cards = [
  {
    id: 'readiness',
    title: 'AI readiness checklist',
    description: 'Security, governance, data, and evaluation checkpoints you can use before shipping.',
    href: '/services/ai-readiness-audit#checklist',
    cta: 'Download checklist',
  },
  {
    id: 'architecture',
    title: 'RAG architecture template',
    description: 'Chunking, retrieval, re-ranking, and evaluation blueprint ready to clone.',
    href: '/services/rag-langchain#template',
    cta: 'Get the template',
  },
];

const LeadMagnets: React.FC<Props> = ({ accent = 'general' }) => (
  <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 shadow-soft-xl">
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="text-sm uppercase tracking-[0.3em] text-slate-300 mb-2">Lead magnets</div>
        <h3 className="text-2xl font-bold">Ship with proof-ready assets</h3>
        <p className="text-slate-200 mt-2 max-w-2xl">
          Use the same checklists and blueprints we deploy in production programs. No email gate required.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2 w-full md:max-w-xl">
        {cards.map((card) => {
          const highlighted = accent === card.id;
          return (
            <a
              key={card.id}
              href={card.href}
              className={`block rounded-2xl border px-4 py-3 transition ${highlighted ? 'border-amber-300 bg-white text-slate-900 shadow-lg' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
            >
              <div className="text-sm font-semibold">{card.title}</div>
              <p className={`text-xs mt-1 ${highlighted ? 'text-slate-600' : 'text-slate-200'}`}>{card.description}</p>
              <div className={`mt-2 text-sm font-semibold ${highlighted ? 'text-slate-900' : 'text-amber-200'}`}>
                {card.cta} <i className="fas fa-arrow-right ml-1 text-xs"></i>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </div>
);

export default LeadMagnets;
