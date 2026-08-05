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
      <div className={`transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <nav
            className={`flex items-center justify-between rounded-full px-5 transition-all duration-500 ${
              scrolled
                ? 'glass shadow-luxury py-2.5'
                : 'border border-transparent py-2'
            }`}
          >
            <a
              href="#top"
              className="flex items-center gap-2.5 ring-focus"
              aria-label="Aesthia Studio home"
            >
              <Logo />
              <span className="text-[15px] font-semibold tracking-tight text-ink">
                Aesthia Studio
              </span>
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-ink/65 transition-all duration-300 hover:bg-gold-500/10 hover:text-gold-500 ring-focus"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="#contact"
                className="text-sm font-medium text-ink/70 transition-colors hover:text-gold-500 ring-focus"
              >
                Contact
              </a>

              <Button
                asChild
                size="sm"
                variant="gold"
                icon
                className="!px-5 !py-2.5"
              >
                <a href="#contact">
                  Claim Your Free Growth Audit
                </a>
              </Button>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden ring-focus"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </nav>

        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-7xl px-5 sm:px-8 lg:hidden"
          >
            <div className="glass mt-2 rounded-3xl p-4 shadow-luxury">

              <div className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-ink/80 transition-all duration-300 hover:bg-gold-500/10 hover:text-gold-500"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-3 border-t border-line pt-3">
                <Button
                  asChild
                  size="md"
                  variant="gold"
                  icon
                  className="w-full"
                >
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                  >
                    Claim Your Free Growth Audit
                  </a>
                </Button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Logo() {
  return (
    <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-ink shadow-luxury-sm">
      <Sparkles className="h-4 w-4 text-gold-400" strokeWidth={2.25} />
      <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
    </span>
  );
}