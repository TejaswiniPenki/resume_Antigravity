/**
 * Certifications Section Component
 * 
 * Card/badge layout for certifications:
 * - SPYPRO — Machine Learning with Python
 * - TCS Digital Ion — Communication skills
 * - Naukri Young Turks Challenge — Rank 802 (highlighted)
 */

import { resumeData } from '../../data/resumeData';
import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';

export function CertificationsSection() {
    const { certifications } = resumeData;

    return (
        <section id="certifications" className="py-12 md:py-16 print-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3 print-section-title">
                    <span className="p-2 bg-gradient-accent-subtle rounded-lg">
                        <Award className="h-6 w-6 text-accent" />
                    </span>
                    Certifications & Achievements
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`
              relative bg-white border rounded-2xl p-6
              hover:shadow-lg transition-all duration-300
              ${cert.highlight
                                ? 'border-accent/50 bg-gradient-accent-subtle'
                                : 'border-slate-200 hover:border-accent/30'
                            }
            `}
                    >
                        {/* Highlight badge for special achievements */}
                        {cert.highlight && (
                            <div className="absolute -top-3 -right-3">
                                <div className="bg-gradient-accent text-white p-2 rounded-full shadow-lg">
                                    <Trophy className="h-4 w-4" />
                                </div>
                            </div>
                        )}

                        <div className="flex items-start gap-4">
                            <div className={`
                p-2 rounded-xl
                ${cert.highlight ? 'bg-gradient-accent' : 'bg-slate-100'}
              `}>
                                <Award className={`h-5 w-5 ${cert.highlight ? 'text-white' : 'text-accent'}`} />
                            </div>

                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900 mb-1">
                                    {cert.title}
                                </h3>
                                <p className="text-sm text-slate-600">
                                    {cert.issuer}
                                </p>
                                {cert.highlight && (
                                    <p className="text-sm font-semibold text-accent mt-2">
                                        {cert.highlight}
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
