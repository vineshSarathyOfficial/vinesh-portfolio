"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/portfolio";
import { getHashFromHref, scrollToSection } from "@/lib/smoothScroll";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const timer = window.setTimeout(() => scrollToSection(hash), 400);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "Experience", href: "/#experience" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const sectionId = getHashFromHref(href);
    if (!sectionId || pathname !== "/") return;

    event.preventDefault();
    setIsOpen(false);

    requestAnimationFrame(() => {
      scrollToSection(sectionId);
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled ? "border-b border-white/8 bg-canvas-deep/70 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="font-sans text-sm font-semibold tracking-tight text-[#f5f5f7]">
            {profile.name.split(" ")[0]}
            <span className="text-gradient">.</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
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
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-full border border-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`h-px w-4 bg-[#f5f5f7] transition-all ${isOpen ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-[#f5f5f7] transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-px w-4 bg-[#f5f5f7] transition-all ${isOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      <div
        className={`section-deep fixed inset-0 z-40 flex flex-col justify-center px-8 transition-all duration-500 md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              style={{ transitionDelay: isOpen ? `${idx * 60}ms` : "0ms" }}
              className={`text-4xl font-semibold text-[#f5f5f7] transition-all ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {pathname === "/" && (
          <a
            href={`mailto:${profile.socials.email}`}
            onClick={() => setIsOpen(false)}
            className="cinematic-btn-primary mt-12 inline-flex w-fit"
          >
            Get in touch
          </a>
        )}
      </div>
    </>
  );
}

export default Navbar;
