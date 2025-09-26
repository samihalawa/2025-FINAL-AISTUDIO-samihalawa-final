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
      className="fixed bottom-24 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-slate-900 text-white shadow-lg shadow-brand-900/40 transition hover:-translate-y-1 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
      aria-label={t('ui.backToTop')}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default BackToTop;
