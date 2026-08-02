import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { FOOTER_NAV } from '@/lib/content';

export function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gold-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Top: newsletter + brand statement */}
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
                <Sparkles className="h-4 w-4 text-gold-400" />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Aesthia<span className="text-gold-400">.</span>
              </span>
            </a>
            <p className="max-w-md text-base leading-relaxed text-white/55 text-pretty">
              The Med Spa Growth Partner. We build complete digital growth
              systems that turn premium clinics into the #1 choice in their city.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/45">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-gold-400" /> United States
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="h-4 w-4 text-gold-400" /> hello@aesthiastudio.com
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-gold-400" /> +1 (888) 000-0000
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              Growth notes, monthly
            </h3>
            <p className="text-sm leading-relaxed text-white/55 text-pretty">
              Receive exclusive Med Spa marketing insights, growth strategies, and industry trends — once a month.
            </p>
            <form onSubmit={submit} className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourclinic.com"
                className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/35 ring-focus focus:border-gold-400/50"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full btn-gold px-5 py-3 text-sm font-semibold ring-focus"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Subscribed
                  </>
                ) : (
                  <>
                    Join the List
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
            {sent && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-success"
              >
                Welcome! Your first growth insight is on its way.
              </motion.p>
            )}
          </div>
        </div>

        {/* Middle: nav columns */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <FooterCol title="Studio" links={FOOTER_NAV.Studio} />
          <FooterCol title="Growth System" links={FOOTER_NAV.Growth} />
          <FooterCol title="Company" links={FOOTER_NAV.Company} />
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              Follow
            </h4>
            <div className="flex gap-2.5">
              {['Instagram', 'LinkedIn', 'X'].map((s) => (
                <a
                  key={s}
                  href="#contact"
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 transition-colors hover:border-gold-400/40 hover:text-white ring-focus"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: legal */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Aesthia Studio. All rights reserved.</p>
          <p className="text-white/30">
            Helping premium Med Spas become the first choice in their city.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#contact"
              className="text-sm text-white/55 transition-colors hover:text-white ring-focus"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
