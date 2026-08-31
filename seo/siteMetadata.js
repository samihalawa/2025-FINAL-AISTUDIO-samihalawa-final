export const SITE_URL = 'https://samihalawa.com';
export const SITE_NAME = 'Sami Halawa';
export const DEFAULT_OG_IMAGE = '/og/sami-halawa-ai-engineer.png';
export const DEFAULT_OG_ALT = 'Sami Halawa senior and lead AI engineering portfolio';

const DEFAULT_ROBOTS = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
// /cv and /cv/en render the same English CV. /cv is the indexable original, so
// hreflang points at it and /cv/en declares /cv as its canonical instead of
// competing with it. The page stays reachable; only the indexing signal moves.
const CV_ALTERNATES = [
  { lang: 'en', path: '/cv' },
  { lang: 'es', path: '/cv/es' },
  { lang: 'x-default', path: '/cv' },
];

const route = (path, title, description, options = {}) => ({
  path,
  title,
  description,
  schemaType: 'WebPage',
  image: DEFAULT_OG_IMAGE,
  imageAlt: DEFAULT_OG_ALT,
  imageWidth: 1200,
  imageHeight: 630,
  imageMime: 'image/png',
  robots: DEFAULT_ROBOTS,
  ...options,
});

export const ROUTE_METADATA = [
  route('/', 'Sami Halawa — Senior / Lead AI Engineer | RAG & Agents', 'Senior and lead AI engineer building production systems across agents, RAG, voice and automation with Python and TypeScript from Madrid.', { schemaType: 'ProfilePage', keywords: ['senior AI engineer', 'lead AI engineer', 'RAG', 'AI agents', 'MCP', 'Madrid'] }),
  route('/projects', 'AI Products & Engineering Projects | Sami Halawa', 'Three role-relevant engineering stories spanning a multilingual production platform, pricing and ERP integration, and open-source agent tooling.', { schemaType: 'CollectionPage', image: '/portfolio/oulang-case-study-cover.webp', imageAlt: 'Selected AI and platform engineering work', imageWidth: 1600, imageHeight: 901, imageMime: 'image/webp', keywords: ['AI products', 'agent systems', 'product engineering', 'multilingual platforms'] }),
  route('/contact', 'Contact Sami Halawa | Senior / Lead AI Engineer', 'Discuss senior and lead software or AI engineering roles with Sami Halawa, based in Madrid and available across Spain and Europe.', { schemaType: 'ContactPage' }),
  route('/cv', 'Sami Halawa CV | Senior / Lead AI Engineer', 'Concise recruiter-ready CV covering agentic AI, RAG, MCP, Python, TypeScript, production engineering, team leadership and immediate availability.', { schemaType: 'ProfilePage', alternates: CV_ALTERNATES }),
  route('/cv/en', 'Sami Halawa CV | Senior / Lead AI Engineer', 'English CV covering agentic AI, RAG, MCP, Python, TypeScript, production engineering, voice, automation and technical leadership.', { schemaType: 'ProfilePage', alternates: CV_ALTERNATES, canonical: '/cv', sitemap: false }),
  route('/cv/es', 'CV de Sami Halawa | Ingeniero Sénior / Lead de IA', 'Currículum en español con la experiencia de Sami Halawa en productos de IA, ingeniería, automatización y liderazgo técnico.', { schemaType: 'ProfilePage', lang: 'es', locale: 'es_ES', alternates: CV_ALTERNATES }),
  route('/search', 'Search the Sami Halawa Portfolio', 'Search engineering projects, case studies and technical articles across the Sami Halawa portfolio.', { schemaType: 'SearchResultsPage', robots: 'noindex,follow' }),

  route('/case-studies', 'AI Product & Engineering Case Studies | Sami Halawa', 'Three role-relevant engineering stories covering a multilingual production platform, pricing and ERP integration, and open-source agent tooling.', { schemaType: 'CollectionPage', image: '/portfolio/oulang-case-study-cover.webp', imageAlt: 'Selected AI and platform engineering case studies', imageWidth: 1600, imageHeight: 901, imageMime: 'image/webp', keywords: ['AI case studies', 'multilingual platform', 'pricing intelligence', 'ERP integration', 'agent tooling'] }),
  route('/case-studies/oulang', 'OULANG Multilingual Marketplace Case Study | Sami Halawa', 'How OULANG connects housing, jobs, local services, community publishing and AI assistance across web, iOS and Android.', { schemaType: 'TechArticle', image: '/portfolio/oulang-case-study-cover.webp', imageAlt: 'OULANG rent search, AI assistant and local-content mobile interfaces', imageWidth: 1600, imageHeight: 901, imageMime: 'image/webp', keywords: ['multilingual marketplace', 'Chinese community Spain', 'React marketplace', 'Capacitor mobile apps'] }),
  route('/case-studies/apolo-medical-framework', 'APOLO Medical AI Framework Case Study | Sami Halawa', 'A multimodal medical-image workflow that separates structured visual description, reasoning, reporting and human review.', { schemaType: 'TechArticle', image: '/portfolio/apolo-architecture.png', imageAlt: 'APOLO medical AI architecture diagram', imageWidth: 1024, imageHeight: 1024, keywords: ['multimodal medical AI', 'medical image workflow', 'structured reporting', 'human review'] }),
  route('/case-studies/autoclient', 'AutoClient Revenue Operations Case Study | Sami Halawa', 'How AutoClient connects account research, enrichment, CRM review, email, WhatsApp and voice follow-up in one operator-led system.', { schemaType: 'TechArticle', image: '/portfolio/autoclient-operations-cover.webp', imageAlt: 'AutoClient account research, CRM and multi-channel operations workflow', imageWidth: 1600, imageHeight: 900, imageMime: 'image/webp', keywords: ['revenue operations', 'CRM automation', 'account research', 'AI agents'] }),
  route('/case-studies/autopricing', 'AutoPricing Delivery Case Study | Sami Halawa', 'A pricing-intelligence workflow connecting marketplace evidence, product matching, inventory, ERP context and operator review.', { schemaType: 'TechArticle', image: '/portfolio/autopricing-dashboard.png', imageAlt: 'AutoPricing pricing-intelligence and operations interface', imageWidth: 2756, imageHeight: 1994, keywords: ['pricing intelligence', 'marketplace data', 'ERP integration', 'sourcing workflow'] }),
];

export const NOT_FOUND_METADATA = route('/404', 'Page Not Found | Sami Halawa', 'The requested page could not be found. Explore the engineering portfolio, case studies, CV or technical blog.', { schemaType: 'WebPage', robots: 'noindex,follow' });

export function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return `/${pathname.replace(/^\/+|\/+$/g, '')}`;
}

export function absoluteUrl(value) {
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`;
}

export function getRouteMetadata(pathname) {
  const normalized = normalizePath(pathname);
  return ROUTE_METADATA.find((item) => item.path === normalized) || null;
}

// The path a page declares as its canonical. Pages without an explicit
// `canonical` are their own canonical; consolidated duplicates point elsewhere.
export function canonicalPath(meta) {
  return normalizePath(meta.canonical || meta.path);
}

// Titles must never carry a literal ellipsis: a clipped title reads as broken in
// SERPs and social cards. Clip at a word boundary and stop there instead.
function clampTitle(value, maxLength) {
  if (value.length <= maxLength) return value;
  const clipped = value.slice(0, maxLength);
  const boundary = clipped.lastIndexOf(' ');
  return (boundary > maxLength * 0.6 ? clipped.slice(0, boundary) : clipped).trim().replace(/[\s,:;.\-–—]+$/, '');
}

function truncateAtWord(value, maxLength) {
  if (value.length <= maxLength) return value;
  const clipped = value.slice(0, maxLength - 1);
  const boundary = clipped.lastIndexOf(' ');
  return `${clipped.slice(0, boundary > maxLength * 0.65 ? boundary : clipped.length).trim()}…`;
}

export function buildBlogPostMetadata(entry) {
  const path = `/blog/${entry.slug}`;
  const suffix = ' | Sami Halawa';
  const title = `${clampTitle(entry.title, 70 - suffix.length)}${suffix}`;
  return route(path, title, truncateAtWord(entry.summary, 160), {
    schemaType: 'BlogPosting',
    ogType: 'article',
    datePublished: entry.date,
    author: entry.author || 'Sami Halawa',
    keywords: entry.tags || [],
  });
}

function breadcrumbName(path) {
  const exact = getRouteMetadata(path);
  if (exact) return exact.title.split(' | ')[0].split(' — ')[0];
  return path.split('/').filter(Boolean).at(-1)?.replace(/-/g, ' ') || 'Home';
}

export function buildStructuredData(meta) {
  const selfPath = canonicalPath(meta);
  const canonical = absoluteUrl(selfPath);
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;
  const pageId = `${canonical}#webpage`;
  const person = {
    '@type': 'Person',
    '@id': personId,
    name: 'Sami Halawa',
    url: SITE_URL,
    image: absoluteUrl('/portfolio/sami-photo.webp'),
    jobTitle: 'Senior / Lead AI Engineer',
    description: 'Senior and lead AI engineer building production systems across agents, RAG, voice and automation with Python and TypeScript.',
    knowsLanguage: ['English', 'Spanish', 'Mandarin Chinese'],
    knowsAbout: ['agentic AI', 'retrieval-augmented generation', 'Model Context Protocol', 'Python', 'TypeScript', 'workflow automation', 'production AI systems'],
    sameAs: [
      'https://www.linkedin.com/in/samihalawa',
      'https://github.com/samihalawa',
      'https://huggingface.co/samihalawa',
    ],
  };
  const website = {
    '@type': 'WebSite',
    '@id': websiteId,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { '@id': personId },
    inLanguage: 'en',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
  const segments = selfPath.split('/').filter(Boolean);
  const breadcrumbs = segments.length ? {
    '@type': 'BreadcrumbList',
    '@id': `${canonical}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      ...segments.map((_, index) => {
        const itemPath = `/${segments.slice(0, index + 1).join('/')}`;
        return {
          '@type': 'ListItem',
          position: index + 2,
          name: itemPath === selfPath
            ? meta.title.split(' | ')[0].split(' — ')[0]
            : breadcrumbName(itemPath),
          item: absoluteUrl(itemPath),
        };
      }),
    ],
  } : null;

  const common = {
    '@id': pageId,
    url: canonical,
    name: meta.title,
    description: meta.description,
    inLanguage: meta.lang || 'en',
    isPartOf: { '@id': websiteId },
    ...(breadcrumbs ? { breadcrumb: { '@id': `${canonical}#breadcrumb` } } : {}),
    primaryImageOfPage: { '@type': 'ImageObject', url: absoluteUrl(meta.image), width: meta.imageWidth, height: meta.imageHeight },
  };

  let page;
  if (meta.schemaType === 'Service') {
    page = {
      '@type': 'WebPage',
      ...common,
      mainEntity: {
        '@type': 'Service',
        '@id': `${canonical}#service`,
        name: meta.title.split(' | ')[0],
        description: meta.description,
        serviceType: meta.serviceType || meta.title.split(' | ')[0],
        provider: { '@id': personId },
        areaServed: meta.areaServed || 'Spain and worldwide',
        url: canonical,
      },
    };
  } else if (meta.schemaType === 'TechArticle' || meta.schemaType === 'BlogPosting') {
    page = {
      '@type': meta.schemaType,
      ...common,
      headline: meta.title.split(' | ')[0],
      author: { '@id': personId },
      publisher: { '@id': personId },
      mainEntityOfPage: { '@id': pageId },
      ...(meta.datePublished ? { datePublished: meta.datePublished, dateModified: meta.datePublished } : {}),
      ...(meta.keywords?.length ? { keywords: meta.keywords.join(', ') } : {}),
    };
  } else if (meta.schemaType === 'ProfessionalService') {
    page = {
      '@type': 'WebPage',
      ...common,
      mainEntity: {
        '@type': 'ProfessionalService',
        '@id': `${canonical}#service`,
        name: meta.title.split(' | ')[0],
        description: meta.description,
        founder: { '@id': personId },
        areaServed: meta.areaServed,
        url: canonical,
      },
    };
  } else {
    page = { '@type': meta.schemaType || 'WebPage', ...common };
    if (meta.schemaType === 'ProfilePage') page.mainEntity = { '@id': personId };
  }

  return { '@context': 'https://schema.org', '@graph': [person, website, page, breadcrumbs].filter(Boolean) };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function buildHeadMarkup(meta) {
  const canonical = absoluteUrl(canonicalPath(meta));
  const image = absoluteUrl(meta.image);
  const imageAlt = meta.imageAlt || DEFAULT_OG_ALT;
  const ogType = meta.ogType || (meta.schemaType === 'TechArticle' || meta.schemaType === 'BlogPosting' ? 'article' : 'website');
  const tags = [
    `<title data-seo-head="true">${escapeHtml(meta.title)}</title>`,
    `<meta data-seo-head="true" name="description" content="${escapeHtml(meta.description)}">`,
    `<meta data-seo-head="true" name="author" content="Sami Halawa">`,
    `<meta data-seo-head="true" name="robots" content="${escapeHtml(meta.robots || DEFAULT_ROBOTS)}">`,
    `<meta data-seo-head="true" name="googlebot" content="${escapeHtml(meta.robots || DEFAULT_ROBOTS)}">`,
    `<link data-seo-head="true" rel="canonical" href="${escapeHtml(canonical)}">`,
    `<meta data-seo-head="true" property="og:site_name" content="${SITE_NAME}">`,
    `<meta data-seo-head="true" property="og:type" content="${ogType}">`,
    `<meta data-seo-head="true" property="og:locale" content="${meta.locale || 'en_US'}">`,
    `<meta data-seo-head="true" property="og:title" content="${escapeHtml(meta.title)}">`,
    `<meta data-seo-head="true" property="og:description" content="${escapeHtml(meta.description)}">`,
    `<meta data-seo-head="true" property="og:url" content="${escapeHtml(canonical)}">`,
    `<meta data-seo-head="true" property="og:image" content="${escapeHtml(image)}">`,
    `<meta data-seo-head="true" property="og:image:secure_url" content="${escapeHtml(image)}">`,
    `<meta data-seo-head="true" property="og:image:type" content="${escapeHtml(meta.imageMime)}">`,
    `<meta data-seo-head="true" property="og:image:width" content="${escapeHtml(meta.imageWidth)}">`,
    `<meta data-seo-head="true" property="og:image:height" content="${escapeHtml(meta.imageHeight)}">`,
    `<meta data-seo-head="true" property="og:image:alt" content="${escapeHtml(imageAlt)}">`,
    `<meta data-seo-head="true" name="twitter:card" content="summary_large_image">`,
    `<meta data-seo-head="true" name="twitter:title" content="${escapeHtml(meta.title)}">`,
    `<meta data-seo-head="true" name="twitter:description" content="${escapeHtml(meta.description)}">`,
    `<meta data-seo-head="true" name="twitter:image" content="${escapeHtml(image)}">`,
    `<meta data-seo-head="true" name="twitter:image:alt" content="${escapeHtml(imageAlt)}">`,
    `<script data-seo-head="true" type="application/ld+json">${JSON.stringify(buildStructuredData(meta)).replace(/</g, '\\u003c')}</script>`,
  ];
  if (meta.keywords?.length) tags.splice(3, 0, `<meta data-seo-head="true" name="keywords" content="${escapeHtml(meta.keywords.join(', '))}">`);
  if (meta.alternates?.length) {
    const canonicalIndex = tags.findIndex((tag) => tag.includes('rel="canonical"'));
    tags.splice(canonicalIndex + 1, 0, ...meta.alternates.map((alternate) =>
      `<link data-seo-head="true" rel="alternate" hreflang="${escapeHtml(alternate.lang)}" href="${escapeHtml(absoluteUrl(alternate.path))}">`,
    ));
  }
  if (ogType === 'article') {
    const scriptIndex = tags.findIndex((tag) => tag.startsWith('<script'));
    const articleTags = [
      `<meta data-seo-head="true" property="article:author" content="${SITE_URL}/">`,
      ...(meta.datePublished ? [
        `<meta data-seo-head="true" property="article:published_time" content="${escapeHtml(meta.datePublished)}">`,
        `<meta data-seo-head="true" property="article:modified_time" content="${escapeHtml(meta.dateModified || meta.datePublished)}">`,
      ] : []),
      ...(meta.keywords || []).map((keyword) => `<meta data-seo-head="true" property="article:tag" content="${escapeHtml(keyword)}">`),
    ];
    tags.splice(scriptIndex, 0, ...articleTags);
  }
  return tags.join('\n    ');
}
