"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type Slide = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageUrl?: string;
  background?: string; // tailwind bg class, used when no photo is set
};

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (slides.length < 2) return;
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
  }, [slides.length]);

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

  if (slides.length === 0) return null;
  const slide = slides[index];

  return (
    <section
      className={`relative overflow-hidden text-white transition-colors duration-700 ${
        slide.imageUrl ? "bg-navy" : slide.background || "bg-navy"
      }`}
      aria-roledescription="carousel"
      aria-label="Daryeel highlights"
    >
      {slide.imageUrl && (
        <>
          <Image
            src={slide.imageUrl}
            alt=""
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-5 py-12 md:py-24">
        <div className="max-w-2xl" key={index}>
          {slide.eyebrow && (
            <p className="text-sm font-semibold text-white/70">
              {slide.eyebrow}
            </p>
          )}
          <h1 className="mt-3 max-w-[18ch] font-display text-3xl font-semibold leading-tight md:text-5xl">
            {slide.title}
          </h1>
          {slide.description && (
            <p className="mt-5 max-w-[56ch] text-base text-white/80 md:text-lg">
              {slide.description}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            {slide.ctaHref && (
              <Link
                href={slide.ctaHref}
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-white/90"
              >
                {slide.ctaLabel || "Learn More"}
              </Link>
            )}
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
      {slides.length > 1 && (
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 pb-8">
          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.title + i}
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
      )}
    </section>
  );
}
