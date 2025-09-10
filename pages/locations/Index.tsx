import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const cities = [
  { href: '/locations/madrid', title: 'Madrid', desc: 'Onsite AI training and consulting in Madrid.' },
  { href: '/locations/barcelona', title: 'Barcelona', desc: 'Workshops and AI solutions in Barcelona.' },
  { href: '/locations/valencia', title: 'Valencia', desc: 'Programs for startups and teams (Lanzadera).' },
  { href: '/locations/spain', title: 'Spain', desc: 'Nationwide delivery across Spain.' },
  { href: '/locations/online', title: 'Online', desc: 'Remote-first training for global teams.' },
];

const LocationsIndex: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>AI Training Locations | Madrid, Barcelona, Valencia, Online</title>
        <meta name="description" content="AI workshops and consulting delivered onsite in Madrid, Barcelona, Valencia, across Spain and worldwide online." />
        <link rel="canonical" href="/locations" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">AI Training — Locations</h1>
        <p className="text-lg text-slate-700 mb-8">Onsite delivery in Spain and remote worldwide. Choose your location to see details and availability.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map(c => (
            <Link key={c.href} to={c.href} className="block bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">{c.title}</h2>
              <p className="text-slate-700">{c.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsIndex;

