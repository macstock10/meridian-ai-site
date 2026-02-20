import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { MobileNav } from "@/components/mobile-nav";

export const metadata: Metadata = {
  title: "Team | Meridian AI",
  description: "Meet the team behind Meridian AI."
};

const calendlyUrl = "https://calendly.com/placeholder/ai-assessment";

export default function TeamPage() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg" aria-label="Main navigation">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-10 lg:px-16">
          <a href="/" className="flex items-center gap-2 font-display text-lg tracking-wide text-foreground">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent/60 bg-accent/15 text-sm font-semibold text-accent" aria-hidden="true">M</span>
            Meridian AI
          </a>
          <div className="hidden items-center gap-6 text-sm text-muted md:flex">
            <a href="/#problems" className="transition hover:text-foreground">Problems</a>
            <a href="/#how" className="transition hover:text-foreground">How It Works</a>
            <a href="/#faq" className="transition hover:text-foreground">FAQ</a>
            <a href="/team" className="text-foreground">Team</a>
          </div>
          <div className="flex items-center gap-3">
            <a href={calendlyUrl} rel="noopener noreferrer" className="hidden rounded-md border border-accent bg-accent px-4 py-2 text-xs font-semibold tracking-wide text-black transition hover:bg-[#d8ba83] md:inline-flex">
              Book a Call
            </a>
            <MobileNav calendlyUrl={calendlyUrl} />
          </div>
        </div>
      </nav>

      <main id="main-content" className="relative overflow-hidden px-6 pb-20 pt-8 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">

          <Reveal className="mt-8">
            <p className="section-label">Our Team</p>
            <h1 className="mt-5 font-display text-4xl md:text-5xl">
              The people behind Meridian AI.
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-muted">
              Real estate operators who got tired of watching the industry lose time and money to problems AI already solves.
            </p>
          </Reveal>

          <Reveal className="mt-16">
            <div className="mx-auto max-w-md rounded-3xl border border-border bg-surface p-8 text-center md:p-10">
              {/* Photo placeholder */}
              <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-2 border-accent/30 bg-background">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-16 w-16 text-muted/40" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21v-1a6 6 0 0112 0v1" />
                </svg>
              </div>

              <h2 className="mt-6 font-display text-2xl text-foreground">Michael Gardner</h2>
              <p className="mt-1 text-sm text-accent">Founder</p>

              <div className="mx-auto mt-6 h-px w-12 bg-accent/30" />

              <p className="mt-6 text-sm leading-relaxed text-muted">
                Bio coming soon.
              </p>
            </div>
          </Reveal>

          {/* ── CTA ── */}
          <Reveal className="mt-24 rounded-3xl border border-accent/45 bg-surface px-6 py-16 text-center shadow-glow md:px-10">
            <h2 className="font-display text-3xl md:text-4xl">
              Want to work with us?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted">
              Book a 45-minute assessment and see exactly how AI can save you time and make you money.
            </p>
            <div className="mt-8">
              <a href={calendlyUrl} rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-accent bg-accent px-8 py-3.5 text-base font-semibold tracking-wide text-black transition hover:bg-[#d8ba83]">
                Book Your Assessment
              </a>
            </div>
          </Reveal>

        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border/60 px-6 py-8 md:px-10 lg:px-16" aria-label="Site footer">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-2 font-display text-sm tracking-wide text-foreground">
              <span className="flex h-6 w-6 items-center justify-center rounded border border-accent/60 bg-accent/15 text-[10px] font-semibold text-accent" aria-hidden="true">M</span>
              Meridian AI
            </div>
            <p className="text-xs tracking-wide text-muted/50">AI agents for real estate. Save time. Make money.</p>
            <p className="text-xs text-muted/40">&copy; {new Date().getFullYear()} Meridian AI</p>
          </div>
        </div>
      </footer>
    </>
  );
}
