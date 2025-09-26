import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const About: React.FC = () => {
    const { t } = useTranslation();

    const highlights = [
        { icon: 'fas fa-lightbulb', key: 'about.highlight1' as const },
        { icon: 'fas fa-cogs', key: 'about.highlight2' as const },
        { icon: 'fas fa-rocket', key: 'about.highlight3' as const }
    ];

    const languages = ['about.languageEn' as const, 'about.languageEs' as const, 'about.languageFr' as const, 'about.languageZh' as const];
    const toolKeys = ['skills.toolReactNext', 'skills.toolNodeExpress', 'skills.toolDockerK8s'] as const;

    return (
        <section id="about" className="relative scroll-mt-24 py-24" aria-label="About Sami Halawa">
            <div className="container">
                <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
                    <span className="badge-pill mb-4 inline-flex items-center gap-2 text-brand-700">
                        <i className="fas fa-compass"></i>
                        {t('about.badge')}
                    </span>
                    <h2 className="section-heading">{t('about.sectionHeading')}</h2>
                    <p className="section-subtitle mx-auto mt-4">{t('about.sectionSubtitle')}</p>
                </div>

                <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)]">
                    <div className="space-y-8">
                        <div className="glass-panel p-8 shadow-soft-xl">
                            <h3 className="text-2xl font-semibold text-slate-900">{t('about.highlightsTitle')}</h3>
                            <p className="mt-3 text-slate-600">{t('about.paragraph2')}</p>
                            <ul className="mt-6 space-y-5">
                                {highlights.map(item => (
                                    <li key={item.key} className="flex items-start gap-4">
                                        <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                                            <i className={`${item.icon} text-base`}></i>
                                        </span>
                                        <span className="text-slate-700 leading-relaxed">{t(item.key)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="glass-panel flex flex-wrap items-center gap-3 p-6 shadow-soft-xl">
                            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{t('about.languagesTitle')}</h3>
                            <div className="flex flex-wrap gap-2">
                                {languages.map(langKey => (
                                    <span key={langKey} className="rounded-full border border-brand-100 bg-white/80 px-4 py-1 text-sm font-semibold text-brand-700 shadow-sm">
                                        {t(langKey)}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel relative overflow-hidden p-8 shadow-soft-xl">
                        <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-brand-500/10 blur-3xl"></div>
                        <h3 className="text-xl font-semibold text-slate-900">{t('about.highlightsTitle')}</h3>
                        <p className="mt-3 text-sm text-slate-600">{t('about.paragraph2')}</p>
                        <div className="mt-8 space-y-5">
                            <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/70 px-4 py-3">
                                <span className="text-sm font-medium text-slate-600">{t('skills.skillJsTs')}</span>
                                <span className="text-lg font-semibold text-slate-900">95%</span>
                            </div>
                            <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/70 px-4 py-3">
                                <span className="text-sm font-medium text-slate-600">{t('skills.skillPythonMl')}</span>
                                <span className="text-lg font-semibold text-slate-900">90%</span>
                            </div>
                            <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white/70 px-4 py-3">
                                <span className="text-sm font-medium text-slate-600">{t('skills.skillFullStack')}</span>
                                <span className="text-lg font-semibold text-slate-900">85%</span>
                            </div>
                        </div>
                        <p className="mt-6 text-xs uppercase tracking-[0.32em] text-slate-500">{t('skills.toolsTitle')}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {toolKeys.map((toolKey) => (
                                <span key={toolKey} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                                    {t(toolKey)}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
