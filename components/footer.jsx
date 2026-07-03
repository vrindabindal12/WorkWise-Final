"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
      <footer className="bg-[#1a1a1a] py-12 relative z-10">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WorkWise. All rights reserved.</p>
        </div>
      </footer>
  );
}
