"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
  "aria-label"?: string;
};

export function Reveal({
  children,
  className = "",
  as = "section",
  id,
  "aria-label": ariaLabel
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const cls = `reveal ${visible ? "reveal-visible" : ""} ${className}`;

  if (as === "div") {
    return (
      <div ref={ref as React.RefObject<HTMLDivElement>} id={id} aria-label={ariaLabel} className={cls}>
        {children}
      </div>
    );
  }

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id={id} aria-label={ariaLabel} className={cls}>
      {children}
    </section>
  );
}
