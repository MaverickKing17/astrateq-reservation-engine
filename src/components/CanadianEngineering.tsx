import React from 'react';
import { motion } from 'motion/react';
import { ThermometerSnowflake, ShieldAlert, Mountain } from 'lucide-react';

export default function CanadianEngineering() {
  const images = [
    'https://picsum.photos/seed/winter-family/600/600',
    'https://picsum.photos/seed/night-road/800/400',
    'https://picsum.photos/seed/suv-night/800/400',
  ];

  return (
    <section className="py-24 px-10 bg-brand-surface/20 border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="col-span-2 rounded-2xl overflow-hidden aspect-[16/9] border border-brand-border"
            >
              <img src={images[1]} alt="Night highway visibility" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden aspect-square border border-brand-border"
            >
              <img src={images[0]} alt="Canadian family in winter" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl overflow-hidden aspect-square border border-brand-border"
            >
              <img src={images[2]} alt="SUV driving at night" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-brand-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Engineering Focus</div>
              <h2 className="font-display text-4xl lg:text-5xl font-extralight tracking-tight mb-12">
                Built for <br /><span className="font-semibold italic">Canadian Roads.</span>
              </h2>
              
              <ul className="space-y-12">
                <li className="flex gap-8">
                  <div className="p-3 bg-brand-bg border border-brand-border rounded-lg text-brand-accent shrink-0">
                    <ThermometerSnowflake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-lg mb-2">Extreme Weather Engineering</h3>
                    <p className="text-brand-text-dim text-sm leading-relaxed">
                      Designed and tested for operations down to -40°C. Proprietary heating elements keep sensors clear of ice and slush.
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-8">
                  <div className="p-3 bg-brand-bg border border-brand-border rounded-lg text-brand-accent shrink-0">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-lg mb-2">Privacy-Conscious Design</h3>
                    <p className="text-brand-text-dim text-sm leading-relaxed">
                      Built for strict PIPEDA compliance. Your driving data is processed on-device and never sold.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
