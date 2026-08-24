import { motion } from 'framer-motion';
import {
  MonitorSmartphone,
  MapPin,
  Building2,
  CalendarCheck,
  Sparkles,
  Star,
  LineChart,
  LifeBuoy,
  type LucideIcon,
} from 'lucide-react';
import { SOLUTIONS } from '@/lib/content';
import { SectionHeading } from '@/components/ui/Button';
import { staggerContainer, itemFadeUp } from '@/lib/motion';

const ICONS: Record<string, LucideIcon> = {
  MonitorSmartphone,
  MapPin,
  Building2,
  CalendarCheck,
  Sparkles,
  Star,
  LineChart,
  LifeBuoy,
};

export function Solution() {
  return (
    <section id="services" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          label="The Solution"
          title={
            <>
              The <span className="gold-text">Med Spa Growth System™</span>
            </>
          }
          description="Everything your Med Spa needs to dominate locally — premium website, Google visibility, AI automation, reputation management, and a predictable flow of high-value bookings."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          className="mt-16 grid auto-rows-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SOLUTIONS.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.div
                key={s.title}
                id={s.id}
                variants={itemFadeUp}
                className={`group relative overflow-hidden rounded-3xl border border-line p-7 transition-all duration-300 hover:shadow-luxury ${
                  s.accent
                    ? 'bg-ink text-white lg:col-span-2 lg:row-span-2'
                    : 'bg-white/60 hover:bg-white'
                } ${s.span}`}
              >
                {s.accent && (
                  <>
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-400/15 blur-[80px]" />
                    <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #D4AF37, transparent 60%)' }} />
                  </>
                )}
                <div className="relative flex h-full flex-col">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${
                      s.accent
                        ? 'bg-white/10 text-gold-400'
                        : 'bg-ink/[0.04] text-ink/60 group-hover:bg-ink group-hover:text-gold-400'
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3
                    className={`mt-5 font-semibold ${
                      s.accent ? 'text-2xl sm:text-3xl' : 'text-lg'
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`mt-2 max-w-md text-pretty leading-relaxed ${
                      s.accent ? 'text-white/65 text-base' : 'text-sm text-ink/55'
                    }`}
                  >
                    {s.description}
                  </p>
                  {s.accent && (
                    <div className="mt-auto pt-6">
                      <div className="flex flex-wrap gap-2">
                        {['Bespoke design', 'Sub-1s speed', 'Conversion-engineered'].map((t) => (
                          <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
