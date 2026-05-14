"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How is WorkWise different from other productivity tools?",
    answer: "WorkWise isn't just about managing tasks; it's an intelligent ecosystem designed to eliminate friction. We focus on deep work, radical clarity, and seamless collaboration, ensuring you spend less time organizing and more time executing."
  },
  {
    question: "Can I use WorkWise for personal projects?",
    answer: "Absolutely. Our Starter plan is perfectly tailored for individuals looking to master their personal workflow, track their career growth, and maintain absolute focus on what matters most."
  },
  {
    question: "How secure is my data on the platform?",
    answer: "We employ enterprise-grade encryption for all data at rest and in transit. Your privacy and security are foundational to our architecture, ensuring your intellectual property remains strictly yours."
  },
  {
    question: "Does WorkWise integrate with other tools I use?",
    answer: "Yes, our Professional and Enterprise plans offer robust custom API integrations. We are continually expanding our native integrations to ensure your workflow remains uninterrupted."
  },
  {
    question: "What kind of support do you offer?",
    answer: "Starter plans include community support, while Professional plans come with priority 24/7 support. Enterprise clients receive a dedicated success manager and SLA guarantees."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black py-16 md:py-20 px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
          <div className="border border-white/10 rounded-full px-4 py-1.5 mb-6 flex items-center justify-center bg-white/[0.02]">
            <span className="text-white/60 text-xs font-medium tracking-widest uppercase">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white tracking-tight mb-6">
            Common <em className="italic text-white/70 font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>questions.</em>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to know about WorkWise and how we can accelerate your workflow.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 rounded-3xl bg-white/[0.01] overflow-hidden hover:bg-white/[0.02] transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-white/90 font-medium text-lg pr-8">{faq.question}</span>
                <div className="flex-shrink-0 text-white/50 bg-white/[0.03] p-2 rounded-full border border-white/10">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-white/60 leading-relaxed text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
