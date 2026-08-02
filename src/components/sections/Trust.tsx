import { motion } from 'framer-motion';
import { TRUST_ITEMS } from '@/lib/content';

export function Trust() {
  const items = [...TRUST_ITEMS, ...TRUST_ITEMS];
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-ink/40"
        >
          A complete growth system — engineered for Med Spas
        </motion.p>
      </div>

      <div className="relative mt-10 overflow-hidden mask-fade-x">
        <div className="marquee-track gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-full border border-line bg-white/60 px-5 py-2.5 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              <span className="whitespace-nowrap text-sm font-medium text-ink/70">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
