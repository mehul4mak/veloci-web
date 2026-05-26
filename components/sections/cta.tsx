import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.veloci.app";

export function Cta() {
  return (
    <section className="border-b border-border/40 py-24">
      <div className="container">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card px-8 py-16 text-center md:px-16">
          <div
            className="absolute inset-x-0 -top-32 mx-auto h-64 w-3/4 rounded-full bg-primary/30 blur-3xl"
            aria-hidden
          />
          <h2 className="relative text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to ship faster?
          </h2>
          <p className="relative mx-auto mt-3 max-w-2xl text-muted-foreground">
            Spin up a free workspace in 30 seconds, or self-host in one
            <code className="mx-1 rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">
              docker compose up
            </code>
            .
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href={`${APP_URL}/signup`}>
                Get started free <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/mkumawat1/veloci">
                <Github className="mr-2 h-4 w-4" /> Self-host
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
