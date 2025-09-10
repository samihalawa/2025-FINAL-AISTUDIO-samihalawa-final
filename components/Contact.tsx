import React, { useEffect } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { CONTACT_INFO } from '../constants';

const TallyEmbed: React.FC<{ src: string; title: string; height: number }> = ({ src, title, height }) => {
    useEffect(() => {
        const w = 'https://tally.so/widgets/embed.js';
        const d = document;
        const v = () => {
            // @ts-ignore
            if (typeof (window as any).Tally !== 'undefined') (window as any).Tally.loadEmbeds();
            else d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e) => { (e as HTMLIFrameElement).src = (e as HTMLIFrameElement).dataset.tallySrc || ''; });
        };
        if (d.querySelector(`script[src="${w}"]`) == null) {
            const s = d.createElement('script');
            s.src = w;
            s.onload = v;
            s.onerror = v;
            d.body.appendChild(s);
        } else {
            v();
        }
    }, []);
    return (
        <iframe
            data-tally-src={src}
            title={title}
            loading="lazy"
            width="100%"
            height={height}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
        />
    );
};

const Contact: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="contact" className="py-20 bg-white scroll-mt-20" aria-label="Contact">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">{t('contact.title')}</h2>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    <div className="lg:w-1/2">
                        <h3 className="text-2xl font-bold mb-4 text-slate-800">{t('contact.heading')}</h3>
                        <p className="text-slate-700 mb-8 max-w-lg">{t('contact.description')}</p>
                        <div className="space-y-6">
                           {CONTACT_INFO.map(item => (
                                <a key={item.labelKey} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full mr-4">
                                        <i className={`${item.icon} text-xl`}></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800">{t(item.labelKey)}</h4>
                                        <p className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300">{item.value}</p>
                                    </div>
                                </a>
                           ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 space-y-8">
                        <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
                            <h3 className="text-xl font-semibold mb-4 text-slate-900">Contact Form</h3>
                            <TallyEmbed
                                src="https://tally.so/embed/wz9VVq?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                                title="Contact form"
                                height={320}
                            />
                        </div>
                        <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
                            <h3 className="text-xl font-semibold mb-4 text-slate-900">Newsletter</h3>
                            <TallyEmbed
                                src="https://tally.so/embed/mY1V66?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                                title="NEWSLETTER"
                                height={200}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
