/**
 * Extra-Curricular Section Component
 * 
 * Combined section for strengths and extra-curricular activities.
 * 
 * ANIMATIONS (SCREEN ONLY):
 * - Strength chips: chip-motion for floating effect + hover scale/glow
 * - Extra-curricular list: slide-in on scroll, hover color shift
 * - Animations are disabled in .printing mode via CSS
 */

import { resumeData } from '../../data/resumeData';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

/**
 * Returns motion class based on index for visual variety.
 */
function getMotionClass(index: number): string {
    return index % 2 === 0 ? 'chip-motion' : 'chip-motion-delayed';
}

import { RevealSection } from '../ui/RevealSection';

export function ExtraCurricularSection() {
    const { strengths, extraCurricular } = resumeData;

    return (
        <section id="extra" className="py-12 md:py-16 print-section">
            <RevealSection>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Strengths */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="print-safe">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3 print-section-title">
                                <span className="p-2 bg-gradient-accent-subtle rounded-lg">
                                    <Star className="h-5 w-5 text-accent" />
                                </span>
                                Strengths
                            </h3>

                            {/* Strength chips with motion + hover effects */}
                            <div className="flex flex-wrap gap-3 print-chips">
                                {strengths.map((strength, index) => (
                                    <motion.span
                                        key={strength.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className={`
                      px-4 py-2 bg-gradient-accent text-white rounded-full text-sm font-medium
                      chip-interactive shadow-md
                      ${getMotionClass(index)}
                    `}
                                    >
                                        {strength.name}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Extra-Curricular Activities */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="print-safe">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3 print-section-title">
                                <span className="p-2 bg-gradient-accent-subtle rounded-lg">
                                    <Heart className="h-5 w-5 text-accent" />
                                </span>
                                Extra-Curricular
                            </h3>

                            {/* Activity list with slide-in + hover effects */}
                            <ul className="space-y-3">
                                {extraCurricular.map((item, index) => (
                                    <motion.li
                                        key={item.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-start gap-3 text-slate-600 
                             hover:text-accent transition-colors duration-200 cursor-default"
                                    >
                                        <span className="w-2 h-2 bg-gradient-accent rounded-full mt-2 flex-shrink-0" />
                                        {item.activity}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </RevealSection>
        </section>
    );
}
