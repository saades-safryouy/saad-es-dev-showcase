import { Reveal } from "./Reveal";

export function ProjectSkeleton() {
  return (
    <article className="panel flex h-full flex-col rounded-xl p-6 animate-pulse">
      <div className="h-6 bg-surface-2/60 rounded w-3/4" />
      <div className="mt-2 flex-1 space-y-3">
        <div className="h-4 bg-surface-2/60 rounded w-full" />
        <div className="h-4 bg-surface-2/60 rounded w-5/6" />
        <div className="h-4 bg-surface-2/60 rounded w-4/6" />
      </div>
      <div className="mt-5 flex gap-2">
        <div className="h-6 bg-surface-2/60 rounded px-3 w-20" />
        <div className="h-6 bg-surface-2/60 rounded px-3 w-24" />
      </div>
      <div className="mt-5 flex gap-2">
        <div className="h-10 bg-surface-2/60 rounded px-4 flex-1" />
        <div className="h-10 bg-surface-2/60 rounded px-4 flex-1" />
        <div className="h-10 bg-surface-2/60 rounded px-4 flex-1" />
      </div>
    </article>
  );
}

export function FeaturedSkeleton() {
  return (
    <Reveal>
      <article className="panel group overflow-hidden rounded-2xl transition-colors hover:border-primary/30">
        <div className="grid lg:grid-cols-[1.15fr_1fr]">
          <div className="relative overflow-hidden border-b border-border lg:border-b-0 lg:border-r h-64">
            <div className="absolute inset-0 bg-surface-2/60 animate-pulse" />
          </div>
          <div className="p-6 sm:p-8 space-y-4">
            <div className="h-3 bg-surface-2/60 rounded w-24" />
            <div className="h-7 bg-surface-2/60 rounded w-3/4" />
            <div className="h-4 bg-surface-2/60 rounded w-full" />
            <div className="h-4 bg-surface-2/60 rounded w-5/6" />
            <div className="h-4 bg-surface-2/60 rounded w-4/6" />
            <div className="h-6 bg-surface-2/60 rounded w-24" />
            <div className="h-10 bg-surface-2/60 rounded flex-1" />
            <div className="h-10 bg-surface-2/60 rounded flex-1" />
            <div className="h-10 bg-surface-2/60 rounded flex-1" />
          </div>
        </div>
      </article>
    </Reveal>
  );
}