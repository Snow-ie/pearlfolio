import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiFramer,
  SiSupabase,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMysql,

  // SiMicrosoftexcel,
  SiTableau,
} from "react-icons/si";

import { Layers3, FileText, Wand } from "lucide-react";

export const profile = {
  name: "Pearl Onyinyechi Ekeh",
  role: "Front-End Software Developer",
  summary: `Driven front-end developer with a knack for turning Figma designs into fast, 
       accessible Next.js applications. Experienced integrating REST APIs, writing 
       clean TypeScript, and collaborating in cross-functional teams to ship user-
       friendly products.`,
  location: "Abuja, Nigeria",

  avatar: "/images/avatar.png",
  icons: {
    email: "/icons/mail.svg",
    linkedin: "/icons/linkedin.svg",
    github: "/icons/github.svg",
  },

  contacts: {
    email: "pearlekeh7@gmail.com",
    linkedin: "https://linkedin.com/in/onyinyechi-ekeh",
    github: "https://github.com/Snow-ie",
  },
};

export const skills = {
  frontend: [
    { label: "HTML5", icon: SiHtml5 },
    { label: "CSS3", icon: SiCss3 },
    { label: "Tailwind CSS", icon: SiTailwindcss },
    { label: "React", icon: SiReact },
    { label: "Next.js", icon: SiNextdotjs },
    { label: "Redux", icon: SiRedux },
    { label: "Framer Motion", icon: SiFramer },
    { label: "Supabase", icon: SiSupabase },
  ],

  languages: [
    { label: "JavaScript", icon: SiJavascript },
    { label: "TypeScript", icon: SiTypescript },
    { label: "Python", icon: SiPython },
    { label: "SQL", icon: SiMysql },
  ],

  data: [
    // { label: "Excel", icon:  },
    { label: "Tableau", icon: SiTableau },
    { label: "Data Modelling", icon: Layers3 },
    { label: "Report Writing", icon: FileText },
    { label: "Data Cleaning & Formatting", icon: Wand },
  ],
} as const;

export const projects = [
  {
    name: "Kerberos",
    live: "https://kerberos.ng",
    tech: ["Next.js", "Tailwind CSS", "Figma"],
    summary:
      "Corporate website built end-to-end from Figma designs: implemented responsive pages, integrated Supabase CMS, and deployed friction-free to Vercel.",
    thumbnail: "/images/Kerberos.png",
  },
  {
    name: "Vendavault",
    live: "https://vendavault.com",
    tech: ["Typescript", "Next.js", "Tailwind CSS", "REST API"],
    summary:
      "Customer-onboarding portal delivered as a single-page app, featuring dynamic dashboards and CI/CD pipelines for rapid iteration.",
    thumbnail: "/images/vendavault.png",
  },
  {
    name: "Learn & Leap Tutors",
    live: "https://learnandleaptutors.com",
    tech: ["Next.js", "Tailwind CSS"],
    summary:
      "Education platform offering flexible online/in-person tutoring with a focus on personalised learning.",
    thumbnail: "/images/learn-leap.png",
  },
  {
    name: "Sebest Trading",
    live: "https://sebesttrading.com",
    tech: ["Next.js", "Tailwind CSS"],
    summary:
      "Trading firm specialising in supply-chain management and product sourcing, built with responsive UI and CMS-driven content.",
    thumbnail: "/images/sebest-trading.png",
  },
  {
    name: "E-commerce Store Demo",
    live: "https://e-commerce-2-one.vercel.app",
    tech: ["React", "Tailwind CSS", "Redux", "REST API"],
    summary:
      "Responsive storefront featuring category sidebar, search, flash-sale banner, wishlist and cart; state managed with Redux and integrated with RESTful endpoints.",
    thumbnail: "/images/ecommerce.png",
  },
];

export const experience = [
  {
    company: "Kerberos",
    title: "Front-End Developer (Contract)",
    period: " 2025",
    bullets: [
      "Built the company website end-to-end: architected the project, coded the UI in Next.js + Tailwind CSS, and wired up CMS & analytics.",
      "Converted Figma designs into pixel-perfect, responsive pages with < 100 ms TTI on LTE.",
      "Set up CI/CD (GitHub Actions) and deployed to Upperlink, enabling zero-downtime rollouts and on-demand preview URLs for every PR.",
    ],
  },
  {
    company: "Vendavault",
    title: "Frontend Engineer (Contract)",
    period: "2025",
    bullets: [
      "Delivered a new customer-onboarding portal in under six weeks, collaborating closely with designers and backend engineers.",
      "Migrated legacy jQuery views to modern React components, cutting bundle size by 28 %.",
      "Added Jest + Playwright tests to reach 90 % coverage and prevent regressions.",
    ],
  },

  {
    company: "Hardcore Biometric Systems",
    title: "Front-End Developer",
    period: "Jan 2024 – Present",
    bullets: [
      "Translate Figma mock-ups into performant, responsive pages (HTML5, CSS3, JS).",
      "Optimise load-time and cross-browser compatibility, achieving < 1 s LCP.",
      "Integrate front-end with REST APIs to deliver real-time biometric data.",
    ],
  },
  {
    company: "Niger Delta Development Commission",
    title: "Front-End Intern",
    period: "Nov 2021 – Jul 2022",
    bullets: [
      "Automated data extraction and cleaning, reducing manual effort by 40 %.",
      "Built and maintained structured databases for easier reporting.",
      "Performed exploratory analysis to surface trends and improve data quality.",
    ],
  },
];

export const education = [
  {
    school: "University of Benin",
    degree: "B.Sc. Computer Science",
    period: "Sept 2019 – Oct 2023",
  },
];
