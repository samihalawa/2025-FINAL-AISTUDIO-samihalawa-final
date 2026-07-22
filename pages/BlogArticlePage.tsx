import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import { useTranslation, LanguageCode } from '../i18n/LanguageContext';

interface ManifestEntry {
  slug: string;
  path: string;
  title: string;
  date: string;
  summary: string;
  author: string;
  tags?: string[];
}

export interface LoadedArticle {
  slug: string;
  title: string;
  date: string;
  summary: string;
  author: string;
  content: string;
}

declare global {
  interface Window {
    __INITIAL_BLOG_ARTICLE__?: LoadedArticle;
  }
}

const localeMap: Record<LanguageCode, string> = {
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  zh: 'zh-CN',
};

// Same lightweight front-matter parser used by the blog index (no YAML dep at runtime).
function parseFrontMatter(content: string): { data: Record<string, string>; content: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, content };
  const [, fm, body] = match;
  const data: Record<string, string> = {};
  for (const line of fm.split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, content: body };
}

const BlogArticlePage: React.FC<{ initialArticle?: LoadedArticle | null }> = ({ initialArticle = null }) => {
  const { slug = '' } = useParams();
  const { t, language } = useTranslation();
  const matchingInitialArticle = initialArticle?.slug === slug ? initialArticle : null;
  const [article, setArticle] = useState<LoadedArticle | null>(matchingInitialArticle);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>(matchingInitialArticle ? 'ready' : 'loading');

  useEffect(() => {
    if (matchingInitialArticle) {
      setArticle(matchingInitialArticle);
      setStatus('ready');
      return;
    }

    let cancelled = false;
    const load = async () => {
      setStatus('loading');
      setArticle(null);
      try {
        // Resolve the file path via the build-time manifest (handles hub posts
        // committed under /blog/<locale>/<slug>.md); fall back to the flat path.
        let filePath = slug;
        let meta: ManifestEntry | undefined;
        try {
          const res = await fetch('/blog/index.json', { cache: 'no-cache' });
          if (res.ok) {
            const manifest: ManifestEntry[] = await res.json();
            meta = manifest.find((m) => m.slug === slug);
            if (meta?.path) filePath = meta.path;
          }
        } catch {
          /* manifest optional; fall back to flat path */
        }

        const mdRes = await fetch(`/blog/${filePath}.md`, { cache: 'no-cache' });
        if (!mdRes.ok) throw new Error(`HTTP ${mdRes.status}`);
        const raw = await mdRes.text();
        if (!raw.trim()) throw new Error('empty');
        const { data, content } = parseFrontMatter(raw);
        if (cancelled) return;
        setArticle({
          slug,
          title: data.title || meta?.title || slug.replace(/-/g, ' '),
          date: data.date || data.publishedAt || meta?.date || new Date().toISOString().slice(0, 10),
          summary: data.summary || data.excerpt || data.metaDescription || meta?.summary || '',
          author: data.author || meta?.author || 'Sami Halawa',
          content,
        });
        setStatus('ready');
      } catch (err) {
        if (!cancelled) setStatus('error');
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [matchingInitialArticle, slug]);

  const parsedContent = useMemo(
    () => (article?.content ? (marked.parse(article.content, { async: false }) as string) : ''),
    [article],
  );

  const formattedDate = useMemo(() => {
    if (!article?.date) return '';
    const d = new Date(article.date);
    if (Number.isNaN(d.getTime())) return '';
    return new Intl.DateTimeFormat(localeMap[language] || 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(d);
  }, [article, language]);

  return (
    <>
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
              <i className="fas fa-arrow-left"></i> {t('blog.title')}
            </Link>

            {status === 'loading' && (
              <div className="mt-8 animate-pulse space-y-4" aria-live="polite">
                <div className="h-8 w-3/4 rounded bg-slate-200"></div>
                <div className="h-4 w-1/3 rounded bg-slate-200"></div>
                <div className="h-64 w-full rounded bg-slate-100"></div>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-10 rounded-lg bg-red-50 p-6 text-center text-red-600">
                <p>{t('blog.error')}</p>
                <Link to="/blog" className="mt-4 inline-block font-semibold text-brand-600 hover:text-brand-700">
                  {t('blog.readMore')}
                </Link>
              </div>
            )}

            {status === 'ready' && article && (
              <article className="mt-8">
                <header className="mb-8 border-b border-slate-200 pb-6">
                  <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{article.title}</h1>
                  <div className="mt-4 flex items-center text-sm text-slate-500">
                    <span>{article.author}</span>
                    {formattedDate && (
                      <>
                        <span className="mx-2">&bull;</span>
                        <span>{formattedDate}</span>
                      </>
                    )}
                  </div>
                </header>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: parsedContent }} />
              </article>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .prose { color: #334155; line-height: 1.7; }
        .prose h1, .prose h2, .prose h3, .prose h4 { color: #0f172a; font-weight: 700; margin-bottom: 0.6em; margin-top: 1.6em; }
        .prose h2 { font-size: 1.6em; }
        .prose h3 { font-size: 1.3em; }
        .prose p { margin-bottom: 1.15em; }
        .prose a { color: #0f172a; text-decoration: underline; }
        .prose a:hover { color: #475569; }
        .prose ul, .prose ol { margin-left: 1.5rem; margin-bottom: 1.15em; list-style: revert; }
        .prose li { margin-bottom: 0.35em; }
        .prose blockquote { border-left: 4px solid #cbd5e1; padding-left: 1rem; margin-left: 0; font-style: italic; color: #475569; }
        .prose pre { background-color: #f1f5f9; color: #1e293b; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin-bottom: 1.15em; }
        .prose code { font-family: monospace; background-color: #f1f5f9; padding: 0.2em 0.4em; font-size: 85%; border-radius: 0.3rem; }
        .prose pre code { background-color: transparent; padding: 0; font-size: inherit; }
      `}</style>
    </>
  );
};

export default BlogArticlePage;
