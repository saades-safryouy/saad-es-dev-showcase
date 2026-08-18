import projectCallsImage from "@/assets/project-calls-platform.jpg";

export const profile = {
  name: "Saad ES-SAFRYOUY",
  title: "Software Engineer | Full-Stack Developer",
  headline: "Software Engineer building modern web experiences.",
  intro:
    "Software Engineering graduate with experience in full-stack development, IT support, and enterprise environments. I build reliable, scalable, and user-focused applications using modern technologies.",
  status: "Available for opportunities",
  email: "contact@example.com", // TODO: replace with your email
  github: "https://github.com/", // TODO: replace with your GitHub profile
  linkedin: "https://www.linkedin.com/", // TODO: replace with your LinkedIn profile
  cvUrl: "/cv.pdf", // TODO: place your CV at public/cv.pdf
  location: "Morocco",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const focusAreas = [
  "Full-stack development",
  "Backend development",
  "Frontend development",
  "Database design",
  "API development",
  "IT support",
  "Troubleshooting",
  "Enterprise environments",
];

export type Experience = {
  company: string;
  role: string;
  context?: string;
  period?: string;
  points: string[];
  stack?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Attijariwafa Bank",
    role: "IT Support Technician",
    context: "Banking / enterprise IT environment",
    points: [
      "Level 1 technical support for business users",
      "Hardware and software troubleshooting",
      "Workstation setup and support",
      "Network troubleshooting",
      "Incident management and follow-up",
      "User assistance in an enterprise IT environment",
    ],
  },
  {
    company: "Munisys",
    role: "Full-Stack Developer — PFE / Internship",
    context: "Web Platform for Managing Calls for Applications",
    points: [
      "Designed and developed a web platform for managing calls for applications",
      "Built REST APIs with Spring Boot and Java",
      "Developed the frontend interfaces with React",
      "Modeled and managed the MySQL database",
      "Version control and collaboration with Git",
    ],
    stack: ["React", "Spring Boot", "Java", "MySQL", "REST APIs", "Git"],
  },
  {
    company: "Atos",
    role: "ServiceNow Training & Experience",
    context: "IT service management",
    points: [
      "Exposure to the ServiceNow platform",
      "IT service management practices",
      "Incident and request management workflows",
      "Complementary training on Windows Server",
    ],
    stack: ["ServiceNow", "ITSM", "Windows Server"],
  },
];

export type Project = {
  title: string;
  shortName: string;
  description: string;
  features?: string[];
  tech: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    title: "Web Platform for Managing Calls for Applications",
    shortName: "Call for Applications Management Platform",
    description:
      "A full-stack web platform designed to manage calls for applications, candidates, applications, documents, and recruitment workflows.",
    features: [
      "Authentication and authorization",
      "Role-based access",
      "Candidate management",
      "Application management",
      "Document management",
      "Application status tracking",
      "Dashboard and statistics",
      "RESTful APIs",
    ],
    tech: [
      "React",
      "Spring Boot",
      "Java",
      "MySQL",
      "REST API",
      "Spring Security",
      "JWT",
      "Git",
    ],
    image: projectCallsImage,
    featured: true,
  },
  {
    title: "Project slot — add your next project",
    shortName: "Coming soon",
    description:
      "Placeholder card. Replace the title, description, technologies and links in src/data/portfolio.ts.",
    tech: ["TBD"],
    placeholder: true,
  },
  {
    title: "Project slot — add your next project",
    shortName: "Coming soon",
    description:
      "Placeholder card. Replace the title, description, technologies and links in src/data/portfolio.ts.",
    tech: ["TBD"],
    placeholder: true,
  },
];

export const skillGroups = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "REST APIs", "PHP", "Python", "C# / .NET"],
  },
  { category: "Database", items: ["MySQL", "SQL"] },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "Maven", "Postman", "VS Code", "IntelliJ IDEA"],
  },
  {
    category: "IT & Systems",
    items: ["Windows Server", "ServiceNow", "IT Support", "Troubleshooting", "Networking"],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "Certification name",
    issuer: "Issuing organization",
    date: "Date",
  },
  {
    name: "Certification name",
    issuer: "Issuing organization",
    date: "Date",
  },
];

export const education = [
  {
    school: "ESTEM",
    degree: "Professional Bachelor's Degree in Software Engineering",
    detail: "3rd Year — Professional Bachelor's Degree in Software Engineering",
    period: "",
  },
];

export const repositories = [
  { name: "Repository name", description: "Short repository description.", url: profile.github },
  { name: "Repository name", description: "Short repository description.", url: profile.github },
];
