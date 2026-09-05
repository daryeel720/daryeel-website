import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { safeFetch } from "@/sanity/lib/client";
import { eventsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = { title: "Events" };

type SanityEvent = {
  _id: string;
  title: string;
  date?: string;
  location?: string;
  description?: string;
};

function formatEventDate(iso?: string) {
  if (!iso) return "Date to be announced";
  return new Date(iso).toLocaleDateString("en-CA", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function EventsPage() {
  const events = await safeFetch<SanityEvent[]>(eventsQuery);
  const hasEvents = events && events.length > 0;

  return (
    <>
      <PageHero
        eyebrow="Stay Connected"
        title="Events"
        description="Workshops, community gatherings, and cultural celebrations happening at Daryeel."
      />
      <div className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        {!hasEvents && (
          <div className="rounded-lg border border-gold/40 bg-gold/10 px-5 py-4 text-sm text-ink/80">
            Upcoming events will be posted here as they are scheduled.
            Check back soon, or contact us to hear about upcoming workshops
            and community gatherings.
          </div>
        )}
        <div className="mt-10 flex flex-col divide-y divide-navy/10 rounded-lg border border-navy/10">
          {(hasEvents ? events! : [1, 2, 3]).map((item, i) => {
            const event = typeof item === "object" ? (item as SanityEvent) : null;
            return (
              <div
                key={event?._id ?? i}
                className="flex flex-col gap-1 p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-display text-lg font-semibold text-navy">
                    {event ? event.title : "[Event name to be added]"}
                  </p>
                  <p className="text-sm text-ink/60">
                    {event
                      ? `${formatEventDate(event.date)}${event.location ? ` · ${event.location}` : ""}`
                      : "[Date] · [Location]"}
                  </p>
                  {event?.description && (
                    <p className="mt-1 max-w-[60ch] text-sm text-ink/70">
                      {event.description}
                    </p>
                  )}
                </div>
                <span className="w-fit shrink-0 rounded-full bg-paper px-3 py-1 text-xs font-medium text-ink/60">
                  {event ? "Details" : "Details coming soon"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
