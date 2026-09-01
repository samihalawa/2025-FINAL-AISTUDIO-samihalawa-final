import React from 'react';
import { useTranslation, type LanguageCode } from '../i18n/LanguageContext';
import { CONTACT_INFO, STRATEGY_CALL_URL } from '../constants';

const content: Record<LanguageCode, {
    badge: string; title: string; intro: string; availability: string;
    schedule: string; email: string; details: string; formTitle: string; formBody: string;
}> = {
    en: {
        badge: 'Role conversations', title: 'Let’s discuss where I can contribute.',
        intro: 'I am available for senior and lead software or AI engineering roles spanning production AI, platform engineering and technical leadership.',
        availability: 'Based in Madrid · available immediately · open to full-time roles across Spain and Europe',
        schedule: 'Schedule a role conversation', email: 'Email me directly', details: 'Direct contact',
        formTitle: 'Share the role', formBody: 'Send the role, team context and next step. I will reply directly.',
    },
    es: {
        badge: 'Conversaciones sobre roles', title: 'Hablemos de dónde puedo aportar.',
        intro: 'Estoy disponible para puestos sénior y lead de ingeniería de software o IA, con foco en IA en producción, plataformas y liderazgo técnico.',
        availability: 'En Madrid · disponibilidad inmediata · abierto a puestos a jornada completa en España y Europa',
        schedule: 'Programar una conversación sobre el rol', email: 'Escribirme directamente', details: 'Contacto directo',
        formTitle: 'Comparte el rol', formBody: 'Envía el rol, el contexto del equipo y el siguiente paso. Responderé directamente.',
    },
    fr: {
        badge: 'Échanges sur les postes', title: 'Échangeons sur ma contribution possible.',
        intro: 'Je suis disponible pour des postes senior et lead en ingénierie logicielle ou IA, couvrant l’IA en production, les plateformes et le leadership technique.',
        availability: 'Basé à Madrid · disponible immédiatement · ouvert aux postes à temps plein en Espagne et en Europe',
        schedule: 'Planifier un échange sur le poste', email: 'M’écrire directement', details: 'Contact direct',
        formTitle: 'Partager le poste', formBody: 'Envoyez le poste, le contexte de l’équipe et la prochaine étape. Je vous répondrai directement.',
    },
    zh: {
        badge: '岗位沟通', title: '欢迎沟通我可以创造的价值。',
        intro: '我可担任高级或主管级软件与 AI 工程岗位，专注生产级 AI、平台工程与技术领导。',
        availability: '常驻马德里 · 可立即到岗 · 寻找西班牙及欧洲全职职位',
        schedule: '预约岗位沟通', email: '直接发送邮件', details: '直接联系',
        formTitle: '分享岗位信息', formBody: '请发送岗位、团队背景和下一步安排，我会直接回复。',
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
                            <a href="mailto:sami@samihalawa.com?subject=Engineering%20role" className="btn-secondary">{c.email}<i className="fas fa-envelope text-xs" /></a>
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
