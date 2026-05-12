"use client";

import { motion } from "framer-motion";
import { Target, Zap, Sparkles } from "lucide-react";

export default function FeaturedVideoSection() {
  const cards = [
    {
      icon: <Target className="w-5 h-5 text-white" />,
      title: "Absolute Focus",
      description: "We design spaces that actively eliminate digital noise, allowing you to enter deep work states faster and stay there longer."
    },
    {
      icon: <Zap className="w-5 h-5 text-white" />,
      title: "Unmatched Velocity",
      description: "Move from idea to execution without friction. Our tools are optimized for speed, ensuring your workflow never breaks."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-white" />,
      title: "Radical Clarity",
      description: "Turn overwhelming chaos into actionable steps. We surface what matters most so you always know exactly what to do next."
    }
  ];

  return (
    <section className="bg-black pt-4 md:pt-8 pb-12 md:pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="liquid-glass rounded-3xl p-8 flex flex-col hover:bg-white/[0.03] transition-colors"
            >
              <div className="border border-white/10 bg-white/[0.02] rounded-full w-12 h-12 flex items-center justify-center mb-10">
                {card.icon}
              </div>
              <h3 className="text-white text-xl font-medium tracking-tight mb-4">
                {card.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
