import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  TrendingUp,
  Calendar,
  Star,
  Bot,
  Globe,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

import { Button, Pill } from '@/components/ui/Button';
import { easeLux } from '@/lib/motion';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.log('Autoplay error:', err));
    }
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 min-h-[90vh] flex items-center">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-interior-of-a-modern-luxury-building-5683/1080p.mp4"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Left: copy */}
          <div className="flex flex-col items-start gap-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeLux }}
            >
              <Pill
                icon={
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
                  </span>
                }
              >
                Med Spa Growth Partner · USA
              </Pill>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: easeLux, delay: 0.08 }}
              className="text-display-2xl font-semibold text-white text-balance"
            >
              Helping Med Spas become the{' '}
              <span className="relative whitespace-nowrap">
                <span className="gold-text">#1 choice</span>
              </span>{' '}
              in their city.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeLux, delay: 0.2 }}
              className="max-w-xl text-lg leading-relaxed text-white/80 text-pretty"
            >
              We build complete digital growth systems that increase bookings,
              dominate Google, and create premium online experiences — engineered
              exclusively for Med Spas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeLux, delay: 0.32 }}
              className="flex w-full flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button size="lg" variant="gold" icon className="w-full sm:w-auto">
                <Link to="/book">Claim Your Free Growth Audit</Link>
              </Button>
              <Button size="lg" variant="glass" className="w-full sm:w-auto text-white">
                <Link to="/book">Claim Your Free Audit</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: easeLux, delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-white/75"
            >
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success" /> No long contracts
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success" /> Med-spa specialists
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success" /> USA-focused
              </span>
            </motion.div>
          </div>

          {/* Right: floating dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: easeLux, delay: 0.25 }}
            className="relative mx-auto w-full max-w-[560px] overflow-hidden lg:mx-0"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <div className="relative h-[380px] min-[480px]:h-[460px] sm:h-[520px] lg:h-[560px]">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
        className="absolute left-1/2 top-1/2 w-[92%] min-[480px]:w-[88%] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="card-luxury rounded-4xl p-5 shadow-luxury-lg bg-white/90 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-ink/[0.04] px-3 py-1 text-[10px] font-medium text-ink/50">
              <Globe className="h-3 w-3" /> aesthia.online
            </div>
            <div className="w-10" />
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-line">
            <div className="relative aspect-[16/10] bg-gradient-to-br from-canvas-cream to-canvas">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=70"
                alt="Luxury med spa website preview"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-white">Beverly Hills Med Spa</div>
                  <div className="text-[9px] text-white/70">Austin · Premium Med Spa</div>
                </div>
                <span className="rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-semibold text-ink">
                  Book Now
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2.5">
            <MiniStat label="Bookings" value="143%" trend="+24%" />
            <MiniStat label="Traffic" value="91%" trend="+12%" />
            <MiniStat label="Rating" value="4.9" trend="+0.4" />
          </div>

          <div className="mt-3 rounded-2xl border border-line bg-white/60 p-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-medium text-ink/55">Qualified bookings · 90 days</span>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-success">
                <TrendingUp className="h-3 w-3" /> +143%
              </span>
            </div>
            <SparkChart />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MiniStat({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="rounded-xl border border-line bg-white/70 p-2.5">
      <div className="text-[9px] font-medium uppercase tracking-wide text-ink/45">{label}</div>
      <div className="mt-0.5 text-base font-semibold text-ink">{value}</div>
      <div className="text-[9px] font-semibold text-success">{trend}</div>
    </div>
  );
}

function SparkChart() {
  const points = [8, 14, 11, 20, 18, 28, 24, 38, 34, 52, 48, 72];
  const max = Math.max(...points);
  const w = 100;
  const h = 32;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${(i * step).toFixed(2)} ${(h - (p / max) * h).toFixed(2)}`)
    .join(' ');
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-2 h-12 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#spark)" />
      <motion.path
        d={path}
        fill="none"
        stroke="#10B981"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: easeLux, delay: 0.6 }}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
