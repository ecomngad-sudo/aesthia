export default function Cookies() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <section className="mx-auto max-w-3xl px-5 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-32">
        <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-semibold text-yellow-400 sm:px-5 sm:text-sm">
          LEGAL
        </span>

        <h1 className="mt-6 text-3xl font-bold text-balance sm:mt-8 sm:text-5xl">
          Cookie Policy
        </h1>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
            This Cookie Policy explains what cookies are and how Aesthia uses them when you visit our website.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">What Cookies Are</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            Cookies are small text files stored on your device when you visit a website. They help websites function properly and provide information to the site owner about how visitors use the site.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Necessary Cookies</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            Necessary cookies are essential for the website to function correctly. They enable core functionalities such as page navigation and access to secure areas. The website cannot function properly without these cookies.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Analytics / Functional Cookies</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            We use functional cookies to remember your preferences and improve your experience on the website.
          </p>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            No optional analytics or advertising cookies are described here unless and until they are implemented.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Third-Party Cookies</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            The website does not currently use third-party cookies. If third-party services are added in the future, this policy will be updated to reflect their use.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-white">Managing Cookies</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-400 sm:text-lg">
            You can control and manage cookies through your browser settings. Most browsers allow you to view, disable, or delete cookies. Please note that disabling necessary cookies may affect the functionality of the website.
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
