export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <section className="mx-auto max-w-3xl px-5 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-32">
        <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-semibold text-yellow-400 sm:px-5 sm:text-sm">
          LEGAL
        </span>

        <h1 className="mt-6 text-3xl font-bold text-balance sm:mt-8 sm:text-5xl">
          Privacy Policy
        </h1>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
            This Privacy Policy describes how Aesthia ("we", "us", or "our") collects, uses, and protects your information when you visit our website. It applies to all visitors, users, and others who access the website.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Information We Collect</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            We may collect the following information:
          </p>
          <ul className="mt-3 list-disc pl-6 text-base leading-relaxed text-gray-400 sm:text-lg">
            <li>Personal information you provide directly, such as your name and email address when you contact us.</li>
            <li>Log data, including your IP address, browser type, operating system, and pages visited.</li>
            <li>Device information and usage data collected automatically through standard server logs.</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-white">Contact / Audit Form</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            If you wish to request an audit of the personal data we hold about you, or if you have any questions about this policy, please use our contact form or email us at <a href="mailto:hello@aesthia.com" className="text-yellow-400">hello@aesthia.com</a>.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">How Information Is Used</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            We use the information we collect to:
          </p>
          <ul className="mt-3 list-disc pl-6 text-base leading-relaxed text-gray-400 sm:text-lg">
            <li>Provide, maintain, and improve the website and its functionality.</li>
            <li>Respond to your inquiries and communicate with you.</li>
            <li>Monitor and analyze usage patterns to enhance user experience.</li>
            <li>Protect the security and integrity of the website.</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-white">Cookies and Analytics</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            We use cookies and similar tracking technologies to enhance your experience on our website. Please review our <a href="/cookies" className="text-yellow-400">Cookie Policy</a> for more information.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            No optional analytics or advertising cookies are described here unless and until they are implemented.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Data Retention</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            We retain personal information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Data Security</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">User Requests</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            You have the right to request access to, correction of, or deletion of your personal information. You may also object to or request restriction of certain processing activities. To make such a request, please contact us using the details below.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Contact</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            Email: <a href="mailto:hello@aesthia.com" className="text-yellow-400">hello@aesthia.com</a>
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Last Updated</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            This policy was last updated on August 10, 2026.
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
