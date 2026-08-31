import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';
import type { TranslationKey } from '../i18n/translations';

type Item = { href: string; titleKey: TranslationKey; descriptionKey: TranslationKey; categoryKey: TranslationKey };

const ITEMS: Item[] = [
  { href: '/case-studies/oulang', titleKey: 'search.item.caseOulang.title', descriptionKey: 'search.item.caseOulang.description', categoryKey: 'search.category.caseStudies' },
  { href: '/case-studies/autopricing', titleKey: 'search.item.caseAutopricing.title', descriptionKey: 'search.item.caseAutopricing.description', categoryKey: 'search.category.caseStudies' },
  { href: '/case-studies/apolo-medical-framework', titleKey: 'search.item.caseMedical.title', descriptionKey: 'search.item.caseMedical.description', categoryKey: 'search.category.caseStudies' },
  { href: '/case-studies/autoclient', titleKey: 'search.item.caseAutoclient.title', descriptionKey: 'search.item.caseAutoclient.description', categoryKey: 'search.category.caseStudies' },
];

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const SearchPage: React.FC = () => {
  const { t } = useTranslation();
  const localizedItems = useMemo(
    () =>
      ITEMS.map(item => ({
        ...item,
        title: t(item.titleKey),
        description: t(item.descriptionKey),
        category: t(item.categoryKey),
      })),
    [t]
  );

  const q = useQuery().get('q')?.trim().toLowerCase() || '';
  const results = useMemo(() => {
    if (!q) return localizedItems;
    return localizedItems.filter(item =>
      [item.title, item.description, item.category, item.href].join(' ').toLowerCase().includes(q)
    );
  }, [q, localizedItems]);

  return (
    <section className="py-16 bg-white">
<div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">{t('search.title')}</h1>
        <form action="/search" className="mb-6">
          <input
            type="search"
            name="q"
            defaultValue={q}
            placeholder={t('search.placeholder')}
            className="w-full border border-slate-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </form>
        {results.length === 0 ? (
          <p className="text-slate-600">{t('search.noResults')}</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {results.map((r) => (
              <Link key={r.href} to={r.href} className="block p-5 border border-slate-200 rounded-md hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="text-xs uppercase tracking-wide text-slate-500">{r.category}</div>
                <div className="text-lg font-semibold text-slate-900">{r.title}</div>
                <div className="text-slate-700">{r.description}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchPage;
