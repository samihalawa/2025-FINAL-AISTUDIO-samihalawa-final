import type { LanguageCode } from './i18n/LanguageContext';

export type PortfolioCategory = 'platforms' | 'agents' | 'applied' | 'education';

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

const copy = (en: string, es: string, fr = en, zh = en): LocalizedCopy => ({ en, es, fr, zh });

export const categoryCopy: Record<PortfolioCategory, LocalizedCopy> = {
  platforms: copy('Products & platforms', 'Productos y plataformas', 'Produits et plateformes', '产品与平台'),
  agents: copy('Agents, MCP & developer tools', 'Agentes, MCP y herramientas', 'Agents, MCP et outils', '智能体、MCP 与开发工具'),
  applied: copy('Applied & experimental AI', 'IA aplicada y experimental', 'IA appliquée et expérimentale', '应用与实验性 AI'),
  education: copy('Education, media & earlier products', 'Educación, medios y productos anteriores', 'Éducation, médias et produits antérieurs', '教育、媒体与早期产品'),
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'oulang', name: 'OULANG (欧浪AI)', period: '2026–present', category: 'platforms', featured: true,
    description: copy('Mandarin-first marketplace and local-life platform for Spain, shipped across web, iOS and Android.', 'Marketplace y plataforma de vida local para la comunidad china en España, publicada en web, iOS y Android.', 'Marketplace et plateforme locale pour la communauté chinoise en Espagne, sur web, iOS et Android.', '面向西班牙华人社区的中文市场与本地生活平台，已发布 Web、iOS 和 Android。'),
    proof: copy('17,262 users · 38,857 listings · 89,913 contact reveals on 3 Jul 2026', '17.262 usuarios · 38.857 anuncios · 89.913 contactos a 3 jul 2026', '17 262 utilisateurs · 38 857 annonces · 89 913 contacts au 3 juil. 2026', '截至 2026-07-03：17,262 用户 · 38,857 条信息 · 89,913 次联系方式查看'),
    tags: ['Next.js', 'Expo', 'Gemini', 'RevenueCat', 'PostHog'], href: 'https://oulang.ai', image: '/portfolio/oulang-home.png', imagePosition: 'center 18%'
  },
  {
    id: 'huatong', name: 'Huatong', period: '2026–present', category: 'platforms', featured: true,
    description: copy('Chinese-first jobs, housing, classifieds and local-services platform spanning European markets.', 'Plataforma en chino de empleo, vivienda, clasificados y servicios locales para mercados europeos.', 'Plateforme chinoise d’emploi, logement, petites annonces et services locaux en Europe.', '面向欧洲市场的中文招聘、住房、分类信息与本地服务平台。'),
    proof: copy('Live web product with current mobile/store media', 'Producto web activo con medios móviles actuales', 'Produit web en ligne avec médias mobiles actuels', '线上产品，含当前移动端与商店素材'),
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
    tags: ['Mandarin', 'Writing', 'Education'], href: 'https://www.amazon.es/dp/B0CRJPJ9Y2'
  },
  {
    id: 'earlier', name: 'MelindaAI · KittyAI · Sharedetect · ZebraMenu · Megacursos', period: 'Earlier work', category: 'education',
    description: copy('Historical AI-learning, conversational support, access-control, digital-menu and course-platform work across web and mobile.', 'Trabajo histórico de aprendizaje con IA, soporte conversacional, control de acceso, menú digital y formación en web y móvil.'),
    proof: copy('Preserved across historical CVs and project archives; detailed impact remains unclaimed', 'Preservado en CVs y archivos; no se afirma impacto sin prueba adicional'),
    tags: ['Web', 'Mobile', 'Education', 'Product']
  }
];

export const getProjectCopy = (project: PortfolioProject, language: LanguageCode) => ({
  description: project.description[language] || project.description.en,
  proof: project.proof[language] || project.proof.en,
});
