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
  archive: copy('Earlier work', 'Trabajos anteriores', 'Travaux antérieurs', '早期作品'),
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'oulang', name: 'OULANG (欧浪AI)', period: '2026–present', category: 'platforms', featured: true,
    description: copy('Mandarin-first marketplace and local-life platform for Spain, developed across web, iOS and Android surfaces.', 'Marketplace y plataforma de vida local para la comunidad china en España, desarrollada en web, iOS y Android.', 'Marketplace et plateforme locale pour la communauté chinoise en Espagne, développée sur web, iOS et Android.', '面向西班牙华人社区的中文市场与本地生活平台，覆盖 Web、iOS 和 Android 开发。'),
    tags: ['Next.js', 'Expo', 'Gemini', 'RevenueCat', 'PostHog'], href: 'https://oulang.ai', image: '/portfolio/oulang-home.png', imagePosition: 'center 18%'
  },
  {
    id: 'huatong', name: 'Huatong', period: '2026–present', category: 'platforms', featured: true,
    description: copy('Chinese-first jobs, housing, classifieds and local-services platform spanning European markets.', 'Plataforma en chino de empleo, vivienda, clasificados y servicios locales para mercados europeos.', 'Plateforme chinoise d’emploi, logement, petites annonces et services locaux en Europe.', '面向欧洲市场的中文招聘、住房、分类信息与本地服务平台。'),
    tags: ['Multilingual', 'Marketplace', 'Mobile'], href: 'https://huatong.eu', image: '/portfolio/huatong-home.png', imagePosition: 'center 14%'
  },
  {
    id: 'autoclient', name: 'AutoClient', period: '2024–present', category: 'platforms',
    description: copy('Agentic research, enrichment, scoring, personalised outreach and CRM follow-up across email, WhatsApp and voice.', 'Investigación agéntica, enriquecimiento, scoring, contacto personalizado y CRM por email, WhatsApp y voz.'),
    tags: ['Agents', 'CRM', 'Outreach', 'Voice'], href: 'https://www.youtube.com/@autoclient-ai'
  },
  {
    id: 'autopricing', name: 'AutoPricing / IWAKY delivery', period: '2025–2026', category: 'platforms',
    description: copy('Pricing-intelligence and decision-reporting workflow combining marketplace data, product matching and inventory or ERP inputs.', 'Inteligencia de precios e informes de decisión con datos de marketplaces, matching e inventario o ERP.'),
    tags: ['Data pipelines', 'ERP', 'Reports', 'Automation'], image: '/portfolio/autopricing-dashboard.png'
  },
  {
    id: 'oupin', name: 'OUPIN', period: '2026', category: 'platforms',
    description: copy('Chinese-language AI commerce and discovery product focused on recommendation, trust and explainable comparison.', 'Producto chino de comercio y descubrimiento con IA centrado en recomendación, confianza y comparación explicable.'),
    tags: ['Commerce', 'Recommendation', 'Trust'], image: '/portfolio/oupin-hero.png'
  },
  {
    id: 'vuda', name: 'VUDA — Visual UI Debug Agent MCP', period: '2025–present', category: 'agents', featured: true,
    description: copy('Open-source agent that captures, annotates and reasons over live interfaces for visual debugging.', 'Agente abierto que captura, anota y razona sobre interfaces reales para depuración visual.', 'Agent open source qui capture, annote et analyse des interfaces réelles pour le débogage visuel.', '用于可视化调试的开源智能体：捕获、标注并分析真实界面。'),
    tags: ['MCP', 'Computer vision', 'Debugging'], href: 'https://github.com/samihalawa/visual-ui-debug-agent-mcp', image: '/portfolio/vuda-annotated.png', imagePosition: 'center 15%'
  },
  {
    id: 'gowa', name: 'GOWA WhatsApp API / WhatsApp MCP', period: '2025–2026', category: 'agents',
    description: copy('Go-based messaging, chat-history and media integration for operational agents and customer workflows.', 'Mensajería en Go, histórico de chats y medios para agentes operativos y flujos de cliente.'),
    tags: ['Go', 'WhatsApp', 'MCP', 'Messaging'], href: 'https://github.com/samihalawa/gowa-whatsapp-api'
  },
  {
    id: 'smtp', name: 'MCP Server SMTP / IMAP', period: '2025', category: 'agents',
    description: copy('Email transport and mailbox integration for agentic workflows.', 'Transporte de email e integración de buzones para flujos agénticos.'),
    tags: ['MCP', 'SMTP', 'IMAP', 'Email'], href: 'https://github.com/samihalawa/mcp-server-smtp'
  },
  {
    id: 'jules', name: 'Google Jules MCP', period: '2025', category: 'agents',
    description: copy('Open-source bridge for coding-agent workflows.', 'Puente open source para flujos con agentes de programación.'),
    tags: ['MCP', 'Coding agents', 'Automation']
  },
  {
    id: 'telnyx', name: 'Telnyx agentic tooling', period: '2026', category: 'agents',
    description: copy('Voice-agent, telephony, conversation-state and operational integration work packaged as reusable tools.', 'Agentes de voz, telefonía, estado conversacional e integraciones operativas como herramientas reutilizables.'),
    tags: ['Voice AI', 'Telephony', 'Tools']
  },
  {
    id: 'chronicle', name: 'Codex Chronicle / Screenpipe tooling', period: '2026', category: 'agents',
    description: copy('Context management and activity analysis for complex AI-assisted development workflows on macOS.', 'Gestión de contexto y análisis de actividad para flujos complejos de desarrollo asistido por IA en macOS.'),
    tags: ['Memory', 'Screenpipe', 'Codex', 'macOS']
  },
  {
    id: 'apolo', name: 'APOLO multimodal exploration', period: '2025', category: 'applied',
    description: copy('Public image-text model and architecture exploration based on DeepSeek-VL2-tiny for medical-image workflows.', 'Modelo público de imagen y texto y exploración de arquitectura basada en DeepSeek-VL2-tiny para flujos de imagen médica.'),
    tags: ['Multimodal', 'Vision-language', 'Human review'], href: 'https://huggingface.co/samihalawa/APOLO-medical-multimodal-instruct', image: '/portfolio/apolo-architecture.png'
  },
  {
    id: 'ophthalmology', name: 'Ophthalmology review & reporting', period: '2025–2026', category: 'applied',
    description: copy('Multimodal image-review, longitudinal-tracking and structured PDF-report prototypes with explicit human review.', 'Prototipos de revisión multimodal, seguimiento longitudinal e informes PDF con revisión humana explícita.'),
    tags: ['Python', 'Gemini', 'Reports']
  },
  {
    id: 'automedical', name: 'AutoMedical Academy', period: '2025–2026', category: 'applied',
    description: copy('AI-assisted medical learning and multimodal-workflow product experimentation.', 'Aprendizaje médico y experimentación de flujos multimodales asistidos por IA.'),
    tags: ['Education', 'AI workflows'], href: 'https://automedical.ai'
  },
  {
    id: 'intlaw', name: 'INTLAW AI dashboard', period: '2025', category: 'applied',
    description: copy('Legal-workflow and document or operations prototype developed in a collaboration context.', 'Prototipo de flujos legales, documentos y operaciones desarrollado en colaboración.'),
    tags: ['Legal workflows', 'Dashboard', 'Collaboration']
  },
  {
    id: 'recipes', name: 'Recipe intelligence platform', period: '2026', category: 'applied',
    description: copy('Product-discovery workflow for scanning chef notes/photos, researching recipes with agents, preserving technique, producing chef-ready/user-facing views and generating multilingual recipe media.', 'Flujo de discovery para escanear notas/fotos de chef, investigar recetas con agentes, preservar técnica, producir vistas para chef/usuario y generar medios multilingües.'),
    tags: ['Document AI', 'Research', 'Multilingual']
  },
  {
    id: 'chinototal', name: 'ChinoTotal', period: '2024 · Published book', category: 'education',
    description: copy('A 296-page Spanish-language Mandarin course for beginners, structured from zero to HSK2 / A2 and independently published through Amazon KDP.', 'Curso de mandarín para principiantes de 296 páginas en español, estructurado desde cero hasta HSK2 / A2 y publicado de forma independiente mediante Amazon KDP.'),
    tags: ['Mandarin', 'Writing', 'Education'], href: 'https://chinototal.com', image: '/portfolio/chinototal-home.png', imagePosition: 'center 25%'
  },
  {
    id: 'earlier', name: 'MelindaAI · KittyAI · Sharedetect · ZebraMenu · Megacursos', period: 'Earlier work', category: 'education',
    description: copy('Historical AI-learning, conversational support, access-control, digital-menu and course-platform work across web and mobile.', 'Trabajo histórico de aprendizaje con IA, soporte conversacional, control de acceso, menú digital y formación en web y móvil.'),
    tags: ['Web', 'Mobile', 'Education', 'Product'], href: 'https://melindaai.netlify.app'
  },
  {
    id: 'pime', name: 'PIME.ai', period: '2025–present', category: 'platforms', featured: true,
    description: copy('Product studio and operating surface for agentic services, including a multilingual EU AI Act readiness pack.', 'Estudio de producto y superficie operativa para servicios agénticos, incluido un pack multilingüe de preparación para la Ley de IA.'),
    tags: ['AI services', 'Compliance', 'Multilingual'], href: 'https://pime.ai'
  },
  {
    id: 'agents-ai', name: 'Agents AI Ltd', period: '2025–present', category: 'platforms',
    description: copy('London company and product portfolio spanning healthcare, revenue operations and applied AI systems.', 'Empresa y portfolio de producto en Londres para salud, operaciones comerciales y sistemas de IA aplicada.'),
    tags: ['Company', 'Products', 'Applied AI'], href: 'https://agentsai.ltd', image: '/portfolio/agentsai-home.png', imagePosition: 'center 20%'
  },
  {
    id: 'autodate', name: 'AutoDate.ai', period: '2025–present', category: 'platforms', featured: true,
    description: copy('Dating-product research and session automation across web and a native iOS build.', 'Investigación de producto y automatización de sesiones de citas en web y una compilación nativa para iOS.'),
    tags: ['Expo', 'iOS', 'Automation'], href: 'https://autodate.ai', image: '/portfolio/autodate-home.png', imagePosition: 'center 25%'
  },
  {
    id: 'infohuaxin', name: 'InfoHuaxin', period: '2025–present', category: 'platforms',
    description: copy('Connected Chinese-language classifieds and information-platform work with shared infrastructure and product operations.', 'Trabajo conectado de clasificados e información en chino con infraestructura y operaciones de producto compartidas.'),
    tags: ['Marketplace', 'Chinese', 'Operations'], href: 'https://infohuaxin.es', image: '/portfolio/infohuaxin-home.png', imagePosition: 'center 12%'
  },
  {
    id: 'tasky', name: 'Tasky', period: '2026', category: 'platforms',
    description: copy('Native SwiftUI Google Tasks client for macOS, iOS and iPadOS with menu-bar capture, widgets, share and sync.', 'Cliente nativo SwiftUI de Google Tasks para macOS, iOS y iPadOS con captura en barra, widgets, compartir y sincronización.'),
    tags: ['SwiftUI', 'Google Tasks', 'Widgets']
  },
  {
    id: 'umbramed', name: 'Umbramed · Valerio', period: '2025–2026', category: 'applied',
    description: copy('Clinical-study tooling in Ionic and Capacitor spanning OPE exam ingestion, assisted document workflows, installable PWA delivery, app packaging, payment integration, arrhythmia simulation and retinography ML exploration, with Sami as technical lead and Dr. Valerio Trigos as clinical lead.', 'Herramientas de estudio clínico en Ionic y Capacitor: ingesta de exámenes OPE, flujos documentales asistidos, PWA instalable, empaquetado de apps, integración de pagos, simulación de arritmias y exploración ML con retinografías, con Sami como responsable técnico y el Dr. Valerio Trigos como responsable clínico.'),
    tags: ['Ionic', 'Capacitor', 'Medical'], href: 'https://umbramed.es', image: '/portfolio/umbramed-home.png', imagePosition: 'center 18%'
  },
  {
    id: 'sort', name: 'SORT / SortBot', period: '2025', category: 'applied',
    description: copy('Course-PDF digitisation workflow with structured online learning, an embedded chatbot and publishing through an existing site.', 'Flujo de digitalización de PDFs con formación online estructurada, chatbot integrado y publicación en un sitio existente.'),
    tags: ['Education', 'Chatbot', 'Content'], href: 'https://github.com/samihalawa/sortbot'
  },
  {
    id: 'san-martin', name: 'San Martín HR automation', period: '2025', category: 'applied',
    description: copy('HR workflow design for birthday automation, timesheets, work-part rules, talent search and employee self-service.', 'Diseño de flujos RRHH para cumpleaños, partes, reglas de trabajo, búsqueda de talento y autoservicio del empleado.'),
    tags: ['HR', 'Automation', 'Proposal']
  },
  {
    id: 'scope', name: 'Fernando Ly / EyeUnit · Scope account intelligence', period: '2025–2026', category: 'applied',
    description: copy('Demonstrated prototype for list merging, cross-sell discovery and account scoring using product and clinical-market signals.', 'Prototipo demostrado para unir listas, descubrir venta cruzada y puntuar cuentas con señales de producto y mercado clínico.'),
    tags: ['Scoring', 'Medical markets', 'Prototype']
  },
  {
    id: 'notion-drive', name: 'Notion ↔ Google Drive Sync', period: '2026', category: 'agents',
    description: copy('Worker that mirrors Drive content into Notion databases and exports Notion pages back to Drive.', 'Worker que refleja contenido de Drive en bases de Notion y exporta páginas de Notion a Drive.'),
    tags: ['Notion', 'Google Drive', 'Workers'], href: 'https://github.com/samihalawa/notion-google-drive-sync-worker'
  },
  {
    id: 'macos-optimizer', name: 'macOS Optimizer', period: '2024', category: 'agents',
    description: copy('Open-source shell utility for inspecting and tuning macOS configuration and resource use.', 'Utilidad shell open source para inspeccionar y ajustar configuración y recursos de macOS.'),
    tags: ['macOS', 'Shell', 'Open source'], href: 'https://github.com/samihalawa/macos-optimizer'
  },
  {
    id: 'autorad', name: 'AutoRad', period: '2025', category: 'applied',
    description: copy('Radiology workflow concept for PACS/RIS-oriented reporting, review and human-in-the-loop decision support.', 'Concepto de flujo radiológico para informes y revisión orientados a PACS/RIS con apoyo a decisiones bajo supervisión humana.'),
    tags: ['Radiology', 'Workflow design', 'Human review']
  },
  {
    id: 'autocrypto', name: 'AutoCrypto', period: '2024–2025', category: 'applied',
    description: copy('Crypto-automation and PWA product exploration preserved across public and local repositories.', 'Exploración de automatización cripto y producto PWA preservada en repositorios públicos y locales.'),
    tags: ['PWA', 'Automation', 'Research'], href: 'https://github.com/samihalawa/Autocrypto.ai'
  },
  {
    id: 'sonmade', name: 'SONMADE content factory', period: '2026', category: 'applied',
    description: copy('React/TypeScript prototype using FFmpeg and Sharp to score scenes and extract video highlights.', 'Prototipo React/TypeScript con FFmpeg y Sharp para puntuar escenas y extraer momentos destacados.'),
    tags: ['FFmpeg', 'Sharp', 'Video AI']
  },
  {
    id: 'huggingface-writing', name: 'Hugging Face technical writing', period: '2024–present', category: 'education',
    description: copy('Public writing on agents, prompting, web crawling, browser AI and practical deployment.', 'Escritura pública sobre agentes, prompting, crawling web, IA en navegador y despliegue práctico.'),
    tags: ['Writing', 'AI agents', 'Hugging Face'], href: 'https://huggingface.co/samihalawa/posts'
  },
  {
    id: 'ai-course', name: 'AI Agent Architecture course', period: '2025–2026', category: 'education',
    description: copy('Fifteen-hour syllabus spanning foundations, tools, memory, multi-agent systems, RAG, deployment and observability.', 'Programa de quince horas sobre fundamentos, herramientas, memoria, multiagentes, RAG, despliegue y observabilidad.'),
    tags: ['Teaching', 'Agents', 'RAG']
  },
  {
    id: 'language-media', name: 'Poetry, Chinese soundscapes & audio', period: '2012–2026', category: 'education',
    description: copy('Youth poetry prize for “Olvidaste una llave en mi costado”, followed by a 72-poem web collection, Chinese onomatopoeia decks, printable exercises, vocabulary cards and generated poetry audio.', 'Premio juvenil por “Olvidaste una llave en mi costado”, seguido de una colección web de 72 poemas, materiales de onomatopeyas chinas, ejercicios, tarjetas de vocabulario y audio de poesía generado.'),
    tags: ['Poetry', 'Chinese', 'Audio']
  },
  {
    id: 'vibracode', name: 'VibraCode', period: '2026', category: 'platforms',
    description: copy('A live software product for moving from an idea to a structured, buildable application concept.', 'Producto de software activo para convertir una idea en un concepto de aplicación estructurado y construible.', 'Produit logiciel en ligne pour transformer une idée en concept d’application structuré et réalisable.', '把想法转化为结构化、可构建应用概念的在线软件产品。'),
    tags: ['Product design', 'AI workflow', 'Web'], href: 'https://vibracode.megawebs.com'
  },
  {
    id: 'oulang-world-cup', name: 'OULANG World Cup', period: '2026', category: 'platforms',
    description: copy('A sports-live module inside OULANG with predictions, leaderboards, standings, results and live-room flows.', 'Módulo deportivo dentro de OULANG con predicciones, clasificación, resultados y salas en directo.', 'Module sportif dans OULANG avec pronostics, classements, résultats et salons en direct.', 'OULANG 内的体育直播模块，包含预测、排行榜、积分、赛果与直播间流程。'),
    tags: ['Expo', 'Live data', 'Community']
  },
  {
    id: 'damesender', name: 'DameSender', period: '2020–2023', category: 'platforms',
    description: copy('The earliest public product in a longer email, outreach and customer-acquisition automation lineage.', 'El primer producto público de una trayectoria más amplia en email, outreach y automatización comercial.', 'Le premier produit public d’une trajectoire plus large en email, prospection et automatisation commerciale.', '邮件、触达与客户获取自动化长期产品线中的最早公开产品。'),
    tags: ['Email', 'Outreach', 'Product lineage'], href: 'https://github.com/samihalawa/damesender'
  },
  {
    id: 'productivity-apps', name: 'KittyTasks · FocusOnTask', period: '2024', category: 'platforms',
    description: copy('Focused productivity-app experiments exploring task capture, attention and lightweight personal workflows.', 'Experimentos de productividad centrados en captura de tareas, atención y flujos personales ligeros.', 'Expériences de productivité autour de la capture de tâches, de l’attention et de flux personnels légers.', '围绕任务捕捉、专注与轻量个人工作流的效率应用实验。'),
    tags: ['Productivity', 'Product design', 'Apps']
  },
  {
    id: 'crawlab-actors', name: 'Crawlab / Apify actor fleet', period: '2026', category: 'agents',
    description: copy('Reusable scraping actors, central storage and downstream consumers supporting OULANG, Huatong and OUPIN.', 'Actores de scraping reutilizables, almacenamiento central y consumidores para OULANG, Huatong y OUPIN.', 'Acteurs de scraping réutilisables, stockage central et consommateurs pour OULANG, Huatong et OUPIN.', '为 OULANG、Huatong 与 OUPIN 提供可复用采集任务、中央存储及下游消费。'),
    tags: ['Crawlab', 'Apify', 'Data pipelines']
  },
  {
    id: 'mcp-suite', name: 'Browser, shell & diff MCP suite', period: '2025–present', category: 'agents',
    description: copy('A family of command, browser, editing and comparison integrations that give AI agents practical operating tools.', 'Familia de integraciones de comandos, navegador, edición y comparación para dar herramientas prácticas a agentes de IA.', 'Famille d’intégrations commande, navigateur, édition et comparaison pour outiller concrètement les agents IA.', '为 AI 智能体提供命令、浏览器、编辑与差异比较能力的一组实用集成。'),
    tags: ['MCP', 'Browser', 'Developer tools'], href: 'https://github.com/samihalawa?tab=repositories'
  },
  {
    id: 'audio-multimodal', name: 'Audio & transcription tooling', period: '2024–present', category: 'agents',
    description: copy('Speech, audio, transcription and multimodal utilities developed across recording, meeting and content workflows.', 'Utilidades de voz, audio, transcripción y multimodalidad para grabación, reuniones y contenido.', 'Outils de voix, audio, transcription et multimodalité pour l’enregistrement, les réunions et le contenu.', '面向录音、会议与内容工作流的语音、音频、转录及多模态工具。'),
    tags: ['Speech', 'Transcription', 'Multimodal']
  },
  {
    id: 'lemon-ai', name: 'Lemon AI customization', period: '2025', category: 'agents',
    description: copy('Deployment, product identity, landing-page and infrastructure work built around the upstream open-source Lemon AI platform.', 'Despliegue, identidad, landing e infraestructura sobre la plataforma open source Lemon AI.', 'Déploiement, identité produit, landing page et infrastructure autour de la plateforme open source Lemon AI.', '围绕上游开源 Lemon AI 平台开展部署、产品形象、落地页与基础设施工作。'),
    tags: ['Open source', 'Deployment', 'Agent platform']
  },
  {
    id: 'autoiol', name: 'AutoIOL', period: '2024–2026', category: 'applied',
    description: copy('Ophthalmology-oriented software and AI explorations for image review, longitudinal tracking and structured reporting.', 'Exploraciones de software e IA oftalmológica para revisión de imagen, seguimiento longitudinal e informes estructurados.', 'Explorations logicielles et IA en ophtalmologie pour la revue d’images, le suivi longitudinal et les rapports structurés.', '面向眼科影像审阅、纵向跟踪与结构化报告的软件和 AI 探索。'),
    tags: ['Ophthalmology', 'Medical imaging', 'Human review']
  },
  {
    id: 'autohsk', name: 'AutoHSK & language tools', period: '2025–present', category: 'education',
    description: copy('AI-assisted Chinese study tools connecting language teaching, structured practice and software product design.', 'Herramientas de chino con IA que conectan enseñanza, práctica estructurada y diseño de producto.', 'Outils d’étude du chinois assistés par IA reliant enseignement, pratique structurée et produit logiciel.', '连接中文教学、结构化练习与软件产品设计的 AI 辅助学习工具。'),
    tags: ['Mandarin', 'Learning tools', 'AI']
  },
  {
    id: 'guided-learning', name: 'AutoTutorial · MentorIA · PerfectPrompter', period: '2025', category: 'education',
    description: copy('A family of guided-learning and prompt-design experiments focused on helping people work more effectively with AI.', 'Familia de aprendizaje guiado y diseño de prompts para trabajar mejor con IA.', 'Famille d’expériences d’apprentissage guidé et de conception de prompts pour mieux travailler avec l’IA.', '帮助人们更有效使用 AI 的引导式学习与提示设计实验系列。'),
    tags: ['Learning design', 'Prompting', 'Education']
  },
  {
    id: 'public-teaching', name: 'Public video & teaching catalogue', period: '2023–present', category: 'education',
    description: copy('A substantial public library spanning long-form AI lessons, automation, creative software, product walkthroughs and technical demonstrations.', 'Biblioteca pública de lecciones extensas de IA, automatización, software creativo, recorridos de producto y demostraciones técnicas.', 'Bibliothèque publique de cours IA, automatisation, logiciels créatifs, présentations produit et démonstrations techniques.', '涵盖 AI 长课程、自动化、创意软件、产品演示与技术展示的大型公开资料库。'),
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
  href?: string,
  image?: string,
): InventoryItem => ({ number, id, title, period, era, lane, status, summary: copy(en, es), href, image });

export const PORTFOLIO_INVENTORY: InventoryItem[] = [
  inventoryItem(1, 'timeline-realsintra', 'RealSintra software product', '2023', '2023', 'archive', 'verified', 'Early web product combining interface development with AI-assisted functionality.', 'Producto web temprano que combina desarrollo de interfaces con funciones asistidas por IA.', 'https://github.com/samihalawa/realsintra'),
  inventoryItem(2, 'timeline-chatgpt-react-es', 'Mi ChatGPT React Español', '2023', '2023', 'products', 'verified', 'Spanish React interface and ChatGPT experiment.', 'Interfaz React en español y experimento con ChatGPT.', 'https://github.com/samihalawa/michatgptreactespanol'),
  inventoryItem(3, 'timeline-openai-files', 'OpenAI / GPT files & experiments', '2023', '2023', 'research', 'verified', 'Early GPT file and workflow experiments.', 'Primeros experimentos con archivos y flujos GPT.', 'https://github.com/samihalawa/archivosopenedgptc'),
  inventoryItem(4, 'timeline-damesender', 'DameSender continuity', '2020–2023', '2023', 'products', 'verified', 'Email and outreach product lineage connecting to later agent work.', 'Línea de producto de email y outreach conectada con el trabajo posterior de agentes.', 'https://github.com/samihalawa/damesender'),

  inventoryItem(5, 'timeline-aprende-ia', 'Aprende IA / IA Megacursos', '2024', '2024', 'education', 'verified', 'AI education, course production and teaching materials.', 'Educación en IA, producción de cursos y materiales docentes.'),
  inventoryItem(6, 'timeline-menu-editor', 'MenuEditorElectron', '2024', '2024', 'products', 'verified', 'Desktop application for editing and managing structured menu content.', 'Aplicación de escritorio para editar y gestionar contenido estructurado de menús.'),
  inventoryItem(7, 'timeline-ai-absolut', 'AI Absolut & prompt research', '2024', '2024', 'research', 'verified', 'Applied prompt, system and model experimentation.', 'Experimentación aplicada con prompts, sistemas y modelos.'),
  inventoryItem(8, 'timeline-email-crawler', 'Email crawler & lead tooling', '2024', '2024', 'open-source', 'verified', 'Crawling and email-automation tooling.', 'Herramientas de crawling y automatización de email.'),
  inventoryItem(9, 'timeline-macos-optimizer', 'macOS Optimizer', '2024', '2024', 'open-source', 'verified', 'Open-source utility for inspecting and tuning macOS.', 'Utilidad open source para inspeccionar y ajustar macOS.', 'https://github.com/samihalawa/macos-optimizer'),
  inventoryItem(10, 'timeline-cloudflaredme', 'CloudflaredMe', '2024', '2024', 'infrastructure', 'verified', 'Developer utility for Cloudflare Tunnel and deployment workflows.', 'Utilidad para flujos de Cloudflare Tunnel y despliegue.'),
  inventoryItem(11, 'timeline-rafael-botella', 'Rafael Botella collaboration', '2024–2025', '2024', 'clients', 'verified', 'Digital product and technical consulting engagement.', 'Colaboración de producto digital y consultoría técnica.'),
  inventoryItem(12, 'timeline-autocrypto', 'AutoCrypto', '2024–2025', '2024', 'research', 'verified', 'Crypto automation and PWA product exploration.', 'Exploración de producto PWA y automatización cripto.', 'https://github.com/samihalawa/Autocrypto.ai'),
  inventoryItem(13, 'timeline-audio-tools', 'Audio & transcription tooling', '2024–present', '2024', 'open-source', 'verified', 'Speech, audio, transcription and multimodal workflow tools.', 'Herramientas de voz, audio, transcripción y flujos multimodales.'),
  inventoryItem(14, 'timeline-productivity', 'KittyTasks / FocusOnTask', '2024', '2024', 'products', 'verified', 'Productivity-app experiments preserved in repository history.', 'Experimentos de productividad preservados en el historial de repositorios.'),
  inventoryItem(15, 'timeline-autoclient-seed', 'AutoClient seed work', '2024', '2024', 'products', 'verified', 'Early automated client-acquisition product direction.', 'Inicio de la dirección de producto de captación automatizada.'),
  inventoryItem(16, 'timeline-generative-experiments', 'InfiniteStorageFace / Pollinations', '2024', '2024', 'research', 'verified', 'Generative-interface and storage experiments.', 'Experimentos de interfaces generativas y almacenamiento.'),
  inventoryItem(17, 'timeline-video-medsam', 'AutoVideo / MedSAM / AutoTraining', '2024', '2024', 'research', 'verified', 'Generative video, segmentation and training workflows.', 'Flujos de vídeo generativo, segmentación y entrenamiento.'),
  inventoryItem(18, 'timeline-autoiol', 'AutoIOL', '2024', '2024', 'research', 'verified', 'Ophthalmology-oriented software and AI tools.', 'Software y herramientas de IA orientados a oftalmología.'),
  inventoryItem(19, 'timeline-speakingai', 'SpeakingAI', '2024', '2024', 'research', 'verified', 'Speech and conversational-AI product prototype.', 'Prototipo de producto de voz e IA conversacional.'),
  inventoryItem(20, 'timeline-autoclient-monorepo', 'AutoClient monorepo & workers', '2024–2025', '2024', 'products', 'verified', 'Expansion into a multi-service automation and worker platform.', 'Expansión a una plataforma de automatización y workers.'),
  inventoryItem(21, 'timeline-eyeunit', 'EyeUnit / Fernando Ly', '2024–2026', '2024', 'clients', 'verified', 'Medical AI, OCT and account-intelligence collaboration.', 'Colaboración en IA médica, OCT e inteligencia de cuentas.'),
  inventoryItem(22, 'timeline-daniel-parisi', 'Daniel Parisi engagement', '2024', '2024', 'clients', 'verified', 'Focused digital-product consulting engagement.', 'Colaboración específica de consultoría de producto digital.'),
  inventoryItem(24, 'timeline-hf-writing-start', 'Hugging Face writing begins', '2024', '2024', 'education', 'verified', 'Public technical writing on agents, prompting and deployment.', 'Escritura técnica pública sobre agentes, prompting y despliegue.', 'https://huggingface.co/samihalawa/posts'),
  inventoryItem(25, 'timeline-colab', 'Applied AI research', '2024–present', '2024', 'research', 'verified', 'Research notebooks spanning multimodal AI, automation, evaluation and agent systems.', 'Notebooks de investigación sobre IA multimodal, automatización, evaluación y sistemas agénticos.'),

  inventoryItem(26, 'timeline-sort', 'SORT / SortBot', 'Jan–Feb 2025', '2025 Q1', 'clients', 'verified', 'Course-PDF digitisation workflow with online lessons, chatbot support and web publishing.', 'Flujo para digitalizar PDFs en cursos online con chatbot y publicación web.', 'https://github.com/samihalawa/sortbot'),
  inventoryItem(27, 'timeline-autohsk', 'AutoHSK & language tools', '2025', '2025 Q1', 'education', 'verified', 'AI-assisted Chinese-language study tools.', 'Herramientas de estudio de chino asistidas por IA.'),
  inventoryItem(28, 'timeline-blog-system', 'Blog & content systems', '2025–present', '2025 Q1', 'education', 'verified', 'Technical publishing, content automation and the current article system.', 'Publicación técnica, automatización de contenido y sistema actual de artículos.'),
  inventoryItem(29, 'timeline-smtp', 'SMTP MCP Server', '2025', '2025 Q1', 'open-source', 'verified', 'SMTP and mailbox integration for agent workflows.', 'Integración SMTP y de buzones para flujos con agentes.', 'https://github.com/samihalawa/mcp-server-smtp'),
  inventoryItem(30, 'timeline-mcp-suite', 'Shell, browser & diff MCP tools', '2025', '2025 Q1', 'open-source', 'verified', 'Command, browser and editing integrations for AI agents.', 'Integraciones de comandos, navegador y edición para agentes.'),
  inventoryItem(31, 'timeline-ophthalmology', 'Ophthalmology workflows', '2025–2026', '2025 Q1', 'research', 'verified', 'Ophthalmic image review, reporting and intelligence workflows.', 'Flujos oftalmológicos de revisión, informes e inteligencia.'),
  inventoryItem(32, 'timeline-hf-articles', 'Hugging Face technical articles', '2024–2025', '2025 Q1', 'education', 'verified', 'Twelve public articles on AI agents, automation and multimodal systems.', 'Doce artículos públicos sobre agentes de IA, automatización y sistemas multimodales.', 'https://huggingface.co/samihalawa/posts'),

  inventoryItem(33, 'timeline-apolo', 'APOLO multimodal medical AI', 'Apr 2025', '2025 Q2', 'research', 'verified', 'Medical image-text model based on a multimodal architecture.', 'Modelo médico de imagen y texto basado en una arquitectura multimodal.', 'https://huggingface.co/samihalawa/APOLO-medical-multimodal-instruct'),
  inventoryItem(34, 'timeline-vuda', 'VUDA — Visual UI Debug Agent', 'May 2025', '2025 Q2', 'open-source', 'verified', 'Visual capture, annotation and reasoning for interface debugging.', 'Captura, anotación y razonamiento visual para depurar interfaces.', 'https://github.com/samihalawa/visual-ui-debug-agent-mcp'),
  inventoryItem(35, 'timeline-education-products', 'AutoTutorial / MentorIA / PerfectPrompter', '2025', '2025 Q2', 'education', 'verified', 'Guided learning and prompting product experiments.', 'Experimentos de aprendizaje guiado y prompting.'),
  inventoryItem(36, 'timeline-wordlist', 'Wordlist Visual', '2025', '2025 Q2', 'clients', 'verified', 'Visual language-learning product and content collaboration.', 'Colaboración en producto visual y contenido para aprendizaje de idiomas.'),
  inventoryItem(37, 'timeline-scope', 'Scope account intelligence', 'Jul 2025', '2025 Q2', 'clients', 'verified', 'Cross-sell discovery and account scoring prototype.', 'Prototipo de venta cruzada y puntuación de cuentas.'),
  inventoryItem(38, 'timeline-fernando', 'Fernando Ly medical AI research', '2025–2026', '2025 Q2', 'clients', 'verified', 'Applied medical, OCT and market-intelligence collaboration.', 'Colaboración aplicada en medicina, OCT e inteligencia de mercado.'),
  inventoryItem(39, 'timeline-autoclient-expand', 'AutoClient expands', '2025', '2025 Q2', 'products', 'verified', 'Agentic acquisition platform with research, scoring and multichannel follow-up.', 'Plataforma agéntica de captación con investigación, scoring y seguimiento multicanal.'),
  inventoryItem(40, 'timeline-mcp-wave', 'Open-source MCP integrations', '2025', '2025 Q2', 'open-source', 'verified', 'Browser, shell, email and developer-tool integrations for AI agents.', 'Integraciones de navegador, shell, email y herramientas para agentes de IA.', 'https://github.com/samihalawa?tab=repositories'),
  inventoryItem(41, 'timeline-agents-ai', 'Agents AI Ltd', '2025–present', '2025 Q2', 'products', 'verified', 'Company and delivery vehicle for AI product and client work.', 'Empresa y vehículo de entrega para producto y clientes de IA.', 'https://agentsai.ltd', '/portfolio/agentsai-home.png'),
  inventoryItem(42, 'timeline-lanzadera', 'Lanzadera ecosystem participation', '2025', '2025 Q2', 'clients', 'verified', 'AutoClient participation in Lanzadera startup and partner benefits.', 'Participación de AutoClient en el ecosistema y beneficios de Lanzadera.'),

  inventoryItem(43, 'timeline-automedical-packaging', 'APOLO / AutoMedical packaging', '2025', '2025 Q3', 'products', 'verified', 'Packaging of medical AI research into a public product surface.', 'Empaquetado de investigación médica en una superficie pública.', 'https://automedical.ai'),
  inventoryItem(44, 'timeline-agent-utilities', 'Agent utilities & operating tools', '2025', '2025 Q3', 'open-source', 'verified', 'Automation, memory, browser and deployment utilities.', 'Utilidades de automatización, memoria, navegador y despliegue.'),
  inventoryItem(46, 'timeline-sites', 'Personal & company sites', '2025–present', '2025 Q3', 'infrastructure', 'verified', 'Identity, product, publishing and company-site engineering.', 'Ingeniería de identidad, producto, publicación y sitios corporativos.'),
  inventoryItem(47, 'timeline-whatsapp-mcp', 'WhatsApp MCP / automation', '2025–present', '2025 Q3', 'open-source', 'verified', 'Messaging, history and media integrations for agent workflows.', 'Integraciones de mensajería, historial y medios para agentes.', 'https://github.com/samihalawa/whatsapp-go-mcp'),

  inventoryItem(48, 'timeline-iwaky', 'IWAKY / AutoPricing', 'Oct 2025–2026', '2025 Q4', 'clients', 'verified', 'Pricing-intelligence system combining marketplace acquisition, product matching, WhatsApp quote analysis, ERP commerce and decision dashboards.', 'Sistema de inteligencia de precios con captación en marketplaces, matching, análisis de presupuestos de WhatsApp, comercio ERP y dashboards de decisión.'),
  inventoryItem(49, 'timeline-intlaw', 'INTLAW legal AI', 'Oct 2025–Jun 2026', '2025 Q4', 'clients', 'verified', 'Legal intake, prospecting and multi-agent case-file analysis across chat, WhatsApp and phone workflows.', 'Captación, intake y análisis jurídico multiagente mediante chat, WhatsApp y teléfono.', 'https://github.com/samihalawa/intlaw-demo'),
  inventoryItem(50, 'timeline-san-martin', 'San Martín HR automation', 'Oct 2025', '2025 Q4', 'clients', 'verified', 'HR workflow design for timesheets, work rules, talent search, employee self-service and birthday automation.', 'Diseño de flujos de RRHH para partes, reglas, talento, autoservicio del empleado y cumpleaños.'),
  inventoryItem(51, 'timeline-umbramed', 'Umbramed / Valerio', '2025–2026', '2025 Q4', 'clients', 'verified', 'Technical leadership across Ionic/Capacitor clinical-study tools, OPE exam ingestion, web/PWA delivery, automation research, payments, product design and medical-AI concepts.', 'Liderazgo técnico en herramientas clínicas Ionic/Capacitor, ingesta de exámenes OPE, entrega web/PWA, automatización, pagos, diseño de producto y conceptos de IA médica.', 'https://umbramed.es', '/portfolio/umbramed-home.png'),
  inventoryItem(52, 'timeline-autotinder', 'AutoTinder / AutoDate design', '2025', '2025 Q4', 'research', 'approximate', 'Extensive product-design and automation specifications.', 'Especificaciones amplias de diseño y automatización.'),
  inventoryItem(53, 'timeline-prototype-wave', 'Cross-sector product concepts', '2025', '2025 Q4', 'archive', 'verified', 'AutoProposal, AuraAI, HealthGuard, MessageFlow, PriceIntel and AutoMedical Academy across business, health and communications.', 'AutoProposal, AuraAI, HealthGuard, MessageFlow, PriceIntel y AutoMedical Academy para empresa, salud y comunicaciones.'),
  inventoryItem(54, 'timeline-poetry', 'Poetry prize & Sami Halawa poetry website', '2012–2025', '2025 Q4', 'education', 'verified', '2012 Nogarejas youth prize for “Olvidaste una llave en mi costado”, followed by a web collection of 72 original poems written from 2017 to 2022.', 'Premio juvenil de Nogarejas en 2012 por “Olvidaste una llave en mi costado”, seguido de una colección web de 72 poemas originales escritos entre 2017 y 2022.'),
  inventoryItem(55, 'timeline-lemon-ai', 'Lemon AI customization', 'Nov 2025', '2025 Q4', 'infrastructure', 'verified', 'Deployment, landing page, identity and infrastructure work on the upstream Lemon AI platform.', 'Despliegue, landing, identidad e infraestructura sobre Lemon AI upstream.'),
  inventoryItem(56, 'timeline-agents-course', '15-hour AI agents course', '2025', '2025 Q4', 'education', 'verified', 'Foundations, tools, memory, multi-agent systems, RAG, deployment and observability.', 'Fundamentos, herramientas, memoria, multiagentes, RAG, despliegue y observabilidad.'),

  inventoryItem(57, 'timeline-oulang-central', 'OULANG central production platform', '2026–present', '2026 Q1', 'products', 'verified', 'Chinese-diaspora housing, jobs, second-hand, services and community platform in Spain.', 'Plataforma para la diáspora china en España: vivienda, empleo, segunda mano, servicios y comunidad.', 'https://oulang.ai', '/portfolio/oulang-home.png'),
  inventoryItem(59, 'timeline-umbramed-continuation', 'Umbramed product development', '2026', '2026 Q1', 'clients', 'verified', 'Continued exam-ingestion, connector, PWA, app packaging, payment, brand and medical-product development.', 'Desarrollo continuado de ingesta de exámenes, conectores, PWA, packaging de app, pagos, marca y producto médico.', 'https://github.com/samihalawa/umbramed-eic-2026'),
  inventoryItem(60, 'timeline-skills', 'Agent tooling & automation', '2026', '2026 Q1', 'open-source', 'verified', 'Reusable browser, desktop and MCP tools for AI-assisted work.', 'Herramientas reutilizables de navegador, escritorio y MCP para trabajo asistido por IA.'),
  inventoryItem(61, 'timeline-gowa', 'GOWA', '2026', '2026 Q1', 'open-source', 'verified', 'WhatsApp API and automation work with history and media support.', 'API y automatización de WhatsApp con historial y medios.', 'https://github.com/samihalawa/gowa-whatsapp-api'),
  inventoryItem(62, 'timeline-notion-drive', 'Notion–Drive synchronization', '2026', '2026 Q1', 'open-source', 'verified', 'Bidirectional content mirroring between Google Drive and Notion.', 'Sincronización bidireccional entre Google Drive y Notion.', 'https://github.com/samihalawa/notion-google-drive-sync-worker'),

  inventoryItem(63, 'timeline-oulang-native', 'OULANG web, iOS & Android', '2026', '2026 Q2', 'products', 'verified', 'Native and web development across marketplace, payments, SEO and analytics.', 'Desarrollo web y nativo de marketplace, pagos, SEO y analítica.', 'https://oulang.ai'),
  inventoryItem(64, 'timeline-huatong', 'Huatong', '2026', '2026 Q2', 'products', 'verified', 'Multilingual jobs, housing and services platform for European Chinese communities.', 'Plataforma multilingüe de empleo, vivienda y servicios para comunidades chinas europeas.', 'https://huatong.eu', '/portfolio/huatong-home.png'),
  inventoryItem(65, 'timeline-infohuaxin', 'InfoHuaxin', '2025–2026', '2026 Q2', 'clients', 'verified', 'Connected Chinese-language classifieds and information platform.', 'Plataforma conectada de clasificados e información en chino.', 'https://infohuaxin.es', '/portfolio/infohuaxin-home.png'),
  inventoryItem(66, 'timeline-oupin', 'OUPIN', '2026', '2026 Q2', 'products', 'verified', 'Multilingual commerce and discovery product with shared identity infrastructure.', 'Producto multilingüe de comercio y descubrimiento con identidad compartida.', undefined, '/portfolio/oupin-hero.png'),
  inventoryItem(67, 'timeline-actors', 'Crawlab / Apify actor fleet', '2026', '2026 Q2', 'infrastructure', 'verified', 'Scraping actors, central storage and consumers across OULANG, Huatong and OUPIN.', 'Actores de scraping, almacenamiento central y consumidores para OULANG, Huatong y OUPIN.'),
  inventoryItem(68, 'timeline-chronicle', 'AI development context tools', '2026', '2026 Q2', 'infrastructure', 'verified', 'Context management and activity analysis for complex development workflows.', 'Gestión de contexto y análisis de actividad para flujos de desarrollo complejos.'),
  inventoryItem(69, 'timeline-telnyx', 'Telnyx voice tooling', '2026', '2026 Q2', 'open-source', 'verified', 'Voice, telephony and conversation-state integrations.', 'Integraciones de voz, telefonía y estado conversacional.', 'https://github.com/samihalawa/telnyx-agentic'),
  inventoryItem(70, 'timeline-desktop-ops', 'Desktop Commander & operations skills', '2026', '2026 Q2', 'open-source', 'verified', 'Mac, browser, CRM and deployment workflow automation.', 'Automatización de flujos Mac, navegador, CRM y despliegue.'),
  inventoryItem(71, 'timeline-madridresorts', 'MadridResorts', '2026', '2026 Q2', 'archive', 'verified', 'Hospitality-focused digital product and repository work.', 'Trabajo de producto digital orientado al sector hospitality.'),
  inventoryItem(72, 'timeline-vibracode', 'VibraCode', '2026', '2026 Q2', 'products', 'verified', 'Live product that turns an idea into a structured, buildable application concept.', 'Producto activo que convierte una idea en un concepto de aplicación estructurado y construible.', 'https://vibracode.megawebs.com'),
  inventoryItem(73, 'timeline-automedical-live', 'AutoMedical live surface', '2026', '2026 Q2', 'products', 'verified', 'Public medical-AI product and education surface.', 'Superficie pública de producto y educación médica con IA.', 'https://automedical.ai'),
  inventoryItem(74, 'timeline-public-surfaces', 'Portfolio, company & publishing websites', '2026', '2026 Q2', 'infrastructure', 'verified', 'Websites for samihalawa.com, PIME.ai, Agents AI and ChinoTotal.', 'Sitios web para samihalawa.com, PIME.ai, Agents AI y ChinoTotal.', 'https://samihalawa.com'),
  inventoryItem(75, 'timeline-tasky', 'Tasky', '2026', '2026 Q2', 'products', 'verified', 'SwiftUI Google Tasks client for macOS, iOS and iPadOS.', 'Cliente SwiftUI de Google Tasks para macOS, iOS y iPadOS.'),
  inventoryItem(76, 'timeline-tutoring', 'AI tutoring / ITE / TusClases', '2026', '2026 Q2', 'education', 'verified', 'Course design and teaching tools for generative AI, automation, agents, n8n and multimodal content.', 'Diseño de cursos y herramientas docentes para IA generativa, automatización, agentes, n8n y contenido multimodal.'),
  inventoryItem(77, 'timeline-world-cup', 'OULANG World Cup / sports-live module', '2026', '2026 Q2', 'products', 'verified', 'Predictions, leaderboard, standings, results and live-room/source flows.', 'Predicciones, clasificación, resultados y flujos de sala/fuente en vivo.'),
  inventoryItem(78, 'timeline-sonmade', 'SONMADE content factory', '2026', '2026 Q2', 'research', 'verified', 'FFmpeg/Sharp scene analysis and highlight extraction prototype.', 'Prototipo de análisis de escenas y extracción con FFmpeg/Sharp.'),

  inventoryItem(79, 'timeline-autodate-live', 'AutoDate web & TestFlight', 'Jul 2026', '2026 Q3', 'products', 'verified', 'Live web product and an iOS build ready for TestFlight testing.', 'Producto web activo y compilación iOS lista para TestFlight.', 'https://autodate.ai', '/portfolio/autodate-home.png'),
  inventoryItem(80, 'timeline-recipes', 'Recipe intelligence with José Olivares', 'Jul 2026', '2026 Q3', 'research', 'verified', 'Workflow that turns chef notes and photos into structured recipes enriched from web and video sources, with multilingual publishing and generated media.', 'Flujo que convierte notas y fotos de chef en recetas estructuradas, enriquecidas con fuentes web y vídeo, publicación multilingüe y medios generados.'),
  inventoryItem(81, 'timeline-tekce-oulang-autoclient', 'Tekçe / OULANG-AutoClient property leads', 'Jul 2026', '2026 Q3', 'clients', 'verified', 'Property lead-generation workflow for qualified Chinese buyers, transparent CRM handling and personalised AI outreach.', 'Flujo de generación de leads inmobiliarios con compradores chinos cualificados, gestión transparente en CRM y outreach personalizado con IA.'),
  inventoryItem(82, 'timeline-oulang-parity', 'OULANG native parity', 'Jul 2026', '2026 Q3', 'products', 'verified', 'Continued native parity, marketplace, payment and store work.', 'Continuación de paridad nativa, marketplace, pagos y tiendas.'),
  inventoryItem(83, 'timeline-ea-housing', 'EA Housing / Radio Inter', 'Jul 2026', '2026 Q3', 'clients', 'verified', 'Modular AI, automation and digital-product package designed for separate companies and a shared group rollout.', 'Paquete modular de IA, automatización y producto digital para empresas separadas y un despliegue conjunto de grupo.'),
  inventoryItem(84, 'timeline-language-artifacts', 'Chinese soundscapes & poetry audio', '2026', '2026 Q3', 'education', 'verified', 'Onomatopoeia deck, exercises, vocabulary cards, bilingual materials and poetry audio.', 'Deck de onomatopeyas, ejercicios, tarjetas, materiales bilingües y audio de poesía.'),
  inventoryItem(85, 'timeline-ai-act', 'PIME.ai EU AI Act pack', 'Jul 2026', '2026 Q3', 'products', 'verified', 'Multilingual fixed-price readiness pack with training and roadmap.', 'Pack multilingüe de precio fijo con formación y hoja de ruta.', 'https://pime.ai/ai-act'),
  inventoryItem(87, 'timeline-eva-training-scope', 'EVA AI & admin automation training', 'Nov 2025', '2025 Q4', 'education', 'verified', 'A 20–30 hour practical programme covering Copilot, prompting, browser automation, local file and accounting organisation, Microsoft To Do and FUNDAE logistics.', 'Programa práctico de 20–30 horas sobre Copilot, prompting, automatización web, organización local de archivos y contabilidad, Microsoft To Do y logística FUNDAE.'),
  inventoryItem(88, 'timeline-mike-lepcsik-automation', 'Mike Lepcsik lead-generation automation', 'Nov 2025', '2025 Q4', 'clients', 'verified', 'Lead-generation architecture connecting n8n, Close CRM, Leadfeeder, Google Maps and Search enrichment, MCP agents and AutoClient-style scoring.', 'Arquitectura de generación de leads con n8n, Close CRM, Leadfeeder, enriquecimiento en Google Maps y Search, agentes MCP y scoring tipo AutoClient.'),
  inventoryItem(89, 'timeline-solmade-fashion-ai', 'SOLMADE fashion AI & marketing', 'Jan 2026', '2026 Q1', 'clients', 'verified', 'Fashion AI and marketing system design spanning brand, web/app, SEO, content automation, generated product imagery, social assets, ads, mockups and product videos.', 'Diseño de sistemas de IA y marketing para moda: marca, web/app, SEO, automatización de contenido, imagen de producto generada, social, anuncios, mockups y vídeos.'),
];

export const getInventoryCopy = (item: InventoryItem, language: LanguageCode) => ({
  summary: item.summary[language] || item.summary.en,
});

export const getProjectCopy = (project: PortfolioProject, language: LanguageCode) => ({
  description: project.description[language] || project.description.en,
});
