"use client";

import { motion } from "framer-motion";
import { Layers, Users } from "lucide-react";

export default function FeatureZigZag() {
  const features = [
    {
      title: "Intelligent Organization",
      subtitle: "Workspace",
      description: "We provide intuitive systems that categorize your projects, surface what matters most, and keep your daily workflow completely friction-free. Master your workflow with absolute clarity.",
      icon: <Layers className="w-5 h-5 text-white" />,
      imageAlign: "left",
      visual: (
        <div className="w-full h-full min-h-[300px] md:min-h-[450px] rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
              type="video/mp4"
            />
          </video>
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
        <div className="w-full h-full min-h-[300px] md:min-h-[450px] rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
              type="video/mp4"
            />
          </video>
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
