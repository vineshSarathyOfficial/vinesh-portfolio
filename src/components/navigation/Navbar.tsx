"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { profile } from "@/data/portfolio";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // Handle mounting state to avoid hydration mismatch
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "About", href: "/#about" },
  ];

  const socialLinks = [
    { name: "GitHub", href: profile.socials.github, icon: Github },
    { name: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
    { name: "Email", href: `mailto:${profile.socials.email}`, icon: Mail },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-250 ${
          isScrolled
            ? "border-b border-hairline bg-canvas/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <Link
          href="/"
          className="flex items-center space-x-2 font-sans font-bold text-base text-ink tracking-tight hover:opacity-85 transition-opacity"
        >
          <svg
            viewBox="0 0 32 32"
            className="w-5.5 h-5.5 text-link transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 2L30 16L16 30L2 16Z" strokeWidth="2" strokeLinejoin="round" />
            <path d="M10 11L16 21L21 11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 11H19.5C20.5 11 21 11.5 21 12.5C21 13.5 20.5 14 19.5 14H16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="tracking-tight">
            vinesh<span className="text-link">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans text-sm transition-colors px-3 py-1.5 rounded-full ${
                  isActive
                    ? "text-ink bg-hairline-soft font-medium"
                    : "text-body hover:text-ink hover:bg-hairline-soft"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls (Socials + Theme Toggle) */}
        <div className="hidden md:flex items-center space-x-2">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="w-8 h-8 rounded-full flex items-center justify-center text-body hover:text-ink hover:bg-hairline-soft transition-all"
              >
                <Icon size={16} />
              </a>
            );
          })}

          <div className="w-[1px] h-4 bg-hairline mx-1" />

          {mounted && (
            <Button
              variant="icon-circular"
              onClick={toggleTheme}
              className="w-8 h-8"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </Button>
          )}
        </div>

        {/* Mobile controls (Menu Toggle + Theme Switcher) */}
        <div className="flex md:hidden items-center space-x-2">
          {mounted && (
            <Button
              variant="icon-circular"
              onClick={toggleTheme}
              className="w-8 h-8 z-50 relative"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </Button>
          )}

          {/* Morphing Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 h-8 flex flex-col justify-center items-center relative focus:outline-none z-50 cursor-pointer rounded-full border border-hairline bg-canvas-elevated hover:bg-hairline-soft transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-3.5 h-0.5 bg-ink absolute transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-1"}`} />
            <span className={`w-3.5 h-0.5 bg-ink absolute transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-3.5 h-0.5 bg-ink absolute transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-1"}`} />
          </button>
        </div>
      </div>
    </header>

    {/* Fullscreen Mobile Menu Overlay */}
    <div
      className={`fixed inset-0 z-40 bg-canvas md:hidden transition-all duration-500 ease-out flex flex-col justify-between p-8 ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
        {/* Header spacer mirroring the actual navbar height */}
        {/* <div className="h-16 flex items-center justify-between">
          <span className="font-sans font-semibold text-lg text-ink tracking-tight">
            {profile.name}
          </span>
        </div> */}

        {/* Navigation links with slide-in stagger */}
        <nav className="flex flex-col space-y-8 my-auto">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${idx * 80}ms` : "0ms" }}
              className={`font-sans text-4xl font-bold tracking-tight text-ink hover:text-link transition-all duration-500 transform ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Footer info blocks inside Mobile Drawer */}
        <div className="border-t border-hairline pt-6 space-y-5">
          <div className="flex flex-col space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-mute">Direct Connect:</span>
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  style={{ transitionDelay: isOpen ? `${(navLinks.length + idx) * 60}ms` : "0ms" }}
                  className={`flex items-center space-x-3 text-sm text-body hover:text-ink transition-all duration-500 transform ${
                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                >
                  <Icon size={18} className="text-link" />
                  <span>{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
