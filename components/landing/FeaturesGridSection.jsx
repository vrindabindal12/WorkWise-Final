"use client";

import { motion } from "framer-motion";
import { Target, Zap, Sparkles } from "lucide-react";

export default function FeaturesGridSection() {
  const cards = [
    {
      icon: <Target className="w-5 h-5 text-white" />,
      title: "AI-Powered Mentor",
      description: "Receive contextual career coaching powered by Google Gemini. Our mentor dynamically analyzes your industry and goals to deliver tailored advice."
    },
    {
      icon: <Zap className="w-5 h-5 text-white" />,
      title: "Smart ATS Resumes",
      description: "Build algorithmic, ATS-optimized resumes with real-time compatibility scoring. Generate pixel-perfect PDFs to stand out to recruiters instantly."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-white" />,
      title: "Real-Time Interviews",
      description: "Simulate high-pressure environments with our WebRTC interview preparation module, tracking your assessment scores dynamically."
    }
  ];

  return (
    <section id="features" className="bg-black pt-4 md:pt-8 pb-12 md:pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative liquid-glass rounded-3xl p-8 flex flex-col border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="border border-white/10 bg-white/[0.02] group-hover:bg-white/[0.08] group-hover:border-white/20 transition-colors duration-500 rounded-full w-12 h-12 flex items-center justify-center mb-10">
                  {card.icon}
                </div>
                <h3 className="text-white text-xl font-medium tracking-tight mb-4 group-hover:text-white transition-colors duration-500">
                  {card.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
