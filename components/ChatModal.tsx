import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { GoogleGenAI, Chat } from '@google/genai';
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
    const chatRef = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    useEffect(() => {
        if (isOpen && project) {
            setMessages([]);
            setError(null);
            setIsLoading(true);

            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
                
                const projectFeatures = project.features.map(f => `- ${t(f)}`).join('\n');
                const systemInstruction = `You are a helpful and friendly AI assistant for Sami Halawa's portfolio. You are an expert on his projects. You are currently discussing the project "${t(project.titleKey)}".
                
Project Description: ${t(project.descriptionKey)}
Project Summary: ${t(project.summaryKey)}
Key Features:
${projectFeatures}
                
Your role is to answer questions from a visitor about this specific project. Be concise, professional, and engaging. Do not go off-topic. If you don't know something, say you don't have that information.`;

                chatRef.current = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction,
                    },
                });

                const initialGreeting = `Hello! I'm an AI assistant. Feel free to ask me anything about the "${t(project.titleKey)}" project.`;
                setMessages([{ sender: 'ai', text: initialGreeting }]);

            } catch (e) {
                console.error("Failed to initialize AI Chat:", e);
                setError("Sorry, the AI chat couldn't be initialized. Please check the API key configuration.");
            } finally {
                setIsLoading(false);
            }
        }
    }, [isOpen, project, t]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chatRef.current) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setError(null);

        try {
            const responseStream = await chatRef.current.sendMessageStream({ message: input });
            
            let aiResponseText = '';
            setMessages(prev => [...prev, { sender: 'ai', text: '' }]);

            for await (const chunk of responseStream) {
                aiResponseText += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1] = { sender: 'ai', text: aiResponseText };
                    return newMessages;
                });
            }

        } catch (e) {
            console.error("AI chat error:", e);
            const errorMessage = "Sorry, something went wrong while getting a response. Please try again.";
            setError(errorMessage);
            setMessages(prev => [...prev, { sender: 'ai', text: errorMessage }]);
        } finally {
            setIsLoading(false);
        }
    };

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
                                        Chat about {project ? `"${t(project.titleKey)}"`: 'Project'}
                                    </Dialog.Title>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md p-2 text-sm font-medium text-slate-500 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
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
                                            placeholder={t('projects.commonChatButton') + '...'}
                                            className="flex-grow block w-full px-4 py-2 border border-slate-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
                                            disabled={isLoading}
                                            aria-label="Chat message input"
                                        />
                                        <button type="submit" aria-label="Send message" disabled={isLoading || !input.trim()} className="bg-slate-900 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors">
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