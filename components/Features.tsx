const features = [
  {
    icon: "🤖",
    title: "AI Resume Builder",
    description:
      "Create professional ATS-friendly resumes in minutes with AI assistance.",
  },
  {
    icon: "📊",
    title: "ATS Score Checker",
    description:
      "Analyze your resume and improve your chances of passing recruiter systems.",
  },
  {
    icon: "🌐",
    title: "Portfolio Builder",
    description:
      "Launch a beautiful personal portfolio website that showcases your work.",
  },
  {
    icon: "🗂️",
    title: "Smart Templates",
    description:
      "Choose from modern templates designed to impress recruiters.",
  },
  {
    icon: "📄",
    title: "PDF Export",
    description:
      "Export resumes and portfolios instantly in high-quality PDF format.",
  },
  {
    icon: "📈",
    title: "Career Insights",
    description:
      "Track your progress and receive AI-powered career recommendations.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Powerful Features
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-300">
          Everything you need to create resumes, improve your ATS score,
          build your portfolio, and land your dream job.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-xl border border-blue-400/20 bg-[#243F73] p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-400/50"
          >
            {/* Icon */}
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20 text-2xl">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="mt-5 text-xl font-bold text-white">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-300">
              {feature.description}
            </p>

            {/* Link */}
            <button
              type="button"
              className="mt-4 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}