"use client";

import React from "react";
import Link from "next/link";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import { features } from "../data/features";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground flex flex-col">
      {/* Fullscreen Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Fullscreen Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>

        {/* Navigation Bar */}
        <header className="relative z-10 w-full">
          <nav className="flex flex-row justify-between items-center px-8 py-6 max-w-7xl mx-auto">
            {/* Logo */}
            <Link href="/" className="text-3xl tracking-tight text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
              WorkWise<sup className="text-xs">®</sup>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm text-foreground transition-colors font-medium">
                Home
              </Link>
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#journal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Journal
              </a>
              <a href="#reach-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Reach Us
              </a>
            </div>

            {/* CTA Button */}
            <div>
              <SignedOut>
                <SignUpButton mode="modal">
                  <button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform duration-200 cursor-pointer">
                    Begin Journey
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard">
                  <button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform duration-200 cursor-pointer">
                    Begin Journey
                  </button>
                </Link>
              </SignedIn>
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-20 pb-56 max-w-7xl mx-auto w-full">
          <h1
            className="text-[43px] sm:text-[65px] md:text-[86px] leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground animate-fade-rise"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Where <em className="not-italic text-muted-foreground">careers</em> rise <br className="hidden sm:inline" />
            <em className="not-italic text-muted-foreground">through clarity.</em>
          </h1>

          <p className="text-sm sm:text-base max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
            We&apos;re building intelligent tools for ambitious minds, bold creators, and quiet rebels.
          </p>
        </main>

        {/* Spacer to push content to middle */}
        <div className="h-20 w-full pointer-events-none relative z-10" />
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 w-full py-24 sm:py-32 bg-background border-t border-border/40">
        <div className="max-w-7xl mx-auto px-8">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-center mb-16 font-normal tracking-tight text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Features designed for your professional evolution.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="liquid-glass rounded-3xl p-8 flex flex-col items-start hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="mb-6 p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3
                  className="text-2xl font-normal mb-3 text-foreground"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}