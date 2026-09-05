import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { programs } from "@/lib/site-data";

export const metadata: Metadata = { title: "Our Team" };

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="About Daryeel"
        title="Our Team"
        description="Our staff bring lived experience, language ability, and professional expertise to every program we run."
      />
      <div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <div className="mb-10 rounded-lg border border-gold/40 bg-gold/10 px-5 py-4 text-sm text-ink/80">
          Staff names, photos, and roles are being finalized and will be
          added here.
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.slug}
              className="rounded-lg border border-navy/10 p-6"
            >
              <div className="h-16 w-16 rounded-full bg-paper" />
              <p className="mt-4 text-sm font-semibold text-navy">
                [Name to be added]
              </p>
              <p className="text-sm text-ink/60">
                {program.name} Coordinator
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
