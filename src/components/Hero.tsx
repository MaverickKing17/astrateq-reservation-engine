import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-10 max-w-7xl mx-auto overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="text-brand-accent text-[13px] font-bold uppercase tracking-[0.3em] mb-8">
            Priority Access Program
          </div>
          <h1 className="font-display text-[64px] lg:text-[84px] font-extralight leading-[0.95] mb-8 tracking-tighter">
            Road Safety meets <br />
            <span className="font-semibold">Tactile Intelligence</span>
          </h1>
          <p className="text-lg text-brand-text-dim mb-12 max-w-lg leading-relaxed">
            Redefining vehicle safety with neural-informed AI gadgets. Limited Batch 01 reservations are now open for early Canadian adopters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="bg-white text-brand-bg px-10 py-5 rounded-lg font-bold text-sm tracking-widest uppercase transition-all hover:opacity-90">
              Reserve Batch 01
            </button>
            <button className="bg-brand-surface border border-brand-border text-white px-10 py-5 rounded-lg font-bold text-sm tracking-widest uppercase transition-all hover:bg-white/5">
              Learn More
            </button>
          </div>

          <div className="flex gap-12 border-t border-brand-border pt-10">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase text-brand-text-dim tracking-widest font-bold">Reservation</span>
              <span className="text-lg font-medium">$25.00 CAD</span>
            </div>
            <div className="flex flex-col gap-1 text-right sm:text-left">
              <span className="text-[10px] uppercase text-brand-text-dim tracking-widest font-bold">Policy</span>
              <span className="text-lg font-medium">Fully Refundable</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[500px] h-[500px] bg-gradient-to-br from-white/5 to-transparent border border-brand-border rounded-[80px] rotate-[-12deg] flex items-center justify-center overflow-hidden">
            <div className="w-[140px] h-[140px] rounded-full border border-white/20 bg-radial-gradient from-white/10 to-transparent" />
            <div className="absolute inset-x-10 bottom-10 p-6 bg-brand-bg/80 backdrop-blur-xl border border-brand-accent/20 rounded-2xl">
               <div className="text-[10px] font-bold tracking-widest uppercase text-brand-accent mb-2">Neural Status</div>
               <div className="h-0.5 w-full bg-brand-border rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '76%' }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-brand-accent shadow-[0_0_10px_rgba(0,209,255,0.5)]" 
                  />
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

  );
}
