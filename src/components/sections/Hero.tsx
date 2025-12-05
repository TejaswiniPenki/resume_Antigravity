/**
 * Hero Section Component
 * 
 * Modern hero layout with:
 * - Left: Name, title, tagline, summary, CTA buttons
 * - Right: Abstract AI-themed CSS illustration (hidden in print)
 * - No phone number (removed as requested)
 */

import { resumeData } from '../../data/resumeData';
import { Button } from '../ui/Button';
import { MapPin, Mail, Download, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { generatePDF } from '../../utils/generatePDF';

import { RevealSection } from '../ui/RevealSection';

export function Hero() {
    const { name, title, tagline, summary, location, email } = resumeData.personal;

    const handleDownload = async () => {
        await generatePDF();
    };

    const scrollToProjects = () => {
        const element = document.querySelector('#projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="about" className="py-12 md:py-20">
            <RevealSection>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Name and Title */}
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900">
                                {name}
                            </h1>
                            <h2 className="text-2xl font-semibold text-gradient-accent sm:text-3xl">
                                {title}
                            </h2>
                        </div>

                        {/* Tagline */}
                        <p className="text-lg font-medium text-slate-700 border-l-4 border-accent pl-4">
                            {tagline}
                        </p>

                        {/* Summary */}
                        <p className="text-slate-600 leading-relaxed max-w-xl">
                            {summary}
                        </p>

                        {/* Contact Info - No phone */}
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-accent" />
                                {location}
                            </div>
                            <a
                                href={`mailto:${email}`}
                                className="flex items-center gap-2 hover:text-accent transition-colors"
                            >
                                <Mail className="h-4 w-4 text-accent" />
                                {email}
                            </a>
                        </div>

                        {/* CTA Buttons - hidden in print */}
                        <div className="flex flex-wrap gap-4 pt-4 no-print">
                            <Button
                                onClick={handleDownload}
                                className="gap-2 bg-gradient-accent hover:opacity-90 text-white border-0 shadow-lg glow-accent-hover"
                            >
                                <Download className="h-4 w-4" />
                                Download PDF CV
                            </Button>
                            <Button
                                variant="outline"
                                onClick={scrollToProjects}
                                className="gap-2 border-slate-300 hover:border-accent hover:text-accent"
                            >
                                <ArrowDown className="h-4 w-4" />
                                View Projects
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right - Abstract AI Illustration (HIDDEN IN PRINT via hero-illustration class) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden lg:flex items-center justify-center hero-illustration"
                    >
                        <div className="relative w-80 h-80">
                            {/* Abstract AI-themed shapes */}
                            <div className="absolute inset-0 bg-gradient-accent rounded-full opacity-10 animate-pulse" />

                            {/* Orbital rings */}
                            <div className="absolute inset-4 border-2 border-dashed border-accent/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                            <div className="absolute inset-12 border-2 border-dashed border-accent-secondary/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

                            {/* Center node */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 bg-gradient-accent rounded-2xl rotate-45 shadow-xl glow-accent flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/20 rounded-xl" />
                                </div>
                            </div>

                            {/* Floating nodes */}
                            <div className="absolute top-4 right-8 w-6 h-6 bg-accent rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0s' }} />
                            <div className="absolute bottom-8 left-4 w-4 h-4 bg-accent-secondary rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }} />
                            <div className="absolute top-1/2 right-0 w-5 h-5 bg-gradient-accent rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1s' }} />

                            {/* Connection lines (decorative) */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                                <line x1="160" y1="160" x2="280" y2="40" stroke="url(#gradient)" strokeWidth="1" opacity="0.3" />
                                <line x1="160" y1="160" x2="40" y2="260" stroke="url(#gradient)" strokeWidth="1" opacity="0.3" />
                                <line x1="160" y1="160" x2="300" y2="160" stroke="url(#gradient)" strokeWidth="1" opacity="0.3" />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="rgb(var(--gradient-start))" />
                                        <stop offset="100%" stopColor="rgb(var(--gradient-end))" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </RevealSection>
        </section>
    );
}
