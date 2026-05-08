"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/40 text-sm tracking-widest uppercase mb-8">
            About Us
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight"
        >
          Pioneering <em className="italic text-white/60 font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>ideas</em> for <br className="hidden md:inline" />
          minds that <em className="italic text-white/60 font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>create, build, and inspire.</em>
        </motion.h2>
      </div>
    </section>
  );
}
