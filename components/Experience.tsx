import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="experience" className="py-20 bg-white" aria-label="Professional Experience">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t('experience.title')}</h2>
                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-indigo-100" aria-hidden="true"></div>
                    {EXPERIENCE.map((job, index) => (
                        <div key={index} className="relative mb-8">
                            <div className="flex items-center" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <div className="inline-block bg-white p-6 rounded-lg shadow-lg border border-gray-100 w-full">
                                        <p className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm inline-block mb-2">{t(job.durationKey)}</p>
                                        <h3 className="text-xl font-bold text-gray-900">{t(job.titleKey)}</h3>
                                        {job.companyKey && <h4 className="text-lg text-indigo-600 mb-3 font-semibold">{t(job.companyKey)}</h4>}
                                        <p className="text-gray-700">{t(job.descriptionKey)}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-indigo-600 rounded-full border-4 border-white"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;