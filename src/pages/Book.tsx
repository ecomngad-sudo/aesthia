export default function Book() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-32">
        <div className="mb-12 text-center sm:mb-16">
          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-semibold text-yellow-400 sm:px-5 sm:text-sm">
            FREE GROWTH AUDIT
          </span>

          <h1 className="mt-6 text-3xl font-bold text-balance sm:mt-8 sm:text-5xl md:text-6xl">
            Get Your
            <span className="text-yellow-400"> Free Growth Audit</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base text-gray-400 sm:mt-6 sm:text-lg">
            Fill out the form below and we'll review your website,
            Google visibility and online presence.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10">
            <h2 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl">
              What You'll Receive
            </h2>

            <div className="space-y-4 text-base sm:space-y-6 sm:text-lg">
              <div>Website Audit</div>
              <div>Google Maps Audit</div>
              <div>Local SEO Review</div>
              <div>Conversion Recommendations</div>
              <div>Personalized Growth Strategy</div>
              <div>100% Free</div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10">
            <h2 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl">
              Request Your Audit
            </h2>

            <form
              action="https://formspree.io/f/mrpzzlvd"
              method="POST"
              className="space-y-4 sm:space-y-5"
            >
              <input
                type="text"
                name="Full Name"
                required
                placeholder="Full Name"
                className="w-full rounded-xl border border-white/10 bg-black/30 p-3.5 text-base sm:p-4"
              />

              <input
                type="email"
                name="Email"
                required
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-black/30 p-3.5 text-base sm:p-4"
              />

              <input
                type="text"
                name="Business"
                placeholder="Business Name"
                className="w-full rounded-xl border border-white/10 bg-black/30 p-3.5 text-base sm:p-4"
              />

              <input
                type="text"
                name="Website"
                placeholder="Website URL"
                className="w-full rounded-xl border border-white/10 bg-black/30 p-3.5 text-base sm:p-4"
              />

              <input
                type="text"
                name="Google Maps"
                placeholder="Google Maps URL"
                className="w-full rounded-xl border border-white/10 bg-black/30 p-3.5 text-base sm:p-4"
              />

              <textarea
                rows={5}
                name="Message"
                placeholder="Tell us about your Med Spa..."
                className="w-full rounded-xl border border-white/10 bg-black/30 p-3.5 text-base sm:p-4"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-yellow-400 py-3.5 text-base font-bold text-black transition hover:bg-yellow-300 sm:py-4 sm:text-lg"
              >
                Get My Free Audit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
