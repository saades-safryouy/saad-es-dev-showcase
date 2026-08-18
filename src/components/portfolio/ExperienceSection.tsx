import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I have worked"
      description="Professional experience across enterprise IT support and full-stack development."
    >
      <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-10">
        {experiences.map((item, i) => (
          <li key={item.company}>
            <Reveal delay={i * 0.06}>
              <span className="absolute -left-[5px] mt-6 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
              <article className="panel rounded-xl p-6 transition-colors hover:border-primary/30">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                  {item.period ? (
                    <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-primary">{item.company}</p>
                {item.context ? (
                  <p className="mt-1 text-sm text-muted-foreground">{item.context}</p>
                ) : null}

                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                      {point}
                    </li>
                  ))}
                </ul>

                {item.stack ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] text-foreground/75"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
