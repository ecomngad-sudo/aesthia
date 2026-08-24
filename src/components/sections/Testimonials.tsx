import { motion } from 'framer-motion';
import { Star, BadgeCheck, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/content';
import { SectionHeading } from '@/components/ui/Button';
import { staggerContainer, itemFadeUp } from '@/lib/motion';

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          label="Success Stories"
          title={
            <>
              what our{' '}
              <span className="gold-text">clients say.</span>
            </>
          }
          description="Every testimonial reflects the same goal: more visibility, more qualified consultations, and sustainable business growth."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={itemFadeUp}
              className="group relative flex flex-col gap-6 rounded-4xl border border-line bg-gradient-to-br from-white to-canvas-warm/40 p-8 shadow-luxury transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/20 hover:bg-white hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] sm:p-9"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/15">   <Quote className="h-6 w-6 text-gold-500" /> </div>

              <blockquote className="flex-1 text-base leading-relaxed text-ink/75 text-pretty">
                "{t.quote}"
              </blockquote>

              <figcaption className="flex items-center gap-3 border-t border-line pt-5">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-gold-500/20 shadow-lg">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-ink">{t.name}</span>
                    <BadgeCheck className="h-4 w-4 text-success" />
                  </div>
                  <div className="text-xs text-ink/50">{t.role}</div>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
