import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';

const Section: React.FC<{ title: string, points: string[] }>=({ title, points })=> (
  <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <ul className="list-disc list-inside text-slate-700 space-y-2">
      {points.map((p, i) => (<li key={i}>{p}</li>))}
    </ul>
  </div>
);

const CTA: React.FC=()=> (
  <div className="mt-10 flex flex-col sm:flex-row gap-4">
    <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Solicitar demo</Link>
    <a href="https://wa.me/34679794037" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">WhatsApp</a>
  </div>
);

const MedicalAI: React.FC = () => {
  const { t } = useTranslation();
  const title = t('services.medicalAI.title');
  const description = t('services.medicalAI.description');
  const ogImage = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&h=630&q=80';
  const relatedCaseStudies = [
    { href: '/case-studies/radiology-ai', label: t('caseStudies.index.case.radiology.title') }
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Formación y consultoría en IA médica',
    areaServed: 'Madrid, Online',
    provider: { '@type': 'Person', name: 'Sami Halawa' },
    serviceType: 'AI Medical Training',
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' }
  };
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: '¿Es seguro para datos clínicos?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Separamos entornos, aplicamos anonimización y controles de acceso.' }},
      { '@type': 'Question', name: '¿Necesito programar?', acceptedAnswer: { '@type': 'Answer', text: 'No. Los flujos son visuales y guiados; el código es opcional.' }},
      { '@type': 'Question', name: '¿Cuánto dura la formación?', acceptedAnswer: { '@type': 'Answer', text: 'Taller de 1 día o programa de 4 semanas (2h/semana).' }}
    ]
  };
  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
        <link rel="canonical" href="/services/medical-ai" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">Aplicaciones reales en consulta: ChatGPT clínico, análisis de imagen con apoyo de IA y automatización de flujos. Confidencialidad garantizada.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Qué aprenderás" points={[
            'Informes clínicos en 3 minutos con ChatGPT clínico',
            'Triaje inteligente y gestión de citas',
            'Apoyo al diagnóstico en RX/TAC/RM (compatible con PACS)',
            'Búsqueda en guías y protocolos, redacción para pacientes'
          ]} />
          <Section title="Casos reales" points={[
            'Hospital de Madrid: -70% tiempo informes de radiología',
            'Urgencias: triaje automático con alta precisión',
            'Oftalmología: detección temprana de retinopatías'
          ]} />
        </div>
        <CTA />
        <div className="mt-8 text-sm text-slate-700">
          <span className="font-semibold">{t('services.relatedCaseStudies')}</span>
          <ul className="mt-2 list-disc list-inside space-y-1">
            {relatedCaseStudies.map((cs) => (
              <li key={cs.href}>
                <a className="underline" href={cs.href}>{cs.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MedicalAI;
