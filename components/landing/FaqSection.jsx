"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does the AI Mentor personalize its advice?",
    answer: "The Google Gemini-powered mentor aggregates your profile data, assessment histories, and industry insights to construct a highly specific context window. This ensures every piece of advice is deterministic, actionable, and tailored exactly to your career trajectory."
  },
  {
    question: "Are the generated resumes ATS-friendly?",
    answer: "Absolutely. Our smart resume builder uses custom parsing algorithms to ensure your document structurally aligns with Applicant Tracking Systems. We also provide real-time compatibility scores to optimize your keywords before you export to PDF."
  },
  {
    question: "How do the mock interviews work?",
    answer: "We utilize PeerJS and WebRTC technology to establish low-latency, real-time peer-to-peer connections. This allows you to simulate high-pressure, live interview environments directly in your browser without any server bottlenecks."
  },
  {
    question: "How secure is my data?",
    answer: "We take privacy seriously. Your data is secured via Clerk authentication, and all database records are strictly modeled in PostgreSQL via Prisma. We don't train our models on your private data without consent."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-black py-16 md:py-20 px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
          <div className="border border-white/10 rounded-full px-4 py-1.5 mb-6 flex items-center justify-center bg-white/[0.02]">
            <span className="text-white/60 text-xs font-medium tracking-widest uppercase">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white tracking-tight mb-6">
            Common <em className="italic text-white/70 font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>questions.</em>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Everything you need to know about WorkWise and how our AI architecture accelerates your career.
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
