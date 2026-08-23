export interface Project {
  id: string;
  title: string;
  status: "In Progress" | "Completed";
  description: string;
  technologies: string[];
  capabilities: string[];
  caseStudyUrl: string;
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
    title: "AI Finance Manager",
    status: "In Progress",
    description: "An AI-powered personal finance platform designed to analyze financial data, categorize transactions, understand spending patterns, and forecast future monthly expenses.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "AI APIs",
      "Data visualization",
    ],
    capabilities: [
      "Expense and income tracking",
      "Bank statement / financial data upload",
      "CSV and PDF transaction extraction",
      "Automatic transaction categorization",
      "Spending analytics",
      "Monthly spending prediction",
      "AI financial insights",
      "Natural-language finance assistant",
      "Budget analysis",
      "Future expense forecasting",
    ],
    caseStudyUrl: "/projects/ai-finance-manager",
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
    skills: ["Node.js", "Express.js", "GraphQL", "Prisma ORM", "RESTful APIs", "WebSockets"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Testing & Tooling",
    skills: ["Jest", "Storybook", "Git", "CI/CD Pipelines", "Webpack", "Vite"],
  },
  {
    category: "Architecture & Concepts",
    skills: [
      "Frontend Architecture",
      "SSR & SSG",
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
  {
    category: "Exploring / Building With AI",
    skills: [
      "LLM APIs",
      "AI application architecture",
      "AI-powered features",
      "Prompt engineering",
      "AI-assisted data analysis",
    ],
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
  building: ["AI Finance Manager"],
  exploring: ["AI-powered web applications"],
};
