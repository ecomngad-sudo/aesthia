 export default function Book() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-16 text-center">
          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold text-yellow-400">
            FREE GROWTH AUDIT
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-6xl">
            Get Your
            <span className="text-yellow-400"> Free Growth Audit</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Fill out the form below and we'll review your website,
            Google visibility and online presence.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="mb-8 text-3xl font-bold">
              What You'll Receive
            </h2>

            <div className="space-y-6 text-lg">
              <div>✅ Website Audit</div>
              <div>✅ Google Maps Audit</div>
              <div>✅ Local SEO Review</div>
              <div>✅ Conversion Recommendations</div>
              <div>✅ Personalized Growth Strategy</div>
              <div>✅ 100% Free</div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

            <h2 className="mb-8 text-3xl font-bold">
              Request Your Audit
            </h2>

            <form
              action="https://formspree.io/f/mrpzzlvd"
              method="POST"
              className="space-y-5"
            >

              <input
                type="text"
                name="Full Name"
                required
                placeholder="Full Name"
                className="w-full rounded-xl border border-white/10 bg-black/30 p-4"
              />

              <input
                type="email"
                name="Email"
                required
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-black/30 p-4"
              />

              <input
                type="text"
                name="Business"
                placeholder="Business Name"
                className="w-full rounded-xl border border-white/10 bg-black/30 p-4"
              />

              <input
                type="text"
                name="Website"
                placeholder="Website URL"
                className="w-full rounded-xl border border-white/10 bg-black/30 p-4"
              />

              <input
                type="text"
                name="Google Maps"
                placeholder="Google Maps URL"
                className="w-full rounded-xl border border-white/10 bg-black/30 p-4"
              />

              <textarea
                rows={5}
                name="Message"
                placeholder="Tell us about your Med Spa..."
                className="w-full rounded-xl border border-white/10 bg-black/30 p-4"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-yellow-400 py-4 text-lg font-bold text-black transition hover:bg-yellow-300"
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