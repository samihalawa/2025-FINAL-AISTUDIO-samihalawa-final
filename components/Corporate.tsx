import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { TRAINING_PROGRAMS, PARTNERS } from '../constants';
import type { TranslationKey } from '../i18n/translations';

const Corporate: React.FC = () => {
    const { t } = useTranslation();

    const featuredServices: { href: string; key: 'medicalAI' | 'businessAutomation' | 'promptEngineering' | 'ragLangChain' | 'agentsAutomation' | 'aiReadinessAudit' | 'aiForMarketing' | 'acceleratorReadiness' | 'aiFundingGrants' }[] = [
        { href: '/services/medical-ai', key: 'medicalAI' },
        { href: '/services/business-automation', key: 'businessAutomation' },
        { href: '/services/prompt-engineering', key: 'promptEngineering' },
        { href: '/services/rag-langchain', key: 'ragLangChain' },
        { href: '/services/agents-automation', key: 'agentsAutomation' },
        { href: '/services/ai-readiness-audit', key: 'aiReadinessAudit' },
        { href: '/services/ai-for-marketing', key: 'aiForMarketing' },
        { href: '/services/accelerator-readiness', key: 'acceleratorReadiness' },
        { href: '/services/ai-funding-grants', key: 'aiFundingGrants' },
    ];

    return (
        <section id="corporate" className="py-20 bg-slate-50 scroll-mt-20" aria-label="Corporate Training">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{t('corporate.title')}</h2>
                    <p className="text-lg text-slate-700">{t('corporate.description')}</p>
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-900">{t('corporate.programsTitle')}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TRAINING_PROGRAMS.map(program => (
                            <div key={program.titleKey} className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                                <div className="flex-shrink-0 bg-slate-100 h-16 w-16 flex items-center justify-center rounded-full mb-6">
                                    <i className={`${program.icon} text-slate-600 text-3xl`}></i>
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-slate-900">{t(program.titleKey)}</h4>
                                <p className="text-slate-700 mb-4 flex-grow">{t(program.descriptionKey)}</p>
                                <p className="text-sm font-semibold text-slate-500 mt-auto pt-4 border-t border-slate-100">{t(program.audienceKey)}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">{t('corporate.partnersTitle')}</h3>
                    <p className="text-slate-700 max-w-2xl mx-auto mb-8">{t('corporate.partnersDescription')}</p>
                    <div className="flex justify-center items-center space-x-12 text-slate-500">
                        {PARTNERS.map(partner => (
                             <div key={partner.name} className="flex flex-col items-center group" title={partner.name}>
                                <i className={`${partner.icon} text-5xl group-hover:text-slate-800 transition-colors`}></i>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-slate-900">{t('corporate.featuredTitle')}</h3>
                    <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">{t('corporate.featuredSubtitle')}</p>
                    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredServices.map((service) => {
                            const nameKey = `services.${service.key}.name` as TranslationKey;
                            const descriptionKey = `services.${service.key}.description` as TranslationKey;
                            return (
                                <a key={service.key} href={service.href} className="glass-panel flex h-full flex-col justify-between p-6 shadow-soft-xl transition hover:-translate-y-1">
                                    <div>
                                        <h4 className="text-lg font-semibold text-slate-900">{t(nameKey)}</h4>
                                        <p className="mt-3 text-sm text-slate-600 line-clamp-3">{t(descriptionKey)}</p>
                                    </div>
                                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                                        {t('home.servicesShowcase.learnMore')}
                                        <i className="fas fa-arrow-right"></i>
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                    <div className="text-center mt-10">
                      <a href="/case-studies" className="btn-secondary">{t('corporate.featuredCta')}</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Corporate;
