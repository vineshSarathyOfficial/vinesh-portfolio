"use client";

import React, { useState } from "react";
import { Zap, Check } from "lucide-react";

export function PerformanceOptimizer() {
  const [ssr, setSsr] = useState(false);
  const [lazyLoad, setLazyLoad] = useState(false);
  const [edgeCache, setEdgeCache] = useState(false);
  const [compiler, setCompiler] = useState(false);

  // Derive score and logs dynamically from state values
  let score = 52;
  const logs = [
    "Ready for compilation check.",
    "Unoptimized bundle payload detected."
  ];

  if (ssr) {
    score += 15;
    logs.push("SSR: Server rendering active. LCP target reduced.");
  }
  if (lazyLoad) {
    score += 13;
    logs.push("LAZY: Chunk-splitting active. Bundle size optimized.");
  }
  if (edgeCache) {
    score += 11;
    logs.push("EDGE: TTFB optimized via globally cached shells.");
  }
  if (compiler) {
    score += 9;
    logs.push("COMPILER: React Compiler memoized render passes.");
  }

  // SVG parameters for progress circle
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  // Determine indicator colors
  let strokeColor = "stroke-rose-500";
  let textColor = "text-rose-500";
  if (score >= 90) {
    strokeColor = "stroke-emerald-500";
    textColor = "text-emerald-500";
  } else if (score >= 70) {
    strokeColor = "stroke-amber-500";
    textColor = "text-amber-500";
  }

  return (
    <div className="w-full max-w-md bg-canvas-elevated border border-hairline rounded-md shadow-sm overflow-hidden flex flex-col font-sans text-xs">
      {/* Panel Header */}
      <div className="bg-canvas border-b border-hairline px-4 h-10 flex items-center justify-between">
        <span className="font-mono text-xs text-ink font-semibold flex items-center space-x-1.5">
          <Zap size={14} className="text-link" />
          <span>Vitals Sandbox Optimizer</span>
        </span>
        <span className="font-mono text-[9px] text-mute uppercase">Interactive Spec</span>
      </div>

      <div className="p-5 space-y-6">
        {/* Gauge & Metrics Row */}
        <div className="flex items-center justify-between bg-canvas/30 border border-hairline p-4 rounded-sm">
          {/* Radial Gauge */}
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="40"
                cy="40"
                r={radius}
                className="stroke-hairline fill-none"
                strokeWidth="6"
              />
              {/* Progress circle */}
              <circle
                cx="40"
                cy="40"
                r={radius}
                className={`fill-none transition-all duration-500 ease-out ${strokeColor}`}
                strokeWidth="6"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-base font-mono font-bold leading-none ${textColor}`}>
                {score}
              </span>
              <span className="text-[8px] text-mute font-mono">Score</span>
            </div>
          </div>

          {/* Metrics outputs */}
          <div className="flex-1 pl-6 space-y-3 font-mono text-[11px] text-body">
            <div className="flex justify-between items-center">
              <span>LCP (Paint):</span>
              <span className="text-ink font-semibold">
                {ssr ? (lazyLoad ? "0.8s" : "1.6s") : "3.8s"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Bundle Size:</span>
              <span className="text-ink font-semibold">
                {lazyLoad ? (compiler ? "42kB" : "56kB") : "410kB"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>TTFB (Server):</span>
              <span className="text-ink font-semibold">
                {edgeCache ? "45ms" : "320ms"}
              </span>
            </div>
          </div>
        </div>

        {/* Optimizer Toggles */}
        <div className="space-y-2.5">
          <div className="font-mono text-[10px] uppercase text-mute tracking-wider">
            Optimization Flags
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* Toggle 1: SSR */}
            <button
              onClick={() => setSsr(!ssr)}
              className={`flex items-center justify-between p-2.5 rounded-sm border transition-all text-left ${
                ssr
                  ? "border-emerald-500/30 bg-emerald-500/5 text-ink font-semibold"
                  : "border-hairline hover:bg-hairline-soft text-body"
              }`}
            >
              <div className="space-y-0.5">
                <div className="text-[11px]">Server Render (SSR)</div>
                <div className="text-[9px] text-mute">Removes initial client load</div>
              </div>
              <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${
                ssr ? "bg-emerald-500 border-emerald-500 text-canvas" : "border-mute"
              }`}>
                {ssr && <Check size={8} />}
              </div>
            </button>

            {/* Toggle 2: Lazy Loading */}
            <button
              onClick={() => setLazyLoad(!lazyLoad)}
              className={`flex items-center justify-between p-2.5 rounded-sm border transition-all text-left ${
                lazyLoad
                  ? "border-emerald-500/30 bg-emerald-500/5 text-ink font-semibold"
                  : "border-hairline hover:bg-hairline-soft text-body"
              }`}
            >
              <div className="space-y-0.5">
                <div className="text-[11px]">Lazy Load Blocks</div>
                <div className="text-[9px] text-mute">Component chunk splitting</div>
              </div>
              <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${
                lazyLoad ? "bg-emerald-500 border-emerald-500 text-canvas" : "border-mute"
              }`}>
                {lazyLoad && <Check size={8} />}
              </div>
            </button>

            {/* Toggle 3: Edge Caching */}
            <button
              onClick={() => setEdgeCache(!edgeCache)}
              className={`flex items-center justify-between p-2.5 rounded-sm border transition-all text-left ${
                edgeCache
                  ? "border-emerald-500/30 bg-emerald-500/5 text-ink font-semibold"
                  : "border-hairline hover:bg-hairline-soft text-body"
              }`}
            >
              <div className="space-y-0.5">
                <div className="text-[11px]">Edge Cache Vitals</div>
                <div className="text-[9px] text-mute">Minimizes server response latency</div>
              </div>
              <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${
                edgeCache ? "bg-emerald-500 border-emerald-500 text-canvas" : "border-mute"
              }`}>
                {edgeCache && <Check size={8} />}
              </div>
            </button>

            {/* Toggle 4: React Compiler */}
            <button
              onClick={() => setCompiler(!compiler)}
              className={`flex items-center justify-between p-2.5 rounded-sm border transition-all text-left ${
                compiler
                  ? "border-emerald-500/30 bg-emerald-500/5 text-ink font-semibold"
                  : "border-hairline hover:bg-hairline-soft text-body"
              }`}
            >
              <div className="space-y-0.5">
                <div className="text-[11px]">React Compiler</div>
                <div className="text-[9px] text-mute">Automated cache memoization</div>
              </div>
              <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${
                compiler ? "bg-emerald-500 border-emerald-500 text-canvas" : "border-mute"
              }`}>
                {compiler && <Check size={8} />}
              </div>
            </button>
          </div>
        </div>

        {/* Real-time Logger Terminal */}
        <div className="space-y-1.5">
          <div className="font-mono text-[10px] uppercase text-mute tracking-wider">
            Optimization logs
          </div>
          <div className="bg-canvas border border-hairline p-3.5 rounded-sm font-mono text-[10px] text-body min-h-[90px] space-y-1.5 overflow-y-auto">
            {logs.map((log, i) => (
              <div key={i} className="flex items-start">
                <span className="text-link mr-1.5">&gt;</span>
                <span className="leading-tight">{log}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceOptimizer;
