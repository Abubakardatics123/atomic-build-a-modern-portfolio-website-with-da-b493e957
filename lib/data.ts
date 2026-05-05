export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  year: number;
  techStack: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
}

export const projects: Project[] = [
  {
    slug: "ai-dashboard",
    title: "AI Analytics Dashboard",
    description: "A real-time analytics platform powered by machine learning, featuring predictive insights and interactive data visualizations.",
    longDescription: "Built a comprehensive analytics dashboard that leverages machine learning models to provide predictive insights for business metrics. The platform features real-time data streaming, interactive charts built with D3.js, and a natural language query interface that allows non-technical users to explore data intuitively. Implemented a custom ML pipeline using Python and FastAPI on the backend, with a Next.js frontend for a seamless user experience.",
    tags: ["Next.js", "Python", "ML", "D3.js"],
    category: "Web App",
    image: "/images/ai-analytics-dashboard-dark.jpg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
    year: 2024,
    techStack: ["Next.js 14", "TypeScript", "Python", "FastAPI", "D3.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory, AI-powered recommendations, and seamless checkout experience.",
    longDescription: "Designed and developed a scalable e-commerce platform from the ground up, handling thousands of concurrent users. Features include AI-powered product recommendations, real-time inventory management, multi-currency support, and an optimized checkout flow that reduced cart abandonment by 35%. Integrated with Stripe for payments and built a custom CMS for product management.",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    category: "E-Commerce",
    image: "/images/ecommerce-platform-modern-store.jpg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
    year: 2024,
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redis", "AWS S3", "Tailwind CSS"],
  },
  {
    slug: "devops-pipeline",
    title: "CI/CD Pipeline Automation",
    description: "An automated DevOps pipeline with zero-downtime deployments, automated testing, and infrastructure as code.",
    longDescription: "Architected and implemented a fully automated CI/CD pipeline that reduced deployment time from 2 hours to 8 minutes. The system includes automated unit, integration, and end-to-end testing, blue-green deployments for zero downtime, automatic rollback on failure, and comprehensive monitoring with alerting. Infrastructure is managed entirely as code using Terraform.",
    tags: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    category: "DevOps",
    image: "/images/devops-pipeline-automation-kubernetes.jpg",
    repoUrl: "https://github.com",
    featured: true,
    year: 2023,
    techStack: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Grafana", "AWS EKS"],
  },
  {
    slug: "mobile-fitness-app",
    title: "Fitness Tracking App",
    description: "A cross-platform mobile app for workout tracking, nutrition logging, and personalized fitness coaching.",
    longDescription: "Developed a cross-platform fitness application using React Native that helps users track workouts, log nutrition, and receive personalized coaching recommendations. The app uses computer vision to analyze exercise form in real-time, provides adaptive workout plans based on user progress, and integrates with popular wearables like Apple Watch and Fitbit.",
    tags: ["React Native", "TypeScript", "Firebase", "ML Kit"],
    category: "Mobile",
    image: "/images/fitness-tracking-mobile-app.jpg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: false,
    year: 2023,
    techStack: ["React Native", "TypeScript", "Firebase", "ML Kit", "Redux", "Expo"],
  },
  {
    slug: "blockchain-wallet",
    title: "Web3 Crypto Wallet",
    description: "A secure, non-custodial cryptocurrency wallet with DeFi integrations and multi-chain support.",
    longDescription: "Built a non-custodial Web3 wallet that supports multiple blockchain networks including Ethereum, Polygon, and Solana. Features include hardware wallet integration, DeFi protocol interactions (swapping, lending, staking), NFT gallery, and transaction history with detailed analytics. Security-first design with biometric authentication and encrypted local storage.",
    tags: ["Web3.js", "Solidity", "React", "Ethers.js"],
    category: "Web3",
    image: "/images/web3-crypto-wallet-blockchain.jpg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: false,
    year: 2023,
    techStack: ["React", "TypeScript", "Ethers.js", "Web3.js", "Solidity", "Hardhat", "IPFS"],
  },
  {
    slug: "saas-starter",
    title: "SaaS Starter Template",
    description: "A production-ready SaaS boilerplate with authentication, billing, team management, and admin dashboard.",
    longDescription: "Created a comprehensive SaaS starter template that accelerates time-to-market for new products. Includes complete authentication flows (email, OAuth, magic links), Stripe subscription billing with usage-based pricing, team management with role-based access control, an admin dashboard, email notifications, and full TypeScript support throughout.",
    tags: ["Next.js", "Prisma", "Stripe", "Auth.js"],
    category: "Web App",
    image: "/images/saas-starter-template-dashboard.jpg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: false,
    year: 2024,
    techStack: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Auth.js", "Resend", "Tailwind CSS"],
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 92, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Framer Motion", level: 85, category: "Frontend" },
  // Backend
  { name: "Node.js / Express", level: 88, category: "Backend" },
  { name: "Python / FastAPI", level: 82, category: "Backend" },
  { name: "PostgreSQL", level: 85, category: "Backend" },
  { name: "Redis", level: 78, category: "Backend" },
  // DevOps
  { name: "Docker / Kubernetes", level: 80, category: "DevOps" },
  { name: "AWS / GCP", level: 78, category: "DevOps" },
  { name: "CI/CD Pipelines", level: 85, category: "DevOps" },
  { name: "Terraform", level: 72, category: "DevOps" },
  // Other
  { name: "GraphQL", level: 80, category: "Other" },
  { name: "Web3 / Solidity", level: 70, category: "Other" },
  { name: "Machine Learning", level: 68, category: "Other" },
  { name: "System Design", level: 88, category: "Other" },
];

export const categories = ["All", "Web App", "E-Commerce", "DevOps", "Mobile", "Web3"];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
  { name: "Email", url: "mailto:hello@alexdev.io", icon: "Mail" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
