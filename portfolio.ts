import type { LanguageCode } from './i18n/LanguageContext';

export type PortfolioCategory = 'platforms' | 'agents' | 'applied' | 'education';
export type InventoryLane = 'products' | 'clients' | 'open-source' | 'research' | 'education' | 'infrastructure' | 'archive';
export type InventoryStatus = 'verified' | 'approximate';

type LocalizedCopy = Record<LanguageCode, string>;

export interface PortfolioProject {
  id: string;
  name: string;
  period: string;
  category: PortfolioCategory;
  description: LocalizedCopy;
  proof: LocalizedCopy;
  tags: string[];
  href?: string;
  image?: string;
  imagePosition?: string;
  featured?: boolean;
}

export interface InventoryItem {
  number: number;
  id: string;
  title: string;
  period: string;
  era: string;
  lane: InventoryLane;
  status: InventoryStatus;
  summary: LocalizedCopy;
  source: LocalizedCopy;
  href?: string;
  image?: string;
}

export interface LinkedInMediaAsset {
  id: string;
  post: string;
  title: LocalizedCopy;
  image: string;
  proof: LocalizedCopy;
}

export interface EvidenceGap {
  id: string;
  title: LocalizedCopy;
  status: LocalizedCopy;
  nextStep: LocalizedCopy;
}

export interface ProgressionPlanStep {
  id: string;
  order: number;
  title: LocalizedCopy;
  currentState: LocalizedCopy;
  nextProofAction: LocalizedCopy;
  unlocks: LocalizedCopy;
}

const copy = (en: string, es: string, fr = en, zh = en): LocalizedCopy => ({ en, es, fr, zh });

export const categoryCopy: Record<PortfolioCategory, LocalizedCopy> = {
  platforms: copy('Products & platforms', 'Productos y plataformas', 'Produits et plateformes', '产品与平台'),
  agents: copy('Agents, MCP & developer tools', 'Agentes, MCP y herramientas', 'Agents, MCP et outils', '智能体、MCP 与开发工具'),
  applied: copy('Applied & experimental AI', 'IA aplicada y experimental', 'IA appliquée et expérimentale', '应用与实验性 AI'),
  education: copy('Education, media & earlier products', 'Educación, medios y productos anteriores', 'Éducation, médias et produits antérieurs', '教育、媒体与早期产品'),
};

export const inventoryLaneCopy: Record<InventoryLane, LocalizedCopy> = {
  products: copy('Products', 'Productos', 'Produits', '产品'),
  clients: copy('Client & collaboration', 'Clientes y colaboraciones', 'Clients et collaborations', '客户与合作'),
  'open-source': copy('Open source', 'Código abierto', 'Open source', '开源'),
  research: copy('Research & prototypes', 'Investigación y prototipos', 'Recherche et prototypes', '研究与原型'),
  education: copy('Education & publishing', 'Educación y publicaciones', 'Éducation et publications', '教育与出版'),
  infrastructure: copy('Infrastructure & operations', 'Infraestructura y operaciones', 'Infrastructure et opérations', '基础设施与运营'),
  archive: copy('Archive & earlier work', 'Archivo y trabajo anterior', 'Archives et travaux antérieurs', '档案与早期作品'),
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'oulang', name: 'OULANG (欧浪AI)', period: '2026–present', category: 'platforms', featured: true,
    description: copy('Mandarin-first marketplace and local-life platform for Spain, developed across web, iOS and Android surfaces.', 'Marketplace y plataforma de vida local para la comunidad china en España, desarrollada en web, iOS y Android.', 'Marketplace et plateforme locale pour la communauté chinoise en Espagne, développée sur web, iOS et Android.', '面向西班牙华人社区的中文市场与本地生活平台，覆盖 Web、iOS 和 Android 开发。'),
    proof: copy('Live web product plus current native repositories and store workflows; user and revenue metrics require a fresh provider read', 'Producto web activo más repositorios nativos y flujos de tienda; las métricas requieren una lectura actual del proveedor', 'Produit web en ligne, dépôts natifs et flux de store; les métriques exigent une lecture fournisseur actuelle', '线上 Web 产品、原生仓库与商店流程；用户和收入指标需重新读取提供方数据'),
    tags: ['Next.js', 'Expo', 'Gemini', 'RevenueCat', 'PostHog'], href: 'https://oulang.ai', image: '/portfolio/oulang-home.png', imagePosition: 'center 18%'
  },
  {
    id: 'huatong', name: 'Huatong', period: '2026–present', category: 'platforms', featured: true,
    description: copy('Chinese-first jobs, housing, classifieds and local-services platform spanning European markets.', 'Plataforma en chino de empleo, vivienda, clasificados y servicios locales para mercados europeos.', 'Plateforme chinoise d’emploi, logement, petites annonces et services locaux en Europe.', '面向欧洲市场的中文招聘、住房、分类信息与本地服务平台。'),
    proof: copy('Live web product, repositories and current tracker evidence; individual feeds and store states are not inferred', 'Producto web activo, repositorios y tracker actual; no se infieren feeds ni estados de tienda', 'Produit web en ligne, dépôts et suivi actuel; les flux et stores ne sont pas déduits', '线上产品、仓库与当前跟踪证据；不推断单个信息流或商店状态'),
    tags: ['Multilingual', 'Marketplace', 'Mobile'], href: 'https://huatong.eu', image: '/portfolio/huatong-home.png', imagePosition: 'center 14%'
  },
  {
    id: 'autoclient', name: 'AutoClient', period: '2024–present', category: 'platforms',
    description: copy('Agentic research, enrichment, scoring, personalised outreach and CRM follow-up across email, WhatsApp and voice.', 'Investigación agéntica, enriquecimiento, scoring, contacto personalizado y CRM por email, WhatsApp y voz.'),
    proof: copy('Public repositories and two verified @autoclient-ai tutorials', 'Repositorios públicos y dos tutoriales verificados de @autoclient-ai'),
    tags: ['Agents', 'CRM', 'Outreach', 'Voice'], href: 'https://www.youtube.com/@autoclient-ai'
  },
  {
    id: 'autopricing', name: 'AutoPricing / IWAKY delivery', period: '2025–2026', category: 'platforms',
    description: copy('Pricing-intelligence and evidence-report workflow combining marketplace data, product matching and inventory or ERP inputs.', 'Inteligencia de precios e informes de evidencia con datos de marketplaces, matching e inventario o ERP.'),
    proof: copy('Current dashboard, report artifacts and meeting transcripts; demo values are not claimed as results', 'Dashboard, informes y transcripciones actuales; los valores de demo no se presentan como resultados'),
    tags: ['Data pipelines', 'ERP', 'Reports', 'Automation'], image: '/portfolio/autopricing-dashboard.png'
  },
  {
    id: 'oupin', name: 'OUPIN', period: '2026', category: 'platforms',
    description: copy('Chinese-language AI commerce and discovery product focused on recommendation, trust and explainable comparison.', 'Producto chino de comercio y descubrimiento con IA centrado en recomendación, confianza y comparación explicable.'),
    proof: copy('Current repository and real product artwork', 'Repositorio actual y material visual real del producto'),
    tags: ['Commerce', 'Recommendation', 'Trust'], image: '/portfolio/oupin-hero.png'
  },
  {
    id: 'vuda', name: 'VUDA — Visual UI Debug Agent MCP', period: '2025–present', category: 'agents', featured: true,
    description: copy('Open-source agent that captures, annotates and reasons over live interfaces for evidence-based debugging.', 'Agente abierto que captura, anota y razona sobre interfaces reales para depurar con evidencia.', 'Agent open source qui capture, annote et analyse des interfaces réelles.', '开源智能体：捕获、标注并分析真实界面，用证据进行调试。'),
    proof: copy('80 GitHub stars · 7 forks at the current snapshot', '80 estrellas · 7 forks en la instantánea actual', '80 étoiles · 7 forks', '当前 80 星 · 7 forks'),
    tags: ['MCP', 'Computer vision', 'Debugging'], href: 'https://github.com/samihalawa/visual-ui-debug-agent-mcp', image: '/portfolio/vuda-annotated.png', imagePosition: 'center 15%'
  },
  {
    id: 'gowa', name: 'GOWA WhatsApp API / WhatsApp MCP', period: '2025–2026', category: 'agents',
    description: copy('Go-based messaging, chat-history and media integration for operational agents and customer workflows.', 'Mensajería en Go, histórico de chats y medios para agentes operativos y flujos de cliente.'),
    proof: copy('Current public repositories and active integration work', 'Repositorios públicos actuales e integración activa'),
    tags: ['Go', 'WhatsApp', 'MCP', 'Messaging'], href: 'https://github.com/samihalawa/gowa-whatsapp-api'
  },
  {
    id: 'smtp', name: 'MCP Server SMTP / IMAP', period: '2025', category: 'agents',
    description: copy('Email transport and mailbox integration for agentic workflows.', 'Transporte de email e integración de buzones para flujos agénticos.'),
    proof: copy('17 stars · 15 forks at the current snapshot', '17 estrellas · 15 forks en la instantánea actual'),
    tags: ['MCP', 'SMTP', 'IMAP', 'Email'], href: 'https://github.com/samihalawa/mcp-server-smtp'
  },
  {
    id: 'jules', name: 'Google Jules MCP', period: '2025', category: 'agents',
    description: copy('Open-source bridge for coding-agent workflows.', 'Puente open source para flujos con agentes de programación.'),
    proof: copy('14 stars · 7 forks at the current snapshot', '14 estrellas · 7 forks en la instantánea actual'),
    tags: ['MCP', 'Coding agents', 'Automation']
  },
  {
    id: 'telnyx', name: 'Telnyx agentic tooling', period: '2026', category: 'agents',
    description: copy('Voice-agent, telephony, conversation-state and operational integration work packaged as reusable tools.', 'Agentes de voz, telefonía, estado conversacional e integraciones operativas como herramientas reutilizables.'),
    proof: copy('Current 2026 repositories, skills and tested voice-agent workflows', 'Repositorios, skills y flujos de voz probados en 2026'),
    tags: ['Voice AI', 'Telephony', 'Tools']
  },
  {
    id: 'chronicle', name: 'Codex Chronicle / Screenpipe tooling', period: '2026', category: 'agents',
    description: copy('Persistent visual memory, history recovery and analysis workflows for multi-agent work on macOS.', 'Memoria visual persistente, recuperación de historial y análisis multiagente en macOS.'),
    proof: copy('Current local and public tooling used in this portfolio recovery', 'Herramientas actuales usadas en esta recuperación de portfolio'),
    tags: ['Memory', 'Screenpipe', 'Codex', 'macOS']
  },
  {
    id: 'apolo', name: 'APOLO multimodal exploration', period: '2025', category: 'applied',
    description: copy('Public image-text model artifact and architecture exploration based on DeepSeek-VL2-tiny for medical-image workflows.', 'Artefacto público imagen-texto y arquitectura basada en DeepSeek-VL2-tiny para flujos de imagen médica.'),
    proof: copy('Published Hugging Face artifact; research/prototyping only, not clinical validation', 'Artefacto publicado en Hugging Face; investigación/prototipo, no validación clínica'),
    tags: ['Multimodal', 'Vision-language', 'Human review'], href: 'https://huggingface.co/samihalawa/APOLO-medical-multimodal-instruct', image: '/portfolio/apolo-architecture.png'
  },
  {
    id: 'ophthalmology', name: 'Ophthalmology review & reporting', period: '2025–2026', category: 'applied',
    description: copy('Multimodal image-review, longitudinal-tracking and structured PDF-report prototypes with explicit human review.', 'Prototipos de revisión multimodal, seguimiento longitudinal e informes PDF con revisión humana explícita.'),
    proof: copy('Current code/workflow artifacts; no diagnosis or hospital-production claim', 'Artefactos actuales; sin afirmar diagnóstico ni producción hospitalaria'),
    tags: ['Python', 'Gemini', 'Reports']
  },
  {
    id: 'automedical', name: 'AutoMedical Academy', period: '2025', category: 'applied',
    description: copy('AI-assisted medical learning and product experimentation.', 'Aprendizaje médico y experimentación de producto asistidos por IA.'),
    proof: copy('Current repository and educational workflow artifacts', 'Repositorio actual y flujos educativos'),
    tags: ['Education', 'AI workflows']
  },
  {
    id: 'intlaw', name: 'INTLAW AI dashboard', period: '2025', category: 'applied',
    description: copy('Legal-workflow and document or operations prototype developed in a collaboration context.', 'Prototipo de flujos legales, documentos y operaciones desarrollado en colaboración.'),
    proof: copy('Current dashboard/demo artifacts; no client-impact claim', 'Dashboard y demo actuales; sin afirmar impacto de cliente'),
    tags: ['Legal workflows', 'Dashboard', 'Collaboration']
  },
  {
    id: 'recipes', name: 'Recipe intelligence platform', period: '2026', category: 'applied',
    description: copy('Product workflow for turning chef notes and photos into researched, structured, downloadable multilingual recipes.', 'Flujo para convertir notas y fotos de chefs en recetas investigadas, estructuradas, descargables y multilingües.'),
    proof: copy('Recorded product-discovery session and current workflow design; not yet launched', 'Sesión de discovery grabada y diseño actual; todavía no lanzado'),
    tags: ['Document AI', 'Research', 'Multilingual']
  },
  {
    id: 'chinototal', name: 'ChinoTotal', period: 'Published work', category: 'education',
    description: copy('Mandarin-learning book and part of a longer Chinese-language teaching and content practice.', 'Libro para aprender mandarín y parte de una trayectoria más amplia de docencia y contenido en chino.'),
    proof: copy('ISBN 9798873249237', 'ISBN 9798873249237'),
    tags: ['Mandarin', 'Writing', 'Education'], href: 'https://chinototal.com', image: '/portfolio/chinototal-home.png', imagePosition: 'center 25%'
  },
  {
    id: 'earlier', name: 'MelindaAI · KittyAI · Sharedetect · ZebraMenu · Megacursos', period: 'Earlier work', category: 'education',
    description: copy('Historical AI-learning, conversational support, access-control, digital-menu and course-platform work across web and mobile.', 'Trabajo histórico de aprendizaje con IA, soporte conversacional, control de acceso, menú digital y formación en web y móvil.'),
    proof: copy('Preserved across historical CVs and project archives; detailed impact remains unclaimed', 'Preservado en CVs y archivos; no se afirma impacto sin prueba adicional'),
    tags: ['Web', 'Mobile', 'Education', 'Product']
  },
  {
    id: 'pime', name: 'PIME.ai', period: '2025–present', category: 'platforms', featured: true,
    description: copy('Product studio and operating surface for agentic services, including a multilingual EU AI Act readiness pack.', 'Estudio de producto y superficie operativa para servicios agénticos, incluido un pack multilingüe de preparación para la Ley de IA.'),
    proof: copy('Live product surface and current source; commercial outcomes are not inferred', 'Superficie y código actuales; no se infieren resultados comerciales'),
    tags: ['AI services', 'Compliance', 'Multilingual'], href: 'https://pime.ai'
  },
  {
    id: 'agents-ai', name: 'Agents AI Ltd', period: '2025–present', category: 'platforms',
    description: copy('London company and product portfolio spanning healthcare, revenue operations and applied AI systems.', 'Empresa y portfolio de producto en Londres para salud, operaciones comerciales y sistemas de IA aplicada.'),
    proof: copy('Live company surface and official registration link; no investment, award or revenue claim', 'Sitio activo y enlace de registro oficial; sin afirmar inversión, premios ni ingresos'),
    tags: ['Company', 'Products', 'Applied AI'], href: 'https://agentsai.ltd', image: '/portfolio/agentsai-home.png', imagePosition: 'center 20%'
  },
  {
    id: 'autodate', name: 'AutoDate.ai', period: '2025–present', category: 'platforms', featured: true,
    description: copy('Dating-product research and session automation across web and a native iOS build.', 'Investigación de producto y automatización de sesiones de citas en web y una compilación nativa para iOS.'),
    proof: copy('Web live; iOS 1.0.14 (39) was ready to test in TestFlight on 14 Jul 2026 — not an App Store release', 'Web activo; iOS 1.0.14 (39) listo para probar en TestFlight el 14 jul 2026 — no es un lanzamiento en App Store'),
    tags: ['Expo', 'iOS', 'Automation'], href: 'https://autodate.ai', image: '/portfolio/autodate-home.png', imagePosition: 'center 25%'
  },
  {
    id: 'infohuaxin', name: 'InfoHuaxin', period: '2025–present', category: 'platforms',
    description: copy('Connected Chinese-language classifieds and information-platform work with shared infrastructure and product operations.', 'Trabajo conectado de clasificados e información en chino con infraestructura y operaciones de producto compartidas.'),
    proof: copy('Live surface, repositories and eight labelled cashflow rows; no user metric is claimed', 'Superficie activa, repositorios y ocho movimientos etiquetados; sin afirmar métricas de usuarios'),
    tags: ['Marketplace', 'Chinese', 'Operations'], href: 'https://infohuaxin.es', image: '/portfolio/infohuaxin-home.png', imagePosition: 'center 12%'
  },
  {
    id: 'tasky', name: 'Tasky', period: '2026', category: 'platforms',
    description: copy('Native SwiftUI Google Tasks client for macOS, iOS and iPadOS with menu-bar capture, widgets, share and sync.', 'Cliente nativo SwiftUI de Google Tasks para macOS, iOS y iPadOS con captura en barra, widgets, compartir y sincronización.'),
    proof: copy('Source and review attempts verified; OAuth/review blockers mean it is pre-release', 'Código e intentos de revisión verificados; los bloqueos OAuth/revisión lo mantienen en pre-lanzamiento'),
    tags: ['SwiftUI', 'Google Tasks', 'Widgets']
  },
  {
    id: 'umbramed', name: 'Umbramed · Valerio', period: '2025–2026', category: 'applied',
    description: copy('Ionic/Capacitor clinical-study tooling with Sami as technical lead and Dr. Valerio Trigos as clinical lead.', 'Herramientas clínicas y de estudio en Ionic/Capacitor con Sami como responsable técnico y el Dr. Valerio Trigos como responsable clínico.'),
    proof: copy('Current site, repository, design records and four labelled cashflow rows; applications are not awards', 'Sitio, repositorio, documentación y cuatro movimientos etiquetados; las solicitudes no son premios'),
    tags: ['Ionic', 'Capacitor', 'Medical'], href: 'https://umbramed.es', image: '/portfolio/umbramed-home.png', imagePosition: 'center 18%'
  },
  {
    id: 'sort', name: 'SORT / SortBot', period: '2025', category: 'applied',
    description: copy('Proposal and prototype for turning course PDFs into online learning, adding a chatbot and publishing through an existing site.', 'Propuesta y prototipo para convertir PDFs de cursos en formación online, añadir un chatbot y publicar en un sitio existente.'),
    proof: copy('Direct proposal email plus public repository; acceptance and production use remain unconfirmed', 'Email de propuesta y repositorio público; aceptación y uso en producción no confirmados'),
    tags: ['Education', 'Chatbot', 'Content'], href: 'https://github.com/samihalawa/sortbot'
  },
  {
    id: 'san-martin', name: 'San Martín HR automation', period: '2025', category: 'applied',
    description: copy('Commercial proposal for birthday automation, timesheets, work-part rules, talent search and an employee portal.', 'Propuesta comercial para cumpleaños, partes, reglas de trabajo, búsqueda de talento y portal del empleado.'),
    proof: copy('Direct request and proposal verified; no contract, delivery or adoption claim', 'Solicitud y propuesta verificadas; sin afirmar contrato, entrega ni adopción'),
    tags: ['HR', 'Automation', 'Proposal']
  },
  {
    id: 'scope', name: 'Scope · EyeUnit account intelligence', period: '2025–2026', category: 'applied',
    description: copy('Demonstrated prototype for list merging, cross-sell discovery and account scoring using product and clinical-market signals.', 'Prototipo demostrado para unir listas, descubrir venta cruzada y puntuar cuentas con señales de producto y mercado clínico.'),
    proof: copy('Direct shared-prototype email and reply; host is currently gated, with no clinical-deployment claim', 'Email directo del prototipo y respuesta; el host está restringido, sin afirmar despliegue clínico'),
    tags: ['Scoring', 'Medical markets', 'Prototype']
  },
  {
    id: 'notion-drive', name: 'Notion ↔ Google Drive Sync', period: '2026', category: 'agents',
    description: copy('Worker that mirrors Drive content into Notion databases and exports Notion pages back to Drive.', 'Worker que refleja contenido de Drive en bases de Notion y exporta páginas de Notion a Drive.'),
    proof: copy('Public original repository, 3 stars at the 16 Jul 2026 snapshot', 'Repositorio público original, 3 estrellas en la instantánea del 16 jul 2026'),
    tags: ['Notion', 'Google Drive', 'Workers'], href: 'https://github.com/samihalawa/notion-google-drive-sync-worker'
  },
  {
    id: 'macos-optimizer', name: 'macOS Optimizer', period: '2024', category: 'agents',
    description: copy('Open-source shell utility for inspecting and tuning macOS configuration and resource use.', 'Utilidad shell open source para inspeccionar y ajustar configuración y recursos de macOS.'),
    proof: copy('Public original repository, 13 stars and 1 fork at the current snapshot', 'Repositorio público original, 13 estrellas y 1 fork en la instantánea actual'),
    tags: ['macOS', 'Shell', 'Open source'], href: 'https://github.com/samihalawa/macos-optimizer'
  },
  {
    id: 'autorad', name: 'AutoRad', period: '2025', category: 'applied',
    description: copy('Planned radiology workflow product covering PACS/RIS-oriented reporting and review concepts.', 'Producto planificado de radiología con conceptos de revisión e informes orientados a PACS/RIS.'),
    proof: copy('The direct project page says Backlog; no patent, efficacy, adoption or live-product claim', 'La página directa dice Backlog; sin afirmar patentes, eficacia, adopción ni producto activo'),
    tags: ['Radiology', 'Backlog', 'Human review']
  },
  {
    id: 'autocrypto', name: 'AutoCrypto', period: '2024–2025', category: 'applied',
    description: copy('Crypto-automation and PWA product exploration preserved across public and local repositories.', 'Exploración de automatización cripto y producto PWA preservada en repositorios públicos y locales.'),
    proof: copy('Artifact family verified; no capital, return, user or regulatory claim', 'Familia de artefactos verificada; sin afirmar capital, rentabilidad, usuarios ni estado regulatorio'),
    tags: ['PWA', 'Automation', 'Research'], href: 'https://github.com/samihalawa/Autocrypto.ai'
  },
  {
    id: 'sonmade', name: 'SONMADE content factory', period: '2026', category: 'applied',
    description: copy('React/TypeScript prototype using FFmpeg and Sharp to score scenes and extract video highlights.', 'Prototipo React/TypeScript con FFmpeg y Sharp para puntuar escenas y extraer momentos destacados.'),
    proof: copy('Code-level implementation verified; deployment and end-user use remain unconfirmed', 'Implementación a nivel de código verificada; despliegue y uso final no confirmados'),
    tags: ['FFmpeg', 'Sharp', 'Video AI']
  },
  {
    id: 'huggingface-writing', name: 'Hugging Face technical writing', period: '2024–present', category: 'education',
    description: copy('Public writing on agents, prompting, web crawling, browser AI and practical deployment.', 'Escritura pública sobre agentes, prompting, crawling web, IA en navegador y despliegue práctico.'),
    proof: copy('12 public articles enumerated in the current audit', '12 artículos públicos enumerados en la auditoría actual'),
    tags: ['Writing', 'AI agents', 'Hugging Face'], href: 'https://huggingface.co/samihalawa/posts'
  },
  {
    id: 'ai-course', name: 'AI Agent Architecture course', period: '2025–2026', category: 'education',
    description: copy('Fifteen-hour syllabus spanning foundations, tools, memory, multi-agent systems, RAG, deployment and observability.', 'Programa de quince horas sobre fundamentos, herramientas, memoria, multiagentes, RAG, despliegue y observabilidad.'),
    proof: copy('Direct syllabus verified; institution, attendance and outcomes still need primary evidence', 'Programa directo verificado; institución, asistencia y resultados aún requieren evidencia primaria'),
    tags: ['Teaching', 'Agents', 'RAG']
  },
  {
    id: 'language-media', name: 'Chinese soundscapes & poetry audio', period: '2017–2026', category: 'education',
    description: copy('Original poetry, Chinese onomatopoeia decks, printable exercises, vocabulary cards and generated poetry audio.', 'Poesía original, materiales de onomatopeyas chinas, ejercicios, tarjetas de vocabulario y audio de poesía generado.'),
    proof: copy('72-poem source collection plus current PDFs, slides and audio manifests', 'Colección fuente de 72 poemas más PDFs, diapositivas y manifiestos de audio actuales'),
    tags: ['Poetry', 'Chinese', 'Audio']
  }
];

const inventoryItem = (
  number: number,
  id: string,
  title: string,
  period: string,
  era: string,
  lane: InventoryLane,
  status: InventoryStatus,
  en: string,
  es: string,
  sourceEn: string,
  sourceEs: string,
  href?: string,
  image?: string,
): InventoryItem => ({ number, id, title, period, era, lane, status, summary: copy(en, es), source: copy(sourceEn, sourceEs), href, image });

export const PORTFOLIO_INVENTORY: InventoryItem[] = [
  inventoryItem(1, 'timeline-realsintra', 'RealSintra', '2023', '2023', 'archive', 'verified', 'Early public software artifact.', 'Artefacto público temprano de software.', 'Public original repository.', 'Repositorio público original.', 'https://github.com/samihalawa/realsintra'),
  inventoryItem(2, 'timeline-chatgpt-react-es', 'Mi ChatGPT React Español', '2023', '2023', 'products', 'verified', 'Spanish React interface and ChatGPT experiment.', 'Interfaz React en español y experimento con ChatGPT.', 'Public original repository.', 'Repositorio público original.', 'https://github.com/samihalawa/michatgptreactespanol'),
  inventoryItem(3, 'timeline-openai-files', 'OpenAI / GPT files & experiments', '2023', '2023', 'research', 'verified', 'Early GPT file and workflow experiments.', 'Primeros experimentos con archivos y flujos GPT.', 'Public original repository; internal experiments remain grouped.', 'Repositorio público original; los experimentos internos se agrupan.', 'https://github.com/samihalawa/archivosopenedgptc'),
  inventoryItem(4, 'timeline-damesender', 'DameSender continuity', '2020–2023', '2023', 'products', 'verified', 'Email and outreach product lineage connecting to later agent work.', 'Línea de producto de email y outreach conectada con el trabajo posterior de agentes.', 'Earliest observed public original repository.', 'Primer repositorio público original observado.', 'https://github.com/samihalawa/damesender'),

  inventoryItem(5, 'timeline-aprende-ia', 'Aprende IA / IA Megacursos', '2024', '2024', 'education', 'verified', 'AI education, course production and teaching materials.', 'Educación en IA, producción de cursos y materiales docentes.', 'Local repositories and course artifacts; learner outcomes unconfirmed.', 'Repositorios locales y materiales; resultados de alumnos no confirmados.'),
  inventoryItem(6, 'timeline-menu-editor', 'MenuEditorElectron', '2024', '2024', 'products', 'verified', 'Desktop-software project from the 2024 public repository wave.', 'Proyecto de escritorio de la ola pública de 2024.', 'Repository exists; exact client or use case needs README-level recovery.', 'El repositorio existe; falta recuperar el caso de uso exacto.'),
  inventoryItem(7, 'timeline-ai-absolut', 'AI Absolut & prompt research', '2024', '2024', 'research', 'verified', 'Applied prompt, system and model experimentation.', 'Experimentación aplicada con prompts, sistemas y modelos.', 'GitHub and Hugging Face artifacts; not framed as a validated company.', 'Artefactos en GitHub y Hugging Face; no se presenta como empresa validada.'),
  inventoryItem(8, 'timeline-email-crawler', 'Email crawler & lead tooling', '2024', '2024', 'open-source', 'verified', 'Crawling and email-automation tooling.', 'Herramientas de crawling y automatización de email.', 'Public/local repositories; no deliverability or conversion claim.', 'Repositorios públicos/locales; sin afirmar entregabilidad ni conversión.'),
  inventoryItem(9, 'timeline-macos-optimizer', 'macOS Optimizer', '2024', '2024', 'open-source', 'verified', 'Open-source utility for inspecting and tuning macOS.', 'Utilidad open source para inspeccionar y ajustar macOS.', '13 stars and 1 fork at the 16 Jul 2026 snapshot.', '13 estrellas y 1 fork en la instantánea del 16 jul 2026.', 'https://github.com/samihalawa/macos-optimizer'),
  inventoryItem(10, 'timeline-cloudflaredme', 'CloudflaredMe', '2024', '2024', 'infrastructure', 'verified', 'Developer-infrastructure artifact around tunnels and deployment.', 'Artefacto de infraestructura para túneles y despliegue.', 'Public repository; feature copy follows the repository.', 'Repositorio público; las funciones se limitan a lo documentado.'),
  inventoryItem(11, 'timeline-rafael-botella', 'Rafael Botella work', '2024–2025', '2024', 'clients', 'verified', 'Paid client relationship with delivery scope still unresolved.', 'Relación de cliente pagada con alcance aún por resolver.', 'Five labelled cashflow rows totaling €14,270; not a bank audit.', 'Cinco movimientos etiquetados por €14.270; no es auditoría bancaria.'),
  inventoryItem(12, 'timeline-autocrypto', 'AutoCrypto', '2024–2025', '2024', 'research', 'verified', 'Crypto automation and PWA product exploration.', 'Exploración de producto PWA y automatización cripto.', 'Public/local artifact family; no returns, capital or user claim.', 'Familia pública/local; sin afirmar rentabilidad, capital ni usuarios.', 'https://github.com/samihalawa/Autocrypto.ai'),
  inventoryItem(13, 'timeline-audio-tools', 'Audio & transcription tooling', '2024–present', '2024', 'open-source', 'verified', 'Speech, audio, transcription and multimodal workflow tools.', 'Herramientas de voz, audio, transcripción y flujos multimodales.', 'Multiple repository families plus current recording workflows.', 'Varias familias de repositorios y flujos actuales de grabación.'),
  inventoryItem(14, 'timeline-productivity', 'KittyTasks / FocusOnTask', '2024', '2024', 'products', 'verified', 'Productivity-app experiments preserved in repository history.', 'Experimentos de productividad preservados en el historial de repositorios.', 'Artifact existence verified; distribution status unconfirmed.', 'Existencia verificada; distribución no confirmada.'),
  inventoryItem(15, 'timeline-autoclient-seed', 'AutoClient seed work', '2024', '2024', 'products', 'verified', 'Early automated client-acquisition product direction.', 'Inicio de la dirección de producto de captación automatizada.', 'First-year repositories and local roots.', 'Repositorios del primer año y raíces locales.'),
  inventoryItem(16, 'timeline-generative-experiments', 'InfiniteStorageFace / Pollinations', '2024', '2024', 'research', 'verified', 'Generative-interface and storage experiments.', 'Experimentos de interfaces generativas y almacenamiento.', 'Repository artifacts; no active-product claim.', 'Artefactos de repositorio; sin afirmar producto activo.'),
  inventoryItem(17, 'timeline-video-medsam', 'AutoVideo / MedSAM / AutoTraining', '2024', '2024', 'research', 'verified', 'Generative video, segmentation and training workflows.', 'Flujos de vídeo generativo, segmentación y entrenamiento.', 'Separate prototype families, not one deployed medical platform.', 'Familias de prototipos separadas, no una plataforma médica desplegada.'),
  inventoryItem(18, 'timeline-autoiol', 'AutoIOL', '2024', '2024', 'research', 'verified', 'Ophthalmology-oriented software and AI artifacts.', 'Artefactos de software e IA orientados a oftalmología.', 'Repository and medical-project history; clinical status unconfirmed.', 'Repositorio e historial médico; estado clínico no confirmado.'),
  inventoryItem(19, 'timeline-speakingai', 'SpeakingAI', '2024', '2024', 'research', 'verified', 'Speech and AI product artifact.', 'Artefacto de producto de voz e IA.', 'Public/local repository evidence; live status unresolved.', 'Evidencia pública/local; estado activo por resolver.'),
  inventoryItem(20, 'timeline-autoclient-monorepo', 'AutoClient monorepo & workers', '2024–2025', '2024', 'products', 'verified', 'Expansion into a multi-service automation and worker platform.', 'Expansión a una plataforma de automatización y workers.', 'Repositories verify components; they remain one product family.', 'Los repositorios verifican componentes; siguen siendo una familia.'),
  inventoryItem(21, 'timeline-eyeunit', 'EyeUnit / Fernando Ly', '2024–2026', '2024', 'clients', 'verified', 'Medical AI, OCT and account-intelligence collaboration.', 'Colaboración en IA médica, OCT e inteligencia de cuentas.', '15 labelled cashflow rows totaling €32,200.28 plus Gmail and Drive evidence.', '15 movimientos por €32.200,28 más evidencia en Gmail y Drive.'),
  inventoryItem(22, 'timeline-daniel-parisi', 'Daniel Parisi engagement', '2024', '2024', 'clients', 'verified', 'Small paid engagement with deliverable still unresolved.', 'Pequeño encargo pagado con entregable aún por resolver.', 'One €250 cashflow row.', 'Un movimiento de €250.'),
  inventoryItem(23, 'timeline-light-funnels', 'Light Funnels work', '2024', '2024', 'clients', 'approximate', 'AI classes or lead-generation work; the sources conflict.', 'Clases de IA o captación; las fuentes entran en conflicto.', 'Two cashflow rows totaling €2,300; invoice attachments must resolve scope.', 'Dos movimientos por €2.300; las facturas deben resolver el alcance.'),
  inventoryItem(24, 'timeline-hf-writing-start', 'Hugging Face writing begins', '2024', '2024', 'education', 'verified', 'Public technical writing on agents, prompting and deployment.', 'Escritura técnica pública sobre agentes, prompting y despliegue.', '12 public articles are currently enumerated.', 'Actualmente se enumeran 12 artículos públicos.', 'https://huggingface.co/samihalawa/posts'),
  inventoryItem(25, 'timeline-colab', 'Colab research archive', '2024–present', '2024', 'research', 'verified', 'Large notebook archive spanning AI, automation and experiments.', 'Archivo amplio de notebooks de IA, automatización y experimentos.', 'At least 112 direct rows; the main folder hit the 100-row connector cap.', 'Al menos 112 filas; la carpeta principal alcanzó el límite de 100.'),

  inventoryItem(26, 'timeline-sort', 'SORT / SortBot', 'Jan–Feb 2025', '2025 Q1', 'clients', 'verified', 'Course-PDF digitisation, chatbot and publishing proposal plus prototype.', 'Propuesta y prototipo para digitalizar PDFs, chatbot y publicación.', 'Direct email and public repository; acceptance unconfirmed.', 'Email directo y repositorio; aceptación no confirmada.', 'https://github.com/samihalawa/sortbot'),
  inventoryItem(27, 'timeline-autohsk', 'AutoHSK & language tools', '2025', '2025 Q1', 'education', 'verified', 'AI-assisted Chinese-language study tools.', 'Herramientas de estudio de chino asistidas por IA.', 'Project artifacts connect language teaching to software.', 'Los artefactos conectan la enseñanza de idiomas con software.'),
  inventoryItem(28, 'timeline-blog-system', 'Blog & content systems', '2025–present', '2025 Q1', 'education', 'verified', 'Technical publishing, content automation and the current article system.', 'Publicación técnica, automatización de contenido y sistema actual de artículos.', 'Site and repository evidence; counts come only from enumerated posts.', 'Evidencia del sitio y repositorios; los recuentos se enumeran.'),
  inventoryItem(29, 'timeline-smtp', 'SMTP MCP Server', '2025', '2025 Q1', 'open-source', 'verified', 'SMTP and mailbox integration for agent workflows.', 'Integración SMTP y de buzones para flujos con agentes.', '17 stars and 15 forks at the current snapshot.', '17 estrellas y 15 forks en la instantánea actual.', 'https://github.com/samihalawa/mcp-server-smtp'),
  inventoryItem(30, 'timeline-mcp-suite', 'Shell, browser & diff MCP tools', '2025', '2025 Q1', 'open-source', 'verified', 'Command, browser and editing integrations for AI agents.', 'Integraciones de comandos, navegador y edición para agentes.', 'Full public-original list is preserved in the evidence appendix.', 'La lista pública original completa se conserva en el apéndice.'),
  inventoryItem(31, 'timeline-ophthalmology', 'Ophthalmology workflows', '2025–2026', '2025 Q1', 'research', 'verified', 'Ophthalmic image review, reporting and intelligence workflows.', 'Flujos oftalmológicos de revisión, informes e inteligencia.', 'Repositories, Gmail and Drive; no clinical-deployment claim.', 'Repositorios, Gmail y Drive; sin afirmar despliegue clínico.'),
  inventoryItem(32, 'timeline-hf-articles', 'Hugging Face article archive', '2024–2025', '2025 Q1', 'education', 'verified', 'A dated archive of 12 public technical articles.', 'Archivo fechado de 12 artículos técnicos públicos.', 'Every current article page was enumerated.', 'Se enumeró cada página pública actual.', 'https://huggingface.co/samihalawa/posts'),

  inventoryItem(33, 'timeline-apolo', 'APOLO multimodal model artifact', 'Apr 2025', '2025 Q2', 'research', 'verified', 'Medical image-text model artifact based on a multimodal architecture.', 'Artefacto de modelo médico imagen-texto con arquitectura multimodal.', 'Official Hugging Face API: one model, 2 likes, 0 downloads at snapshot.', 'API oficial: un modelo, 2 likes, 0 descargas.', 'https://huggingface.co/samihalawa/APOLO-medical-multimodal-instruct'),
  inventoryItem(34, 'timeline-vuda', 'VUDA — Visual UI Debug Agent', 'May 2025', '2025 Q2', 'open-source', 'verified', 'Visual evidence capture and reasoning for interface debugging.', 'Captura y razonamiento visual para depurar interfaces.', '80 stars and 7 forks at the current snapshot.', '80 estrellas y 7 forks en la instantánea actual.', 'https://github.com/samihalawa/visual-ui-debug-agent-mcp'),
  inventoryItem(35, 'timeline-education-products', 'AutoTutorial / MentorIA / PerfectPrompter', '2025', '2025 Q2', 'education', 'verified', 'Guided learning and prompting product experiments.', 'Experimentos de aprendizaje guiado y prompting.', 'Project families verified; active deployments unconfirmed.', 'Familias verificadas; despliegues activos no confirmados.'),
  inventoryItem(36, 'timeline-wordlist', 'Wordlist Visual engagement', '2025', '2025 Q2', 'clients', 'verified', 'Paid client work with exact deliverables still to be reconciled.', 'Trabajo de cliente pagado con entregables aún por conciliar.', 'Eight cashflow rows totaling €24,800.', 'Ocho movimientos por €24.800.'),
  inventoryItem(37, 'timeline-scope', 'Scope account intelligence', 'Jul 2025', '2025 Q2', 'clients', 'verified', 'Cross-sell discovery and account scoring prototype.', 'Prototipo de venta cruzada y puntuación de cuentas.', 'Direct shared-prototype email and positive reply; current host is gated.', 'Email directo y respuesta positiva; host actualmente restringido.'),
  inventoryItem(38, 'timeline-fernando', 'Fernando Ly medical AI research', '2025–2026', '2025 Q2', 'clients', 'verified', 'Applied medical, OCT and market-intelligence collaboration.', 'Colaboración aplicada en medicina, OCT e inteligencia de mercado.', 'Direct OCTbot and Scope threads; production adoption unconfirmed.', 'Hilos directos OCTbot y Scope; adopción en producción no confirmada.'),
  inventoryItem(39, 'timeline-autoclient-expand', 'AutoClient expands', '2025', '2025 Q2', 'products', 'verified', 'Agentic acquisition platform with research, scoring and multichannel follow-up.', 'Plataforma agéntica de captación con investigación, scoring y seguimiento multicanal.', 'Repositories, Drive materials and Lanzadera evidence; public domains are currently gated/404.', 'Repositorios, Drive y Lanzadera; dominios públicos restringidos/404.'),
  inventoryItem(40, 'timeline-mcp-wave', 'MCP open-source wave', '2025', '2025 Q2', 'open-source', 'verified', 'Concentrated release period for agent integration tools.', 'Periodo concentrado de publicación de integraciones para agentes.', 'Public-original repository census.', 'Censo de repositorios públicos originales.', 'https://github.com/samihalawa?tab=repositories'),
  inventoryItem(41, 'timeline-agents-ai', 'Agents AI Ltd', '2025–present', '2025 Q2', 'products', 'verified', 'Company and delivery vehicle for AI product and client work.', 'Empresa y vehículo de entrega para producto y clientes de IA.', 'Live company surface and signed-contract identification; filing detail kept minimal.', 'Sitio activo e identificación contractual; detalles registrales mínimos.', 'https://agentsai.ltd', '/portfolio/agentsai-home.png'),
  inventoryItem(42, 'timeline-lanzadera', 'Lanzadera ecosystem participation', '2025', '2025 Q2', 'clients', 'verified', 'AutoClient participation in Lanzadera startup and partner benefits.', 'Participación de AutoClient en el ecosistema y beneficios de Lanzadera.', 'Direct AWS Activate email to Lanzadera startups; no award, rank or investment claim.', 'Email directo de AWS Activate; sin afirmar premio, puesto ni inversión.'),

  inventoryItem(43, 'timeline-automedical-packaging', 'APOLO / AutoMedical packaging', '2025', '2025 Q3', 'products', 'verified', 'Packaging of medical AI research into a public product surface.', 'Empaquetado de investigación médica en una superficie pública.', 'Repositories and live AutoMedical site; efficacy remains unclaimed.', 'Repositorios y sitio AutoMedical activo; sin afirmar eficacia.', 'https://automedical.ai'),
  inventoryItem(44, 'timeline-agent-utilities', 'Agent utilities & operating tools', '2025', '2025 Q3', 'open-source', 'verified', 'Automation, memory, browser and deployment utilities.', 'Utilidades de automatización, memoria, navegador y despliegue.', 'Public/local repository census.', 'Censo de repositorios públicos/locales.'),
  inventoryItem(45, 'timeline-autorad', 'AutoRad', '2025', '2025 Q3', 'research', 'approximate', 'Planned radiology workflow product.', 'Producto planificado para flujos de radiología.', 'Direct project page says Backlog; efficacy, patents and live status unverified.', 'La página dice Backlog; eficacia, patentes y estado activo no verificados.'),
  inventoryItem(46, 'timeline-sites', 'Personal & company sites', '2025–present', '2025 Q3', 'infrastructure', 'verified', 'Identity, product, publishing and company-site engineering.', 'Ingeniería de identidad, producto, publicación y sitios corporativos.', 'Repositories and current live-domain probes.', 'Repositorios y comprobaciones actuales de dominios.'),
  inventoryItem(47, 'timeline-whatsapp-mcp', 'WhatsApp MCP / automation', '2025–present', '2025 Q3', 'open-source', 'verified', 'Messaging, history and media integrations for agent workflows.', 'Integraciones de mensajería, historial y medios para agentes.', 'Public repositories; code availability is separate from message delivery.', 'Repositorios públicos; el código no prueba entrega de mensajes.', 'https://github.com/samihalawa/whatsapp-go-mcp'),

  inventoryItem(48, 'timeline-iwaky', 'IWAKY / AutoPricing signed scope', 'Oct 2025–2026', '2025 Q4', 'clients', 'verified', 'Pricing, marketplace acquisition, WhatsApp analysis, ERP commerce and dashboard scope.', 'Alcance de pricing, captación, análisis de WhatsApp, ERP, comercio y dashboard.', 'Signed €35,000 contract and €17,500 cashflow receipt; completion and final payment unconfirmed.', 'Contrato firmado de €35.000 y €17.500 registrados; finalización y pago final no confirmados.'),
  inventoryItem(49, 'timeline-intlaw', 'INTLAW legal AI', 'Oct 2025–Jun 2026', '2025 Q4', 'clients', 'verified', 'Legal intake, prospecting and multi-agent case-file analysis demonstration.', 'Demostración de captación, intake y análisis jurídico multiagente.', 'Notion hub, public repo, Hugging Face Space and proposal emails; no signed contract claim.', 'Hub, repo, Space y emails; sin afirmar contrato firmado.', 'https://github.com/samihalawa/intlaw-demo'),
  inventoryItem(50, 'timeline-san-martin', 'San Martín HR automation proposal', 'Oct 2025', '2025 Q4', 'clients', 'verified', 'HR workflows covering timesheets, work rules, talent and employee portal.', 'Flujos de RRHH para partes, reglas, talento y portal del empleado.', 'Direct request and proposal; adoption unconfirmed.', 'Solicitud y propuesta directas; adopción no confirmada.'),
  inventoryItem(51, 'timeline-umbramed', 'Umbramed / Valerio', '2025–2026', '2025 Q4', 'clients', 'verified', 'Clinical-study tooling with Sami as technical lead.', 'Herramientas clínicas con Sami como responsable técnico.', 'Site, repository, design records and €6,700 labelled cashflow; applications are not awards.', 'Sitio, repositorio, documentación y €6.700 etiquetados; solicitudes no son premios.', 'https://umbramed.es', '/portfolio/umbramed-home.png'),
  inventoryItem(52, 'timeline-autotinder', 'AutoTinder / AutoDate design', '2025', '2025 Q4', 'research', 'approximate', 'Extensive product-design and automation specifications.', 'Especificaciones amplias de diseño y automatización.', 'Architecture pages and repositories; mock testimonials and pricing are excluded.', 'Páginas y repositorios; se excluyen testimonios y precios simulados.'),
  inventoryItem(53, 'timeline-prototype-wave', 'Prototype portfolio wave', '2025', '2025 Q4', 'archive', 'verified', 'AutoProposal, AuraAI, HealthGuard, MessageFlow, PriceIntel, AutoMedical Academy and many smaller artifacts.', 'AutoProposal, AuraAI, HealthGuard, MessageFlow, PriceIntel, AutoMedical Academy y otros artefactos.', 'Public/local artifact families; upstream references are not claimed as original work.', 'Familias públicas/locales; referencias upstream no se reclaman como propias.'),
  inventoryItem(54, 'timeline-poetry', 'Sami Halawa poetry website', '2017–2025', '2025 Q4', 'education', 'verified', 'Web collection of 72 original poems written from 2017 to 2022.', 'Colección web de 72 poemas originales escritos entre 2017 y 2022.', 'Repository README and poem data source; audio was a TODO in the 2025 repo.', 'README y fuente de poemas; el audio era TODO en 2025.'),
  inventoryItem(55, 'timeline-lemon-ai', 'Lemon AI customization', 'Nov 2025', '2025 Q4', 'infrastructure', 'verified', 'Deployment, landing page, identity and infrastructure work on the upstream Lemon AI platform.', 'Despliegue, landing, identidad e infraestructura sobre Lemon AI upstream.', 'Local repository; upstream authorship is explicitly preserved.', 'Repositorio local; la autoría upstream se preserva.'),
  inventoryItem(56, 'timeline-agents-course', '15-hour AI agents course', '2025', '2025 Q4', 'education', 'verified', 'Foundations, tools, memory, multi-agent systems, RAG, deployment and observability.', 'Fundamentos, herramientas, memoria, multiagentes, RAG, despliegue y observabilidad.', 'Direct Notion syllabus; delivery dates and outcomes remain unconfirmed.', 'Programa directo; fechas y resultados no confirmados.'),

  inventoryItem(57, 'timeline-oulang-central', 'OULANG central production platform', '2026–present', '2026 Q1', 'products', 'verified', 'Chinese-diaspora housing, jobs, second-hand, services and community platform in Spain.', 'Plataforma para la diáspora china en España: vivienda, empleo, segunda mano, servicios y comunidad.', 'Current repositories, tracker, store artifacts and live domain.', 'Repositorios, tracker, artefactos de tienda y dominio activo.', 'https://oulang.ai', '/portfolio/oulang-home.png'),
  inventoryItem(58, 'timeline-oulang-metrics', 'OULANG metrics & commercial claims', '2026', '2026 Q1', 'products', 'approximate', 'Analytics, payments and store surfaces exist, but live figures require current provider reads.', 'Existen analítica, pagos y tiendas, pero las cifras requieren lectura actual del proveedor.', 'Provider surfaces identified; no stale metric is repeated here.', 'Proveedores identificados; no se repite una métrica obsoleta.'),
  inventoryItem(59, 'timeline-umbramed-continuation', 'Umbramed continuation', '2026', '2026 Q1', 'clients', 'verified', 'Continued technical, site and application work.', 'Continuación del trabajo técnico, del sitio y de solicitudes.', '2026 repository and site; applications remain applications.', 'Repositorio y sitio de 2026; las solicitudes siguen siendo solicitudes.', 'https://github.com/samihalawa/umbramed-eic-2026'),
  inventoryItem(60, 'timeline-skills', 'Skills & tooling publishing', '2026', '2026 Q1', 'open-source', 'verified', 'Reusable agent skills, browser, desktop and MCP infrastructure.', 'Skills reutilizables, navegador, escritorio e infraestructura MCP.', 'Public repository wave and local skill census.', 'Ola pública y censo local de skills.'),
  inventoryItem(61, 'timeline-gowa', 'GOWA', '2026', '2026 Q1', 'open-source', 'verified', 'WhatsApp API and automation work with history and media support.', 'API y automatización de WhatsApp con historial y medios.', 'Public/local repositories and tracker; API acceptance is not outbound proof.', 'Repositorios y tracker; aceptación API no prueba envío.', 'https://github.com/samihalawa/gowa-whatsapp-api'),
  inventoryItem(62, 'timeline-notion-drive', 'Notion–Drive synchronization', '2026', '2026 Q1', 'open-source', 'verified', 'Bidirectional content mirroring between Google Drive and Notion.', 'Sincronización bidireccional entre Google Drive y Notion.', 'Public repository, 3 stars at snapshot, plus direct mirror evidence.', 'Repositorio público, 3 estrellas y evidencia directa.', 'https://github.com/samihalawa/notion-google-drive-sync-worker'),

  inventoryItem(63, 'timeline-oulang-native', 'OULANG web, iOS & Android', '2026', '2026 Q2', 'products', 'verified', 'Native and web development across marketplace, payments, SEO and analytics.', 'Desarrollo web y nativo de marketplace, pagos, SEO y analítica.', 'Repository, store and provider evidence; exact store stages stay explicit.', 'Evidencia de repositorio, tienda y proveedores; etapas explícitas.', 'https://oulang.ai'),
  inventoryItem(64, 'timeline-huatong', 'Huatong', '2026', '2026 Q2', 'products', 'verified', 'Multilingual jobs, housing and services platform for European Chinese communities.', 'Plataforma multilingüe de empleo, vivienda y servicios para comunidades chinas europeas.', 'Live domain, repositories and Linear evidence.', 'Dominio activo, repositorios y Linear.', 'https://huatong.eu', '/portfolio/huatong-home.png'),
  inventoryItem(65, 'timeline-infohuaxin', 'InfoHuaxin', '2025–2026', '2026 Q2', 'clients', 'verified', 'Connected Chinese-language classifieds and information platform.', 'Plataforma conectada de clasificados e información en chino.', 'Live surface, repositories and €12,400 across eight labelled rows.', 'Sitio activo, repositorios y €12.400 en ocho movimientos.', 'https://infohuaxin.es', '/portfolio/infohuaxin-home.png'),
  inventoryItem(66, 'timeline-oupin', 'OUPIN', '2026', '2026 Q2', 'products', 'verified', 'Multilingual commerce and discovery product with shared identity infrastructure.', 'Producto multilingüe de comercio y descubrimiento con identidad compartida.', 'Repositories and tracker issues; production domain and user metrics unconfirmed.', 'Repositorios y tracker; dominio y métricas no confirmados.', undefined, '/portfolio/oupin-hero.png'),
  inventoryItem(67, 'timeline-actors', 'Crawlab / Apify actor fleet', '2026', '2026 Q2', 'infrastructure', 'verified', 'Scraping actors, central storage and consumers across OULANG, Huatong and OUPIN.', 'Actores de scraping, almacenamiento central y consumidores para OULANG, Huatong y OUPIN.', 'Repositories and current infrastructure work; actor and record counts unconfirmed.', 'Repositorios e infraestructura; recuentos no confirmados.'),
  inventoryItem(68, 'timeline-chronicle', 'Codex Chronicle / Screenpipe', '2026', '2026 Q2', 'infrastructure', 'verified', 'Evidence-first visual memory and cross-session history recovery.', 'Memoria visual y recuperación histórica con enfoque de evidencia.', 'Local skills and Screenpipe database; capture begins 2 Jun and health is degraded.', 'Skills locales y base Screenpipe; captura desde 2 jun con salud degradada.'),
  inventoryItem(69, 'timeline-telnyx', 'Telnyx voice tooling', '2026', '2026 Q2', 'open-source', 'verified', 'Voice, telephony and conversation-state integrations.', 'Integraciones de voz, telefonía y estado conversacional.', 'Public toolkits; queue acceptance is not call completion.', 'Toolkits públicos; una cola aceptada no prueba llamada completa.', 'https://github.com/samihalawa/telnyx-agentic'),
  inventoryItem(70, 'timeline-desktop-ops', 'Desktop Commander & operations skills', '2026', '2026 Q2', 'open-source', 'verified', 'Mac, browser, CRM and deployment workflow automation.', 'Automatización de flujos Mac, navegador, CRM y despliegue.', 'Local/public skill families; representative tools are curated.', 'Familias locales/públicas; se curan herramientas representativas.'),
  inventoryItem(71, 'timeline-madridresorts', 'MadridResorts', '2026', '2026 Q2', 'archive', 'verified', 'Project and repository lane preserved in the inventory.', 'Línea de proyecto y repositorio preservada en el inventario.', 'Repository existence verified; scope, client and deployment unresolved.', 'Existencia verificada; alcance, cliente y despliegue por resolver.'),
  inventoryItem(72, 'timeline-vibracode', 'VibraCode', '2026', '2026 Q2', 'products', 'verified', 'Live software product surface with current repository work.', 'Superficie de producto activa con trabajo actual de repositorio.', 'Live page renders the expected product.', 'La página activa muestra el producto esperado.', 'https://vibracode.megawebs.com'),
  inventoryItem(73, 'timeline-automedical-live', 'AutoMedical live surface', '2026', '2026 Q2', 'products', 'verified', 'Public medical-AI product and education surface.', 'Superficie pública de producto y educación médica con IA.', 'Live page verified; no clinical results are inferred.', 'Página activa verificada; sin inferir resultados clínicos.', 'https://automedical.ai'),
  inventoryItem(74, 'timeline-public-surfaces', 'Personal, company & publishing surfaces', '2026', '2026 Q2', 'infrastructure', 'verified', 'samihalawa.com, PIME.ai, Agents AI and ChinoTotal identity surfaces.', 'Superficies de identidad de samihalawa.com, PIME.ai, Agents AI y ChinoTotal.', 'Each expected page returned 200 in the 16 Jul snapshot.', 'Cada página esperada devolvió 200 el 16 jul.', 'https://samihalawa.com'),
  inventoryItem(75, 'timeline-tasky', 'Tasky', '2026', '2026 Q2', 'products', 'verified', 'SwiftUI Google Tasks client for macOS, iOS and iPadOS.', 'Cliente SwiftUI de Google Tasks para macOS, iOS y iPadOS.', 'Source and review attempts verified; pre-release due to OAuth/review blockers.', 'Código e intentos verificados; pre-lanzamiento por bloqueos OAuth/revisión.'),
  inventoryItem(76, 'timeline-tutoring', 'AI tutoring / ITE / TusClases', '2026', '2026 Q2', 'education', 'verified', 'Course proposals and tooling for generative AI, automation, agents, n8n and multimodal content.', 'Propuestas y herramientas para IA generativa, automatización, agentes, n8n y contenido multimodal.', 'Inbound recruitment, negotiation and repositories; prospects are not delivered classes.', 'Reclutamiento, negociación y repositorios; prospectos no equivalen a clases impartidas.'),
  inventoryItem(77, 'timeline-world-cup', 'OULANG World Cup / sports-live module', '2026', '2026 Q2', 'products', 'verified', 'Predictions, leaderboard, standings, results and live-room/source flows.', 'Predicciones, clasificación, resultados y flujos de sala/fuente en vivo.', 'Implemented in current Expo source; live feed and conversion unverified.', 'Implementado en el código Expo; feed y conversión no verificados.'),
  inventoryItem(78, 'timeline-sonmade', 'SONMADE content factory', '2026', '2026 Q2', 'research', 'verified', 'FFmpeg/Sharp scene analysis and highlight extraction prototype.', 'Prototipo de análisis de escenas y extracción con FFmpeg/Sharp.', 'Code-level proof; deployment and end-user use unconfirmed.', 'Prueba a nivel de código; despliegue y uso final no confirmados.'),

  inventoryItem(79, 'timeline-autodate-live', 'AutoDate web & TestFlight', 'Jul 2026', '2026 Q3', 'products', 'verified', 'Live web product and an iOS build ready for TestFlight testing.', 'Producto web activo y compilación iOS lista para TestFlight.', 'Apple email: version 1.0.14 (39), ready to test 14 Jul; not App Store release.', 'Email de Apple: 1.0.14 (39), lista el 14 jul; no App Store.', 'https://autodate.ai', '/portfolio/autodate-home.png'),
  inventoryItem(80, 'timeline-recipes', 'Recipe intelligence with José Olivares', 'Jul 2026', '2026 Q3', 'research', 'verified', 'Upload chef notes, structure and research recipes, translate, publish and generate media.', 'Subir notas, estructurar e investigar recetas, traducir, publicar y generar medios.', '8 Jul Meet product-discovery recording; no finished-product claim.', 'Grabación de discovery del 8 jul; sin afirmar producto terminado.'),
  inventoryItem(81, 'timeline-oulang-parity', 'OULANG native parity', 'Jul 2026', '2026 Q3', 'products', 'verified', 'Continued native parity, marketplace, payment and store work.', 'Continuación de paridad nativa, marketplace, pagos y tiendas.', 'Active repository and store workflows; exact review status needs console read.', 'Repositorio y flujos activos; el estado exacto requiere consola.'),
  inventoryItem(82, 'timeline-ea-housing', 'EA Housing / Radio Inter proposals', 'Jul 2026', '2026 Q3', 'clients', 'verified', 'Modular proposal package for separate companies and a group option.', 'Paquete modular para empresas separadas y opción de grupo.', 'Current proposal repository; no signed contract, payment or delivery.', 'Repositorio actual; sin contrato firmado, pago ni entrega.'),
  inventoryItem(83, 'timeline-language-artifacts', 'Chinese soundscapes & poetry audio', '2026', '2026 Q3', 'education', 'verified', 'Onomatopoeia deck, exercises, vocabulary cards, bilingual materials and poetry audio.', 'Deck de onomatopeyas, ejercicios, tarjetas, materiales bilingües y audio de poesía.', 'Current PDFs, slides, source collection and audio manifests.', 'PDFs, diapositivas, colección y manifiestos actuales.'),
  inventoryItem(84, 'timeline-ai-act', 'PIME.ai EU AI Act pack', 'Jul 2026', '2026 Q3', 'products', 'verified', 'Multilingual fixed-price readiness pack with training and roadmap.', 'Pack multilingüe de precio fijo con formación y hoja de ruta.', 'Current source and live product surface; sales outcomes unverified.', 'Código y superficie activa; ventas no verificadas.', 'https://pime.ai/ai-act'),
  inventoryItem(85, 'timeline-private-artifacts', 'ClipKing / UseraLegal / Aida Facturas / IRSushi', '2026', '2026 Q3', 'archive', 'verified', 'Additional private and local product roots preserved for later case-study recovery.', 'Raíces privadas y locales preservadas para recuperar casos más adelante.', 'Filesystem and session evidence; scope, authorship and outcomes unresolved.', 'Evidencia de archivos y sesiones; alcance, autoría y resultados por resolver.'),
  inventoryItem(86, 'timeline-career-rebuild', 'Career evidence rebuild', 'Jul 2026', '2026 Q3', 'infrastructure', 'verified', 'Cross-source reconciliation of repositories, clients, products, writing, recordings and live surfaces.', 'Conciliación de repositorios, clientes, productos, escritura, grabaciones y sitios.', '86 classified entries, 249 public originals, 749 local Git roots and explicit known gaps.', '86 entradas, 249 originales públicos, 749 raíces Git y lagunas explícitas.'),
];

export const LINKEDIN_MEDIA_ASSETS: LinkedInMediaAsset[] = [
  {
    id: 'linkedin-post03',
    post: 'Post 3',
    title: copy('China and multilingual communication', 'China y comunicación multilingüe', 'Chine et communication multilingue', '中国与多语言沟通'),
    image: '/portfolio/linkedin-post03-china-multilingual-communication.png',
    proof: copy('Generated from the verified career ledger: presenter/host background, Mandarin learning, ChinoTotal, soundscapes and tutoring artifacts. No private lesson screenshots or student data.', 'Generado desde el ledger verificado: experiencia como presentador, aprendizaje de mandarín, ChinoTotal, paisajes sonoros y materiales docentes. Sin capturas privadas ni datos de alumnos.'),
  },
  {
    id: 'linkedin-post04',
    post: 'Post 4',
    title: copy('ChinoTotal education product', 'Producto educativo ChinoTotal', 'Produit éducatif ChinoTotal', 'ChinoTotal 教育产品'),
    image: '/portfolio/chinototal-home.png',
    proof: copy('Uses the public ChinoTotal site screenshot and ISBN-backed Mandarin-learning product evidence; no current user or revenue metric is inferred.', 'Usa la captura pública de ChinoTotal y evidencia del producto de mandarín con ISBN; no se infieren usuarios ni ingresos actuales.'),
  },
  {
    id: 'linkedin-post12',
    post: 'Post 12',
    title: copy('WhatsApp and operational agents', 'WhatsApp y agentes operativos', 'WhatsApp et agents opérationnels', 'WhatsApp 与运营智能体'),
    image: '/portfolio/linkedin-post12-whatsapp-operational-agents.png',
    proof: copy('Repository/inventory-backed workflow media for WhatsApp MCP, GOWA and MessageFlow-style agents. It is not proof of a specific delivered message or conversion.', 'Visual respaldado por repositorios e inventario para WhatsApp MCP, GOWA y agentes tipo MessageFlow. No prueba un mensaje ni conversión concreta.'),
  },
  {
    id: 'linkedin-post18',
    post: 'Post 18',
    title: copy('Voice agents and communications tooling', 'Agentes de voz y comunicaciones', 'Agents vocaux et communications', '语音智能体与通信工具'),
    image: '/portfolio/linkedin-post18-voice-agents-communications.png',
    proof: copy('Public-safe Telnyx and voice-agent engineering asset. Queue acceptance, phone numbers, call recordings and customer records are excluded.', 'Asset seguro para Telnyx e ingeniería de agentes de voz. Excluye colas como llamada completada, teléfonos, grabaciones y registros de clientes.'),
  },
  {
    id: 'linkedin-post19',
    post: 'Post 19',
    title: copy('Recorded work evidence archive', 'Archivo de trabajo grabado', 'Archive de travail enregistré', '录制工作证据档案'),
    image: '/portfolio/linkedin-post19-recorded-work-archive.png',
    proof: copy('111 valid Meet Recording media files and approximately 125.83 hours are inventoried. The current priority Chinese lesson sidecars are now exported/read: 10 Google Docs, 7 substantive lessons and 3 low-content setup fragments. One IWAKY scope meeting and one Valerio/Umbramed advisory session are also content-mapped; full 111-row indexing is still incomplete.', '111 archivos multimedia válidos de Meet Recordings y aproximadamente 125,83 horas están inventariados. Los sidecars prioritarios actuales de clases de chino ya están exportados/leídos: 10 Google Docs, 7 clases sustantivas y 3 fragmentos de configuración de bajo contenido. Una reunión de alcance IWAKY y una sesión de asesoría Valerio/Umbramed también están mapeadas a contenido; la indexación completa de las 111 filas sigue incompleta.'),
  },
  {
    id: 'linkedin-post20',
    post: 'Post 20',
    title: copy('Recipe intelligence workflow', 'Flujo de inteligencia de recetas', 'Flux d’intelligence recette', '菜谱智能工作流'),
    image: '/portfolio/linkedin-post20-recipe-intelligence-workflow.png',
    proof: copy('Verified 8 Jul 2026 discovery/design evidence for turning chef notes into researched, structured and multilingual recipe media. Not a shipped-product claim.', 'Evidencia de discovery/diseño del 8 jul 2026 para convertir notas de chef en recetas investigadas, estructuradas y multilingües. No es producto lanzado.'),
  },
];

export const EVIDENCE_GAPS: EvidenceGap[] = [
  {
    id: 'repo-identities',
    title: copy('Repository identity edge cases', 'Identidades de repositorios pendientes', 'Identités de dépôts restantes', '仓库身份边界案例'),
    status: copy('Three old remote identities remain unresolved and three local family matches are still approximate after the 749-root census.', 'Quedan tres identidades remotas antiguas sin resolver y tres coincidencias locales siguen siendo aproximadas tras el censo de 749 raíces.'),
    nextStep: copy('Investigate only those six rows; do not reopen the 360 directly resolved rows.', 'Investigar solo esas seis filas; no reabrir las 360 ya resueltas.'),
  },
  {
    id: 'gists',
    title: copy('GitHub gist visibility', 'Visibilidad de GitHub gists', 'Visibilité des gists GitHub', 'GitHub gist 可见性'),
    status: copy('Authenticated inventory now resolves the visibility count: 695 accessible gists, 169 public and 526 non-public. The unauthenticated public endpoint still returns an empty array.', 'El inventario autenticado ya resuelve la visibilidad: 695 gists accesibles, 169 públicos y 526 no públicos. El endpoint público sin autenticación aún devuelve un array vacío.', 'L’inventaire authentifié résout maintenant le comptage: 695 gists accessibles, 169 publics et 526 non publics. Le point d’accès public non authentifié renvoie encore un tableau vide.', '认证清单已确认可见性：695 个可访问 gist，其中 169 个公开、526 个非公开。未认证的公开端点仍返回空数组。'),
    nextStep: copy('Resolve only the public surfacing mismatch before publishing a detailed public-gist catalogue; never expose non-public gist URLs.', 'Resolver solo la discrepancia de exposición pública antes de publicar un catálogo detallado de gists públicos; no exponer nunca URLs de gists no públicos.', 'Résoudre seulement l’écart d’exposition publique avant de publier un catalogue détaillé des gists publics; ne jamais exposer les URLs non publiques.', '发布详细公开 gist 目录前，只需解释公开展示不一致；不要暴露非公开 gist URL。'),
  },
  {
    id: 'colab-drive',
    title: copy('Colab and Drive cap', 'Límite de Colab y Drive', 'Limite Colab et Drive', 'Colab 与 Drive 上限'),
    status: copy('At least 112 direct Colab rows were observed, but the primary folder hit the 100-row connector cap.', 'Se observaron al menos 112 filas directas de Colab, pero la carpeta principal alcanzó el límite de 100 filas del conector.'),
    nextStep: copy('Page through narrower folders and date windows; keep all counts as minimums until complete.', 'Paginar por carpetas y fechas más estrechas; mantener los recuentos como mínimos hasta completar.'),
  },
  {
    id: 'recordings',
    title: copy('Meet recording contents', 'Contenido de grabaciones Meet', 'Contenu des enregistrements Meet', 'Meet 录制内容'),
    status: copy('111 valid media files and approximately 125.83 hours are verified at file level, with 271 notes/transcript/chat sidecars and 0 remaining timed-out media candidates. Twelve Google sidecars have now been exported/read: 10 Chinese lesson docs, 1 IWAKY and 1 Valerio/Umbramed; full project mapping remains incomplete.', '111 archivos multimedia válidos y unas 125,83 horas están verificados a nivel de archivo, con 271 notas/transcripciones/chats auxiliares y 0 candidatos de media con timeout pendientes. Ya se han exportado/leído 12 sidecars de Google: 10 documentos de clases de chino, 1 de IWAKY y 1 de Valerio/Umbramed; falta completar el mapeo por proyecto.'),
    nextStep: copy('Continue exporting Drive sidecars, then index each recording by project, participant, transcript status and reusable public-safe claim.', 'Seguir exportando sidecars de Drive y después indexar cada grabación por proyecto, participante, estado de transcripción y claim público seguro.'),
  },
  {
    id: 'provider-inventory',
    title: copy('Infrastructure and app-store states', 'Infraestructura y estados de tiendas', 'Infrastructure et états des stores', '基础设施与应用商店状态'),
    status: copy('Known domains and providers are a targeted slice; app-store and provider dashboards need current read-back before metrics are public.', 'Los dominios y proveedores conocidos son una muestra dirigida; tiendas y paneles requieren lectura actual antes de publicar métricas.'),
    nextStep: copy('Query Coolify, Cloudflare, Vercel, Netlify, Google Cloud, App Store Connect and Play Console directly.', 'Consultar directamente Coolify, Cloudflare, Vercel, Netlify, Google Cloud, App Store Connect y Play Console.'),
  },
  {
    id: 'client-outcomes',
    title: copy('Client delivery and acceptance', 'Entrega y aceptación de clientes', 'Livraison et acceptation client', '客户交付与验收'),
    status: copy('Contracts, proposals and payments are separated from delivery, deployment, acceptance and measured outcomes.', 'Contratos, propuestas y pagos están separados de entrega, despliegue, aceptación y resultados medidos.'),
    nextStep: copy('Extract source contracts, invoices, messages and acceptance proof without flattening them into one claim.', 'Extraer contratos, facturas, mensajes y pruebas de aceptación sin mezclarlos en una sola afirmación.'),
  },
  {
    id: 'linkedin-scheduling',
    title: copy('LinkedIn Posts 2–20', 'Posts 2–20 de LinkedIn', 'Posts LinkedIn 2–20', 'LinkedIn 第 2–20 条'),
    status: copy('Drafts and media are ready, but scheduling/publication is not authorized or proven.', 'Los borradores y medios están listos, pero la programación/publicación no está autorizada ni probada.'),
    nextStep: copy('Schedule only after the exact confirmation phrase, then read back every scheduled or published row from LinkedIn.', 'Programar solo tras la frase exacta de confirmación y leer cada fila programada o publicada desde LinkedIn.'),
  },
];

export const PROGRESSION_PLAN_STEPS: ProgressionPlanStep[] = [
  {
    id: 'recording-index',
    order: 1,
    title: copy('Index the recording archive by claim', 'Indexar las grabaciones por claim', 'Indexer les enregistrements par preuve', '按主张索引录制档案'),
    currentState: copy('111 valid media files / approximately 125.83 hours are verified at file level; 271 sidecars are inventoried, 0 timed-out candidates remain and 12 Google sidecars have been read.', '111 archivos válidos / unas 125,83 horas están verificados a nivel de archivo; hay 271 sidecars inventariados, no quedan candidatos con timeout y se han leído 12 sidecars de Google.'),
    nextProofAction: copy('Continue broader Drive sidecar export for Valerio/IWAKY/root recordings, expand the priority index to all 111 media rows and map recordings to project, date, participants, transcript status and public-safe claim.', 'Continuar la exportación más amplia de sidecars de Drive para Valerio/IWAKY/raíz, expandir el índice prioritario a los 111 archivos media y mapear cada grabación a proyecto, fecha, participantes, transcripción y claim público seguro.'),
    unlocks: copy('Stronger evidence for Valerio/Umbramed, Chinese lessons, IWAKY, recipe intelligence, INTLAW and recorded product work.', 'Evidencia más fuerte para Valerio/Umbramed, clases de chino, IWAKY, recetas inteligentes, INTLAW y trabajo de producto grabado.'),
  },
  {
    id: 'youtube-tutorials',
    order: 2,
    title: copy('Enumerate YouTube and tutorial evidence', 'Enumerar YouTube y tutoriales', 'Énumérer YouTube et les tutoriels', '枚举 YouTube 与教程证据'),
    currentState: copy('Tutorials and channels are known leads, but the video catalogue is not yet directly enumerated in the master ledger.', 'Los tutoriales y canales son leads conocidos, pero el catálogo de vídeos aún no está enumerado directamente.'),
    nextProofAction: copy('Read owned/relevant channels, videos, playlists, dates, thumbnails and URLs; map each tutorial to the matching project family.', 'Leer canales, vídeos, playlists, fechas, miniaturas y URLs; mapear cada tutorial a su familia de proyecto.'),
    unlocks: copy('More complete education, AutoClient, agent-workflow and public communication posts.', 'Posts más completos sobre educación, AutoClient, agentes y comunicación pública.'),
  },
  {
    id: 'client-outcomes',
    order: 3,
    title: copy('Separate client proposal, payment, delivery and outcome proof', 'Separar propuesta, pago, entrega y resultado de clientes', 'Séparer proposition, paiement, livraison et résultat client', '区分客户提案、付款、交付与结果证据'),
    currentState: copy('Contracts, proposals and cashflow rows exist, but several outcomes and acceptance states are still intentionally unclaimed.', 'Existen contratos, propuestas y pagos, pero varios resultados y aceptaciones siguen sin afirmarse.'),
    nextProofAction: copy('For IWAKY, INTLAW, San Martín, SORT, Scope/Fernando, Umbramed, Valerio and Light Funnels, fill proposal/contract/payment/delivery/acceptance/live/outcome columns from primary sources.', 'Para IWAKY, INTLAW, San Martín, SORT, Scope/Fernando, Umbramed, Valerio y Light Funnels, completar columnas de propuesta/contrato/pago/entrega/aceptación/live/resultado con fuentes primarias.'),
    unlocks: copy('Case studies that are stronger without overclaiming.', 'Casos de estudio más fuertes sin exagerar.'),
  },
  {
    id: 'provider-store-state',
    order: 4,
    title: copy('Refresh provider and store states', 'Actualizar proveedores y tiendas', 'Rafraîchir fournisseurs et stores', '刷新提供商与应用商店状态'),
    currentState: copy('Known domains and products are listed, but app-store and infrastructure states can drift quickly.', 'Los dominios y productos conocidos están listados, pero tiendas e infraestructura cambian rápido.'),
    nextProofAction: copy('Read App Store Connect, Play Console, Coolify, Cloudflare, Vercel, Netlify, Google Cloud and relevant dashboards directly before publishing any current status.', 'Leer App Store Connect, Play Console, Coolify, Cloudflare, Vercel, Netlify, Google Cloud y paneles relevantes antes de publicar estados actuales.'),
    unlocks: copy('Current release/deploy status for OULANG, AutoDate, PIME, Agents AI, Huatong, OUPIN and related products.', 'Estado actual de release/deploy para OULANG, AutoDate, PIME, Agents AI, Huatong, OUPIN y productos relacionados.'),
  },
  {
    id: 'history-expansion',
    order: 5,
    title: copy('Deepen Notion, Gmail, Drive and conversation-history recovery', 'Profundizar Notion, Gmail, Drive e historiales', 'Approfondir Notion, Gmail, Drive et historiques', '深化 Notion、Gmail、Drive 与会话历史恢复'),
    currentState: copy('Targeted searches recovered the main 86-entry chronology; exhaustive page/message-level reconciliation is still open.', 'Las búsquedas dirigidas recuperaron la cronología principal de 86 entradas; la conciliación exhaustiva por página/mensaje sigue abierta.'),
    nextProofAction: copy('Query by project/client names and date windows; promote only leads backed by primary pages, messages, files, repositories or recordings.', 'Buscar por proyecto/cliente y fechas; promover solo leads respaldados por páginas, mensajes, archivos, repositorios o grabaciones primarias.'),
    unlocks: copy('Smaller private/local projects and corrected scopes without letting summaries become facts.', 'Proyectos privados/locales menores y alcances corregidos sin convertir resúmenes en hechos.'),
  },
  {
    id: 'publish-readback',
    order: 6,
    title: copy('Publish only after same-layer read-back', 'Publicar solo con read-back de la misma capa', 'Publier seulement après relecture au bon niveau', '仅在同层回读后发布'),
    currentState: copy('CV, Notion and site are live snapshots; LinkedIn Posts 2–20 remain drafted and unscheduled.', 'CV, Notion y sitio son snapshots activos; los Posts 2–20 de LinkedIn siguen como borradores sin programar.'),
    nextProofAction: copy('After proof upgrades, regenerate CV/PDF/ATS, update Notion in place, deploy the site and schedule LinkedIn only after explicit confirmation; read each surface back.', 'Tras mejorar pruebas, regenerar CV/PDF/ATS, actualizar Notion en el mismo page, desplegar el sitio y programar LinkedIn solo con confirmación explícita; leer cada superficie después.'),
    unlocks: copy('A complete public profile that remains evidence-backed instead of just bigger.', 'Un perfil público completo que sigue respaldado por evidencia en vez de solo ser más grande.'),
  },
];

export const getInventoryCopy = (item: InventoryItem, language: LanguageCode) => ({
  summary: item.summary[language] || item.summary.en,
  source: item.source[language] || item.source.en,
});

export const getProjectCopy = (project: PortfolioProject, language: LanguageCode) => ({
  description: project.description[language] || project.description.en,
  proof: project.proof[language] || project.proof.en,
});

export const getLinkedInMediaAssetCopy = (asset: LinkedInMediaAsset, language: LanguageCode) => ({
  title: asset.title[language] || asset.title.en,
  proof: asset.proof[language] || asset.proof.en,
});

export const getEvidenceGapCopy = (gap: EvidenceGap, language: LanguageCode) => ({
  title: gap.title[language] || gap.title.en,
  status: gap.status[language] || gap.status.en,
  nextStep: gap.nextStep[language] || gap.nextStep.en,
});

export const getProgressionPlanStepCopy = (step: ProgressionPlanStep, language: LanguageCode) => ({
  title: step.title[language] || step.title.en,
  currentState: step.currentState[language] || step.currentState.en,
  nextProofAction: step.nextProofAction[language] || step.nextProofAction.en,
  unlocks: step.unlocks[language] || step.unlocks.en,
});
