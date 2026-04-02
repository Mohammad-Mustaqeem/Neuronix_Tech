// src/constants/index.js

export const SITE_NAME = "Neuronix Technology";
export const SITE_TAGLINE = "We Engineer Digital Realities";
export const CONTACT_EMAIL = "hello@neuronix.tech";
export const FOUNDED_YEAR = 2019;

/** @type {{ id: string, num: string, icon: string, title: string, desc: string }[]} */
export const SERVICES = [
  {
    id: "software",
    num: "01",
    icon: "⬡",
    title: "Custom Software Development",
    desc: "Bespoke software solutions built to your exact specifications. We architect systems that scale with your business and stand the test of time.",
  },
  {
    id: "websites",
    num: "02",
    icon: "◈",
    title: "Website Design & Development",
    desc: "Websites that don't just look exceptional — they perform. From landing pages to complex portals, we obsess over every pixel and millisecond.",
  },
  {
    id: "webapps",
    num: "03",
    icon: "⬟",
    title: "Web Application Engineering",
    desc: "Full-stack web apps with modern React frontends and robust backends. We turn complex workflows into intuitive digital experiences.",
  },
  {
    id: "api",
    num: "04",
    icon: "◎",
    title: "API Design & Integration",
    desc: "Seamlessly connect your systems with custom API architecture, third-party integrations, and microservices that just work.",
  },
  {
    id: "cloud",
    num: "05",
    icon: "◇",
    title: "Cloud Infrastructure & DevOps",
    desc: "Reliable, auto-scaling infrastructure on AWS, GCP, or Azure. CI/CD pipelines, containerization, and zero-downtime deployments.",
  },
  {
    id: "consulting",
    num: "06",
    icon: "◉",
    title: "Technical Consulting",
    desc: "Architecture reviews, tech stack decisions, code audits. We bring the expertise to validate and elevate your technical direction.",
  },
];

/** @type {{ num: string, label: string }[]} */
export const STATS = [
  { num: "120+", label: "Projects Delivered" },
  { num: "98%",  label: "Client Satisfaction" },
  { num: "5+",   label: "Years Experience" },
  { num: "40+",  label: "Tech Partners" },
];

/** @type {{ initials: string, name: string, role: string, bio: string }[]} */
export const TEAM = [
  {
    initials: "AK",
    name: "Aryan Kapoor",
    role: "Founder & CTO",
    bio: "Full-stack architect with 10+ years building distributed systems. Former SDE at two YC-backed startups.",
  },
  {
    initials: "SR",
    name: "Sanya Reddy",
    role: "Head of Design",
    bio: "Design systems expert who makes complex interfaces feel inevitable. Believes every pixel is a product decision.",
  },
  {
    initials: "VM",
    name: "Vikram Mehta",
    role: "Lead Backend Engineer",
    bio: "Infrastructure obsessive. Has built APIs serving 50M+ requests/day. Go, Node.js, and Rust in his arsenal.",
  },
];

/** @type {{ label: string; value: string }[]} */
export const TECH_STACK = [
  { label: "Frontend",       value: "React" },
  { label: "Backend",        value: "Node.js" },
  { label: "Infrastructure", value: "AWS" },
  { label: "Data Layer",     value: "PG / Mongo" },
];

export const VALUES = [
  {
    id: "01",
    title: "Precision Engineering",
    desc: "Every line of code is intentional. We engineer software with the same rigor as critical infrastructure.",
  },
  {
    id: "02",
    title: "Client-First Philosophy",
    desc: "Your success is our metric. We stay invested long after the project ships.",
  },
  {
    id: "03",
    title: "Radical Transparency",
    desc: "No hidden fees, no black boxes. You always know what we're building and why.",
  },
];
