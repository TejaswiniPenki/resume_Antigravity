/**
 * Navbar Component
 * 
 * Sticky navigation with:
 * - Section navigation links with smooth scrolling
 * - Theme switcher
 * - Download PDF CV button
 * - Mobile hamburger menu
 */

import { useState } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Button } from '../ui/Button';
import { Download, Menu, X } from 'lucide-react';
import { generatePDF } from '../../utils/generatePDF';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await generatePDF();
    } finally {
      setIsDownloading(false);
    }
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md no-print">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="font-bold text-xl tracking-tight">
          <span className="text-slate-900">Tejaswini</span>
          <span className="text-gradient-accent">Penki</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-slate-600 hover:text-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right side - Theme switcher and Download */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ThemeSwitcher />
          </div>

          <Button
            onClick={handleDownload}
            disabled={isDownloading}
            className="gap-2 bg-gradient-accent hover:opacity-90 text-white border-0"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">
              {isDownloading ? 'Generating...' : 'Download CV'}
            </span>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-2 px-3 text-sm font-medium text-slate-600 hover:text-accent hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <ThemeSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
