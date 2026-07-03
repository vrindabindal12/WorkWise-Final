import React from "react";
import Link from "next/link";
import { Globe, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="w-6 h-6 text-white" />
              <span className="text-xl font-semibold tracking-tight">WorkWise</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
              An AI-native career platform that eliminates guesswork, bringing radical clarity to your job search and accelerating your professional growth.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-medium mb-6">Product</h3>
            <ul className="space-y-4">
              <li><Link href="#features" className="text-white/60 hover:text-white text-sm transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="text-white/60 hover:text-white text-sm transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Dashboard</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Resume Builder</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-medium mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Career Guides</Link></li>
              <li><Link href="#faq" className="text-white/60 hover:text-white text-sm transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-medium mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-white/60 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} WorkWise. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacy</Link>
            <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Terms</Link>
            <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
