import React, { useEffect, useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const BackToTop: React.FC = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollTop}
      className="fixed bottom-24 right-6 z-40 bg-white text-slate-700 border border-slate-300 rounded-full w-12 h-12 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-slate-500 flex items-center justify-center"
      aria-label={t('ui.backToTop')}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default BackToTop;