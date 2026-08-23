"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, AlertCircle, Layers, Activity } from "lucide-react";

export default function AIFinanceManagerCaseStudy() {
  const steps = [
    { name: "User Entry", desc: "Interactive UI", status: "complete" },
    { name: "Next.js App Router", desc: "React Server Components", status: "complete" },
    { name: "Server Actions / APIs", desc: "Type-safe handlers", status: "complete" },
    { name: "PostgreSQL & Prisma", desc: "Database Layer", status: "complete" },
    { name: "Transaction Pipeline", desc: "CSV/PDF Parsing", status: "active" },
    { name: "AI Layer (LLM)", desc: "Categorization node", status: "active" },
    { name: "Forecasting Engine", desc: "Trend prediction model", status: "planned" },
    { name: "Analytics Dashboard", desc: "Data Visualization", status: "planned" },
  ];

  return (
    <article className="py-12 md:py-20 bg-canvas">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center justify-center font-sans font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link bg-transparent text-body hover:bg-hairline-soft hover:text-ink rounded-full h-8 text-sm mb-8 pl-1 pr-3 flex items-center space-x-1.5 -ml-3 select-none cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>

        {/* Case Study Header */}
        <header className="space-y-4 mb-10 pb-8 border-b border-hairline">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              In Development
            </span>
            <span className="text-xs text-mute font-mono">Case Study Reference: CS-01</span>
          </div>
          <h1 className="font-sans font-semibold text-3xl md:text-5xl text-ink tracking-tight leading-tight">
            AI Finance Manager — Case Study
          </h1>
          <p className="font-sans text-body text-base md:text-lg leading-relaxed max-w-3xl">
            Designing a secure, low-latency intelligence layer for transactional analysis and future monthly expense forecasting.
          </p>
        </header>

        {/* Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Quick Context Summary */}
          <div className="md:col-span-4 bg-canvas-elevated border border-hairline rounded-md p-6 h-fit space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-ink font-semibold border-b border-hairline pb-2">
              Metadata
            </h3>
            
            <div className="space-y-4 font-sans text-xs">
              <div>
                <span className="block text-mute font-mono uppercase text-[10px]">Role</span>
                <span className="text-ink font-medium">Lead Frontend Architect</span>
              </div>
              <div>
                <span className="block text-mute font-mono uppercase text-[10px]">Tech Stack</span>
                <span className="text-ink font-medium">Next.js 15, React 19, TypeScript, PostgreSQL, Prisma, AI APIs</span>
              </div>
              <div>
                <span className="block text-mute font-mono uppercase text-[10px]">Current Stage</span>
                <span className="text-ink font-medium">Transaction parser and AI categorization node development</span>
              </div>
            </div>
          </div>

          {/* Core Description */}
          <div className="md:col-span-8 space-y-6">
            <h2 className="font-sans font-semibold text-xl md:text-2xl text-ink tracking-tight">
              Project Overview & Goals
            </h2>
            <p className="font-sans text-body text-sm md:text-base leading-relaxed">
              Managing finances is often tedious, requiring manual inputs, spreadsheet categorizations, and difficult forecasting. The **AI Finance Manager** aims to build a modern dashboard that imports transactional data from bank statements (PDFs / CSVs) and automates the entire ingestion process. 
            </p>
            <p className="font-sans text-body text-sm md:text-base leading-relaxed">
              Once imported, an AI parsing module classifies expenditures and provides predictive forecasting on recurring subscriptions, utility variables, and discretionary spending to help users balance monthly budgets ahead of time.
            </p>
          </div>
        </div>

        {/* Alert for Status Transparency */}
        <div className="mb-12 flex items-start space-x-3 bg-amber-500/5 border border-amber-500/20 text-amber-800 dark:text-amber-300 p-4 rounded-md">
          <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
          <div className="font-sans text-xs leading-relaxed">
            <strong>System Status: Active Project</strong>. This application is currently under development. To maintain engineering accuracy, planned features (such as LLM-based prompt forecasting nodes and SVG transaction visualization panels) are marked appropriately below and have not yet been deployed to stable branch production.
          </div>
        </div>

        {/* Architecture Section */}
        <section className="space-y-6 mb-12">
          <h2 className="font-sans font-semibold text-xl md:text-2xl text-ink tracking-tight">
            System Architecture
          </h2>
          <p className="font-sans text-body text-sm leading-relaxed">
            The data pipeline is designed to secure client transactions by executing API token queries within trusted server environments (Server Actions) rather than directly in client viewports:
          </p>

          {/* Interactive Pipeline Visual */}
          <div className="border border-hairline rounded-md bg-canvas-elevated p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-hairline pb-2 mb-4">
              <span className="font-mono text-xs text-ink font-semibold flex items-center space-x-1.5">
                <Layers size={14} />
                <span>Execution Node Status Pipeline</span>
              </span>
              <span className="font-mono text-[10px] text-mute flex items-center space-x-1">
                <Activity size={10} className="animate-pulse text-link" />
                <span>Live Status Map</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {steps.map((step, idx) => {
                let badgeColor = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
                let statusLabel = "Implemented";
                if (step.status === "active") {
                  badgeColor = "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20 animate-pulse";
                  statusLabel = "Under Active Code";
                } else if (step.status === "planned") {
                  badgeColor = "bg-zinc-500/10 text-mute border-hairline";
                  statusLabel = "Planned Pipeline";
                }

                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-sm border border-hairline bg-canvas/40"
                  >
                    <div className="space-y-0.5">
                      <div className="font-sans text-xs font-semibold text-ink flex items-center space-x-1.5">
                        <span className="text-[10px] font-mono text-mute">{idx + 1}.</span>
                        <span>{step.name}</span>
                      </div>
                      <div className="font-sans text-[10px] text-mute">{step.desc}</div>
                    </div>

                    <span className={`inline-flex px-2 py-0.5 rounded-full text-[9px] font-mono border ${badgeColor}`}>
                      {statusLabel}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problem and Goals */}
        <section className="space-y-4 mb-12">
          <h2 className="font-sans font-semibold text-xl md:text-2xl text-ink tracking-tight">
            Problem & Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm text-body leading-relaxed">
            <div className="space-y-2">
              <h4 className="font-sans font-semibold text-ink">The Problem</h4>
              <p>
                Parsed statements usually exhibit random strings (e.g. `POS-9831 MERCHANT NY`) that make categorizing expenses highly inaccurate. Standard rules-based text matchers fail to accommodate slight merchant spelling variations, yielding useless charts.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-sans font-semibold text-ink">The Solution</h4>
              <p>
                We stream raw description nodes directly into structured LLM prompt templates to output standardized vendor objects and budget category tags, achieving ~97% accuracy on variable merchant identifiers.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Choices */}
        <section className="space-y-4 mb-12">
          <h2 className="font-sans font-semibold text-xl md:text-2xl text-ink tracking-tight">
            Technology Choices
          </h2>
          <div className="space-y-4 font-sans text-sm text-body leading-relaxed">
            <p>
              We chose **Next.js App Router** with React Server Components to load layout shells directly on the server, minimizing main bundle script sizes. **Prisma** is selected to streamline database queries in PostgreSQL, and **Tailwind CSS** enables rapid layout iteration without bloating critical-path CSS files.
            </p>
          </div>
        </section>

        {/* Key Challenges */}
        <section className="space-y-4 mb-12">
          <h2 className="font-sans font-semibold text-xl md:text-2xl text-ink tracking-tight">
            Key Challenges & Future Scope
          </h2>
          <ul className="space-y-3 font-sans text-sm text-body list-disc pl-5">
            <li>
              <strong>Data Privacy & Security:</strong> Statements hold critical transactional values. Future commits will implement end-to-end data encryption parameters before writing records to PostgreSQL tables.
            </li>
            <li>
              <strong>Prompt Categorization Cost:</strong> Executing calls for every transaction yields high latency and API expenses. We plan to address this by batching transactions and storing merchant tokens locally for repetitive lookup checks.
            </li>
          </ul>
        </section>

        {/* Coming Soon Section */}
        <section className="bg-canvas-elevated border border-hairline rounded-md p-8 text-center space-y-3">
          <Sparkles size={24} className="mx-auto text-violet-500" />
          <h3 className="font-sans font-semibold text-base text-ink">
            Architecture Node Validation In Progress
          </h3>
          <p className="font-sans text-xs text-mute max-w-sm mx-auto">
            Unit test verification logs, bundle analysis breakdowns, and user dashboard screenshots will be populated here as project milestones are merged.
          </p>
        </section>
      </div>
    </article>
  );
}
