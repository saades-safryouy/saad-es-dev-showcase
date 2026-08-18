import { Award, ExternalLink, GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { certifications, education } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications & Education"
      title="Credentials and academic background"
      description="Certifications and formal education. Cards are data-driven and easy to update."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={`${cert.name}-${i}`} delay={i * 0.06}>
              <article className="panel flex h-full flex-col rounded-xl p-5 transition-colors hover:border-primary/30">
                <span className="grid h-11 w-11 place-items-center rounded-md border border-border bg-surface-2 text-primary">
                  <Award className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-medium">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{cert.date}</p>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    View credential <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="mt-4 font-mono text-xs text-muted-foreground/70">
                    Credential link — to add
                  </span>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <div id="education" className="space-y-4">
          {education.map((item, i) => (
            <Reveal key={item.school} delay={i * 0.06}>
              <article className="panel rounded-xl p-6">
                <span className="grid h-11 w-11 place-items-center rounded-md border border-border bg-surface-2 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{item.school}</h3>
                <p className="mt-1 text-sm text-primary">{item.degree}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                {item.period ? (
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{item.period}</p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
