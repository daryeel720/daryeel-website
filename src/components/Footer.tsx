import Image from "next/image";
import Link from "next/link";
import { footerLinks, contact } from "@/lib/site-data";
import { FacebookIcon, InstagramIcon, YoutubeIcon, XIcon } from "@/components/SocialIcons";

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold text-white">
        {title}
      </h3>
      <ul className="mt-3 flex flex-col gap-1.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm leading-tight text-white/70 transition hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterAccordion({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <details className="group border-b border-white/10 py-1">
      <summary className="flex cursor-pointer list-none items-center justify-between py-2.5 font-display text-sm font-semibold text-white">
        {title}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          aria-hidden="true"
          className="shrink-0 transition-transform group-open:rotate-45"
        >
          <path d="M7 1v12M1 7h12" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </summary>
      <ul className="flex flex-col gap-2.5 pb-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

function ContactBlock() {
  return (
    <>
      <ul className="mt-3 flex flex-col gap-1.5 text-sm text-white/70">
        <li>{contact.addressLine1}</li>
        <li>{contact.addressLine2}</li>
        <li>
          <a href={`tel:${contact.phone}`} className="hover:text-white">
            {contact.phone}
          </a>
        </li>
        <li>
          <a href={`mailto:${contact.email}`} className="hover:text-white">
            {contact.email}
          </a>
        </li>
      </ul>
      <div className="mt-4 flex gap-2.5">
        <a
          href={contact.socials.facebook}
          aria-label="Daryeel on Facebook"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/50 hover:bg-white/10"
        >
          <FacebookIcon className="h-4 w-4" />
        </a>
        <a
          href={contact.socials.instagram}
          aria-label="Daryeel on Instagram"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/50 hover:bg-white/10"
        >
          <InstagramIcon className="h-4 w-4" />
        </a>
        <a
          href={contact.socials.youtube}
          aria-label="Daryeel on YouTube"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/50 hover:bg-white/10"
        >
          <YoutubeIcon className="h-4 w-4" />
        </a>
        <a
          href={contact.socials.x}
          aria-label="Daryeel on X"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/50 hover:bg-white/10"
        >
          <XIcon className="h-4 w-4" />
        </a>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 md:py-10">
        <Image
          src="/images/logo.png"
          alt="Daryeel Community & Senior Centre"
          width={64}
          height={64}
          className="h-16 w-16 md:h-12 md:w-12"
        />
        <p className="mt-3 max-w-[28ch] text-sm italic text-white/60 md:mt-2">
          Building stronger, healthier communities together.
        </p>

        {/* Mobile: collapsible accordion */}
        <div className="mt-6 flex flex-col md:hidden">
          <FooterAccordion title="Programs" links={footerLinks.programs} />
          <FooterAccordion title="Get Involved" links={footerLinks.getInvolved} />
          <FooterAccordion title="Organization" links={footerLinks.organization} />
          <FooterAccordion title="Our Policies" links={footerLinks.policies} />
          <div className="border-b border-white/10 py-4">
            <h3 className="font-display text-sm font-semibold text-white">
              Contact Us
            </h3>
            <ContactBlock />
          </div>
        </div>

        {/* Desktop: full columns */}
        <div className="mt-6 hidden grid-cols-5 gap-8 md:grid">
          <FooterCol title="Programs" links={footerLinks.programs} />
          <FooterCol title="Get Involved" links={footerLinks.getInvolved} />
          <FooterCol title="Organization" links={footerLinks.organization} />
          <FooterCol title="Our Policies" links={footerLinks.policies} />
          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Contact Us
            </h3>
            <ContactBlock />
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 md:mt-8">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Daryeel Community &amp; Senior
            Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
