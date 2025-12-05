/**
 * Experience Section Component
 * 
 * Vertical timeline focused on the single current role.
 * Highlights keywords like LLM Agents, RAG, FAISS, LangChain.
 */

import { resumeData } from '../../data/resumeData';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

import { RevealSection } from '../ui/RevealSection';

export function Experience() {
    const { experience } = resumeData;

    return (
        <section id="experience" className="py-12 md:py-16 print-section">
            <RevealSection>
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3 print-section-title">
                        <span className="p-2 bg-gradient-accent-subtle rounded-lg">
                            <Briefcase className="h-6 w-6 text-accent" />
                        </span>
                        Experience
                    </h2>
                </div>

                <div className="space-y-8">
                    {experience.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Timeline */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-secondary to-transparent ml-3 hidden md:block" />

                            {/* Timeline dot */}
                            <div className="absolute left-0 top-2 w-7 h-7 rounded-full bg-gradient-accent flex items-center justify-center shadow-lg glow-accent hidden md:flex">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>

                            {/* Content Card */}
                            <div className="md:ml-14 bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">
                                            {job.role}
                                        </h3>
                                        <p className="text-accent font-medium">
                                            {job.company} <span className="text-slate-400">•</span> {job.type}
                                        </p>
                                    </div>
                                    <span className="inline-flex items-center px-3 py-1 bg-gradient-accent-subtle text-accent text-sm font-medium rounded-full">
                                        {job.period}
                                    </span>
                                </div>

                                {/* Responsibilities */}
                                <ul className="space-y-3 mb-4">
                                    {job.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-600">
                                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Keywords */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                                    {job.keywords.map((keyword, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-xs font-medium bg-gradient-accent text-white rounded-full shadow-sm"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </RevealSection>
        </section>
    );
}
