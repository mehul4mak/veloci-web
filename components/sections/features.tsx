import {
  LayoutDashboard,
  Sparkles,
  Users,
  Shield,
  CalendarRange,
  Zap,
} from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Built for speed",
    body: "Keyboard-first. Sub-50ms interactions. Linear-style quick-add. Your team won't feel the tool — only the work.",
  },
  {
    icon: Sparkles,
    title: "Bring your own AI",
    body: "Connect OpenAI, Anthropic, Bedrock, Azure, or a self-hosted LLM. Plug in MCP servers for your data. Switch providers per workspace anytime.",
  },
  {
    icon: LayoutDashboard,
    title: "Sprints & Kanban",
    body: "Backlog → in-progress → review → done with drag-and-drop, swimlanes, WIP limits, and dependency graph cycle protection.",
  },
  {
    icon: Users,
    title: "Capacity planning",
    body: "Per-member pts/day × working days − days off. Live utilization bars and over-capacity warnings during planning.",
  },
  {
    icon: CalendarRange,
    title: "PI planning & roadmap",
    body: "Multi-sprint side-by-side view, Gantt-style roadmap with progress fill, calendar overlay across all sprints.",
  },
  {
    icon: Shield,
    title: "Enterprise-ready",
    body: "SSO (SAML / Google / Okta), role-based access, audit logs, AES-256 at rest, SOC 2 in progress.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-b border-border/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">
            Features
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Everything your team needs.{" "}
            <span className="text-muted-foreground">
              Nothing it doesn&apos;t.
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Six surfaces, designed to feel inevitable. No bloat, no learning
            curve, no opening Jira at 9pm.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative bg-background p-8 transition hover:bg-secondary/30"
            >
              <div className="mb-5 inline-grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition group-hover:bg-primary/15">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
