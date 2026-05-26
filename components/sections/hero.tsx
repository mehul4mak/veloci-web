import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.veloci.app";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="container relative pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-6">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Self-hostable · AI-assisted · SaaS-ready
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Ship faster with{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              agile that gets out of the way
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Sprints, kanban, capacity planning, retros, and an AI assistant — in
            one Docker container. Self-host privately or run it as a
            multi-tenant SaaS.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href={`${APP_URL}/signup`}>
                Get started free
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/mkumawat1/veloci">
                <Github className="mr-2 h-4 w-4" />
                Self-host on GitHub
              </a>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Free forever for self-host · No credit card for SaaS trial
          </p>
        </div>

        <BoardPreview />
      </div>
    </section>
  );
}

function BoardPreview() {
  const cols = [
    { name: "Backlog", count: 12, color: "bg-zinc-500" },
    { name: "In progress", count: 4, color: "bg-blue-500" },
    { name: "In review", count: 2, color: "bg-amber-500" },
    { name: "Done", count: 8, color: "bg-emerald-500" },
  ];
  const cards: Record<string, { title: string; tag: string; pts: number }[]> = {
    Backlog: [
      { title: "Onboarding redesign", tag: "feature", pts: 5 },
      { title: "Audit log retention", tag: "chore", pts: 2 },
    ],
    "In progress": [
      { title: "OAuth refresh token bug", tag: "bug", pts: 3 },
      { title: "Stripe webhook handler", tag: "feature", pts: 5 },
    ],
    "In review": [{ title: "Magic-link sign-in", tag: "feature", pts: 8 }],
    Done: [
      { title: "Sprint burndown chart", tag: "feature", pts: 5 },
      { title: "Tighten CSP headers", tag: "chore", pts: 1 },
    ],
  };

  return (
    <div className="relative mx-auto mt-20 max-w-6xl">
      <div className="rounded-2xl border border-border/60 bg-card/40 p-2 shadow-2xl backdrop-blur">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {cols.map((c) => (
            <div key={c.name} className="rounded-lg bg-background/60 p-3">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${c.color}`} />
                  <span className="text-sm font-medium">{c.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{c.count}</span>
              </div>
              <div className="space-y-2">
                {cards[c.name].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-md border border-border/60 bg-card p-3 text-left"
                  >
                    <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-wide text-muted-foreground">
                      <span className="rounded-sm bg-secondary px-1.5 py-0.5">
                        {card.tag}
                      </span>
                      <span>VEL-{Math.floor(Math.random() * 900) + 100}</span>
                    </div>
                    <div className="text-sm font-medium leading-snug">
                      {card.title}
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{card.pts} pts</span>
                      <span className="h-5 w-5 rounded-full bg-primary/20 ring-1 ring-primary/40" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute inset-x-0 -bottom-10 mx-auto h-40 w-3/4 rounded-full bg-primary/30 blur-3xl"
        aria-hidden
      />
    </div>
  );
}
