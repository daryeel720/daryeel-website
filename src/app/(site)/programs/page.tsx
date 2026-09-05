import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { programs } from "@/lib/site-data";

export const metadata: Metadata = { title: "Programs & Services" };

export default function ProgramsIndex() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Programs & Services"
        description="Daryeel provides advocacy, community support, education, referral services, and programs designed to reduce barriers, promote inclusion, and improve access to essential resources."
      />
      <div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className="group flex flex-col rounded-lg border border-navy/10 p-6 transition hover:border-navy/30 hover:shadow-sm"
            >
              <h2 className="font-display text-lg font-semibold text-navy">
                {program.name}
              </h2>
              <p className="mt-2 text-sm text-ink/65">
                {program.shortDescription}
              </p>
              <span className="mt-4 text-base font-bold text-forest group-hover:underline">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
