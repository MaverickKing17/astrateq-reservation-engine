import React from 'react';
import { motion } from 'motion/react';
import { Radar, BrainCircuit, AlertTriangle, UserCheck } from 'lucide-react';

export default function SafetyLayer() {
  const steps = [
    {
      title: 'Section 1: Detect – AI sensing',
      description: 'High-fidelity Lidar and vision fusion detects hazards through fog, heavy snow, and blinding light.',
      icon: <Radar className="w-8 h-8 text-brand-cyan" />,
    },
    {
      title: 'Section 2: Analyze – Adaptive intelligence',
      description: 'On-device neural processing evaluates road friction and trajectory 100x per second.',
      icon: <BrainCircuit className="w-8 h-8 text-brand-cyan" />,
    },
    {
      title: 'Section 3: Alert & Protect – Driver confidence benefits',
      description: 'Intuitive HUD signals and proactive adjustments help you avoid collisions before they happen.',
      icon: <AlertTriangle className="w-8 h-8 text-brand-cyan" />,
    },
  ];

  return (
    <section className="py-24 px-10 bg-brand-bg border-t border-brand-border">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Tactile Intelligence</div>
            <h2 className="font-display text-4xl lg:text-5xl font-extralight tracking-tight leading-tight mb-8">
              Astrateq adds an Intelligent <br />
              <span className="font-semibold italic text-brand-accent/90">Safety Layer</span>
            </h2>
            
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-xl bg-brand-surface/40 border border-brand-border group hover:border-brand-accent/30 transition-all flex gap-8 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-bg flex items-center justify-center border border-brand-border shadow-inner group-hover:text-brand-accent transition-colors">
                    <Radar className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-lg mb-2">{step.title}</h3>
                    <p className="text-brand-text-dim text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-accent/10 blur-[80px] rounded-full" />
            
            <div className="relative rounded-3xl border border-brand-border p-2 bg-gradient-to-br from-white/5 to-transparent">
              <img
                src="https://picsum.photos/seed/ai-vision/800/800"
                alt="AI Vision visualization"
                className="rounded-2xl shadow-2xl grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-8 bottom-8 p-6 bg-brand-bg/95 backdrop-blur-xl rounded-2xl border border-brand-border shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">AI Perception Status</span>
                  <div className="flex gap-1">
                    <span className="w-1 h-1 bg-brand-accent rounded-full animate-pulse" />
                    <span className="w-1 h-1 bg-brand-accent rounded-full animate-pulse delay-75" />
                    <span className="w-1 h-1 bg-brand-accent rounded-full animate-pulse delay-150" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <UserCheck className="w-8 h-8 text-brand-accent" />
                  <p className="text-[11px] uppercase tracking-widest font-bold">Human presence Detected</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
