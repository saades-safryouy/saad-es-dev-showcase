import { useState } from "react";
import { ExternalLink, Github, Plus, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { projects, type Project } from "@/data/portfolio";

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] text-foreground/75"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function LinkButtons({ project, onDetails }: { project: Project; onDetails: () => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm text-foreground transition-colors hover:bg-surface-2"
        >
          <Github className="h-4 w-4" /> GitHub
        </a>
      ) : null}
      {project.demo ? (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm text-foreground transition-colors hover:bg-surface-2"
        >
          <ExternalLink className="h-4 w-4" /> Live Demo
        </a>
      ) : null}
      <button
        type="button"
        onClick={onDetails}
        className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3.5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
      >
        View Details
      </button>
    </div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="What I have built"
      description="Selected work, starting with my final-year project."
    >
      {featured ? (
        <Reveal>
          <article className="panel group overflow-hidden rounded-2xl transition-colors hover:border-primary/30">
            <div className="grid lg:grid-cols-[1.15fr_1fr]">
              <div className="relative overflow-hidden border-b border-border lg:border-b-0 lg:border-r">
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt="Dashboard of the call for applications management platform showing candidates, application statuses and statistics"
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : null}
              </div>
              <div className="p-6 sm:p-8">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  Featured project
                </span>
                <h3 className="mt-3 text-2xl font-semibold leading-snug">{featured.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {featured.features?.slice(0, 6).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <TechList tech={featured.tech} />
                </div>
                <div className="mt-6">
                  <LinkButtons project={featured} onDetails={() => setSelected(featured)} />
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      ) : null}

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {others.map((project, i) => (
          <Reveal key={`${project.title}-${i}`} delay={i * 0.06}>
            <article className="panel flex h-full flex-col rounded-xl p-6 transition-colors hover:border-primary/30">
              {project.placeholder ? (
                <span className="grid h-10 w-10 place-items-center rounded-md border border-dashed border-border text-muted-foreground">
                  <Plus className="h-4 w-4" />
                </span>
              ) : null}
              <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5">
                <TechList tech={project.tech} />
              </div>
              {!project.placeholder ? (
                <div className="mt-5">
                  <LinkButtons project={project} onDetails={() => setSelected(project)} />
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl">{selected?.title}</DialogTitle>
            <DialogDescription>{selected?.description}</DialogDescription>
          </DialogHeader>
          {selected?.features ? (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Features</h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {selected.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Stack</h4>
            <div className="mt-3">{selected ? <TechList tech={selected.tech} /> : null}</div>
          </div>
        </DialogContent>
      </Dialog>
    </Section>
  );
}
