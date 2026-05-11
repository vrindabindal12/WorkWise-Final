"use client";

import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="bg-black py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24"
        >
          Clarity <em className="italic text-white/40 font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>x</em> Action
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-20">
          {/* Block 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
              Master your workflow
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Every meaningful breakthrough begins at the intersection of deep focus and seamless organization. We operate at that crossroads, providing digital spaces that eliminate distractions and turn bold thinking into tangible progress.
            </p>
          </motion.div>

          {/* Block 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
              Drive your career
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              We believe that the best work emerges when clarity meets conviction. Our platform is designed to uncover hidden potential and translate your daily efforts into achievements that resonate long after the first impression.
            </p>
          </motion.div>

          {/* Block 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
              Work without limits
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Access your projects from anywhere, with real-time syncing that ensures you never miss a beat. Our cloud infrastructure is built for speed, allowing your ideas to flow uninterrupted across all your devices.
            </p>
          </motion.div>

          {/* Block 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
              Secure and private
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Your data belongs to you. We employ state-of-the-art encryption and strict privacy policies to keep your intellectual property safe, giving you the peace of mind to focus purely on innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
