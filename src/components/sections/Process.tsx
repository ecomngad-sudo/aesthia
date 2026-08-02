import { motion } from 'framer-motion';
import { PROCESS } from '@/lib/content';
import { SectionHeading } from '@/components/ui/Button';
import { staggerContainer, itemFadeUp } from '@/lib/motion';

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          label="How It Works"
          title={
  <>
    A proven roadmap to{' '}
    <span className="gold-text">sustainable growth.</span>
  </>
}
          description="Every step is carefully engineered to strengthen your online presence, attract premium patients, and create predictable long-term growth."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          className="relative mt-16"
        >
          {/* Center line on desktop */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-line to-transparent lg:block" />

          <div className="flex flex-col gap-3 lg:gap-2">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.num}
                variants={itemFadeUp}
                className={`relative flex items-center gap-6 lg:gap-0 ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />

                {/* Center node */}
                <div className="relative z-10 hidden lg:flex lg:w-0">
                  <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold-500/20 bg-gradient-to-br from-white to-canvas-warm shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:scale-110">
                    <span className="text-sm font-bold tracking-wide text-gold-600">{step.num}</span>
                  </span>
                </div>

                {/* Card */}
                <div className="flex-1 lg:w-1/2 lg:flex-none lg:flex-1">
                  <div
                    className={`group rounded-3xl border border-line bg-gradient-to-br from-white to-canvas-warm/40 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/20 hover:bg-white hover:shadow-[0_25px_70px_rgba(0,0,0,0.10)] ${
                      i % 2 === 0 ? 'lg:ml-12' : 'lg:mr-12'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-ink to-ink/90 text-sm font-bold text-gold-400 shadow-md lg:hidden">
                        {step.num}
                      </span>
                      <h3 className="text-xl font-semibold tracking-tight text-ink">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-[15px] leading-7 text-ink/60 text-pretty">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
