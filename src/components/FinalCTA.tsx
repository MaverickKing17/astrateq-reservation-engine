import React from 'react';
import { motion } from 'motion/react';
import SignupForm from './SignupForm';

export default function FinalCTA() {
  return (
    <section className="py-40 px-10 relative overflow-hidden bg-brand-bg border-t border-brand-border">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 blur-[160px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-brand-accent text-[11px] font-bold uppercase tracking-[0.4em] mb-8">Final Access</div>
          <h2 className="font-display text-[54px] lg:text-[72px] font-extralight mb-12 tracking-tighter leading-[0.95]">
            Protect What <br /><span className="font-semibold italic">Matters Most.</span>
          </h2>
          
          <div className="max-w-md mx-auto mt-12">
            <SignupForm />
          </div>
          
          <p className="mt-16 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-text-dim">
            Limited batch sequence: 382 / 500 units claimed
          </p>
        </motion.div>
      </div>
    </section>
  );
}
