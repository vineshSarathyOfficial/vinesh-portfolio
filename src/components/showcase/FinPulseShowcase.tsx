"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  BarChart3,
  ExternalLink,
  ArrowRight,
  Database,
  Mail,
  FileSpreadsheet,
  CheckCircle2,
  Terminal,
  Activity,
  Cpu,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StepData {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  stats: { label: string; value: string; detail: string }[];
}

const steps: StepData[] = [
  {
    id: "copilot",
    badge: "Stage 01 • Conversational AI",
    badgeColor: "text-accent-cyan border-accent-cyan/30 bg-accent-cyan/10",
    title: "Conversational Financial Copilot",
    subtitle: "Powered by Google Gemini 2.5 Flash",
    description:
      "A context-aware intelligent agent that understands complex multi-currency transactions, projects net savings, and diagnoses anomalous discretionary spending in real-time.",
    highlight: "Sub-50ms token latency with memory-augmented context windows",
    stats: [
      { label: "Model Engine", value: "Gemini 2.5 Flash", detail: "Edge Streaming" },
      { label: "Query Speed", value: "38ms", detail: "First Token Latency" },
      { label: "Accuracy", value: "99.4%", detail: "Intent Classification" },
    ],
  },
  {
    id: "ingestion",
    badge: "Stage 02 • Data Pipeline",
    badgeColor: "text-accent-gold border-accent-gold/30 bg-accent-gold/10",
    title: "Zero-Effort Automated Ingestion",
    subtitle: "Gmail Webhooks + Multi-Bank Parsers",
    description:
      "Eliminates manual bookkeeping through autonomous Gmail bank alert ingestion (HDFC, ICICI, SBI, Axis, UPI) combined with PDF & CSV statement parsers and duplicate hashing.",
    highlight: "Automated statement reconciliation with cryptographic duplicate detection",
    stats: [
      { label: "Parsers", value: "PDF & CSV", detail: "Native Normalizer" },
      { label: "Sync Latency", value: "< 2.1s", detail: "Gmail API Webhook" },
      { label: "Deduplication", value: "100%", detail: "Hash-based Filter" },
    ],
  },
  {
    id: "analytics",
    badge: "Stage 03 • Intelligence & ML",
    badgeColor: "text-accent-pink border-accent-pink/30 bg-accent-pink/10",
    title: "Statistical ML & Heatmap Analytics",
    subtitle: "Predictive Wealth & Subscription Engine",
    description:
      "Detects recurring bills, anomalous weekend spend spikes, and plots a 12-month predictive net savings trajectory based on historical velocity.",
    highlight: "Statistical frequency analysis identifies zombie subscriptions instantly",
    stats: [
      { label: "Subscription ML", value: "Pattern Rec", detail: "Fourier / Interval" },
      { label: "Analytics", value: "Weekday Grid", detail: "Spend Density Heatmap" },
      { label: "Savings Trajectory", value: "+28.4%", detail: "Target Velocity" },
    ],
  },
  {
    id: "architecture",
    badge: "Stage 04 • Edge Architecture",
    badgeColor: "text-accent-cyan border-accent-cyan/30 bg-accent-cyan/10",
    title: "Enterprise Full-Stack Architecture",
    subtitle: "Next.js 16 + Neon PostgreSQL + Prisma",
    description:
      "Architected with Next.js 16 App Router, React 19 Server Components, Neon Serverless PostgreSQL with row-level encryption, and edge middleware authentication.",
    highlight: "16 of 16 production test routes passing with 100% Edge compliance",
    stats: [
      { label: "Database", value: "Neon Postgres", detail: "Branching & Pooling" },
      { label: "Test Coverage", value: "16 / 16", detail: "All Routes Passing" },
      { label: "Deploy Target", value: "Vercel Edge", detail: "Global Multi-Region" },
    ],
  },
];

export function FinPulseShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const container = containerRef.current;
    const stage = stageRef.current;
    if (!container || !stage) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        pin: stage,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const stageIndex = Math.min(
            steps.length - 1,
            Math.floor(progress * steps.length)
          );
          setActiveStage(stageIndex);
        },
      });
    }, container);

    return () => ctx.revert();
  }, [isMobile]);

  const scrollToStage = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targetY = containerTop + (index / (steps.length - 1)) * containerHeight;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const currentStep = steps[activeStage];

  return (
    <section
      ref={containerRef}
      id="finpulse-deepdive"
      className={`relative ${isMobile ? "py-24" : "h-[380vh]"}`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent-cyan/5 blur-[220px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] rounded-full bg-accent-pink/5 blur-[180px] pointer-events-none" />

      {/* Pinned Stage Container */}
      <div
        ref={stageRef}
        className={`${
          isMobile
            ? "relative w-full px-6"
            : "h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-16"
        } max-w-7xl mx-auto z-10`}
      >
        {/* Stage Header & Section Indicator */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 mb-3">
              <Sparkles size={12} className="animate-spin-slow" />
              <span>Apple-Grade Architecture Deep Dive</span>
            </div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
              FinPulse AI <span className="text-mute font-normal font-mono text-xl md:text-2xl">— Engineered for Scale</span>
            </h2>
          </div>

          {/* Interactive Stage Stepper Controls */}
          <div className="flex items-center gap-2">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => (isMobile ? setActiveStage(idx) : scrollToStage(idx))}
                className={`group flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
                  activeStage === idx
                    ? "bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/40 glow-box-cyan"
                    : "glass text-mute hover:text-ink hover:border-white/20"
                }`}
              >
                <span className="font-bold">0{idx + 1}</span>
                <span className="hidden sm:inline opacity-80 group-hover:opacity-100">
                  {step.id.toUpperCase()}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Dual-Pane Keynote Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Storytelling & Technical Metrics */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <span
                className={`inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-mono border transition-all duration-500 ${currentStep.badgeColor}`}
              >
                <Activity size={12} className="animate-pulse" />
                <span>{currentStep.badge}</span>
              </span>

              <h3 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight transition-all duration-500">
                {currentStep.title}
              </h3>

              <div className="font-mono text-sm text-accent-gold glow-gold">
                {currentStep.subtitle}
              </div>

              <p className="font-sans text-body text-sm sm:text-base leading-relaxed">
                {currentStep.description}
              </p>

              <div className="p-3.5 rounded-xl border border-hairline bg-canvas-elevated/70 text-xs font-mono text-ink flex items-start space-x-2.5">
                <ShieldCheck size={16} className="text-accent-cyan shrink-0 mt-0.5" />
                <span>{currentStep.highlight}</span>
              </div>
            </div>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {currentStep.stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass p-3 rounded-xl border border-hairline/60 space-y-1 transition-all duration-300 hover:border-accent-cyan/30"
                >
                  <div className="text-[10px] font-mono text-mute uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="font-sans font-bold text-sm sm:text-base text-ink tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono text-accent-cyan truncate">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://finpulse-ai-dev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 h-[42px] rounded-full text-xs font-mono bg-accent-cyan text-black font-bold hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              >
                <span>Launch Live App</span>
                <ExternalLink size={13} />
              </a>
              <Link
                href="/projects/ai-finance-manager"
                className="inline-flex items-center space-x-2 px-5 h-[42px] rounded-full text-xs font-mono glass text-ink hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300"
              >
                <span>Read Full Architecture</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Interactive Mockup Stage */}
          <div className="lg:col-span-7">
            <SpotlightCard
              spotlightColor={
                activeStage === 0
                  ? "rgba(0, 255, 255, 0.15)"
                  : activeStage === 1
                  ? "rgba(212, 175, 55, 0.15)"
                  : activeStage === 2
                  ? "rgba(255, 0, 110, 0.15)"
                  : "rgba(0, 255, 255, 0.15)"
              }
              className="p-6 md:p-8 min-h-[440px] flex flex-col justify-between border border-white/10 shadow-2xl bg-canvas-elevated/80 backdrop-blur-2xl"
            >
              {/* Window Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-hairline">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 font-mono text-xs text-mute">finpulse-ai-kernel.app</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse-glow" />
                  <span className="font-mono text-[10px] uppercase text-accent-cyan font-bold tracking-widest">
                    LIVE SYSTEM ACTIVE
                  </span>
                </div>
              </div>

              {/* Dynamic Viewport Content Based on activeStage */}
              <div className="py-6 flex-1 flex flex-col justify-center">
                {activeStage === 0 && (
                  /* ─── STAGE 01: Conversational Copilot Preview ─── */
                  <div className="space-y-4 font-mono animate-fadeIn">
                    {/* User Query bubble */}
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="max-w-[85%] bg-accent-cyan/15 border border-accent-cyan/30 rounded-2xl rounded-tr-sm p-4 text-xs text-ink">
                        <div className="text-[10px] text-accent-cyan font-bold mb-1">
                          USER PROMPT
                        </div>
                        &quot;Compare my weekend dining burn rate against weekday averages and flag any recurring subscription price hikes.&quot;
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-ink shrink-0">
                        VP
                      </div>
                    </div>

                    {/* AI Copilot Response */}
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-accent-cyan/20 border border-accent-cyan/40 flex items-center justify-center text-accent-cyan shrink-0">
                        <Sparkles size={14} className="animate-spin-slow" />
                      </div>
                      <div className="max-w-[90%] glass-card rounded-2xl rounded-tl-sm p-4 text-xs text-ink space-y-3 border-accent-cyan/20">
                        <div className="flex items-center justify-between text-[10px] border-b border-hairline pb-2">
                          <span className="text-accent-cyan font-bold flex items-center gap-1.5">
                            <Zap size={11} />
                            GEMINI 2.5 FLASH INFERENCE
                          </span>
                          <span className="text-mute font-mono">LATENCY: 38ms • TOKENS: 142</span>
                        </div>
                        <p className="leading-relaxed text-body text-[12px]">
                          Weekend dining averaged <strong className="text-accent-cyan">$184.50</strong> (up 22% vs weekdays). We identified a price adjustment on <span className="text-accent-gold font-semibold">GitHub Copilot</span> (+$2.00/mo) and an anomalous charge of <span className="text-accent-pink font-semibold">$48.00</span> on Sunday.
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/30 text-[10px] text-accent-cyan">
                            +18.4% Savings Projected
                          </span>
                          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-mute">
                            1 Memory Synced
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStage === 1 && (
                  /* ─── STAGE 02: Ingestion Pipeline ─── */
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-xs font-mono text-mute uppercase tracking-wider text-center">
                      Autonomous Data Ingestion &amp; Bank Normalization Flow
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      {/* Source 1 */}
                      <div className="glass p-4 rounded-xl border border-hairline flex flex-col items-center space-y-2 group hover:border-accent-gold/40 transition-all">
                        <div className="w-10 h-10 rounded-full bg-accent-gold/10 text-accent-gold flex items-center justify-center">
                          <Mail size={18} />
                        </div>
                        <div className="font-sans font-bold text-xs text-ink">Gmail Webhook</div>
                        <div className="text-[10px] font-mono text-mute">Live Bank Alerts</div>
                        <span className="text-[9px] px-2 py-0.5 rounded bg-accent-gold/10 text-accent-gold font-mono">
                          HDFC / ICICI / UPI
                        </span>
                      </div>

                      {/* Source 2 */}
                      <div className="glass p-4 rounded-xl border border-hairline flex flex-col items-center space-y-2 group hover:border-accent-cyan/40 transition-all">
                        <div className="w-10 h-10 rounded-full bg-accent-cyan/10 text-accent-cyan flex items-center justify-center">
                          <FileSpreadsheet size={18} />
                        </div>
                        <div className="font-sans font-bold text-xs text-ink">Statement Parser</div>
                        <div className="text-[10px] font-mono text-mute">PDF &amp; CSV Extraction</div>
                        <span className="text-[9px] px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan font-mono">
                          Zero Overhead
                        </span>
                      </div>

                      {/* Destination */}
                      <div className="glass p-4 rounded-xl border border-hairline flex flex-col items-center space-y-2 group hover:border-accent-pink/40 transition-all">
                        <div className="w-10 h-10 rounded-full bg-accent-pink/10 text-accent-pink flex items-center justify-center">
                          <Database size={18} />
                        </div>
                        <div className="font-sans font-bold text-xs text-ink">Neon Postgres</div>
                        <div className="text-[10px] font-mono text-mute">Deduplicated Records</div>
                        <span className="text-[9px] px-2 py-0.5 rounded bg-accent-pink/10 text-accent-pink font-mono">
                          Row-Level Security
                        </span>
                      </div>
                    </div>

                    {/* Pipeline Activity Bar */}
                    <div className="glass-card p-3 rounded-lg flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-body text-[11px]">Worker Stream: 124 batch entries parsed</span>
                      </div>
                      <span className="text-accent-gold text-[11px] font-bold">0 DUPLICATES</span>
                    </div>
                  </div>
                )}

                {activeStage === 2 && (
                  /* ─── STAGE 03: Statistical ML & Heatmaps ─── */
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase text-accent-pink tracking-wider flex items-center gap-1.5">
                        <BarChart3 size={13} />
                        Weekday Spend Density &amp; Recurring Subscriptions
                      </span>
                      <span className="text-[10px] font-mono text-mute">30-DAY WINDOW</span>
                    </div>

                    {/* Simulated Weekday Heatmap Grid */}
                    <div className="grid grid-cols-7 gap-1.5 p-3 rounded-xl glass border border-hairline text-center font-mono text-[10px]">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, dIdx) => (
                        <div key={day} className="space-y-1">
                          <div className="text-mute text-[9px]">{day}</div>
                          <div
                            className={`h-12 rounded-lg flex flex-col justify-end p-1 transition-all ${
                              dIdx >= 4
                                ? "bg-accent-pink/30 border border-accent-pink/50 text-accent-pink font-bold"
                                : "bg-white/5 border border-white/5 text-body"
                            }`}
                          >
                            <span className="text-[9px]">${dIdx >= 4 ? "180+" : "45"}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Subscription Engine Live Card */}
                    <div className="glass-card p-4 rounded-xl space-y-2 border border-accent-pink/20">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-ink font-bold flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-accent-pink" />
                          Identified 4 Recurring Subscriptions
                        </span>
                        <span className="text-accent-gold font-bold">$78.40/mo</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-mute">
                        <span className="px-2 py-0.5 rounded bg-white/5">Netflix ($15.99)</span>
                        <span className="px-2 py-0.5 rounded bg-white/5">GitHub Pro ($4.00)</span>
                        <span className="px-2 py-0.5 rounded bg-white/5">AWS Lambda ($22.40)</span>
                        <span className="px-2 py-0.5 rounded bg-white/5">Vercel Pro ($20.00)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStage === 3 && (
                  /* ─── STAGE 04: Production Edge Architecture ─── */
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between border-b border-hairline pb-2">
                      <div className="flex items-center space-x-2">
                        <Cpu size={14} className="text-accent-cyan" />
                        <span className="text-xs font-mono text-ink font-semibold">
                          Edge Runtime &amp; Route Telemetry
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20">
                        100% HEALTHY
                      </span>
                    </div>

                    {/* Route status list */}
                    <div className="space-y-2 font-mono text-xs">
                      {[
                        { route: "/api/chat/stream", type: "Edge SSE", time: "34ms", status: "200 OK" },
                        { route: "/api/ingest/gmail", type: "Cron Webhook", time: "182ms", status: "200 OK" },
                        { route: "/api/analytics/aggregate", type: "RSC Server Action", time: "48ms", status: "200 OK" },
                        { route: "/api/auth/[...nextauth]", type: "Edge Auth.js", time: "19ms", status: "200 OK" },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2.5 rounded-lg glass border border-white/5 hover:border-accent-cyan/30 transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                            <span className="text-ink font-medium">{item.route}</span>
                            <span className="text-[10px] text-mute">({item.type})</span>
                          </div>
                          <div className="flex items-center space-x-3 text-[11px]">
                            <span className="text-accent-cyan">{item.time}</span>
                            <span className="text-emerald-400 font-bold">{item.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Architecture Tags */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono glass border-hairline text-body">
                        Next.js 16 App Router
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono glass border-hairline text-body">
                        React 19 Server Components
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono glass border-hairline text-body">
                        Prisma + Neon PostgreSQL
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="pt-3 border-t border-hairline flex items-center justify-between text-[11px] font-mono text-mute">
                <span className="flex items-center gap-1.5">
                  <Terminal size={12} className="text-accent-cyan" />
                  Scroll to traverse architecture timeline
                </span>
                <span className="text-accent-gold font-bold">
                  STAGE 0{activeStage + 1} / 0{steps.length}
                </span>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinPulseShowcase;
