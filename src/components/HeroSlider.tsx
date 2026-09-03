"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Slide = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  background: string; // tailwind bg class
};

const slides: Slide[] = [
  {
    eyebrow: "Daryeel Community & Senior Centre",
    title: "Building stronger, healthier communities together",
    description:
      "Supporting seniors, youth, families, and newcomers through advocacy, community support, and programs that reduce barriers across Toronto.",
    ctaLabel: "Learn About Us",
    ctaHref: "/about",
    background: "bg-forest-dark",
  },
  {
    eyebrow: "Housing Services",
    title: "Keeping families stably housed",
    description:
      "Eviction prevention, Rent Bank applications, and Rent Geared to Income support, with advocacy and case management every step of the way.",
    ctaLabel: "Explore Housing Services",
    ctaHref: "/programs/housing",
    background: "bg-navy",
  },
  {
    eyebrow: "Seniors Program",
    title: "Reducing isolation for seniors 55+",
    description:
      "Culturally responsive activities, ESL classes, food access, and home visits that help seniors stay connected to their community.",
    ctaLabel: "Explore Seniors Program",
    ctaHref: "/programs/seniors",
    background: "bg-maple-dark",
  },
  {
    eyebrow: "Settlement Services",
    title: "Support in the language you're most comfortable in",
    description:
      "Intake, interpretation, form filling, and monthly workshops for newcomers, refugees, and immigrants — in English and Somali.",
    ctaLabel: "Explore Settlement Services",
    ctaHref: "/programs/settlement",
    background: "bg-blue",
  },
  {
    eyebrow: "Get Involved",
    title: "There's a place for you at Daryeel",
    description:
      "Volunteer your time, become a member, or support our work with a donation — every bit of support strengthens our community.",
    ctaLabel: "See How to Get Involved",
    ctaHref: "/volunteer",
    background: "bg-maple",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function goTo(i: number) {
    setIndex(i);
    if (timerRef.current) clearInterval(timerRef.current);
  }

  function prev() {
    goTo((index - 1 + slides.length) % slides.length);
  }

  function next() {
    goTo((index + 1) % slides.length);
  }

  const slide = slides[index];

  return (
    <section
      className={`relative overflow-hidden ${slide.background} text-white transition-colors duration-700`}
      aria-roledescription="carousel"
      aria-label="Daryeel highlights"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 md:py-24">
        <div className="max-w-2xl" key={index}>
          <p className="text-sm font-semibold text-white/70">
            {slide.eyebrow}
          </p>
          <h1 className="mt-3 max-w-[18ch] font-display text-3xl font-semibold leading-tight md:text-5xl">
            {slide.title}
          </h1>
          <p className="mt-5 max-w-[56ch] text-base text-white/80 md:text-lg">
            {slide.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={slide.ctaHref}
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white/90"
            >
              {slide.ctaLabel}
            </Link>
            <Link
              href="/donate"
              className="rounded-md border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Donate Today
            </Link>
          </div>
        </div>
      </div>

      {/* controls */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 pb-8">
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.title}
              onClick={() => goTo(i)}
              aria-label={`Show slide ${i + 1}: ${s.title}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-7 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 transition hover:bg-white/10"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M9 2 4 7l5 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 transition hover:bg-white/10"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
