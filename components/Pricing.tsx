const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for students getting started.",
    features: [
      "AI Resume Builder",
      "ATS Score Checker",
      "1 Portfolio Website",
      "PDF Export",
      "Community Support",
    ],
    button: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹299",
    period: "/month",
    description: "Best for job seekers and professionals.",
    features: [
      "Everything in Starter",
      "Unlimited Resumes",
      "Unlimited Portfolios",
      "AI Resume Suggestions",
      "Premium Templates",
      "Custom Domain",
      "Priority Support",
    ],
    button: "Start Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For colleges, universities, and organizations.",
    features: [
      "Team Dashboard",
      "Unlimited Users",
      "Admin Controls",
      "API Access",
      "Custom Branding",
      "Dedicated Support",
    ],
    button: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Simple, Transparent Pricing
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300">
          Start for free and upgrade as your career grows.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 items-stretch gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${
              plan.popular
                ? "border-blue-400 bg-[#294A84] shadow-2xl shadow-blue-900/20"
                : "border-blue-400/20 bg-[#243F73]"
            }`}
          >
            {/* Most Popular */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white">
                ★ MOST POPULAR
              </div>
            )}

            {/* Plan */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white">
                {plan.name}
              </h3>

              <div className="mt-4">
                <span className="text-3xl font-bold text-white">
                  {plan.price}
                </span>

                {plan.period && (
                  <span className="ml-1 text-sm text-gray-300">
                    {plan.period}
                  </span>
                )}
              </div>

              <p className="mx-auto mt-3 min-h-[48px] max-w-[230px] text-sm leading-5 text-gray-300">
                {plan.description}
              </p>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-white/10" />

            {/* Features */}
            <div className="flex-1 space-y-3">
              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm text-gray-200"
                >
                  <span className="font-bold text-green-400">
                    ✓
                  </span>

                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              type="button"
              className={`mt-8 w-full rounded-lg px-5 py-3 text-sm font-bold transition ${
                plan.popular
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border border-white/30 text-white hover:bg-white/10"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <p className="mt-8 text-center text-sm text-gray-400">
        All plans include free updates and secure cloud storage.
      </p>
    </section>
  );
}