export default function Hero() {
  return (
    <section className="text-center pt-24 pb-16">

      <div className="inline-flex items-center border border-white/20 rounded-full px-4 py-2 text-sm text-gray-300">
        ✨ AI-Powered Career Platform
      </div>

      <h1 className="mt-8 text-7xl font-extrabold leading-tight max-w-4xl mx-auto">
        Build Your Career
        <br />
        with <span className="text-blue-500">AI.</span>
      </h1>

      <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-300">
        Create ATS-friendly resumes, optimize them with AI,
        and build professional portfolios—all in one platform.
      </p>

      <div className="mt-10 flex justify-center gap-5">
        <button className="bg-blue-600 hover:bg-blue-700 transition px-8 h-14 rounded-xl font-semibold">
          Get Started Free
        </button>

        <button className="border border-white hover:bg-white hover:text-[#1B2D5A] transition px-8 h-14 rounded-xl font-semibold">
          Watch Demo
        </button>
      </div>

    </section>
  );
}