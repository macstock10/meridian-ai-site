import { Reveal } from "@/components/reveal";
import { MobileNav } from "@/components/mobile-nav";

const calendlyUrl = "https://calendly.com/placeholder/ai-assessment";

const painPoints = [
  { stat: "15 hrs", text: "Average lead response time. 78% of buyers go with whoever answers first." },
  { stat: "67%", text: "Of real estate leads go completely unanswered." },
  { stat: "75%", text: "Of transaction hours are admin — not client-facing." },
  { stat: "$4K", text: "Average cost per tenant turnover. Most are preventable." }
];

const problems = [
  {
    title: "Leads die in your inbox",
    desc: "62% of inquiries arrive after hours. Your team responds in 15 hours. The first agent to reply wins 78% of the time. That's not a sales problem — it's a systems problem."
  },
  {
    title: "Your CRM is expensive shelf-ware",
    desc: "40% of agents never touch it. Open house sign-ins get entered manually. Follow-ups fall through the cracks. You're paying for software nobody uses."
  },
  {
    title: "Transactions run on spreadsheets and prayer",
    desc: "No centralized pipeline. Missed inspection dates. Commission splits calculated by hand across 6 variables. One mistake and agent trust evaporates."
  },
  {
    title: "Compliance eats your calendar",
    desc: "Post-settlement buyer agreements, disclosure tracking, audit prep. You became a compliance officer who happens to run a brokerage."
  },
  {
    title: "Maintenance is chaos",
    desc: "Requests at all hours. 60% are emergencies that cost 3–5x more than planned work. Half your day is chasing vendors for updates tenants never see."
  },
  {
    title: "Listing marketing is a manual assembly line",
    desc: "Photography, descriptions, MLS entry, syndication, social, email blasts, print materials — every step disconnected, every listing reinvented from scratch."
  }
];

const solutions = [
  { title: "Lead response in minutes, not hours", desc: "AI qualification, instant follow-up, after-hours coverage." },
  { title: "Agents actually use the systems", desc: "Workflows that fit how your team works — not the other way around." },
  { title: "Pipeline visibility in real time", desc: "Every deal tracked, every deadline flagged, commissions calculated automatically." },
  { title: "Compliance on autopilot", desc: "Buyer agreements, disclosures, and audit trails handled systematically." },
  { title: "Maintenance triage without the chaos", desc: "Auto-routing, vendor coordination, tenant updates — all hands-free." },
  { title: "Marketing that builds itself", desc: "Listing descriptions, social posts, and materials generated from one input." }
];

const reportItems = [
  "Top 3 AI opportunities ranked by impact",
  "Impact / effort matrix for your operation",
  "3–7 tool recommendations with pricing",
  "4-day quick-wins plan (no developer needed)",
  "Financial impact model — 30/60/90 days"
];

const faqs = [
  {
    q: "How is the guarantee measured?",
    a: "We benchmark your time allocation during the call. At a 30-day check-in, if documented savings don't hit 5 hours/week, full refund."
  },
  {
    q: "What if we already use AI tools?",
    a: "Most clients do. We find 3–5 additional hours of savings even in teams already experimenting."
  },
  {
    q: "How fast do we see results?",
    a: "The report includes a 4-day quick-wins plan. Most clients see measurable savings within 2 weeks."
  },
  {
    q: "What tools do you work with?",
    a: "We integrate with Follow Up Boss, AppFolio, Dotloop, Buildium, and major CRMs. 40+ tools vetted specifically for real estate."
  },
  {
    q: "What happens after the assessment?",
    a: "You own the report. Implement solo or hire us for hands-on execution. No obligation."
  }
];

function ChevronDown() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="faq-chevron h-5 w-5 shrink-0 text-accent" aria-hidden="true">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  );
}

function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className="absolute -right-10 top-1/2 hidden h-[380px] w-[380px] -translate-y-1/2 opacity-[0.06] lg:block"
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.8" className="text-accent" />
      <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
      <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.8" className="text-accent" />
      <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
      <line x1="72" y1="72" x2="328" y2="328" stroke="currentColor" strokeWidth="0.3" className="text-accent" />
      <line x1="328" y1="72" x2="72" y2="328" stroke="currentColor" strokeWidth="0.3" className="text-accent" />
      <circle cx="200" cy="200" r="4" fill="currentColor" className="text-accent" />
      <line x1="200" y1="20" x2="200" y2="40" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <line x1="200" y1="360" x2="200" y2="380" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
      <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.5" className="text-accent" strokeDasharray="4 4" />
    </svg>
  );
}

export default function Home() {
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
            <a href="#problems" className="transition hover:text-foreground">Problems</a>
            <a href="#how" className="transition hover:text-foreground">How It Works</a>
            <a href="#faq" className="transition hover:text-foreground">FAQ</a>
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

          {/* ── Hero ── */}
          <Reveal aria-label="Introduction" className="relative overflow-hidden rounded-3xl border border-border/80 bg-surface/30 px-6 py-20 shadow-glow md:px-10 md:py-28 lg:px-14">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
            <HeroGraphic />
            <h1 className="relative max-w-3xl font-display text-5xl leading-[1.1] text-foreground md:text-7xl lg:text-8xl">
              Your brokerage<br />is leaking.
            </h1>
            <p className="relative mt-6 max-w-xl text-lg text-muted">
              Dead leads. Manual transactions. Compliance chaos. Maintenance fires.<br className="hidden sm:block" />
              We find the leaks and plug them with AI.
            </p>
            <div className="relative mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href={calendlyUrl} rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-accent bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-black transition hover:bg-[#d8ba83]">
                Book Your Assessment
              </a>
              <span className="text-sm text-muted">$999 &middot; money-back guarantee</span>
            </div>
          </Reveal>

          {/* ── Pain stats ── */}
          <Reveal as="div" className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border md:grid-cols-4">
            {painPoints.map((p) => (
              <div key={p.stat} className="bg-surface/60 p-5 text-center md:p-6">
                <p className="font-display text-2xl text-accent md:text-3xl">{p.stat}</p>
                <p className="mt-1.5 text-[11px] leading-tight text-muted">{p.text}</p>
              </div>
            ))}
          </Reveal>

          {/* ── Problems ── */}
          <Reveal id="problems" aria-label="Problems we solve" className="mt-24">
            <p className="section-label">Sound Familiar?</p>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">
              These aren&apos;t tech problems. They&apos;re operations problems.
            </h2>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {problems.map((p) => (
                <article key={p.title} className="rounded-2xl border border-border bg-surface p-5 transition hover:border-accent/30">
                  <h3 className="font-display text-lg text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                </article>
              ))}
            </div>
          </Reveal>

          {/* ── What we fix ── */}
          <Reveal aria-label="What we fix" className="mt-24 rounded-3xl border border-accent/30 bg-surface px-6 py-10 shadow-glow md:px-10 md:py-14">
            <p className="section-label">What We Fix</p>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">Every problem above has an AI solution today.</h2>
            <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((s) => (
                <div key={s.title} className="rounded-xl border border-border/60 bg-background/50 p-4">
                  <p className="text-sm font-semibold text-foreground">{s.title}</p>
                  <p className="mt-1 text-xs text-muted">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={calendlyUrl} rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#d8ba83]">
                See What AI Can Fix in Your Operation
              </a>
              <span className="text-xs text-muted">45-min call. No prep needed.</span>
            </div>
          </Reveal>

          {/* ── The Meridian Diagnostic ── */}
          <Reveal id="how" aria-label="How it works" className="mt-24">
            <p className="section-label">The Meridian Diagnostic</p>
            <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:gap-12">
              <div className="lg:w-1/2">
                <h2 className="font-display text-3xl md:text-5xl">
                  One call.<br />One report.<br />Clear ROI.
                </h2>
                <p className="mt-4 text-sm text-muted">
                  45-minute deep dive into your operation. We record, analyze against 40+ vetted
                  tools, and deliver a structured implementation report within 5 business days.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href={calendlyUrl} rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#d8ba83]">
                    Book for $999
                  </a>
                  <span className="text-xs text-muted">5 hrs/week or your money back</span>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-accent">Your report includes</p>
                  <ul className="mt-4 space-y-3">
                    {reportItems.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Why us ── */}
          <Reveal aria-label="Why Meridian AI" className="mt-24 rounded-3xl border border-border bg-surface/60 px-6 py-10 md:px-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-background/50 p-5">
                <p className="text-sm font-semibold text-foreground">Real estate only</p>
                <p className="mt-2 text-xs text-muted">
                  No SaaS. No e-commerce. Every tool and recommendation is vetted for brokerages and property managers.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background/50 p-5">
                <p className="text-sm font-semibold text-foreground">Built by operators</p>
                <p className="mt-2 text-xs text-muted">
                  Founded from inside a 40-agent brokerage losing 200+ hours/month to work AI could handle.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background/50 p-5">
                <p className="text-sm font-semibold text-foreground">Guaranteed results</p>
                <p className="mt-2 text-xs text-muted">
                  5 hours/week saved within 30 days — or 100% refund. We benchmark before, measure after.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ── FAQ ── */}
          <Reveal id="faq" aria-label="Frequently asked questions" className="mt-24">
            <p className="section-label">FAQ</p>
            <div className="mt-8 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="group rounded-2xl border border-border bg-surface">
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 text-sm font-medium text-foreground">
                    {faq.q}
                    <ChevronDown />
                  </summary>
                  <div className="px-6 pb-5 text-sm leading-6 text-muted">{faq.a}</div>
                </details>
              ))}
            </div>
          </Reveal>

          {/* ── Final CTA ── */}
          <Reveal aria-label="Get started" className="mt-24 rounded-3xl border border-accent/45 bg-surface px-6 py-16 text-center shadow-glow md:px-10">
            <h2 className="font-display text-3xl md:text-5xl">
              Your competitors already started.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted">
              $999. 5 business days. Money-back guarantee. 8 spots per month.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <a href={calendlyUrl} rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-accent bg-accent px-8 py-3.5 text-base font-semibold tracking-wide text-black transition hover:bg-[#d8ba83]">
                Book Your Assessment
              </a>
              <a href="mailto:hello@meridianai.com" className="text-xs text-accent underline underline-offset-2 transition hover:text-foreground">
                hello@meridianai.com
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
            <p className="text-xs tracking-wide text-muted/50">Practical AI. Measurable results. Real estate only.</p>
            <p className="text-xs text-muted/40">&copy; {new Date().getFullYear()} Meridian AI</p>
          </div>
        </div>
      </footer>
    </>
  );
}
