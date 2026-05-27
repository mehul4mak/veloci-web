import { Sparkles, Plug, ChevronDown, Check } from "lucide-react";

export function AiCallout() {
  return (
    <section className="border-b border-border/40 py-24">
      <div className="container">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              AI, your way
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Bring your AI. Plug in your data.
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Connect{" "}
              <strong className="text-foreground">OpenAI, Anthropic,
              AWS Bedrock, Azure OpenAI</strong>, or a{" "}
              <strong className="text-foreground">self-hosted LLM</strong>{" "}
              (Ollama, vLLM, LM Studio). Plug in MCP servers — GitHub,
              JIRA, Notion, your internal docs — and the assistant gets
              the context it needs to actually help.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                ["BYOK", "Use your own API keys — your spend, your limits, your data residency."],
                ["MCP-native", "Connect any Model Context Protocol server. Tools, prompts, and resources show up automatically."],
                ["Per-workspace control", "Different team, different provider, different model. Switch anytime."],
                ["Audit & observability", "Every prompt, every tool call, every token — logged and exportable."],
              ].map(([title, body]) => (
                <li key={title} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                  <span>
                    <strong className="text-foreground">{title}.</strong>{" "}
                    <span className="text-muted-foreground">{body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <ProviderMock />
        </div>
      </div>
    </section>
  );
}

function ProviderMock() {
  return (
    <div className="relative">
      <div className="rounded-2xl border border-border/60 bg-card/60 p-6 shadow-xl backdrop-blur">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-primary/15 text-primary">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium">AI Settings</span>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">
            workspace · acme
          </span>
        </div>

        <div className="space-y-5">
          <div>
            <div className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
              Provider
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border/60 bg-background/60 px-3 py-2.5">
              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-orange-500/15 font-mono text-xs text-orange-400">
                  A
                </span>
                <div>
                  <div className="text-sm font-medium">Anthropic</div>
                  <div className="font-mono text-[10px] text-muted-foreground">
                    claude-opus-4-7
                  </div>
                </div>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5 text-[10px]">
              {["OpenAI", "Bedrock", "Azure", "Ollama", "vLLM", "Custom"].map(
                (p) => (
                  <span
                    key={p}
                    className="rounded border border-border/60 bg-secondary/30 px-1.5 py-0.5 text-muted-foreground"
                  >
                    {p}
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
              <span>Connected MCP servers</span>
              <span className="font-mono normal-case text-[10px]">3 active</span>
            </div>
            <ul className="space-y-1.5">
              {[
                ["GitHub", "stdio · 14 tools", true],
                ["Linear → Veloci sync", "sse · 8 tools", true],
                ["Internal docs", "http · 5 resources", true],
                ["JIRA", "http · disabled", false],
              ].map(([name, meta, on]) => (
                <li
                  key={name as string}
                  className="flex items-center justify-between rounded-md border border-border/60 bg-background/60 px-3 py-2"
                >
                  <div className="flex items-center gap-2.5">
                    <Plug
                      className={`h-3.5 w-3.5 ${
                        on ? "text-emerald-400" : "text-muted-foreground/50"
                      }`}
                    />
                    <div>
                      <div className="text-sm">{name}</div>
                      <div className="font-mono text-[10px] text-muted-foreground">
                        {meta}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      on ? "bg-emerald-500" : "bg-muted-foreground/40"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-secondary/30 px-3 py-2 text-xs">
            <span className="text-muted-foreground">
              Total spend · this month
            </span>
            <span className="font-mono">$12.84 / $200 cap</span>
          </div>
        </div>
      </div>
      <div
        className="absolute -inset-4 -z-10 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl"
        aria-hidden
      />
    </div>
  );
}
