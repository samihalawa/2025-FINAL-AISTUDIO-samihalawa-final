import React from 'react';
import { Helmet } from 'react-helmet-async';
import HireCTA from '../../components/HireCTA';
import { useTranslation } from '../../i18n/LanguageContext';

const ApoloMedicalFramework: React.FC = () => {
  const { t, language } = useTranslation();
  const siteUrl = 'https://samihalawa.com';
  const canonical = `${siteUrl}/case-studies/apolo-medical-framework`;
  const title = 'APOLO — multimodal medical-image workflow research';
  const description = 'Architecture and prototype work exploring how a vision-language model can produce structured image descriptions for a separate, reviewable reasoning stage.';
  const og = `${siteUrl}/portfolio/apolo-architecture.png`;
  const relatedServices = [
    { href: '/services/medical-ai', label: t('services.medicalAI.title') },
    { href: '/services/advanced-ai', label: t('services.advancedAI.title') },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    about: 'Medical-image workflow research, multimodal AI, structured reporting, human review',
    author: { '@type': 'Person', name: 'Sami Halawa' },
    description,
    inLanguage: language,
    mainEntityOfPage: canonical,
  };

  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>{title} | Sami Halawa</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={og} />
        <meta name="twitter:image" content={og} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="container mx-auto max-w-4xl px-6">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-700">Research prototype</p>
        <h1 className="mb-5 text-3xl font-extrabold text-slate-900 md:text-5xl">{title}</h1>
        <p className="mb-8 text-lg leading-8 text-slate-700">{description}</p>

        <img
          src="/portfolio/apolo-architecture.png"
          alt="APOLO two-stage multimodal workflow architecture"
          className="mb-10 w-full rounded-3xl border border-slate-200 bg-slate-50 object-contain p-4"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="mb-3 text-xl font-bold text-slate-900">What exists</h2>
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              <li>A two-stage architecture separating visual description from downstream reasoning.</li>
              <li>Model and workflow artifacts based on the DeepSeek-VL2 family.</li>
              <li>Structured-output and local-processing design exploration.</li>
              <li>Human-review checkpoints for sensitive medical-image workflows.</li>
            </ul>
          </article>
          <article className="rounded-3xl border border-brand-200 bg-brand-50 p-6">
            <h2 className="mb-3 text-xl font-bold text-slate-900">Research scope</h2>
            <p className="leading-7 text-slate-700">
              APOLO is research and prototyping work focused on multimodal architecture, structured outputs and
              human review. It explores a foundation for future evaluation rather than a clinical diagnostic product.
            </p>
          </article>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-600">
            {t('caseStudies.relatedServices')} {' '}
            {relatedServices.map((service, index) => (
              <span key={service.href}>
                <a className="underline" href={service.href}>{service.label}</a>
                {index === relatedServices.length - 1 ? '' : ' · '}
              </span>
            ))}
          </p>
          <HireCTA />
        </div>
      </div>
    </section>
  );
};

export default ApoloMedicalFramework;
