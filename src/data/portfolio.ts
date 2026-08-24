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
    company: "Freelance",
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
  learning: ["Data Structures & Algorithms", "System Design"],
  building: ["FinPulse (AI Copilot & Gmail Sync Live)"],
  exploring: ["Conversational GenAI Architectures", "Full-Stack Next.js 16"],
};
