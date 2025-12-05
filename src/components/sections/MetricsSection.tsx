/**
 * MetricsSection Component
 * 
 * Animated metrics row displaying key achievements:
 * - B.Tech CGPA: 8.51
 * - Intermediate: 93.7%
 * - 10th CGPA: 10.0
 * - Naukri Rank: 802
 * - Key Projects: 6
 * 
 * Uses useAnimatedCounter hook for smooth counting animations.
 */

import { resumeData } from '../../data/resumeData';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';
import { motion } from 'framer-motion';

interface MetricCardProps {
    label: string;
    value: number;
    suffix?: string;
    decimals: number;
    index: number;
}

function MetricCard({ label, value, suffix = '', decimals, index }: MetricCardProps) {
    const { value: animatedValue, ref } = useAnimatedCounter({
        to: value,
        durationMs: 2000,
        decimals
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-gradient-accent-subtle rounded-2xl p-6 text-center
                 hover:scale-105 hover:shadow-xl hover:glow-accent
                 transition-all duration-300 cursor-default
                 border border-transparent hover:border-accent/20"
        >
            {/* Decorative gradient border on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity" />

            <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold text-gradient-accent mb-2">
                    {animatedValue}{suffix}
                </div>
                <div className="text-sm font-medium text-slate-600">
                    {label}
                </div>
            </div>
        </motion.div>
    );
}

import { RevealSection } from '../ui/RevealSection';

export function MetricsSection() {
    const { metrics } = resumeData;

    return (
        <section className="py-8 md:py-12 metrics-section">
            <RevealSection>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {metrics.map((metric, index) => (
                        <MetricCard
                            key={metric.id}
                            label={metric.label}
                            value={metric.value}
                            suffix={metric.suffix}
                            decimals={metric.decimals}
                            index={index}
                        />
                    ))}
                </div>
            </RevealSection>
        </section>
    );
}
