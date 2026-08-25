"use client";

import { philosophies, profile, currentFocus } from "@/data/portfolio";
import { TextScrub } from "@/components/ui/TextScrub";

export function About() {
  return (
    <section id="about" className="section-elevated section-raised-top-border relative px-6 py-32 md:px-12 md:py-40" aria-label="About">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.35em]"><span className="accent-label">About</span></p>
          <h2 className="mt-3 font-sans text-4xl font-semibold tracking-tight text-[#f5f5f7] md:text-5xl">
            Built with intention.
          </h2>
          <div className="mt-8">
            <TextScrub className="text-base leading-relaxed text-[#a1a1a6] md:text-lg">
              {profile.bio}
            </TextScrub>
          </div>
        </div>

        <div className="space-y-8">
          <div className="cinematic-glass rounded-2xl p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#86868b]">Currently</p>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {(["learning", "building", "exploring"] as const).map((key) => (
                <div key={key}>
                  <h4 className="accent-label font-mono text-[10px] uppercase tracking-wider">{key}</h4>
                  <ul className="mt-2 space-y-1 text-sm text-[#d1d1d6]">
                    {currentFocus[key].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {philosophies.map((phil, idx) => (
              <div key={phil.title} className="cinematic-glass rounded-xl p-5">
                <span className="font-mono text-[10px] text-[#48484a]">0{idx + 1}</span>
                <h3 className="mt-2 font-semibold text-[#f5f5f7]">{phil.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#a1a1a6]">{phil.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
