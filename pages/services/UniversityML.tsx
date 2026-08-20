import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, type LanguageCode } from '../../i18n/LanguageContext';
import ServiceDetail from './ServiceDetail';

const Section: React.FC<{ title: string, points: string[] }>=({ title, points })=> (
  <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <ul className="list-disc list-inside text-slate-700 space-y-2">
      {points.map((p, i) => (<li key={i}>{p}</li>))}
    </ul>
  </div>
);

type UniversityCopy = {
  intro: string;
  syllabusTitle: string;
  syllabus: string[];
  projectTitle: string;
  project: string[];
  integrityTitle: string;
  integrity: string;
  primaryCta: string;
  secondaryCta: string;
};

const copy: Record<LanguageCode, UniversityCopy> = {
  en: {
    intro: 'Tutoring from first principles to advanced work. We use exercises from your own course, work through them step by step, and build exam-ready materials together.',
    syllabusTitle: 'Practical syllabus',
    syllabus: [
      'Scientific Python: NumPy, Pandas, Matplotlib',
      'ML models: trees, KNN, regression, evaluation metrics',
      'Deep learning: CNN, RNN/LSTM, transfer learning',
      'Applied statistics, PCA, clustering, time series',
    ],
    projectTitle: 'Final-project (TFG/TFM) guidance',
    project: [
      'Guidance on choosing a topic and mapping the state of the art',
      'Methodology review: research question, dataset choice, baselines',
      'Coaching towards a reproducible, well-documented implementation',
      'Feedback on experiment design, evaluation and how results are reported',
      'Presentation practice with mock questions from a defence panel',
    ],
    integrityTitle: 'Academic integrity',
    integrity: 'This is tutoring, not ghostwriting. I explain, review and give feedback so you can do the work yourself; the student remains responsible for the submitted work and for complying with their institution’s rules.',
    primaryCta: 'Plan a study path',
    secondaryCta: 'Read articles',
  },
  es: {
    intro: 'Tutoría desde los fundamentos hasta nivel avanzado. Trabajamos con ejercicios reales de tu asignatura, los resolvemos paso a paso y preparamos materiales listos para el examen.',
    syllabusTitle: 'Temario práctico',
    syllabus: [
      'Python científico: NumPy, Pandas, Matplotlib',
      'Modelos ML: árboles, KNN, regresión, métricas',
      'Deep Learning: CNN, RNN/LSTM, transfer learning',
      'Estadística aplicada, PCA, clustering, series temporales',
    ],
    projectTitle: 'Acompañamiento en TFG/TFM',
    project: [
      'Orientación para elegir tema y revisar el estado del arte',
      'Revisión de metodología: pregunta de investigación, datos y baselines',
      'Acompañamiento hacia una implementación reproducible y bien documentada',
      'Feedback sobre diseño de experimentos, evaluación y redacción de resultados',
      'Práctica de presentación con preguntas simuladas de tribunal',
    ],
    integrityTitle: 'Integridad académica',
    integrity: 'Esto es tutoría, no elaboración del trabajo por ti. Explico, reviso y doy feedback para que puedas hacerlo tú; el estudiante sigue siendo responsable del trabajo entregado y del cumplimiento de las normas de su universidad.',
    primaryCta: 'Plan de estudio',
    secondaryCta: 'Leer artículos',
  },
  fr: {
    intro: 'Un accompagnement des bases jusqu’au niveau avancé. Nous partons des exercices de votre propre cours, les traitons pas à pas et préparons des supports prêts pour l’examen.',
    syllabusTitle: 'Programme pratique',
    syllabus: [
      'Python scientifique : NumPy, Pandas, Matplotlib',
      'Modèles ML : arbres, KNN, régression, métriques',
      'Deep learning : CNN, RNN/LSTM, transfer learning',
      'Statistiques appliquées, ACP, clustering, séries temporelles',
    ],
    projectTitle: 'Accompagnement du mémoire (TFG/TFM)',
    project: [
      'Aide au choix du sujet et à la revue de l’état de l’art',
      'Revue de méthodologie : question de recherche, données, baselines',
      'Accompagnement vers une implémentation reproductible et documentée',
      'Retours sur le protocole expérimental, l’évaluation et la rédaction des résultats',
      'Entraînement à la soutenance avec questions simulées du jury',
    ],
    integrityTitle: 'Intégrité académique',
    integrity: 'Il s’agit d’un accompagnement, pas d’une rédaction à votre place. J’explique, je relis et je donne des retours pour que vous fassiez le travail ; l’étudiant reste responsable du travail rendu et du respect des règles de son établissement.',
    primaryCta: 'Préparer un plan d’étude',
    secondaryCta: 'Lire les articles',
  },
  zh: {
    intro: '从基础到进阶的辅导。我们使用你所在课程的真实练习，逐步讲解，并一起准备可用于考试的材料。',
    syllabusTitle: '实用课程内容',
    syllabus: [
      '科学计算 Python：NumPy、Pandas、Matplotlib',
      '机器学习模型：决策树、KNN、回归、评估指标',
      '深度学习：CNN、RNN/LSTM、迁移学习',
      '应用统计、PCA、聚类、时间序列',
    ],
    projectTitle: '毕业论文（TFG/TFM）指导',
    project: [
      '在选题与文献综述方面提供指导',
      '方法论审阅：研究问题、数据选择与基线设置',
      '指导你完成可复现且文档完善的实现',
      '就实验设计、评估方式与结果撰写给出反馈',
      '答辩演练，模拟评审委员会提问',
    ],
    integrityTitle: '学术诚信',
    integrity: '这是辅导，而不是代写。我负责讲解、审阅并给出反馈，让你自己完成作业；所提交的作业以及是否符合所在院校的规定，仍由学生本人负责。',
    primaryCta: '制定学习计划',
    secondaryCta: '阅读文章',
  },
};

const UniversityML: React.FC = () => {
  const { t, language } = useTranslation();
  const title = t('services.universityML.title');
  const c = copy[language];
  return (
    <section className="py-16 bg-white">
<div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
        <p className="text-lg text-slate-700 mb-8">{c.intro}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <Section title={c.syllabusTitle} points={c.syllabus} />
          <Section title={c.projectTitle} points={c.project} />
        </div>
        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-lg font-bold text-slate-900">{c.integrityTitle}</h3>
          <p className="mt-2 text-slate-700 leading-relaxed">{c.integrity}</p>
        </div>
        <ServiceDetail slug="university-ml" />
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-slate-800">{c.primaryCta}</Link>
          <a href="/blog" className="inline-block bg-white text-slate-700 px-6 py-3 rounded-md border border-slate-300 font-semibold hover:bg-slate-100">{c.secondaryCta}</a>
        </div>
      </div>
    </section>
  );
};

export default UniversityML;
