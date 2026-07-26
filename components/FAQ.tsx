"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is Portivo free to use?",
    answer:
      "Yes. Portivo offers a free Starter plan that includes the AI Resume Builder, ATS Score Checker, one portfolio website, PDF export, and community support.",
  },
  {
    question: "How does ATS Optimization work?",
    answer:
      "Portivo analyzes your resume for ATS compatibility and helps identify areas such as keywords, formatting, skills, and content that can be improved.",
  },
  {
    question: "Can I publish my portfolio online?",
    answer:
      "Yes. Portivo allows you to create and publish a professional portfolio website to showcase your skills, projects, experience, and achievements.",
  },
  {
    question: "Can I export my resume as a PDF?",
    answer:
      "Yes. You can export your completed resume as a high-quality PDF that you can use for job applications.",
  },
  {
    question: "Is my personal data secure?",
    answer:
      "Portivo is designed to protect your information using secure storage and modern security practices. More detailed privacy information will be provided in our Privacy Policy.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Frequently Asked Questions
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300">
          Everything you need to know before getting started with Portivo.
        </p>
      </div>

      {/* FAQ List */}
      <div className="mx-auto mt-12 max-w-4xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-xl border border-blue-400/20 bg-[#243F73]"
            >
              {/* Question */}
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base font-bold text-white md:text-lg">
                  {faq.question}
                </span>

                <span
                  className={`text-2xl text-blue-300 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>

              {/* Answer */}
              {isOpen && (
                <div className="border-t border-white/10 px-6 py-5">
                  <p className="text-sm leading-6 text-gray-300 md:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}