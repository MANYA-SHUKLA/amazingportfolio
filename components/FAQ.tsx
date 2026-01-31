"use client";

import React, { useState } from "react";

const faqItems = [
  {
    id: 1,
    question: "How can I contact you?",
    answer:
      "You can reach me any time through the contact form on this site or directly at shuklamanya99@gmail.com and WhatsApp/phone at 8005586588.",
  },
  {
    id: 2,
    question: "Can I hire you for a project?",
    answer:
      "Yes. I am open to freelance, contract, and selected full‑time opportunities. Share your requirements and timeline, and I will get back to you with next steps.",
  },
  {
    id: 3,
    question: "Are you available for remote work?",
    answer:
      "Absolutely. I am fully set up for remote collaboration across time zones using tools like Slack, Zoom, Notion, and GitHub.",
  },
  {
    id: 4,
    question: "What technologies do you work with?",
    answer:
      "My core stack includes React, Three.js, React Three Fiber, Tailwind CSS, Node.js, MongoDB, Express, and modern tooling around performance, UI, and 3D experiences.",
  },
  {
    id: 5,
    question: "Can you build complete full-stack applications?",
    answer:
      "Yes. I can design and develop end‑to‑end applications, from frontend UX to backend APIs, authentication, and integrations with services like Email, payments, and databases.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="py-20 w-full" id="faq">
      <h1 className="heading">
        <span className="text-purple">FAQ</span>
      </h1>
      <p className="text-white-200 text-center mt-5 mb-10 max-w-2xl mx-auto">
        Explore my portfolio, learn about my skills, and get answers to
        frequently asked questions about my work, collaborations, and more.
      </p>

      <div className="w-full max-w-3xl mx-auto px-4 space-y-3 relative z-10">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="rounded-2xl border border-white/[0.1] bg-black-100 overflow-hidden transition-all duration-300 hover:border-purple/30 relative"
              style={{
                background: "rgb(4,7,29)",
              }}
            >
              <button
                type="button"
                onClick={() =>
                  setOpenId((prev) => (prev === item.id ? null : item.id))
                }
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple/50 rounded-t-2xl cursor-pointer"
              >
                <span className="font-semibold text-white transition-colors">
                  {item.question}
                </span>
                <span
                  className={`text-purple text-lg flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                >
                  ▼
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-white/[0.08]">
                  <p className="text-white-200 text-sm md:text-base px-6 pb-5 pt-0 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
