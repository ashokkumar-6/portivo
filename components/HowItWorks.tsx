const steps = [
  {
    number: "01",
    title: "Create Resume",
    description: "Generate an ATS-friendly resume using AI.",
  },
  {
    number: "02",
    title: "Improve ATS",
    description: "Optimize your resume for recruiter systems.",
  },
  {
    number: "03",
    title: "Build Portfolio",
    description: "Create your personal portfolio website.",
  },
  {
    number: "04",
    title: "Get Hired",
    description: "Download your resume and apply confidently.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          How Portivo Works
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300">
          From creating your resume to getting hired, Portivo guides you every
          step of the way.
        </p>
      </div>

      {/* Desktop Timeline */}
      <div className="relative mx-auto mt-16 hidden max-w-5xl md:block">
        {/* Connecting Line */}
        <div className="absolute left-[12.5%] right-[12.5%] top-6 h-[2px] bg-[#3A5B8F]" />

        <div className="relative grid grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="px-4 text-center">
              {/* Number */}
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-400 bg-blue-600 text-sm font-bold text-white">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-lg font-bold text-white">
                {step.title}
              </h3>

              <p className="mx-auto mt-2 max-w-[190px] text-sm leading-5 text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="mx-auto mt-12 space-y-5 md:hidden">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex items-start gap-4 rounded-xl border border-blue-400/20 bg-[#243F73] p-5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              {step.number}
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-1 text-sm leading-5 text-gray-300">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}