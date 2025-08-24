import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useTranslation } from '../i18n/LanguageContext';
import { Project } from '../types';

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, project }) => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);
            // Simulate loading time for iframe
            const timer = setTimeout(() => setIsLoading(false), 1500);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/70" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-6xl h-[80vh] transform overflow-hidden rounded-lg bg-white p-2 text-left align-middle shadow-xl transition-all flex flex-col">
                                <div className="flex items-center justify-between p-4 border-b border-slate-200">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-slate-900">
                                        {project ? t(project.titleKey) : 'Demo'}
                                    </Dialog.Title>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md p-2 text-sm font-medium text-slate-500 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
                                        onClick={onClose}
                                    >
                                        <i className="fas fa-times text-xl"></i>
                                    </button>
                                </div>
                                <div className="mt-2 flex-grow relative">
                                    {isLoading && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-slate-500"></div>
                                        </div>
                                    )}
                                    <iframe
                                        src={project?.demoUrl}
                                        title={project ? t(project.titleKey) : 'Demo'}
                                        className={`w-full h-full border-0 rounded-b-md ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                                        onLoad={() => setIsLoading(false)}
                                    />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default DemoModal;