export const profile = {
  name: "Saad ES-SAFRYOUY",
  title: "Software Engineer | Full-Stack Developer",
  headline: "Software Engineer building modern web experiences.",
  intro:
    "Software Engineering graduate with experience in full-stack development, IT support, and enterprise environments. I build reliable, scalable, and user-focused applications using modern technologies.",
  status: "Available for opportunities",
  email: "saadessafryouy@gmail.com", // TODO: replace with your email
  github: "https://github.com/saades-safryouy/", // TODO: replace with your GitHub profile
  linkedin: "https://www.linkedin.com/in/saad-es-safryouy-171930176/", // TODO: replace with your LinkedIn profile
  cvUrl: "/CV_ES-SAFRYOUY_Saad_Developpeur.pdf", // TODO: place your CV at public/cv.pdf
  location: "Morocco, Casablanca",
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
  company: "Munisys",
  role: "IT Support Technician",
  context: "Banking / enterprise IT environment",
  points: [
    "Provided Level 1 technical support for business users",
    "Diagnosed and resolved hardware and software incidents",
    "Set up and maintained workstations and peripherals",
    "Performed basic network troubleshooting",
    "Managed and followed up on incidents and service requests",
    "Worked with ServiceNow for incident and request management",
    "Assisted users in an enterprise IT environment",
  ],
  stack: ["ServiceNow", "IT Support", "ITSM", "Windows", "Networking"],
},
 {
    company: "ONEE",
    role: "Software Development Intern — DSI",
    context: "Call for Applications Management Project",
    points: [
      "Developed a web application for managing calls for applications",
      "Participated in the design and development of the application's features",
      "Implemented backend functionality using C# and ASP.NET",
      "Worked with application data management and business workflows",
    ],
    stack: ["C#", "ASP.NET", "SQL Server", "Web Development"],
  },
];



export const skillGroups = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "REST APIs", "Laravel", "PHP", "Python", "C# / .NET"],
  },
  { category: "Database", items: ["MySQL", "SQL", "MongoDB"] },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "Maven", "Postman", "VS Code", "IntelliJ IDEA"],
  },
  {
    category: "IT & Systems",
    items: ["Windows Server", "Ubuntu Server", "ServiceNow", "IT Support", "Troubleshooting", "Networking"],
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
    name: "ChatGPT Prompt Engineering for Developers",
    issuer: "Deeplearning.ai",
    date: "2024-12-01",
  },
  {
    name: "Relational to Document Model MongoDB",
    issuer: "Issuing organization",
    date: "2025-11-01",
  },
];

export const education = [
  {
    school: "ESTEM",
    degree: "Bachelor's Degree in Software Engineering",
    detail: "3rd Year — Bachelor's Degree in Software Engineering",
    period: "16/10/2025 - 22/07/2026",
  },
  {
    school: "OFPPT",
    degree: "Web Full-Stack Development",
    detail: "Diploma in Web Full-Stack Development",
    period: "03/9/2023 - 26/07/2025",
  }
];


