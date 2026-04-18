import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Pre-Launch', href: '#pre-launch' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-10 py-8 flex items-center justify-between',
        isScrolled ? 'bg-brand-bg/95 backdrop-blur-md border-b border-brand-border py-6' : 'bg-transparent'
      )}
    >
      <div className="flex items-center gap-2">
        <div className="font-display font-bold text-sm tracking-[0.3em] uppercase">ASTRATEQ</div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-10">
        <div className="flex gap-8 text-[11px] font-medium text-brand-text-dim tracking-[0.15em] uppercase">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="h-4 w-px bg-brand-border mx-2" />
        <button className="bg-white text-brand-bg px-6 py-2 rounded-md text-[11px] font-bold uppercase tracking-widest transition-all hover:opacity-90">
          Reserve Batch 01
        </button>
      </div>


      {/* Mobile Toggle */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-navy border-t border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-blue text-white py-4 rounded-xl text-center font-bold">
              Reserve Batch 01
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
