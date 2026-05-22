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
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
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
      <header className="fixed top-0 w-full z-50 px-4 py-4 md:py-6 pointer-events-none">
        <nav className="liquid-glass rounded-full max-w-7xl mx-auto px-6 py-3 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center">
            <Globe className="text-white w-6 h-6 mr-3" />
            <Link href="/" className="text-white font-semibold text-lg">
              WorkWise
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <SignedIn>
              <Link href="/chat">
                <Button
                  variant="outline"
                  className="hidden text-xs md:inline-flex items-center gap-2 hover:text-black hover:bg-white transition-all duration-300"
                >
                  <MessageSquare className="h-4 w-4" />
                  Live Chat
                </Button>
                <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/guidance">
                <Button
                  variant="outline"
                  className="hidden text-xs md:inline-flex items-center gap-2 hover:text-black hover:bg-white transition-all duration-300"
                >
                  <Video className="h-4 w-4" />
                  Video Sessions
                </Button>
                <Button variant="ghost" className=" md:hidden w-10 h-10 p-0">
                  <Video className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="hidden md:inline-flex text-xs items-center gap-2 hover:text-black hover:bg-white transition-all duration-300"
                >
                  <TrendingUp className="h-4 w-4" />
                  Industry Insights
                </Button>
                <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                  <TrendingUp className="h-4 w-4" />
                </Button>
              </Link>

              {/* Growth Tools Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-xs hover:text-black hover:bg-white transition-all duration-300"
                  >
                    <StarsIcon className="h-4 w-4" />
                    <span className="hidden md:inline">Growth Tools</span>
                    <ChevronDown className="h-4 w-4 md:ml-1" />
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
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <Button variant="outline">Sign In</Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                    userButtonPopoverCard: "shadow-xl",
                    userPreviewMainIdentifier: "font-semibold",
                  },
                }}
                afterSignOutUrl="/"
              />
            </SignedIn>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
