export default function FinalCTA() {
  return (
    <section className="py-24">
      <div className="rounded-3xl border border-blue-400/20 bg-[#243F73] px-6 py-16 text-center md:px-12">
        <h2 className="text-3xl font-bold text-white md:text-5xl">
          Ready to Build Your Career?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
          Create your AI-powered resume, improve your ATS score, and launch your
          professional portfolio today.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="rounded-xl bg-blue-600 px-7 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            Get Started Free
          </button>

          <button
            type="button"
            className="rounded-xl border border-white/50 px-7 py-3 font-bold text-white transition hover:bg-white/10"
          >
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}