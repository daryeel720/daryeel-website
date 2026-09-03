import Link from "next/link";
import PageHero from "@/components/PageHero";

type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export default function ProgramLayout({
  eyebrow,
  title,
  intro,
  sections,
  intakeLine,
  placeholder,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
  intakeLine?: string;
  placeholder?: boolean;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={intro} />

      <div className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        {placeholder && (
          <div className="mb-10 rounded-lg border border-gold/40 bg-gold/10 px-5 py-4 text-sm text-ink/80">
            More detail on this program is being finalized. Contact us
            directly for the most current information while this page is
            completed.
          </div>
        )}

        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-2xl font-semibold text-navy">
                {section.heading}
              </h2>
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="mt-3 max-w-[68ch] text-ink/70">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-4 flex flex-col gap-2.5">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-ink/75">
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest"
                        aria-hidden="true"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl bg-paper p-8">
          <h2 className="font-display text-xl font-semibold text-navy">
            Ready to get started?
          </h2>
          <p className="mt-2 max-w-[60ch] text-ink/70">
            {intakeLine
              ? `Call our intake line at ${intakeLine}, or reach out through our contact page and a member of our team will follow up with you.`
              : "Contact us and a member of our team will follow up with you about this program."}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-dark"
            >
              Contact Us
            </Link>
            <Link
              href="/become-a-member"
              className="rounded-md border border-navy px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
