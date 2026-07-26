export default function Dashboard() {
  return (
    <section className="flex justify-center pb-24">
      <div className="w-full max-w-[720px] rounded-3xl border border-blue-400/20 bg-[#243F73] p-6 shadow-2xl">

        {/* Dashboard Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-300">Welcome to</p>
            <h2 className="text-xl font-bold text-white">
              Portivo Dashboard
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1B2D5A]">
              🔔
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1B2D5A]">
              👤
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-white/10" />

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

          {/* Resume */}
          <div className="rounded-xl bg-[#1B2D5A] p-4">
            <p className="text-sm text-gray-300">
              Resumes Created
            </p>

            <div className="mt-2 flex items-end justify-between">
              <p className="text-2xl font-bold text-white">
                3
              </p>

              <span className="text-xl">📄</span>
            </div>
          </div>

          {/* ATS */}
          <div className="rounded-xl bg-[#1B2D5A] p-4">
            <p className="text-sm text-gray-300">
              ATS Score
            </p>

            <div className="mt-2 flex items-end justify-between">
              <p className="text-2xl font-bold text-green-400">
                92%
              </p>

              <span className="text-xl">📊</span>
            </div>
          </div>

          {/* Portfolio */}
          <div className="rounded-xl bg-[#1B2D5A] p-4">
            <p className="text-sm text-gray-300">
              Portfolio
            </p>

            <div className="mt-2 flex items-end justify-between">
              <p className="text-lg font-bold text-white">
                Published
              </p>

              <span className="text-xl">🌐</span>
            </div>
          </div>

        </div>

        {/* Main Dashboard Area */}
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">

          {/* Resume Preview */}
          <div className="rounded-xl bg-[#1B2D5A] p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-white">
                Resume
              </h3>

              <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs text-blue-300">
                Updated
              </span>
            </div>

            <div className="rounded-lg bg-[#294A84] p-4">
              <div className="mb-3 h-3 w-24 rounded bg-white/70" />

              <div className="mb-2 h-2 w-full rounded bg-white/20" />
              <div className="mb-2 h-2 w-4/5 rounded bg-white/20" />
              <div className="mb-5 h-2 w-3/5 rounded bg-white/20" />

              <div className="mb-2 h-2 w-full rounded bg-white/20" />
              <div className="mb-2 h-2 w-5/6 rounded bg-white/20" />
              <div className="h-2 w-2/3 rounded bg-white/20" />
            </div>
          </div>

          {/* Portfolio Preview */}
          <div className="rounded-xl bg-[#1B2D5A] p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-white">
                Portfolio
              </h3>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-300">
                Live
              </span>
            </div>

            <div className="flex min-h-[137px] flex-col items-center justify-center rounded-lg bg-[#294A84] text-center">
              <div className="mb-2 text-3xl">
                🌐
              </div>

              <p className="font-semibold text-white">
                Personal Portfolio
              </p>

              <p className="mt-1 text-xs text-gray-300">
                Your portfolio is published
              </p>
            </div>
          </div>

        </div>

        {/* ATS Optimization */}
        <div className="mt-4 rounded-xl bg-[#1B2D5A] p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-white">
                ATS Optimization
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Your resume is optimized for recruiter systems.
              </p>
            </div>

            <p className="text-xl font-bold text-green-400">
              92%
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[92%] rounded-full bg-green-400" />
          </div>
        </div>

        {/* Dashboard Buttons */}
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
            Improve ATS
          </button>

          <button className="rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
            Preview Portfolio
          </button>
        </div>

      </div>
    </section>
  );
}