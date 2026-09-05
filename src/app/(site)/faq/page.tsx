import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "FAQ" };

const faqs = [
  {
    q: "Who can access Daryeel's programs?",
    a: "Our programs serve seniors, youth, families, newcomers, and other individuals in our community facing social, economic, or settlement challenges. Contact us to learn which program fits your needs.",
  },
  {
    q: "Is there a cost to access services?",
    a: "[Placeholder — confirm which programs are free vs. membership-based before launch.]",
  },
  {
    q: "What languages are services available in?",
    a: "Our staff speak English and Somali. Call our office to request another language.",
  },
  {
    q: "How do I become a member?",
    a: "Visit our Become a Member page, or contact our office directly and a member of our team will guide you through the application.",
  },
  {
    q: "How can I volunteer?",
    a: "Visit our Volunteer page to see current opportunities, or reach out and tell us about your availability and interests.",
  },
  {
    q: "Is my donation tax deductible?",
    a: "[Placeholder — confirm charitable registration status and tax receipt process before launch.]",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Frequently Asked Questions"
        description="Answers to common questions about our programs, membership, and how to get involved."
      />
      <div className="mx-auto max-w-3xl px-5 py-14 md:py-20">
        <div className="flex flex-col divide-y divide-navy/10 rounded-lg border border-navy/10">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-semibold text-navy">
                {f.q}
                <span className="text-forest transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-ink/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
