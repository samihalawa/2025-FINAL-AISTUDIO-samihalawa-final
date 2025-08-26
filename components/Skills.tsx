import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { TECHNICAL_SKILLS, TOOLS } from '../constants';

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => {
    return (
        <li>
            <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-slate-700 text-sm">{name}</span>
                <span className="text-xs font-semibold text-slate-500">{level}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                    className="bg-slate-800 h-2 rounded-full"
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </li>
    );
};

const Skills: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="skills" className="py-20 bg-white scroll-mt-20" aria-label="Skills & Expertise">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">{t('skills.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                        <h3 className="text-2xl font-bold mb-6 text-slate-900">{t('skills.techSkillsTitle')}</h3>
                        <ul className="space-y-6">
                            {TECHNICAL_SKILLS.map(skill => (
                                <SkillBar key={skill.nameKey} name={t(skill.nameKey)} level={skill.level} />
                            ))}
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                        <h3 className="text-2xl font-bold mb-6 text-slate-900">{t('skills.toolsTitle')}</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {TOOLS.map(tool => (
                                <li key={tool.nameKey} className="flex items-center text-slate-700 bg-white p-3 rounded-md border border-slate-200">
                                    <i className={`${tool.icon} text-slate-500 text-2xl mr-4 w-8 text-center`}></i>
                                    <span>{t(tool.nameKey)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;