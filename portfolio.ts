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
    proof: copy('Live web product plus public App Store / Google Play listing pages under the legacy com.oulang.classifieds identity; the current Expo wrapper uses oulang.app and metrics still require provider reads', 'Producto web activo más páginas públicas de App Store / Google Play bajo la identidad heredada com.oulang.classifieds; el wrapper Expo actual usa oulang.app y las métricas aún requieren lectura de proveedores', 'Produit web en ligne et pages App Store / Google Play publiques sous l’identité historique com.oulang.classifieds; le wrapper Expo actuel utilise oulang.app et les métriques exigent encore des lectures fournisseur', '线上 Web 产品，以及旧身份 com.oulang.classifieds 下的公开 App Store / Google Play 页面；当前 Expo 外壳使用 oulang.app，指标仍需读取提供方数据'),
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
    proof: copy('Public repositories plus a current @autoclient-ai public catalogue snapshot: 373 videos / approximately 159.65 hours; a 15 Jul 2026 Tekçe/OULANG-AutoClient sidecar verifies a property lead-generation discussion/demo only', 'Repositorios públicos y una instantánea pública actual de @autoclient-ai: 373 vídeos / aproximadamente 159,65 horas; un sidecar Tekçe/OULANG-AutoClient del 15 jul 2026 verifica solo una discusión/demo de generación de leads inmobiliarios'),
    tags: ['Agents', 'CRM', 'Outreach', 'Voice'], href: 'https://www.youtube.com/@autoclient-ai'
  },
  {
    id: 'autopricing', name: 'AutoPricing / IWAKY delivery', period: '2025–2026', category: 'platforms',
    description: copy('Pricing-intelligence and decision-reporting workflow combining marketplace data, product matching and inventory or ERP inputs.', 'Inteligencia de precios e informes de decisión con datos de marketplaces, matching e inventario o ERP.'),
    proof: copy('Signed scope, first payment and audited delivery artifacts are separated from final acceptance/payment; demo values are not claimed as results', 'Contrato, primer pago y evidencias auditadas se separan de aceptación/pago final; los valores de demo no se presentan como resultados'),
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
    description: copy('Open-source agent that captures, annotates and reasons over live interfaces for visual debugging.', 'Agente abierto que captura, anota y razona sobre interfaces reales para depuración visual.', 'Agent open source qui capture, annote et analyse des interfaces réelles pour le débogage visuel.', '用于可视化调试的开源智能体：捕获、标注并分析真实界面。'),
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
    id: 'automedical', name: 'AutoMedical Academy', period: '2025–2026', category: 'applied',
    description: copy('AI-assisted medical learning and multimodal-workflow product experimentation.', 'Aprendizaje médico y experimentación de flujos multimodales asistidos por IA.'),
    proof: copy('Live public surface returned 200 on 16 Jul 2026; educational/workflow evidence only, with no clinical efficacy, adoption or patient-outcome claim', 'La superficie pública devolvió 200 el 16 jul 2026; solo evidencia educativa/de flujo, sin afirmar eficacia clínica, adopción ni resultados de pacientes'),
    tags: ['Education', 'AI workflows'], href: 'https://automedical.ai'
  },
  {
    id: 'intlaw', name: 'INTLAW AI dashboard', period: '2025', category: 'applied',
    description: copy('Legal-workflow and document or operations prototype developed in a collaboration context.', 'Prototipo de flujos legales, documentos y operaciones desarrollado en colaboración.'),
    proof: copy('Current dashboard/demo artifacts; no client-impact claim', 'Dashboard y demo actuales; sin afirmar impacto de cliente'),
    tags: ['Legal workflows', 'Dashboard', 'Collaboration']
  },
  {
    id: 'recipes', name: 'Recipe intelligence platform', period: '2026', category: 'applied',
    description: copy('Product-discovery workflow for scanning chef notes/photos, researching recipes with agents, preserving technique, producing chef-ready/user-facing views and generating multilingual recipe media.', 'Flujo de discovery para escanear notas/fotos de chef, investigar recetas con agentes, preservar técnica, producir vistas para chef/usuario y generar medios multilingües.'),
    proof: copy('8 Jul 2026 Meet sidecar verifies discovery/design; no finished product, payment, traffic or revenue claim', 'Sidecar de Meet del 8 jul 2026 verifica discovery/diseño; sin afirmar producto terminado, pago, tráfico o ingresos'),
    tags: ['Document AI', 'Research', 'Multilingual']
  },
  {
    id: 'chinototal', name: 'ChinoTotal', period: '2024 · Published book', category: 'education',
    description: copy('A 296-page Spanish-language Mandarin course for beginners, structured from zero to HSK2 / A2 and independently published through Amazon KDP.', 'Curso de mandarín para principiantes de 296 páginas en español, estructurado desde cero hasta HSK2 / A2 y publicado de forma independiente mediante Amazon KDP.'),
    proof: copy('Published 2 Jan 2024 · ISBN 9798873249237', 'Publicado el 2 ene 2024 · ISBN 9798873249237'),
    tags: ['Mandarin', 'Writing', 'Education'], href: 'https://chinototal.com', image: '/portfolio/chinototal-home.png', imagePosition: 'center 25%'
  },
  {
    id: 'earlier', name: 'MelindaAI · KittyAI · Sharedetect · ZebraMenu · Megacursos', period: 'Earlier work', category: 'education',
    description: copy('Historical AI-learning, conversational support, access-control, digital-menu and course-platform work across web and mobile.', 'Trabajo histórico de aprendizaje con IA, soporte conversacional, control de acceso, menú digital y formación en web y móvil.'),
    proof: copy('MelindaAI Netlify sketch returned 200 on 16 Jul 2026 and is treated as historical prototype evidence; detailed impact, current-production and model-performance claims remain excluded', 'El sketch MelindaAI en Netlify devolvió 200 el 16 jul 2026 y se trata como evidencia histórica de prototipo; se excluyen claims de impacto, producción actual y rendimiento de modelo'),
    tags: ['Web', 'Mobile', 'Education', 'Product'], href: 'https://melindaai.netlify.app'
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
    description: copy('Ionic/Capacitor clinical-study tooling, OPE exam-data ingestion, Claude/Table connector exam-upload workflows, PWA/web recovery and installability, Diraya automation investigation, PWABuilder and Google Play Console packaging prep, Stripe connector/payment-integration prep, arrhythmia-simulator review, retinography ML ideation and funding-application prep with Sami as technical lead and Dr. Valerio Trigos as clinical lead.', 'Herramientas clínicas y de estudio en Ionic/Capacitor, ingesta de exámenes OPE, flujos de subida de exámenes con conectores Claude/Table, recuperación e instalabilidad web/PWA, investigación de automatización Diraya, preparación de packaging con PWABuilder y Google Play Console, preparación de conectores Stripe/pagos, revisión de simulador de arritmias, ideación ML con retinografías y preparación de financiación con Sami como responsable técnico y el Dr. Valerio Trigos como responsable clínico.'),
    proof: copy('Current site, repository, design records, four labelled cashflow rows and sampled Meet sidecars; applications are not awards and deployment is not clinical adoption', 'Sitio, repositorio, documentación, cuatro movimientos etiquetados y sidecars Meet muestreados; las solicitudes no son premios y el despliegue no es adopción clínica'),
    tags: ['Ionic', 'Capacitor', 'Medical'], href: 'https://umbramed.es', image: '/portfolio/umbramed-home.png', imagePosition: 'center 18%'
  },
  {
    id: 'sort', name: 'SORT / SortBot', period: '2025', category: 'applied',
    description: copy('Course-PDF digitisation workflow with structured online learning, an embedded chatbot and publishing through an existing site.', 'Flujo de digitalización de PDFs con formación online estructurada, chatbot integrado y publicación en un sitio existente.'),
    proof: copy('Direct proposal email plus public repository; acceptance and production use remain unconfirmed', 'Email de propuesta y repositorio público; aceptación y uso en producción no confirmados'),
    tags: ['Education', 'Chatbot', 'Content'], href: 'https://github.com/samihalawa/sortbot'
  },
  {
    id: 'san-martin', name: 'San Martín HR automation', period: '2025', category: 'applied',
    description: copy('HR workflow design for birthday automation, timesheets, work-part rules, talent search and employee self-service.', 'Diseño de flujos RRHH para cumpleaños, partes, reglas de trabajo, búsqueda de talento y autoservicio del empleado.'),
    proof: copy('Direct request and proposal verified; no contract, delivery or adoption claim', 'Solicitud y propuesta verificadas; sin afirmar contrato, entrega ni adopción'),
    tags: ['HR', 'Automation', 'Proposal']
  },
  {
    id: 'scope', name: 'Fernando Ly / EyeUnit · Scope account intelligence', period: '2025–2026', category: 'applied',
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
    description: copy('Radiology workflow concept for PACS/RIS-oriented reporting, review and human-in-the-loop decision support.', 'Concepto de flujo radiológico para informes y revisión orientados a PACS/RIS con apoyo a decisiones bajo supervisión humana.'),
    proof: copy('Product concept and workflow design; no clinical or commercial outcome claim.', 'Concepto de producto y diseño de flujos; sin afirmar resultados clínicos o comerciales.'),
    tags: ['Radiology', 'Workflow design', 'Human review']
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
    id: 'language-media', name: 'Poetry, Chinese soundscapes & audio', period: '2012–2026', category: 'education',
    description: copy('Youth poetry prize for “Olvidaste una llave en mi costado”, followed by a 72-poem web collection, Chinese onomatopoeia decks, printable exercises, vocabulary cards and generated poetry audio.', 'Premio juvenil por “Olvidaste una llave en mi costado”, seguido de una colección web de 72 poemas, materiales de onomatopeyas chinas, ejercicios, tarjetas de vocabulario y audio de poesía generado.'),
    proof: copy('Diario de León and archived Memoria Gráfica for the 2012 award; source collection and current media manifests for later work', 'Diario de León y Memoria Gráfica archivada para el premio de 2012; colección fuente y manifiestos actuales para el trabajo posterior'),
    tags: ['Poetry', 'Chinese', 'Audio']
  },
  {
    id: 'vibracode', name: 'VibraCode', period: '2026', category: 'platforms',
    description: copy('A live software product for moving from an idea to a structured, buildable application concept.', 'Producto de software activo para convertir una idea en un concepto de aplicación estructurado y construible.', 'Produit logiciel en ligne pour transformer une idée en concept d’application structuré et réalisable.', '把想法转化为结构化、可构建应用概念的在线软件产品。'),
    proof: copy('Live product surface and current repository work', 'Superficie activa y trabajo actual de repositorio', 'Produit en ligne et travail actuel dans le dépôt', '线上产品与当前仓库工作'),
    tags: ['Product design', 'AI workflow', 'Web'], href: 'https://vibracode.megawebs.com'
  },
  {
    id: 'oulang-world-cup', name: 'OULANG World Cup', period: '2026', category: 'platforms',
    description: copy('A sports-live module inside OULANG with predictions, leaderboards, standings, results and live-room flows.', 'Módulo deportivo dentro de OULANG con predicciones, clasificación, resultados y salas en directo.', 'Module sportif dans OULANG avec pronostics, classements, résultats et salons en direct.', 'OULANG 内的体育直播模块，包含预测、排行榜、积分、赛果与直播间流程。'),
    proof: copy('Implemented in the current Expo product source', 'Implementado en el código actual del producto Expo', 'Implémenté dans le code Expo actuel', '已在当前 Expo 产品源码中实现'),
    tags: ['Expo', 'Live data', 'Community']
  },
  {
    id: 'damesender', name: 'DameSender', period: '2020–2023', category: 'platforms',
    description: copy('The earliest public product in a longer email, outreach and customer-acquisition automation lineage.', 'El primer producto público de una trayectoria más amplia en email, outreach y automatización comercial.', 'Le premier produit public d’une trajectoire plus large en email, prospection et automatisation commerciale.', '邮件、触达与客户获取自动化长期产品线中的最早公开产品。'),
    proof: copy('Earliest observed public original repository', 'Primer repositorio público original observado', 'Premier dépôt public original observé', '目前观察到的最早原创公开仓库'),
    tags: ['Email', 'Outreach', 'Product lineage'], href: 'https://github.com/samihalawa/damesender'
  },
  {
    id: 'productivity-apps', name: 'KittyTasks · FocusOnTask', period: '2024', category: 'platforms',
    description: copy('Focused productivity-app experiments exploring task capture, attention and lightweight personal workflows.', 'Experimentos de productividad centrados en captura de tareas, atención y flujos personales ligeros.', 'Expériences de productivité autour de la capture de tâches, de l’attention et de flux personnels légers.', '围绕任务捕捉、专注与轻量个人工作流的效率应用实验。'),
    proof: copy('Product artifacts preserved in repository history', 'Artefactos de producto preservados en el historial', 'Artefacts produit conservés dans l’historique', '产品工件保存在仓库历史中'),
    tags: ['Productivity', 'Product design', 'Apps']
  },
  {
    id: 'crawlab-actors', name: 'Crawlab / Apify actor fleet', period: '2026', category: 'agents',
    description: copy('Reusable scraping actors, central storage and downstream consumers supporting OULANG, Huatong and OUPIN.', 'Actores de scraping reutilizables, almacenamiento central y consumidores para OULANG, Huatong y OUPIN.', 'Acteurs de scraping réutilisables, stockage central et consommateurs pour OULANG, Huatong et OUPIN.', '为 OULANG、Huatong 与 OUPIN 提供可复用采集任务、中央存储及下游消费。'),
    proof: copy('Current repositories and operating infrastructure', 'Repositorios e infraestructura operativa actuales', 'Dépôts et infrastructure opérationnelle actuels', '当前仓库与运行基础设施'),
    tags: ['Crawlab', 'Apify', 'Data pipelines']
  },
  {
    id: 'mcp-suite', name: 'Browser, shell & diff MCP suite', period: '2025–present', category: 'agents',
    description: copy('A family of command, browser, editing and comparison integrations that give AI agents practical operating tools.', 'Familia de integraciones de comandos, navegador, edición y comparación para dar herramientas prácticas a agentes de IA.', 'Famille d’intégrations commande, navigateur, édition et comparaison pour outiller concrètement les agents IA.', '为 AI 智能体提供命令、浏览器、编辑与差异比较能力的一组实用集成。'),
    proof: copy('Part of the 249 public-original repository archive', 'Parte del archivo de 249 repositorios públicos propios', 'Fait partie des 249 dépôts publics originaux', '属于 249 个原创公开仓库档案'),
    tags: ['MCP', 'Browser', 'Developer tools'], href: 'https://github.com/samihalawa?tab=repositories'
  },
  {
    id: 'audio-multimodal', name: 'Audio & transcription tooling', period: '2024–present', category: 'agents',
    description: copy('Speech, audio, transcription and multimodal utilities developed across recording, meeting and content workflows.', 'Utilidades de voz, audio, transcripción y multimodalidad para grabación, reuniones y contenido.', 'Outils de voix, audio, transcription et multimodalité pour l’enregistrement, les réunions et le contenu.', '面向录音、会议与内容工作流的语音、音频、转录及多模态工具。'),
    proof: copy('Multiple repository families and current recording workflows', 'Varias familias de repositorios y flujos actuales de grabación', 'Plusieurs familles de dépôts et flux d’enregistrement actuels', '多个仓库系列与当前录制工作流'),
    tags: ['Speech', 'Transcription', 'Multimodal']
  },
  {
    id: 'lemon-ai', name: 'Lemon AI customization', period: '2025', category: 'agents',
    description: copy('Deployment, product identity, landing-page and infrastructure work built around the upstream open-source Lemon AI platform.', 'Despliegue, identidad, landing e infraestructura sobre la plataforma open source Lemon AI.', 'Déploiement, identité produit, landing page et infrastructure autour de la plateforme open source Lemon AI.', '围绕上游开源 Lemon AI 平台开展部署、产品形象、落地页与基础设施工作。'),
    proof: copy('Customization and deployment work with upstream authorship preserved', 'Personalización y despliegue preservando la autoría upstream', 'Personnalisation et déploiement en préservant l’auteur upstream', '定制与部署工作，并保留上游作者归属'),
    tags: ['Open source', 'Deployment', 'Agent platform']
  },
  {
    id: 'autoiol', name: 'AutoIOL', period: '2024–2026', category: 'applied',
    description: copy('Ophthalmology-oriented software and AI explorations for image review, longitudinal tracking and structured reporting.', 'Exploraciones de software e IA oftalmológica para revisión de imagen, seguimiento longitudinal e informes estructurados.', 'Explorations logicielles et IA en ophtalmologie pour la revue d’images, le suivi longitudinal et les rapports structurés.', '面向眼科影像审阅、纵向跟踪与结构化报告的软件和 AI 探索。'),
    proof: copy('Repository and medical-project artifact family', 'Familia de repositorios y artefactos médicos', 'Famille de dépôts et d’artefacts médicaux', '仓库与医疗项目工件系列'),
    tags: ['Ophthalmology', 'Medical imaging', 'Human review']
  },
  {
    id: 'autohsk', name: 'AutoHSK & language tools', period: '2025–present', category: 'education',
    description: copy('AI-assisted Chinese study tools connecting language teaching, structured practice and software product design.', 'Herramientas de chino con IA que conectan enseñanza, práctica estructurada y diseño de producto.', 'Outils d’étude du chinois assistés par IA reliant enseignement, pratique structurée et produit logiciel.', '连接中文教学、结构化练习与软件产品设计的 AI 辅助学习工具。'),
    proof: copy('Project artifacts connect language teaching to software', 'Los artefactos conectan la enseñanza de idiomas con software', 'Les artefacts relient l’enseignement des langues au logiciel', '项目工件将语言教学与软件相连接'),
    tags: ['Mandarin', 'Learning tools', 'AI']
  },
  {
    id: 'guided-learning', name: 'AutoTutorial · MentorIA · PerfectPrompter', period: '2025', category: 'education',
    description: copy('A family of guided-learning and prompt-design experiments focused on helping people work more effectively with AI.', 'Familia de aprendizaje guiado y diseño de prompts para trabajar mejor con IA.', 'Famille d’expériences d’apprentissage guidé et de conception de prompts pour mieux travailler avec l’IA.', '帮助人们更有效使用 AI 的引导式学习与提示设计实验系列。'),
    proof: copy('Verified product families and source artifacts', 'Familias de producto y artefactos verificados', 'Familles de produits et artefacts vérifiés', '已验证的产品系列与源码工件'),
    tags: ['Learning design', 'Prompting', 'Education']
  },
  {
    id: 'public-teaching', name: 'Public video & teaching catalogue', period: '2023–present', category: 'education',
    description: copy('A substantial public library spanning long-form AI lessons, automation, creative software, product walkthroughs and technical demonstrations.', 'Biblioteca pública de lecciones extensas de IA, automatización, software creativo, recorridos de producto y demostraciones técnicas.', 'Bibliothèque publique de cours IA, automatisation, logiciels créatifs, présentations produit et démonstrations techniques.', '涵盖 AI 长课程、自动化、创意软件、产品演示与技术展示的大型公开资料库。'),
    proof: copy('373 public videos · approximately 159.65 hours at the current snapshot', '373 vídeos públicos · aproximadamente 159,65 horas en la instantánea actual', '373 vidéos publiques · environ 159,65 heures dans l’instantané actuel', '当前快照为 373 个公开视频，约 159.65 小时'),
    tags: ['Video', 'Teaching', 'AI'], href: 'https://www.youtube.com/@autoclient-ai'
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
  inventoryItem(11, 'timeline-rafael-botella', 'Rafael Botella collaboration', '2024–2025', '2024', 'clients', 'verified', 'Digital product and technical consulting engagement.', 'Colaboración de producto digital y consultoría técnica.', 'Five labelled cashflow rows totaling €14,270; not a bank audit.', 'Cinco movimientos etiquetados por €14.270; no es auditoría bancaria.'),
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
  inventoryItem(22, 'timeline-daniel-parisi', 'Daniel Parisi engagement', '2024', '2024', 'clients', 'verified', 'Focused digital-product consulting engagement.', 'Colaboración específica de consultoría de producto digital.', 'One €250 cashflow row.', 'Un movimiento de €250.'),
  inventoryItem(23, 'timeline-light-funnels', 'Light Funnels work', '2024', '2024', 'clients', 'approximate', 'AI classes or lead-generation work; the sources conflict.', 'Clases de IA o captación; las fuentes entran en conflicto.', 'Two cashflow rows totaling €2,300; invoice attachments must resolve scope.', 'Dos movimientos por €2.300; las facturas deben resolver el alcance.'),
  inventoryItem(24, 'timeline-hf-writing-start', 'Hugging Face writing begins', '2024', '2024', 'education', 'verified', 'Public technical writing on agents, prompting and deployment.', 'Escritura técnica pública sobre agentes, prompting y despliegue.', '12 public articles are currently enumerated.', 'Actualmente se enumeran 12 artículos públicos.', 'https://huggingface.co/samihalawa/posts'),
  inventoryItem(25, 'timeline-colab', 'Colab research archive', '2024–present', '2024', 'research', 'verified', 'Large notebook archive spanning AI, automation and experiments.', 'Archivo amplio de notebooks de IA, automatización y experimentos.', 'At least 112 direct rows; the main folder hit the 100-row connector cap.', 'Al menos 112 filas; la carpeta principal alcanzó el límite de 100.'),

  inventoryItem(26, 'timeline-sort', 'SORT / SortBot', 'Jan–Feb 2025', '2025 Q1', 'clients', 'verified', 'Course-PDF digitisation workflow with online lessons, chatbot support and web publishing.', 'Flujo para digitalizar PDFs en cursos online con chatbot y publicación web.', 'Direct email and public repository; acceptance unconfirmed.', 'Email directo y repositorio; aceptación no confirmada.', 'https://github.com/samihalawa/sortbot'),
  inventoryItem(27, 'timeline-autohsk', 'AutoHSK & language tools', '2025', '2025 Q1', 'education', 'verified', 'AI-assisted Chinese-language study tools.', 'Herramientas de estudio de chino asistidas por IA.', 'Project artifacts connect language teaching to software.', 'Los artefactos conectan la enseñanza de idiomas con software.'),
  inventoryItem(28, 'timeline-blog-system', 'Blog & content systems', '2025–present', '2025 Q1', 'education', 'verified', 'Technical publishing, content automation and the current article system.', 'Publicación técnica, automatización de contenido y sistema actual de artículos.', 'Site and repository evidence; counts come only from enumerated posts.', 'Evidencia del sitio y repositorios; los recuentos se enumeran.'),
  inventoryItem(29, 'timeline-smtp', 'SMTP MCP Server', '2025', '2025 Q1', 'open-source', 'verified', 'SMTP and mailbox integration for agent workflows.', 'Integración SMTP y de buzones para flujos con agentes.', '17 stars and 15 forks at the current snapshot.', '17 estrellas y 15 forks en la instantánea actual.', 'https://github.com/samihalawa/mcp-server-smtp'),
  inventoryItem(30, 'timeline-mcp-suite', 'Shell, browser & diff MCP tools', '2025', '2025 Q1', 'open-source', 'verified', 'Command, browser and editing integrations for AI agents.', 'Integraciones de comandos, navegador y edición para agentes.', 'Full public-original list is preserved in the evidence appendix.', 'La lista pública original completa se conserva en el apéndice.'),
  inventoryItem(31, 'timeline-ophthalmology', 'Ophthalmology workflows', '2025–2026', '2025 Q1', 'research', 'verified', 'Ophthalmic image review, reporting and intelligence workflows.', 'Flujos oftalmológicos de revisión, informes e inteligencia.', 'Repositories, Gmail and Drive; no clinical-deployment claim.', 'Repositorios, Gmail y Drive; sin afirmar despliegue clínico.'),
  inventoryItem(32, 'timeline-hf-articles', 'Hugging Face article archive', '2024–2025', '2025 Q1', 'education', 'verified', 'A dated archive of 12 public technical articles.', 'Archivo fechado de 12 artículos técnicos públicos.', 'Every current article page was enumerated.', 'Se enumeró cada página pública actual.', 'https://huggingface.co/samihalawa/posts'),

  inventoryItem(33, 'timeline-apolo', 'APOLO multimodal model artifact', 'Apr 2025', '2025 Q2', 'research', 'verified', 'Medical image-text model artifact based on a multimodal architecture.', 'Artefacto de modelo médico imagen-texto con arquitectura multimodal.', 'Official Hugging Face API: one model, 2 likes, 0 downloads at snapshot.', 'API oficial: un modelo, 2 likes, 0 descargas.', 'https://huggingface.co/samihalawa/APOLO-medical-multimodal-instruct'),
  inventoryItem(34, 'timeline-vuda', 'VUDA — Visual UI Debug Agent', 'May 2025', '2025 Q2', 'open-source', 'verified', 'Visual capture, annotation and reasoning for interface debugging.', 'Captura, anotación y razonamiento visual para depurar interfaces.', '80 stars and 7 forks at the current snapshot.', '80 estrellas y 7 forks en la instantánea actual.', 'https://github.com/samihalawa/visual-ui-debug-agent-mcp'),
  inventoryItem(35, 'timeline-education-products', 'AutoTutorial / MentorIA / PerfectPrompter', '2025', '2025 Q2', 'education', 'verified', 'Guided learning and prompting product experiments.', 'Experimentos de aprendizaje guiado y prompting.', 'Project families verified; active deployments unconfirmed.', 'Familias verificadas; despliegues activos no confirmados.'),
  inventoryItem(36, 'timeline-wordlist', 'Wordlist Visual', '2025', '2025 Q2', 'clients', 'verified', 'Visual language-learning product and content collaboration.', 'Colaboración en producto visual y contenido para aprendizaje de idiomas.', 'Eight cashflow rows totaling €24,800.', 'Ocho movimientos por €24.800.'),
  inventoryItem(37, 'timeline-scope', 'Scope account intelligence', 'Jul 2025', '2025 Q2', 'clients', 'verified', 'Cross-sell discovery and account scoring prototype.', 'Prototipo de venta cruzada y puntuación de cuentas.', 'Direct shared-prototype email and positive reply; current host is gated.', 'Email directo y respuesta positiva; host actualmente restringido.'),
  inventoryItem(38, 'timeline-fernando', 'Fernando Ly medical AI research', '2025–2026', '2025 Q2', 'clients', 'verified', 'Applied medical, OCT and market-intelligence collaboration.', 'Colaboración aplicada en medicina, OCT e inteligencia de mercado.', 'Direct OCTbot and Scope threads; production adoption unconfirmed.', 'Hilos directos OCTbot y Scope; adopción en producción no confirmada.'),
  inventoryItem(39, 'timeline-autoclient-expand', 'AutoClient expands', '2025', '2025 Q2', 'products', 'verified', 'Agentic acquisition platform with research, scoring and multichannel follow-up.', 'Plataforma agéntica de captación con investigación, scoring y seguimiento multicanal.', 'Repositories, Drive materials and Lanzadera evidence; public domains are currently gated/404.', 'Repositorios, Drive y Lanzadera; dominios públicos restringidos/404.'),
  inventoryItem(40, 'timeline-mcp-wave', 'MCP open-source wave', '2025', '2025 Q2', 'open-source', 'verified', 'Concentrated release period for agent integration tools.', 'Periodo concentrado de publicación de integraciones para agentes.', 'Public-original repository census.', 'Censo de repositorios públicos originales.', 'https://github.com/samihalawa?tab=repositories'),
  inventoryItem(41, 'timeline-agents-ai', 'Agents AI Ltd', '2025–present', '2025 Q2', 'products', 'verified', 'Company and delivery vehicle for AI product and client work.', 'Empresa y vehículo de entrega para producto y clientes de IA.', 'Live company surface and signed-contract identification; filing detail kept minimal.', 'Sitio activo e identificación contractual; detalles registrales mínimos.', 'https://agentsai.ltd', '/portfolio/agentsai-home.png'),
  inventoryItem(42, 'timeline-lanzadera', 'Lanzadera ecosystem participation', '2025', '2025 Q2', 'clients', 'verified', 'AutoClient participation in Lanzadera startup and partner benefits.', 'Participación de AutoClient en el ecosistema y beneficios de Lanzadera.', 'Direct AWS Activate email to Lanzadera startups; no award, rank or investment claim.', 'Email directo de AWS Activate; sin afirmar premio, puesto ni inversión.'),

  inventoryItem(43, 'timeline-automedical-packaging', 'APOLO / AutoMedical packaging', '2025', '2025 Q3', 'products', 'verified', 'Packaging of medical AI research into a public product surface.', 'Empaquetado de investigación médica en una superficie pública.', 'Repositories and live AutoMedical site; efficacy remains unclaimed.', 'Repositorios y sitio AutoMedical activo; sin afirmar eficacia.', 'https://automedical.ai'),
  inventoryItem(44, 'timeline-agent-utilities', 'Agent utilities & operating tools', '2025', '2025 Q3', 'open-source', 'verified', 'Automation, memory, browser and deployment utilities.', 'Utilidades de automatización, memoria, navegador y despliegue.', 'Public/local repository census.', 'Censo de repositorios públicos/locales.'),
  inventoryItem(45, 'timeline-autorad', 'AutoRad', '2025', '2025 Q3', 'research', 'approximate', 'Radiology workflow concept for image review, reporting and clinical collaboration.', 'Concepto de flujo de radiología para revisión de imágenes, informes y colaboración clínica.', 'Product concept and workflow-design scope; no clinical or commercial outcome claim.', 'Concepto de producto y alcance de diseño de flujo; sin afirmar resultados clínicos ni comerciales.'),
  inventoryItem(46, 'timeline-sites', 'Personal & company sites', '2025–present', '2025 Q3', 'infrastructure', 'verified', 'Identity, product, publishing and company-site engineering.', 'Ingeniería de identidad, producto, publicación y sitios corporativos.', 'Repositories and current live-domain probes.', 'Repositorios y comprobaciones actuales de dominios.'),
  inventoryItem(47, 'timeline-whatsapp-mcp', 'WhatsApp MCP / automation', '2025–present', '2025 Q3', 'open-source', 'verified', 'Messaging, history and media integrations for agent workflows.', 'Integraciones de mensajería, historial y medios para agentes.', 'Public repositories; code availability is separate from message delivery.', 'Repositorios públicos; el código no prueba entrega de mensajes.', 'https://github.com/samihalawa/whatsapp-go-mcp'),

  inventoryItem(48, 'timeline-iwaky', 'IWAKY / AutoPricing', 'Oct 2025–2026', '2025 Q4', 'clients', 'verified', 'Pricing-intelligence system combining marketplace acquisition, product matching, WhatsApp quote analysis, ERP commerce and decision dashboards.', 'Sistema de inteligencia de precios con captación en marketplaces, matching, análisis de presupuestos de WhatsApp, comercio ERP y dashboards de decisión.', 'Signed €35,000 contract and €17,500 cashflow receipt; completion and final payment unconfirmed.', 'Contrato firmado de €35.000 y €17.500 registrados; finalización y pago final no confirmados.'),
  inventoryItem(49, 'timeline-intlaw', 'INTLAW legal AI', 'Oct 2025–Jun 2026', '2025 Q4', 'clients', 'verified', 'Legal intake, prospecting and multi-agent case-file analysis across chat, WhatsApp and phone workflows.', 'Captación, intake y análisis jurídico multiagente mediante chat, WhatsApp y teléfono.', 'Notion hub, public repo, Hugging Face Space and proposal emails; no signed contract claim.', 'Hub, repo, Space y emails; sin afirmar contrato firmado.', 'https://github.com/samihalawa/intlaw-demo'),
  inventoryItem(50, 'timeline-san-martin', 'San Martín HR automation', 'Oct 2025', '2025 Q4', 'clients', 'verified', 'HR workflow design for timesheets, work rules, talent search, employee self-service and birthday automation.', 'Diseño de flujos de RRHH para partes, reglas, talento, autoservicio del empleado y cumpleaños.', 'Direct request and proposal; adoption unconfirmed.', 'Solicitud y propuesta directas; adopción no confirmada.'),
  inventoryItem(51, 'timeline-umbramed', 'Umbramed / Valerio', '2025–2026', '2025 Q4', 'clients', 'verified', 'Technical leadership across Ionic/Capacitor clinical-study tools, OPE exam ingestion, web/PWA delivery, automation research, payments, product design and medical-AI concepts.', 'Liderazgo técnico en herramientas clínicas Ionic/Capacitor, ingesta de exámenes OPE, entrega web/PWA, automatización, pagos, diseño de producto y conceptos de IA médica.', 'Site, repository, design records, €6,700 labelled cashflow and sampled Meet sidecars; applications are not awards, app-store/payment prep is not submission or completion, connector/payment prep is not completed payment integration, and prompt delivery is not a clone-product launch.', 'Sitio, repositorio, documentación, €6.700 etiquetados y sidecars Meet muestreados; solicitudes no son premios, la preparación app-store/pagos no es envío ni finalización, la preparación de conectores/pagos no es integración de pagos completada y la entrega de prompts no es lanzamiento de un producto clonado.', 'https://umbramed.es', '/portfolio/umbramed-home.png'),
  inventoryItem(52, 'timeline-autotinder', 'AutoTinder / AutoDate design', '2025', '2025 Q4', 'research', 'approximate', 'Extensive product-design and automation specifications.', 'Especificaciones amplias de diseño y automatización.', 'Architecture pages and repositories; mock testimonials and pricing are excluded.', 'Páginas y repositorios; se excluyen testimonios y precios simulados.'),
  inventoryItem(53, 'timeline-prototype-wave', 'Prototype portfolio wave', '2025', '2025 Q4', 'archive', 'verified', 'AutoProposal, AuraAI, HealthGuard, MessageFlow, PriceIntel, AutoMedical Academy and many smaller artifacts.', 'AutoProposal, AuraAI, HealthGuard, MessageFlow, PriceIntel, AutoMedical Academy y otros artefactos.', 'Public/local artifact families; upstream references are not claimed as original work.', 'Familias públicas/locales; referencias upstream no se reclaman como propias.'),
  inventoryItem(54, 'timeline-poetry', 'Poetry prize & Sami Halawa poetry website', '2012–2025', '2025 Q4', 'education', 'verified', '2012 Nogarejas youth prize for “Olvidaste una llave en mi costado”, followed by a web collection of 72 original poems written from 2017 to 2022.', 'Premio juvenil de Nogarejas en 2012 por “Olvidaste una llave en mi costado”, seguido de una colección web de 72 poemas originales escritos entre 2017 y 2022.', 'Diario de León and the archived Memoria Gráfica verify the award; repository README and poem data verify the later collection.', 'Diario de León y la Memoria Gráfica archivada verifican el premio; el README y la fuente de poemas verifican la colección posterior.'),
  inventoryItem(55, 'timeline-lemon-ai', 'Lemon AI customization', 'Nov 2025', '2025 Q4', 'infrastructure', 'verified', 'Deployment, landing page, identity and infrastructure work on the upstream Lemon AI platform.', 'Despliegue, landing, identidad e infraestructura sobre Lemon AI upstream.', 'Local repository; upstream authorship is explicitly preserved.', 'Repositorio local; la autoría upstream se preserva.'),
  inventoryItem(56, 'timeline-agents-course', '15-hour AI agents course', '2025', '2025 Q4', 'education', 'verified', 'Foundations, tools, memory, multi-agent systems, RAG, deployment and observability.', 'Fundamentos, herramientas, memoria, multiagentes, RAG, despliegue y observabilidad.', 'Direct Notion syllabus; delivery dates and outcomes remain unconfirmed.', 'Programa directo; fechas y resultados no confirmados.'),

  inventoryItem(57, 'timeline-oulang-central', 'OULANG central production platform', '2026–present', '2026 Q1', 'products', 'verified', 'Chinese-diaspora housing, jobs, second-hand, services and community platform in Spain.', 'Plataforma para la diáspora china en España: vivienda, empleo, segunda mano, servicios y comunidad.', 'Current repositories, tracker, store artifacts and live domain.', 'Repositorios, tracker, artefactos de tienda y dominio activo.', 'https://oulang.ai', '/portfolio/oulang-home.png'),
  inventoryItem(58, 'timeline-oulang-metrics', 'OULANG metrics & commercial claims', '2026', '2026 Q1', 'products', 'approximate', 'Analytics, payments and store surfaces exist, but live figures require current provider reads.', 'Existen analítica, pagos y tiendas, pero las cifras requieren lectura actual del proveedor.', 'Provider surfaces identified; no stale metric is repeated here.', 'Proveedores identificados; no se repite una métrica obsoleta.'),
  inventoryItem(59, 'timeline-umbramed-continuation', 'Umbramed product development', '2026', '2026 Q1', 'clients', 'verified', 'Continued exam-ingestion, connector, PWA, app packaging, payment, brand and medical-product development.', 'Desarrollo continuado de ingesta de exámenes, conectores, PWA, packaging de app, pagos, marca y producto médico.', '2026 repository, site and Feb 2026 Meet sidecars; applications remain applications and recovery/app-store/payment/connector prep is not acceptance, submission, completion or revenue.', 'Repositorio, sitio y sidecars Meet de feb 2026; las solicitudes siguen siendo solicitudes y la recuperación/preparación app-store/pagos/conectores no es aceptación, envío, finalización ni ingresos.', 'https://github.com/samihalawa/umbramed-eic-2026'),
  inventoryItem(60, 'timeline-skills', 'Skills & tooling publishing', '2026', '2026 Q1', 'open-source', 'verified', 'Reusable agent skills, browser, desktop and MCP infrastructure.', 'Skills reutilizables, navegador, escritorio e infraestructura MCP.', 'Public repository wave and local skill census.', 'Ola pública y censo local de skills.'),
  inventoryItem(61, 'timeline-gowa', 'GOWA', '2026', '2026 Q1', 'open-source', 'verified', 'WhatsApp API and automation work with history and media support.', 'API y automatización de WhatsApp con historial y medios.', 'Public/local repositories and tracker; API acceptance is not outbound proof.', 'Repositorios y tracker; aceptación API no prueba envío.', 'https://github.com/samihalawa/gowa-whatsapp-api'),
  inventoryItem(62, 'timeline-notion-drive', 'Notion–Drive synchronization', '2026', '2026 Q1', 'open-source', 'verified', 'Bidirectional content mirroring between Google Drive and Notion.', 'Sincronización bidireccional entre Google Drive y Notion.', 'Public repository, 3 stars at snapshot, plus direct mirror evidence.', 'Repositorio público, 3 estrellas y evidencia directa.', 'https://github.com/samihalawa/notion-google-drive-sync-worker'),

  inventoryItem(63, 'timeline-oulang-native', 'OULANG web, iOS & Android', '2026', '2026 Q2', 'products', 'verified', 'Native and web development across marketplace, payments, SEO and analytics.', 'Desarrollo web y nativo de marketplace, pagos, SEO y analítica.', 'Public store listings are legacy com.oulang.classifieds; current Expo wrapper uses oulang.app and console stages stay explicit.', 'Las tiendas públicas son la identidad heredada com.oulang.classifieds; el wrapper Expo actual usa oulang.app y las etapas de consola siguen explícitas.', 'https://oulang.ai'),
  inventoryItem(64, 'timeline-huatong', 'Huatong', '2026', '2026 Q2', 'products', 'verified', 'Multilingual jobs, housing and services platform for European Chinese communities.', 'Plataforma multilingüe de empleo, vivienda y servicios para comunidades chinas europeas.', 'Live domain, repositories and Linear evidence.', 'Dominio activo, repositorios y Linear.', 'https://huatong.eu', '/portfolio/huatong-home.png'),
  inventoryItem(65, 'timeline-infohuaxin', 'InfoHuaxin', '2025–2026', '2026 Q2', 'clients', 'verified', 'Connected Chinese-language classifieds and information platform.', 'Plataforma conectada de clasificados e información en chino.', 'Live surface, repositories and €12,400 across eight labelled rows.', 'Sitio activo, repositorios y €12.400 en ocho movimientos.', 'https://infohuaxin.es', '/portfolio/infohuaxin-home.png'),
  inventoryItem(66, 'timeline-oupin', 'OUPIN', '2026', '2026 Q2', 'products', 'verified', 'Multilingual commerce and discovery product with shared identity infrastructure.', 'Producto multilingüe de comercio y descubrimiento con identidad compartida.', 'Repositories and tracker issues; production domain and user metrics unconfirmed.', 'Repositorios y tracker; dominio y métricas no confirmados.', undefined, '/portfolio/oupin-hero.png'),
  inventoryItem(67, 'timeline-actors', 'Crawlab / Apify actor fleet', '2026', '2026 Q2', 'infrastructure', 'verified', 'Scraping actors, central storage and consumers across OULANG, Huatong and OUPIN.', 'Actores de scraping, almacenamiento central y consumidores para OULANG, Huatong y OUPIN.', 'Repositories and current infrastructure work; actor and record counts unconfirmed.', 'Repositorios e infraestructura; recuentos no confirmados.'),
  inventoryItem(68, 'timeline-chronicle', 'Codex Chronicle / Screenpipe', '2026', '2026 Q2', 'infrastructure', 'verified', 'Persistent visual memory and cross-session history recovery.', 'Memoria visual persistente y recuperación histórica entre sesiones.', 'Local skills and Screenpipe database; capture begins 2 Jun and health is degraded.', 'Skills locales y base Screenpipe; captura desde 2 jun con salud degradada.'),
  inventoryItem(69, 'timeline-telnyx', 'Telnyx voice tooling', '2026', '2026 Q2', 'open-source', 'verified', 'Voice, telephony and conversation-state integrations.', 'Integraciones de voz, telefonía y estado conversacional.', 'Public toolkits; queue acceptance is not call completion.', 'Toolkits públicos; una cola aceptada no prueba llamada completa.', 'https://github.com/samihalawa/telnyx-agentic'),
  inventoryItem(70, 'timeline-desktop-ops', 'Desktop Commander & operations skills', '2026', '2026 Q2', 'open-source', 'verified', 'Mac, browser, CRM and deployment workflow automation.', 'Automatización de flujos Mac, navegador, CRM y despliegue.', 'Local/public skill families; representative tools are curated.', 'Familias locales/públicas; se curan herramientas representativas.'),
  inventoryItem(71, 'timeline-madridresorts', 'MadridResorts', '2026', '2026 Q2', 'archive', 'verified', 'Hospitality-focused digital product and repository work.', 'Trabajo de producto digital orientado al sector hospitality.', 'Repository existence verified; scope, client and deployment unresolved.', 'Existencia verificada; alcance, cliente y despliegue por resolver.'),
  inventoryItem(72, 'timeline-vibracode', 'VibraCode', '2026', '2026 Q2', 'products', 'verified', 'Live software product surface with current repository work.', 'Superficie de producto activa con trabajo actual de repositorio.', 'Live page renders the expected product.', 'La página activa muestra el producto esperado.', 'https://vibracode.megawebs.com'),
  inventoryItem(73, 'timeline-automedical-live', 'AutoMedical live surface', '2026', '2026 Q2', 'products', 'verified', 'Public medical-AI product and education surface.', 'Superficie pública de producto y educación médica con IA.', 'Live page verified; no clinical results are inferred.', 'Página activa verificada; sin inferir resultados clínicos.', 'https://automedical.ai'),
  inventoryItem(74, 'timeline-public-surfaces', 'Personal, company & publishing surfaces', '2026', '2026 Q2', 'infrastructure', 'verified', 'samihalawa.com, PIME.ai, Agents AI and ChinoTotal identity surfaces.', 'Superficies de identidad de samihalawa.com, PIME.ai, Agents AI y ChinoTotal.', 'Each expected page returned 200 in the 16 Jul snapshot.', 'Cada página esperada devolvió 200 el 16 jul.', 'https://samihalawa.com'),
  inventoryItem(75, 'timeline-tasky', 'Tasky', '2026', '2026 Q2', 'products', 'verified', 'SwiftUI Google Tasks client for macOS, iOS and iPadOS.', 'Cliente SwiftUI de Google Tasks para macOS, iOS y iPadOS.', 'Source and review attempts verified; pre-release due to OAuth/review blockers.', 'Código e intentos verificados; pre-lanzamiento por bloqueos OAuth/revisión.'),
  inventoryItem(76, 'timeline-tutoring', 'AI tutoring / ITE / TusClases', '2026', '2026 Q2', 'education', 'verified', 'Course design and teaching tools for generative AI, automation, agents, n8n and multimodal content.', 'Diseño de cursos y herramientas docentes para IA generativa, automatización, agentes, n8n y contenido multimodal.', 'Inbound recruitment, negotiation and repositories; prospects are not delivered classes.', 'Reclutamiento, negociación y repositorios; prospectos no equivalen a clases impartidas.'),
  inventoryItem(77, 'timeline-world-cup', 'OULANG World Cup / sports-live module', '2026', '2026 Q2', 'products', 'verified', 'Predictions, leaderboard, standings, results and live-room/source flows.', 'Predicciones, clasificación, resultados y flujos de sala/fuente en vivo.', 'Implemented in current Expo source; live feed and conversion unverified.', 'Implementado en el código Expo; feed y conversión no verificados.'),
  inventoryItem(78, 'timeline-sonmade', 'SONMADE content factory', '2026', '2026 Q2', 'research', 'verified', 'FFmpeg/Sharp scene analysis and highlight extraction prototype.', 'Prototipo de análisis de escenas y extracción con FFmpeg/Sharp.', 'Code-level proof; deployment and end-user use unconfirmed.', 'Prueba a nivel de código; despliegue y uso final no confirmados.'),

  inventoryItem(79, 'timeline-autodate-live', 'AutoDate web & TestFlight', 'Jul 2026', '2026 Q3', 'products', 'verified', 'Live web product and an iOS build ready for TestFlight testing.', 'Producto web activo y compilación iOS lista para TestFlight.', 'Apple email: version 1.0.14 (39), ready to test 14 Jul; not App Store release.', 'Email de Apple: 1.0.14 (39), lista el 14 jul; no App Store.', 'https://autodate.ai', '/portfolio/autodate-home.png'),
  inventoryItem(80, 'timeline-recipes', 'Recipe intelligence with José Olivares', 'Jul 2026', '2026 Q3', 'research', 'verified', 'Workflow that turns chef notes and photos into structured recipes enriched from web and video sources, with multilingual publishing and generated media.', 'Flujo que convierte notas y fotos de chef en recetas estructuradas, enriquecidas con fuentes web y vídeo, publicación multilingüe y medios generados.', '8 Jul Meet transcript sidecar verified; no finished product, signed contract, payment, traffic or revenue claim.', 'Sidecar/transcripción del 8 jul verificado; sin producto terminado, contrato firmado, pago, tráfico ni ingresos.'),
  inventoryItem(81, 'timeline-tekce-oulang-autoclient', 'Tekçe / OULANG-AutoClient property leads', 'Jul 2026', '2026 Q3', 'clients', 'verified', 'Property lead-generation workflow for qualified Chinese buyers, transparent CRM handling and personalised AI outreach.', 'Flujo de generación de leads inmobiliarios con compradores chinos cualificados, gestión transparente en CRM y outreach personalizado con IA.', '15 Jul Meet English sidecar verified; proposal/demo only, with no signed partnership, payment, revenue, delivered campaign, conversion or partner acceptance claim.', 'Sidecar inglés de Meet del 15 jul verificado; solo propuesta/demo, sin partnership firmado, pago, ingresos, campaña entregada, conversión ni aceptación.'),
  inventoryItem(82, 'timeline-oulang-parity', 'OULANG native parity', 'Jul 2026', '2026 Q3', 'products', 'verified', 'Continued native parity, marketplace, payment and store work.', 'Continuación de paridad nativa, marketplace, pagos y tiendas.', 'Active oulang.app repository and public legacy store listings are separate; exact review status needs console read.', 'Repositorio oulang.app activo y tiendas públicas heredadas se registran por separado; el estado exacto requiere consola.'),
  inventoryItem(83, 'timeline-ea-housing', 'EA Housing / Radio Inter', 'Jul 2026', '2026 Q3', 'clients', 'verified', 'Modular AI, automation and digital-product package designed for separate companies and a shared group rollout.', 'Paquete modular de IA, automatización y producto digital para empresas separadas y un despliegue conjunto de grupo.', 'Current proposal repository; no signed contract, payment or delivery.', 'Repositorio actual; sin contrato firmado, pago ni entrega.'),
  inventoryItem(84, 'timeline-language-artifacts', 'Chinese soundscapes & poetry audio', '2026', '2026 Q3', 'education', 'verified', 'Onomatopoeia deck, exercises, vocabulary cards, bilingual materials and poetry audio.', 'Deck de onomatopeyas, ejercicios, tarjetas, materiales bilingües y audio de poesía.', 'Current PDFs, slides, source collection and audio manifests.', 'PDFs, diapositivas, colección y manifiestos actuales.'),
  inventoryItem(85, 'timeline-ai-act', 'PIME.ai EU AI Act pack', 'Jul 2026', '2026 Q3', 'products', 'verified', 'Multilingual fixed-price readiness pack with training and roadmap.', 'Pack multilingüe de precio fijo con formación y hoja de ruta.', 'Current source and live product surface; sales outcomes unverified.', 'Código y superficie activa; ventas no verificadas.', 'https://pime.ai/ai-act'),
  inventoryItem(86, 'timeline-private-artifacts', 'ClipKing / UseraLegal / Aida Facturas / IRSushi', '2026', '2026 Q3', 'archive', 'verified', 'Additional private and local product roots preserved for later case-study recovery.', 'Raíces privadas y locales preservadas para recuperar casos más adelante.', 'Filesystem and session evidence; scope, authorship and outcomes unresolved.', 'Evidencia de archivos y sesiones; alcance, autoría y resultados por resolver.'),
  inventoryItem(87, 'timeline-eva-training-scope', 'EVA AI & admin automation training', 'Nov 2025', '2025 Q4', 'education', 'verified', 'A 20–30 hour practical programme covering Copilot, prompting, browser automation, local file and accounting organisation, Microsoft To Do and FUNDAE logistics.', 'Programa práctico de 20–30 horas sobre Copilot, prompting, automatización web, organización local de archivos y contabilidad, Microsoft To Do y logística FUNDAE.', '11 Nov 2025 Google Meet sidecar verified; training scope/proposal evidence only, with no signed contract, payment, delivery, adoption or learner-outcome claim.', 'Sidecar Google Meet del 11 nov 2025 verificado; solo evidencia de alcance/propuesta, sin contrato firmado, pago, impartición, adopción ni resultado de alumnos.'),
  inventoryItem(88, 'timeline-mike-lepcsik-automation', 'Mike Lepcsik lead-generation automation', 'Nov 2025', '2025 Q4', 'clients', 'verified', 'Lead-generation architecture connecting n8n, Close CRM, Leadfeeder, Google Maps and Search enrichment, MCP agents and AutoClient-style scoring.', 'Arquitectura de generación de leads con n8n, Close CRM, Leadfeeder, enriquecimiento en Google Maps y Search, agentes MCP y scoring tipo AutoClient.', '12 Nov 2025 Google Meet sidecar verified; consulting/proposal evidence only, with no delivered client software, signed contract, paid engagement, production integration or sales-outcome claim.', 'Sidecar Google Meet del 12 nov 2025 verificado; solo evidencia de consultoría/propuesta, sin software entregado, contrato firmado, encargo pagado, integración en producción ni resultado comercial.'),
  inventoryItem(89, 'timeline-solmade-fashion-ai', 'SOLMADE fashion AI & marketing', 'Jan 2026', '2026 Q1', 'clients', 'verified', 'Fashion AI and marketing system design spanning brand, web/app, SEO, content automation, generated product imagery, social assets, ads, mockups and product videos.', 'Diseño de sistemas de IA y marketing para moda: marca, web/app, SEO, automatización de contenido, imagen de producto generada, social, anuncios, mockups y vídeos.', '9 Jan 2026 Google Meet sidecars verified; proposal/discovery evidence only, with no signed contract, delivery, revenue, global expansion, app launch, ad outcome or client-acceptance claim.', 'Sidecars Google Meet del 9 ene 2026 verificados; solo evidencia de propuesta/discovery, sin contrato firmado, entrega, ingresos, expansión global, lanzamiento app, resultado publicitario ni aceptación de cliente.'),
  inventoryItem(90, 'timeline-career-rebuild', 'Career evidence rebuild', 'Jul 2026', '2026 Q3', 'infrastructure', 'verified', 'Cross-source reconciliation of repositories, clients, products, writing, recordings and live surfaces.', 'Conciliación de repositorios, clientes, productos, escritura, grabaciones y sitios.', '90 classified entries, 249 public originals, 749 local Git roots and explicit known gaps.', '90 entradas, 249 originales públicos, 749 raíces Git y lagunas explícitas.'),
];

export const getInventoryCopy = (item: InventoryItem, language: LanguageCode) => ({
  summary: item.summary[language] || item.summary.en,
  source: item.source[language] || item.source.en,
});

export const getProjectCopy = (project: PortfolioProject, language: LanguageCode) => ({
  description: project.description[language] || project.description.en,
  proof: project.proof[language] || project.proof.en,
});
