export interface Project {
  id: string;
  title: string;
  status: "In Progress" | "Completed" | "Shipped";
  description: string;
  technologies: string[];
  capabilities: string[];
  caseStudyUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  focus: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Philosophy {
  title: string;
  description: string;
}

export interface Profile {
  name: string;
  role: string;
  specializations: string[];
  experienceYears: number;
  location: string;
  bio: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export const profile: Profile = {
  name: "Vinesh Parthasarathy",
  role: "Full Stack Engineer",
  specializations: ["React", "Next.js", "TypeScript", "Node.js", "Databases", "System Design"],
  experienceYears: 7,
  location: "Chennai, India",
  bio: "I'm Vinesh Parthasarathy, a Full Stack Engineer with 7+ years of experience architecting, scaling, and optimizing enterprise-grade digital products across Fintech, Healthcare, and IoT domains. My primary focus is building end-to-end applications with React, Next.js, TypeScript, Node.js, and modern system architectures. I have a proven track record of reducing engineering effort and creating robust, scalable products.",
  socials: {
    github: "https://github.com/vineshSarathyOfficial",
    linkedin: "https://www.linkedin.com/in/vineshsarathy",
    email: "vineshsarathy@gmail.com",
  },
};

export const featuredProjects: Project[] = [
  {
    id: "ai-finance-manager",
    title: "FinPulse — AI Finance & Wealth Manager",
    status: "Shipped",
    description: "A full-stack wealth and expense management platform featuring conversational AI financial copilot (powered by Gemini), automated Gmail bank alert ingestion, bank statement PDF/CSV parsing with duplicate detection, statistical subscription detection, and deep analytics.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Google Gemini 2.5 Flash",
      "PostgreSQL (Neon)",
      "Prisma ORM",
      "Google OAuth / Gmail API",
      "Recharts",
      "Auth.js v5",
    ],
    capabilities: [
      "Conversational AI Financial Copilot (natural-language wealth & expense queries)",
      "Automated AI Financial Health Briefing (Wins, Spikes, and Smart Actions)",
      "Automated Gmail transaction sync with bank alert parser (HDFC, ICICI, SBI, Axis, UPI)",
      "Bank statement PDF & CSV ingestion with duplicate detection",
      "Statistical recurring subscription & bill detection engine",
      "Deep financial analytics with weekday spend heatmap & net savings curve",
      "Customizable sync time ranges (Current Month, 7d, 30d, 90d, 180d)",
      "Data sovereignty with one-click CSV export & danger zone reset",
      "Secure Edge-compatible JWT authentication & row-level security",
    ],
    caseStudyUrl: "/projects/ai-finance-manager",
    liveUrl: "https://finpulse-ai-dev.vercel.app",
    githubUrl: "https://github.com/vineshSarathyOfficial/ai-finance-manager",
  },
  {
    id: "pryde",
    title: "Pryde — Courier & Package Delivery",
    status: "Shipped",
    description:
      "A mobile-first courier booking platform with end-to-end delivery flows — pickup/drop selection via Google Maps, package categorization, OTP confirmation, scheduling, promo codes, and premium package options.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "Google Maps API",
      "Google Places API",
      "Lucide Icons",
    ],
    capabilities: [
      "Mobile-first courier booking with 100dvh viewport optimization",
      "Pickup & drop location selection with choose-on-map support",
      "Google Maps integration with address autocomplete",
      "Package category selection and premium package flow",
      "OTP-enabled delivery confirmation and scheduling",
      "Envelope cover options and promo code selection flow",
      "Bottom sheet modals and fixed CTA layouts for mobile UX",
      "Type-safe Prisma database layer with migration support",
    ],
    caseStudyUrl: "https://github.com/vineshSarathyOfficial/Pryde",
    githubUrl: "https://github.com/vineshSarathyOfficial/Pryde",
  },
  {
    id: "splitter",
    title: "Splitter — Group Expense Sharing",
    status: "Shipped",
    description:
      "A production-ready full-stack expense splitting platform built on Next.js 14 App Router and Server Actions. Users authenticate via Clerk (Passkeys, GitHub, or Google), create shared groups, log expenses, and let the app automatically calculate who owes whom — with clear balance views and settle-up flows across mobile and desktop.",
    technologies: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Clerk Auth",
      "Neon PostgreSQL",
      "Server Actions",
      "App Router",
      "Vercel",
    ],
    capabilities: [
      "Next.js 14 App Router architecture with Server Actions for data mutations",
      "Clerk authentication with Passkeys, GitHub, and Google sign-in",
      "Create and manage groups for shared expense tracking",
      "Add and track expenses within groups with member attribution",
      "Automatic expense splitting and real-time balance calculation engine",
      "View group balances and settle up with individual members",
      "ShadCN UI component library for polished, accessible interface design",
      "Responsive mobile-first layout optimized for phone and desktop",
      "Toast notifications for instant user feedback on actions",
      "Neon serverless PostgreSQL for efficient, scalable data persistence",
      "Type-safe TypeScript codebase with deployment-ready Vercel configuration",
      "MIT-licensed open-source project with documented setup workflow",
    ],
    caseStudyUrl: "https://github.com/vineshSarathyOfficial/Splitter",
    liveUrl: "https://splitter-theta-lac.vercel.app",
    githubUrl: "https://github.com/vineshSarathyOfficial/Splitter",
  },
];

export const experiences: Experience[] = [
  {
    company: "Comcast",
    role: "SDE-3",
    period: "June 2024 – Present",
    focus: [
      "React.js",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Node.js",
      "E-commerce development",
      "Modular UI architectures",
      "SSR performance optimization",
      "Mentoring junior developers",
    ],
  },
  {
    company: "LTIMindtree",
    role: "Senior Software Engineer",
    period: "September 2022 – June 2024",
    focus: [
      "React.js",
      "Node.js",
      "REST APIs",
      "Enterprise CMS Platforms",
      "Core Web Vitals scores optimization",
      "Lazy loading & bundle splitting",
      "Flexible UI components design",
      "Workflow bottleneck reduction",
    ],
  },
  {
    company: "Cognizant",
    role: "Software Developer",
    period: "June 2021 – September 2022",
    focus: [
      "React.js",
      "Vue.js",
      "WebSockets",
      "IoT administration dashboards",
      "Real-time equipment streams tracking",
      "Reusable UI components standardization",
      "Frontend maintenance reduction",
    ],
  },
  {
    company: "Seyasoft",
    role: "Web Developer",
    period: "June 2020 – August 2021",
    focus: [
      "React.js",
      "Responsive web layouts",
      "API integration & performance",
      "Jest & Enzyme structured testing",
      "Test coverage optimization",
    ],
  },
  {
    company: "Software Consultant",
    role: "Frontend Developer",
    period: "February 2019 – June 2020",
    focus: [
      "React.js & Full-stack development",
      "MERN stack foundations",
      "Advanced JavaScript practices",
      "Frontend API integration",
    ],
  },
  {
    company: "Poorvika Ltd",
    role: "Site Engineer",
    period: "December 2017 – February 2019",
    focus: [
      "On-site technical operations",
      "Post-graduation operational support",
      "Systems troubleshooting & management",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Core Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux", "React Query", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js", "GraphQL", "Prisma ORM", "RESTful APIs", "WebSockets", "Google APIs / OAuth 2.0"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL (Neon)", "MySQL", "Prisma ORM"],
  },
  {
    category: "AI & GenAI Integration",
    skills: [
      "Google Gemini API (2.5 Flash)",
      "LLM Prompt Engineering",
      "Context Window Structuring",
      "Conversational Copilot Architectures",
      "Automated Ingestion & Classification",
    ],
  },
  {
    category: "Testing & Tooling",
    skills: ["Jest", "Storybook", "Git", "CI/CD Pipelines", "Vercel", "Turbopack", "Webpack", "Vite"],
  },
  {
    category: "Architecture & Concepts",
    skills: [
      "Full-Stack Architecture",
      "Server Components (RSC)",
      "SSR & Edge Middleware",
      "Performance Optimization",
      "Scalable UI Systems",
      "Design Systems",
      "Component-Driven Development",
      "Core Web Vitals",
      "Agile/Scrum",
    ],
  },
  {
    category: "Additional Frameworks",
    skills: ["Vue.js", "Laravel", ".NET Framework"],
  },
];

export const philosophies: Philosophy[] = [
  {
    title: "Simplicity",
    description: "Prefer simple solutions that are easy to understand and maintain.",
  },
  {
    title: "Performance",
    description: "Build interfaces that feel fast, responsive, and efficient.",
  },
  {
    title: "Scalability",
    description: "Design components and architecture that can evolve with the product.",
  },
  {
    title: "User Experience",
    description: "Good engineering should ultimately create a better experience for the user.",
  },
];

export const currentFocus = {
  learning: ["AI Ops", "AI Trading Bots"],
  building: ["OhMyBot (AI Trading Bot)"],
  exploring: ["Conversational GenAI Architectures", "Full-Stack Next.js 16"],
};
