const reasons = [
  {
    icon: "🤖",
    title: "AI-Powered Resume Builder",
    description:
      "Create professional resumes in minutes with intelligent AI assistance.",
  },
  {
    icon: "📄",
    title: "ATS-Friendly Optimization",
    description:
      "Improve your resume score and increase your chances of passing ATS filters.",
  },
  {
    icon: "🌐",
    title: "Portfolio Publishing",
    description:
      "Launch a beautiful personal portfolio website and showcase your work.",
  },
  {
    icon: "🔒",
    title: "Secure Cloud Storage",
    description:
      "Your resumes and portfolios are securely stored and accessible anytime.",
  },
  {
    icon: "⚡",
    title: "One-Click PDF Export",
    description:
      "Download high-quality resumes and portfolios instantly.",
  },
  {
    icon: "📈",
    title: "Career Insights",
    description:
      "Track your progress and receive personalized career recommendations.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-portivo" className="py-24">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Why Choose Portivo?
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-300">
          Everything you need to build a professional career with confidence.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="group rounded-xl border border-blue-400/20 bg-[#243F73] p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-400/50"
          >
            {/* Icon */}
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20 text-2xl transition group-hover:bg-blue-600/30">
              {reason.icon}
            </div>

            {/* Title */}
            <h3 className="mt-5 text-lg font-bold text-white">
              {reason.title}
            </h3>

            {/* Description */}
            <p className="mx-auto mt-2 max-w-[280px] text-sm leading-5 text-gray-300">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}