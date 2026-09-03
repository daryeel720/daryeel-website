import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Stay Connected"
        title="Events"
        description="Workshops, community gatherings, and cultural celebrations happening at Daryeel."
      />
      <div className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <div className="rounded-lg border border-gold/40 bg-gold/10 px-5 py-4 text-sm text-ink/80">
          Upcoming events will be posted here as they are scheduled.
          Check back soon, or contact us to hear about upcoming workshops
          and community gatherings.
        </div>
        <div className="mt-10 flex flex-col divide-y divide-navy/10 rounded-lg border border-navy/10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col gap-1 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-lg font-semibold text-navy">
                  [Event name to be added]
                </p>
                <p className="text-sm text-ink/60">[Date] &middot; [Location]</p>
              </div>
              <span className="w-fit rounded-full bg-paper px-3 py-1 text-xs font-medium text-ink/60">
                Details coming soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
