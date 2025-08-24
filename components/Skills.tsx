import React, { useState, useEffect } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import { TECHNICAL_SKILLS, TOOLS } from '../constants';

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setWidth(level);
        }, 100);
        return () => clearTimeout(timer);
    }, [level]);

    return (
        <li>
            <span className="font-medium text-gray-700">{name}</span>
            <div className="w-full bg-indigo-100 rounded-full mt-2 h-2.5">
                <div 
                    className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${width}%` }}
                ></div>
            </div>
        </li>
    );
};

const Skills: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="skills" className="py-20 bg-gray-50" aria-label="Skills & Expertise">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('skills.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('skills.techSkillsTitle')}</h3>
                        <ul className="space-y-6">
                            {TECHNICAL_SKILLS.map(skill => (
                                <SkillBar key={skill.nameKey} name={t(skill.nameKey)} level={skill.level} />
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('skills.toolsTitle')}</h3>
                        <ul className="space-y-4">
                            {TOOLS.map(tool => (
                                <li key={tool.nameKey} className="flex items-center text-gray-700">
                                    <i className="fas fa-check-circle text-indigo-500 mr-3"></i>
                                    {t(tool.nameKey)}
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