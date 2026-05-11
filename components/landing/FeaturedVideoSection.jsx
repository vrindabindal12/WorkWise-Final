"use client";

import { motion } from "framer-motion";

export default function FeaturedVideoSection() {
  return (
    <section className="bg-black pt-4 md:pt-8 pb-12 md:pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="flex flex-col md:flex-row items-center justify-between gap-12 liquid-glass rounded-3xl p-8 md:p-16"
        >
          <div className="max-w-2xl">
            <p className="text-white/50 text-xs tracking-widest uppercase mb-6">
              Our Approach
            </p>
            <p className="text-white text-xl md:text-3xl leading-relaxed tracking-tight">
              We believe that true professional evolution requires uncompromising clarity. Every tool we build is designed to eliminate noise and empower your best work.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black rounded-full px-8 py-4 text-sm font-bold w-full md:w-auto flex-shrink-0 hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Begin Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
