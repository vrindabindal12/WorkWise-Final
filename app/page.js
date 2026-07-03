"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Globe, ArrowRight, Twitter, Instagram } from "lucide-react";
// Import sections
import AboutSection from "../components/landing/AboutSection";
import FeaturesGridSection from "../components/landing/FeaturesGridSection";
import FeatureZigZag from "../components/landing/FeatureZigZag";
import PricingSection from "../components/landing/PricingSection";
import LogoTicker from "../components/landing/LogoTicker";
import FaqSection from "../components/landing/FaqSection";
import Footer from "../components/landing/Footer";

export default function LandingPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let fadeFrame;

    // Smooth crossfade to black
    const handleTimeUpdate = () => {
      const remainingTime = video.duration - video.currentTime;
      if (remainingTime <= 0.55 && video.style.opacity === "1") {
        let start;
        const fadeOut = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const opacity = Math.max(0, 1 - progress / 500);
          video.style.opacity = opacity.toString();
          if (progress < 500) {
            fadeFrame = requestAnimationFrame(fadeOut);
          }
        };
        fadeFrame = requestAnimationFrame(fadeOut);
      }
    };

    // Reset and fade back in
    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(console.error);

        let start;
        const fadeIn = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const opacity = Math.min(1, progress / 500);
          video.style.opacity = opacity.toString();
          if (progress < 500) {
            fadeFrame = requestAnimationFrame(fadeIn);
          }
        };
        fadeFrame = requestAnimationFrame(fadeIn);
      }, 100);
    };

    // Fade in on initial load
    const handleCanPlay = () => {
      if (video.style.opacity === "0" || !video.style.opacity) {
        let start;
        const fadeIn = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const opacity = Math.min(1, progress / 500);
          video.style.opacity = opacity.toString();
          if (progress < 500) {
            fadeFrame = requestAnimationFrame(fadeIn);
          }
        };
        fadeFrame = requestAnimationFrame(fadeIn);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("canplay", handleCanPlay);

    // Initial opacity
    video.style.opacity = "0";

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("canplay", handleCanPlay);
      if (fadeFrame) cancelAnimationFrame(fadeFrame);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* SECTION 1 -- HERO */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          muted
          autoPlay
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
            type="video/mp4"
          />
        </video>

        {/* Navbar */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:py-6 w-full pointer-events-none">
          <nav className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex justify-between items-center pointer-events-auto">
            {/* Left */}
            <div className="flex items-center">
              <Globe className="text-white w-6 h-6 mr-3" />
              <Link href="/" className="text-white font-semibold text-lg">
                WorkWise
              </Link>
              <div className="hidden md:flex items-center gap-8 ml-8">
                <Link href="#about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                  About
                </Link>
                <Link href="#features" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                  Features
                </Link>
                <Link href="#pricing" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                  Pricing
                </Link>
                <Link href="#faq" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                  FAQ
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer">
                Dashboard
              </Link>
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl text-white tracking-tight whitespace-nowrap mb-3 mt-4"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Where <em className="italic font-normal text-white/70">careers</em> rise through <em className="italic font-normal text-white/70">intelligence.</em>
          </h1>

          <p className="text-white/60 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            An AI-native career platform that eliminates guesswork, bringing radical clarity to your job search and accelerating your professional growth.
          </p>
        </main>

        {/* Bottom Right CTAs */}
        <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-20 flex flex-col sm:flex-row items-end sm:items-center gap-4">
          <Link href="/dashboard" className="bg-white text-black px-8 py-3.5 rounded-full font-medium hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2">
            Go to Dashboard <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <LogoTicker />

      {/* Aggregate Other Sections */}
      <AboutSection />
      <FeaturesGridSection />
      <FeatureZigZag />

      <PricingSection />
      <FaqSection />
      <Footer />
    </div>
  );
}