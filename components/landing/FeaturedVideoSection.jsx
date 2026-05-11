"use client";

import { motion } from "framer-motion";

export default function FeaturedVideoSection() {
  return (
    <section className="bg-black pt-4 md:pt-8 pb-12 md:pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="relative rounded-3xl overflow-hidden aspect-video"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20 flex flex-col md:flex-row items-end justify-between gap-6">
            <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md w-full md:w-auto">
              <p className="text-white/50 text-xs tracking-widest uppercase mb-3">
                Our Approach
              </p>
              <p className="text-white text-sm md:text-base leading-relaxed">
                We believe that true professional evolution requires uncompromising clarity. Every tool we build is designed to eliminate noise and empower your best work.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium w-full md:w-auto flex-shrink-0"
            >
              Begin Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
