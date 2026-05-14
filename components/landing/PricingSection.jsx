"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      description: "For individuals looking to master their personal workflow and tasks.",
      price: "$0",
      period: "Forever",
      features: [
        "Up to 3 active projects",
        "Standard task management",
        "7-day history retention",
        "Community support"
      ],
      buttonText: "Start for free",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Professional",
      description: "For ambitious teams driving impact with deep collaboration tools.",
      price: "$29",
      period: "Per user / month",
      features: [
        "Unlimited projects & history",
        "Advanced workflow automation",
        "Deep performance analytics",
        "Priority 24/7 support",
        "Custom API integrations"
      ],
      buttonText: "Start 14-day trial",
      buttonVariant: "solid",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For organizations requiring bespoke security and dedicated infrastructure.",
      price: "Custom",
      period: "Annual billing",
      features: [
        "Everything in Professional",
        "Dedicated success manager",
        "SSO & SAML authentication",
        "On-premise deployment options",
        "99.99% Uptime SLA"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="relative bg-black py-16 md:py-20 px-6 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.02)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 flex flex-col items-center"
        >
          <div className="border border-white/10 rounded-full px-4 py-1.5 mb-6 flex items-center justify-center bg-white/[0.02]">
            <span className="text-white/60 text-xs font-medium tracking-widest uppercase">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6">
            Invest in <em className="italic text-white/70 font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>clarity.</em>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Simple, transparent pricing designed to scale with your ambition. No hidden fees, just tools that empower your best work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`relative flex flex-col rounded-3xl p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 ${
                plan.popular 
                  ? 'bg-white/[0.04] border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.03)]' 
                  : 'bg-white/[0.01] border border-white/5 hover:border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
              )}
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl text-white font-medium tracking-tight">{plan.name}</h3>
                  {plan.popular && (
                    <span className="text-[10px] uppercase tracking-widest text-black bg-white px-3 py-1 rounded-full font-bold">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className="text-white/50 text-sm leading-relaxed h-10">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-2 border-b border-white/10 pb-8">
                <span className="text-5xl text-white tracking-tighter font-medium">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-white/40 text-sm font-medium">/mo</span>}
              </div>

              <div className="flex-1 mb-8">
                <p className="text-white/80 text-sm font-medium mb-4">What's included:</p>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                      <Check className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-3.5 rounded-full text-sm font-medium transition-all duration-300 ${
                plan.buttonVariant === 'solid'
                  ? 'bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                  : 'bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/40'
              }`}>
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
