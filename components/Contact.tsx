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

    return (
        <section id="contact" className="py-20 bg-gray-50" aria-label="Contact">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('contact.title')}</h2>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    <div className="lg:w-1/2">
                        <h3 className="text-2xl font-bold mb-6 text-indigo-600">{t('contact.heading')}</h3>
                        <p className="text-gray-700 mb-8 max-w-lg">{t('contact.description')}</p>
                        <div className="space-y-6">
                           {CONTACT_INFO.map(item => (
                                <a key={item.labelKey} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-start group">
                                    <div className="flex-shrink-0 bg-indigo-100 p-4 rounded-full mr-4 shadow-sm group-hover:bg-indigo-200 transition-colors duration-300">
                                        <i className={`${item.icon} text-xl`}></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{t(item.labelKey)}</h4>
                                        <p className="text-indigo-600 group-hover:underline">{item.value}</p>
                                    </div>
                                </a>
                           ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 bg-white rounded-lg shadow-xl p-8 border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input type="hidden" name="accessKey" value="b67e8125-1a1a-4712-9c3a-f2dedb36a100" />
                            <input type="hidden" name="subject" value="New Contact from Portfolio Website" />
                            <input type="hidden" name="replyTo" value="@" />
                            <input type="text" name="honeypot" style={{ display: 'none' }} />
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('contact.form.nameLabel')}</label>
                                <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('contact.form.emailLabel')}</label>
                                <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">{t('contact.form.companyLabel')}</label>
                                <input type="text" id="company" name="$company" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('contact.form.messageLabel')}</label>
                                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                            </div>
                            <div>
                                <button type="submit" disabled={status === 'sending'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:bg-indigo-400">
                                    {status === 'sending' ? t('contact.form.sendingButton') : t('contact.form.submitButton')}
                                </button>
                            </div>
                            {status === 'success' && <p className="text-center text-green-600">{t('contact.form.successMessage')}</p>}
                            {status === 'error' && <p className="text-center text-red-600">{t('contact.form.errorMessage')}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;