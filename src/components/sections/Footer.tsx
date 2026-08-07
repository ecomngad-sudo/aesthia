import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Globe, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    clinic: '',
    website: '',
    google: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/mrpzzlvd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        clinic: '',
        website: '',
        google: '',
        message: '',
      });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* CTA */}
        <div id="audit" className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold-300 sm:px-5">
                  <Sparkles className="h-4 w-4" />
                  Free Med Spa Growth Audit
                </span>

                <h2 className="mt-6 text-3xl font-semibold leading-tight text-balance sm:mt-8 sm:text-4xl lg:text-5xl">
                  Discover exactly why your Med Spa isn't attracting enough premium patients.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:mt-8 sm:text-lg">
                  We'll personally review your website, Google Business Profile,
                  Local SEO, conversion strategy, and patient journey.
                  You'll receive a completely personalized action plan —
                  absolutely free.
                </p>

                <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
                  {[
                    'Website Conversion Analysis',
                    'Google Maps Visibility Audit',
                    'Local SEO Opportunity Report',
                    'Premium Growth Strategy',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold-400" />
                      <span className="text-sm text-white/70 sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl sm:p-8">
                  <h3 className="text-xl font-semibold sm:text-2xl">
                    Claim Your Free Audit
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    Complete the form below and we'll prepare your personalized
                    Med Spa Growth Audit within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-8">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none transition focus:border-gold-400 sm:px-5 sm:py-4"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Business Email *"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none transition focus:border-gold-400 sm:px-5 sm:py-4"
                    />

                    <input
                      type="text"
                      name="clinic"
                      value={formData.clinic}
                      onChange={handleChange}
                      placeholder="Clinic Name *"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none transition focus:border-gold-400 sm:px-5 sm:py-4"
                    />

                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="Website URL"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none transition focus:border-gold-400 sm:px-5 sm:py-4"
                    />

                    <input
                      type="url"
                      name="google"
                      value={formData.google}
                      onChange={handleChange}
                      placeholder="Google Business Profile"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none transition focus:border-gold-400 sm:px-5 sm:py-4"
                    />

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your Med Spa..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-base text-white placeholder:text-white/40 outline-none transition focus:border-gold-400 sm:px-5 sm:py-4"
                    />

                    <Button
                      type="submit"
                      size="lg"
                      variant="gold"
                      icon
                      className="w-full justify-center"
                    >
                      Get My Free Growth Audit
                    </Button>

                    {success && (
                      <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center text-sm text-emerald-300">
                        Thank you! Your Growth Audit request has been received.
                        <br />
                        We'll contact you within 24 hours.
                      </div>
                    )}

                    <div className="mt-6 space-y-3">
                      {[
                        { color: 'bg-emerald-400', text: '100% Free — No obligation' },
                        { color: 'bg-gold-400', text: 'Delivered within 24 hours' },
                        { color: 'bg-blue-400', text: 'Your information remains confidential' },
                      ].map(({ color, text }) => (
                        <div key={text} className="flex items-center gap-3 text-sm text-white/60">
                          <div className={`h-2.5 w-2.5 shrink-0 rounded-full ${color}`} />
                          <span>{text}</span>
                        </div>
                      ))}
                    </div>

                    <p className="mt-6 text-center text-xs text-white/35 sm:mt-8">
                      By submitting this form you agree to be contacted regarding your
                      personalized Med Spa Growth Audit.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="grid gap-10 py-14 sm:gap-12 sm:py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <a
              href="#top"
              className="flex items-center gap-3 text-xl font-semibold sm:text-2xl"
            >
              <Sparkles className="h-6 w-6 text-gold-400" />
              <span>
                Aesthia
                <span className="text-gold-400">.</span>
              </span>
            </a>

            <p className="mt-5 text-sm leading-relaxed text-white/60 sm:mt-6 sm:text-base">
              Luxury Digital Growth Systems for premium Med Spas.
              We help ambitious clinics dominate Google, increase bookings,
              and become the first choice in their city.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/60 sm:mt-8">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 shrink-0 text-gold-400" />
                United States
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                hello@aesthia.com
              </div>
            </div>
          </div>

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

          <FooterColumn
            title="Company"
            links={[
              'About',
              'Case Studies',
              'Process',
              'Contact',
            ]}
          />

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
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center text-xs text-white/40 sm:py-8 sm:text-sm md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Aesthia. All rights reserved.</p>

          <p className="max-w-sm md:max-w-none">
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
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold-300 sm:mb-5">
        {title}
      </h3>

      <ul className="space-y-2.5 sm:space-y-3">
        {links.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-sm text-white/55 transition hover:text-gold-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
