"use client";

import { motion } from "framer-motion";
import { Layers, Users, Shield } from "lucide-react";

export default function FeatureZigZag() {
  const features = [
    {
      title: "Intelligent Organization",
      subtitle: "Workspace",
      description: "We provide intuitive systems that categorize your projects, surface what matters most, and keep your daily workflow completely friction-free. Master your workflow with absolute clarity.",
      icon: <Layers className="w-5 h-5 text-white" />,
      imageAlign: "left",
      visual: (
        <div className="w-full h-full min-h-[300px] md:min-h-[450px] liquid-glass rounded-3xl border border-white/5 relative overflow-hidden flex items-center justify-center bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-40 h-40 rounded-2xl bg-white/5 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.05)] flex items-center justify-center backdrop-blur-md relative z-10"
          >
            <Layers className="w-12 h-12 text-white/40" />
          </motion.div>
        </div>
      )
    },
    {
      title: "Seamless Connection",
      subtitle: "Collaboration",
      description: "From brainstorming to execution, we bring your team together in a unified space where ideas flow effortlessly and real work gets done. Drive your collective career forward.",
      icon: <Users className="w-5 h-5 text-white" />,
      imageAlign: "right",
      visual: (
        <div className="w-full h-full min-h-[300px] md:min-h-[450px] liquid-glass rounded-3xl border border-white/5 relative overflow-hidden flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]">
           <motion.div 
            animate={{ scale: [1, 1.05, 1] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="flex gap-4 items-center relative z-10"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 border border-white/20 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.05)]" />
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 border border-white/30 backdrop-blur-xl -ml-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 border border-white/20 backdrop-blur-xl -ml-8 flex items-center justify-center text-white/50 text-sm font-medium shadow-[0_0_30px_rgba(255,255,255,0.05)]">+3</div>
          </motion.div>
        </div>
      )
    },
    {
      title: "Secure & Private",
      subtitle: "Infrastructure",
      description: "Your data belongs to you. We employ state-of-the-art encryption and strict privacy policies to keep your intellectual property safe, giving you the peace of mind to work without limits.",
      icon: <Shield className="w-5 h-5 text-white" />,
      imageAlign: "left",
      visual: (
        <div className="w-full h-full min-h-[300px] md:min-h-[450px] liquid-glass rounded-3xl border border-white/5 relative overflow-hidden flex items-center justify-center bg-black">
          <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,1)_10px,rgba(255,255,255,1)_20px)]" />
          <motion.div 
            animate={{ rotateY: [0, 360] }} 
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] flex items-center justify-center bg-white/[0.02] backdrop-blur-3xl relative z-10"
          >
            <Shield className="w-12 h-12 text-white/40" />
          </motion.div>
        </div>
      )
    }
  ];

  return (
    <section className="bg-black py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24 md:space-y-40">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex border border-white/10 rounded-full px-4 py-1.5 mb-6 bg-white/[0.02]">
            <span className="text-white/60 text-xs font-medium tracking-widest uppercase">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white tracking-tight mb-6">
            How we empower you
          </h2>
          <p className="text-white/50 text-base md:text-lg">
            Everything you need to master your focus, connect with your team, and accelerate your vision.
          </p>
        </div>

        {features.map((feature, index) => (
          <div 
            key={feature.title} 
            className={`flex flex-col gap-12 md:gap-20 items-center ${
              feature.imageAlign === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: feature.imageAlign === 'left' ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              {feature.visual}
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: feature.imageAlign === 'left' ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center backdrop-blur-md">
                  {feature.icon}
                </div>
                <p className="uppercase tracking-widest text-white/50 text-xs font-semibold">
                  {feature.subtitle}
                </p>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl text-white tracking-tight font-medium mb-6">
                {feature.title}
              </h3>
              <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-lg">
                {feature.description}
              </p>
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  );
}
