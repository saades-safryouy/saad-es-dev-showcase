import projectCallsImage from "@/assets/project-calls-platform.jpg";

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
    company: "Attijariwafa Bank",
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
    title: "Argan Beauty — E-commerce Platform",
    shortName: "Argan Beauty",
    description:
      "A modern e-commerce web platform for a Moroccan beauty brand specializing in argan-based products. The application provides product browsing, category management, a shopping experience, and a responsive user interface designed to showcase Moroccan beauty products.",
    tech: ["React", "JavaScript", "Tailwind CSS", "PHP", "MySQL", "REST API"],
    placeholder: false,
  },
  {
    title: "Car Rental Management Platform",
    shortName: "Car Rental",
    description:
      "A web-based car rental platform designed to simplify vehicle management and the rental process. The application allows users to browse available vehicles, view rental information, and manage bookings through a modern and responsive interface.",
    tech: ["React", "JavaScript", "Laravel", "PHP", "MySQL", "REST API"],
    placeholder: false,
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

export const repositories = [
  { name: "call_management", description: "Call for application management system.", url: "https://github.com/saades-safryouy/call_management" },
  { name: "argan_beauty", description: "E-commerce platform for argan-based products.", url: "https://github.com/maz-s3d3/Argan-Beauty" },
  { name: "car_rental", description: "Car rental management platform.", url: "https://github.com/saades-safryouy/car_rental" },
];
