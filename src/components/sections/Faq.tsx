import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { FAQS } from '@/lib/content';
import { SectionHeading } from '@/components/ui/Button';
import { easeLux } from '@/lib/motion';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          label="FAQ"
          title={
            <>
              Questions, <span className="gold-text">answered</span>
            </>
          }
          description="Everything you need to know before booking your strategy call."
        />

        <div className="mt-14 flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-3xl border transition-colors duration-300 ${
                  isOpen ? 'border-ink/15 bg-white shadow-luxury-sm' : 'border-line bg-white/40'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left ring-focus sm:px-7"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-ink sm:text-lg">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: easeLux }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      isOpen ? 'bg-ink text-gold-400' : 'bg-ink/[0.05] text-ink/60'
                    }`}
                  >
                    <Plus className="h-4 w-4" strokeWidth={2.25} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: easeLux }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-ink/60 text-pretty sm:px-7">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
