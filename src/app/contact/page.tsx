import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="We're here to help"
        title="Contact Us"
        description="Reach out by phone, email, or in person — our team responds to every inquiry."
      />
      <div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-xl font-semibold text-navy">
              Get in touch
            </h2>
            <dl className="mt-6 flex flex-col gap-5 text-sm">
              <div>
                <dt className="font-semibold text-ink/50">Address</dt>
                <dd className="mt-1 text-ink/80">
                  {contact.addressLine1}
                  <br />
                  {contact.addressLine2}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink/50">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-navy hover:underline"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink/50">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-navy hover:underline"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink/50">Office Hours</dt>
                <dd className="mt-1 text-ink/80">{contact.hours}</dd>
              </div>
            </dl>

            <div className="mt-8 flex gap-3">
              {Object.entries(contact.socials).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 text-navy transition hover:bg-navy hover:text-white"
                >
                  <span className="text-xs font-semibold uppercase">
                    {name[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form className="rounded-xl bg-paper p-8">
            <h2 className="font-display text-xl font-semibold text-navy">
              Send us a message
            </h2>
            <div className="mt-5 flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium text-ink/70" htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-1 w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-ink/70" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-ink/70" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full rounded-md border border-navy/20 bg-white px-3 py-2 text-sm"
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-dark"
              >
                Send Message
              </button>
              <p className="text-xs text-ink/50">
                [Form submission to be connected to a real email or form
                service before launch]
              </p>
            </div>
          </form>
        </div>

        <div className="mt-14 h-72 w-full overflow-hidden rounded-xl border border-navy/10">
          <iframe
            title="Daryeel Community & Senior Centre location map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${contact.addressLine1}, ${contact.addressLine2}`
            )}&output=embed`}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
}
