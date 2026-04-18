import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'When will my pre-ordered Astrateq unit ship?',
    answer: 'Batch 01 units are scheduled for priority shipping in Summer 2026. You will receive monthly production updates via email once your reservation is confirmed.'
  },
  {
    question: 'Why is the deposit only $25?',
    answer: 'The reservation deposit is a commitment that help us validate demand and plan production capacity accurately. It is not the final price of the product, but it guarantees you a spot in the first shipment.'
  },
  {
    question: 'Is my deposit fully refundable?',
    answer: 'Yes, 100%. You can cancel your reservation at any time before your unit ships for a full refund back to your original payment method. No questions asked.'
  },
  {
    question: 'Is it compatible with my current vehicle?',
    answer: 'Astrateq Gadgets are designed for universal compatibility with most North American SUVs and pickup trucks manufactured after 2012. We will provide a specific compatibility check tool before final payment.'
  },
  {
    question: 'Is there a required monthly subscription?',
    answer: 'No. Core safety features function without an active subscription. We may offer optional premium cloud-sync or advanced analytics features, but primary protection is subscription-free.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-10 max-w-4xl mx-auto">
      <div className="mb-20">
        <div className="text-brand-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-4 text-center">Inquiry</div>
        <h2 className="font-display text-4xl font-extralight tracking-tight mb-4 text-center">Frequently <span className="font-semibold italic">Asked Questions.</span></h2>
      </div>

      <div className="space-y-px bg-brand-border border-y border-brand-border">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-brand-bg group">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full py-8 flex items-center justify-between text-left hover:text-brand-accent transition-colors px-4"
            >
              <span className="font-display font-medium text-lg tracking-tight">{faq.question}</span>
              {openIndex === index ? <Minus className="w-5 h-5 flex-shrink-0 text-brand-accent" /> : <Plus className="w-5 h-5 flex-shrink-0 text-brand-text-dim group-hover:text-brand-accent transition-colors" />}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden px-4"
                >
                  <p className="pb-8 text-brand-text-dim text-md leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
