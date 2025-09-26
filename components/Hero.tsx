import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useTranslation();

    const stats = [
        { value: '140+', labelKey: 'hero.stats.clients' as const },
        { value: '18', labelKey: 'hero.stats.countries' as const },
        { value: '94%', labelKey: 'hero.stats.csat' as const },
    ];

    const highlights = [
        { icon: 'fas fa-diagram-project', labelKey: 'hero.highlights.automation' as const },
        { icon: 'fas fa-graduation-cap', labelKey: 'hero.highlights.training' as const },
        { icon: 'fas fa-shield-halved', labelKey: 'hero.highlights.safety' as const },
    ];

    const timeline = [
        { labelKey: 'hero.timeline.diagnose' as const, captionKey: 'hero.timeline.diagnose.caption' as const },
        { labelKey: 'hero.timeline.design' as const, captionKey: 'hero.timeline.design.caption' as const },
        { labelKey: 'hero.timeline.deploy' as const, captionKey: 'hero.timeline.deploy.caption' as const },
    ];

    const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            // Safely update the URL hash without creating a new history entry
            if (history.replaceState) {
                history.replaceState(null, '', href);
            }
        }
    };

    return (
        <section className="relative overflow-hidden py-24 sm:py-28">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl"></div>
                <div className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl"></div>
                <div className="absolute inset-x-0 bottom-0 h-72 bg-radial-fade"></div>
            </div>

            <div className="container relative flex flex-col items-center gap-16 lg:flex-row lg:items-start">
                <div className="max-w-xl text-center lg:text-left">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm">
                        <i className="fas fa-sparkles"></i>
                        {t('hero.badge')}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
                        {t('hero.title')}
                    </h1>
                    <p className="mt-4 text-xl text-slate-600">{t('hero.subtitle')}</p>
                    <p className="mt-6 text-lg text-slate-600">{t('hero.description')}</p>

                    <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3">
                        <Link to="/contact" className="btn-primary">
                            {t('hero.contactButton')}
                            <i className="fas fa-arrow-right text-sm"></i>
                        </Link>
                        <Link to="/projects" className="btn-secondary">
                            {t('hero.projectsButton')}
                        </Link>
                        <a
                            href="#case-studies"
                            onClick={(e) => handleScrollLink(e, '#case-studies')}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-brand-600"
                        >
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                                <i className="fas fa-play text-xs"></i>
                            </span>
                            {t('hero.watchCaseStudies')}
                        </a>
                    </div>

                    <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.labelKey} className="glass-panel px-5 py-4 text-left">
                                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t(stat.labelKey)}</dt>
                                <dd className="mt-2 text-2xl font-semibold text-slate-900">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="relative flex w-full max-w-lg flex-col gap-5">
                    <div className="glass-panel relative overflow-hidden p-6 text-left shadow-soft-xl">
                        <div className="flex items-center gap-4">
                            <img
                                src="https://cdn-avatars.huggingface.co/v1/production/uploads/65d00458fff501149572827f/E6nxYRxqRmBGRf9wSQq4Y.jpeg"
                                alt="Sami Halawa"
                                width="80"
                                height="80"
                                className="h-16 w-16 rounded-2xl border border-white/70 shadow-brand"
                                loading="lazy"
                            />
                            <div>
                                <p className="text-sm font-semibold text-slate-500">{t('hero.profile.title')}</p>
                                <p className="text-xl font-semibold text-slate-900">{t('hero.profile.name')}</p>
                                <p className="text-sm text-slate-500">{t('hero.profile.caption')}</p>
                            </div>
                        </div>
                        <ul className="mt-6 space-y-3 text-sm text-slate-600">
                            {highlights.map((item) => (
                                <li key={item.labelKey} className="flex items-start gap-3">
                                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                                        <i className={`${item.icon} text-sm`}></i>
                                    </span>
                                    <span>{t(item.labelKey)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                            <i className="fas fa-shield-check"></i>
                            {t('hero.profile.compliance')}
                        </div>
                    </div>

                    <div className="glass-dark relative overflow-hidden p-6 shadow-soft-xl">
                        <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-brand-500/40 blur-2xl"></div>
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">{t('hero.timeline.title')}</p>
                        <ol className="mt-4 space-y-4">
                            {timeline.map((item, idx) => (
                                <li key={item.labelKey} className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15 text-white font-semibold">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-white/80">{t(item.labelKey)}</p>
                                        <p className="text-xs text-white/60">{t(item.captionKey)}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
