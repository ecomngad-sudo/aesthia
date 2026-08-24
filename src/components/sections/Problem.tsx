import { motion } from 'framer-motion';
import {
  EyeOff,
  Gauge,
  SearchX,
  TrendingDown,
  ShieldOff,
  Crown,
  type LucideIcon,
} from 'lucide-react';
import { PROBLEMS } from '@/lib/content';
import { SectionHeading } from '@/components/ui/Button';
import { staggerContainer, itemFadeUp } from '@/lib/motion';

const ICONS: Record<string, LucideIcon> = {
  EyeOff,
  Gauge,
  SearchX,
  TrendingDown,
  ShieldOff,
  Crown,
};

export function Problem() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          label="The Problem"
          title={
            <>
              Most Med Spa websites are quietly{' '}
              <span className="text-ink/40">losing patients</span>
            </>
          }
          description="Your patients are premium. Your website should be too. Here is what is costing you bookings right now."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROBLEMS.map((p) => {
            const Icon = ICONS[p.icon];
            return (
              <motion.div
                key={p.title}
                variants={itemFadeUp}
                className="group relative overflow-hidden rounded-3xl border border-line bg-white/50 p-7 transition-all duration-300 hover:border-ink/15 hover:bg-white hover:shadow-luxury"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink/[0.04] text-ink/50 transition-colors group-hover:bg-ink group-hover:text-gold-400">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55 text-pretty">
                  {p.description}
                </p>
                <span className="pointer-events-none absolute -bottom-px left-7 right-7 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
