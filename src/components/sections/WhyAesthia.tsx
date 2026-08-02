import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';
import { COMPARISON } from '@/lib/content';
import { SectionHeading } from '@/components/ui/Button';
import { staggerContainer, itemFadeUp } from '@/lib/motion';

export function WhyAesthia() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          label="Why Aesthia"
          title={
            <>
              A growth partner, not just{' '}
              <span className="text-ink/40">another agency</span>
            </>
          }
          description="Most agencies deliver projects. We build growth systems designed to generate more bookings, stronger Google visibility, and long-term revenue."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          className="mt-16 overflow-hidden rounded-4xl border border-line bg-white/60 shadow-luxury backdrop-blur"
        >
          {/* Header */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-2 border-b border-line bg-ink/[0.02] px-5 py-5 sm:px-8">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/40">
              How we compare
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-ink/50">Generic Agency</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                <Sparkles className="h-4 w-4 text-gold-500" /> Aesthia Studio
              </div>
            </div>
          </div>

          {/* Rows */}
          {COMPARISON.map((row) => (
            <motion.div
              key={row.label}
              variants={itemFadeUp}
              className="grid grid-cols-[1.2fr_1fr_1fr] items-center gap-2 border-b border-line px-5 py-5 last:border-0 sm:px-8"
            >
              <div className="text-sm font-semibold text-ink sm:text-base">{row.label}</div>
              <div className="flex items-center gap-2 text-sm text-ink/45">
                <span className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink/[0.04] sm:flex">
                  <X className="h-3.5 w-3.5" />
                </span>
                <span className="text-pretty">{row.generic}</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-ink">
                <span className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-100/60 sm:flex">
                  <Check className="h-3.5 w-3.5 text-gold-600" strokeWidth={2.5} />
                </span>
                <span className="text-pretty">{row.aesthia}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
