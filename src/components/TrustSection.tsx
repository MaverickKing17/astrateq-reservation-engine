import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Award, Info } from 'lucide-react';

export default function TrustSection() {
  const certifications = [
    { name: 'Canadian Warranty', icon: <Award className="w-8 h-8" />, desc: '3-year comprehensive local coverage.' },
    { name: 'Secure Data Design', icon: <Lock className="w-8 h-8" />, desc: 'On-device encryption and PIPEDA compliance.' },
    { name: 'Transport Compliance', icon: <ShieldCheck className="w-8 h-8" />, desc: 'Engineered for Transport Canada roadmap.' },
    { name: 'AI Responsibility', icon: <Info className="w-8 h-8" />, desc: 'Transparent limits and driver-assist focus.' },
  ];

  return (
    <section className="py-20 px-10 bg-brand-bg border-y border-brand-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-lg border border-brand-border flex items-center justify-center mb-6 group-hover:border-brand-accent/40 transition-all">
                <div className="text-brand-text-dim group-hover:text-brand-accent transition-colors">
                  {cert.icon}
                </div>
              </div>
              <h4 className="font-display font-medium text-xs mb-2 tracking-widest uppercase">{cert.name}</h4>
              <p className="text-[10px] text-brand-text-dim leading-relaxed tracking-wider uppercase">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
