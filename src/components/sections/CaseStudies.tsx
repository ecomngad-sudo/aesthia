import { motion } from 'framer-motion';
import { ArrowUpRight, Quote } from 'lucide-react';
import { CASE_STUDIES } from '@/lib/content';
import { SectionHeading } from '@/components/ui/Button';
import { staggerContainer, itemFadeUp } from '@/lib/motion';

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          label="Results"
          title={
            <>
              Proven growth for{' '}
    <span className="gold-text">premium clinics.</span>
            </>
          }
          description="Real campaigns. Real growth. Every project is built to increase visibility, generate premium consultations, and deliver measurable business results."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          className="mt-16 flex flex-col gap-6"
        >
          {CASE_STUDIES.map((cs, i) => (
            <CaseCard key={cs.name} cs={cs} flip={i % 2 === 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CaseCard({
  cs,
  flip,
}: {
  cs: (typeof CASE_STUDIES)[number];
  flip?: boolean;
}) {
  return (
    <motion.article
      variants={itemFadeUp}
      className="group relative overflow-hidden rounded-4xl border border-line bg-white/70 shadow-luxury backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
    >
      <div className={`grid gap-0 lg:grid-cols-2 ${flip ? 'lg:[direction:rtl]' : ''}`}>
        {/* Visual */}
        <div className="relative min-h-[320px] overflow-hidden [direction:ltr]">
          <motion.img
            src={cs.image}
            alt={`${cs.name} — luxury med spa interior`}
            className="h-full w-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />

          {/* Device mockups */}
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between [direction:ltr]">
            <div className="glass-dark rounded-2xl px-4 py-3">
              <div className="text-xs font-semibold text-white">{cs.name}</div>
              <div className="text-[10px] text-white/60">{cs.city}</div>
            </div>
            <div className="hidden gap-2 sm:flex">
              <DeviceTag label="Desktop" />
              <DeviceTag label="Tablet" />
              <DeviceTag label="Mobile" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 md:p-10 [direction:ltr]">
          <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-3">
           {cs.metrics.map((m) => (
  <div
    key={m.label}
    className="rounded-2xl border border-line bg-gradient-to-br from-white to-canvas-warm/70 px-4 py-3.5 transition-all duration-300 hover:border-gold-500/20 hover:shadow-md sm:px-5 sm:py-4"
  >
    <div className="text-2xl font-bold tracking-tight text-gold-500 sm:text-3xl">
  {m.value}
</div>

<div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">
  {m.label}
</div>
  </div>
))}
          </div>

          <div className="space-y-5">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                Challenge
              </div>
              <p className="mt-1 text-sm leading-relaxed text-ink/65 text-pretty">{cs.challenge}</p>
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/40">
                Solution
              </div>
              <p className="mt-1 text-sm leading-relaxed text-ink/65 text-pretty">{cs.solution}</p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-gold-500/10 bg-gradient-to-br from-gold-500/5 to-transparent p-5">
              <Quote className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
              <p className="text-sm font-medium leading-relaxed text-ink/80 text-pretty">
                {cs.impact}
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-gold-600 ring-focus"
          >
            See how we did it
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function DeviceTag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-medium text-white/80 backdrop-blur">
      {label}
    </span>
  );
}
