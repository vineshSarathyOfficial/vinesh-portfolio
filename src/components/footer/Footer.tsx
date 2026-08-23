"use client";

import React from "react";
import Link from "next/link";
import { profile } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-canvas border-t border-hairline py-12 md:py-16 text-body font-sans text-sm mt-auto">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Brand details */}
        <div className="md:col-span-6 space-y-3">
          <Link
            href="/"
            className="font-sans font-semibold text-base text-ink tracking-tight hover:opacity-85 transition-opacity"
          >
            {profile.name}
          </Link>
          <p className="text-mute text-xs max-w-xs leading-normal">
            Full Stack Engineer focusing on high-performance web architectures, end-to-end features, and clean user experiences.
          </p>
          <div className="text-faint text-xs">
            © {currentYear} {profile.name}. All rights reserved.
          </div>
        </div>

        {/* Navigation links */}
        <div className="md:col-span-3 space-y-3">
          <div className="font-mono text-xs uppercase tracking-wider text-ink font-semibold">
            Navigation
          </div>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/#projects" className="text-body hover:text-ink transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#experience" className="text-body hover:text-ink transition-colors">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-body hover:text-ink transition-colors">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact details */}
        <div className="md:col-span-3 space-y-3">
          <div className="font-mono text-xs uppercase tracking-wider text-ink font-semibold">
            Connect
          </div>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body hover:text-ink transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body hover:text-ink transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.socials.email}`} className="text-body hover:text-ink transition-colors">
                Email Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Small design indicator */}
      <div className="mx-auto max-w-6xl px-6 mt-8 pt-8 border-t border-hairline flex flex-col sm:flex-row justify-between items-center text-[10px] text-faint font-mono">
        <div>ENVIRONMENT: PRODUCTION-READY</div>
        <div className="mt-1 sm:mt-0">LOCATED IN {profile.location.toUpperCase()}</div>
      </div>
    </footer>
  );
}

export default Footer;
