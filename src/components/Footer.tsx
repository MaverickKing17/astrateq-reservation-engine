import React from 'react';
import { Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <footer className="bg-brand-bg pt-20 pb-12 px-10 border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20">
          <div className="flex flex-col gap-2">
            <div className="font-display font-bold text-sm tracking-[0.4em] uppercase">ASTRATEQ</div>
            <p className="text-brand-text-dim text-[10px] tracking-widest uppercase mt-4">Pioneering Tactile Intelligence</p>
          </div>
          
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-brand-text-dim hover:text-brand-accent transition-colors text-[10px] font-bold uppercase tracking-[0.2em]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-12 border-t border-brand-border">
          <p className="text-brand-text-dim text-[10px] uppercase tracking-widest font-medium">
            © {currentYear} Astrateq Gadgets. Experimental Safety Systems.
          </p>
          
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3 text-brand-text-dim text-[10px] font-bold uppercase tracking-widest group cursor-pointer hover:text-white transition-colors">
              <Globe className="w-3.5 h-3.5 group-hover:text-brand-accent transition-colors" />
              <span>EN / FR</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 p-8 rounded-lg bg-brand-surface/30 border border-brand-border text-[9px] text-brand-text-dim/60 leading-relaxed uppercase tracking-[0.1em] text-center max-w-3xl mx-auto">
          Neural Haptic Disclaimer: Astrateq safety systems are designed to supplement existing vehicle infrastructure. 
          Human oversight remains the primary safety mechanism. Unit performance is contingent on Canadian environmental maintenance standards.
        </div>
      </div>
    </footer>
  );
}
