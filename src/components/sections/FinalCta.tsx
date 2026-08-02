import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { fadeUp, staggerContainer, itemFadeUp } from '@/lib/motion';

export function FinalCta() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          className="relative overflow-hidden rounded-5xl bg-ink px-6 py-16 text-center shadow-luxury-xl sm:px-12 sm:py-24"
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-gold-400/20 blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-success/10 blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '56px 56px',
                maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000, transparent)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, #000, transparent)',
              }}
            />
          </div>

          <motion.div variants={itemFadeUp} className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-300 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Limited engagements
            </span>
          </motion.div>

          <motion.h2
  variants={fadeUp}
  className="relative mx-auto mt-7 max-w-3xl text-display-lg font-semibold text-white text-balance"
>
  Ready to become the{' '}
  <span className="gold-text">
    #1 Med Spa in your city?
  </span>
</motion.h2>

          <motion.p
            variants={itemFadeUp}
            className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 text-pretty sm:text-lg"
          >
            We only partner with one premium Med Spa per area. If we're already working with a competitor in your city, we won't take on another clinic.
          </motion.p>

          <motion.div
            variants={itemFadeUp}
            className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button size="lg" variant="gold" icon className="w-full sm:w-auto">
              <a href="#contact" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Book My Free Strategy Call
              </a>
            </Button>
            <a
              href="#audit"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white ring-focus"
            >
              Request My Free Growth Audit
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            variants={itemFadeUp}
            className="relative mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40"
          >
           <span>✓ Free 30-minute consultation</span>

<span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

<span>✓ No commitment required</span>

<span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

<span>✓ Exclusive to Med Spas</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
