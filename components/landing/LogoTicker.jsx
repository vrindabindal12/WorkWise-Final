"use client";

import { motion } from "framer-motion";
import { Hexagon, Triangle, Circle, Square, Diamond, Octagon } from "lucide-react";

export default function LogoTicker() {
  const logos = [
    { icon: <Hexagon className="w-5 h-5 md:w-6 md:h-6" />, name: "Acme" },
    { icon: <Triangle className="w-5 h-5 md:w-6 md:h-6" />, name: "Quantum" },
    { icon: <Circle className="w-5 h-5 md:w-6 md:h-6" />, name: "Nexus" },
    { icon: <Square className="w-5 h-5 md:w-6 md:h-6" />, name: "Globalist" },
    { icon: <Diamond className="w-5 h-5 md:w-6 md:h-6" />, name: "Pinnacle" },
    { icon: <Octagon className="w-5 h-5 md:w-6 md:h-6" />, name: "Vortex" },
  ];

  // Tripled to ensure the marquee can loop smoothly without running out of content
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="bg-black py-8 border-t border-white/5 relative z-20">
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <p className="text-center text-white/30 text-xs tracking-widest uppercase font-semibold">
          Trusted by innovative teams at
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={{ x: ["0%", "-25%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex gap-16 md:gap-24 px-8 w-max items-center"
        >
          {duplicatedLogos.map((logo, idx) => (
            <div key={idx} className="flex items-center gap-3 text-white/20 hover:text-white/60 transition-colors duration-300">
              {logo.icon}
              <span className="font-bold text-lg md:text-xl tracking-tight">{logo.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
}
