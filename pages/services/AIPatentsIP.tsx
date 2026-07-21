import React from 'react';
import { Link } from 'react-router-dom';

const Section: React.FC<{ title: string, points: string[] }>=({ title, points })=> (
  <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <ul className="list-disc list-inside text-slate-700 space-y-2">
      {points.map((p, i) => (<li key={i}>{p}</li>))}
    </ul>
  </div>
);

const AIPatentsIP: React.FC = () => {
  const title = 'AI Technical Evidence & Research Dossiers';
  return (
    <section className="py-16 bg-white">
<div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">Turn scattered research and implementation artifacts into a traceable dossier. The service prepares technical evidence; it does not replace qualified legal advice or claim a filing outcome.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Scope" points={[ 'Prior-art research and source trail', 'Problem and differentiation framing', 'System diagrams and flows', 'Evidence and evaluation notes' ]} />
          <Section title="Outcomes" points={[ 'Technical dossier for specialist review', 'Review and iteration cycles', 'Claim-to-source map', 'Open questions and recommended next steps' ]} />
        </div>
        <div className="mt-10 flex gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Discuss your research</Link>
          <Link to="/case-studies/apolo-medical-framework" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">See APOLO research</Link>
        </div>
      </div>
    </section>
  );
};

export default AIPatentsIP;
