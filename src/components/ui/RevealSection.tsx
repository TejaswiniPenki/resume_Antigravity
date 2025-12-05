import React from 'react';
import { motion } from 'framer-motion';

interface RevealSectionProps {
    children: React.ReactNode;
    className?: string;
}

export function RevealSection({ children, className = '' }: RevealSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            className={`print-disable-motion ${className}`}
        >
            {children}
        </motion.div>
    );
}
