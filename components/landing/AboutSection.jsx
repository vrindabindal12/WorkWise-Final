"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-black pt-16 md:pt-24 pb-8 md:pb-12 px-6 overflow-hidden">
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
          Building <em className="italic text-white/60 font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>intelligent</em> tools for <br className="hidden md:inline" />
          ambitious minds and <em className="italic text-white/60 font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>quiet rebels.</em>
        </motion.h2>
      </div>
    </section>
  );
}
