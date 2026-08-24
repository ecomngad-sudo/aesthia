import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
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
        {/* Floating frosted glass capsule bar */}
        <div
          className={`mx-4 mt-4 transition-all duration-500 rounded-full ${
            scrolled
              ? 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg'
              : 'bg-transparent border-transparent shadow-none'
          }`}
        >
          <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between py-3">
            {/* Brand Logo - Aesthia Studio */}
            <a
              href="#top"
              className="flex items-center gap-2.5 ring-focus"
              aria-label="Aesthia Studio home"
            >
              <div className="bg-black/80 rounded-xl p-2">
                <Sparkles className="h-4 w-4 text-amber-400" strokeWidth={2.25} />
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-white">
                Aesthia Studio
              </span>
            </a>

            {/* Nav links with capsule frames */}
            <div className="hidden items-center gap-2 lg:flex">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-1.5 rounded-full border border-white/20 bg-black/40 hover:bg-black/60 transition-all text-white text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Single CTA button */}
            <div className="hidden items-center gap-3 lg:flex">
              <Button
                size="sm"
                variant="gold"
                icon
                className="!px-5 !py-2.5"
                onClick={() => {
                  window.location.href = '#contact';
                }}
              >
                Claim Your Free Growth Audit
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="lg:hidden rounded-full p-2 text-white border border-white/20 bg-black/40 transition-all hover:bg-black/60"
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
              className="mx-4 mt-2 px-5 sm:px-8 lg:hidden"
            >
              <div className="bg-black/80 backdrop-blur-lg border border-white/10 rounded-3xl p-4">
                <div className="flex flex-col">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl px-4 py-3 text-base font-medium text-white transition-all hover:bg-white/10"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="mt-3 border-t border-white/10 pt-3">
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
