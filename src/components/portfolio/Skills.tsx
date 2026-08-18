import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I work with"
      description="Tools and technologies I use across development, data and IT systems."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <div className="panel h-full rounded-xl p-6 transition-colors hover:border-primary/30">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface-2/50 px-3 py-1.5 text-sm text-foreground/85 transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
