"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2, ShieldCheck, Mail, FileSpreadsheet, RotateCcw, BarChart3, Activity, Sparkles, Bot } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

const techStack = [
  "Next.js 16 (App Router)",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Google Gemini 2.5 Flash",
  "Prisma ORM",
  "Neon PostgreSQL",
  "Google OAuth 2.0",
  "Gmail API",
  "Recharts",
  "Auth.js v5",
];

const architectureNodes = [
  {
    icon: Sparkles,
    title: "Conversational AI Copilot (Gemini)",
    desc: "Sub-second natural language financial advisor providing real-time answers on category spend, subscription audits, and personalized savings strategies.",
    status: "Implemented",
  },
  {
    icon: Mail,
    title: "Gmail Transaction Ingestion",
    desc: "OAuth 2.0 integration querying bank notification emails (HDFC, ICICI, SBI, Axis, UPI) with customizable time ranges and duplicate protection.",
    status: "Implemented",
  },
  {
    icon: FileSpreadsheet,
    title: "Bank Statement Parser",
    desc: "Drag-and-drop ingestion engine supporting PDF and CSV statements with tabular regex extraction and duplicate detection.",
    status: "Implemented",
  },
  {
    icon: RotateCcw,
    title: "Recurring Subscriptions Engine",
    desc: "Cosine similarity merchant grouping and interval regularity detection to automatically identify recurring EMIs, bills, and salary.",
    status: "Implemented",
  },
  {
    icon: BarChart3,
    title: "Deep Financial Analytics",
    desc: "Interactive Recharts visualizer for 6-month trends, weekday spending heatmap, cumulative savings curve, and top merchants.",
    status: "Implemented",
  },
  {
    icon: Bot,
    title: "Dashboard AI Health Briefing",
    desc: "Automated 3-point briefing engine generating executive summaries on financial wins, spending spikes, and actionable next steps.",
    status: "Implemented",
  },
];

export default function FinPulseCaseStudyPage() {
  return (
    <article className="py-20 md:py-28 bg-canvas min-h-screen">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center space-x-2 text-xs font-mono text-mute hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Header Title Section */}
        <Reveal>
          <div className="space-y-4 mb-10">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 size={12} className="text-emerald-500" />
                Production Live &amp; Deployed
              </span>
              <span className="text-xs text-mute font-mono">Full-Stack FinTech &amp; GenAI Application</span>
            </div>

            <h1 className="font-sans font-bold text-3xl md:text-5xl text-ink tracking-tight">
              FinPulse — AI-Powered Personal Finance &amp; Automated Bank Ingestion Platform
            </h1>

            <p className="font-sans text-body text-base md:text-lg leading-relaxed max-w-3xl">
              An intelligent wealth and expense management system featuring a conversational Gemini AI Copilot, automated Gmail bank alert ingestion, statement PDF/CSV parsing, statistical subscription detection, and deep analytics.
            </p>

            {/* Quick Action Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://finpulse-ai-dev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-link text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
              >
                <ExternalLink size={14} />
                <span>Launch Live App</span>
              </a>
              <a
                href="https://github.com/vineshSarathyOfficial/ai-finance-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-canvas-elevated text-ink border border-hairline text-sm font-medium hover:bg-hairline-soft transition-colors"
              >
                <Github size={14} />
                <span>View Source on GitHub</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Tech Stack Pills */}
        <div className="p-5 rounded-md border border-hairline bg-canvas-elevated mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-faint mb-3">
            Core Technology Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-sm border border-hairline bg-canvas text-xs font-mono text-body"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture Section */}
        <section className="space-y-6 mb-12">
          <h2 className="font-sans font-semibold text-2xl text-ink tracking-tight">
            Key Architecture Modules
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {architectureNodes.map((node, i) => {
              const Icon = node.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-md border border-hairline bg-canvas-elevated space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-sm bg-link/10 text-link flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                    <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {node.status}
                    </span>
                  </div>
                  <h3 className="font-sans font-semibold text-base text-ink">{node.title}</h3>
                  <p className="font-sans text-xs text-body leading-relaxed">{node.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Engineering Highlights */}
        <section className="space-y-6 mb-12">
          <h2 className="font-sans font-semibold text-2xl text-ink tracking-tight">
            Engineering Highlights &amp; Performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-body leading-relaxed">
            <div className="space-y-2 p-5 rounded-md border border-hairline bg-canvas-elevated">
              <h3 className="font-sans font-semibold text-ink flex items-center gap-2">
                <Sparkles size={16} className="text-link" />
                Conversational Financial GenAI
              </h3>
              <p className="text-xs">
                Integrates Google Gemini 2.5 Flash with live token-efficient context injection, allowing users to query expenses, audit subscriptions, and discover savings opportunities in conversational plain English.
              </p>
            </div>
            <div className="space-y-2 p-5 rounded-md border border-hairline bg-canvas-elevated">
              <h3 className="font-sans font-semibold text-ink flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-500" />
                Data Privacy &amp; Row-Level Security
              </h3>
              <p className="text-xs">
                Tokens are stored in PostgreSQL with strict user-level multi-tenancy. Gmail queries use read-only scopes limited strictly to financial sender domains, ensuring no personal emails are touched.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Footer */}
        <div className="pt-8 border-t border-hairline flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center space-x-2 text-sm font-sans font-medium text-link hover:underline"
          >
            <ArrowLeft size={16} />
            <span>Back to All Projects</span>
          </Link>
          <a
            href="https://finpulse-ai-dev.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-sm font-sans font-medium text-ink hover:text-link transition-colors"
          >
            <span>Visit Live Application</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
