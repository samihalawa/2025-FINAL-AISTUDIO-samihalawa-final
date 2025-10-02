import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Popover, Transition, Listbox } from '@headlessui/react';
import { useTranslation } from '../i18n/LanguageContext';
import { NAV_LINKS, LANGUAGES, SERVICE_MENU_SECTIONS } from '../constants';

const Header: React.FC = () => {
    const { t, language, setLanguage } = useTranslation();
    const selectedLanguage = LANGUAGES.find(l => l.code === language);

    const LanguageSelector: React.FC<{mobile?: boolean}> = ({ mobile = false }) => (
        <Listbox value={language} onChange={setLanguage}>
            <div className={`relative ${mobile ? 'w-full mt-4' : 'ml-4'}`}>
                <Listbox.Button
                    role="button"
                    className={`relative w-full cursor-default rounded-full border border-slate-200 bg-white/80 pl-4 pr-12 text-left text-sm font-medium text-slate-600 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${mobile ? 'py-3' : 'py-2'}`}
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
                    <Listbox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-2xl border border-slate-100 bg-white/95 py-2 text-base shadow-soft-xl ring-1 ring-black/5 backdrop-blur-xl focus:outline-none sm:text-sm z-20">
                        {LANGUAGES.map((lang) => (
                            <Listbox.Option
                                key={lang.code}
                                className={({ active }) =>
                                    `relative cursor-default select-none rounded-xl px-4 py-2 ${active ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-100'}`
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
        <header role="banner" className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-xl shadow-sm">
            <div className="container flex h-16 items-center justify-between gap-6">
                    <Link to="/" className="flex items-center gap-3 text-slate-900">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 text-lg font-semibold text-white shadow-brand">
                            SH
                        </span>
                        <span className="flex flex-col leading-tight">
                            <span className="text-lg font-semibold tracking-tight">Sami Halawa</span>
                            <span className="text-xs uppercase tracking-[0.24em] text-slate-500">{t('header.tagline')}</span>
                        </span>
                    </Link>

                    <nav aria-label={t('header.primaryNavAria')} className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map(link => (
                            link.href === '/services' ? (
                                <Popover key={link.key} className="relative">
                                    <Popover.Button className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                                        {t(link.key)}
                                        <i className="fas fa-chevron-down text-xs transition-transform group-data-[headlessui-state=open]:rotate-180" />
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-150"
                                        enterFrom="opacity-0 translate-y-2"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-2"
                                    >
                                        <Popover.Panel className="absolute left-1/2 z-50 mt-6 w-[720px] max-w-[95vw] -translate-x-1/2 rounded-3xl border border-white/70 bg-white/95 p-6 shadow-soft-xl ring-1 ring-black/5 backdrop-blur-xl">
                                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                                                {SERVICE_MENU_SECTIONS.map(section => (
                                                    <div key={section.titleKey}>
                                                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">{t(section.titleKey)}</p>
                                                        <div className="space-y-1">
                                                            {section.items.map(item => (
                                                                <Link
                                                                    key={item.href}
                                                                    to={item.href}
                                                                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
                                                                >
                                                                    {t(item.labelKey)}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </Popover>
                            ) : (
                                <NavLink
                                    key={link.key}
                                    to={link.href}
                                    className={({ isActive }) => `inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${isActive ? 'bg-brand-50 text-brand-700 shadow-inner' : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'}`}
                                    end
                                >
                                    {t(link.key)}
                                </NavLink>
                            )
                        ))}
                        {/* Quick search (desktop) */}
                        <form action="/search" className="relative ml-4 hidden lg:block">
                            <label htmlFor="desktop-search" className="sr-only">{t('ui.searchLabel')}</label>
                            <input
                                type="search"
                                id="desktop-search"
                                name="q"
                                placeholder={t('header.searchPlaceholder')}
                                aria-label={t('header.searchPlaceholder')}
                                className="w-56 rounded-full border border-slate-200 bg-white/80 px-4 py-2 pr-11 text-sm text-slate-600 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-brand-500"
                            />
                            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" aria-label={t('ui.submitSearch')}>
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                        <LanguageSelector />
                        <Link to="/contact" className="ml-4 hidden lg:inline-flex btn-primary">
                            {t('header.cta')}
                            <i className="fas fa-wand-magic-sparkles text-sm"></i>
                        </Link>
                    </nav>

                    <div className="md:hidden">
                        <Popover className="relative">
                            <Popover.Button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 p-2 text-slate-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500">
                                <span className="sr-only">{t('ui.openMenu')}</span>
                                <i className="fas fa-bars w-6 h-6"></i>
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel className="absolute right-0 mt-4 w-72 origin-top-right rounded-3xl border border-white/70 bg-white/95 p-6 shadow-soft-xl ring-1 ring-black/5 backdrop-blur-xl focus:outline-none">
                                  {({ close }) => (
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="text-lg font-semibold text-slate-900">Sami Halawa</div>
                                            <Popover.Button className="-mr-1 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 p-2 text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500">
                                                <span className="sr-only">{t('ui.closeMenu')}</span>
                                                <i className="fas fa-times w-6 h-6"></i>
                                            </Popover.Button>
                                        </div>
                                        {/* Quick search (mobile) */}
                                        <form action="/search" className="mt-4">
                                          <label htmlFor="m-search" className="sr-only">{t('ui.searchLabel')}</label>
                                          <div className="relative">
                                            <input
                                              id="m-search"
                                              type="search"
                                              name="q"
                                              placeholder={t('header.searchPlaceholder')}
                                              className="w-full rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-sm text-slate-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                                            />
                                            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" aria-label={t('ui.submitSearch')}>
                                              <i className="fas fa-search"></i>
                                            </button>
                                          </div>
                                        </form>
                                        <nav className="mt-6">
                                            <div className="space-y-2">
                                                {NAV_LINKS.map(link => (
                                                    <Link key={link.key} to={link.href} onClick={() => close()} className="block rounded-xl bg-white/70 px-4 py-3 text-base font-medium text-slate-700 shadow-sm transition hover:bg-brand-50 hover:text-brand-700">
                                                        {t(link.key)}
                                                    </Link>
                                                ))}
                                                <div className="pt-4 mt-4 border-t border-slate-200 space-y-2">
                                                    <Link to="/ai-training" onClick={() => close()} className="block rounded-xl bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
                                                        {t('nav.training')}
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
        </header>
    );
};

export default Header;
