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
            <div className={`relative ${mobile ? 'w-full mt-4' : ''}`}>
                <Listbox.Button
                    role="button"
                    className={`relative cursor-default rounded-sm border border-slate-300 bg-white pl-4 pr-10 text-left text-sm font-semibold text-slate-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${mobile ? 'w-full py-3' : 'py-2'}`}
                >
                    <span className="block truncate">{selectedLanguage?.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                        <i className="fas fa-chevron-down text-xs" aria-hidden="true" />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                <Listbox.Options className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-sm border border-slate-200 bg-white py-2 text-base shadow-soft-xl focus:outline-none sm:text-sm">
                        {LANGUAGES.map((lang) => (
                            <Listbox.Option
                                key={lang.code}
                                className={({ active }) =>
                                    `relative cursor-default select-none px-4 py-2 ${active ? 'bg-brand-50 text-brand-800' : 'text-slate-700 hover:bg-slate-100'}`
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
        <header role="banner" className="sticky top-0 z-50 w-full border-b border-slate-300 bg-[#f8f6f1]/95 backdrop-blur">
            <div className="container flex h-16 items-center justify-between gap-4 px-4">
                    <Link to="/" className="flex items-center gap-3 text-slate-900 flex-shrink-0">
                        <span className="inline-flex h-10 w-10 items-center justify-center border border-slate-950 bg-slate-950 text-sm font-bold tracking-[0.08em] text-white">
                            SH
                        </span>
                        <span className="flex flex-col leading-tight">
                            <span className="cv-serif text-xl font-semibold tracking-tight">Sami Halawa</span>
                            <span className="hidden text-xs uppercase tracking-[0.24em] text-slate-500 2xl:block">{t('header.tagline')}</span>
                        </span>
                    </Link>

                    <nav aria-label={t('header.primaryNavAria')} className="hidden xl:flex items-center gap-1 flex-1 justify-center">
                        {NAV_LINKS.filter(link => link.href !== '/contact').map(link => (
                            <NavLink
                                key={link.key}
                                to={link.href}
                                className={({ isActive }) => `inline-flex items-center border-b px-3 py-2 text-sm font-semibold transition-colors ${isActive ? 'border-brand-700 text-brand-800' : 'border-transparent text-slate-600 hover:border-slate-400 hover:text-slate-950'}`}
                                end
                            >
                                {t(link.key)}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3 ml-auto">
                        {/* Language Selector - Desktop */}
                        <div className="hidden lg:block">
                            <LanguageSelector />
                        </div>

                        {/* Primary contact action */}
                        <Link
                            to="/contact"
                            className="hidden min-h-11 items-center justify-center gap-2 rounded-sm bg-slate-950 px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-800 hover:text-white xl:inline-flex"
                            title={t('header.cta')}
                            aria-label={t('header.cta')}
                        >
                            <span>{t('header.cta')}</span>
                            <i className="fas fa-arrow-right text-xs"></i>
                        </Link>

                        {/* Mobile Menu */}
                        <div className="xl:hidden">
                            <Popover className="relative">
                                <Popover.Button className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-slate-300 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500">
                                    <span className="sr-only">{t('ui.openMenu')}</span>
                                    <i className="fas fa-bars w-6 h-6"></i>
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
                                    leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
                                >
                                    <Popover.Panel className="absolute right-0 mt-4 w-72 origin-top-right rounded-sm border border-slate-200 bg-white p-6 shadow-soft-xl focus:outline-none">
                                      {({ close }) => (
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between">
                                                <div className="text-lg font-semibold text-slate-900">Sami Halawa</div>
                                                <Popover.Button className="-mr-1 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-slate-300 bg-white text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500">
                                                    <span className="sr-only">{t('ui.closeMenu')}</span>
                                                    <i className="fas fa-times w-6 h-6"></i>
                                                </Popover.Button>
                                            </div>
                                            <nav className="mt-6">
                                                <div className="space-y-2">
                                                    {NAV_LINKS.map(link => (
                                                        <Link key={link.key} to={link.href} onClick={() => close()} className="block border-b border-slate-200 px-1 py-3 text-base font-semibold text-slate-700 transition hover:border-brand-700 hover:text-brand-800">
                                                            {t(link.key)}
                                                        </Link>
                                                    ))}
                                                    <div className="pt-4 mt-4 border-t border-slate-200 space-y-2">
                                                        <Link
                                                            to="/contact"
                                                            onClick={() => close()}
                                                            className="block rounded-sm bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
                                                        >
                                                            {t('header.cta')}
                                                            <i className="fas fa-arrow-right ml-2 text-sm"></i>
                                                        </Link>
                                                        <LanguageSelector mobile={true} />
                                                    </div>
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
