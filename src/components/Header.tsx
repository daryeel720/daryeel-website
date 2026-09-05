"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { mainNav } from "@/lib/site-data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [openMobileSections, setOpenMobileSections] = useState<string[]>([]);

  function toggleMobileSection(label: string) {
    setOpenMobileSections((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-blue">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Daryeel Community & Senior Centre"
            width={52}
            height={52}
            className="h-12 w-12 rounded-full bg-white md:h-14 md:w-14"
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg font-bold text-white">
              Daryeel
            </span>
            <span className="text-[11px] tracking-wide text-white/65">
              Community &amp; Senior Centre
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <div
              key={item.label}
              className="group relative"
              onMouseEnter={() => setOpenGroup(item.label)}
              onMouseLeave={() => setOpenGroup(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-md px-3.5 py-2.5 text-base font-bold text-white transition hover:text-gold"
              >
                {item.label}
                {item.children && (
                  <svg width="11" height="11" viewBox="0 0 10 10" aria-hidden="true">
                    <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
              {item.children && openGroup === item.label && (
                <div className="absolute left-0 top-full w-64 rounded-lg border border-navy/10 bg-white p-2 shadow-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-paper hover:text-navy"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/become-a-member"
            className="rounded-md border border-white px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white hover:text-navy"
          >
            Become a Member
          </Link>
          <Link
            href="/donate"
            className="rounded-md bg-maple px-4 py-2.5 text-sm font-bold text-white transition hover:bg-maple-dark"
          >
            Donate
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/30 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            {open ? (
              <path d="M4 4 16 16 M16 4 4 16" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 5h14 M3 10h14 M3 15h14" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-white/10 bg-blue lg:hidden">
          <nav className="mx-auto max-w-7xl px-5 py-3">
            {mainNav.map((item) => {
              const isSectionOpen = openMobileSections.includes(item.label);
              return (
                <div key={item.label} className="border-b border-white/10 py-1 last:border-0">
                  {item.children ? (
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-2.5 text-left text-base font-bold text-white"
                      onClick={() => toggleMobileSection(item.label)}
                      aria-expanded={isSectionOpen}
                    >
                      {item.label}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        aria-hidden="true"
                        className={`shrink-0 transition-transform ${isSectionOpen ? "rotate-45" : ""}`}
                      >
                        <path d="M7 1v12M1 7h12" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2.5 text-base font-bold text-white"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.children && isSectionOpen && (
                    <div className="ml-3 flex flex-col pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-2 text-sm text-white/75"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="mt-3 flex flex-col gap-2 pb-3">
              <Link
                href="/become-a-member"
                className="rounded-md border border-white px-4 py-2 text-center text-sm font-bold text-white"
                onClick={() => setOpen(false)}
              >
                Become a Member
              </Link>
              <Link
                href="/donate"
                className="rounded-md bg-maple px-4 py-2 text-center text-sm font-bold text-white"
                onClick={() => setOpen(false)}
              >
                Donate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
