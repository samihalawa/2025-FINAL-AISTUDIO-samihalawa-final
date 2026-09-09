import React from 'react';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';
import { CONTACT_INFO, STRATEGY_CALL_URL } from '../constants';

const content: Record<LanguageCode, {
    badge: string; title: string; intro: string; availability: string;
    schedule: string; email: string; details: string; formTitle: string; formBody: string;
}> = {
    en: {
        badge: 'Engagements & advisory', title: 'Let’s scope the system you need built.',
        intro: 'I take direct B2B systems engineering, fractional AI leadership and technical due diligence engagements, alongside staff-level AI engineering roles.',
        availability: 'Based in Madrid · available now · Europe and remote · ES / EN / 中文',
        schedule: 'Book a consultation', email: 'Email me directly', details: 'Direct contact',
        formTitle: 'Share the engagement', formBody: 'Send the system, team context, timeline and budget range. I reply directly.',
    },
    es: {
        badge: 'Colaboraciones y asesoría', title: 'Definamos el sistema que necesitas construir.',
        intro: 'Acepto colaboraciones de ingeniería de sistemas B2B directa, liderazgo de IA fraccional y due diligence técnica, además de puestos de ingeniería de IA de nivel staff.',
        availability: 'En Madrid · disponible ahora · Europa y remoto · ES / EN / 中文',
        schedule: 'Reservar una consulta', email: 'Escribirme directamente', details: 'Contacto directo',
        formTitle: 'Comparte la colaboración', formBody: 'Envía el sistema, el contexto del equipo, los plazos y el rango de presupuesto. Respondo directamente.',
    },
    fr: {
        badge: 'Missions et conseil', title: 'Cadrons le système dont vous avez besoin.',
        intro: 'J’accepte des missions d’ingénierie de systèmes B2B directes, de leadership IA fractionné et de due diligence technique, ainsi que des postes d’ingénierie IA de niveau staff.',
        availability: 'Basé à Madrid · disponible maintenant · Europe et télétravail · ES / EN / 中文',
        schedule: 'Réserver une consultation', email: 'M’écrire directement', details: 'Contact direct',
        formTitle: 'Partager la mission', formBody: 'Envoyez le système, le contexte de l’équipe, le calendrier et la fourchette budgétaire. Je réponds directement.',
    },
    zh: {
        badge: '合作与顾问', title: '一起确定你需要构建的系统。',
        intro: '我承接直接 B2B 系统工程、兼职 AI 领导与技术尽调合作，也接受 Staff 级 AI 工程岗位。',
        availability: '常驻马德里 · 现可开始 · 欧洲与远程 · ES / EN / 中文',
        schedule: '预约咨询', email: '直接发送邮件', details: '直接联系',
        formTitle: '分享合作信息', formBody: '请发送系统需求、团队背景、时间安排与预算范围，我会直接回复。',
    },
};

const Contact: React.FC = () => {
    const { language, t } = useTranslation();
    const c = content[language];

    return (
        <section id="contact" className="scroll-mt-20 border-b border-slate-300 bg-[#f8f6f1]" aria-labelledby="contact-heading">
            <div className="container py-12 sm:py-16">
                <header className="grid gap-8 border-b border-slate-400 pb-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,.8fr)] lg:items-end lg:gap-16">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-800">{c.badge}</p>
                        <h1 id="contact-heading" className="cv-serif mt-5 max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-normal leading-[0.92] tracking-[-0.045em] text-slate-950">{c.title}</h1>
                    </div>
                    <div className="border-t border-slate-400 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                        <p className="text-lg leading-relaxed text-slate-700">{c.intro}</p>
                        <p className="mt-4 text-sm font-semibold leading-relaxed text-slate-600">{c.availability}</p>
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <a href={STRATEGY_CALL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">{c.schedule}<i className="fas fa-arrow-up-right-from-square text-xs" /></a>
                            <a href="mailto:sami@samihalawa.com?subject=Engagement%20inquiry" className="btn-secondary">{c.email}<i className="fas fa-envelope text-xs" /></a>
                        </div>
                    </div>
                </header>

                <div className="grid gap-12 py-12 lg:grid-cols-[minmax(17rem,.75fr)_minmax(0,1.25fr)] lg:gap-16 lg:py-16">
                    <aside className="border-t border-slate-400">
                        <h2 className="border-b border-slate-300 py-5 cv-serif text-2xl font-semibold text-slate-950">{c.details}</h2>
                        <dl>
                            {CONTACT_INFO.map(item => {
                                const value = item.valueKey ? t(item.valueKey) : item.value;
                                const external = item.href?.startsWith('http');
                                return (
                                    <div key={item.labelKey} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 border-b border-slate-300 py-4">
                                        <i className={`${item.icon} mt-1 text-sm text-brand-800`} />
                                        <div>
                                            <dt className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate-500">{t(item.labelKey)}</dt>
                                            <dd className="mt-1 text-sm leading-relaxed text-slate-700">
                                                {item.href ? <a href={item.href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="border-b border-transparent hover:border-slate-700">{value}</a> : value}
                                            </dd>
                                        </div>
                                    </div>
                                );
                            })}
                        </dl>
                    </aside>

                    <section id="contact-form" className="scroll-mt-24 border-t border-slate-400 pt-6" aria-labelledby="contact-form-heading">
                        <div className="grid gap-3 border-b border-slate-300 pb-6 sm:grid-cols-[minmax(0,1fr)_minmax(12rem,.65fr)] sm:items-end">
                            <h2 id="contact-form-heading" className="cv-serif text-3xl font-semibold text-slate-950">{c.formTitle}</h2>
                            <p className="text-sm leading-relaxed text-slate-600">{c.formBody}</p>
                        </div>
                        <div className="min-h-[32rem] bg-white px-4 py-6 sm:px-6">
                            {React.createElement('close-form', { id: 'form_033y7Q5vVve5g8t4diql2M' })}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Contact;
