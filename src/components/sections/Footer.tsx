import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Globe, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FOOTER_NAV } from '@/lib/content';

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

  alert("HANDLE SUBMIT WORKING");

  const response = await fetch("https://formspree.io/f/mrpzzlvd", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  });

  console.log(response.status);
  console.log(await response.text());
};

  if (response.ok) {
    setSuccess(true);
  }
};
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

       {/* CTA */}
<div className="border-b border-white/10 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold-300">
          <Sparkles className="h-4 w-4" />
          Free Med Spa Growth Audit
        </span>

        <h2 className="mt-8 text-5xl font-semibold leading-tight text-balance">
          Discover exactly why your Med Spa isn't attracting enough premium patients.
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
          We'll personally review your website, Google Business Profile,
          Local SEO, conversion strategy, and patient journey.
          You'll receive a completely personalized action plan —
          absolutely free.
        </p>

        <div className="mt-10 space-y-5">

          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-gold-400"></div>
            <span className="text-white/70">
              Website Conversion Analysis
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-gold-400"></div>
            <span className="text-white/70">
              Google Maps Visibility Audit
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-gold-400"></div>
            <span className="text-white/70">
              Local SEO Opportunity Report
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-gold-400"></div>
            <span className="text-white/70">
              Premium Growth Strategy
            </span>
          </div>

        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">

          <h3 className="text-2xl font-semibold">
            Claim Your Free Audit
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-white/50">
            Complete the form below and we'll prepare your personalized
            Med Spa Growth Audit within 24 hours.
          </p>
<form
  onSubmit={handleSubmit}
  className="mt-8 space-y-4"
>

  <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Full Name *"
    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-gold-400"
  />

 <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
    placeholder="Business Email *"
    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-gold-400"
  />

  <input
  type="text"
  name="clinic"
  value={formData.clinic}
  onChange={handleChange}
  placeholder="Clinic Name *"
    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-gold-400"
  />

  <input
  type="url"
  name="website"
  value={formData.website}
  onChange={handleChange}
  placeholder="Website URL"
    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-gold-400"
  />

  <input
  type="url"
  name="google"
  value={formData.google}
  onChange={handleChange}
  placeholder="Google Business Profile"
    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-gold-400"
  />

 <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
    rows={5}
    placeholder="Tell us about your Med Spa..."
    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-gold-400 resize-none"
  />


 <Button
  type="submit"
  size="lg"
  variant="gold"
  icon
  className="w-full justify-center"
>
  Get My Free Growth Audit
  <ArrowRight className="h-4 w-4" />
</Button>

{success && (
  <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center text-sm text-emerald-300">
    ✅ Thank you! Your Growth Audit request has been received.
    <br />
    We'll contact you within 24 hours.
  </div>
)}

<div className="mt-6 space-y-3">

  <div className="flex items-center gap-3 text-sm text-white/60">
    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400"></div>
    <span>100% Free — No obligation</span>
  </div>

  <div className="flex items-center gap-3 text-sm text-white/60">
    <div className="h-2.5 w-2.5 rounded-full bg-gold-400"></div>
    <span>Delivered within 24 hours</span>
  </div>

  <div className="flex items-center gap-3 text-sm text-white/60">
    <div className="h-2.5 w-2.5 rounded-full bg-blue-400"></div>
    <span>Your information remains confidential</span>
  </div>

</div>

<p className="mt-8 text-center text-xs text-white/35">
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