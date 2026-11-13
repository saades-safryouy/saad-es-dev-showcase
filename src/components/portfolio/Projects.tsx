import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useGithubProjects } from "@/hooks/useGithubProjects";
import type { GithubProject } from "@/lib/github/types";
import { format } from "date-fns";
import { FeaturedProjectCard, TechList, ProjectLinkButtons } from "./FeaturedProject";
import { FeaturedSkeleton, ProjectSkeleton } from "./ProjectSkeletons";

export function Projects() {
  const [selected, setSelected] = useState<GithubProject | null>(null);
  const { data: projects, isLoading, isError, error, refetch } = useGithubProjects();

  if (isLoading) {
    return (
      <Section id="projects" eyebrow="Projects" title="What I have built" description="Selected work, starting with my final-year project.">
        <FeaturedSkeleton />
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <ProjectSkeleton />
          <ProjectSkeleton />
          <ProjectSkeleton />
        </div>
      </Section>
    );
  }

  if (isError) {
    return (
      <Section id="projects" eyebrow="Projects" title="What I have built" description="Selected work, starting with my final-year project.">
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            Failed to load projects from GitHub.{error instanceof Error && ` ${error.message}`}
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <button onClick={() => refetch()} className="rounded-md border border-border px-3.5 py-2 text-sm text-foreground transition-colors hover:bg-surface-2">
              Retry
            </button>
            <a href="https://github.com/saades-safryouy" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm text-foreground transition-colors hover:bg-surface-2">
              <Github className="h-4 w-4" /> View on GitHub
            </a>
          </div>
        </div>
      </Section>
    );
  }

  const allProjects = projects ?? [];
  const featured = allProjects.find((p) => p.featured);
  const others = allProjects.filter((p) => !p.featured);

  if (allProjects.length === 0) {
    return (
      <Section id="projects" eyebrow="Projects" title="What I have built" description="Selected work, starting with my final-year project.">
        <div className="text-center py-12">
          <p className="text-muted-foreground">No public repositories to show.</p>
        </div>
      </Section>
    );
  }

  return (
    <Section id="projects" eyebrow="Projects" title="What I have built" description="Selected work, starting with my final-year project.">
      {featured ? <FeaturedProjectCard featured={featured} onDetails={() => setSelected(featured)} /> : null}

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {others.map((project, i) => (
          <Reveal key={`${project.name}-${i}`} delay={i * 0.06}>
            <article className="panel flex h-full flex-col rounded-xl p-6 transition-colors hover:border-primary/30">
              <h3 className="mt-4 text-lg font-semibold">{project.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description ?? "No description provided."}
              </p>
              <div className="mt-5"><TechList tech={project.tech} /></div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Github className="h-3.5 w-3.5" />{project.stars} star{project.stars !== 1 ? "s" : ""}</span>
                <span className="flex items-center gap-1">Last updated: {format(new Date(project.updatedAt), "MMM d, yyyy")}</span>
              </div>
              <div className="mt-5"><ProjectLinkButtons project={project} onDetails={() => setSelected(project)} /></div>
            </article>
          </Reveal>
        ))}
      </div>

      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl">{selected?.name}</DialogTitle>
            <DialogDescription>{selected?.description ?? "No description provided."}</DialogDescription>
          </DialogHeader>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Stack</h4>
            <div className="mt-3">{selected ? <TechList tech={selected.tech} /> : null}</div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Github className="h-3.5 w-3.5" />{selected?.stars} star{selected?.stars !== 1 ? "s" : ""}</span>
            <span className="flex items-center gap-1">Last updated: {selected ? format(new Date(selected.updatedAt), "MMM d, yyyy") : null}</span>
            {selected?.demo && (
              <a href={selected.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
                <ExternalLink className="h-3.5 w-3.5" />Live Demo
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Section>
  );
}