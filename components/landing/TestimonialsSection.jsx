"use client";

import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "WorkWise completely eliminated the noise from our daily operations. We finally have absolute clarity on what needs to be done.",
      author: "Sarah Jenkins",
      role: "Product Lead"
    },
    {
      quote: "The velocity at which our team executes now is staggering. It's the most frictionless workspace we've ever used.",
      author: "David Chen",
      role: "Engineering Manager"
    },
    {
      quote: "Radical clarity isn't just a marketing term here. It actually changed how we approach our most complex projects.",
      author: "Elena Rodriguez",
      role: "Operations Director"
    },
    {
      quote: "An uncompromising tool for ambitious minds. The liquid glass aesthetic makes deep work feel like a premium experience.",
      author: "Marcus Thorne",
      role: "Creative Director"
    },
    {
      quote: "It forces you to focus on what matters. We've cut our meeting times in half simply by tracking everything in WorkWise.",
      author: "Priya Patel",
      role: "Startup Founder"
    }
  ];

  // Duplicate for seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-black py-20 md:py-32 overflow-hidden border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 mb-12 md:mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            Trusted by <em className="italic text-white/70 font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>visionaries.</em>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative z-10 w-full overflow-hidden flex">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex gap-6 px-3 w-max"
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="liquid-glass rounded-3xl p-8 w-[320px] md:w-[450px] flex-shrink-0 flex flex-col justify-between hover:bg-white/[0.03] transition-colors"
            >
              <p className="text-white/80 text-lg md:text-xl leading-relaxed tracking-tight mb-8">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-white font-medium text-sm">{testimonial.author}</p>
                <p className="text-white/40 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
}
