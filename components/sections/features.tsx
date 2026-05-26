import {
  LayoutDashboard,
  Sparkles,
  Users,
  Server,
  GitBranch,
  CalendarRange,
} from "lucide-react";

const items = [
  {
    icon: LayoutDashboard,
    title: "Sprints & Kanban",
    body: "Backlog → in-progress → review → done with drag-and-drop, swimlanes, WIP limits, and Linear-style quick-add.",
  },
  {
    icon: Sparkles,
    title: "AI assistant",
    body: "Claude-powered drawer that splits epics into stories, estimates points, drafts GIVEN/WHEN/THEN, and summarizes retros.",
  },
  {
    icon: Users,
    title: "Capacity planning",
    body: "Per-member pts/day × working days − days off. Live utilization bars and over-capacity warnings during sprint planning.",
  },
  {
    icon: CalendarRange,
    title: "PI planning & roadmap",
    body: "Multi-sprint side-by-side view, Gantt-style roadmap with progress fill, calendar overlay across all sprints.",
  },
  {
    icon: GitBranch,
    title: "JIRA import",
    body: "Idempotent one-way sync: paste a JQL query or a JIRA search response. Re-imports update by key, never duplicate.",
  },
  {
    icon: Server,
    title: "Self-host or SaaS",
    body: "Single Docker container, SQLite-backed. Flip SAAS_MODE=true for workspace-per-subdomain and per-seat billing.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-b border-border/40 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Everything a software team needs.{" "}
            <span className="text-muted-foreground">Nothing it doesn&apos;t.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Veloci is deliberately small. Six core surfaces, designed to be
            readable in an afternoon and modifiable in a day.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative bg-background p-8 transition hover:bg-secondary/30"
            >
              <div className="mb-5 inline-grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
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
