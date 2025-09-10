import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { TRAINING_PROGRAMS, PARTNERS } from '../constants';

const Corporate: React.FC = () => {
    const { t } = useTranslation();

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
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-900">Servicios destacados</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                          { href: '/services/medical-ai', title: 'IA Médica', desc: 'ChatGPT clínico, informes automáticos y diagnóstico asistido.' },
                          { href: '/services/business-automation', title: 'Automatización con IA', desc: 'Flujos 24/7 con ChatGPT, Zapier y Make, sin programar.' },
                          { href: '/services/university-ml', title: 'Universidad: ML y TFG/TFM', desc: 'Python, ML y apoyo integral a proyectos.' },
                          { href: '/services/family-ai', title: 'Familias y Educación', desc: 'Programas para niños, adolescentes y padres.' },
                          { href: '/services/advanced-ai', title: 'Proyectos Avanzados', desc: 'LangChain, AutoGPT, agentes MCP y despliegue.' },
                          { href: '/services/no-code-ai', title: 'Creador No-Code', desc: 'Contenido y marketing con IA sin código.' },
                        ].map(card => (
                          <a key={card.href} href={card.href} className="block bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                            <h4 className="text-lg font-semibold text-slate-900 mb-2">{card.title}</h4>
                            <p className="text-slate-700">{card.desc}</p>
                          </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Corporate;
