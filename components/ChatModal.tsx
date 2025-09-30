import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useTranslation } from '../i18n/LanguageContext';
import { Project } from '../types';

interface ChatModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose, project }) => {
    const { t } = useTranslation();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    useEffect(() => {
        if (isOpen && project) {
            setMessages([]);
            setError(null);
            const projectName = t(project.titleKey);
            const initialGreeting = t('chatModal.initialGreeting').replace('{project}', projectName);
            setMessages([{ sender: 'ai', text: initialGreeting }]);
        }
    }, [isOpen, project, t]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setError(null);
        try {
            const res = await fetch('/.netlify/functions/genai-chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage.text,
                    projectTitle: project ? t(project.titleKey) : undefined,
                    description: project ? t(project.descriptionKey) : undefined,
                    summary: project ? t(project.summaryKey) : undefined,
                    features: project ? project.features.map(f=>t(f)) : undefined,
                }),
            });

            if (res.ok) {
                const data = await res.json();
                setMessages(prev => [...prev, { sender: 'ai', text: data.text || t('chatModal.noResponse') }]);
            } else {
                // Graceful local fallback (no server / no API key)
                const fallback = buildFallbackAnswer(userMessage.text);
                setMessages(prev => [...prev, { sender: 'ai', text: fallback }]);
            }
        } catch (e) {
            console.error('AI chat error:', e);
            // Offline/dev fallback ensures the UI still responds
            const fallback = buildFallbackAnswer(userMessage.text);
            setError(null);
            setMessages(prev => [...prev, { sender: 'ai', text: fallback }]);
        } finally {
            setIsLoading(false);
        }
    };

    const buildFallbackAnswer = (msg: string) => {
        const title = project ? t(project.titleKey) : t('chatModal.defaultProjectName');
        const summary = project ? t(project.summaryKey) : '';
        const features = project ? project.features.map(f => `- ${t(f)}`).join('\n') : '';
        const lines = [
            t('chatModal.fallbackTitle').replace('{project}', title),
            summary ? t('chatModal.fallbackSummary').replace('{summary}', summary) : '',
            features ? t('chatModal.fallbackFeatures').replace('{features}', features) : '',
            '',
            t('chatModal.fallbackEcho').replace('{message}', msg),
            t('chatModal.fallbackInfo'),
        ];
        return lines.filter(Boolean).join('\n');
    };

    const titleText = project
        ? t('chatModal.title').replace('{project}', t(project.titleKey))
        : t('chatModal.defaultTitle');

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
                    leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/70" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-2xl h-[80vh] transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all flex flex-col">
                                <div className="flex items-center justify-between p-4 border-b border-slate-200">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-slate-900">
                                        {titleText}
                                    </Dialog.Title>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md p-2 text-sm font-medium text-slate-500 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
                                        aria-label={t('ui.close')}
                                        onClick={onClose}
                                    >
                                        <i className="fas fa-times text-xl"></i>
                                    </button>
                                </div>
                                <div className="p-4 flex-grow overflow-y-auto space-y-4 bg-slate-50">
                                    {messages.map((msg, index) => (
                                        <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            {msg.sender === 'ai' && <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-lg shrink-0"><i className="fas fa-robot"></i></div>}
                                            <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl ${msg.sender === 'user' ? 'bg-slate-900 text-white rounded-br-none' : 'bg-slate-200 text-slate-800 rounded-bl-none'}`}>
                                                {msg.text.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                                                {msg.sender === 'ai' && isLoading && index === messages.length -1 && <span className="inline-block w-2 h-2 ml-2 bg-slate-500 rounded-full animate-pulse"></span>}
                                            </div>
                                        </div>
                                    ))}
                                    <div ref={messagesEndRef} />
                                </div>
                                <div className="p-4 border-t border-slate-200 bg-white">
                                    {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}
                                    <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            placeholder={t('chatModal.inputPlaceholder')}
                                            className="flex-grow block w-full px-4 py-2 border border-slate-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
                                            disabled={isLoading}
                                            aria-label={t('chatModal.inputAria')}
                                        />
                                        <button type="submit" aria-label={t('chatModal.sendAria')} disabled={isLoading || !input.trim()} className="bg-slate-900 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors">
                                            {isLoading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <i className="fas fa-paper-plane"></i>}
                                        </button>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ChatModal;
