"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { profile } from "@/data/portfolio";
import { getHashFromHref, scrollToSection, unlockPageScroll } from "@/lib/smoothScroll";

const NAV_SECTIONS = [
  { name: "Work", id: "work" },
  { name: "Experience", id: "experience" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const scrollLockY = useRef(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    scrollLockY.current = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollLockY.current}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      unlockPageScroll();
      window.scrollTo(0, scrollLockY.current);
    };
  }, [isOpen]);

  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const timer = window.setTimeout(() => scrollToSection(hash), 400);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const navigateToSection = useCallback(
    (sectionId: string) => {
      if (pathname !== "/") {
        closeMenu();
        router.push(`/#${sectionId}`);
        return;
      }

      closeMenu();

      window.setTimeout(() => {
        scrollToSection(sectionId);
      }, 120);
    },
    [pathname, router, closeMenu],
  );

  const handleDesktopNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const sectionId = getHashFromHref(href);
    if (!sectionId || pathname !== "/") return;

    event.preventDefault();
    navigateToSection(sectionId);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full transition-all duration-500 ${isOpen ? "z-[70]" : "z-50"} ${
          isScrolled || isOpen ? "border-b border-white/8 bg-canvas-deep/70 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="font-sans text-sm font-semibold tracking-tight text-[#f5f5f7]">
            {profile.name.split(" ")[0]}
            <span className="text-gradient">.</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_SECTIONS.map((link) => (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                onClick={(event) => handleDesktopNavClick(event, `/#${link.id}`)}
                className="rounded-full px-4 py-1.5 font-sans text-sm text-[#a1a1a6] transition-colors hover:bg-white/5 hover:text-[#f5f5f7]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <a href={`mailto:${profile.socials.email}`} className="cinematic-btn-primary hidden !h-9 !px-5 !text-sm md:inline-flex">
            Get in touch
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="relative z-[80] flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-full border border-white/10 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className={`h-px w-4 bg-[#f5f5f7] transition-all ${isOpen ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-[#f5f5f7] transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-px w-4 bg-[#f5f5f7] transition-all ${isOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="section-deep fixed inset-0 z-[60] flex flex-col justify-center px-8 md:hidden">
          <nav className="flex flex-col gap-6">
            {NAV_SECTIONS.map((link, idx) => (
              <button
                key={link.id}
                type="button"
                onClick={() => navigateToSection(link.id)}
                style={{ transitionDelay: `${idx * 60}ms` }}
                className="touch-manipulation text-left text-4xl font-semibold text-[#f5f5f7] transition-all"
              >
                {link.name}
              </button>
            ))}
          </nav>
          <a
            href={`mailto:${profile.socials.email}`}
            onClick={closeMenu}
            className="cinematic-btn-primary mt-12 inline-flex w-fit touch-manipulation"
          >
            Get in touch
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;
