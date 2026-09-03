import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Board of Directors" };

const placeholderSeats = [
  "Board Chair",
  "Vice Chair",
  "Treasurer",
  "Secretary",
  "Director",
  "Director",
];

export default function BoardPage() {
  return (
    <>
      <PageHero
        eyebrow="About Daryeel"
        title="Board of Directors"
        description="Daryeel is governed by a volunteer Board of Directors committed to accountability, transparency, and responsible stewardship on behalf of our community."
      />
      <div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <div className="mb-10 rounded-lg border border-gold/40 bg-gold/10 px-5 py-4 text-sm text-ink/80">
          Board member names, photos, and bios are being finalized and
          will be added here.
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderSeats.map((seat, i) => (
            <div
              key={i}
              className="rounded-lg border border-navy/10 p-6 text-center"
            >
              <div className="mx-auto h-20 w-20 rounded-full bg-paper" />
              <p className="mt-4 text-sm font-semibold text-navy">
                [Name to be added]
              </p>
              <p className="text-sm text-ink/60">{seat}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
