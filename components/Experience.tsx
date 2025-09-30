import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="experience" className="py-20 bg-slate-50 scroll-mt-20" aria-label={t('experience.title')}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">{t('experience.title')}</h2>
                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-0 top-0 w-0.5 h-full bg-slate-200" aria-hidden="true"></div>
                    <div className="space-y-12">
                        {EXPERIENCE.map((job, index) => (
                            <div key={index} className="relative pl-8">
                                <div className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 bg-slate-900 rounded-full border-4 border-slate-50"></div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                                    <p className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm inline-block mb-2 font-medium">{t(job.durationKey)}</p>
                                    <h3 className="text-xl font-bold text-slate-900">{t(job.titleKey)}</h3>
                                    {job.companyKey && <h4 className="text-lg text-slate-600 mb-3 font-semibold">{t(job.companyKey)}</h4>}
                                    <p className="text-slate-700">{t(job.descriptionKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;