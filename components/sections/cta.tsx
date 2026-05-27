import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.veloci.app";

export function Cta() {
  return (
    <section className="border-b border-border/40 py-24">
      <div className="container">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card px-8 py-20 text-center md:px-16">
          <div
            className="absolute inset-x-0 -top-32 mx-auto h-64 w-3/4 rounded-full bg-primary/30 blur-3xl"
            aria-hidden
          />
          <h2 className="relative text-3xl font-semibold tracking-tight md:text-5xl">
            Ship your next sprint with Veloci
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Join the teams replacing Jira, Asana, and ClickUp with one
            beautifully fast workspace. Set up in under 60 seconds.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href={`${APP_URL}/signup`}>
                Start free <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:sales@veloci.app">Talk to sales</a>
            </Button>
          </div>
          <p className="relative mt-4 text-xs text-muted-foreground">
            No credit card · Free forever for up to 10 users
          </p>
        </div>
      </div>
    </section>
  );
}
