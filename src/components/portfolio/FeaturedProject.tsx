import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import type { GithubProject } from "@/lib/github/types";
import { format } from "date-fns";
import profilePic from "../../assets/project-calls-platform.png";
export function TechList({ tech }: { tech: string[] }) {
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

export function ProjectLinkButtons({
  project,
  onDetails,
}: {
  project: GithubProject;
  onDetails: () => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm text-foreground transition-colors hover:bg-surface-2"
      >
        <Github className="h-4 w-4" /> GitHub
      </a>
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

export function FeaturedProjectCard({
  featured,
  onDetails,
}: {
  featured: GithubProject;
  onDetails: () => void;
}) {
  return (
    <Reveal>
      <article className="panel group overflow-hidden rounded-2xl transition-colors hover:border-primary/30">
        <div className="grid lg:grid-cols-[1.15fr_1fr]">
          <div className="relative overflow-hidden border-b border-border lg:border-b-0 lg:border-r h-64 bg-surface-2/30">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-mono text-xs">
              <img src={profilePic} alt={featured.name} />
            </div>
          </div>
          <div className="p-6 sm:p-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Featured project
            </span>
            <h3 className="mt-3 text-2xl font-semibold leading-snug">{featured.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {featured.description ?? "No description provided."}
            </p>

            <div className="mt-5">
              <TechList tech={featured.tech} />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Github className="h-3.5 w-3.5" />
                {featured.stars} star{featured.stars !== 1 ? "s" : ""}
              </span>
              <span className="flex items-center gap-1">
                Last updated: {format(new Date(featured.updatedAt), "MMM d, yyyy")}
              </span>
            </div>

            <div className="mt-6">
              <ProjectLinkButtons project={featured} onDetails={onDetails} />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}