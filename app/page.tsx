import { Reveal } from "@/components/reveal";
import { MobileNav } from "@/components/mobile-nav";

const calendlyUrl = "https://calendly.com/placeholder/ai-assessment";

const painPoints = [
  { stat: "15 hrs", text: "Average lead response time. 78% of buyers go with whoever answers first." },
  { stat: "67%", text: "of real estate leads go completely unanswered." },
  { stat: "30 hrs", text: "of admin per transaction. 75% of every deal is paperwork — not client work." },
  { stat: "24/7", text: "AI agents work around the clock — answering, following up, closing gaps while you sleep." }
];

const problems = [
  {
    title: "Leads die in your inbox",
    desc: "62% of inquiries arrive after hours. The average response time is 15 hours. The first agent to reply wins 78% of the time. Every hour you wait, you lose money."
  },
  {
    title: "You're drowning in admin",
    desc: "Scheduling, follow-ups, data entry, email, paperwork. Agents spend 50% of their time on tasks that never touch a client. That's half your week — gone."
  },
  {
    title: "Your tools don't talk to each other",
    desc: "CRM, MLS, email, calendar, transaction management, marketing — all disconnected. 40% of agents never touch the CRM you pay for. Tab fatigue is real."
  },
  {
    title: "You can't see your own business",
    desc: "No real-time pipeline visibility. No performance data. You find out a deal is in trouble when it blows up, not when it could've been saved."
  },
  {
    title: "Maintenance and tenant ops are reactive",
    desc: "60% of work orders are emergencies costing 3–5x more than planned work. Vendors go dark. Tenants feel ignored. Turnover costs $4K per unit."
  },
  {
    title: "Marketing is reinvented from scratch every time",
    desc: "Listing descriptions, social posts, email blasts, print materials — every step is manual and disconnected. Every listing starts from zero."
  }
];

const solutions = [
  { title: "Leads answered in minutes — 24/7", desc: "AI agents qualify leads, respond instantly, and follow up after hours. No more lost deals at 11pm." },
  { title: "Your admin runs itself", desc: "Email triage, scheduling, CRM updates, data entry — handled automatically so you can focus on clients." },
  { title: "One agent across all your tools", desc: "AI connects your CRM, calendar, MLS, and messaging into one workflow. No more tab fatigue." },
  { title: "Real-time pipeline visibility", desc: "Every deal tracked, every deadline flagged, performance dashboards updated automatically." },
  { title: "Maintenance and tenant ops on autopilot", desc: "Auto-routing, vendor coordination, tenant updates — proactive instead of reactive." },
  { title: "Marketing generated in seconds", desc: "Listing descriptions, social posts, email campaigns, and market reports — created from one input." }
];

const reportItems = [
  "Personalized AI roadmap — what to automate first and why",
  "Tool and agent recommendations tailored to your workflow",
  "Time-savings analysis — exactly how many hours/week you get back",
  "Revenue impact model — leads saved, deals closed, costs cut",
  "4-day quick-wins plan (no developer needed)"
];

const faqs = [
  {
    q: "What is an AI agent?",
    a: "It's an always-on assistant that connects to the tools you already use — email, CRM, calendar, messaging apps. It doesn't just answer questions — it actually does things: responds to leads, schedules showings, drafts follow-ups, updates your CRM, and more. All while you sleep."
  },
  {
    q: "I'm not technical. Can I still use this?",
    a: "Absolutely. That's exactly what we're here for. We handle the setup and configuration. You just tell it what to do in plain English through your messaging apps."
  },
  {
    q: "How fast do we see results?",
    a: "The report includes a 4-day quick-wins plan. Most clients see measurable time savings within 2 weeks and revenue impact within 30 days."
  },
  {
    q: "Who is this for?",
    a: "Anyone in real estate — solo agents, teams, brokerages, property managers, investors, developers. If you're spending hours on repetitive tasks, there's an AI solution for it today."
  },
  {
    q: "What happens after the assessment?",
    a: "You own the report. Implement solo using our step-by-step guide, or hire us for hands-on setup and training. No obligation either way."
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
            <a href="/#problems" className="transition hover:text-foreground">Problems</a>
            <a href="/#how" className="transition hover:text-foreground">How It Works</a>
            <a href="/#faq" className="transition hover:text-foreground">FAQ</a>
            <a href="/team" className="transition hover:text-foreground">Team</a>
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
              AI agents that<br />work real estate<br />for you.
            </h1>
            <p className="relative mt-6 max-w-xl text-lg text-muted">
              Respond to leads at 2am. Automate your admin. Generate marketing in seconds.{" "}<br className="hidden sm:block" />
              AI is changing real estate. We help you stay ahead.
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
              The real estate industry is bleeding time and money.
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
            <p className="section-label">What AI Agents Do For You</p>
            <h2 className="mt-5 font-display text-3xl md:text-4xl">Every problem above has an AI solution — running right now.</h2>
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
                See What AI Can Do For You
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
                  45-minute deep dive into your workflow. We analyze where you&apos;re losing time and money,
                  then deliver a custom AI implementation plan within 5 business days.
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
                  Agents, brokers, property managers, investors — every recommendation is vetted for how real estate actually works.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background/50 p-5">
                <p className="text-sm font-semibold text-foreground">We set it up for you</p>
                <p className="mt-2 text-xs text-muted">
                  You don&apos;t need to be technical. We configure AI agents, connect your tools, and train you to use them in plain English.
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
              The agents using AI are pulling ahead.
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
            <p className="text-xs tracking-wide text-muted/50">AI agents for real estate. Save time. Make money.</p>
            <p className="text-xs text-muted/40">&copy; {new Date().getFullYear()} Meridian AI</p>
          </div>
        </div>
      </footer>
    </>
  );
}
