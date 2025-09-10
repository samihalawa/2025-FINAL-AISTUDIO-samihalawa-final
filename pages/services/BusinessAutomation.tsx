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
    <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">Auditoría gratuita</Link>
    <a href="/projects" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">Ver casos</a>
  </div>
);

const BusinessAutomation: React.FC = () => {
  const { t } = useTranslation();
  const title = t('services.businessAutomation.title');
  const description = t('services.businessAutomation.description');
  const ogImage = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&h=630&q=80';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Automatización empresarial con IA',
    areaServed: 'Madrid, Online',
    provider: { '@type': 'Person', name: 'Sami Halawa' },
    serviceType: 'AI Automation',
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' }
  };
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: '¿Necesito desarrolladores?', acceptedAnswer: { '@type': 'Answer', text: 'No. Usamos Zapier/Make/n8n y sólo código cuando aporta valor.' }},
      { '@type': 'Question', name: '¿Qué CRMs integras?', acceptedAnswer: { '@type': 'Answer', text: 'HubSpot, Salesforce, Pipedrive, Notion, Airtable, Google Workspace y más.' }},
      { '@type': 'Question', name: '¿Cómo controlamos costes?', acceptedAnswer: { '@type': 'Answer', text: 'Presupuestos por flujo, límites por uso y reportes mensuales de ROI.' }}
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
        <link rel="canonical" href="/services/business-automation" />
      </Helmet>
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">Email → presupuesto → factura → cobro. Prospección, atención al cliente y reporting que funcionan solos. Sin técnicos, todo visual.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title="Qué automatizaremos" points={[
            'Embudo completo: captación, presupuesto, factura y cobro',
            'Chatbot vendedor 24/7 con tu catálogo y objeciones',
            'Dashboard con métricas y alertas inteligentes',
            'Onboarding y seguimiento automático de clientes'
          ]} />
          <Section title="Stack sin código" points={[
            'ChatGPT/Claude con prompts empresariales',
            'Zapier, Make o n8n (gratuito) para flujos visuales',
            'Power Automate si usas Microsoft 365',
            'Integración con tu CRM y herramientas actuales'
          ]} />
        </div>
        <CTA />
      </div>
    </section>
  );
};

export default BusinessAutomation;
