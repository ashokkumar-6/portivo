const items = [
  {
    icon: "👥",
    title: "100+",
    subtitle: "Career Access",
  },
  {
    icon: "🤖",
    title: "AI Resume",
    subtitle: "Builder",
  },
  {
    icon: "📊",
    title: "ATS",
    subtitle: "Optimization",
  },
  {
    icon: "🌐",
    title: "Portfolio",
    subtitle: "Builder",
  },
];

export default function Trust() {
  return (
    <section className="pb-24 pt-4">
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Everything You Need to Get Hired
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-300">
          Build ATS-friendly resumes, improve your ATS score, and launch a
          professional portfolio — all in one AI-powered platform.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-blue-400/20 bg-[#243F73] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-400/50"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20 text-2xl">
              {item.icon}
            </div>

            <h3 className="mt-4 text-lg font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-1 text-sm text-gray-300">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}