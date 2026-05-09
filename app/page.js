"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Globe, ArrowRight, Twitter, Instagram } from "lucide-react";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";

// Import sections
import AboutSection from "../components/landing/AboutSection";
import FeaturedVideoSection from "../components/landing/FeaturedVideoSection";
import PhilosophySection from "../components/landing/PhilosophySection";
import ServicesSection from "../components/landing/ServicesSection";

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
        <header className="relative z-20 px-6 py-6 w-full">
          <nav className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
            {/* Left */}
            <div className="flex items-center">
              <Globe className="text-white w-6 h-6 mr-3" />
              <Link href="/" className="text-white font-semibold text-lg">
                WorkWise
              </Link>
              <div className="hidden md:flex items-center gap-8 ml-8">
                <Link href="#features" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                  Features
                </Link>
                <Link href="#pricing" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                  Pricing
                </Link>
                <Link href="#about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                  About
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <SignedOut>
                <SignUpButton mode="modal">
                  <button className="text-white text-sm font-medium hover:text-white/80 transition-colors cursor-pointer">
                    Sign Up
                  </button>
                </SignUpButton>
                <SignUpButton mode="modal">
                  <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium cursor-pointer">
                    Login
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard" className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium">
                  Dashboard
                </Link>
              </SignedIn>
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-12 mt-4"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Where <em className="italic font-normal text-white/70">careers</em> rise <br className="hidden md:inline" /> through <em className="italic font-normal text-white/70">clarity.</em>
          </h1>



        </main>
      </section>

      {/* Aggregate Other Sections */}
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
    </div>
  );
}