export default function Terms() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <section className="mx-auto max-w-3xl px-5 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-32">
        <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-semibold text-yellow-400 sm:px-5 sm:text-sm">
          LEGAL
        </span>

        <h1 className="mt-6 text-3xl font-bold text-balance sm:mt-8 sm:text-5xl">
          Terms of Service
        </h1>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
            These Terms of Service ("Terms") govern your access to and use of the Aesthia website. By accessing or using the website, you agree to be bound by these Terms.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Website Use</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            You may use the website for lawful purposes only. You agree not to use the website in any way that could damage, disable, or impair the website, or interfere with any other party's use of the website.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Services</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            The website provides general information and may offer contact forms, booking inquiries, and related features. We reserve the right to modify, suspend, or discontinue any part of the website at any time without notice.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Contact / Audit Requests</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            For audit requests, business inquiries, or questions about these Terms, please contact us at <a href="mailto:hello@aesthia.com" className="text-yellow-400">hello@aesthia.com</a>.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Website Content</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            All content on the website, including text, graphics, logos, images, and data, is provided for general informational purposes only. We do not guarantee the accuracy, completeness, or timeliness of any content.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Intellectual Property</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            The website and all content, trademarks, logos, and other intellectual property displayed are the property of Aesthia or its licensors. You may not use, reproduce, distribute, or create derivative works without prior written permission.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Acceptable Use</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            You agree not to:
          </p>
          <ul className="mt-3 list-disc pl-6 text-base leading-relaxed text-gray-400 sm:text-lg">
            <li>Use the website for any unlawful or unauthorized purpose.</li>
            <li>Attempt to gain unauthorized access to any portion of the website.</li>
            <li>Transmit any harmful code, spam, or unsolicited messages.</li>
            <li>Scrape or harvest data from the website without permission.</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-white">External Links</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            The website may contain links to external third-party websites that are not under our control. We are not responsible for the content, privacy policies, or practices of any third-party sites.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Limitation of Liability</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            To the fullest extent permitted by law, Aesthia shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data or profits, arising out of or in connection with your use of the website.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Changes to These Terms</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            We may update these Terms from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of the website after any changes constitutes acceptance of the new Terms.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Contact</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            Email: <a href="mailto:hello@aesthia.com" className="text-yellow-400">hello@aesthia.com</a>
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Last Updated</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            These Terms were last updated on August 10, 2026.
          </p>
        </div>

        <a
          href="/"
          className="mt-10 inline-block rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 transition hover:border-yellow-500/30 hover:text-yellow-400"
        >
          ← Back to Home
        </a>
      </section>
    </main>
  );
}
