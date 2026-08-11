import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';
import { COMPARISON } from '@/lib/content';
import { SectionHeading } from '@/components/ui/Button';
import { staggerContainer, itemFadeUp } from '@/lib/motion';

export function WhyAesthia() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
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

        {/* Mobile: stacked cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          className="mt-12 flex flex-col gap-4 md:hidden"
        >
          {COMPARISON.map((row) => (
            <motion.div
              key={row.label}
              variants={itemFadeUp}
              className="overflow-hidden rounded-3xl border border-line bg-white/60 shadow-luxury backdrop-blur"
            >
              <div className="border-b border-line bg-ink/[0.02] px-5 py-4">
                <div className="text-sm font-semibold text-ink">{row.label}</div>
              </div>
              <div className="grid gap-0 sm:grid-cols-2">
                <div className="border-b border-line px-5 py-4 sm:border-b-0 sm:border-r">
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/40">
                    Generic Agency
                  </div>
                  <div className="flex items-start gap-2 text-sm text-ink/55">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink/[0.04]">
                      <X className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-pretty">{row.generic}</span>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <div className="mb-2 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-600">
                    <Sparkles className="h-3 w-3" /> Aesthia Studio
                  </div>
                  <div className="flex items-start gap-2 text-sm font-medium text-ink">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100/60">
                      <Check className="h-3.5 w-3.5 text-gold-600" strokeWidth={2.5} />
                    </span>
                    <span className="text-pretty">{row.aesthia}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop: comparison table */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          className="mt-16 hidden overflow-hidden rounded-4xl border border-line bg-white/60 shadow-luxury backdrop-blur md:block"
        >
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
