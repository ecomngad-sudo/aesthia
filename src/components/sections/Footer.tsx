import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Globe, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FOOTER_NAV } from '@/lib/content';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* CTA */}
        <div className="border-b border-white/10 py-20">
          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold-300">
              <Sparkles className="h-4 w-4" />
              Luxury Growth Partner
            </span>

            <h2 className="mt-6 text-5xl font-semibold leading-tight text-balance">
              Ready to dominate your local market?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Luxury websites, Google Maps domination, Local SEO, AI booking
              systems, and premium patient acquisition engineered exclusively
              for Med Spas.
            </p>

            <div className="mt-10">
              <Button size="lg" variant="gold" icon>
                <a href="/book" className="flex items-center gap-2">
                  Claim Your Free Growth Audit
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

          </div>
        </div>

        {/* Main */}
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <a
              href="#top"
              className="flex items-center gap-3 text-2xl font-semibold"
            >
              <Sparkles className="h-6 w-6 text-gold-400" />
              <span>
                Aesthia
                <span className="text-gold-400">.</span>
              </span>
            </a>

            <p className="mt-6 text-white/60 leading-relaxed">
              Luxury Digital Growth Systems for premium Med Spas.
              We help ambitious clinics dominate Google, increase bookings,
              and become the first choice in their city.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/60">

              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-gold-400" />
                Worldwide
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold-400" />
                hello@aesthia.com
              </div>

            </div>

          </div>

          {/* Services */}
          <FooterColumn
            title="Services"
            links={[
              'Luxury Websites',
              'Google Business',
              'Local SEO',
              'AI Booking',
              'Review Automation',
            ]}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={[
              'About',
              'Case Studies',
              'Process',
              'Contact',
            ]}
          />

          {/* Resources */}
          <FooterColumn
            title="Resources"
            links={[
              'Growth Audit',
              'Privacy Policy',
              'Terms of Service',
              'Cookies',
            ]}
          />

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-white/40 md:flex-row">

          <p>
            © {new Date().getFullYear()} Aesthia. All rights reserved.
          </p>

          <p>
            Designed with precision. Built for growth. Trusted by premium clinics.
          </p>

        </div>

      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>

      <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">
        {title}
      </h3>

      <ul className="space-y-3">

        {links.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-white/55 transition hover:text-gold-300"
            >
              {item}
            </a>
          </li>
        ))}

      </ul>

    </div>
  );
}