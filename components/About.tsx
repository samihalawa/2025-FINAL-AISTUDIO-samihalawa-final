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

    return (
        <section id="about" className="py-20 bg-white" aria-label="About Sami Halawa">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('about.title')}</h2>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="lg:w-1/2">
                        <p className="text-lg mb-6 text-gray-700">{t('about.paragraph1')}</p>
                        <p className="text-lg mb-8 text-gray-700">{t('about.paragraph2')}</p>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">{t('about.languagesTitle')}</h3>
                            <div className="flex flex-wrap gap-2">
                                {languages.map(langKey => (
                                    <span key={langKey} className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-1 rounded-full">{t(langKey)}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('about.highlightsTitle')}</h3>
                            <ul className="space-y-6">
                                {highlights.map(item => (
                                    <li key={item.key} className="flex items-start">
                                        <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full mr-4 mt-1">
                                            <i className={`${item.icon} text-indigo-600 text-xl`}></i>
                                        </div>
                                        <span className="text-gray-700 leading-relaxed">{t(item.key)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;