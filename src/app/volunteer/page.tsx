import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = { title: "Volunteer" };

const opportunities = [
  {
    title: "Community Connections host",
    text: "Welcome newcomer families and help build friendships between newcomers and established residents.",
  },
  {
    title: "Seniors program support",
    text: "Assist with exercise sessions, ESL classes, and social activities for seniors 55+.",
  },
  {
    title: "Settlement workshop assistant",
    text: "Help run monthly workshops on housing, health, finance, and other settlement topics.",
  },
  {
    title: "Interpretation & translation",
    text: "If you're multilingual, help us serve clients in English or Somali.",
  },
  {
    title: "Employment services mentor",
    text: "Support resume building and mock interviews for newcomers and youth.",
  },
  {
    title: "Events & outreach",
    text: "Help at community events, outreach days, and fundraising activities.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Volunteer"
        description="Volunteers are at the heart of everything Daryeel does. Share your time, skills, and languages with your community."
      />
      <div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((o) => (
            <div
              key={o.title}
              className="rounded-lg border border-navy/10 p-6"
            >
              <h2 className="font-display text-lg font-semibold text-navy">
                {o.title}
              </h2>
              <p className="mt-2 text-sm text-ink/65">{o.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl bg-paper p-8 text-center">
          <h2 className="font-display text-xl font-semibold text-navy">
            Ready to volunteer?
          </h2>
          <p className="mx-auto mt-2 max-w-[50ch] text-ink/70">
            Reach out and let us know your availability and interests, and
            our team will follow up with next steps.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-dark"
            >
              Email Us
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="rounded-md border border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Call Us
            </a>
          </div>
          <p className="mt-4 text-xs text-ink/50">
            [Online volunteer application form to be added]
          </p>
        </div>
      </div>
    </>
  );
}
