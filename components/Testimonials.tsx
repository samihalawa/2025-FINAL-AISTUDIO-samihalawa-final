import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="testimonials" className="py-20 bg-white" aria-label="Testimonials">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">{t('testimonials.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="bg-slate-50 p-8 rounded-lg border border-slate-200 flex flex-col">
                            <div className="flex-grow">
                                <i className="fas fa-quote-left text-slate-300 text-3xl mb-4"></i>
                                <p className="text-slate-700 italic mb-6">"{t(testimonial.quoteKey)}"</p>
                            </div>
                            <div className="flex items-center mt-auto">
                                <img src={testimonial.image} alt={t(testimonial.nameKey)} className="w-14 h-14 rounded-full mr-4 border-2 border-slate-200" />
                                <div>
                                    <p className="font-semibold text-slate-900">{t(testimonial.nameKey)}</p>
                                    <p className="text-sm text-slate-500">{t(testimonial.titleKey)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;