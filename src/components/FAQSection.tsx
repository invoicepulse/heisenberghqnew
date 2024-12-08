"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do your free trial?",
    answer: "No, we don't offer a free trial. You can try our platform for free to see if it's right for you.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and offer enterprise billing options for larger organizations.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes to your plan will be reflected in your next billing cycle.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No, all our plans are billed monthly or annually with no long-term commitment. You can cancel at any time.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we offer 24/7 customer support via email, chat, and phone for all paid plans. Free plans have access to our extensive documentation and community support.",
  },
  {
    question: "Can I export my data?",
    answer: "Yes, you can export your data at any time in various formats including CSV, JSON, and PDF. We believe in data portability and transparency.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-pink-50 to-purple-50">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-br from-black via-[#001E80] to-[#0055FF] text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[#010D3E]/60 text-lg">
            Everything you need to know about our platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-black/5 bg-white/80 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-black/[0.01] transition-colors"
              >
                <span className="font-medium text-[#010D3E]">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-[#010D3E]/70">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
