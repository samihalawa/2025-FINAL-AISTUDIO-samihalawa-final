import type { LanguageCode } from '../../i18n/LanguageContext';

// Location copy lives here rather than in i18n/translations.ts because it is
// long-form page body, not interface chrome. Spanish is authored where it
// matters for the local market; other locales fall back to English.

export type Faq = { question: string; answer: string };
export type RelatedLink = { href: string; label: string };

export type LocationBlock = {
  /** Lead paragraph under the H1. */
  lead: string;
  sections: Array<{ heading: string; body: string }>;
  faqs: Faq[];
  related: RelatedLink[];
};

type Localised<T> = { en: T; es?: T };

export function pick<T>(entry: Localised<T>, language: LanguageCode): T {
  if (language === 'es' && entry.es) return entry.es;
  return entry.en;
}

export const LOCATION_LABELS: Record<'en' | 'es', { related: string; faq: string; onThisPage: string }> = {
  en: { related: 'Related work', faq: 'Questions teams ask before booking', onThisPage: 'Local delivery' },
  es: { related: 'Trabajo relacionado', faq: 'Preguntas antes de reservar', onThisPage: 'Entrega local' },
};

export function labels(language: LanguageCode) {
  return language === 'es' ? LOCATION_LABELS.es : LOCATION_LABELS.en;
}

// --- City + service landing pages ----------------------------------------

export const CITY_SERVICE_CONTENT: Record<string, Localised<LocationBlock>> = {
  '/locations/madrid/ai-readiness-audit': {
    en: {
      lead: 'Madrid is home base, so a readiness audit here starts in person: in your office, beside the people who actually run the workflow, looking at the system you already have in production rather than a sanitised demo of it.',
      sections: [
        {
          heading: 'Who books this in Madrid',
          body: 'Operations, product and data leads at Madrid companies that already put AI somewhere near a customer — a support assistant, a document pipeline, a sales sequence, an internal copilot — and cannot answer three questions about it: how often is it wrong, what does it cost per month, and who signs off on what it produces. The audit is built to answer exactly those three, with evidence you can show a board or a client.',
        },
        {
          heading: 'How the on-site work runs',
          body: 'The default shape is two on-site days inside the M-30, split into a discovery day and a review day roughly two weeks apart, so there is time to pull real logs between them. Sessions run in your own environment with your own data; nothing has to be exported into a sandbox. Half-day formats work for teams out in Las Rozas, Alcobendas, Tres Cantos and the Corredor del Henares, and remote follow-up is included for the fortnight after the review day. Scheduling is flexible around the usual Madrid constraints — early starts before standups, or afternoon blocks after 16:00.',
        },
        {
          heading: 'Language and documentation',
          body: 'Facilitation in Spanish or English, whichever the room prefers, and the written audit is delivered in both so it can travel to a non-Spanish-speaking parent company without a translation round. Mixed rooms are normal here and switching mid-session is not a problem. Mandarin is available where a Chinese counterpart or supplier is part of the picture.',
        },
        {
          heading: 'Where the method comes from',
          body: 'The checklist is not a framework deck. It comes from shipping and maintaining production systems: a pricing-intelligence and ERP-reporting delivery scoped at €35K for a B2B distributor, revenue-operations agents that write into a live CRM and hand off to humans, and a multimodal medical workflow where every generated report passes a named reviewer before it counts as anything.',
        },
      ],
      faqs: [
        { question: 'Do you need production access?', answer: 'Read access to logs, prompts and evaluation data is enough for the discovery day. Write access is never required, and anything sensitive can stay on your machines with screen-share review instead.' },
        { question: 'How soon do we get the written audit?', answer: 'The scorecard and risk matrix arrive within five working days of the discovery day; the hardening plan is walked through live on the review day so the priorities are agreed in the room, not emailed.' },
        { question: 'Can it cover a system built by another vendor?', answer: 'Yes — most audits do. The report describes what the system does and where it is fragile, without needing the original team present.' },
      ],
      related: [
        { href: '/case-studies/autopricing', label: 'AutoPricing — pricing intelligence with operator review' },
        { href: '/case-studies/autoclient', label: 'AutoClient — revenue operations with human handoffs' },
        { href: '/services/ai-readiness-audit', label: 'Full AI readiness audit scope' },
      ],
    },
    es: {
      lead: 'Madrid es la base, así que aquí la auditoría empieza presencialmente: en vuestra oficina, junto a quien ejecuta el flujo cada día, revisando el sistema que ya tenéis en producción y no una demo preparada.',
      sections: [
        {
          heading: 'Quién contrata esto en Madrid',
          body: 'Responsables de operaciones, producto y datos en empresas madrileñas que ya tienen IA cerca del cliente —un asistente de soporte, un pipeline documental, una secuencia comercial, un copiloto interno— y no saben responder a tres preguntas: con qué frecuencia se equivoca, cuánto cuesta al mes y quién valida lo que produce. La auditoría está construida para responder exactamente a esas tres, con evidencia presentable ante un consejo o un cliente.',
        },
        {
          heading: 'Cómo se ejecuta el trabajo presencial',
          body: 'El formato habitual son dos jornadas presenciales dentro de la M-30, separadas unas dos semanas: una de descubrimiento y otra de revisión, para tener tiempo de recopilar logs reales entre ambas. Se trabaja en vuestro entorno y con vuestros datos, sin exportar nada a un sandbox. Hay formatos de media jornada para equipos en Las Rozas, Alcobendas, Tres Cantos y el Corredor del Henares, y el seguimiento remoto está incluido durante las dos semanas posteriores.',
        },
        {
          heading: 'Idioma y documentación',
          body: 'Facilitación en español o inglés, y el informe se entrega en ambos idiomas para que pueda viajar a una matriz no hispanohablante sin ronda de traducción. Las salas mixtas son lo normal y cambiar de idioma a media sesión no es problema. Mandarín disponible cuando hay contraparte o proveedor chino en la ecuación.',
        },
        {
          heading: 'De dónde sale el método',
          body: 'No es un checklist de consultora. Sale de construir y mantener sistemas en producción: una entrega de inteligencia de precios e informes conectados a ERP con alcance de 35.000 € para un distribuidor B2B, agentes de revenue operations que escriben en un CRM real y ceden el control a personas, y un flujo médico multimodal donde cada informe generado pasa por un revisor con nombre y apellidos.',
        },
      ],
      faqs: [
        { question: '¿Necesitas acceso a producción?', answer: 'Con acceso de lectura a logs, prompts y datos de evaluación es suficiente para la jornada de descubrimiento. Nunca hace falta acceso de escritura, y lo sensible puede quedarse en vuestras máquinas revisándolo por pantalla compartida.' },
        { question: '¿Cuándo llega el informe?', answer: 'El scorecard y la matriz de riesgo, en cinco días laborables desde la jornada de descubrimiento; el plan de endurecimiento se recorre en vivo el día de revisión para acordar prioridades en la sala.' },
        { question: '¿Sirve para un sistema hecho por otro proveedor?', answer: 'Sí, es el caso más frecuente. El informe describe qué hace el sistema y dónde es frágil sin necesidad de que el equipo original esté presente.' },
      ],
      related: [
        { href: '/case-studies/autopricing', label: 'AutoPricing — inteligencia de precios con revisión humana' },
        { href: '/case-studies/autoclient', label: 'AutoClient — revenue operations con relevo humano' },
        { href: '/services/ai-readiness-audit', label: 'Alcance completo de la auditoría' },
      ],
    },
  },

  '/locations/barcelona/prompt-engineering': {
    en: {
      lead: 'Barcelona training runs as a travelling two-day block rather than a string of scattered afternoons, so the trip from Madrid buys your team a genuine build session instead of an introduction that stops at the interesting part.',
      sections: [
        {
          heading: 'Who books this in Barcelona',
          body: 'Product engineers, support leads and growth teams in Barcelona who already have an LLM feature in front of users and are now losing time to it: prompts that regress whenever someone edits them, tool calls that silently return the wrong shape, output that is right in the demo and wrong on Friday afternoon. The session is aimed at teams that need the behaviour to be repeatable, not at teams looking for a first tour of ChatGPT.',
        },
        {
          heading: 'Travel and on-site logistics',
          body: 'Delivery is a two-day block, usually Thursday and Friday so the team can absorb it over the weekend. Day one covers system prompts, tool calling, structured outputs and failure modes; day two is spent building an evaluation set from your own transcripts and wiring it so it runs on every change. Travel and accommodation are arranged from Madrid and quoted up front as one flat line — no per-diem surprises. Offices in 22@ and Poblenou, the Diagonal corridor, Sant Cugat and the wider Vallès are all comfortably inside the same block, and a hybrid room with remote colleagues dialling in is supported by design.',
        },
        {
          heading: 'Language and materials',
          body: 'Facilitation in Spanish, Catalan-friendly English or English, with slides, prompt libraries and evaluation templates handed over in English so they survive contact with your codebase. Mandarin is available when the team works with Chinese partners. Everything handed over is yours to keep and re-run internally.',
        },
        {
          heading: 'Grounded in shipped work',
          body: 'The patterns taught are the ones running in production systems: agent tooling that has to call real APIs and recover when they fail, a multilingual marketplace where the same prompt must behave in Spanish, English and Chinese, and a medical reporting workflow where a structured output is the difference between a reviewable draft and an unusable one. Instruction experience runs to more than 125 hours of delivered AI teaching.',
        },
      ],
      faqs: [
        { question: 'Can we work in our own repository?', answer: 'Yes, and it is the better version of the session. Day two is designed to leave your repo with a working evaluation harness rather than leaving you with a slide deck about one.' },
        { question: 'Half our team is remote — does that break the format?', answer: 'No. The room is run hybrid by default, with exercises structured so remote participants build alongside rather than watch.' },
        { question: 'Is there a single-day version?', answer: 'There is, but it stops after the prompt and tool-calling material. The evaluation work is what makes the improvements stick, so the two-day block is the recommended shape.' },
      ],
      related: [
        { href: '/case-studies/oulang', label: 'OULANG — multilingual product where prompts ship in three languages' },
        { href: '/case-studies/apolo-medical-framework', label: 'APOLO — structured outputs under human review' },
        { href: '/services/prompt-engineering', label: 'Full prompt engineering curriculum' },
      ],
    },
    es: {
      lead: 'En Barcelona la formación se entrega como un bloque itinerante de dos días, no como tardes sueltas: así el viaje desde Madrid le compra al equipo una sesión de construcción real y no una introducción que se corta en la parte interesante.',
      sections: [
        {
          heading: 'Quién contrata esto en Barcelona',
          body: 'Equipos de producto, soporte y growth en Barcelona que ya tienen una función LLM delante de usuarios y están perdiendo tiempo con ella: prompts que se degradan cada vez que alguien los toca, llamadas a herramientas que devuelven la forma equivocada en silencio, salidas correctas en la demo y equivocadas el viernes por la tarde. No es una primera toma de contacto con ChatGPT.',
        },
        {
          heading: 'Viaje y logística presencial',
          body: 'Bloque de dos días, normalmente jueves y viernes. El primer día cubre system prompts, tool calling, salidas estructuradas y modos de fallo; el segundo se dedica a construir un set de evaluación con vuestras propias conversaciones y dejarlo ejecutándose en cada cambio. El desplazamiento y alojamiento se organizan desde Madrid y se presupuestan como una línea cerrada, sin dietas sorpresa. Oficinas en el 22@ y Poblenou, el corredor de la Diagonal, Sant Cugat y el Vallès entran cómodamente en el mismo bloque, y la sala híbrida está contemplada desde el diseño.',
        },
        {
          heading: 'Idioma y materiales',
          body: 'Facilitación en español o inglés, con transparencias, librería de prompts y plantillas de evaluación entregadas en inglés para que sobrevivan al contacto con vuestro código. Mandarín disponible si el equipo trabaja con socios chinos. Todo lo entregado es vuestro y se puede repetir internamente.',
        },
        {
          heading: 'Basado en trabajo entregado',
          body: 'Los patrones que se enseñan son los que están en producción: tooling de agentes que llama a APIs reales y se recupera cuando fallan, un marketplace multilingüe donde el mismo prompt debe comportarse en español, inglés y chino, y un flujo de informes médicos donde la salida estructurada marca la diferencia entre un borrador revisable y uno inservible. Más de 125 horas de docencia en IA impartidas.',
        },
      ],
      faqs: [
        { question: '¿Podemos trabajar en nuestro propio repositorio?', answer: 'Sí, y es la mejor versión de la sesión: el segundo día busca dejar vuestro repo con un harness de evaluación funcionando, no con una presentación sobre uno.' },
        { question: 'La mitad del equipo es remota, ¿rompe el formato?', answer: 'No. La sala se ejecuta en híbrido por defecto y los ejercicios están pensados para que quien está en remoto construya, no mire.' },
        { question: '¿Existe versión de un solo día?', answer: 'Existe, pero se corta tras la parte de prompts y tool calling. La evaluación es lo que hace que la mejora aguante, así que el bloque de dos días es el formato recomendado.' },
      ],
      related: [
        { href: '/case-studies/oulang', label: 'OULANG — producto multilingüe con prompts en tres idiomas' },
        { href: '/case-studies/apolo-medical-framework', label: 'APOLO — salidas estructuradas con revisión humana' },
        { href: '/services/prompt-engineering', label: 'Programa completo de prompt engineering' },
      ],
    },
  },

  '/locations/valencia/rag-langchain': {
    en: {
      lead: 'Valencia gets the startup-shaped version of the RAG workshop: one intensive on-site day at your office or coworking space, followed by a remote build week while the material is still warm and the team is still arguing about chunk sizes.',
      sections: [
        {
          heading: 'Who books this in Valencia',
          body: 'Founding engineers and small product teams around Marina de Empresas, Lanzadera, the Ciutat Politècnica de la Innovació and the Ruzafa startup cluster who have shipped a retrieval prototype that demos well and answers badly. The recurring symptom is the same: the vector search returns plausible chunks, nobody can say whether the final answer was actually supported by them, and there is no way to tell whether last week’s change made things better or worse.',
        },
        {
          heading: 'On-site day, then a remote build week',
          body: 'The on-site day covers ingestion and chunking against your real corpus, hybrid search, reranking, and how to make a retrieval failure visible instead of letting the model paper over it. The following week runs remotely: two working sessions where your team builds the evaluation set and the observability hooks, with asynchronous review in between. Travel from Madrid is by AVE, so an early start is genuinely early rather than theoretical, and single-day scheduling keeps the cost sensible for a seed-stage budget. Teams in Paterna, Alboraia and the Parc Tecnològic are inside the same day.',
        },
        {
          heading: 'Language and format',
          body: 'Spanish or English facilitation, with all code, notebooks and evaluation templates in English. Mandarin is available where it is useful. The workshop is deliberately capped at a small group so it stays a working session rather than a lecture — everyone leaves with the pipeline running on their own machine.',
        },
        {
          heading: 'What it is grounded in',
          body: 'Retrieval work that had to survive production: a multilingual marketplace where the same query arrives in three languages and must not return the wrong city’s listings, MCP-based developer tooling where retrieved context decides whether an agent fixes or breaks a file, and a medical workflow where an unsupported answer is not a bad answer but an unacceptable one.',
        },
      ],
      faqs: [
        { question: 'We are pre-seed — is this sized for us?', answer: 'The single on-site day plus remote build week exists for exactly that. It is the smallest format that still ends with a working evaluation loop rather than notes.' },
        { question: 'Do we need a vector database already?', answer: 'No. Choosing one is part of the day, and the choice is made against your corpus size and latency budget rather than against a vendor comparison table.' },
        { question: 'Can several startups share a session?', answer: 'Yes, and accelerator cohorts often do. The on-site day works well shared; the remote build week is then run per team so the work stays specific.' },
      ],
      related: [
        { href: '/case-studies/oulang', label: 'OULANG — multilingual retrieval in production' },
        { href: '/case-studies/apolo-medical-framework', label: 'APOLO — grounding answers a reviewer can check' },
        { href: '/services/rag-langchain', label: 'Full RAG and LangChain workshop scope' },
      ],
    },
    es: {
      lead: 'Valencia recibe la versión startup del taller de RAG: una jornada intensiva presencial en vuestra oficina o coworking y, a continuación, una semana de construcción en remoto mientras el material sigue caliente.',
      sections: [
        {
          heading: 'Quién contrata esto en Valencia',
          body: 'Founding engineers y equipos de producto pequeños del entorno de Marina de Empresas, Lanzadera, la Ciutat Politècnica de la Innovació y el clúster de Ruzafa que ya tienen un prototipo de retrieval que demuestra bien y responde mal. El síntoma se repite: la búsqueda vectorial devuelve fragmentos plausibles, nadie puede afirmar si la respuesta final estaba realmente sustentada en ellos, y no hay forma de saber si el cambio de la semana pasada mejoró o empeoró.',
        },
        {
          heading: 'Jornada presencial y semana remota',
          body: 'La jornada presencial cubre ingesta y chunking sobre vuestro corpus real, búsqueda híbrida, reranking y cómo hacer visible un fallo de recuperación en lugar de dejar que el modelo lo tape. La semana siguiente es remota: dos sesiones de trabajo donde el equipo construye el set de evaluación y la observabilidad, con revisión asíncrona entre medias. El desplazamiento desde Madrid se hace en AVE, así que la jornada única mantiene el coste razonable para un presupuesto seed. Paterna, Alboraia y el Parc Tecnològic entran en el mismo día.',
        },
        {
          heading: 'Idioma y formato',
          body: 'Facilitación en español o inglés, con todo el código, notebooks y plantillas de evaluación en inglés. Mandarín disponible cuando aporta. El grupo se limita a propósito para que sea una sesión de trabajo y no una clase magistral: todo el mundo sale con el pipeline corriendo en su máquina.',
        },
        {
          heading: 'En qué se apoya',
          body: 'Trabajo de recuperación que tuvo que sobrevivir a producción: un marketplace multilingüe donde la misma consulta llega en tres idiomas y no puede devolver los anuncios de otra ciudad, tooling de desarrollo basado en MCP donde el contexto recuperado decide si un agente arregla o rompe un archivo, y un flujo médico donde una respuesta sin soporte no es una mala respuesta sino una inaceptable.',
        },
      ],
      faqs: [
        { question: 'Somos pre-seed, ¿está dimensionado para nosotros?', answer: 'La jornada única más semana remota existe justo para eso. Es el formato más pequeño que todavía termina con un bucle de evaluación funcionando y no con apuntes.' },
        { question: '¿Hace falta tener ya una base vectorial?', answer: 'No. Elegirla forma parte de la jornada, y la decisión se toma contra el tamaño de vuestro corpus y vuestro presupuesto de latencia, no contra una tabla comparativa.' },
        { question: '¿Pueden compartir sesión varias startups?', answer: 'Sí, y las cohortes de aceleradora lo hacen a menudo. La jornada presencial funciona compartida; la semana remota se ejecuta por equipo para que el trabajo siga siendo específico.' },
      ],
      related: [
        { href: '/case-studies/oulang', label: 'OULANG — recuperación multilingüe en producción' },
        { href: '/case-studies/apolo-medical-framework', label: 'APOLO — respuestas que un revisor puede comprobar' },
        { href: '/services/rag-langchain', label: 'Alcance completo del taller de RAG' },
      ],
    },
  },

  '/locations/madrid/business-automation': {
    en: {
      lead: 'Automation work in Madrid runs as a local engagement rather than a remote project with a weekly call: I am in the city, so the sessions where the workflow is actually mapped happen in the room where the work happens.',
      sections: [
        {
          heading: 'Who books this in Madrid',
          body: 'Madrid operations, sales and customer-support leads carrying a process that has quietly outgrown its spreadsheet — quotes assembled by hand from three systems, leads retyped from a form into a CRM, reports rebuilt every Monday morning, support replies that all start from the same paragraph someone keeps in a note. Usually there is already a Zapier or Make scenario doing part of it, and nobody trusts it enough to stop checking.',
        },
        {
          heading: 'How local delivery works',
          body: 'It starts with a half-day on site walking the process with the people who run it, screen by screen, because the real workflow is never the documented one. Build happens remotely in one-to-two week increments, with an on-site review at the end of each so the people affected see it working before it is switched on. Offices anywhere in the Comunidad de Madrid are in scope — city centre, Las Rozas, Alcobendas, Tres Cantos, Getafe, the Corredor del Henares — and same-week attendance is realistic when something breaks, which is the practical difference between a local engagement and a remote one.',
        },
        {
          heading: 'Language and handover',
          body: 'Working sessions in Spanish, documentation in Spanish and English, and Mandarin available where a Chinese supplier or counterpart is in the loop. Handover is written for the operator who will run it, not for the engineer who built it: what it does, what it will not do, how to see whether it ran, and what to do when it stops.',
        },
        {
          heading: 'What informs the approach',
          body: 'Automations that carry consequences: revenue-operations agents that research accounts, enrich records, and hand off to a person before anything is sent; a pricing and ERP-reporting delivery scoped at €35K for a B2B distributor where a wrong number becomes a wrong invoice; and a medical workflow built so that no generated text reaches anyone without a named human reviewing it first. Every automation gets an explicit approval boundary rather than an assumption of correctness.',
        },
      ],
      faqs: [
        { question: 'Will you replace our existing Zapier or Make scenarios?', answer: 'Only where they are the reason something is unreliable. If a scenario works, it stays and gets monitoring added; rebuilding working plumbing is expensive and rarely the actual problem.' },
        { question: 'Who owns the automations afterwards?', answer: 'You do, in your own accounts, with credentials that were never mine to begin with. The handover session is aimed at the person who will maintain it.' },
        { question: 'Can you attend on site when something breaks?', answer: 'Within the Comunidad de Madrid, same-week attendance is normally possible, and that availability is the reason most local clients choose the on-site engagement over a remote one.' },
      ],
      related: [
        { href: '/case-studies/autoclient', label: 'AutoClient — research, CRM and multi-channel follow-up' },
        { href: '/case-studies/autopricing', label: 'AutoPricing — ERP-connected reporting with operator review' },
        { href: '/services/business-automation', label: 'Full business automation scope' },
      ],
    },
    es: {
      lead: 'En Madrid la automatización se ejecuta como un encargo local y no como un proyecto remoto con llamada semanal: estoy en la ciudad, así que las sesiones donde se mapea el flujo real ocurren en la sala donde ocurre el trabajo.',
      sections: [
        {
          heading: 'Quién contrata esto en Madrid',
          body: 'Responsables de operaciones, ventas y soporte en Madrid con un proceso que se le ha quedado grande a su hoja de cálculo: presupuestos montados a mano desde tres sistemas, leads retecleados de un formulario al CRM, informes reconstruidos cada lunes, respuestas de soporte que siempre empiezan por el mismo párrafo guardado en una nota. Casi siempre ya hay un escenario de Zapier o Make haciendo parte, y nadie se fía lo suficiente como para dejar de revisarlo.',
        },
        {
          heading: 'Cómo funciona la entrega local',
          body: 'Empieza con media jornada presencial recorriendo el proceso con quien lo ejecuta, pantalla a pantalla, porque el flujo real nunca es el documentado. La construcción es remota en incrementos de una a dos semanas, con una revisión presencial al final de cada uno para que las personas afectadas lo vean funcionar antes de activarlo. Cualquier oficina de la Comunidad de Madrid entra en alcance —centro, Las Rozas, Alcobendas, Tres Cantos, Getafe, Corredor del Henares— y la asistencia en la misma semana es realista cuando algo se rompe.',
        },
        {
          heading: 'Idioma y traspaso',
          body: 'Sesiones de trabajo en español, documentación en español e inglés, y mandarín disponible cuando hay proveedor o contraparte china. El traspaso se escribe para la persona que lo va a operar, no para quien lo construyó: qué hace, qué no hará, cómo comprobar si se ejecutó y qué hacer cuando se para.',
        },
        {
          heading: 'Qué informa el enfoque',
          body: 'Automatizaciones con consecuencias: agentes de revenue operations que investigan cuentas, enriquecen registros y ceden a una persona antes de enviar nada; una entrega de precios e informes conectados a ERP con alcance de 35.000 € para un distribuidor B2B, donde un número equivocado se convierte en una factura equivocada; y un flujo médico construido para que ningún texto generado llegue a nadie sin un revisor humano con nombre. Cada automatización recibe un límite de aprobación explícito.',
        },
      ],
      faqs: [
        { question: '¿Vais a sustituir nuestros escenarios de Zapier o Make?', answer: 'Solo donde sean la causa de que algo no sea fiable. Si un escenario funciona, se queda y se le añade monitorización; reconstruir fontanería que funciona es caro y rara vez es el problema real.' },
        { question: '¿De quién son las automatizaciones después?', answer: 'Vuestras, en vuestras propias cuentas y con credenciales que nunca fueron mías. La sesión de traspaso se dirige a quien vaya a mantenerlas.' },
        { question: '¿Puedes venir presencialmente si algo se rompe?', answer: 'Dentro de la Comunidad de Madrid, la asistencia en la misma semana suele ser posible, y esa disponibilidad es la razón por la que la mayoría de clientes locales eligen el formato presencial.' },
      ],
      related: [
        { href: '/case-studies/autoclient', label: 'AutoClient — investigación, CRM y seguimiento multicanal' },
        { href: '/case-studies/autopricing', label: 'AutoPricing — informes conectados a ERP con revisión' },
        { href: '/services/business-automation', label: 'Alcance completo de automatización' },
      ],
    },
  },
};

// --- City hub pages -------------------------------------------------------
// Each hub gets a distinct angle so the five pages stop reading as one page
// with the place name swapped, and each carries its own delivery FAQ.

export type CityAngle = {
  heading: string;
  paragraphs: string[];
  faqs: Faq[];
};

export const CITY_ANGLES: Record<string, Localised<CityAngle>> = {
  madrid: {
    en: {
      heading: 'Madrid: in person, in your office, same week',
      paragraphs: [
        'Madrid is where I am based, so this is the one location where sessions default to in person rather than to video. Workshops run in your own office with your own systems open, and a follow-up visit does not need a travel budget or three weeks of notice — which changes what is worth attempting, because a workflow can be watched being performed instead of described in a call.',
        'Practically, that covers the whole Comunidad: city-centre offices, the Las Rozas and Alcobendas corridors, Tres Cantos, Getafe and the Corredor del Henares. Formats range from a half-day executive session to a multi-week build with weekly on-site reviews, and Spanish or English facilitation is decided by whoever is in the room.',
      ],
      faqs: [
        { question: 'How much notice do you need for an on-site session in Madrid?', answer: 'Usually one to two weeks for a full workshop, and often the same week for a short review or an incident. Being local is the point of this page.' },
        { question: 'Do you run sessions at our client’s site as well as ours?', answer: 'Yes. Sessions regularly run at a client or partner office when the workflow being examined actually lives there.' },
        { question: 'Can a Madrid engagement continue remotely afterwards?', answer: 'Most do. The pattern that works is on-site for discovery and review, remote for the build in between.' },
      ],
    },
    es: {
      heading: 'Madrid: presencial, en vuestra oficina, la misma semana',
      paragraphs: [
        'Madrid es la base, así que es la única ubicación donde las sesiones son presenciales por defecto en lugar de por vídeo. Los talleres se hacen en vuestra oficina con vuestros sistemas abiertos, y una visita de seguimiento no necesita presupuesto de viaje ni tres semanas de aviso: eso cambia lo que merece la pena intentar, porque un flujo se puede ver ejecutar en lugar de escuchar cómo se describe.',
        'En la práctica cubre toda la Comunidad: oficinas del centro, corredores de Las Rozas y Alcobendas, Tres Cantos, Getafe y el Corredor del Henares. Los formatos van desde media jornada ejecutiva hasta una construcción de varias semanas con revisiones presenciales semanales, y el idioma lo decide quien esté en la sala.',
      ],
      faqs: [
        { question: '¿Con cuánta antelación hay que avisar en Madrid?', answer: 'Una o dos semanas para un taller completo, y a menudo la misma semana para una revisión corta o una incidencia. Ser local es justamente el sentido de esta página.' },
        { question: '¿Hacéis sesiones también en la sede de nuestro cliente?', answer: 'Sí. Es habitual trabajar en la oficina de un cliente o socio cuando el flujo a examinar vive realmente allí.' },
        { question: '¿Puede continuar en remoto después?', answer: 'Casi siempre. El patrón que funciona es presencial para descubrimiento y revisión, remoto para la construcción intermedia.' },
      ],
    },
  },
  barcelona: {
    en: {
      heading: 'Barcelona: travelling blocks, planned around one trip',
      paragraphs: [
        'Barcelona is delivered as a travelling engagement from Madrid, and the format is shaped by that honestly: work is grouped into two-day blocks rather than spread across single afternoons, so one trip produces a complete piece of work instead of an introduction that has to be repeated. Travel and accommodation are quoted up front as one flat line, agreed before anything is booked.',
        'Between blocks the work continues remotely, which is usually where the building happens anyway. Offices in 22@ and Poblenou, along the Diagonal, in Sant Cugat and across the Vallès all fit within the same block, and hybrid rooms with remote colleagues are the default assumption rather than an accommodation.',
      ],
      faqs: [
        { question: 'How are travel costs handled for Barcelona?', answer: 'As a single flat line in the quote, agreed before booking. No per-diem billing and no surprise expenses at the end of the engagement.' },
        { question: 'Why two-day blocks instead of separate days?', answer: 'Because the second day is where teams build rather than watch. Splitting the block across two trips loses the momentum and costs more.' },
        { question: 'Can a Barcelona block be combined with another city?', answer: 'Yes — pairing a Barcelona block with Valencia in the same week is common and reduces the travel line for both.' },
      ],
    },
    es: {
      heading: 'Barcelona: bloques itinerantes, planificados en un viaje',
      paragraphs: [
        'Barcelona se entrega como encargo itinerante desde Madrid, y el formato lo asume con honestidad: el trabajo se agrupa en bloques de dos días en lugar de repartirse en tardes sueltas, para que un viaje produzca una pieza completa y no una introducción que hay que repetir. El desplazamiento y el alojamiento se presupuestan por adelantado como una línea cerrada.',
        'Entre bloques el trabajo continúa en remoto, que es donde suele ocurrir la construcción de todas formas. Oficinas del 22@ y Poblenou, la Diagonal, Sant Cugat y el Vallès entran en el mismo bloque, y las salas híbridas son la suposición por defecto, no una concesión.',
      ],
      faqs: [
        { question: '¿Cómo se gestionan los gastos de viaje?', answer: 'Como una única línea cerrada en el presupuesto, acordada antes de reservar. Sin dietas ni gastos sorpresa al final.' },
        { question: '¿Por qué bloques de dos días y no días sueltos?', answer: 'Porque el segundo día es cuando el equipo construye en lugar de mirar. Partir el bloque en dos viajes pierde el impulso y cuesta más.' },
        { question: '¿Se puede combinar con otra ciudad?', answer: 'Sí. Encadenar Barcelona y Valencia en la misma semana es habitual y reduce la línea de viaje para ambas.' },
      ],
    },
  },
  valencia: {
    en: {
      heading: 'Valencia: startup-sized days, built around the ecosystem',
      paragraphs: [
        'Valencia work is scaled for the companies that actually book it: seed-stage and early product teams, often around Marina de Empresas, Lanzadera, the Ciutat Politècnica de la Innovació and the Ruzafa cluster. The default is a single intensive on-site day rather than a multi-day programme, because a one-day trip from Madrid by AVE keeps the cost inside a budget that has to justify itself to a board.',
        'The day is then extended by a remote build week, which is where a small team gets the most value — two working sessions plus asynchronous review while the material is still fresh. Accelerator cohorts frequently share the on-site day and split the remote week per company, and Paterna, Alboraia and the Parc Tecnològic are all inside the same trip.',
      ],
      faqs: [
        { question: 'Can an accelerator cohort book one session together?', answer: 'Yes. The on-site day works well shared across a cohort; the remote follow-up is then run per company so the work stays specific to each product.' },
        { question: 'Is there a minimum team size for Valencia?', answer: 'No. Sessions have run for two-person founding teams. The format is chosen by what you need to leave with, not by headcount.' },
        { question: 'How does the remote build week work?', answer: 'Two scheduled working sessions in the week after the on-site day, with asynchronous review between them so blockers do not wait for the next call.' },
      ],
    },
    es: {
      heading: 'Valencia: jornadas a medida de startup, dentro del ecosistema',
      paragraphs: [
        'El trabajo en Valencia está dimensionado para quien realmente lo contrata: equipos seed y de producto temprano, habitualmente en el entorno de Marina de Empresas, Lanzadera, la Ciutat Politècnica de la Innovació y el clúster de Ruzafa. El formato por defecto es una jornada presencial intensiva y no un programa de varios días, porque el viaje en AVE desde Madrid en el día mantiene el coste dentro de un presupuesto que tiene que justificarse.',
        'La jornada se extiende con una semana de construcción en remoto, que es donde un equipo pequeño obtiene más valor: dos sesiones de trabajo más revisión asíncrona mientras el material sigue fresco. Las cohortes de aceleradora comparten con frecuencia la jornada presencial y reparten la semana remota por empresa. Paterna, Alboraia y el Parc Tecnològic entran en el mismo viaje.',
      ],
      faqs: [
        { question: '¿Puede una cohorte de aceleradora reservar una sesión conjunta?', answer: 'Sí. La jornada presencial funciona bien compartida; el seguimiento remoto se ejecuta por empresa para que el trabajo siga siendo específico.' },
        { question: '¿Hay tamaño mínimo de equipo?', answer: 'No. Se han hecho sesiones para equipos fundadores de dos personas. El formato lo decide con qué necesitáis salir, no el número de asistentes.' },
        { question: '¿Cómo funciona la semana remota?', answer: 'Dos sesiones de trabajo programadas la semana siguiente a la jornada presencial, con revisión asíncrona entre medias para que los bloqueos no esperen a la próxima llamada.' },
      ],
    },
  },
  spain: {
    en: {
      heading: 'Across Spain: travel planned as part of the scope',
      paragraphs: [
        'Outside Madrid, Barcelona and Valencia the constraint is not willingness but scheduling, so nationwide engagements are planned with travel as an explicit line rather than an afterthought. Bilbao, Zaragoza, Seville, Málaga, Vigo, Palma and the island regions are all served; work is grouped so a single trip carries a complete phase, and the remainder runs remotely between visits.',
        'That shape suits organisations with several sites: one on-site block per region, a shared remote programme in between, and a single set of materials so the Seville team and the Bilbao team are not trained on two different versions of the same system. Public-sector and university clients that need a formal scope, invoicing in Spain and Spanish-language documentation are handled as standard.',
      ],
      faqs: [
        { question: 'How is travel billed for cities outside Madrid?', answer: 'As a named line in the quote, agreed before anything is booked, and grouped so one trip covers a complete phase rather than a fragment of one.' },
        { question: 'Can you run the same programme across several company sites?', answer: 'Yes. One on-site block per site with a shared remote programme in between is the usual structure, and everyone works from the same materials.' },
        { question: 'Do you invoice in Spain?', answer: 'Yes, with Spanish invoicing and documentation, and English documentation in parallel when a parent company needs it.' },
      ],
    },
    es: {
      heading: 'Toda España: el viaje forma parte del alcance',
      paragraphs: [
        'Fuera de Madrid, Barcelona y Valencia la restricción no es la disposición sino el calendario, así que los encargos nacionales se planifican con el viaje como línea explícita y no como algo sobrevenido. Bilbao, Zaragoza, Sevilla, Málaga, Vigo, Palma y las regiones insulares entran en alcance; el trabajo se agrupa para que un solo viaje cubra una fase completa y el resto se ejecute en remoto entre visitas.',
        'Ese formato encaja con organizaciones multisede: un bloque presencial por región, un programa remoto compartido entre medias y un único juego de materiales, de modo que el equipo de Sevilla y el de Bilbao no acaben formados en dos versiones distintas del mismo sistema. Clientes del sector público y universidades que necesitan alcance formal, facturación en España y documentación en español se atienden como estándar.',
      ],
      faqs: [
        { question: '¿Cómo se factura el viaje fuera de Madrid?', answer: 'Como línea identificada en el presupuesto, acordada antes de reservar nada y agrupada para que un viaje cubra una fase completa.' },
        { question: '¿Podéis dar el mismo programa en varias sedes?', answer: 'Sí. Un bloque presencial por sede con programa remoto compartido entre medias es la estructura habitual, con los mismos materiales para todos.' },
        { question: '¿Facturáis en España?', answer: 'Sí, con facturación y documentación en español, y documentación en inglés en paralelo si la matriz lo necesita.' },
      ],
    },
  },
  online: {
    en: {
      heading: 'Online: time zones, tooling and a format built for remote',
      paragraphs: [
        'Remote delivery is not the on-site programme on a webcam. Sessions are cut into shorter blocks with build time between them, exercises are designed so nobody sits watching a shared screen, and everything runs in your own repository and your own tools rather than in a prepared sandbox that behaves differently from your production environment.',
        'Scheduling is built around European hours as the anchor, with regular delivery into UK and US Eastern time, and early-morning CET blocks that overlap comfortably with Asia-Pacific teams — a practical necessity when a product team spans Madrid and China. Recordings, written walkthroughs and the full material set are handed over so colleagues in a fourth time zone are not dependent on attending live. Facilitation in English, Spanish or Mandarin.',
      ],
      faqs: [
        { question: 'Which time zones can you cover?', answer: 'CET is the anchor, with regular sessions into UK and US Eastern hours and early CET blocks that overlap with Asia-Pacific. Distributed teams usually get a split schedule rather than one impossible slot.' },
        { question: 'What does a remote session actually run on?', answer: 'Your repository, your accounts and your tools, over video with shared working time. Nothing depends on a demo sandbox that behaves differently from your production setup.' },
        { question: 'Are sessions recorded for colleagues who cannot attend?', answer: 'Yes, and recordings ship with written walkthroughs and all templates, so a colleague in another time zone can follow the same path asynchronously.' },
      ],
    },
    es: {
      heading: 'Online: husos horarios, herramientas y formato pensado para remoto',
      paragraphs: [
        'La entrega remota no es el programa presencial por webcam. Las sesiones se parten en bloques más cortos con tiempo de construcción entre ellos, los ejercicios están diseñados para que nadie se quede mirando una pantalla compartida, y todo se ejecuta en vuestro repositorio y vuestras herramientas y no en un sandbox preparado que se comporta distinto a producción.',
        'El calendario se ancla en horario europeo, con entrega habitual en horario de Reino Unido y de la costa este de EE. UU., y bloques a primera hora CET que solapan cómodamente con equipos de Asia-Pacífico —una necesidad práctica cuando un equipo de producto se reparte entre Madrid y China. Se entregan grabaciones, guías escritas y todo el material para que quien esté en un cuarto huso horario no dependa de asistir en directo. Facilitación en inglés, español o mandarín.',
      ],
      faqs: [
        { question: '¿Qué husos horarios cubrís?', answer: 'CET como ancla, con sesiones habituales en horario de Reino Unido y este de EE. UU., y bloques tempranos CET que solapan con Asia-Pacífico. Los equipos distribuidos suelen recibir un calendario partido en lugar de un hueco imposible.' },
        { question: '¿Sobre qué se ejecuta realmente una sesión remota?', answer: 'Vuestro repositorio, vuestras cuentas y vuestras herramientas, por vídeo y con tiempo de trabajo compartido. Nada depende de un sandbox que se comporte distinto a vuestra producción.' },
        { question: '¿Se graban las sesiones?', answer: 'Sí, y las grabaciones se entregan con guías escritas y todas las plantillas, para que un compañero en otro huso pueda recorrer el mismo camino de forma asíncrona.' },
      ],
    },
  },
};
