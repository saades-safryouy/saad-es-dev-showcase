import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { profile, repositories } from "@/data/portfolio";

export function GitHubSection() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
      <Reveal>
        <div className="panel noise relative overflow-hidden rounded-2xl p-8 sm:p-10">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">GitHub</p>
              <h2 className="mt-3 text-3xl font-semibold">Explore my code</h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Source code, experiments and side projects live on my GitHub profile. Repository
                cards below link straight to the code.
              </p>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                <Github className="h-4 w-4" />
                Visit GitHub profile
              </a>
            </div>

            <ul className="grid gap-3">
              {repositories.map((repo, i) => (
                <li key={`${repo.name}-${i}`}>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-surface/60 p-4 transition-colors hover:border-primary/40"
                  >
                    <span>
                      <span className="block font-mono text-sm text-foreground">{repo.name}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {repo.description}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
