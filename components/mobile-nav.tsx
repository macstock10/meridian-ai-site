"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function MobileNav({ calendlyUrl }: { calendlyUrl: string }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }

      // Basic focus trap
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, close]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition hover:text-foreground"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? (
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        ) : (
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      {open && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-label="Navigation menu"
          className="absolute left-0 right-0 top-full border-b border-border/60 bg-background/95 backdrop-blur-lg"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            <a href="/#problems" onClick={close} className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-surface hover:text-foreground">
              Problems
            </a>
            <a href="/#how" onClick={close} className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-surface hover:text-foreground">
              How It Works
            </a>
            <a href="/#faq" onClick={close} className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-surface hover:text-foreground">
              FAQ
            </a>
            <a href="/team" onClick={close} className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-surface hover:text-foreground">
              Team
            </a>
            <a
              href={calendlyUrl}
              onClick={close}
              className="mt-2 rounded-md border border-accent bg-accent px-4 py-2 text-center text-sm font-semibold text-black transition hover:bg-[#d8ba83]"
              rel="noopener noreferrer"
            >
              Book Assessment
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
