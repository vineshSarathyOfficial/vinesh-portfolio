"use client";

import React, { useState, useEffect } from "react";
import { Sliders, RotateCcw, Palette, Layout, Type, Check } from "lucide-react";

type ThemeOption = "geist" | "nord" | "solarized" | "cyberpunk";
type RadiusOption = "sharp" | "rounded" | "pill";
type AccentOption = "default" | "violet" | "emerald" | "crimson" | "amber";
type FontOption = "sans" | "mono" | "serif";
type FontColorOption = "default" | "navy" | "sepia" | "emerald";

export function TokenStudio() {
  const [theme, setTheme] = useState<ThemeOption>("geist");
  const [radius, setRadius] = useState<RadiusOption>("rounded");
  const [accent, setAccent] = useState<AccentOption>("default");
  const [font, setFont] = useState<FontOption>("sans");
  const [fontColor, setFontColor] = useState<FontColorOption>("default");

  // Apply Theme class overrides
  useEffect(() => {
    const root = document.documentElement;
    // Remove previous theme classes
    root.classList.remove("theme-nord", "theme-solarized", "theme-cyberpunk");

    if (theme !== "geist") {
      root.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  // Apply Border Radius variable properties
  useEffect(() => {
    const root = document.documentElement;
    if (radius === "sharp") {
      root.style.setProperty("--radius-sm-val", "0px");
      root.style.setProperty("--radius-md-val", "0px");
      root.style.setProperty("--radius-lg-val", "0px");
      root.style.setProperty("--radius-pill-category-val", "0px");
      root.style.setProperty("--radius-pill-val", "0px");
    } else if (radius === "pill") {
      root.style.setProperty("--radius-sm-val", "10px");
      root.style.setProperty("--radius-md-val", "20px");
      root.style.setProperty("--radius-lg-val", "30px");
      root.style.setProperty("--radius-pill-category-val", "64px");
      root.style.setProperty("--radius-pill-val", "100px");
    } else {
      // Default
      root.style.removeProperty("--radius-sm-val");
      root.style.removeProperty("--radius-md-val");
      root.style.removeProperty("--radius-lg-val");
      root.style.removeProperty("--radius-pill-category-val");
      root.style.removeProperty("--radius-pill-val");
    }
  }, [radius]);

  // Apply Accent variable overrides
  useEffect(() => {
    const root = document.documentElement;
    if (accent === "default") {
      root.style.removeProperty("--link");
      root.style.removeProperty("--link-deep");
      root.style.removeProperty("--link-soft");
      root.style.removeProperty("--spotlight-color");
    } else if (accent === "violet") {
      root.style.setProperty("--link", "#7928ca");
      root.style.setProperty("--link-deep", "#4c1d95");
      root.style.setProperty("--link-soft", "#f5f3ff");
      root.style.setProperty("--spotlight-color", "rgba(121, 40, 202, 0.08)");
    } else if (accent === "emerald") {
      root.style.setProperty("--link", "#10b981");
      root.style.setProperty("--link-deep", "#047857");
      root.style.setProperty("--link-soft", "#ecfdf5");
      root.style.setProperty("--spotlight-color", "rgba(16, 185, 129, 0.08)");
    } else if (accent === "crimson") {
      root.style.setProperty("--link", "#e11d48");
      root.style.setProperty("--link-deep", "#be123c");
      root.style.setProperty("--link-soft", "#fff1f2");
      root.style.setProperty("--spotlight-color", "rgba(225, 29, 72, 0.08)");
    } else if (accent === "amber") {
      root.style.setProperty("--link", "#f59e0b");
      root.style.setProperty("--link-deep", "#d97706");
      root.style.setProperty("--link-soft", "#fef3c7");
      root.style.setProperty("--spotlight-color", "rgba(245, 158, 11, 0.08)");
    }
  }, [accent]);

  // Apply Font custom overrides
  useEffect(() => {
    const root = document.documentElement;
    if (font === "mono") {
      root.style.setProperty("--font-sans-val", "var(--font-geist-mono), ui-monospace, monospace");
    } else if (font === "serif") {
      root.style.setProperty("--font-sans-val", "Georgia, Cambria, serif");
    } else {
      root.style.removeProperty("--font-sans-val");
    }
  }, [font]);

  // Apply Font Color overrides
  useEffect(() => {
    const root = document.documentElement;
    if (fontColor === "default") {
      root.style.removeProperty("--font-ink-override");
      root.style.removeProperty("--font-body-override");
      root.style.removeProperty("--font-ink-override-dark");
      root.style.removeProperty("--font-body-override-dark");
    } else if (fontColor === "navy") {
      root.style.setProperty("--font-ink-override", "#0f172a");
      root.style.setProperty("--font-body-override", "#334155");
      root.style.setProperty("--font-ink-override-dark", "#cbd5e1");
      root.style.setProperty("--font-body-override-dark", "#94a3b8");
    } else if (fontColor === "sepia") {
      root.style.setProperty("--font-ink-override", "#433422");
      root.style.setProperty("--font-body-override", "#5c4b37");
      root.style.setProperty("--font-ink-override-dark", "#fdf6e3");
      root.style.setProperty("--font-body-override-dark", "#93a1a1");
    } else if (fontColor === "emerald") {
      root.style.setProperty("--font-ink-override", "#064e3b");
      root.style.setProperty("--font-body-override", "#0f766e");
      root.style.setProperty("--font-ink-override-dark", "#10b981");
      root.style.setProperty("--font-body-override-dark", "#34d399");
    }
  }, [fontColor]);

  // Reset Studio state
  const handleReset = () => {
    setTheme("geist");
    setRadius("rounded");
    setAccent("default");
    setFont("sans");
    setFontColor("default");
  };



  return (
    <div className="w-full max-w-md bg-canvas-elevated border border-hairline rounded-md shadow-sm overflow-hidden flex flex-col font-sans text-xs">
      {/* Panel Header */}
      <div className="bg-canvas border-b border-hairline px-4 h-10 flex items-center justify-between">
        <span className="font-mono text-xs text-ink font-semibold flex items-center space-x-1.5">
          <Sliders size={14} className="text-link animate-pulse" />
          <span>Design Token Studio</span>
        </span>
        <button
          onClick={handleReset}
          className="font-mono text-[9px] text-mute hover:text-ink flex items-center space-x-1 uppercase transition-colors"
          title="Reset back to default"
        >
          <RotateCcw size={10} />
          <span>Reset</span>
        </button>
      </div>

      <div className="p-5 space-y-6">

        {/* Row 1: Themes */}
        <div className="space-y-2">
          <div className="flex items-center space-x-1.5 font-mono text-[10px] uppercase text-mute tracking-wider">
            <Palette size={12} />
            <span>Color Palette Themes</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {(["geist", "nord", "solarized", "cyberpunk"] as ThemeOption[]).map((opt) => (
              <button
                key={opt}
                onClick={() => setTheme(opt)}
                className={`py-2 px-1 rounded-sm border capitalize text-center transition-all ${
                  theme === opt
                    ? "border-link bg-link-soft/20 text-link font-semibold"
                    : "border-hairline hover:bg-hairline-soft text-body"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: Accent Overrides */}
        <div className="space-y-2">
          <div className="flex items-center space-x-1.5 font-mono text-[10px] uppercase text-mute tracking-wider">
            <Sliders size={12} />
            <span>Accent Highlight</span>
          </div>
          <div className="flex items-center space-x-2 p-1.5 bg-canvas/30 border border-hairline rounded-sm justify-between">
            <span className="text-[10px] text-mute">Override Accent:</span>
            <div className="flex items-center space-x-3 pr-1">
              {/* Default Blue */}
              <button
                onClick={() => setAccent("default")}
                className="w-5 h-5 rounded-full bg-[#0070f3] border border-hairline flex items-center justify-center relative cursor-pointer"
                title="Default Blue"
              >
                {accent === "default" && <Check size={10} className="text-white" />}
              </button>

              {/* Violet */}
              <button
                onClick={() => setAccent("violet")}
                className="w-5 h-5 rounded-full bg-[#7928ca] border border-hairline flex items-center justify-center relative cursor-pointer"
                title="Violet"
              >
                {accent === "violet" && <Check size={10} className="text-white" />}
              </button>

              {/* Emerald */}
              <button
                onClick={() => setAccent("emerald")}
                className="w-5 h-5 rounded-full bg-[#10b981] border border-hairline flex items-center justify-center relative cursor-pointer"
                title="Emerald"
              >
                {accent === "emerald" && <Check size={10} className="text-white" />}
              </button>

              {/* Crimson */}
              <button
                onClick={() => setAccent("crimson")}
                className="w-5 h-5 rounded-full bg-[#e11d48] border border-hairline flex items-center justify-center relative cursor-pointer"
                title="Crimson"
              >
                {accent === "crimson" && <Check size={10} className="text-white" />}
              </button>

              {/* Amber */}
              <button
                onClick={() => setAccent("amber")}
                className="w-5 h-5 rounded-full bg-[#f59e0b] border border-hairline flex items-center justify-center relative cursor-pointer"
                title="Amber"
              >
                {accent === "amber" && <Check size={10} className="text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Row 2.5: Typography Colors */}
        <div className="space-y-2">
          <div className="flex items-center space-x-1.5 font-mono text-[10px] uppercase text-mute tracking-wider">
            <Palette size={12} />
            <span>Typography Color</span>
          </div>
          <div className="flex items-center space-x-2 p-1.5 bg-canvas/30 border border-hairline rounded-sm justify-between">
            <span className="text-[10px] text-mute">Override Font Color:</span>
            <div className="flex items-center space-x-3 pr-1">
              {/* Default Ink */}
              <button
                onClick={() => setFontColor("default")}
                className="w-5 h-5 rounded-full bg-ink border border-hairline flex items-center justify-center relative cursor-pointer"
                title="Default Monochrome"
              >
                {fontColor === "default" && <Check size={10} className="text-canvas" />}
              </button>

              {/* Navy Slate */}
              <button
                onClick={() => setFontColor("navy")}
                className="w-5 h-5 rounded-full bg-[#3b4252] border border-hairline flex items-center justify-center relative cursor-pointer"
                title="Navy Slate"
              >
                {fontColor === "navy" && <Check size={10} className="text-white" />}
              </button>

              {/* Sepia Brown */}
              <button
                onClick={() => setFontColor("sepia")}
                className="w-5 h-5 rounded-full bg-[#5c4b37] border border-hairline flex items-center justify-center relative cursor-pointer"
                title="Warm Sepia"
              >
                {fontColor === "sepia" && <Check size={10} className="text-white" />}
              </button>

              {/* Emerald Green */}
              <button
                onClick={() => setFontColor("emerald")}
                className="w-5 h-5 rounded-full bg-[#10b981] border border-hairline flex items-center justify-center relative cursor-pointer"
                title="Emerald Console"
              >
                {fontColor === "emerald" && <Check size={10} className="text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Row 3: Radius & Font Stack Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Border Radius */}
          <div className="space-y-2">
            <div className="flex items-center space-x-1.5 font-mono text-[10px] uppercase text-mute tracking-wider">
              <Layout size={12} />
              <span>Corner Radius</span>
            </div>
            <div className="flex flex-col space-y-1">
              {(["sharp", "rounded", "pill"] as RadiusOption[]).map((opt) => (
                <button
                  key={opt}
                  onClick={() => setRadius(opt)}
                  className={`w-full py-1.5 px-2.5 rounded-sm border capitalize text-left transition-all ${
                    radius === opt
                      ? "border-link bg-link-soft/20 text-link font-semibold"
                      : "border-hairline hover:bg-hairline-soft text-body"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-2">
            <div className="flex items-center space-x-1.5 font-mono text-[10px] uppercase text-mute tracking-wider">
              <Type size={12} />
              <span>Typography Stack</span>
            </div>
            <div className="flex flex-col space-y-1">
              {(["sans", "mono", "serif"] as FontOption[]).map((opt) => (
                <button
                  key={opt}
                  onClick={() => setFont(opt)}
                  className={`w-full py-1.5 px-2.5 rounded-sm border capitalize text-left transition-all ${
                    font === opt
                      ? "border-link bg-link-soft/20 text-link font-semibold"
                      : "border-hairline hover:bg-hairline-soft text-body"
                  }`}
                >
                  {opt === "sans" ? "Sans Modern" : opt === "mono" ? "Mono Tech" : "Serif Classic"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live CSS Token Output Code Block */}
        {/* <div className="space-y-1.5">
          <div className="font-mono text-[10px] uppercase text-mute tracking-wider">
            Live CSS Custom Properties
          </div>
          <div className="bg-canvas border border-hairline p-3.5 rounded-sm font-mono text-[10px] text-body leading-normal select-all">
            {getCodeComments()}
            <div className="text-violet-500 font-semibold">:root &#123;</div>
            <div className="pl-4">
              <span className="text-mute">--experience-mode:</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-400">&quot;{devMode}&quot;</span>;
            </div>
            <div className="pl-4">
              <span className="text-mute">--theme:</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-400">&quot;{theme}&quot;</span>;
            </div>
            <div className="pl-4">
              <span className="text-mute">--accent-color:</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-400">&quot;{getAccentCSS()}&quot;</span>;
            </div>
            <div className="pl-4">
              <span className="text-mute">--border-radius:</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-400">&quot;{getRadiusCSS()}&quot;</span>;
            </div>
            <div className="pl-4">
              <span className="text-mute">--font-family:</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-400">&quot;{getFontCSS()}&quot;</span>;
            </div>
            <div className="pl-4">
              <span className="text-mute">--font-color:</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-400">&quot;{getFontColorCSS()}&quot;</span>;
            </div>
            <div className="text-violet-500 font-semibold">&#125;</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default TokenStudio;
