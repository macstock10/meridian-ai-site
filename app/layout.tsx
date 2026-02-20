import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Meridian AI | AI Agents for Real Estate Professionals",
  description:
    "Meridian AI helps real estate professionals save time, cut costs, and close more deals with AI agents. $999 assessment with a money-back guarantee.",
  openGraph: {
    title: "Meridian AI | AI Agents for Real Estate",
    description:
      "We help real estate professionals reclaim 5+ hours per week by setting up AI agents that automate leads, admin, marketing, and operations.",
    type: "website",
    locale: "en_US",
    siteName: "Meridian AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "Meridian AI | AI Agents for Real Estate",
    description:
      "We help real estate professionals reclaim 5+ hours per week with AI agents that handle leads, admin, and operations."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-black focus:outline-none"
        >
          Skip to main content
        </a>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-background" aria-hidden="true" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-radial" aria-hidden="true" />
        <div className="pointer-events-none fixed inset-0 -z-10 grid-overlay opacity-30" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
