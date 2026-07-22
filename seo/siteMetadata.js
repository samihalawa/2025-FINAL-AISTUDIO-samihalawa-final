export const SITE_URL = 'https://samihalawa.com';
export const SITE_NAME = 'Sami Halawa';
export const DEFAULT_OG_IMAGE = '/og/sami-halawa-ai-engineer.png';
export const DEFAULT_OG_ALT = 'Sami Halawa AI product engineering portfolio';

const DEFAULT_ROBOTS = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';
const CV_ALTERNATES = [
  { lang: 'en', path: '/cv/en' },
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
  robots: DEFAULT_ROBOTS,
  ...options,
});

export const ROUTE_METADATA = [
  route('/', 'Sami Halawa — Founding AI Engineer & Product Builder', 'Founder-engineer building multilingual AI products, reliable agent systems, automation and technical training from Madrid.', { schemaType: 'ProfilePage', keywords: ['AI engineer', 'AI product builder', 'AI agents', 'Madrid'] }),
  route('/corporate', 'Corporate AI Training & Solutions | Sami Halawa', 'Practical AI training, workflow automation and product delivery for teams that need measurable, production-ready outcomes.', { schemaType: 'Service', serviceType: 'Corporate AI training and consulting' }),
  route('/ai-training', 'AI Training for Teams: Workshops & Bootcamps | Sami Halawa', 'Hands-on AI programs covering prompting, RAG, agents, automation and applied AI, delivered onsite in Madrid or remotely.', { schemaType: 'CollectionPage' }),
  route('/projects', 'AI Products & Engineering Projects | Sami Halawa', 'Explore Sami Halawa\'s work across multilingual platforms, agent systems, automation, applied AI and product engineering.', { schemaType: 'CollectionPage' }),
  route('/blog', 'AI Engineering & Agent Systems Blog | Sami Halawa', 'Technical articles on AI agents, context engineering, RAG, evaluation, automation and shipping reliable AI products.', { schemaType: 'Blog' }),
  route('/contact', 'Contact Sami Halawa | AI Product & Engineering', 'Discuss an AI product, automation, training program, technical role or collaboration with Sami Halawa.', { schemaType: 'ContactPage' }),
  route('/cv', 'Sami Halawa CV | Founding AI Engineer', 'Professional profile, experience, selected products, technical skills and public work by founding AI engineer Sami Halawa.', { schemaType: 'ProfilePage', alternates: CV_ALTERNATES }),
  route('/cv/en', 'Sami Halawa CV in English | Founding AI Engineer', 'English CV with Sami Halawa\'s AI product, engineering, automation, research and technical training experience.', { schemaType: 'ProfilePage', alternates: CV_ALTERNATES }),
  route('/cv/es', 'CV de Sami Halawa | Ingeniero Fundador de IA', 'Currículum en español con la experiencia de Sami Halawa en productos de IA, ingeniería, automatización y formación técnica.', { schemaType: 'ProfilePage', lang: 'es', locale: 'es_ES', alternates: CV_ALTERNATES }),
  route('/search', 'Search the Sami Halawa Portfolio', 'Search projects, services, case studies and technical articles across the Sami Halawa portfolio.', { schemaType: 'SearchResultsPage', robots: 'noindex,follow' }),

  route('/services', 'AI Engineering, Automation & Training Services | Sami Halawa', 'AI product engineering, agent systems, workflow automation, technical training and applied research services.', { schemaType: 'CollectionPage' }),
  route('/services/medical-ai', 'Medical AI Research & Human-Review Workflows | Sami Halawa', 'Prototype structured reporting, medical-image review and research workflows with explicit human oversight.', { schemaType: 'Service', serviceType: 'Medical AI research and prototyping', image: '/portfolio/apolo-architecture.png', imageAlt: 'APOLO medical AI workflow architecture' }),
  route('/services/business-automation', 'AI Business Automation & Workflow Delivery | Sami Halawa', 'Automate lead capture, operations, support and reporting with observable AI workflows and reliable human handoffs.', { schemaType: 'Service', serviceType: 'AI business automation' }),
  route('/services/university-ml', 'Python & Machine Learning Project Support | Sami Halawa', 'Hands-on support for Python, machine learning, neural networks and final university projects with clear technical guidance.', { schemaType: 'Service', serviceType: 'Machine learning education' }),
  route('/services/family-ai', 'Practical AI for Families, Parents & Students | Sami Halawa', 'Practical, age-aware AI learning for families, including study support, creative tools and safer everyday workflows.', { schemaType: 'Service', serviceType: 'Family AI education' }),
  route('/services/advanced-ai', 'Advanced AI Agents, RAG & Production Systems | Sami Halawa', 'Design and ship agent systems, RAG pipelines, evaluations, observability and production AI infrastructure.', { schemaType: 'Service', serviceType: 'Advanced AI engineering' }),
  route('/services/no-code-ai', 'No-Code AI for Content, Video & Operations | Sami Halawa', 'Build useful AI content and automation workflows with accessible tools, reusable prompts and measurable delivery systems.', { schemaType: 'Service', serviceType: 'No-code AI training' }),
  route('/services/prompt-engineering', 'Prompt Engineering & LLM Evaluation Training | Sami Halawa', 'Learn system prompts, tool calling, structured outputs, evaluation, safety and cost control for reliable LLM features.', { schemaType: 'Service', serviceType: 'Prompt engineering training' }),
  route('/services/rag-langchain', 'Production RAG & LangChain Workshop | Sami Halawa', 'Build reliable retrieval systems with chunking, hybrid search, reranking, evaluation and production observability.', { schemaType: 'Service', serviceType: 'RAG and LangChain training' }),
  route('/services/agents-automation', 'AI Agents & Automation Bootcamp | Sami Halawa', 'Design agent workflows with tool use, human approvals, scheduling, retries, guardrails and operational monitoring.', { schemaType: 'Service', serviceType: 'AI agents and automation training' }),
  route('/services/ai-for-marketing', 'AI for Marketing, SEO & Analytics | Sami Halawa', 'Build repeatable content, SEO, creative and analytics workflows with AI, clear review gates and reusable systems.', { schemaType: 'Service', serviceType: 'AI marketing systems' }),
  route('/services/ai-funding-grants', 'AI Funding & Grant Application Support | Sami Halawa', 'Funding research, technical narratives, evidence packs, budgets and submission support for applied AI projects.', { schemaType: 'Service', serviceType: 'AI funding and grant support' }),
  route('/services/ai-ip-patents', 'AI Technical Evidence & Research Dossiers | Sami Halawa', 'Source-led technical research, architecture diagrams, evaluation notes and evidence boundaries for specialist review.', { schemaType: 'Service', serviceType: 'AI technical research dossiers' }),
  route('/services/accelerator-readiness', 'Accelerator, Pitch & Demo Readiness | Sami Halawa', 'Clarify product narrative, demo, evidence, go-to-market and investor Q&A for accelerator and funding applications.', { schemaType: 'Service', serviceType: 'Accelerator readiness consulting' }),
  route('/services/ai-readiness-audit', 'Enterprise AI Readiness Audit | Sami Halawa', 'Audit AI use cases, prompts, data, evaluations, guardrails, costs and delivery risks with a practical hardening plan.', { schemaType: 'Service', serviceType: 'AI readiness audit' }),
  route('/services/ai-competitive-research', 'AI Competitive Research & Product Blueprints | Sami Halawa', 'Source-led product research, data and API analysis, technical comparisons and implementation-ready blueprints.', { schemaType: 'Service', serviceType: 'AI competitive research' }),
  route('/services/data-science-training', 'Data Science & Machine Learning Training | Sami Halawa', 'Practical statistics, classification, regression, dimensionality reduction and model evaluation with Python.', { schemaType: 'Service', serviceType: 'Data science training' }),
  route('/services/proptech-analytics', 'PropTech Data Pipelines & Real Estate Analytics | Sami Halawa', 'Property-data collection, normalization, valuation models, dashboards and monitoring for real-estate products.', { schemaType: 'Service', serviceType: 'PropTech analytics' }),
  route('/services/airbnb-analytics', 'Airbnb Market Intelligence & Pricing Analytics | Sami Halawa', 'Listing data, pricing and occupancy analysis, benchmarking and monitoring for short-term rental decisions.', { schemaType: 'Service', serviceType: 'Short-term rental analytics' }),
  route('/services/ai-language-learning', 'AI Language Learning Systems & Curriculum | Sami Halawa', 'Design spaced repetition, pronunciation support, conversation practice and structured AI learning workflows.', { schemaType: 'Service', serviceType: 'AI language learning systems' }),
  route('/services/troubleshooting', 'AI & Automation Troubleshooting | Sami Halawa', 'Diagnose and repair failing AI, data and automation workflows with source-level evidence and production-focused fixes.', { schemaType: 'Service', serviceType: 'AI troubleshooting' }),

  route('/locations', 'AI Training & Consulting Locations | Sami Halawa', 'Onsite AI training and consulting in Madrid, Barcelona and Valencia, plus remote delivery across Spain and worldwide.', { schemaType: 'CollectionPage' }),
  route('/locations/madrid', 'AI Training & Consulting in Madrid | Sami Halawa', 'Onsite AI workshops, automation consulting and product engineering for teams and founders in Madrid.', { schemaType: 'ProfessionalService', areaServed: 'Madrid, Spain' }),
  route('/locations/barcelona', 'AI Training & Consulting in Barcelona | Sami Halawa', 'AI workshops, agent systems, automation and product consulting for teams and founders in Barcelona.', { schemaType: 'ProfessionalService', areaServed: 'Barcelona, Spain' }),
  route('/locations/valencia', 'AI Training & Consulting in Valencia | Sami Halawa', 'Practical AI training, RAG workshops, automation and technical consulting for organizations in Valencia.', { schemaType: 'ProfessionalService', areaServed: 'Valencia, Spain' }),
  route('/locations/spain', 'AI Training & Consulting Across Spain | Sami Halawa', 'Onsite and remote AI training, automation and product engineering for organizations across Spain.', { schemaType: 'ProfessionalService', areaServed: 'Spain' }),
  route('/locations/online', 'Remote AI Training & Consulting | Sami Halawa', 'Remote AI workshops, technical training and product consulting for distributed teams worldwide.', { schemaType: 'ProfessionalService', areaServed: 'Worldwide' }),
  route('/locations/madrid/ai-readiness-audit', 'AI Readiness Audit in Madrid | Sami Halawa', 'Assess AI opportunities, data, workflows, evaluation, governance and costs with an actionable Madrid-based audit.', { schemaType: 'Service', serviceType: 'AI readiness audit', areaServed: 'Madrid, Spain' }),
  route('/locations/barcelona/prompt-engineering', 'Prompt Engineering Training in Barcelona | Sami Halawa', 'Hands-on prompt engineering, tool calling and LLM evaluation training for Barcelona teams.', { schemaType: 'Service', serviceType: 'Prompt engineering training', areaServed: 'Barcelona, Spain' }),
  route('/locations/valencia/rag-langchain', 'RAG & LangChain Workshop in Valencia | Sami Halawa', 'Build and evaluate production retrieval systems in a practical RAG and LangChain workshop in Valencia.', { schemaType: 'Service', serviceType: 'RAG and LangChain training', areaServed: 'Valencia, Spain' }),
  route('/locations/madrid/business-automation', 'AI Business Automation in Madrid | Sami Halawa', 'Design reliable AI workflows for operations, sales and support with local delivery in Madrid.', { schemaType: 'Service', serviceType: 'AI business automation', areaServed: 'Madrid, Spain' }),

  route('/case-studies', 'AI Product & Engineering Case Studies | Sami Halawa', 'Detailed case studies across AI products, automation, applied research, agent systems and data platforms.', { schemaType: 'CollectionPage', image: '/portfolio/vuda-annotated.png', imageAlt: 'Annotated VUDA product interface' }),
  route('/case-studies/apolo-medical-framework', 'APOLO Medical AI Framework Case Study | Sami Halawa', 'A multimodal medical AI research framework combining structured reasoning, image workflows and human review.', { schemaType: 'TechArticle', image: '/portfolio/apolo-architecture.png', imageAlt: 'APOLO medical AI architecture diagram' }),
  route('/case-studies/radiology-ai', 'Radiology AI Workflow Case Study | Sami Halawa', 'Research prototypes for structured medical-image workflows, report generation and explicit clinician review.', { schemaType: 'TechArticle', image: '/portfolio/apolo-architecture.png', imageAlt: 'Medical AI workflow architecture' }),
  route('/case-studies/autoclient', 'AutoClient AI Automation Case Study | Sami Halawa', 'A product and automation system for turning operational data into repeatable sales, analysis and reporting workflows.', { schemaType: 'TechArticle', image: '/portfolio/autopricing-dashboard.png', imageAlt: 'AutoPricing analytics dashboard' }),
  route('/case-studies/attio-sequences', 'Attio CRM Sequences Case Study | Sami Halawa', 'Designing structured CRM sequences, enrichment and follow-up automation with observable workflow states.', { schemaType: 'TechArticle' }),
  route('/case-studies/banking-assistant', 'Conversational Banking Assistant Case Study | Sami Halawa', 'A conversational product concept for explainable personal-finance workflows, data access and safe user guidance.', { schemaType: 'TechArticle' }),
  route('/case-studies/spreadsheet-assistant', 'AI Spreadsheet Assistant Case Study | Sami Halawa', 'Natural-language analysis, structured data operations and reviewable outputs for spreadsheet workflows.', { schemaType: 'TechArticle' }),
  route('/case-studies/proptech-analytics', 'PropTech Analytics Case Study | Sami Halawa', 'Property-data pipelines, normalization, market analysis and decision interfaces for real-estate products.', { schemaType: 'TechArticle', image: '/portfolio/autopricing-dashboard.png', imageAlt: 'Data analytics dashboard interface' }),
  route('/case-studies/airbnb-intelligence', 'Airbnb Market Intelligence Case Study | Sami Halawa', 'Listing normalization, pricing signals, occupancy analysis and market-monitoring workflows for short-term rentals.', { schemaType: 'TechArticle' }),
  route('/case-studies/autofunding-grants', 'AI Funding & Grants Workflow Case Study | Sami Halawa', 'A structured workflow for program research, evidence mapping, technical narratives, budgets and submission readiness.', { schemaType: 'TechArticle' }),
  route('/case-studies/lanzadera-readiness', 'Accelerator Readiness Case Study | Sami Halawa', 'Product narrative, demo evidence, go-to-market analysis and Q&A preparation for accelerator applications.', { schemaType: 'TechArticle', image: '/portfolio/autopricing-dashboard.png', imageAlt: 'Product analytics dashboard' }),
];

export const NOT_FOUND_METADATA = route('/404', 'Page Not Found | Sami Halawa', 'The requested page could not be found. Explore the portfolio, services, case studies or technical blog.', { schemaType: 'WebPage', robots: 'noindex,follow' });

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

function truncateAtWord(value, maxLength) {
  if (value.length <= maxLength) return value;
  const clipped = value.slice(0, maxLength - 1);
  const boundary = clipped.lastIndexOf(' ');
  return `${clipped.slice(0, boundary > maxLength * 0.65 ? boundary : clipped.length).trim()}…`;
}

export function buildBlogPostMetadata(entry) {
  const path = `/blog/${entry.slug}`;
  const suffix = ' | Sami Halawa';
  const title = `${truncateAtWord(entry.title, 70 - suffix.length)}${suffix}`;
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
  const canonical = absoluteUrl(meta.path);
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;
  const pageId = `${canonical}#webpage`;
  const person = {
    '@type': 'Person',
    '@id': personId,
    name: 'Sami Halawa',
    url: SITE_URL,
    image: absoluteUrl('/portfolio/sami-photo.webp'),
    jobTitle: 'Founding AI Engineer',
    description: 'Founder-engineer building multilingual AI products, agent systems, automation and technical education.',
    knowsLanguage: ['English', 'Spanish', 'Mandarin Chinese'],
    knowsAbout: ['AI product engineering', 'AI agents', 'workflow automation', 'multilingual software', 'technical training'],
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
  const segments = meta.path.split('/').filter(Boolean);
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
          name: itemPath === meta.path
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
    primaryImageOfPage: { '@type': 'ImageObject', url: absoluteUrl(meta.image), width: 1200, height: 630 },
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
  const canonical = absoluteUrl(meta.path);
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
    `<meta data-seo-head="true" property="og:image:type" content="image/png">`,
    `<meta data-seo-head="true" property="og:image:width" content="1200">`,
    `<meta data-seo-head="true" property="og:image:height" content="630">`,
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
