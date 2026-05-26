import { Sparkles } from "lucide-react";

export function AiCallout() {
  return (
    <section className="border-b border-border/40 py-24">
      <div className="container">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              AI built in
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Claude knows your sprint.
            </h2>
            <p className="mt-4 text-muted-foreground">
              The assistant is workspace-aware — it sees your active sprint,
              team, taxonomy, and components. System prompts use{" "}
              <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">cache_control: ephemeral</code>{" "}
              so repeated requests cost ~90% less.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Split this epic into 5 stories with acceptance criteria",
                "Estimate points for these 12 tickets based on our velocity",
                "Draft GIVEN/WHEN/THEN for VEL-243",
                "Summarize this retro into three action items",
              ].map((q) => (
                <li key={q} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  <span className="text-muted-foreground">&ldquo;{q}&rdquo;</span>
                </li>
              ))}
            </ul>
          </div>

          <ChatMock />
        </div>
      </div>
    </section>
  );
}

function ChatMock() {
  return (
    <div className="relative">
      <div className="rounded-2xl border border-border/60 bg-card/60 p-6 shadow-xl backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-primary/15 text-primary">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium">Ask Veloci AI</span>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">
            claude-opus-4-7
          </span>
        </div>

        <div className="space-y-4">
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-primary px-4 py-2.5 text-sm text-primary-foreground">
            Split &quot;Multi-tenant billing&quot; epic into stories.
          </div>

          <div className="max-w-[90%] space-y-2 rounded-2xl rounded-tl-md bg-secondary/60 px-4 py-3 text-sm">
            <p>I&apos;ll break this into 5 stories sized for one sprint each:</p>
            <ol className="ml-4 list-decimal space-y-1 text-muted-foreground">
              <li>Stripe customer + subscription lifecycle (5pts)</li>
              <li>Per-seat checkout flow (3pts)</li>
              <li>Webhook handler for subscription.* events (5pts)</li>
              <li>Seat enforcement on team add (3pts)</li>
              <li>Customer portal link from settings (2pts)</li>
            </ol>
            <p className="pt-1">Total: 18pts. Want me to create them?</p>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 rounded-xl border border-border/60 bg-background/60 px-3 py-2">
          <input
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            placeholder="Ask anything about your sprint…"
            disabled
          />
          <kbd className="rounded border border-border/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            ⏎
          </kbd>
        </div>
      </div>
      <div
        className="absolute -inset-4 -z-10 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl"
        aria-hidden
      />
    </div>
  );
}
