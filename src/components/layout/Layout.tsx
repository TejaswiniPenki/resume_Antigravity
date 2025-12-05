import React from 'react';
import { Navbar } from './Navbar';
import { resumeData } from '../../data/resumeData';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Navbar />
            {/* Main content wrapper - used for PDF capture via #print-root */}
            <main id="print-root" className="container mx-auto px-4 py-8">
                {children}
            </main>
            {/* Footer - hidden in print via no-print class */}
            <footer className="border-t border-slate-200 py-8 text-center no-print">
                <div className="container mx-auto px-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.
                    </p>
                    <a
                        href={`mailto:${resumeData.personal.email}`}
                        className="text-sm text-accent hover:underline mt-1 inline-block"
                    >
                        {resumeData.personal.email}
                    </a>
                </div>
            </footer>
        </div>
    );
}
