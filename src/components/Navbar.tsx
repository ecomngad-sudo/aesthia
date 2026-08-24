import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/content';
import { useScrollProgress } from '@/lib/hooks';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const { scrolled } = useScrollProgress();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="w-full transition-all duration-500">
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? 'bg-neutral-950/60 backdrop-blur-2xl shadow-sm shadow-amber-950/40 py-3'
              : 'bg-neutral-950/40 backdrop-blur-xl py-5'
          }`}
        >
          <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
            {/* Brand with ethereal golden glow */}
            <a
              href="#top"
              className="group flex items-center gap-2.5 ring-focus"
              aria-label="Aesthia Studio home"
            >
              <StarIcon />
              <span className="relative text-[17px] font-semibold tracking-tight text-white font-serif">
                <span className="absolute -inset-2 rounded-full blur-2xl bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative">Aesthia Studio</span>
              </span>
            </a>

            {/* Nav links as luxury capsules */}
            <div className="hidden items-center gap-1.5 lg:flex">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-amber-950/30 bg-black/60 px-5 py-2 text-sm font-medium text-white font-serif transition-all duration-300 hover:border-amber-700/50 hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(217,119,6,0.2)] hover:bg-black/80 ring-focus"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              {/* Contact capsule */}
              <a
                href="#contact"
                className="rounded-full border border-amber-950/30 bg-black/60 px-5 py-2 text-sm font-medium text-white font-serif transition-all duration-300 hover:border-amber-700/50 hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(217,119,6,0.2)] hover:bg-black/80 ring-focus"
              >
                Contact
              </a>

              {/* News Badge */}
              <span className="flex items-center gap-1.5 rounded-full border border-amber-950/40 bg-black/40 px-3 py-1 text-xs text-white font-medium">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                Now Booking
              </span>

              {/* CTA Button with golden glow */}
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-900/20 via-amber-700/10 to-amber-900/20 blur-md opacity-60" />
                <Button
                  size="sm"
                  variant="gold"
                  icon
                  className="!px-5 !py-2.5 relative"
                  onClick={() => {
                    window.location.href = '#contact';
                  }}
                >
                  Claim Your Free Growth Audit
                </Button>
              </div>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="lg:hidden rounded-full p-2 text-white border border-amber-950/30 bg-black/60 transition-all duration-300 hover:border-amber-700/50 hover:text-amber-400"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-7xl px-5 sm:px-8 lg:hidden"
            >
              <div className="bg-neutral-950/60 backdrop-blur-2xl border border-amber-950/20 mt-2 rounded-3xl p-4 shadow-sm shadow-amber-950/40">
                <div className="flex flex-col">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl px-4 py-3 text-base font-medium text-neutral-200 font-serif transition-all duration-300 hover:bg-amber-950/20 hover:text-amber-400"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="mt-3 border-t border-amber-950/30 pt-3">
                  <Button
                    size="md"
                    variant="gold"
                    icon
                    className="w-full"
                    onClick={() => {
                      setOpen(false);
                      window.location.href = '#contact';
                    }}
                  >
                    Claim Your Free Growth Audit
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

/* Polished gold star icon with gradient fill */
function StarIcon() {
  return (
    <span className="relative flex h-8 w-8 items-center justify-center">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="starGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2CB6A" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8932B" />
          </linearGradient>
        </defs>
        <path
          d="M12 2L14.09 8.26L20.18 8.63L15.54 12.74L16.82 19.02L12 15.77L7.18 19.02L8.46 12.74L3.82 8.63L9.91 8.26L12 2Z"
          fill="url(#starGold)"
          stroke="url(#starGold)"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
      </svg>
      <span className="absolute -inset-1 rounded-full bg-amber-500/10 blur-md" />
    </span>
  );
}
