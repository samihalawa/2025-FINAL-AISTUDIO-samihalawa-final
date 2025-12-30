import React from 'react';
import HireCTA from '../../components/HireCTA';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../../i18n/LanguageContext';

const ApoloMedicalFramework: React.FC = () => {
  const { t, language } = useTranslation();
  const siteUrl = 'https://samihalawa.com';
  const canonical = `${siteUrl}/case-studies/apolo-medical-framework`;
  const title = 'Apolo: Privacy-Preserving Medical Image Analysis Framework';
  const description = 'A two-stage framework using fine-tuned open-source models for privacy-preserving, explainable medical image analysis with local deployment capabilities.';
  const og = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=630&q=80';
  const relatedServices = [
    { href: '/services/medical-ai', label: t('services.medicalAI.title') },
    { href: '/services/advanced-ai', label: t('services.advancedAI.title') }
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    about: 'Medical AI, Privacy-Preserving AI, Explainable AI, Vision Language Models, Medical Image Analysis',
    author: { '@type': 'Person', name: 'Sami Halawa' },
    description,
    inLanguage: language,
    mainEntityOfPage: canonical,
    isRelatedTo: relatedServices.map(service => ({
      '@type': 'Service',
      name: service.label,
      url: `${siteUrl}${service.href}`
    }))
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
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        
        <div className="prose prose-slate max-w-none mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Abstract</h2>
          <p className="text-slate-700 mb-4">
            <strong>Background:</strong> Artificial intelligence (AI) holds immense potential for transforming medical image analysis, yet its translation into routine clinical practice is significantly impeded by critical challenges: <strong>patient data privacy</strong> risks inherent in cloud-based processing, the lack of <strong>transparency</strong> in opaque "black-box" models, and the substantial <strong>computational demands</strong> that hinder local deployment within healthcare institutions.
          </p>
          
          <p className="text-slate-700 mb-4">
            <strong>Methods:</strong> We introduce <strong>Apolo</strong>, a novel <strong>two-stage framework</strong> architected to overcome these barriers using meticulously fine-tuned <strong>open-source models</strong>. Stage 1 (<strong>Apolo-VL</strong>) employs a Vision Language Model (DeepSeek VL2 Small architecture), specifically adapted through advanced fine-tuning involving <strong>Direct Preference Optimization (DPO)</strong> and <strong>Chain-of-Thought (CoT)</strong> prompting. This stage generates exceptionally detailed, objective, non-diagnostic textual descriptions of medical images (demonstrated on fundus photographs and chest X-rays), focusing on capturing subtle visual findings aligned with expert-defined quality preferences, thereby reducing sole reliance on massive diagnosis-labeled datasets for high-fidelity reporting. Stage 2 (<strong>Apolo-Instruct</strong>) utilizes a separate, lightweight Language Model (Mistral-Nemo-Instruct-2407 12B, fine-tuned and quantized), processing <em>only</em> the textual description from Stage 1. Apolo-Instruct performs diagnostic classification, critically outputting explicit <strong>reasoning steps</strong> prior to its conclusion, ensuring algorithmic transparency while architecturally <strong>isolating inference</strong> from raw image data.
          </p>
          
          <p className="text-slate-700 mb-4">
            <strong>Findings:</strong> Apolo-VL generated descriptions exhibiting high clinical fidelity across ophthalmology (EyePACS, AREDS) and radiology (CheXpert) datasets, achieving average ROUGE-L scores of 0.49 and expert clinician ratings averaging 4.7/5 for accuracy and completeness, while maintaining &gt;99.8% adherence to non-diagnostic constraints. Apolo-Instruct demonstrated robust diagnostic performance based <em>solely</em> on these detailed descriptions, achieving AUCs of 0.94 for diabetic retinopathy detection (EyePACS), 0.92 for advanced AMD detection (AREDS), and an average AUC of 0.92 across 5 common thoracic findings (CheXpert). The Mistral-Nemo-based Apolo-Instruct module (~6.5 GB quantized) exhibits <strong>low inference latency</strong> (~145 ms/description on an A100 GPU), confirming its suitability for <strong>local deployment</strong>.
          </p>
          
          <p className="text-slate-700 mb-4">
            <strong>Interpretation:</strong> The Apolo framework successfully validates that <strong>decoupling detailed visual description from diagnostic inference</strong>, using sophisticated fine-tuning of open-source models focused on descriptive quality, is a highly effective and practical strategy. It significantly enhances <strong>data privacy</strong>, provides inherent <strong>multi-level explainability</strong> (description + reasoning), and facilitates feasible <strong>local deployment</strong> of the sensitive inference component, directly addressing key barriers to the clinical adoption of <strong>trustworthy AI</strong>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Key Highlights</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
            <li>Two-stage decoupled architecture for enhanced privacy and explainability</li>
            <li>Fine-tuned Vision Language Model (DeepSeek VL2) with DPO and CoT prompting</li>
            <li>Lightweight quantized Mistral-Nemo model for local deployment (~6.5 GB)</li>
            <li>High clinical fidelity with 4.7/5 expert clinician ratings</li>
            <li>Robust diagnostic performance: AUC 0.94 (diabetic retinopathy), 0.92 (AMD, thoracic findings)</li>
            <li>Low inference latency (~145 ms) suitable for clinical workflows</li>
            <li>Privacy-preserving: &gt;99.8% adherence to non-diagnostic constraints</li>
            <li>Multi-level explainability through descriptions and reasoning steps</li>
            <li>Demonstrated on ophthalmology (EyePACS, AREDS) and radiology (CheXpert) datasets</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Technical Innovation</h2>
          <p className="text-slate-700 mb-4">
            The Apolo framework represents a paradigm shift in trustworthy AI for healthcare by addressing three critical barriers to clinical adoption:
          </p>
          <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
            <li><strong>Privacy:</strong> Decoupled architecture ensures raw image data never reaches the inference stage, enabling local deployment within healthcare institutions</li>
            <li><strong>Explainability:</strong> Multi-level transparency through detailed visual descriptions and explicit reasoning steps, eliminating black-box decision-making</li>
            <li><strong>Deployment:</strong> Lightweight quantized models enable feasible local deployment without massive computational infrastructure</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Keywords</h2>
          <p className="text-slate-700 italic">
            Medical Imaging, Artificial Intelligence, Privacy-Preserving AI, Explainable AI (XAI), Vision Language Model (VLM), Large Language Model (LLM), Open Source Models, DeepSeek, Mistral, Direct Preference Optimization (DPO), Chain-of-Thought (CoT), Local Deployment, Ophthalmology, Radiology, Clinical Decision Support, Trustworthy AI.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200">
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

