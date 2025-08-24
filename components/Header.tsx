import React, { useState, useEffect, Fragment } from 'react';
import { Popover, Transition, Listbox } from '@headlessui/react';
import { useTranslation } from '../i18n/LanguageContext';
import { NAV_LINKS, LANGUAGES } from '../constants';

const Header: React.FC = () => {
    const { t, language, setLanguage } = useTranslation();
    const [activeSection, setActiveSection] = useState('');
    const selectedLanguage = LANGUAGES.find(l => l.code === language);

    useEffect(() => {
        const handleScroll = () => {
            const sections = NAV_LINKS.map(link => document.querySelector(link.href));
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                if (section && scrollPosition >= (section as HTMLElement).offsetTop && scrollPosition < (section as HTMLElement).offsetTop + section.clientHeight) {
                    setActiveSection(section.id);
                    return;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const LanguageSelector: React.FC<{mobile?: boolean}> = ({ mobile = false }) => (
        <Listbox value={language} onChange={setLanguage}>
            <div className={`relative ${mobile ? 'w-full mt-2' : 'ml-4'}`}>
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-300 sm:text-sm">
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
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'}`
                                }
                                value={lang.code}
                            >
                                {({ selected }) => (
                                    <>
                                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                            {lang.name}
                                        </span>
                                        {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
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
        <header role="banner" className="sticky top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <a href="#" className="text-2xl font-bold text-indigo-600">Sami Halawa</a>
                    
                    {/* Desktop Navigation */}
                    <nav aria-label="Primary navigation" className="hidden md:flex space-x-1 items-center">
                        {NAV_LINKS.map(link => (
                            <a key={link.key} href={link.href} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative ${activeSection === link.href.substring(1) ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}>
                                {t(link.key)}
                                {activeSection === link.href.substring(1) && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-500 rounded-full"></span>
                                )}
                            </a>
                        ))}
                        <LanguageSelector />
                    </nav>
                    
                    {/* Mobile Navigation */}
                    <div className="md:hidden">
                        <Popover className="relative">
                            <Popover.Button className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <i className="fas fa-bars w-6 h-6"></i>
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="duration-200 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel className="absolute right-0 mt-2 w-64 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none">
                                  {({ close }) => (
                                    <div className="px-5 pt-5 pb-6">
                                        <div className="flex items-center justify-between">
                                            <div className="text-xl font-bold text-indigo-600">Sami Halawa</div>
                                            <Popover.Button className="-mr-2 p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <i className="fas fa-times w-6 h-6"></i>
                                            </Popover.Button>
                                        </div>
                                        <nav className="mt-6">
                                            <div className="grid gap-y-4">
                                                {NAV_LINKS.map(link => (
                                                    <a key={link.key} href={link.href} onClick={() => close()} className="text-base font-medium text-gray-700 hover:text-indigo-600">{t(link.key)}</a>
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