import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Stay Connected"
        title="News & Updates"
        description="Stories, program updates, and announcements from Daryeel Community & Senior Centre."
      />
      <div className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <div className="rounded-lg border border-gold/40 bg-gold/10 px-5 py-4 text-sm text-ink/80">
          News posts will appear here as they are published.
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-lg border border-navy/10 p-6">
              <p className="text-xs font-medium text-forest">
                [Category]
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-navy">
                [Article title to be added]
              </p>
              <p className="mt-2 text-sm text-ink/60">
                [Short summary to be added once posts are written.]
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
