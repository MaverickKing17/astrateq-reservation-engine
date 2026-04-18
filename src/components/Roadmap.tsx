import React from 'react';
import { motion } from 'motion/react';
import { CircleCheck, Factory, Truck } from 'lucide-react';

export default function Roadmap() {
  const steps = [
    {
      label: 'Batch 2026',
      title: 'Reserve Today',
      description: 'Join Batch 01 with a $25 refundable deposit.',
      icon: <CircleCheck className="w-5 h-5" />,
      status: 'complete',
      date: 'Q1'
    },
    {
      label: 'Batch 2026',
      title: 'Final Production',
      description: 'Engineering validation and mass manufacturing.',
      icon: <Factory className="w-5 h-5" />,
      status: 'current',
      date: 'Q2'
    },
    {
      label: 'Batch 2026',
      title: 'Priority Shipping',
      description: 'First units delivered to our founding families.',
      icon: <Truck className="w-5 h-5" />,
      status: 'upcoming',
      date: 'Q3'
    },
    {
      label: 'Batch 2026',
      title: 'Retail Launch',
      description: 'General availability across North America.',
      icon: <Truck className="w-5 h-5" />,
      status: 'upcoming',
      date: 'Q4'
    },
  ];

  return (
    <section id="pre-launch" className="py-32 px-10 border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 text-right md:text-left">
          <div className="max-w-xl text-left">
             <div className="text-brand-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Production Roadmap</div>
             <h2 className="font-display text-4xl lg:text-5xl font-extralight tracking-tight">
                Refining the <br /><span className="font-semibold italic">Safety Standard.</span>
             </h2>
          </div>
          <p className="text-brand-text-dim text-md max-w-sm leading-relaxed md:text-right">
            Batch 01 units are strictly limited to 500 units to ensure flawless engineering oversight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-brand-border border border-brand-border">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-brand-bg p-10 flex flex-col items-start min-h-[300px]"
              >
                <div className={`mb-8 w-12 h-12 rounded-md border flex items-center justify-center
                  ${step.status === 'complete' ? 'border-brand-accent text-brand-accent' : 
                    step.status === 'current' ? 'border-brand-accent bg-brand-accent text-brand-bg shadow-[0_0_15px_rgba(0,209,255,0.4)]' : 
                    'border-brand-border text-brand-text-dim'}`}
                >
                  {step.icon}
                </div>

                <div className="mt-auto">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-brand-text-dim mb-2">{step.date} — 2026</div>
                    <h3 className="font-display font-medium text-lg mb-2">{step.title}</h3>
                    <p className="text-brand-text-dim text-xs leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
        </div>

        <div className="mt-20 p-10 rounded-xl bg-brand-surface border border-brand-border flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-brand-accent text-[11px] font-bold uppercase tracking-[0.3em]">Status: ● Live</span>
            <span className="text-2xl font-display font-extralight">Sequence Batch 01 — <span className="font-semibold">382 / 500 Units</span></span>
            <div className="w-full h-1 bg-brand-border rounded-full overflow-hidden mt-4">
               <div className="h-full bg-brand-accent w-[76%] shadow-[0_0_10px_rgba(0,209,255,0.4)]" />
            </div>
          </div>
          <button className="w-full md:w-fit bg-white text-brand-bg px-12 py-5 rounded-lg font-bold text-sm tracking-widest uppercase transition-all hover:opacity-90 whitespace-nowrap">
            Reserve Batch 01
          </button>
        </div>
      </div>
    </section>
  );
}
