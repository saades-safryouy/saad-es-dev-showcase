import { Building2, Code2, GraduationCap, Wrench } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { education, focusAreas, profile } from "@/data/portfolio";

const cards = [
  {
    Icon: GraduationCap,
    title: "Education",
    text: `${education[0]?.degree} — ${education[0]?.school}`,
  },
  {
    Icon: Building2,
    title: "Experience",
    text: "IT Support Technician in a banking environment",
  },
  {
    Icon: Code2,
    title: "Development",
    text: "Full-stack web applications with React, Java and Spring Boot",
  },
  {
    Icon: Wrench,
    title: "Systems",
    text: "IT support, troubleshooting and enterprise infrastructure",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Software engineering, with a systems mindset."
      description="I work at the intersection of software development and IT infrastructure — building applications and keeping the environments they run in healthy."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a Software Engineering graduate from ESTEM with experience in both software
            development and IT support. My final-year project was a full-stack web platform for
            managing calls for applications, built with React, Spring Boot and MySQL.
          </p>
          <p>
            Alongside development, I work as an IT Support Technician in a banking environment,
            where I handle troubleshooting, workstation and network issues, and incident management
            for business users. That experience shapes how I build software: reliability,
            traceability and real user needs come first.
          </p>
          <p>
            I&apos;m interested in building web applications, designing clean APIs and databases, and
            solving technical problems end to end — from the interface down to the infrastructure.
          </p>

          <ul className="flex flex-wrap gap-2 pt-2">
            {focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-md border border-border bg-surface/60 px-3 py-1.5 font-mono text-xs text-foreground/80"
              >
                {area}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {cards.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="panel group flex gap-4 rounded-xl p-5 transition-colors hover:border-primary/30">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border bg-surface-2 text-primary">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <h3 className="text-sm font-medium">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.24}>
            <div className="panel rounded-xl p-5">
              <p className="font-mono text-xs text-muted-foreground">Based in</p>
              <p className="mt-1 text-sm">{profile.location}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
