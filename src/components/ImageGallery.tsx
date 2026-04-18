import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  specs?: string[];
}

const items: GalleryItem[] = [
  {
    id: 1,
    title: 'Sensora X1',
    category: 'Hardware',
    description: 'Our flagship AI-vision module. Features a quad-core neural processor and panoramic Lidar-fusion optics in a compact, aerospace-grade alloy frame.',
    image: 'https://picsum.photos/seed/gadget-1/1200/800',
    specs: ['32 TOPS AI Chip', 'IP69K Waterproof', '190° FOV']
  },
  {
    id: 2,
    title: 'Horizon HUD',
    category: 'Output',
    description: 'Augmented reality projection system. Overlays critical hazard data directly onto your windshield with zero eye-strain and high-noon visibility.',
    image: 'https://picsum.photos/seed/gadget-2/1200/800',
    specs: ['2000 Nit Brightness', 'Zero Latency', 'Auto-Focus']
  },
  {
    id: 3,
    title: 'Neural Link Hub',
    category: 'Connectivity',
    description: 'The central nervous system of your vehicle. Encrypts and syncs all safety data across devices using military-grade security protocols.',
    image: 'https://picsum.photos/seed/gadget-3/1200/800',
    specs: ['V2X 5G Ready', 'On-Device Storage', 'PIPEDA Compliant']
  },
  {
    id: 4,
    title: 'Storm Guard Housing',
    category: 'Protection',
    description: 'Reinforced external casing engineered for the Canadian wilderness. Self-heating glass and anti-corrosion coating for the toughest blizzards.',
    image: 'https://picsum.photos/seed/gadget-4/1200/800',
    specs: ['-50°C Certified', 'Self-Healing Optic', 'Salt-Spray Resistant']
  },
  {
    id: 5,
    title: 'Focus Mobile 1',
    category: 'Ecosystem',
    description: 'The companion app for founding families. Real-time safety diagnostics, remote unit health monitoring, and interactive safety training loops.',
    image: 'https://picsum.photos/seed/gadget-5/1200/800',
    specs: ['iOS/Android', 'Live View', 'Haptic Alerts']
  },
  {
    id: 6,
    title: 'Vertex Mount',
    category: 'Mounting',
    description: 'Low-profile, vibration-dampened mounting system. Fits 95% of current North American vehicles with zero-drill installation.',
    image: 'https://picsum.photos/seed/gadget-6/1200/800',
    specs: ['Steel Frame', 'Quick-Release', 'Universal Fit']
  }
];

export default function ImageGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <section id="gallery" className="py-32 px-10 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
          <div className="max-w-xl">
            <div className="text-brand-accent text-[11px] font-bold uppercase tracking-[0.4em] mb-4 text-left">The Collection</div>
            <h2 className="font-display text-4xl lg:text-5xl font-extralight tracking-tight text-left">
              Engineering <br /><span className="font-semibold italic">Showcase.</span>
            </h2>
          </div>
          <p className="text-brand-text-dim text-sm max-w-sm leading-relaxed md:text-right">
            Visual prototypes of the Batch 01 ecosystem. Every component is designed for peak reliability in Canadian environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <motion.div
              layoutId={`card-${item.id}`}
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="group relative h-[450px] cursor-pointer rounded-2xl overflow-hidden border border-brand-border bg-brand-surface/20"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-[10px] uppercase tracking-widest font-bold text-brand-accent mb-2">{item.category}</div>
                <h3 className="text-2xl font-display font-medium mb-3">{item.title}</h3>
                <p className="text-brand-text-dim text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-6">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-widest">
                  <div className="p-1 px-2 border border-white/20 rounded">View Details</div>
                  <Plus className="w-4 h-4 text-brand-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-brand-bg/95 backdrop-blur-2xl"
            />
            
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-5xl bg-brand-surface border border-brand-border rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-2xl"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-8 right-8 z-10 p-4 bg-brand-bg/50 backdrop-blur-md border border-white/10 rounded-full text-white hover:text-brand-accent transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="lg:w-1/2 h-[400px] lg:h-auto overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
                <div className="text-brand-accent text-[11px] font-bold uppercase tracking-[0.4em] mb-4">{selectedItem.category}</div>
                <h2 className="text-5xl font-display font-extralight tracking-tighter mb-8">{selectedItem.title}</h2>
                <p className="text-brand-text-dim text-lg leading-relaxed mb-12">
                  {selectedItem.description}
                </p>

                {selectedItem.specs && (
                  <div className="grid grid-cols-2 gap-8 border-t border-brand-border pt-12">
                    {selectedItem.specs.map((spec, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase text-brand-text-dim tracking-widest font-bold">Highlight</span>
                        <span className="text-lg font-medium">{spec}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                      <span className="text-[10px] uppercase text-brand-accent tracking-widest font-bold">Standard Config</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
