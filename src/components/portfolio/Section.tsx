import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28", className)}>
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </Reveal>
      <div className="mt-10 md:mt-14">{children}</div>
    </section>
  );
}
