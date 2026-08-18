import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Fields = "name" | "email" | "subject" | "message";
type FormState = Record<Fields, string>;

const initialState: FormState = { name: "", email: "", subject: "", message: "" };

function validate(values: FormState): Partial<Record<Fields, string>> {
  const errors: Partial<Record<Fields, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (values.subject.trim().length < 3) errors.subject = "Please add a subject.";
  if (values.message.trim().length < 10) errors.message = "Message should be at least 10 characters.";
  return errors;
}

const inputClass =
  "w-full rounded-md border border-border bg-surface/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-2 focus:ring-ring";

export function Contact() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});

  const update = (field: Fields, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Integration point: send `values` to an email service or backend endpoint here.
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)}`;
    window.location.href = mailto;
    toast.success("Opening your email client…", {
      description: "Email sending is not connected yet — your message was prefilled instead.",
    });
    setValues(initialState);
  };

  const fields: { name: Fields; label: string; type?: string; placeholder: string }[] = [
    { name: "name", label: "Name", placeholder: "Your name" },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    { name: "subject", label: "Subject", placeholder: "What is this about?" },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something great together."
      description="Open to software engineering and full-stack development opportunities. Send a message or reach me directly."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="space-y-3">
          {[
            { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
            { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com", href: profile.linkedin },
            { Icon: Github, label: "GitHub", value: "github.com", href: profile.github },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="panel flex items-center gap-4 rounded-xl p-5 transition-colors hover:border-primary/30"
            >
              <span className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface-2 text-primary">
                <Icon className="h-4.5 w-4.5" />
              </span>
              <span>
                <span className="block font-mono text-xs text-muted-foreground">{label}</span>
                <span className="block text-sm text-foreground">{value}</span>
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} noValidate className="panel rounded-xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((field, i) => (
                <div key={field.name} className={cn(i === 2 && "sm:col-span-2")}>
                  <label htmlFor={field.name} className="mb-2 block text-sm text-foreground/85">
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type ?? "text"}
                    value={values[field.name]}
                    onChange={(e) => update(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    aria-invalid={Boolean(errors[field.name])}
                    aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                    className={inputClass}
                  />
                  {errors[field.name] ? (
                    <p id={`${field.name}-error`} className="mt-2 text-xs text-destructive">
                      {errors[field.name]}
                    </p>
                  ) : null}
                </div>
              ))}

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm text-foreground/85">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell me about the role or project…"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={cn(inputClass, "resize-y")}
                />
                {errors.message ? (
                  <p id="message-error" className="mt-2 text-xs text-destructive">
                    {errors.message}
                  </p>
                ) : null}
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
