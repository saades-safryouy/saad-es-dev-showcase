import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

const codeLines = [
  { indent: 0, tokens: [["const", "kw"], [" engineer", "var"], [" = ", "op"], ["{", "op"]] },
  { indent: 1, tokens: [["name:", "prop"], [' "Saad ES-SAFRYOUY"', "str"], [",", "op"]] },
  { indent: 1, tokens: [["role:", "prop"], [' "Full-Stack Developer"', "str"], [",", "op"]] },
  { indent: 1, tokens: [["stack:", "prop"], [" [", "op"], ['"React"', "str"], [", ", "op"], ['"Spring Boot"', "str"], ["],", "op"]] },
  { indent: 1, tokens: [["focus:", "prop"], [' "reliable web apps"', "str"], [",", "op"]] },
  { indent: 0, tokens: [["};", "op"]] },
] as const;

const tokenClass: Record<string, string> = {
  kw: "text-primary",
  var: "text-foreground",
  op: "text-muted-foreground",
  prop: "text-foreground/80",
  str: "text-primary/80",
};

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="home" className="noise relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="grid-bg pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-5 pb-20 pt-32 sm:px-8 md:pb-28 md:pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {profile.status}
          </span>

          <p className="mt-7 font-mono text-sm text-primary">Hi, I&apos;m Saad ES-SAFRYOUY</p>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Software Engineer</span> building modern web experiences.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3">
            {[
              { href: profile.github, label: "GitHub profile", Icon: Github },
              { href: profile.linkedin, label: "LinkedIn profile", Icon: Linkedin },
              { href: `mailto:${profile.email}`, label: "Send an email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
          aria-hidden="true"
        >
          <div className="panel relative overflow-hidden rounded-xl">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/15" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">engineer.ts</span>
            </div>
            <pre className="overflow-x-auto px-5 py-6 font-mono text-[13px] leading-7">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.3 + i * 0.08 }}
                  className="flex gap-4"
                >
                  <span className="w-4 select-none text-right text-muted-foreground/40">{i + 1}</span>
                  <span style={{ paddingLeft: line.indent * 20 }}>
                    {line.tokens.map(([text, kind], j) => (
                      <span key={j} className={tokenClass[kind]}>
                        {text}
                      </span>
                    ))}
                  </span>
                </motion.div>
              ))}
              <span className="ml-8 inline-block h-4 w-2 animate-pulse bg-primary align-middle" />
            </pre>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {["React", "Spring Boot", "MySQL"].map((tech) => (
              <div
                key={tech}
                className="panel rounded-lg px-3 py-3 text-center font-mono text-xs text-muted-foreground"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="relative mx-auto mb-10 flex w-fit items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        Scroll
      </a>
    </section>
  );
}
