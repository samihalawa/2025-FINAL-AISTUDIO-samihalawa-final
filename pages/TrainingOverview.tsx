import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';

const Section: React.FC<{ title: string; children: React.ReactNode }>=({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-slate-900 mb-3">{title}</h2>
    <div className="text-slate-700 space-y-4">{children}</div>
  </section>
);

const TrainingOverview: React.FC = () => {
  const { t } = useTranslation();
  const title = t('trainingOverview.title');
  const intro = t('trainingOverview.intro');
  const groups: Array<{name: string; items: Array<{href: string; title: string; desc: string}>}> = [
    {
      name: t('trainingOverview.group.core'),
      items: [
        { href: '/services/prompt-engineering', title: t('services.promptEngineering.name'), desc: t('trainingOverview.item.prompt.desc') },
        { href: '/services/rag-langchain', title: t('services.ragLangChain.name'), desc: t('trainingOverview.item.rag.desc') },
        { href: '/services/agents-automation', title: t('services.agentsAutomation.name'), desc: t('trainingOverview.item.agents.desc') },
      ]
    },
    {
      name: t('trainingOverview.group.business'),
      items: [
        { href: '/services/ai-for-marketing', title: t('services.aiForMarketing.name'), desc: t('trainingOverview.item.marketing.desc') },
        { href: '/services/business-automation', title: t('services.businessAutomation.name'), desc: t('trainingOverview.item.automation.desc') },
        { href: '/services/no-code-ai', title: t('services.noCodeAI.name'), desc: t('trainingOverview.item.noCode.desc') },
      ]
    },
    {
      name: t('trainingOverview.group.specialized'),
      items: [
        { href: '/services/medical-ai', title: t('services.medicalAI.name'), desc: t('trainingOverview.item.medical.desc') },
        { href: '/services/university-ml', title: t('services.universityML.name'), desc: t('trainingOverview.item.university.desc') },
        { href: '/services/family-ai', title: t('services.familyAI.name'), desc: t('trainingOverview.item.family.desc') },
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
<div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">{intro}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.flatMap(g => g.items.map(item => (
            <Link key={item.href} to={item.href} className="block bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <h2 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h2>
              <p className="text-slate-700">{item.desc}</p>
            </Link>
          )))}
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Section title={t('trainingOverview.section.delivery')}>
            <ul className="list-disc list-inside space-y-1">
              <li>{t('trainingOverview.delivery.onsite')}</li>
              <li>{t('trainingOverview.delivery.duration')}</li>
              <li>{t('trainingOverview.delivery.languages')}</li>
              <li>{t('trainingOverview.delivery.materials')}</li>
            </ul>
          </Section>
          <Section title={t('trainingOverview.section.outcomes')}>
            <ul className="list-disc list-inside space-y-1">
              <li>{t('trainingOverview.outcomes.impact')}</li>
              <li>{t('trainingOverview.outcomes.playbooks')}</li>
              <li>{t('trainingOverview.outcomes.guardrails')}</li>
              <li>{t('trainingOverview.outcomes.production')}</li>
            </ul>
          </Section>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">{t('trainingOverview.cta.primary')}</Link>
          <Link to="/services" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">{t('trainingOverview.cta.secondary')}</Link>
        </div>
      </div>
    </section>
  );
};

export default TrainingOverview;
