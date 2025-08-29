import React, { useState, useEffect, Fragment, useRef } from 'react';
import { Popover, Transition, Listbox } from '@headlessui/react';
import { useTranslation } from '../i18n/LanguageContext';
import { NAV_LINKS, LANGUAGES } from '../constants';

const Header: React.FC = () => {
    const { t, language, setLanguage } = useTranslation();
    const [activeSection, setActiveSection] = useState('');
    const selectedLanguage = LANGUAGES.find(l => l.code === language);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = headerRef.current?.offsetHeight || 80;
            // The "line" is placed slightly below the header.
            // A section is "active" if its top has passed this line.
            const scrollPosition = window.scrollY + headerHeight + 20;

            // Handle being at the bottom of the page, forcing the last link to be active
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
                setActiveSection('contact');
                return;
            }
            
            // Find the last section whose top is above the scrollPosition
            // We iterate from the end of the links to the beginning.
            for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
                const link = NAV_LINKS[i];
                const section = document.querySelector(link.href) as HTMLElement;

                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(section.id);
                    return; // Found the active section, no need to continue
                }
            }

            // If we're above all sections, no section is active.
            setActiveSection('');
        };

        // Add event listener and run once on mount
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependencies, will run once on mount
    
    const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setActiveSection('');
        // Clean up the URL hash
        if (history.replaceState) {
            history.replaceState(null, '', window.location.pathname + window.location.search);
        }
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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

    const LanguageSelector: React.FC<{mobile?: boolean}> = ({ mobile = false }) => (
        <Listbox value={language} onChange={setLanguage}>
            <div className={`relative ${mobile ? 'w-full mt-2' : 'ml-4'}`}>
                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left border border-slate-200 focus:outline-none focus-visible:border-slate-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-300 sm:text-sm">
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
        <header ref={headerRef} role="banner" className="sticky top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <a href="#top" onClick={scrollToTop} className="text-2xl font-bold text-slate-900">Sami Halawa</a>
                    
                    <nav aria-label="Primary navigation" className="hidden md:flex space-x-1 items-center">
                        {NAV_LINKS.map(link => (
                            <a key={link.key} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${activeSection === link.href.substring(1) ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}>
                                {t(link.key)}
                            </a>
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
                                                    <a key={link.key} href={link.href} onClick={(e) => { handleNavClick(e, link.href); close(); }} className="text-base font-medium text-slate-700 hover:text-slate-900">{t(link.key)}</a>
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