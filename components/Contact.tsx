import React, { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('sending');
        const form = event.currentTarget;
        const data = new FormData(form);
        
        try {
            const response = await fetch('https://api.staticforms.xyz/submit', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const InputField: React.FC<{id: string, name: string, label: string, type?: string, required?: boolean, rows?: number}> = ({ id, name, label, type = 'text', required = false, rows}) => (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-slate-700">{label}</label>
            {rows ? (
                <textarea id={id} name={name} required={required} rows={rows} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500" />
            ) : (
                <input type={type} id={id} name={name} required={required} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500" />
            )}
        </div>
    );

    return (
        <section id="contact" className="py-20 bg-white" aria-label="Contact">
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
                    <div className="lg:w-1/2 bg-slate-50 rounded-lg border border-slate-200 p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input type="hidden" name="accessKey" value="b67e8125-1a1a-4712-9c3a-f2dedb36a100" />
                            <input type="hidden" name="subject" value="New Contact from Portfolio Website" />
                            <input type="hidden" name="replyTo" value="@" />
                            <input type="text" name="honeypot" style={{ display: 'none' }} />
                            
                            <InputField id="name" name="name" label={t('contact.form.nameLabel')} required />
                            <InputField id="email" name="email" label={t('contact.form.emailLabel')} type="email" required />
                            <InputField id="company" name="$company" label={t('contact.form.companyLabel')} />
                            <InputField id="message" name="message" label={t('contact.form.messageLabel')} rows={4} required />

                            <div>
                                <button type="submit" disabled={status === 'sending'} className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors disabled:bg-slate-500 disabled:cursor-not-allowed">
                                    {status === 'sending' ? t('contact.form.sendingButton') : t('contact.form.submitButton')}
                                </button>
                            </div>
                            {status === 'success' && <p className="text-center text-green-600 text-sm">{t('contact.form.successMessage')}</p>}
                            {status === 'error' && <p className="text-center text-red-600 text-sm">{t('contact.form.errorMessage')}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;