import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    const { t } = useTranslation();
    if (!TESTIMONIALS.length) return null;
    return (
        <section id="testimonials" className="relative py-24" aria-label={t('testimonials.title')}>
            <div className="container">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="badge-pill inline-flex items-center gap-2 text-brand-700">
                        <i className="fas fa-comment-dots"></i>
                        {t('testimonials.badge')}
                    </span>
                    <h2 className="section-heading mt-4">{t('testimonials.title')}</h2>
                    <p className="section-subtitle mx-auto mt-3">{t('testimonials.subtitle')}</p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <article key={index} className="glass-panel flex h-full flex-col justify-between p-8 shadow-soft-xl">
                            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                                <i className="fas fa-quote-left text-brand-500"></i>
                                {t('testimonials.reviewLabel')}
                            </div>
                            <blockquote className="mt-4 flex-grow text-slate-700">
                                <p className="text-lg leading-relaxed">{`"${t(testimonial.quoteKey)}"`}</p>
                            </blockquote>
                            <footer className="mt-8 flex items-center gap-4">
                                <img src={testimonial.image} alt={t(testimonial.nameKey)} className="h-14 w-14 rounded-2xl border border-white/70 shadow-brand" loading="lazy" />
                                <div>
                                    <p className="text-base font-semibold text-slate-900">{t(testimonial.nameKey)}</p>
                                    <p className="text-sm text-slate-500">{t(testimonial.titleKey)}</p>
                                </div>
                            </footer>
                        </article>
                    ))}
                </div>

                <div className="mt-12 flex flex-col items-center gap-4 text-center">
                    <p className="text-sm text-slate-500">{t('testimonials.meta')}</p>
                    <Link to="/case-studies" className="btn-secondary">
                        {t('testimonials.cta')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
