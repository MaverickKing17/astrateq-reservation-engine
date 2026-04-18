import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Cpu, Shield, Globe, Zap, Thermometer } from 'lucide-react';
import { cn } from '@/lib/utils';

type SpecCategory = 'technical' | 'safety' | 'ai';

interface SpecItem {
  label: string;
  value: string;
  description: string;
}

export default function VehicleSpecs() {
  const [activeTab, setActiveTab] = useState<SpecCategory>('technical');

  const specs: Record<SpecCategory, { title: string; items: SpecItem[]; icon: React.ReactNode }> = {
    technical: {
      title: 'Optical & Hardware Engineering',
      icon: <Eye className="w-5 h-5" />,
      items: [
        { label: 'Sensor Array', value: '4K Lidar-Vision Fusion', description: 'Dual 4K ultra-wide sensors paired with solid-state Lidar for 300m depth detection.' },
        { label: 'Night Vision', value: '0.001 Lux Sensitivity', description: 'Full-color nocturnal clarity even in unlit rural environments.' },
        { label: 'Thermal Shield', value: '-40°C to +85°C', description: 'Automotive-grade cooling and heating for extreme Canadian seasonal shifts.' },
        { label: 'Field of View', value: '190° Panoramic', description: 'Total horizontal coverage with zero peripheral distortion.' },
      ],
    },
    ai: {
      title: 'Neural Core Processing',
      icon: <Cpu className="w-5 h-5" />,
      items: [
        { label: 'Processing Power', value: '32 TOPS', description: 'Dedicated AI chip for real-time edge computing without cloud latency.' },
        { label: 'Object Tracking', value: '250 Simultaneous Entities', description: 'Parallel tracking of vehicles, pedestrians, and wildlife.' },
        { label: 'Reaction Speed', value: '8ms Latency', description: 'Hazard detection faster than human neurological response.' },
        { label: 'V2X Ready', value: 'Integrated 5G', description: 'Bi-directional communication with smart road infrastructure.' },
      ],
    },
    safety: {
      title: 'Active Protection Systems',
      icon: <Shield className="w-5 h-5" />,
      items: [
        { label: 'Collision Defense', value: 'Predictive Braking Link', description: 'Calculates impact vectors 3 seconds before potential collision.' },
        { label: 'Lane Guardian', value: 'Drift Prevention AI', description: 'Subtle haptic feedback calibrated for wet or icy road friction.' },
        { label: 'Blind Spot 360', value: 'Full Perimeter Alert', description: 'Visual HUD overlays that highlight vehicles in your peripheral blind spots.' },
        { label: 'Emergency SOS', value: 'Satellite Fallback', description: 'Automatic crash notification even in zero-cellular alpine zones.' },
      ],
    },
  };

  return (
    <section id="specs" className="py-32 px-10 bg-brand-bg relative overflow-hidden">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-brand-border" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-brand-border hidden lg:block" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[600px] border border-brand-border rounded-2xl overflow-hidden bg-brand-bg font-sans">
        
        {/* Sidebar / Tabs */}
        <div className="lg:w-1/3 bg-brand-surface border-b lg:border-b-0 lg:border-r border-brand-border p-12">
          <div className="text-brand-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Internal Specs</div>
          <h2 className="font-display text-4xl font-extralight tracking-tighter mb-12">Technical <br /><span className="font-semibold italic">Benchmarks.</span></h2>
          
          <div className="flex flex-col gap-4">
            {(Object.keys(specs) as SpecCategory[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "flex items-center gap-4 p-6 rounded-xl border transition-all text-left group",
                  activeTab === tab 
                    ? "bg-brand-bg border-brand-accent/50 text-white shadow-[0_0_20px_rgba(0,209,255,0.1)]" 
                    : "bg-transparent border-brand-border text-brand-text-dim hover:border-brand-accent/30"
                )}
              >
                <div className={cn(
                  "p-2 rounded-lg transition-colors",
                  activeTab === tab ? "bg-brand-accent text-brand-bg" : "bg-brand-bg text-brand-text-dim group-hover:text-brand-accent"
                )}>
                  {specs[tab].icon}
                </div>
                <div className="flex flex-col">
                  <span className={cn(
                    "text-[10px] uppercase font-bold tracking-widest",
                    activeTab === tab ? "text-brand-accent" : "text-brand-text-dim"
                  )}>Category</span>
                  <span className="font-medium text-lg capitalize">{tab} System</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:w-2/3 p-12 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <div className="pb-8 border-b border-brand-border">
                <h3 className="text-2xl font-light text-white mb-2 uppercase tracking-wide">{specs[activeTab].title}</h3>
                <p className="text-brand-text-dim text-sm uppercase tracking-[0.2em] font-bold">Standard Batch 01 Configuration</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {specs[activeTab].items.map((item) => (
                  <div key={item.label} className="group">
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-[10px] uppercase font-bold text-brand-text-dim tracking-widest">{item.label}</span>
                      <span className="text-brand-accent font-mono text-sm group-hover:animate-pulse">{item.value}</span>
                    </div>
                    <div className="h-0.5 w-full bg-brand-border rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-brand-accent shadow-[0_0_10px_rgba(0,209,255,0.4)]" 
                       />
                    </div>
                    <p className="mt-4 text-xs text-brand-text-dim/80 leading-relaxed italic">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Dynamic Image Overlay - Subtle "3D-like" Silhouette background */}
              <div className="relative mt-12 py-10 pointer-events-none opacity-20 group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-brand-accent/5 to-transparent blur-3xl rounded-full" />
                <img 
                  src="https://picsum.photos/seed/car-spec-outline/1200/400" 
                  alt="Vehicle Outline" 
                  className="w-full h-auto grayscale brightness-200 contrast-150"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
