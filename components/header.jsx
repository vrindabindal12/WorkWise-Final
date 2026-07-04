"use client";

import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
  Globe,
  MessageSquare,
  Video,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";


const Header = ({ user }) => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <>
      <header className="fixed top-0 w-full z-50 px-4 py-2 md:py-4 pointer-events-none">
        <nav className="liquid-glass rounded-full max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between pointer-events-auto">
          <Link href="/" className="flex items-center text-white">
            <Globe className="w-5 h-5 mr-2 shrink-0" />
            <span className="font-semibold text-lg hidden sm:inline">
              WorkWise
            </span>
          </Link>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 md:space-x-4">
              <Link href="/chat">
                <Button
                  variant="outline"
                  className="hidden text-xs md:inline-flex items-center gap-2 hover:text-black hover:bg-white transition-all duration-300 h-8 px-3"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  Live Chat
                </Button>
                <Button variant="ghost" className="md:hidden w-8 h-8 p-0">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/guidance">
                <Button
                  variant="outline"
                  className="hidden text-xs md:inline-flex items-center gap-2 hover:text-black hover:bg-white transition-all duration-300 h-8 px-3"
                >
                  <Video className="h-3.5 w-3.5" />
                  Video Sessions
                </Button>
                <Button variant="ghost" className=" md:hidden w-8 h-8 p-0">
                  <Video className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="hidden md:inline-flex text-xs items-center gap-2 hover:text-black hover:bg-white transition-all duration-300 h-8 px-3"
                >
                  <TrendingUp className="h-3.5 w-3.5" />
                  Industry Insights
                </Button>
                <Button variant="ghost" className="md:hidden w-8 h-8 p-0">
                  <TrendingUp className="h-4 w-4" />
                </Button>
              </Link>

              {/* Growth Tools Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-xs hover:text-black hover:bg-white transition-all duration-300 h-8 px-3"
                  >
                    <StarsIcon className="h-3.5 w-3.5" />
                    <span className="hidden md:inline">Growth Tools</span>
                    <ChevronDown className="h-3.5 w-3.5 md:ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/resume" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Build Resume
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/ai-cover-letter" className="flex items-center gap-2">
                      <PenBox className="h-4 w-4" />
                      Cover Letter
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/interview" className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      Quiz Preparation
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
