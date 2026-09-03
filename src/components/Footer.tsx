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
      <ul className="mt-4 flex flex-col gap-2.5">
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
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-6">
          <div className="sm:col-span-2 md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Daryeel Community & Senior Centre"
              width={64}
              height={64}
              className="h-16 w-16"
            />
            <p className="mt-3 max-w-[20ch] text-sm italic text-white/60">
              Building stronger, healthier communities together.
            </p>
          </div>
          <FooterCol title="Programs" links={footerLinks.programs} />
          <FooterCol title="Get Involved" links={footerLinks.getInvolved} />
          <FooterCol title="Organization" links={footerLinks.organization} />
          <FooterCol title="Our Policies" links={footerLinks.policies} />
          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Contact Us
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
              <li>{contact.addressLine1}</li>
              <li>{contact.addressLine2}</li>
              <li>
                <a href={`tel:${contact.phone}`} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-2.5">
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
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Daryeel Community &amp; Senior
            Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
