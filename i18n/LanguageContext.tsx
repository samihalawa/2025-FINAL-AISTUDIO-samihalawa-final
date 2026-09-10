import React, { createContext, useState, useContext, useCallback, ReactNode, useEffect } from 'react';
import { translations, TranslationKey } from './translations';

export type LanguageCode = 'en' | 'es' | 'fr' | 'zh';

interface LanguageContextType {
    language: LanguageCode;
    setLanguage: (lang: LanguageCode) => void;
    t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Server-side renders may pin a language (used for multilingual pre-render checks); browsers start in English.
    const [language, setLanguage] = useState<LanguageCode>(() => ((globalThis as { __SSR_LANGUAGE__?: LanguageCode }).__SSR_LANGUAGE__) || 'en');

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const t = useCallback((key: TranslationKey): string => {
        return translations[language][key] || translations['en'][key] || key;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslation = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
};
