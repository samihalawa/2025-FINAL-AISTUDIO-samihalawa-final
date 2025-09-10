import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Popover, Transition, Listbox } from '@headlessui/react';
import { useTranslation } from '../i18n/LanguageContext';
import { NAV_LINKS, LANGUAGES } from '../constants';

const Header: React.FC = () => {
    const { t, language, setLanguage } = useTranslation();
    const selectedLanguage = LANGUAGES.find(l => l.code === language);

    const LanguageSelector: React.FC<{mobile?: boolean}> = ({ mobile = false }) => (
        <Listbox value={language} onChange={setLanguage}>
            <div className={`relative ${mobile ? 'w-full mt-2' : 'ml-4'}`}>
                <Listbox.Button role="button" className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left border border-slate-200 focus:outline-none focus-visible:border-slate-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-300 sm:text-sm">
                    <span className="block truncate">{selectedLanguage?.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <i className="fas fa-chevron-down text-gray-400" aria-hidden="true" />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-20">
                        {LANGUAGES.map((lang) => (
                            <Listbox.Option
                                key={lang.code}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-slate-100 text-slate-900' : 'text-gray-900'}`
                                }
                                value={lang.code}
                            >
                                {({ selected }) => (
                                    <>
                                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                            {lang.name}
                                        </span>
                                        {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-600">
                                                <i className="fas fa-check" aria-hidden="true" />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );

    return (
        <header role="banner" className="sticky top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-slate-900">Sami Halawa</Link>
                    
                    <nav aria-label="Primary navigation" className="hidden md:flex space-x-1 items-center">
                        {NAV_LINKS.map(link => (
                            link.href === '/services' ? (
                                <Popover key={link.key} className="relative">
                                    <Popover.Button className="px-4 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 focus:outline-none">
                                        {t(link.key)} <i className="fas fa-chevron-down ml-1 text-xs" />
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-150"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute left-0 mt-2 w-[820px] bg-white border border-slate-200 rounded-lg shadow-lg p-6 z-50">
                                            <div className="grid grid-cols-3 gap-6">
                                                <div>
                                                    <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Core AI</div>
                                                    <div className="flex flex-col space-y-2">
                                                        <Link to="/services/prompt-engineering" className="text-sm text-slate-700 hover:text-slate-900">Prompt Engineering</Link>
                                                        <Link to="/services/rag-langchain" className="text-sm text-slate-700 hover:text-slate-900">RAG & LangChain</Link>
                                                        <Link to="/services/agents-automation" className="text-sm text-slate-700 hover:text-slate-900">Agentes y Automatización</Link>
                                                        <Link to="/services/ai-readiness-audit" className="text-sm text-slate-700 hover:text-slate-900">AI Readiness Audit</Link>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Business</div>
                                                    <div className="flex flex-col space-y-2">
                                                        <Link to="/services/ai-for-marketing" className="text-sm text-slate-700 hover:text-slate-900">IA para Marketing</Link>
                                                        <Link to="/services/business-automation" className="text-sm text-slate-700 hover:text-slate-900">Automatización con IA</Link>
                                                        <Link to="/services/accelerator-readiness" className="text-sm text-slate-700 hover:text-slate-900">Aceleradoras & Pitch</Link>
                                                        <Link to="/services/ai-funding-grants" className="text-sm text-slate-700 hover:text-slate-900">Financiación & Subvenciones</Link>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Specialized</div>
                                                    <div className="flex flex-col space-y-2">
                                                        <Link to="/services/university-ml" className="text-sm text-slate-700 hover:text-slate-900">Universidad: Python/ML</Link>
                                                        <Link to="/services/no-code-ai" className="text-sm text-slate-700 hover:text-slate-900">Creador No-Code</Link>
                                                        <Link to="/services/medical-ai" className="text-sm text-slate-700 hover:text-slate-900">IA Médica</Link>
                                                        <Link to="/services/proptech-analytics" className="text-sm text-slate-700 hover:text-slate-900">PropTech Analytics</Link>
                                                        <Link to="/services/airbnb-analytics" className="text-sm text-slate-700 hover:text-slate-900">Airbnb Intelligence</Link>
                                                        <Link to="/services/ai-language-learning" className="text-sm text-slate-700 hover:text-slate-900">Idiomas con IA</Link>
                                                        <Link to="/services/ai-competitive-research" className="text-sm text-slate-700 hover:text-slate-900">Investigación Competitiva</Link>
                                                        <Link to="/services/ai-ip-patents" className="text-sm text-slate-700 hover:text-slate-900">Patentes e IP</Link>
                                                        <Link to="/services/troubleshooting" className="text-sm text-slate-700 hover:text-slate-900">Troubleshooting</Link>
                                                        <Link to="/services/advanced-ai" className="text-sm text-slate-700 hover:text-slate-900">Proyectos Avanzados</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <Link to="/ai-training" className="text-sm font-medium text-slate-700 hover:text-slate-900">Programas de Formación</Link>
                                                <Link to="/services" className="text-sm font-medium text-slate-700 hover:text-slate-900">Ver todos</Link>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </Popover>
                            ) : (
                                <NavLink
                                    key={link.key}
                                    to={link.href}
                                    className={({ isActive }) => `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
                                    end
                                >
                                    {t(link.key)}
                                </NavLink>
                            )
                        ))}
                        <LanguageSelector />
                    </nav>
                    
                    <div className="md:hidden">
                        <Popover className="relative">
                            <Popover.Button className="p-2 rounded-md text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500">
                                <span className="sr-only">Open menu</span>
                                <i className="fas fa-bars w-6 h-6"></i>
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel className="absolute right-0 mt-2 w-64 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none">
                                  {({ close }) => (
                                    <div className="px-5 pt-5 pb-6">
                                        <div className="flex items-center justify-between">
                                            <div className="text-xl font-bold text-slate-900">Sami Halawa</div>
                                            <Popover.Button className="-mr-2 p-2 rounded-md text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500">
                                                <span className="sr-only">Close menu</span>
                                                <i className="fas fa-times w-6 h-6"></i>
                                            </Popover.Button>
                                        </div>
                                        <nav className="mt-6">
                                            <div className="grid gap-y-4">
                                                {NAV_LINKS.map(link => (
                                                    link.href === '/services' ? (
                                                        <div key={link.key} className="space-y-2">
                                                            <Link to="/services" onClick={() => close()} className="text-base font-semibold text-slate-800">{t(link.key)}</Link>
                                                            <div className="ml-2 grid grid-cols-1 gap-2">
                                                                <Link to="/services/prompt-engineering" onClick={() => close()} className="text-sm text-slate-700">Prompt Engineering</Link>
                                                                <Link to="/services/rag-langchain" onClick={() => close()} className="text-sm text-slate-700">RAG & LangChain</Link>
                                                                <Link to="/services/agents-automation" onClick={() => close()} className="text-sm text-slate-700">Agentes y Automatización</Link>
                                                                <Link to="/services/ai-for-marketing" onClick={() => close()} className="text-sm text-slate-700">IA para Marketing</Link>
                                                                <Link to="/services/business-automation" onClick={() => close()} className="text-sm text-slate-700">Automatización con IA</Link>
                                                                <Link to="/services/advanced-ai" onClick={() => close()} className="text-sm text-slate-700">Proyectos Avanzados</Link>
                                                                <Link to="/services/medical-ai" onClick={() => close()} className="text-sm text-slate-700">IA Médica</Link>
                                                                <Link to="/services/university-ml" onClick={() => close()} className="text-sm text-slate-700">Universidad: Python/ML</Link>
                                                                <Link to="/services/no-code-ai" onClick={() => close()} className="text-sm text-slate-700">Creador No-Code</Link>
                                                                <Link to="/services/family-ai" onClick={() => close()} className="text-sm text-slate-700">IA para Familias</Link>
                                                                <Link to="/services/ai-readiness-audit" onClick={() => close()} className="text-sm text-slate-700">AI Readiness Audit</Link>
                                                                <Link to="/services/ai-competitive-research" onClick={() => close()} className="text-sm text-slate-700">Investigación Competitiva</Link>
                                                                <Link to="/services/ai-funding-grants" onClick={() => close()} className="text-sm text-slate-700">Financiación & Subvenciones</Link>
                                                                <Link to="/services/ai-ip-patents" onClick={() => close()} className="text-sm text-slate-700">Patentes e IP</Link>
                                                                <Link to="/services/accelerator-readiness" onClick={() => close()} className="text-sm text-slate-700">Aceleradoras & Pitch</Link>
                                                                <Link to="/services/proptech-analytics" onClick={() => close()} className="text-sm text-slate-700">PropTech Analytics</Link>
                                                                <Link to="/services/airbnb-analytics" onClick={() => close()} className="text-sm text-slate-700">Airbnb Intelligence</Link>
                                                                <Link to="/services/ai-language-learning" onClick={() => close()} className="text-sm text-slate-700">Idiomas con IA</Link>
                                                                <Link to="/services/troubleshooting" onClick={() => close()} className="text-sm text-slate-700">Troubleshooting</Link>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <Link key={link.key} to={link.href} onClick={() => close()} className="text-base font-medium text-slate-700 hover:text-slate-900">{t(link.key)}</Link>
                                                    )
                                                ))}
                                                <LanguageSelector mobile={true} />
                                            </div>
                                        </nav>
                                    </div>
                                  )}
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
