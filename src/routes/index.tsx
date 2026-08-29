import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { GitHubSection } from "@/components/portfolio/GitHubSection";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Saad ES-SAFRYOUY | Software Engineer & Full-Stack Developer";
const description =
  "Saad ES-SAFRYOUY, a Software Engineer and Full-Stack Developer specializing in modern web applications, Java, Spring Boot, React, and software development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Saad ES-SAFRYOUY",
          jobTitle: "Software Engineer | Full-Stack Developer",
          alumniOf: "ESTEM",
          knowsAbout: ["React", "Java", "Spring Boot", "MySQL", "TypeScript", "IT Support"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <meta
  name="description"
  content="Saad ES-SAFRYOUY — Software Engineer and IT Support Technician specializing in Java, Spring Boot, React, TypeScript, web development and enterprise IT support."
/>

<meta
  name="keywords"
  content="Saad ES-SAFRYOUY, Software Engineer, React Developer, TypeScript Developer, Java Developer, Spring Boot, IT Support, Morocco"
/>

<meta name="author" content="Saad ES-SAFRYOUY" />

<meta name="robots" content="index, follow" />

<link rel="canonical" href="https://YOUR-DOMAIN.com/" />

      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Skills />
        <Certifications />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
