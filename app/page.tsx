import { Logo } from "@/components/Logo";

const APP = process.env.NEXT_PUBLIC_APP_URL || "https://app.velcy.app";

export default function Home() {
  return (
    <div id="top">
      {/* ===== nav ===== */}
      <header className="nav">
        <div className="wrap-wide nav-inner">
          <Logo />
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#ai">AI</a>
            <a href="#compare">Compare</a>
            <a href="#pricing">Pricing</a>
            <a href="#customers">Customers</a>
            <a href="#changelog">Changelog</a>
          </nav>
          <div className="nav-actions">
            <a className="btn btn-link btn-sm" href={`${APP}/signin`}>Sign in</a>
            <a className="btn btn-dark btn-sm" href={`${APP}/signup`}>Get started</a>
          </div>
        </div>
      </header>

      {/* ===== hero ===== */}
      <section className="hero">
        <div className="wrap">
          <a className="hero-tag" href="#ai">
            <span className="pill">New</span>
            <span>Bring your own AI <span className="a">— in every sprint</span></span>
          </a>
          <h1>Sprints. <span className="grad">Reimagined.</span></h1>
          <p className="hero-sub">The agile workspace built for software teams that ship.</p>
          <div className="hero-ctas">
            <a className="btn btn-primary btn-lg" href={`${APP}/signup`}>Start free <span className="arr">→</span></a>
            <a className="btn btn-outline btn-lg" href="#demo">Watch the demo</a>
          </div>
          <div className="hero-meta">
            Free for up to 10 users
            <span className="dot">·</span>No credit card
            <span className="dot">·</span>60-second setup
          </div>
        </div>

        <div className="hero-product" id="demo">
          <div className="product-frame">
            <div className="product-bar">
              <div className="traffic"><span /><span /><span /></div>
              <div className="url">velcy.app / <b>acme / core-platform / sprint 24</b></div>
              <div style={{ width: 54 }} />
            </div>

            <div className="app-toolbar">
              <div className="sprint">
                <span className="sprint-name">Sprint 24</span>
                <span className="meta">Mar 03 → Mar 17 · 38 pts planned</span>
              </div>
              <div className="progress">
                <span>18 / 38 pts</span>
                <div className="bar" />
                <span style={{ fontWeight: 600 }}>47%</span>
                <div className="avatars"><span>JL</span><span>RP</span><span>SK</span><span>+5</span></div>
              </div>
            </div>

            <div className="kanban">
              <div className="col">
                <div className="col-head"><span className="name"><span className="dot" />Backlog</span><span className="count">12</span></div>
                <Card id="VEL-412" type="feature" title="Onboarding redesign — empty states & samples" pts="5 pts" who="a" whoName="JL" />
                <Card id="VEL-408" type="chore" title="Audit log retention & rotation policy" pts="2 pts" who="b" whoName="RP" />
                <Card id="VEL-405" type="task" title="Migrate billing webhooks to idempotency" pts="3 pts" who="c" whoName="SK" />
                <div className="card ghost">+ 9 more in triage</div>
              </div>

              <div className="col now">
                <div className="col-head"><span className="name"><span className="dot" />In progress</span><span className="count">4</span></div>
                <Card active id="VEL-401" type="bug" title="OAuth refresh token not rotating on silent renew" pts="3 pts" who="a" whoName="JL" />
                <Card id="VEL-397" type="feature" title="Stripe webhook handler — subscription.* events" pts="5 pts" who="b" whoName="RP" />
                <Card id="VEL-394" type="task" title="Replace polling with realtime channel on inbox" pts="5 pts" who="c" whoName="SK" />
              </div>

              <div className="col review">
                <div className="col-head"><span className="name"><span className="dot" />In review</span><span className="count">2</span></div>
                <Card id="VEL-392" type="feature" title="Magic-link sign-in with single-use token" pts="8 pts" who="a" whoName="JL" />
                <Card id="VEL-389" type="chore" title="Upgrade ts-node, drop CJS shim" pts="1 pt" who="d" whoName="MR" />
              </div>

              <div className="col done">
                <div className="col-head"><span className="name"><span className="dot" />Done</span><span className="count">8</span></div>
                <Card id="VEL-388" type="feature" title="Sprint burndown chart with ideal & actual" pts="5 pts" who="b" whoName="RP" />
                <Card id="VEL-385" type="chore" title="Tighten CSP headers; remove unsafe-inline" pts="1 pt" who="c" whoName="SK" />
                <Card id="VEL-381" type="task" title="Dependency graph cycle protection" pts="3 pts" who="a" whoName="JL" />
              </div>
            </div>

            <div className="ai-strip">
              <span className="pill"><span className="sp">✦</span> Ask Velcy AI</span>
              <span className="prompt">&ldquo;Split this epic into 5 stories with acceptance criteria&rdquo;</span>
              <span className="kbd">⌘ K</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== stats ===== */}
      <section className="stats">
        <div className="wrap">
          <div className="stats-grid">
            <Stat v="<50" sup="ms" l="Interaction latency" />
            <Stat v="90" sup="%" l="Cheaper AI via prompt cache" />
            <Stat v="99.95" sup="%" l="Uptime SLA on Business" />
            <Stat v="60" sup="s" l="From signup to first sprint" />
          </div>
        </div>
      </section>

      {/* ===== features bento ===== */}
      <section className="section" id="features" style={{ paddingTop: 48 }}>
        <div className="wrap-wide">
          <div className="section-head">
            <div className="eyebrow">Features</div>
            <h2>Everything your team needs.<br /><span className="grad">Nothing it doesn&apos;t.</span></h2>
            <p className="lede">Six surfaces, each designed to feel inevitable. No bloat, no learning curve, no opening Jira at 9pm.</p>
          </div>

          <div className="bento">
            <div className="tile t-wide">
              <div className="tile-tag">Performance</div>
              <h3>Keyboard-first. Built for speed.</h3>
              <p>Sub-50ms interactions. Quick-add from anywhere. Your team won&apos;t feel the tool — only the work.</p>
              <div className="tile-visual">
                <div className="v-keys">
                  <span>⌘</span><span className="hl">K</span><span className="plus">→</span>
                  <span>C</span><span>A</span><span className="plus">→</span>
                  <span>⏎ <span style={{ color: "var(--ink-faint)", marginLeft: 6 }}>create</span></span>
                </div>
              </div>
            </div>

            <div className="tile t-narrow tile-dark">
              <div className="tile-tag">Intelligence</div>
              <h3>Bring your own AI.</h3>
              <p>Connect OpenAI, Anthropic, Bedrock or a local model — split, estimate, draft, summarize. Workspace-aware.</p>
              <div className="tile-visual">
                <div className="v-chat">
                  <div className="me">Estimate these 8 tickets</div>
                  <div className="ai"><span className="gen">Generating…</span></div>
                </div>
              </div>
            </div>

            <div className="tile t-half tile-accent">
              <div className="tile-tag">Planning</div>
              <h3>Capacity at a glance.</h3>
              <p>Per-member pts/day × working days − days off. Live utilization, over-capacity warnings.</p>
              <div className="tile-visual">
                <div className="v-cap">
                  <div className="row"><span className="nm">JL</span><div className="br r1" /><span className="pct">78%</span></div>
                  <div className="row"><span className="nm">RP</span><div className="br r2" /><span className="pct over">112%</span></div>
                  <div className="row"><span className="nm">SK</span><div className="br r3" /><span className="pct">62%</span></div>
                  <div className="row"><span className="nm">MR</span><div className="br r4" /><span className="pct">45%</span></div>
                </div>
              </div>
            </div>

            <div className="tile t-half">
              <div className="tile-tag">Direction</div>
              <h3>Roadmap that maps to reality.</h3>
              <p>Multi-sprint side-by-side view, Gantt-style timeline with live progress fill.</p>
              <div className="tile-visual">
                <div className="v-roadmap">
                  <div className="lane"><span style={{ left: "6%", right: "55%" }}>Auth</span></div>
                  <div className="lane"><span className="s2" style={{ left: "22%", right: "18%" }}>Billing</span></div>
                  <div className="lane"><span className="s3" style={{ left: "46%", right: "6%" }}>AI</span></div>
                </div>
              </div>
            </div>

            <div className="tile t-narrow">
              <div className="tile-tag">Flow</div>
              <h3>Sprints &amp; Kanban.</h3>
              <p>Drag, swimlanes, WIP limits, dependency cycle protection.</p>
              <div className="tile-visual">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6, height: 80 }}>
                  <MiniCol bars={["100%", "60%", "100%"]} />
                  <MiniCol bars={["accent", "75%"]} />
                  <MiniCol bars={["orange70"]} />
                  <MiniCol bars={["green", "green55", "green"]} />
                </div>
              </div>
            </div>

            <div className="tile t-wide">
              <div className="tile-tag">Trust</div>
              <h3>Secure by default.</h3>
              <p>Passwordless magic-link sign-in, role-based access per workspace, and AES-256 encryption for the AI keys you connect — they never leave your backend in plaintext.</p>
              <div className="tile-visual">
                <div className="v-shield" style={{ display: "flex", flexDirection: "row", gap: 10, flexWrap: "wrap" }}>
                  <div className="badge"><span className="ic">✓</span> Magic-link auth</div>
                  <div className="badge"><span className="ic">✓</span> Role-based access</div>
                  <div className="badge"><span className="ic">✓</span> AES-256 key encryption</div>
                  <div className="badge prog"><span className="ic">…</span> SSO / SOC 2 — on the roadmap</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ai section ===== */}
      <section style={{ padding: 0 }}>
        <div className="ai-section" id="ai">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">Bring your own AI</div>
              <h2>Your AI knows your <span className="grad">sprint.</span></h2>
              <p className="lede">Connect your own provider — OpenAI, Anthropic, Bedrock, Azure, or a local model via Ollama. The assistant is <strong>workspace-aware</strong>: it sees your active sprint, team, taxonomy, and components. Your keys stay yours.</p>
            </div>

            <div className="ai-layout">
              <ol className="ai-prompts">
                <li><span className="n">01</span><span>&ldquo;Split this epic into 5 stories with acceptance criteria&rdquo;</span></li>
                <li><span className="n">02</span><span>&ldquo;Estimate these 12 tickets using our 4-sprint velocity&rdquo;</span></li>
                <li><span className="n">03</span><span>&ldquo;Draft GIVEN / WHEN / THEN for VEL-243&rdquo;</span></li>
                <li><span className="n">04</span><span>&ldquo;Summarize this retro into three action items&rdquo;</span></li>
                <li><span className="n">05</span><span>&ldquo;Why did we miss last sprint? Show patterns.&rdquo;</span></li>
              </ol>

              <div className="chat-frame">
                <div className="chat-head">
                  <span className="sp">✦</span>
                  <span className="name">Velcy AI</span>
                  <span className="model">your model</span>
                </div>
                <div className="chat-body">
                  <div className="msg user">Split <b>&ldquo;Multi-tenant billing&rdquo;</b> epic into stories for next sprint.</div>
                  <div className="msg ai">
                    <div className="label">Velcy AI · 4.2s · workspace-aware</div>
                    <p>I&apos;ll break this into 5 stories sized for a single sprint:</p>
                    <ol>
                      <li><span>Stripe customer + subscription lifecycle</span><span className="pts">5 pts</span></li>
                      <li><span>Per-seat checkout flow</span><span className="pts">3 pts</span></li>
                      <li><span>Webhook handler for subscription.* events</span><span className="pts">5 pts</span></li>
                      <li><span>Seat enforcement on team add</span><span className="pts">3 pts</span></li>
                      <li><span>Customer portal link from settings</span><span className="pts">2 pts</span></li>
                    </ol>
                    <div className="total">
                      <span style={{ color: "#a1a1a6" }}>Total estimate</span>
                      <span className="v">18 pts</span>
                    </div>
                  </div>
                </div>
                <div className="chat-input">
                  <span className="field">Ask anything about Sprint 24…</span>
                  <span className="send">↑</span>
                </div>
                <div className="chat-cache">
                  <span>prompt cache · <span className="ok">hit · 12.4k tokens</span></span>
                  <span>$0.0008 / request</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== compare ===== */}
      <section className="section" id="compare">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Compare</div>
            <h2>How Velcy stacks up.</h2>
            <p className="lede">We&apos;re deliberately opinionated. The agile workflow done right — and priced like you matter.</p>
          </div>
          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th></th>
                  <th className="us">Velcy</th>
                  <th>Linear</th>
                  <th>Plane</th>
                  <th>Jira / Asana</th>
                </tr>
              </thead>
              <tbody>
                <CompareRow label="Kanban + backlog + sprints" cells={["yes", "yes", "yes", "yes"]} />
                <CompareRow label="Cycles / PI planning" cells={["yes", "partial", "dash", "partial"]} />
                <CompareRow label="Triage inbox" cells={["yes", "yes", "dash", "dash"]} />
                <CompareRow label="Capacity planning (per-member days off)" cells={["yes", "dash", "dash", "partial"]} />
                <CompareRow label="Retrospective board (built-in)" cells={["yes", "dash", "dash", "dash"]} />
                <CompareRow label="AI assistant (workspace-aware)" cells={["yes", "partial", "dash", "partial"]} />
                <CompareRow label="Real-time sync & presence" cells={["yes", "yes", "partial", "partial"]} />
                <CompareRow label="Sub-issues + dependency graph" cells={["yes", "yes", "partial", "yes"]} />
                <CompareRow label="Roadmap / Gantt timeline" cells={["yes", "yes", "dash", "yes"]} />
                <CompareRow label="SSO (SAML / OIDC) + RBAC" cells={["yes", "yes", "dash", "yes"]} />
                <CompareRow label="Transparent per-seat pricing" cells={["yes", "yes", "yes", "dash"]} />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== pricing ===== */}
      <section className="section" id="pricing" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Pricing</div>
            <h2>Simple pricing.<br />No surprises.</h2>
            <p className="lede">Free forever for small teams. Pay per active user, billed monthly or annually. Cancel anytime.</p>
          </div>
          <div className="price-grid">
            <Tier name="Free" amt="$0" per="forever" desc="For individuals and small teams getting started."
              features={["Up to 10 users", "Unlimited tasks", "2 active sprints", "Kanban, backlog, retros", "Slack & email integrations", "Community support"]}
              cta={{ label: "Start free", href: `${APP}/signup`, variant: "outline" }} />
            <Tier popular name="Pro" amt="$8" per="/ user / mo" desc="For growing teams that need the full toolkit."
              features={["Everything in Free", "Unlimited users & sprints", "Bring-your-own-AI assistant (BYOK + MCP)", "Capacity planning + roadmap", "JIRA import + integrations", "Email support, < 24h"]}
              cta={{ label: "Start 14-day trial", href: `${APP}/signup?plan=pro`, variant: "primary" }} />
            <Tier name="Business" amt="$16" per="/ user / mo" desc="For scaling teams that want priority support."
              features={["Everything in Pro", "Capacity planning + roadmap", "JIRA import + integrations", "Priority email support, < 4h"]}
              cta={{ label: "Start trial", href: `${APP}/signup?plan=business`, variant: "outline" }} />
            <Tier name="Enterprise" amt="Custom" desc="For large orgs with custom needs."
              features={["Everything in Business", "Dedicated success manager", "Custom contracts & invoicing", "Onboarding & training", "Self-host option"]}
              cta={{ label: "Talk to sales", href: "mailto:sales@velcy.app", variant: "outline" }} />
          </div>
        </div>
      </section>

      {/* ===== closer ===== */}
      <section className="closer">
        <div className="wrap">
          <h2>Ship your next sprint.<br /><span className="grad">With Velcy.</span></h2>
          <p>Join the teams replacing Jira, Asana, and ClickUp with one beautifully fast workspace.</p>
          <div className="ctas">
            <a className="btn btn-primary btn-lg" href={`${APP}/signup`}>Start free <span className="arr">→</span></a>
            <a className="btn btn-outline btn-lg" href="mailto:sales@velcy.app">Talk to sales</a>
          </div>
          <div className="meta">No credit card · Free forever for up to 10 users</div>
        </div>
      </section>

      {/* ===== footer ===== */}
      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand">
              <Logo />
              <p>The agile workspace built for software teams that ship.</p>
              <span className="foot-status">All systems operational</span>
            </div>
            <FootCol title="Product" links={[["Features", "#features"], ["Compare", "#compare"], ["Pricing", "#pricing"], ["Changelog", "#changelog"], ["Roadmap", "#roadmap"]]} />
            <FootCol title="Resources" links={[["Documentation", "#docs"], ["Help center", "#help"], ["API reference", "#api"], ["Status", "#status"], ["Security", "#security"]]} />
            <FootCol title="Company" links={[["About", "#about"], ["Customers", "#customers"], ["Contact", "mailto:hello@velcy.app"], ["Careers", "#careers"], ["Press", "#press"]]} />
            <FootCol title="Legal" links={[["Privacy", "#privacy"], ["Terms", "#terms"], ["DPA", "#dpa"], ["Cookies", "#cookies"]]} />
          </div>
          <div className="foot-bottom">
            <span>© 2026 Velcy, Inc. All rights reserved.</span>
            <div className="links">
              <a href="#twitter">Twitter</a>
              <a href="#github">GitHub</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- small presentational helpers ---------- */

function Card({ id, type, title, pts, who, whoName, active }: {
  id: string; type: string; title: string; pts: string; who: string; whoName: string; active?: boolean;
}) {
  return (
    <div className={`card${active ? " active" : ""}`}>
      <div className="top"><span className="id">{id}</span><span className={`type ${type}`}>{type}</span></div>
      <div className="title">{title}</div>
      <div className="bottom"><span className="pts">{pts}</span><span className={`who ${who}`}>{whoName}</span></div>
    </div>
  );
}

function Stat({ v, sup, l }: { v: string; sup: string; l: string }) {
  return (
    <div className="stat">
      <div className="v">{v}<sup>{sup}</sup></div>
      <div className="l">{l}</div>
    </div>
  );
}

function MiniCol({ bars }: { bars: string[] }) {
  const style = (b: string): React.CSSProperties => {
    const base: React.CSSProperties = { height: 6, borderRadius: 2, background: "var(--divider-soft)" };
    if (b === "accent") return { ...base, background: "var(--accent)" };
    if (b === "orange70") return { ...base, background: "var(--orange)", width: "70%" };
    if (b === "green") return { ...base, background: "var(--green)" };
    if (b === "green55") return { ...base, background: "var(--green)", width: "55%" };
    if (b.endsWith("%")) return { ...base, width: b };
    return base;
  };
  return (
    <div style={{ background: "#fff", borderRadius: 6, border: "1px solid var(--divider-soft)", padding: 8, display: "flex", flexDirection: "column", gap: 4 }}>
      {bars.map((b, i) => <div key={i} style={style(b)} />)}
    </div>
  );
}

const MARK: Record<string, React.ReactNode> = {
  yes: <span className="yes">✓</span>,
  dash: <span className="dash" />,
  partial: <span className="partial" />,
};

function CompareRow({ label, cells }: { label: string; cells: string[] }) {
  return (
    <tr>
      <td>{label}</td>
      {cells.map((c, i) => (
        <td key={i} className={`c${i === 0 ? " us" : ""}`}>{MARK[c]}</td>
      ))}
    </tr>
  );
}

function Tier({ name, amt, per, desc, features, cta, popular }: {
  name: string; amt: string; per?: string; desc: string; features: string[];
  cta: { label: string; href: string; variant: "primary" | "outline" }; popular?: boolean;
}) {
  return (
    <div className={`tier${popular ? " popular" : ""}`}>
      <div className="name">{name}</div>
      <div className="price"><span className="amt">{amt}</span>{per && <span className="per">{per}</span>}</div>
      <p className="desc">{desc}</p>
      <ul>{features.map((f) => <li key={f}>{f}</li>)}</ul>
      <a className={`btn btn-${cta.variant} cta`} href={cta.href}>{cta.label}</a>
    </div>
  );
}

function FootCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="foot-col">
      <h4>{title}</h4>
      <ul>{links.map(([l, h]) => <li key={l}><a href={h}>{l}</a></li>)}</ul>
    </div>
  );
}
