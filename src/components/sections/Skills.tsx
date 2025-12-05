/**
 * Skills Section Component
 * 
 * Grouped skill categories with pill-shaped tags.
 * Categories: AI/ML, Frontend, Backend, Databases, Cloud/Tools, Soft Skills
 * 
 * ANIMATIONS (SCREEN ONLY):
 * - chip-motion: Subtle drift animation for floating effect
 * - chip-interactive: Hover scale + shadow + glow
 * - Animations are disabled in .printing mode via CSS
 */

import { resumeData } from '../../data/resumeData';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

/**
 * Returns appropriate motion class based on skill index.
 * Alternates between motion variants for visual variety.
 */
function getMotionClass(index: number): string {
    return index % 2 === 0 ? 'chip-motion' : 'chip-motion-delayed';
}

import { RevealSection } from '../ui/RevealSection';

export function Skills() {
    const { skills } = resumeData;

    return (
        <section id="skills" className="py-12 md:py-16 print-section">
            <RevealSection>
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3 print-section-title">
                        <span className="p-2 bg-gradient-accent-subtle rounded-lg">
                            <Sparkles className="h-6 w-6 text-accent" />
                        </span>
                        Technical Skills
                    </h2>
                </div>

                <div className="space-y-6">
                    {skills.map((group, groupIndex) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: groupIndex * 0.1 }}
                            className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-accent/30 transition-colors"
                        >
                            {/* Category Header */}
                            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gradient-accent" />
                                {group.category}
                            </h3>

                            {/* Skill Pills with motion + hover effects */}
                            <div className="flex flex-wrap gap-2 print-chips">
                                {group.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: groupIndex * 0.1 + skillIndex * 0.03 }}
                                        className={`
                        px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium
                        chip-interactive
                        hover:bg-gradient-accent hover:text-white
                        ${getMotionClass(skillIndex)}
                      `}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </RevealSection>
        </section>
    );
}
