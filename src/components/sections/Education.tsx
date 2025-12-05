/**
 * Education Section Component
 * 
 * Displays 3 real education entries with exact grades/CGPA.
 */

import { resumeData } from '../../data/resumeData';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

import { RevealSection } from '../ui/RevealSection';

export function Education() {
    const { education } = resumeData;

    return (
        <section id="education" className="py-12 md:py-16 print-section">
            <RevealSection>
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3 print-section-title">
                        <span className="p-2 bg-gradient-accent-subtle rounded-lg">
                            <GraduationCap className="h-6 w-6 text-accent" />
                        </span>
                        Education
                    </h2>
                </div>

                <div className="space-y-4">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-slate-200 rounded-2xl p-6
                     hover:shadow-lg hover:border-accent/30 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-accent font-medium">
                                        {edu.institution}
                                    </p>
                                    <p className="text-sm text-slate-500 mt-1">
                                        {edu.period}
                                    </p>
                                </div>

                                {/* Grade Badge */}
                                <div className="flex items-center gap-2">
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-gradient-accent">
                                            {edu.grade}{edu.gradeType === 'percentage' ? '%' : ''}
                                        </div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider">
                                            {edu.gradeType === 'cgpa' ? 'CGPA' : 'Percentage'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </RevealSection>
        </section>
    );
}
