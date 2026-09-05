import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Donate" };

const impacts = [
  { amount: "$25", result: "Supports a senior's transportation to a program session" },
  { amount: "$50", result: "Provides interpretation support for a newcomer family" },
  { amount: "$100", result: "Helps stock our food access program for a week" },
  { amount: "$250", result: "Sponsors a youth mentorship session" },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Donate"
        description="Your donation directly supports housing help, seniors programming, settlement services, and more for our community in Toronto."
      />
      <div className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <div className="rounded-xl bg-paper p-8 text-center">
          <p className="text-sm text-ink/60">
            [Donation processor to be connected — Stripe or CanadaHelps]
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {["$25", "$50", "$100", "$250"].map((amt) => (
              <button
                key={amt}
                className="rounded-md border border-navy/20 bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:border-navy"
              >
                {amt}
              </button>
            ))}
            <button className="rounded-md border border-navy/20 bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:border-navy">
              Other
            </button>
          </div>
          <button className="mt-6 w-full rounded-md bg-maple px-6 py-3 text-sm font-semibold text-white transition hover:bg-maple-dark sm:w-auto">
            Donate Now
          </button>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-xl font-semibold text-navy">
            Where your donation goes
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {impacts.map((i) => (
              <div
                key={i.amount}
                className="flex items-start gap-4 rounded-lg border border-navy/10 p-5"
              >
                <span className="font-display text-2xl font-semibold text-forest">
                  {i.amount}
                </span>
                <span className="text-sm text-ink/70">{i.result}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-sm text-ink/50">
          Daryeel Community &amp; Senior Centre is a registered non-profit
          organization. [Charity registration number to be added.] Tax
          receipts are issued for eligible donations.
        </p>
      </div>
    </>
  );
}
