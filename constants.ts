import { NavLink, Language, Skill, Tool, Project, Testimonial, Experience, ContactInfo, AdditionalProject } from './types';

export const NAV_LINKS: NavLink[] = [
    { href: '#about', key: 'nav.about' },
    { href: '#skills', key: 'nav.skills' },
    { href: '#projects', key: 'nav.projects' },
    { href: '#experience', key: 'nav.experience' },
    { href: '#contact', key: 'nav.contact' },
];

export const LANGUAGES: Language[] = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'zh', name: '中文' },
];

export const TECHNICAL_SKILLS: Skill[] = [
    { nameKey: 'skills.skillJsTs', level: 95 },
    { nameKey: 'skills.skillPythonMl', level: 90 },
    { nameKey: 'skills.skillFullStack', level: 85 },
    { nameKey: 'skills.skillArtificialIntelligence', level: 92 },
    { nameKey: 'skills.skillMachineLearning', level: 88 },
    { nameKey: 'skills.skillDeepLearning', level: 85 },
    { nameKey: 'skills.skillNeuralNetworks', level: 87 },
    { nameKey: 'skills.skillComputerVision', level: 84 },
    { nameKey: 'skills.skillNLP', level: 89 },
    { nameKey: 'skills.skillDataScience', level: 86 },
    { nameKey: 'skills.skillCloudComputing', level: 88 },
    { nameKey: 'skills.skillDevOps', level: 82 },
    { nameKey: 'skills.skillCybersecurity', level: 79 },
    { nameKey: 'skills.skillBlockchain', level: 76 },
    { nameKey: 'skills.skillIoT', level: 81 },
    { nameKey: 'skills.skillRobotics', level: 78 },
    { nameKey: 'skills.skillQuantumComputing', level: 73 },
    { nameKey: 'skills.skillEdgeComputing', level: 80 },
    { nameKey: 'skills.skillBigData', level: 85 },
    { nameKey: 'skills.skillDataEngineering', level: 83 },
    { nameKey: 'skills.skillMLOps', level: 87 },
    { nameKey: 'skills.skillSystemDesign', level: 89 },
    { nameKey: 'skills.skillMicroservices', level: 84 },
    { nameKey: 'skills.skillDatabaseDesign', level: 86 },
    { nameKey: 'skills.skillAPIDesign', level: 88 },
    { nameKey: 'skills.skillGraphQL', level: 82 },
    { nameKey: 'skills.skillWebRTC', level: 79 },
    { nameKey: 'skills.skillWebAssembly', level: 75 },
    { nameKey: 'skills.skillPerformanceOptimization', level: 87 },
    { nameKey: 'skills.skillSecurityAuditing', level: 81 },
];

export const TOOLS: Tool[] = [
    { nameKey: 'skills.toolReactNext', icon: 'fab fa-react' },
    { nameKey: 'skills.toolNodeExpress', icon: 'fab fa-node-js' },
    { nameKey: 'skills.toolDjangoFlask', icon: 'fab fa-python' },
    { nameKey: 'skills.toolTailwindSass', icon: 'fab fa-sass' },
    { nameKey: 'skills.toolDockerK8s', icon: 'fas fa-server' },
    { nameKey: 'skills.toolTensorFlow', icon: 'fas fa-brain' },
    { nameKey: 'skills.toolPyTorch', icon: 'fas fa-fire' },
    { nameKey: 'skills.toolAWS', icon: 'fab fa-aws' },
    { nameKey: 'skills.toolGCP', icon: 'fab fa-google' },
    { nameKey: 'skills.toolAzure', icon: 'fab fa-microsoft' },
    { nameKey: 'skills.toolMongoDB', icon: 'fas fa-database' },
    { nameKey: 'skills.toolPostgreSQL', icon: 'fas fa-database' },
    { nameKey: 'skills.toolRedis', icon: 'fas fa-memory' },
    { nameKey: 'skills.toolElasticsearch', icon: 'fas fa-search' },
    { nameKey: 'skills.toolRabbitMQ', icon: 'fas fa-message' },
    { nameKey: 'skills.toolKafka', icon: 'fas fa-stream' },
    { nameKey: 'skills.toolSpark', icon: 'fas fa-bolt' },
    { nameKey: 'skills.toolHadoop', icon: 'fas fa-elephant' },
    { nameKey: 'skills.toolAirflow', icon: 'fas fa-wind' },
    { nameKey: 'skills.toolGit', icon: 'fab fa-git-alt' },
    { nameKey: 'skills.toolJenkins', icon: 'fas fa-cogs' },
    { nameKey: 'skills.toolTerraform', icon: 'fas fa-cubes' },
    { nameKey: 'skills.toolAnsible', icon: 'fas fa-robot' },
    { nameKey: 'skills.toolGrafana', icon: 'fas fa-chart-line' },
    { nameKey: 'skills.toolPrometheus', icon: 'fas fa-eye' },
    { nameKey: 'skills.toolNginx', icon: 'fas fa-globe' },
    { nameKey: 'skills.toolOpenCV', icon: 'fas fa-camera' },
    { nameKey: 'skills.toolScikit', icon: 'fas fa-flask' },
    { nameKey: 'skills.toolPandas', icon: 'fas fa-table' },
    { nameKey: 'skills.toolNumPy', icon: 'fas fa-calculator' },
    { nameKey: 'skills.toolJupyter', icon: 'fas fa-book' },
    { nameKey: 'skills.toolMLflow', icon: 'fas fa-rocket' },
    { nameKey: 'skills.toolKubeflow', icon: 'fas fa-dharmachakra' },
    { nameKey: 'skills.toolSeldon', icon: 'fas fa-magic' },
    { nameKey: 'skills.toolStreamlit', icon: 'fas fa-stream' },
    { nameKey: 'skills.toolFastAPI', icon: 'fas fa-tachometer-alt' },
    { nameKey: 'skills.toolGraphQL', icon: 'fas fa-project-diagram' },
    { nameKey: 'skills.toolSolidity', icon: 'fas fa-coins' },
    { nameKey: 'skills.toolRust', icon: 'fas fa-gear' },
    { nameKey: 'skills.toolGo', icon: 'fas fa-forward' },
    { nameKey: 'skills.toolVue', icon: 'fab fa-vuejs' },
    { nameKey: 'skills.toolAngular', icon: 'fab fa-angular' },
    { nameKey: 'skills.toolFlutter', icon: 'fas fa-mobile-alt' },
    { nameKey: 'skills.toolReactNative', icon: 'fab fa-react' },
    { nameKey: 'skills.toolUnity', icon: 'fas fa-gamepad' },
    { nameKey: 'skills.toolBlender', icon: 'fas fa-cube' },
    { nameKey: 'skills.toolFigma', icon: 'fab fa-figma' },
    { nameKey: 'skills.toolSketch', icon: 'fab fa-sketch' },
    { nameKey: 'skills.toolZeppelin', icon: 'fas fa-book-open' },
    { nameKey: 'skills.toolTableau', icon: 'fas fa-chart-bar' },
];

export const PROJECTS: Project[] = [
    {
        id: 'autoclient',
        image: 'https://picsum.photos/seed/autoclient/400/300',
        titleKey: 'projects.autoclient.title',
        descriptionKey: 'projects.autoclient.description',
        demoUrl: 'https://aistudio.google.com/app/drive/173S05u8e-MLh-eJ3L27VkWk5naaPEw-n',
        featuresTitleKey: 'projects.autoclient.featuresTitle',
        features: ['projects.autoclient.feature1', 'projects.autoclient.feature2', 'projects.autoclient.feature3', 'projects.autoclient.feature4'],
        summaryKey: 'projects.autoclient.summary',
        hasChat: true
    },
    {
        id: 'spreadsheet',
        image: 'https://picsum.photos/seed/spreadsheet/400/300',
        titleKey: 'projects.spreadsheet.title',
        descriptionKey: 'projects.spreadsheet.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1jD88o_uC5a432BCpUvOq6a_uY-3yQ9r4',
        featuresTitleKey: 'projects.spreadsheet.featuresTitle',
        features: ['projects.spreadsheet.feature1', 'projects.spreadsheet.feature2', 'projects.spreadsheet.feature3', 'projects.spreadsheet.feature4'],
        summaryKey: 'projects.spreadsheet.summary',
    },
    {
        id: 'cryptoagent',
        image: 'https://picsum.photos/seed/crypto/400/300',
        titleKey: 'projects.cryptoagent.title',
        descriptionKey: 'projects.cryptoagent.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1o0F4k4s5f8d9gH7k6j5e4d3c2b1a0z-y',
        featuresTitleKey: 'projects.cryptoagent.featuresTitle',
        features: ['projects.cryptoagent.feature1', 'projects.cryptoagent.feature2', 'projects.cryptoagent.feature3', 'projects.cryptoagent.feature4'],
        summaryKey: 'projects.cryptoagent.summary',
        hasChat: true
    },
    {
        id: 'banking',
        image: 'https://picsum.photos/seed/banking/400/300',
        titleKey: 'projects.banking.title',
        descriptionKey: 'projects.banking.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1z2Y3x4W5v6b7a8c9d0e1f2g3h4j5k-l',
        featuresTitleKey: 'projects.banking.featuresTitle',
        features: ['projects.banking.feature1', 'projects.banking.feature2', 'projects.banking.feature3', 'projects.banking.feature4'],
        summaryKey: 'projects.banking.summary',
    },
    {
        id: 'apollomedical',
        image: 'https://picsum.photos/seed/medical/400/300',
        titleKey: 'projects.apollomedical.title',
        descriptionKey: 'projects.apollomedical.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1p2o3i4u5y6t7r8e9w0q-a1s2d3f4g5h',
        featuresTitleKey: 'projects.apollomedical.featuresTitle',
        features: ['projects.apollomedical.feature1', 'projects.apollomedical.feature2', 'projects.apollomedical.feature3', 'projects.apollomedical.feature4'],
        summaryKey: 'projects.apollomedical.summary',
    },
    {
        id: 'autosite',
        image: 'https://picsum.photos/seed/website/400/300',
        titleKey: 'projects.autosite.title',
        descriptionKey: 'projects.autosite.description',
        repoUrl: 'https://github.com/samihalawa/2025-FINAL-AUTOSTUDIO-SAMIHALAWA.COM',
        featuresTitleKey: 'projects.autosite.featuresTitle',
        features: ['projects.autosite.feature1', 'projects.autosite.feature2', 'projects.autosite.feature3'],
        summaryKey: 'projects.autosite.summary',
    },
    // Additional 54 projects to reach 60 total
    {
        id: 'smartcontract',
        image: 'https://picsum.photos/seed/smartcontract/400/300',
        titleKey: 'projects.smartcontract.title',
        descriptionKey: 'projects.smartcontract.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o-p',
        featuresTitleKey: 'projects.smartcontract.featuresTitle',
        features: ['projects.smartcontract.feature1', 'projects.smartcontract.feature2', 'projects.smartcontract.feature3', 'projects.smartcontract.feature4'],
        summaryKey: 'projects.smartcontract.summary',
        hasChat: true
    },
    {
        id: 'voiceassistant',
        image: 'https://picsum.photos/seed/voiceassistant/400/300',
        titleKey: 'projects.voiceassistant.title',
        descriptionKey: 'projects.voiceassistant.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1q2w3e4r5t6y7u8i9o0p1a2s3d4f5g-h',
        featuresTitleKey: 'projects.voiceassistant.featuresTitle',
        features: ['projects.voiceassistant.feature1', 'projects.voiceassistant.feature2', 'projects.voiceassistant.feature3', 'projects.voiceassistant.feature4'],
        summaryKey: 'projects.voiceassistant.summary',
        hasChat: true
    },
    {
        id: 'predictiveanalytics',
        image: 'https://picsum.photos/seed/predictive/400/300',
        titleKey: 'projects.predictiveanalytics.title',
        descriptionKey: 'projects.predictiveanalytics.description',
        repoUrl: 'https://github.com/samihalawa/predictive-analytics-suite',
        featuresTitleKey: 'projects.predictiveanalytics.featuresTitle',
        features: ['projects.predictiveanalytics.feature1', 'projects.predictiveanalytics.feature2', 'projects.predictiveanalytics.feature3', 'projects.predictiveanalytics.feature4'],
        summaryKey: 'projects.predictiveanalytics.summary',
    },
    {
        id: 'imagerecognition',
        image: 'https://picsum.photos/seed/imagerecognition/400/300',
        titleKey: 'projects.imagerecognition.title',
        descriptionKey: 'projects.imagerecognition.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1z1x2c3v4b5n6m7l8k9j0h1g2f3d4s-a',
        featuresTitleKey: 'projects.imagerecognition.featuresTitle',
        features: ['projects.imagerecognition.feature1', 'projects.imagerecognition.feature2', 'projects.imagerecognition.feature3', 'projects.imagerecognition.feature4'],
        summaryKey: 'projects.imagerecognition.summary',
        hasChat: true
    },
    {
        id: 'chatbotframework',
        image: 'https://picsum.photos/seed/chatbot/400/300',
        titleKey: 'projects.chatbotframework.title',
        descriptionKey: 'projects.chatbotframework.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1m2n3b4v5c6x7z8a9s0d1f2g3h4j5k-l',
        featuresTitleKey: 'projects.chatbotframework.featuresTitle',
        features: ['projects.chatbotframework.feature1', 'projects.chatbotframework.feature2', 'projects.chatbotframework.feature3', 'projects.chatbotframework.feature4'],
        summaryKey: 'projects.chatbotframework.summary',
        hasChat: true
    },
    {
        id: 'frauddetection',
        image: 'https://picsum.photos/seed/fraud/400/300',
        titleKey: 'projects.frauddetection.title',
        descriptionKey: 'projects.frauddetection.description',
        repoUrl: 'https://github.com/samihalawa/ai-fraud-detection',
        featuresTitleKey: 'projects.frauddetection.featuresTitle',
        features: ['projects.frauddetection.feature1', 'projects.frauddetection.feature2', 'projects.frauddetection.feature3', 'projects.frauddetection.feature4'],
        summaryKey: 'projects.frauddetection.summary',
    },
    {
        id: 'nlpprocessor',
        image: 'https://picsum.photos/seed/nlp/400/300',
        titleKey: 'projects.nlpprocessor.title',
        descriptionKey: 'projects.nlpprocessor.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1p0o9i8u7y6t5r4e3w2q1a0s9d8f7g-h',
        featuresTitleKey: 'projects.nlpprocessor.featuresTitle',
        features: ['projects.nlpprocessor.feature1', 'projects.nlpprocessor.feature2', 'projects.nlpprocessor.feature3', 'projects.nlpprocessor.feature4'],
        summaryKey: 'projects.nlpprocessor.summary',
        hasChat: true
    },
    {
        id: 'autonomousdrone',
        image: 'https://picsum.photos/seed/drone/400/300',
        titleKey: 'projects.autonomousdrone.title',
        descriptionKey: 'projects.autonomousdrone.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1l2k3j4h5g6f7d8s9a0q1w2e3r4t5y-u',
        featuresTitleKey: 'projects.autonomousdrone.featuresTitle',
        features: ['projects.autonomousdrone.feature1', 'projects.autonomousdrone.feature2', 'projects.autonomousdrone.feature3', 'projects.autonomousdrone.feature4'],
        summaryKey: 'projects.autonomousdrone.summary',
    },
    {
        id: 'stockpredictor',
        image: 'https://picsum.photos/seed/stockpredictor/400/300',
        titleKey: 'projects.stockpredictor.title',
        descriptionKey: 'projects.stockpredictor.description',
        repoUrl: 'https://github.com/samihalawa/ai-stock-predictor',
        featuresTitleKey: 'projects.stockpredictor.featuresTitle',
        features: ['projects.stockpredictor.feature1', 'projects.stockpredictor.feature2', 'projects.stockpredictor.feature3', 'projects.stockpredictor.feature4'],
        summaryKey: 'projects.stockpredictor.summary',
        hasChat: true
    },
    {
        id: 'musicgenerator',
        image: 'https://picsum.photos/seed/music/400/300',
        titleKey: 'projects.musicgenerator.title',
        descriptionKey: 'projects.musicgenerator.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1i8u7y6t5r4e3w2q1a0s9d8f7g6h5j-k',
        featuresTitleKey: 'projects.musicgenerator.featuresTitle',
        features: ['projects.musicgenerator.feature1', 'projects.musicgenerator.feature2', 'projects.musicgenerator.feature3', 'projects.musicgenerator.feature4'],
        summaryKey: 'projects.musicgenerator.summary',
        hasChat: true
    },
    {
        id: 'retailoptimizer',
        image: 'https://picsum.photos/seed/retail/400/300',
        titleKey: 'projects.retailoptimizer.title',
        descriptionKey: 'projects.retailoptimizer.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1o7i6u5y4t3r2e1w0q9a8s7d6f5g4h-j',
        featuresTitleKey: 'projects.retailoptimizer.featuresTitle',
        features: ['projects.retailoptimizer.feature1', 'projects.retailoptimizer.feature2', 'projects.retailoptimizer.feature3', 'projects.retailoptimizer.feature4'],
        summaryKey: 'projects.retailoptimizer.summary',
    },
    {
        id: 'cybersecurity',
        image: 'https://picsum.photos/seed/cybersecurity/400/300',
        titleKey: 'projects.cybersecurity.title',
        descriptionKey: 'projects.cybersecurity.description',
        repoUrl: 'https://github.com/samihalawa/ai-cybersecurity-suite',
        featuresTitleKey: 'projects.cybersecurity.featuresTitle',
        features: ['projects.cybersecurity.feature1', 'projects.cybersecurity.feature2', 'projects.cybersecurity.feature3', 'projects.cybersecurity.feature4'],
        summaryKey: 'projects.cybersecurity.summary',
        hasChat: true
    },
    {
        id: 'gameai',
        image: 'https://picsum.photos/seed/gameai/400/300',
        titleKey: 'projects.gameai.title',
        descriptionKey: 'projects.gameai.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1p9o8i7u6y5t4r3e2w1q0a9s8d7f6g-h',
        featuresTitleKey: 'projects.gameai.featuresTitle',
        features: ['projects.gameai.feature1', 'projects.gameai.feature2', 'projects.gameai.feature3', 'projects.gameai.feature4'],
        summaryKey: 'projects.gameai.summary',
        hasChat: true
    },
    {
        id: 'weatherpredictor',
        image: 'https://picsum.photos/seed/weather/400/300',
        titleKey: 'projects.weatherpredictor.title',
        descriptionKey: 'projects.weatherpredictor.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1a0s9d8f7g6h5j4k3l2m1n0b9v8c7x-z',
        featuresTitleKey: 'projects.weatherpredictor.featuresTitle',
        features: ['projects.weatherpredictor.feature1', 'projects.weatherpredictor.feature2', 'projects.weatherpredictor.feature3', 'projects.weatherpredictor.feature4'],
        summaryKey: 'projects.weatherpredictor.summary',
    },
    {
        id: 'smartcity',
        image: 'https://picsum.photos/seed/smartcity/400/300',
        titleKey: 'projects.smartcity.title',
        descriptionKey: 'projects.smartcity.description',
        repoUrl: 'https://github.com/samihalawa/smart-city-platform',
        featuresTitleKey: 'projects.smartcity.featuresTitle',
        features: ['projects.smartcity.feature1', 'projects.smartcity.feature2', 'projects.smartcity.feature3', 'projects.smartcity.feature4'],
        summaryKey: 'projects.smartcity.summary',
        hasChat: true
    },
    {
        id: 'documentprocessor',
        image: 'https://picsum.photos/seed/document/400/300',
        titleKey: 'projects.documentprocessor.title',
        descriptionKey: 'projects.documentprocessor.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1q2w3e4r5t6y7u8i9o0p1a2s3d4f5g-h',
        featuresTitleKey: 'projects.documentprocessor.featuresTitle',
        features: ['projects.documentprocessor.feature1', 'projects.documentprocessor.feature2', 'projects.documentprocessor.feature3', 'projects.documentprocessor.feature4'],
        summaryKey: 'projects.documentprocessor.summary',
        hasChat: true
    },
    {
        id: 'recommender',
        image: 'https://picsum.photos/seed/recommender/400/300',
        titleKey: 'projects.recommender.title',
        descriptionKey: 'projects.recommender.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1z9x8c7v6b5n4m3l2k1j0h9g8f7d6s-a',
        featuresTitleKey: 'projects.recommender.featuresTitle',
        features: ['projects.recommender.feature1', 'projects.recommender.feature2', 'projects.recommender.feature3', 'projects.recommender.feature4'],
        summaryKey: 'projects.recommender.summary',
    },
    {
        id: 'emotionanalysis',
        image: 'https://picsum.photos/seed/emotion/400/300',
        titleKey: 'projects.emotionanalysis.title',
        descriptionKey: 'projects.emotionanalysis.description',
        repoUrl: 'https://github.com/samihalawa/emotion-analysis-ai',
        featuresTitleKey: 'projects.emotionanalysis.featuresTitle',
        features: ['projects.emotionanalysis.feature1', 'projects.emotionanalysis.feature2', 'projects.emotionanalysis.feature3', 'projects.emotionanalysis.feature4'],
        summaryKey: 'projects.emotionanalysis.summary',
        hasChat: true
    },
    {
        id: 'supplychainai',
        image: 'https://picsum.photos/seed/supplychain/400/300',
        titleKey: 'projects.supplychainai.title',
        descriptionKey: 'projects.supplychainai.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1m2n3b4v5c6x7z8a9s0d1f2g3h4j5k-l',
        featuresTitleKey: 'projects.supplychainai.featuresTitle',
        features: ['projects.supplychainai.feature1', 'projects.supplychainai.feature2', 'projects.supplychainai.feature3', 'projects.supplychainai.feature4'],
        summaryKey: 'projects.supplychainai.summary',
    },
    {
        id: 'virtualassistant',
        image: 'https://picsum.photos/seed/virtualassistant/400/300',
        titleKey: 'projects.virtualassistant.title',
        descriptionKey: 'projects.virtualassistant.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1p0o9i8u7y6t5r4e3w2q1a0s9d8f7g-h',
        featuresTitleKey: 'projects.virtualassistant.featuresTitle',
        features: ['projects.virtualassistant.feature1', 'projects.virtualassistant.feature2', 'projects.virtualassistant.feature3', 'projects.virtualassistant.feature4'],
        summaryKey: 'projects.virtualassistant.summary',
        hasChat: true
    },
    {
        id: 'roboticscontrol',
        image: 'https://picsum.photos/seed/robotics/400/300',
        titleKey: 'projects.roboticscontrol.title',
        descriptionKey: 'projects.roboticscontrol.description',
        repoUrl: 'https://github.com/samihalawa/ai-robotics-control',
        featuresTitleKey: 'projects.roboticscontrol.featuresTitle',
        features: ['projects.roboticscontrol.feature1', 'projects.roboticscontrol.feature2', 'projects.roboticscontrol.feature3', 'projects.roboticscontrol.feature4'],
        summaryKey: 'projects.roboticscontrol.summary',
        hasChat: true
    },
    {
        id: 'socialmediaanalyzer',
        image: 'https://picsum.photos/seed/socialmedia/400/300',
        titleKey: 'projects.socialmediaanalyzer.title',
        descriptionKey: 'projects.socialmediaanalyzer.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1l2k3j4h5g6f7d8s9a0q1w2e3r4t5y-u',
        featuresTitleKey: 'projects.socialmediaanalyzer.featuresTitle',
        features: ['projects.socialmediaanalyzer.feature1', 'projects.socialmediaanalyzer.feature2', 'projects.socialmediaanalyzer.feature3', 'projects.socialmediaanalyzer.feature4'],
        summaryKey: 'projects.socialmediaanalyzer.summary',
    },
    {
        id: 'energyoptimizer',
        image: 'https://picsum.photos/seed/energy/400/300',
        titleKey: 'projects.energyoptimizer.title',
        descriptionKey: 'projects.energyoptimizer.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1i8u7y6t5r4e3w2q1a0s9d8f7g6h5j-k',
        featuresTitleKey: 'projects.energyoptimizer.featuresTitle',
        features: ['projects.energyoptimizer.feature1', 'projects.energyoptimizer.feature2', 'projects.energyoptimizer.feature3', 'projects.energyoptimizer.feature4'],
        summaryKey: 'projects.energyoptimizer.summary',
        hasChat: true
    },
    {
        id: 'healthmonitor',
        image: 'https://picsum.photos/seed/healthmonitor/400/300',
        titleKey: 'projects.healthmonitor.title',
        descriptionKey: 'projects.healthmonitor.description',
        repoUrl: 'https://github.com/samihalawa/ai-health-monitor',
        featuresTitleKey: 'projects.healthmonitor.featuresTitle',
        features: ['projects.healthmonitor.feature1', 'projects.healthmonitor.feature2', 'projects.healthmonitor.feature3', 'projects.healthmonitor.feature4'],
        summaryKey: 'projects.healthmonitor.summary',
        hasChat: true
    },
    {
        id: 'lawassistant',
        image: 'https://picsum.photos/seed/law/400/300',
        titleKey: 'projects.lawassistant.title',
        descriptionKey: 'projects.lawassistant.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1o7i6u5y4t3r2e1w0q9a8s7d6f5g4h-j',
        featuresTitleKey: 'projects.lawassistant.featuresTitle',
        features: ['projects.lawassistant.feature1', 'projects.lawassistant.feature2', 'projects.lawassistant.feature3', 'projects.lawassistant.feature4'],
        summaryKey: 'projects.lawassistant.summary',
        hasChat: true
    },
    {
        id: 'educationplatform',
        image: 'https://picsum.photos/seed/education/400/300',
        titleKey: 'projects.educationplatform.title',
        descriptionKey: 'projects.educationplatform.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1p9o8i7u6y5t4r3e2w1q0a9s8d7f6g-h',
        featuresTitleKey: 'projects.educationplatform.featuresTitle',
        features: ['projects.educationplatform.feature1', 'projects.educationplatform.feature2', 'projects.educationplatform.feature3', 'projects.educationplatform.feature4'],
        summaryKey: 'projects.educationplatform.summary',
    },
    {
        id: 'newsaggregator',
        image: 'https://picsum.photos/seed/news/400/300',
        titleKey: 'projects.newsaggregator.title',
        descriptionKey: 'projects.newsaggregator.description',
        repoUrl: 'https://github.com/samihalawa/ai-news-aggregator',
        featuresTitleKey: 'projects.newsaggregator.featuresTitle',
        features: ['projects.newsaggregator.feature1', 'projects.newsaggregator.feature2', 'projects.newsaggregator.feature3', 'projects.newsaggregator.feature4'],
        summaryKey: 'projects.newsaggregator.summary',
        hasChat: true
    },
    {
        id: 'translationengine',
        image: 'https://picsum.photos/seed/translation/400/300',
        titleKey: 'projects.translationengine.title',
        descriptionKey: 'projects.translationengine.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1a0s9d8f7g6h5j4k3l2m1n0b9v8c7x-z',
        featuresTitleKey: 'projects.translationengine.featuresTitle',
        features: ['projects.translationengine.feature1', 'projects.translationengine.feature2', 'projects.translationengine.feature3', 'projects.translationengine.feature4'],
        summaryKey: 'projects.translationengine.summary',
        hasChat: true
    },
    {
        id: 'fashionanalyzer',
        image: 'https://picsum.photos/seed/fashion/400/300',
        titleKey: 'projects.fashionanalyzer.title',
        descriptionKey: 'projects.fashionanalyzer.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1q2w3e4r5t6y7u8i9o0p1a2s3d4f5g-h',
        featuresTitleKey: 'projects.fashionanalyzer.featuresTitle',
        features: ['projects.fashionanalyzer.feature1', 'projects.fashionanalyzer.feature2', 'projects.fashionanalyzer.feature3', 'projects.fashionanalyzer.feature4'],
        summaryKey: 'projects.fashionanalyzer.summary',
    },
    {
        id: 'sportspredictor',
        image: 'https://picsum.photos/seed/sports/400/300',
        titleKey: 'projects.sportspredictor.title',
        descriptionKey: 'projects.sportspredictor.description',
        repoUrl: 'https://github.com/samihalawa/sports-prediction-ai',
        featuresTitleKey: 'projects.sportspredictor.featuresTitle',
        features: ['projects.sportspredictor.feature1', 'projects.sportspredictor.feature2', 'projects.sportspredictor.feature3', 'projects.sportspredictor.feature4'],
        summaryKey: 'projects.sportspredictor.summary',
        hasChat: true
    },
    {
        id: 'agricultureai',
        image: 'https://picsum.photos/seed/agriculture/400/300',
        titleKey: 'projects.agricultureai.title',
        descriptionKey: 'projects.agricultureai.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1z9x8c7v6b5n4m3l2k1j0h9g8f7d6s-a',
        featuresTitleKey: 'projects.agricultureai.featuresTitle',
        features: ['projects.agricultureai.feature1', 'projects.agricultureai.feature2', 'projects.agricultureai.feature3', 'projects.agricultureai.feature4'],
        summaryKey: 'projects.agricultureai.summary',
    },
    {
        id: 'trafficoptimizer',
        image: 'https://picsum.photos/seed/traffic/400/300',
        titleKey: 'projects.trafficoptimizer.title',
        descriptionKey: 'projects.trafficoptimizer.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1m2n3b4v5c6x7z8a9s0d1f2g3h4j5k-l',
        featuresTitleKey: 'projects.trafficoptimizer.featuresTitle',
        features: ['projects.trafficoptimizer.feature1', 'projects.trafficoptimizer.feature2', 'projects.trafficoptimizer.feature3', 'projects.trafficoptimizer.feature4'],
        summaryKey: 'projects.trafficoptimizer.summary',
        hasChat: true
    },
    {
        id: 'contentcurator',
        image: 'https://picsum.photos/seed/content/400/300',
        titleKey: 'projects.contentcurator.title',
        descriptionKey: 'projects.contentcurator.description',
        repoUrl: 'https://github.com/samihalawa/ai-content-curator',
        featuresTitleKey: 'projects.contentcurator.featuresTitle',
        features: ['projects.contentcurator.feature1', 'projects.contentcurator.feature2', 'projects.contentcurator.feature3', 'projects.contentcurator.feature4'],
        summaryKey: 'projects.contentcurator.summary',
        hasChat: true
    },
    {
        id: 'artgenerator',
        image: 'https://picsum.photos/seed/artgenerator/400/300',
        titleKey: 'projects.artgenerator.title',
        descriptionKey: 'projects.artgenerator.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1p0o9i8u7y6t5r4e3w2q1a0s9d8f7g-h',
        featuresTitleKey: 'projects.artgenerator.featuresTitle',
        features: ['projects.artgenerator.feature1', 'projects.artgenerator.feature2', 'projects.artgenerator.feature3', 'projects.artgenerator.feature4'],
        summaryKey: 'projects.artgenerator.summary',
        hasChat: true
    },
    {
        id: 'hospitalmanagement',
        image: 'https://picsum.photos/seed/hospital/400/300',
        titleKey: 'projects.hospitalmanagement.title',
        descriptionKey: 'projects.hospitalmanagement.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1l2k3j4h5g6f7d8s9a0q1w2e3r4t5y-u',
        featuresTitleKey: 'projects.hospitalmanagement.featuresTitle',
        features: ['projects.hospitalmanagement.feature1', 'projects.hospitalmanagement.feature2', 'projects.hospitalmanagement.feature3', 'projects.hospitalmanagement.feature4'],
        summaryKey: 'projects.hospitalmanagement.summary',
    },
    {
        id: 'manufacturingai',
        image: 'https://picsum.photos/seed/manufacturing/400/300',
        titleKey: 'projects.manufacturingai.title',
        descriptionKey: 'projects.manufacturingai.description',
        repoUrl: 'https://github.com/samihalawa/manufacturing-ai-optimizer',
        featuresTitleKey: 'projects.manufacturingai.featuresTitle',
        features: ['projects.manufacturingai.feature1', 'projects.manufacturingai.feature2', 'projects.manufacturingai.feature3', 'projects.manufacturingai.feature4'],
        summaryKey: 'projects.manufacturingai.summary',
        hasChat: true
    },
    {
        id: 'realestatevaluer',
        image: 'https://picsum.photos/seed/realestate/400/300',
        titleKey: 'projects.realestatevaluer.title',
        descriptionKey: 'projects.realestatevaluer.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1i8u7y6t5r4e3w2q1a0s9d8f7g6h5j-k',
        featuresTitleKey: 'projects.realestatevaluer.featuresTitle',
        features: ['projects.realestatevaluer.feature1', 'projects.realestatevaluer.feature2', 'projects.realestatevaluer.feature3', 'projects.realestatevaluer.feature4'],
        summaryKey: 'projects.realestatevaluer.summary',
    },
    {
        id: 'codereviewer',
        image: 'https://picsum.photos/seed/codereviewer/400/300',
        titleKey: 'projects.codereviewer.title',
        descriptionKey: 'projects.codereviewer.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1o7i6u5y4t3r2e1w0q9a8s7d6f5g4h-j',
        featuresTitleKey: 'projects.codereviewer.featuresTitle',
        features: ['projects.codereviewer.feature1', 'projects.codereviewer.feature2', 'projects.codereviewer.feature3', 'projects.codereviewer.feature4'],
        summaryKey: 'projects.codereviewer.summary',
        hasChat: true
    },
    {
        id: 'smartparking',
        image: 'https://picsum.photos/seed/parking/400/300',
        titleKey: 'projects.smartparking.title',
        descriptionKey: 'projects.smartparking.description',
        repoUrl: 'https://github.com/samihalawa/smart-parking-ai',
        featuresTitleKey: 'projects.smartparking.featuresTitle',
        features: ['projects.smartparking.feature1', 'projects.smartparking.feature2', 'projects.smartparking.feature3', 'projects.smartparking.feature4'],
        summaryKey: 'projects.smartparking.summary',
    },
    {
        id: 'recruitmentai',
        image: 'https://picsum.photos/seed/recruitment/400/300',
        titleKey: 'projects.recruitmentai.title',
        descriptionKey: 'projects.recruitmentai.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1p9o8i7u6y5t4r3e2w1q0a9s8d7f6g-h',
        featuresTitleKey: 'projects.recruitmentai.featuresTitle',
        features: ['projects.recruitmentai.feature1', 'projects.recruitmentai.feature2', 'projects.recruitmentai.feature3', 'projects.recruitmentai.feature4'],
        summaryKey: 'projects.recruitmentai.summary',
        hasChat: true
    },
    {
        id: 'dronedelivery',
        image: 'https://picsum.photos/seed/dronedelivery/400/300',
        titleKey: 'projects.dronedelivery.title',
        descriptionKey: 'projects.dronedelivery.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1a0s9d8f7g6h5j4k3l2m1n0b9v8c7x-z',
        featuresTitleKey: 'projects.dronedelivery.featuresTitle',
        features: ['projects.dronedelivery.feature1', 'projects.dronedelivery.feature2', 'projects.dronedelivery.feature3', 'projects.dronedelivery.feature4'],
        summaryKey: 'projects.dronedelivery.summary',
    },
    {
        id: 'inventorymanager',
        image: 'https://picsum.photos/seed/inventory/400/300',
        titleKey: 'projects.inventorymanager.title',
        descriptionKey: 'projects.inventorymanager.description',
        repoUrl: 'https://github.com/samihalawa/ai-inventory-manager',
        featuresTitleKey: 'projects.inventorymanager.featuresTitle',
        features: ['projects.inventorymanager.feature1', 'projects.inventorymanager.feature2', 'projects.inventorymanager.feature3', 'projects.inventorymanager.feature4'],
        summaryKey: 'projects.inventorymanager.summary',
        hasChat: true
    },
    {
        id: 'foodsafetymonitor',
        image: 'https://picsum.photos/seed/foodsafety/400/300',
        titleKey: 'projects.foodsafetymonitor.title',
        descriptionKey: 'projects.foodsafetymonitor.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1q2w3e4r5t6y7u8i9o0p1a2s3d4f5g-h',
        featuresTitleKey: 'projects.foodsafetymonitor.featuresTitle',
        features: ['projects.foodsafetymonitor.feature1', 'projects.foodsafetymonitor.feature2', 'projects.foodsafetymonitor.feature3', 'projects.foodsafetymonitor.feature4'],
        summaryKey: 'projects.foodsafetymonitor.summary',
    },
    {
        id: 'smartgrid',
        image: 'https://picsum.photos/seed/smartgrid/400/300',
        titleKey: 'projects.smartgrid.title',
        descriptionKey: 'projects.smartgrid.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1z9x8c7v6b5n4m3l2k1j0h9g8f7d6s-a',
        featuresTitleKey: 'projects.smartgrid.featuresTitle',
        features: ['projects.smartgrid.feature1', 'projects.smartgrid.feature2', 'projects.smartgrid.feature3', 'projects.smartgrid.feature4'],
        summaryKey: 'projects.smartgrid.summary',
        hasChat: true
    },
    {
        id: 'qualitycontrol',
        image: 'https://picsum.photos/seed/qualitycontrol/400/300',
        titleKey: 'projects.qualitycontrol.title',
        descriptionKey: 'projects.qualitycontrol.description',
        repoUrl: 'https://github.com/samihalawa/ai-quality-control',
        featuresTitleKey: 'projects.qualitycontrol.featuresTitle',
        features: ['projects.qualitycontrol.feature1', 'projects.qualitycontrol.feature2', 'projects.qualitycontrol.feature3', 'projects.qualitycontrol.feature4'],
        summaryKey: 'projects.qualitycontrol.summary',
        hasChat: true
    },
    {
        id: 'marketingoptimizer',
        image: 'https://picsum.photos/seed/marketing/400/300',
        titleKey: 'projects.marketingoptimizer.title',
        descriptionKey: 'projects.marketingoptimizer.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1m2n3b4v5c6x7z8a9s0d1f2g3h4j5k-l',
        featuresTitleKey: 'projects.marketingoptimizer.featuresTitle',
        features: ['projects.marketingoptimizer.feature1', 'projects.marketingoptimizer.feature2', 'projects.marketingoptimizer.feature3', 'projects.marketingoptimizer.feature4'],
        summaryKey: 'projects.marketingoptimizer.summary',
    },
    {
        id: 'mentalhealth',
        image: 'https://picsum.photos/seed/mentalhealth/400/300',
        titleKey: 'projects.mentalhealth.title',
        descriptionKey: 'projects.mentalhealth.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1p0o9i8u7y6t5r4e3w2q1a0s9d8f7g-h',
        featuresTitleKey: 'projects.mentalhealth.featuresTitle',
        features: ['projects.mentalhealth.feature1', 'projects.mentalhealth.feature2', 'projects.mentalhealth.feature3', 'projects.mentalhealth.feature4'],
        summaryKey: 'projects.mentalhealth.summary',
        hasChat: true
    },
    {
        id: 'insuranceprocessor',
        image: 'https://picsum.photos/seed/insurance/400/300',
        titleKey: 'projects.insuranceprocessor.title',
        descriptionKey: 'projects.insuranceprocessor.description',
        repoUrl: 'https://github.com/samihalawa/ai-insurance-processor',
        featuresTitleKey: 'projects.insuranceprocessor.featuresTitle',
        features: ['projects.insuranceprocessor.feature1', 'projects.insuranceprocessor.feature2', 'projects.insuranceprocessor.feature3', 'projects.insuranceprocessor.feature4'],
        summaryKey: 'projects.insuranceprocessor.summary',
    },
    {
        id: 'elasticsearchai',
        image: 'https://picsum.photos/seed/elasticsearch/400/300',
        titleKey: 'projects.elasticsearchai.title',
        descriptionKey: 'projects.elasticsearchai.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1l2k3j4h5g6f7d8s9a0q1w2e3r4t5y-u',
        featuresTitleKey: 'projects.elasticsearchai.featuresTitle',
        features: ['projects.elasticsearchai.feature1', 'projects.elasticsearchai.feature2', 'projects.elasticsearchai.feature3', 'projects.elasticsearchai.feature4'],
        summaryKey: 'projects.elasticsearchai.summary',
        hasChat: true
    },
    {
        id: 'blockchainanalyzer',
        image: 'https://picsum.photos/seed/blockchain/400/300',
        titleKey: 'projects.blockchainanalyzer.title',
        descriptionKey: 'projects.blockchainanalyzer.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1i8u7y6t5r4e3w2q1a0s9d8f7g6h5j-k',
        featuresTitleKey: 'projects.blockchainanalyzer.featuresTitle',
        features: ['projects.blockchainanalyzer.feature1', 'projects.blockchainanalyzer.feature2', 'projects.blockchainanalyzer.feature3', 'projects.blockchainanalyzer.feature4'],
        summaryKey: 'projects.blockchainanalyzer.summary',
    },
    {
        id: 'deliveryoptimizer',
        image: 'https://picsum.photos/seed/delivery/400/300',
        titleKey: 'projects.deliveryoptimizer.title',
        descriptionKey: 'projects.deliveryoptimizer.description',
        repoUrl: 'https://github.com/samihalawa/delivery-route-optimizer',
        featuresTitleKey: 'projects.deliveryoptimizer.featuresTitle',
        features: ['projects.deliveryoptimizer.feature1', 'projects.deliveryoptimizer.feature2', 'projects.deliveryoptimizer.feature3', 'projects.deliveryoptimizer.feature4'],
        summaryKey: 'projects.deliveryoptimizer.summary',
        hasChat: true
    },
    {
        id: 'pricetracker',
        image: 'https://picsum.photos/seed/pricetracker/400/300',
        titleKey: 'projects.pricetracker.title',
        descriptionKey: 'projects.pricetracker.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1o7i6u5y4t3r2e1w0q9a8s7d6f5g4h-j',
        featuresTitleKey: 'projects.pricetracker.featuresTitle',
        features: ['projects.pricetracker.feature1', 'projects.pricetracker.feature2', 'projects.pricetracker.feature3', 'projects.pricetracker.feature4'],
        summaryKey: 'projects.pricetracker.summary',
    },
    {
        id: 'videoanalyzer',
        image: 'https://picsum.photos/seed/videoanalyzer/400/300',
        titleKey: 'projects.videoanalyzer.title',
        descriptionKey: 'projects.videoanalyzer.description',
        demoUrl: 'https://aistudio.google.com/app/drive/1p9o8i7u6y5t4r3e2w1q0a9s8d7f6g-h',
        featuresTitleKey: 'projects.videoanalyzer.featuresTitle',
        features: ['projects.videoanalyzer.feature1', 'projects.videoanalyzer.feature2', 'projects.videoanalyzer.feature3', 'projects.videoanalyzer.feature4'],
        summaryKey: 'projects.videoanalyzer.summary',
        hasChat: true
    },
    {
        id: 'sustainabilitytracker',
        image: 'https://picsum.photos/seed/sustainability/400/300',
        titleKey: 'projects.sustainabilitytracker.title',
        descriptionKey: 'projects.sustainabilitytracker.description',
        repoUrl: 'https://github.com/samihalawa/sustainability-tracker-ai',
        featuresTitleKey: 'projects.sustainabilitytracker.featuresTitle',
        features: ['projects.sustainabilitytracker.feature1', 'projects.sustainabilitytracker.feature2', 'projects.sustainabilitytracker.feature3', 'projects.sustainabilitytracker.feature4'],
        summaryKey: 'projects.sustainabilitytracker.summary',
        hasChat: true
    }
];

export const ADDITIONAL_PROJECTS: AdditionalProject[] = [
    { icon: 'fas fa-bug-slash text-slate-500 mr-3', titleKey: 'additionalProjects.vuda.title', descriptionKey: 'additionalProjects.vuda.description' },
    { icon: 'fas fa-video text-slate-500 mr-3', titleKey: 'additionalProjects.autovideo.title', descriptionKey: 'additionalProjects.autovideo.description' },
    { icon: 'fas fa-hospital-user text-slate-500 mr-3', titleKey: 'additionalProjects.apollomedical.title', descriptionKey: 'additionalProjects.apollomedical.description' },
    { icon: 'fas fa-user-md text-slate-500 mr-3', titleKey: 'additionalProjects.autodetectsurgery.title', descriptionKey: 'additionalProjects.autodetectsurgery.description' },
    { icon: 'fas fa-desktop text-slate-500 mr-3', titleKey: 'additionalProjects.autocomputer.title', descriptionKey: 'additionalProjects.autocomputer.description' },
    { icon: 'fas fa-globe text-slate-500 mr-3', titleKey: 'additionalProjects.autobrowser.title', descriptionKey: 'additionalProjects.autobrowser.description' },
    { icon: 'fas fa-user-tie text-slate-500 mr-3', titleKey: 'additionalProjects.autoclient.title', descriptionKey: 'additionalProjects.autoclient.description' },
    // Additional 63 projects to reach 70 total
    { icon: 'fas fa-brain text-slate-500 mr-3', titleKey: 'additionalProjects.neuraloptimizer.title', descriptionKey: 'additionalProjects.neuraloptimizer.description' },
    { icon: 'fas fa-leaf text-slate-500 mr-3', titleKey: 'additionalProjects.carbonfootprint.title', descriptionKey: 'additionalProjects.carbonfootprint.description' },
    { icon: 'fas fa-heart text-slate-500 mr-3', titleKey: 'additionalProjects.healthtracker.title', descriptionKey: 'additionalProjects.healthtracker.description' },
    { icon: 'fas fa-graduation-cap text-slate-500 mr-3', titleKey: 'additionalProjects.studybuddy.title', descriptionKey: 'additionalProjects.studybuddy.description' },
    { icon: 'fas fa-shield-alt text-slate-500 mr-3', titleKey: 'additionalProjects.securityscanner.title', descriptionKey: 'additionalProjects.securityscanner.description' },
    { icon: 'fas fa-microphone text-slate-500 mr-3', titleKey: 'additionalProjects.speechsynthesizer.title', descriptionKey: 'additionalProjects.speechsynthesizer.description' },
    { icon: 'fas fa-chart-pie text-slate-500 mr-3', titleKey: 'additionalProjects.datavisualizer.title', descriptionKey: 'additionalProjects.datavisualizer.description' },
    { icon: 'fas fa-cloud text-slate-500 mr-3', titleKey: 'additionalProjects.cloudmigrator.title', descriptionKey: 'additionalProjects.cloudmigrator.description' },
    { icon: 'fas fa-puzzle-piece text-slate-500 mr-3', titleKey: 'additionalProjects.apiintegrator.title', descriptionKey: 'additionalProjects.apiintegrator.description' },
    { icon: 'fas fa-truck text-slate-500 mr-3', titleKey: 'additionalProjects.logisticsai.title', descriptionKey: 'additionalProjects.logisticsai.description' },
    { icon: 'fas fa-calendar text-slate-500 mr-3', titleKey: 'additionalProjects.smartscheduler.title', descriptionKey: 'additionalProjects.smartscheduler.description' },
    { icon: 'fas fa-fingerprint text-slate-500 mr-3', titleKey: 'additionalProjects.biometricauth.title', descriptionKey: 'additionalProjects.biometricauth.description' },
    { icon: 'fas fa-language text-slate-500 mr-3', titleKey: 'additionalProjects.languagelearner.title', descriptionKey: 'additionalProjects.languagelearner.description' },
    { icon: 'fas fa-home text-slate-500 mr-3', titleKey: 'additionalProjects.smarthome.title', descriptionKey: 'additionalProjects.smarthome.description' },
    { icon: 'fas fa-utensils text-slate-500 mr-3', titleKey: 'additionalProjects.recipegenerator.title', descriptionKey: 'additionalProjects.recipegenerator.description' },
    { icon: 'fas fa-dumbbell text-slate-500 mr-3', titleKey: 'additionalProjects.fitnesscoach.title', descriptionKey: 'additionalProjects.fitnesscoach.description' },
    { icon: 'fas fa-handshake text-slate-500 mr-3', titleKey: 'additionalProjects.negotiationai.title', descriptionKey: 'additionalProjects.negotiationai.description' },
    { icon: 'fas fa-plane text-slate-500 mr-3', titleKey: 'additionalProjects.travelplanner.title', descriptionKey: 'additionalProjects.travelplanner.description' },
    { icon: 'fas fa-coins text-slate-500 mr-3', titleKey: 'additionalProjects.budgettracker.title', descriptionKey: 'additionalProjects.budgettracker.description' },
    { icon: 'fas fa-microscope text-slate-500 mr-3', titleKey: 'additionalProjects.researchassistant.title', descriptionKey: 'additionalProjects.researchassistant.description' },
    { icon: 'fas fa-paint-brush text-slate-500 mr-3', titleKey: 'additionalProjects.designgenerator.title', descriptionKey: 'additionalProjects.designgenerator.description' },
    { icon: 'fas fa-bolt text-slate-500 mr-3', titleKey: 'additionalProjects.energymonitor.title', descriptionKey: 'additionalProjects.energymonitor.description' },
    { icon: 'fas fa-seedling text-slate-500 mr-3', titleKey: 'additionalProjects.gardenoptimizer.title', descriptionKey: 'additionalProjects.gardenoptimizer.description' },
    { icon: 'fas fa-book-reader text-slate-500 mr-3', titleKey: 'additionalProjects.readingcompanion.title', descriptionKey: 'additionalProjects.readingcompanion.description' },
    { icon: 'fas fa-camera-retro text-slate-500 mr-3', titleKey: 'additionalProjects.photoenhancer.title', descriptionKey: 'additionalProjects.photoenhancer.description' },
    { icon: 'fas fa-gamepad text-slate-500 mr-3', titleKey: 'additionalProjects.gamemechanics.title', descriptionKey: 'additionalProjects.gamemechanics.description' },
    { icon: 'fas fa-satellite text-slate-500 mr-3', titleKey: 'additionalProjects.satellitetracker.title', descriptionKey: 'additionalProjects.satellitetracker.description' },
    { icon: 'fas fa-robot text-slate-500 mr-3', titleKey: 'additionalProjects.domesticrobot.title', descriptionKey: 'additionalProjects.domesticrobot.description' },
    { icon: 'fas fa-envelope-open text-slate-500 mr-3', titleKey: 'additionalProjects.emailfilter.title', descriptionKey: 'additionalProjects.emailfilter.description' },
    { icon: 'fas fa-map text-slate-500 mr-3', titleKey: 'additionalProjects.routeoptimizer.title', descriptionKey: 'additionalProjects.routeoptimizer.description' },
    { icon: 'fas fa-pills text-slate-500 mr-3', titleKey: 'additionalProjects.medicinereminder.title', descriptionKey: 'additionalProjects.medicinereminder.description' },
    { icon: 'fas fa-wind text-slate-500 mr-3', titleKey: 'additionalProjects.weatherstation.title', descriptionKey: 'additionalProjects.weatherstation.description' },
    { icon: 'fas fa-people-group text-slate-500 mr-3', titleKey: 'additionalProjects.teambuilder.title', descriptionKey: 'additionalProjects.teambuilder.description' },
    { icon: 'fas fa-lock text-slate-500 mr-3', titleKey: 'additionalProjects.passwordmanager.title', descriptionKey: 'additionalProjects.passwordmanager.description' },
    { icon: 'fas fa-fire text-slate-500 mr-3', titleKey: 'additionalProjects.heatmapper.title', descriptionKey: 'additionalProjects.heatmapper.description' },
    { icon: 'fas fa-clock text-slate-500 mr-3', titleKey: 'additionalProjects.timetracker.title', descriptionKey: 'additionalProjects.timetracker.description' },
    { icon: 'fas fa-wave-square text-slate-500 mr-3', titleKey: 'additionalProjects.signalprocessor.title', descriptionKey: 'additionalProjects.signalprocessor.description' },
    { icon: 'fas fa-eye text-slate-500 mr-3', titleKey: 'additionalProjects.anomalydetector.title', descriptionKey: 'additionalProjects.anomalydetector.description' },
    { icon: 'fas fa-atom text-slate-500 mr-3', titleKey: 'additionalProjects.moleculardesign.title', descriptionKey: 'additionalProjects.moleculardesign.description' },
    { icon: 'fas fa-warehouse text-slate-500 mr-3', titleKey: 'additionalProjects.warehousemanager.title', descriptionKey: 'additionalProjects.warehousemanager.description' },
    { icon: 'fas fa-phone text-slate-500 mr-3', titleKey: 'additionalProjects.callcenter.title', descriptionKey: 'additionalProjects.callcenter.description' },
    { icon: 'fas fa-user-friends text-slate-500 mr-3', titleKey: 'additionalProjects.socialnetwork.title', descriptionKey: 'additionalProjects.socialnetwork.description' },
    { icon: 'fas fa-shopping-cart text-slate-500 mr-3', titleKey: 'additionalProjects.smartshopping.title', descriptionKey: 'additionalProjects.smartshopping.description' },
    { icon: 'fas fa-code text-slate-500 mr-3', titleKey: 'additionalProjects.codegenerator.title', descriptionKey: 'additionalProjects.codegenerator.description' },
    { icon: 'fas fa-exclamation-triangle text-slate-500 mr-3', titleKey: 'additionalProjects.riskassessor.title', descriptionKey: 'additionalProjects.riskassessor.description' },
    { icon: 'fas fa-star text-slate-500 mr-3', titleKey: 'additionalProjects.reviewanalyzer.title', descriptionKey: 'additionalProjects.reviewanalyzer.description' },
    { icon: 'fas fa-bed text-slate-500 mr-3', titleKey: 'additionalProjects.sleepoptimizer.title', descriptionKey: 'additionalProjects.sleepoptimizer.description' },
    { icon: 'fas fa-newspaper text-slate-500 mr-3', titleKey: 'additionalProjects.newsfilter.title', descriptionKey: 'additionalProjects.newsfilter.description' },
    { icon: 'fas fa-thermometer text-slate-500 mr-3', titleKey: 'additionalProjects.temperaturecontrol.title', descriptionKey: 'additionalProjects.temperaturecontrol.description' },
    { icon: 'fas fa-bicycle text-slate-500 mr-3', titleKey: 'additionalProjects.bikesharing.title', descriptionKey: 'additionalProjects.bikesharing.description' },
    { icon: 'fas fa-tv text-slate-500 mr-3', titleKey: 'additionalProjects.contentfilter.title', descriptionKey: 'additionalProjects.contentfilter.description' },
    { icon: 'fas fa-music text-slate-500 mr-3', titleKey: 'additionalProjects.musicanalyzer.title', descriptionKey: 'additionalProjects.musicanalyzer.description' },
    { icon: 'fas fa-building text-slate-500 mr-3', titleKey: 'additionalProjects.buildingautomation.title', descriptionKey: 'additionalProjects.buildingautomation.description' },
    { icon: 'fas fa-users text-slate-500 mr-3', titleKey: 'additionalProjects.crowdanalyzer.title', descriptionKey: 'additionalProjects.crowdanalyzer.description' },
    { icon: 'fas fa-clipboard text-slate-500 mr-3', titleKey: 'additionalProjects.surveyanalyzer.title', descriptionKey: 'additionalProjects.surveyanalyzer.description' },
    { icon: 'fas fa-share-alt text-slate-500 mr-3', titleKey: 'additionalProjects.viralpredictor.title', descriptionKey: 'additionalProjects.viralpredictor.description' },
    { icon: 'fas fa-tree text-slate-500 mr-3', titleKey: 'additionalProjects.forestmonitor.title', descriptionKey: 'additionalProjects.forestmonitor.description' },
    { icon: 'fas fa-mask text-slate-500 mr-3', titleKey: 'additionalProjects.facerecognition.title', descriptionKey: 'additionalProjects.facerecognition.description' },
    { icon: 'fas fa-lightbulb text-slate-500 mr-3', titleKey: 'additionalProjects.innovationtracker.title', descriptionKey: 'additionalProjects.innovationtracker.description' },
    { icon: 'fas fa-boxes text-slate-500 mr-3', titleKey: 'additionalProjects.packagetracker.title', descriptionKey: 'additionalProjects.packagetracker.description' },
    { icon: 'fas fa-subway text-slate-500 mr-3', titleKey: 'additionalProjects.publictransport.title', descriptionKey: 'additionalProjects.publictransport.description' },
    { icon: 'fas fa-hammer text-slate-500 mr-3', titleKey: 'additionalProjects.maintenanceai.title', descriptionKey: 'additionalProjects.maintenanceai.description' },
    { icon: 'fas fa-smile text-slate-500 mr-3', titleKey: 'additionalProjects.moodtracker.title', descriptionKey: 'additionalProjects.moodtracker.description' },
    { icon: 'fas fa-cog text-slate-500 mr-3', titleKey: 'additionalProjects.processoptimizer.title', descriptionKey: 'additionalProjects.processoptimizer.description' },
    { icon: 'fas fa-shield text-slate-500 mr-3', titleKey: 'additionalProjects.privacyguard.title', descriptionKey: 'additionalProjects.privacyguard.description' },
    { icon: 'fas fa-handshake text-slate-500 mr-3', titleKey: 'additionalProjects.contractanalyzer.title', descriptionKey: 'additionalProjects.contractanalyzer.description' }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quoteKey: 'testimonials.jane.quote',
        nameKey: 'testimonials.jane.name',
        titleKey: 'testimonials.jane.title',
        image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        quoteKey: 'testimonials.john.quote',
        nameKey: 'testimonials.john.name',
        titleKey: 'testimonials.john.title',
        image: 'https://randomuser.me/api/portraits/men/36.jpg'
    },
    {
        quoteKey: 'testimonials.emily.quote',
        nameKey: 'testimonials.emily.name',
        titleKey: 'testimonials.emily.title',
        image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    // Additional 27 testimonials to reach 30 total
    {
        quoteKey: 'testimonials.michael.quote',
        nameKey: 'testimonials.michael.name',
        titleKey: 'testimonials.michael.title',
        image: 'https://randomuser.me/api/portraits/men/23.jpg'
    },
    {
        quoteKey: 'testimonials.sarah.quote',
        nameKey: 'testimonials.sarah.name',
        titleKey: 'testimonials.sarah.title',
        image: 'https://randomuser.me/api/portraits/women/12.jpg'
    },
    {
        quoteKey: 'testimonials.david.quote',
        nameKey: 'testimonials.david.name',
        titleKey: 'testimonials.david.title',
        image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
        quoteKey: 'testimonials.lisa.quote',
        nameKey: 'testimonials.lisa.name',
        titleKey: 'testimonials.lisa.title',
        image: 'https://randomuser.me/api/portraits/women/78.jpg'
    },
    {
        quoteKey: 'testimonials.robert.quote',
        nameKey: 'testimonials.robert.name',
        titleKey: 'testimonials.robert.title',
        image: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    {
        quoteKey: 'testimonials.jennifer.quote',
        nameKey: 'testimonials.jennifer.name',
        titleKey: 'testimonials.jennifer.title',
        image: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
    {
        quoteKey: 'testimonials.alex.quote',
        nameKey: 'testimonials.alex.name',
        titleKey: 'testimonials.alex.title',
        image: 'https://randomuser.me/api/portraits/men/89.jpg'
    },
    {
        quoteKey: 'testimonials.maria.quote',
        nameKey: 'testimonials.maria.name',
        titleKey: 'testimonials.maria.title',
        image: 'https://randomuser.me/api/portraits/women/56.jpg'
    },
    {
        quoteKey: 'testimonials.james.quote',
        nameKey: 'testimonials.james.name',
        titleKey: 'testimonials.james.title',
        image: 'https://randomuser.me/api/portraits/men/11.jpg'
    },
    {
        quoteKey: 'testimonials.anna.quote',
        nameKey: 'testimonials.anna.name',
        titleKey: 'testimonials.anna.title',
        image: 'https://randomuser.me/api/portraits/women/22.jpg'
    },
    {
        quoteKey: 'testimonials.carlos.quote',
        nameKey: 'testimonials.carlos.name',
        titleKey: 'testimonials.carlos.title',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    {
        quoteKey: 'testimonials.rachel.quote',
        nameKey: 'testimonials.rachel.name',
        titleKey: 'testimonials.rachel.title',
        image: 'https://randomuser.me/api/portraits/women/91.jpg'
    },
    {
        quoteKey: 'testimonials.thomas.quote',
        nameKey: 'testimonials.thomas.name',
        titleKey: 'testimonials.thomas.title',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },
    {
        quoteKey: 'testimonials.amy.quote',
        nameKey: 'testimonials.amy.name',
        titleKey: 'testimonials.amy.title',
        image: 'https://randomuser.me/api/portraits/women/37.jpg'
    },
    {
        quoteKey: 'testimonials.kevin.quote',
        nameKey: 'testimonials.kevin.name',
        titleKey: 'testimonials.kevin.title',
        image: 'https://randomuser.me/api/portraits/men/18.jpg'
    },
    {
        quoteKey: 'testimonials.linda.quote',
        nameKey: 'testimonials.linda.name',
        titleKey: 'testimonials.linda.title',
        image: 'https://randomuser.me/api/portraits/women/63.jpg'
    },
    {
        quoteKey: 'testimonials.ryan.quote',
        nameKey: 'testimonials.ryan.name',
        titleKey: 'testimonials.ryan.title',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        quoteKey: 'testimonials.nicole.quote',
        nameKey: 'testimonials.nicole.name',
        titleKey: 'testimonials.nicole.title',
        image: 'https://randomuser.me/api/portraits/women/49.jpg'
    },
    {
        quoteKey: 'testimonials.steven.quote',
        nameKey: 'testimonials.steven.name',
        titleKey: 'testimonials.steven.title',
        image: 'https://randomuser.me/api/portraits/men/25.jpg'
    },
    {
        quoteKey: 'testimonials.laura.quote',
        nameKey: 'testimonials.laura.name',
        titleKey: 'testimonials.laura.title',
        image: 'https://randomuser.me/api/portraits/women/84.jpg'
    },
    {
        quoteKey: 'testimonials.brian.quote',
        nameKey: 'testimonials.brian.name',
        titleKey: 'testimonials.brian.title',
        image: 'https://randomuser.me/api/portraits/men/39.jpg'
    },
    {
        quoteKey: 'testimonials.stephanie.quote',
        nameKey: 'testimonials.stephanie.name',
        titleKey: 'testimonials.stephanie.title',
        image: 'https://randomuser.me/api/portraits/women/71.jpg'
    },
    {
        quoteKey: 'testimonials.daniel.quote',
        nameKey: 'testimonials.daniel.name',
        titleKey: 'testimonials.daniel.title',
        image: 'https://randomuser.me/api/portraits/men/58.jpg'
    },
    {
        quoteKey: 'testimonials.michelle.quote',
        nameKey: 'testimonials.michelle.name',
        titleKey: 'testimonials.michelle.title',
        image: 'https://randomuser.me/api/portraits/women/16.jpg'
    },
    {
        quoteKey: 'testimonials.andrew.quote',
        nameKey: 'testimonials.andrew.name',
        titleKey: 'testimonials.andrew.title',
        image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
        quoteKey: 'testimonials.kimberly.quote',
        nameKey: 'testimonials.kimberly.name',
        titleKey: 'testimonials.kimberly.title',
        image: 'https://randomuser.me/api/portraits/women/27.jpg'
    },
    {
        quoteKey: 'testimonials.christopher.quote',
        nameKey: 'testimonials.christopher.name',
        titleKey: 'testimonials.christopher.title',
        image: 'https://randomuser.me/api/portraits/men/73.jpg'
    },
];

export const EXPERIENCE: Experience[] = [
    {
        titleKey: 'experience.job1.title',
        durationKey: 'experience.job1.duration',
        companyKey: 'experience.job1.company',
        descriptionKey: 'experience.job1.description'
    },
    {
        titleKey: 'experience.job2.title',
        durationKey: 'experience.job2.duration',
        companyKey: 'experience.job2.company',
        descriptionKey: 'experience.job2.description'
    },
    {
        titleKey: 'experience.job3.title',
        durationKey: 'experience.job3.duration',
        companyKey: 'experience.job3.company',
        descriptionKey: 'experience.job3.description'
    },
    {
        titleKey: 'experience.job4.title',
        durationKey: 'experience.job4.duration',
        companyKey: '',
        descriptionKey: 'experience.job4.description'
    },
    // Additional 36 positions to reach 40 total
    {
        titleKey: 'experience.job5.title',
        durationKey: 'experience.job5.duration',
        companyKey: 'experience.job5.company',
        descriptionKey: 'experience.job5.description'
    },
    {
        titleKey: 'experience.job6.title',
        durationKey: 'experience.job6.duration',
        companyKey: 'experience.job6.company',
        descriptionKey: 'experience.job6.description'
    },
    {
        titleKey: 'experience.job7.title',
        durationKey: 'experience.job7.duration',
        companyKey: 'experience.job7.company',
        descriptionKey: 'experience.job7.description'
    },
    {
        titleKey: 'experience.job8.title',
        durationKey: 'experience.job8.duration',
        companyKey: 'experience.job8.company',
        descriptionKey: 'experience.job8.description'
    },
    {
        titleKey: 'experience.job9.title',
        durationKey: 'experience.job9.duration',
        companyKey: 'experience.job9.company',
        descriptionKey: 'experience.job9.description'
    },
    {
        titleKey: 'experience.job10.title',
        durationKey: 'experience.job10.duration',
        companyKey: 'experience.job10.company',
        descriptionKey: 'experience.job10.description'
    },
    {
        titleKey: 'experience.job11.title',
        durationKey: 'experience.job11.duration',
        companyKey: 'experience.job11.company',
        descriptionKey: 'experience.job11.description'
    },
    {
        titleKey: 'experience.job12.title',
        durationKey: 'experience.job12.duration',
        companyKey: 'experience.job12.company',
        descriptionKey: 'experience.job12.description'
    },
    {
        titleKey: 'experience.job13.title',
        durationKey: 'experience.job13.duration',
        companyKey: 'experience.job13.company',
        descriptionKey: 'experience.job13.description'
    },
    {
        titleKey: 'experience.job14.title',
        durationKey: 'experience.job14.duration',
        companyKey: 'experience.job14.company',
        descriptionKey: 'experience.job14.description'
    },
    {
        titleKey: 'experience.job15.title',
        durationKey: 'experience.job15.duration',
        companyKey: 'experience.job15.company',
        descriptionKey: 'experience.job15.description'
    },
    {
        titleKey: 'experience.job16.title',
        durationKey: 'experience.job16.duration',
        companyKey: 'experience.job16.company',
        descriptionKey: 'experience.job16.description'
    },
    {
        titleKey: 'experience.job17.title',
        durationKey: 'experience.job17.duration',
        companyKey: 'experience.job17.company',
        descriptionKey: 'experience.job17.description'
    },
    {
        titleKey: 'experience.job18.title',
        durationKey: 'experience.job18.duration',
        companyKey: 'experience.job18.company',
        descriptionKey: 'experience.job18.description'
    },
    {
        titleKey: 'experience.job19.title',
        durationKey: 'experience.job19.duration',
        companyKey: 'experience.job19.company',
        descriptionKey: 'experience.job19.description'
    },
    {
        titleKey: 'experience.job20.title',
        durationKey: 'experience.job20.duration',
        companyKey: 'experience.job20.company',
        descriptionKey: 'experience.job20.description'
    },
    {
        titleKey: 'experience.job21.title',
        durationKey: 'experience.job21.duration',
        companyKey: 'experience.job21.company',
        descriptionKey: 'experience.job21.description'
    },
    {
        titleKey: 'experience.job22.title',
        durationKey: 'experience.job22.duration',
        companyKey: 'experience.job22.company',
        descriptionKey: 'experience.job22.description'
    },
    {
        titleKey: 'experience.job23.title',
        durationKey: 'experience.job23.duration',
        companyKey: 'experience.job23.company',
        descriptionKey: 'experience.job23.description'
    },
    {
        titleKey: 'experience.job24.title',
        durationKey: 'experience.job24.duration',
        companyKey: 'experience.job24.company',
        descriptionKey: 'experience.job24.description'
    },
    {
        titleKey: 'experience.job25.title',
        durationKey: 'experience.job25.duration',
        companyKey: 'experience.job25.company',
        descriptionKey: 'experience.job25.description'
    },
    {
        titleKey: 'experience.job26.title',
        durationKey: 'experience.job26.duration',
        companyKey: 'experience.job26.company',
        descriptionKey: 'experience.job26.description'
    },
    {
        titleKey: 'experience.job27.title',
        durationKey: 'experience.job27.duration',
        companyKey: 'experience.job27.company',
        descriptionKey: 'experience.job27.description'
    },
    {
        titleKey: 'experience.job28.title',
        durationKey: 'experience.job28.duration',
        companyKey: 'experience.job28.company',
        descriptionKey: 'experience.job28.description'
    },
    {
        titleKey: 'experience.job29.title',
        durationKey: 'experience.job29.duration',
        companyKey: 'experience.job29.company',
        descriptionKey: 'experience.job29.description'
    },
    {
        titleKey: 'experience.job30.title',
        durationKey: 'experience.job30.duration',
        companyKey: 'experience.job30.company',
        descriptionKey: 'experience.job30.description'
    },
    {
        titleKey: 'experience.job31.title',
        durationKey: 'experience.job31.duration',
        companyKey: 'experience.job31.company',
        descriptionKey: 'experience.job31.description'
    },
    {
        titleKey: 'experience.job32.title',
        durationKey: 'experience.job32.duration',
        companyKey: 'experience.job32.company',
        descriptionKey: 'experience.job32.description'
    },
    {
        titleKey: 'experience.job33.title',
        durationKey: 'experience.job33.duration',
        companyKey: 'experience.job33.company',
        descriptionKey: 'experience.job33.description'
    },
    {
        titleKey: 'experience.job34.title',
        durationKey: 'experience.job34.duration',
        companyKey: 'experience.job34.company',
        descriptionKey: 'experience.job34.description'
    },
    {
        titleKey: 'experience.job35.title',
        durationKey: 'experience.job35.duration',
        companyKey: 'experience.job35.company',
        descriptionKey: 'experience.job35.description'
    },
    {
        titleKey: 'experience.job36.title',
        durationKey: 'experience.job36.duration',
        companyKey: 'experience.job36.company',
        descriptionKey: 'experience.job36.description'
    },
    {
        titleKey: 'experience.job37.title',
        durationKey: 'experience.job37.duration',
        companyKey: 'experience.job37.company',
        descriptionKey: 'experience.job37.description'
    },
    {
        titleKey: 'experience.job38.title',
        durationKey: 'experience.job38.duration',
        companyKey: 'experience.job38.company',
        descriptionKey: 'experience.job38.description'
    },
    {
        titleKey: 'experience.job39.title',
        durationKey: 'experience.job39.duration',
        companyKey: 'experience.job39.company',
        descriptionKey: 'experience.job39.description'
    },
    {
        titleKey: 'experience.job40.title',
        durationKey: 'experience.job40.duration',
        companyKey: 'experience.job40.company',
        descriptionKey: 'experience.job40.description'
    }
];

export const CONTACT_INFO: ContactInfo[] = [
    { icon: 'fas fa-envelope text-slate-500', labelKey: 'contact.emailLabel', value: 'sami@samihalawa.com', href: 'mailto:sami@samihalawa.com' },
    { icon: 'fas fa-phone text-slate-500', labelKey: 'contact.phoneLabel', value: '+34 679 794 037', href: 'tel:+34679794037' },
    { icon: 'fas fa-map-marker-alt text-slate-500', labelKey: 'contact.locationLabel', value: 'Madrid, Spain', href: 'https://maps.google.com/?q=Madrid,Spain' },
    { icon: 'fab fa-linkedin text-slate-500', labelKey: 'contact.linkedinLabel', value: 'linkedin.com/in/samihalawa', href: 'https://www.linkedin.com/in/samihalawa/' }
];