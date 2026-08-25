"use client";

import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="section-deep section-raised-top-border border-t border-white/6 px-6 py-10 text-center">
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#48484a]">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </p>
    </footer>
  );
}

export default Footer;
