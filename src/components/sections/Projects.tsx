/**
 * Projects Section Component
 * 
 * 6 real project cards with:
 * - Title, description, tech tags
 * - Grouped by category (AI projects first)
 * - Visual subheading for Agentic & RAG Systems
 */

import { resumeData } from '../../data/resumeData';
import { motion } from 'framer-motion';
import { FolderOpen, Brain, Code, Globe } from 'lucide-react';

const categoryIcons = {
    ai: Brain,
    ml: Code,
    web: Globe
};

const categoryLabels = {
    ai: 'AI + RAG',
    ml: 'Machine Learning',
    web: 'Web Development'
};

import { RevealSection } from '../ui/RevealSection';

export function Projects() {
    const { projects } = resumeData;

    // Group AI projects first
    const aiProjects = projects.filter(p => p.category === 'ai');
    const mlProjects = projects.filter(p => p.category === 'ml');
    const webProjects = projects.filter(p => p.category === 'web');

    return (
        <section id="projects" className="py-12 md:py-16 print-section">
            <RevealSection>
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3 print-section-title">
                        <span className="p-2 bg-gradient-accent-subtle rounded-lg">
                            <FolderOpen className="h-6 w-6 text-accent" />
                        </span>
                        Projects
                    </h2>
                </div>

                {/* Agentic & RAG Systems */}
                {aiProjects.length > 0 && (
                    <div className="mb-8">
                        <motion.h3
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-lg font-semibold text-gradient-accent mb-4 flex items-center gap-2"
                        >
                            <Brain className="h-5 w-5" />
                            Agentic & RAG Systems
                        </motion.h3>
                        <div className="grid md:grid-cols-2 gap-6 project-grid">
                            {aiProjects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </div>
                    </div>
                )}

                {/* ML Projects */}
                {mlProjects.length > 0 && (
                    <div className="mb-8">
                        <motion.h3
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2"
                        >
                            <Code className="h-5 w-5 text-accent" />
                            Machine Learning
                        </motion.h3>
                        <div className="grid md:grid-cols-2 gap-6 project-grid">
                            {mlProjects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index + aiProjects.length} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Web Projects */}
                {webProjects.length > 0 && (
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2"
                        >
                            <Globe className="h-5 w-5 text-accent" />
                            Web Development
                        </motion.h3>
                        <div className="grid md:grid-cols-2 gap-6 project-grid">
                            {webProjects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index + aiProjects.length + mlProjects.length} />
                            ))}
                        </div>
                    </div>
                )}
            </RevealSection>
        </section>
    );
}

interface ProjectCardProps {
    project: typeof resumeData.projects[0];
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
    const Icon = categoryIcons[project.category];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white border border-slate-200 rounded-2xl p-6
                 hover:shadow-xl hover:border-accent/30 hover:-translate-y-1
                 transition-all duration-300"
        >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-gradient-accent-subtle rounded-xl group-hover:bg-gradient-accent transition-colors">
                    <Icon className="h-5 w-5 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-accent transition-colors">
                        {project.title}
                    </h4>
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                        {categoryLabels[project.category]}
                    </span>
                </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 print-chips">
                {project.techStack.map((tech, idx) => (
                    <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-md
                     group-hover:bg-gradient-accent-subtle group-hover:text-accent
                     transition-colors"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
