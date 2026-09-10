import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const copy = {
  es: 'Este caso de estudio se publica en inglés. El resumen en español está disponible en la página de casos de estudio.',
  fr: 'Cette étude de cas est publiée en anglais. Le résumé en français est disponible sur la page des études de cas.',
  zh: '本案例研究以英文发布。中文摘要请见案例研究页面。',
} as const;

/** Case-study deep dives are written in English; other locales get a one-line notice instead of silent English copy. */
const EnglishOnlyNotice: React.FC = () => {
  const { language } = useTranslation();
  if (language === 'en') return null;
  return (
    <p className="border-b border-slate-300 bg-white px-6 py-3 text-center text-sm text-slate-600" role="note">{copy[language]}</p>
  );
};

export default EnglishOnlyNotice;
