import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = { title: "Become a Member" };

const benefits = [
  "Priority access to programs and workshops",
  "A voice in shaping the programs Daryeel offers",
  "Invitations to community events and cultural celebrations",
  "Connection to a network of neighbours, seniors, and newcomers",
];

export default function BecomeMemberPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Become a Member"
        description="Membership connects you to Daryeel's programs, events, and community — and helps us understand and represent the needs of the people we serve."
      />
      <div className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold text-navy">
              Why become a member?
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 text-ink/75">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest"
                    aria-hidden="true"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-paper p-8">
            <h2 className="font-display text-xl font-semibold text-navy">
              How to apply
            </h2>
            <p className="mt-3 text-ink/70">
              Membership applications are processed by our team directly.
              Call, email, or visit us in person and we will guide you
              through the application.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href={`tel:${contact.phone}`}
                className="font-semibold text-navy hover:underline"
              >
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="font-semibold text-navy hover:underline"
              >
                {contact.email}
              </a>
            </div>
            <p className="mt-4 text-xs text-ink/50">
              [Online membership application form to be added]
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
