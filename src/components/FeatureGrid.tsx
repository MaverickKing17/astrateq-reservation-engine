import React from 'react';
import { motion } from 'motion/react';
import { Snowflake, Car, Smartphone } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      title: 'Extreme winters',
      icon: <Snowflake className="w-6 h-6 text-brand-cyan" />,
      image: 'https://picsum.photos/seed/snow-road/600/400',
    },
    {
      title: 'Increasing road congestion',
      icon: <Car className="w-6 h-6 text-brand-cyan" />,
      image: 'https://picsum.photos/seed/traffic/600/400',
    },
    {
      title: 'Modern vehicles need smarter protection',
      icon: <Smartphone className="w-6 h-6 text-brand-cyan" />,
      image: 'https://picsum.photos/seed/car-tech/600/400',
    },
  ];

  return (
    <section className="py-32 px-10 bg-brand-surface/30 border-y border-brand-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-brand-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-4">The Challenge</div>
          <h2 className="font-display text-4xl lg:text-5xl font-extralight tracking-tight mb-6">
            Driving Conditions <br /><span className="font-semibold italic">Are Changing.</span>
          </h2>
          <p className="text-brand-text-dim max-w-xl text-md leading-relaxed">
            From extreme winters to increasing road congestion, your safety equipment must evolve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-brand-bg p-10 hover:bg-brand-surface/50 transition-colors"
            >
              <div className="mb-8 p-3 w-fit rounded-lg border border-brand-border group-hover:border-brand-accent/50 transition-colors">
                <div className="text-brand-accent">
                    {feature.icon}
                </div>
              </div>
              <h3 className="font-display font-medium text-lg leading-snug mb-4 group-hover:text-brand-accent transition-colors">
                {feature.title}
              </h3>
              <div className="relative h-48 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
