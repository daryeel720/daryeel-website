import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" updated="September 2026">
      <p>
        This Cookie Policy explains how Daryeel Community &amp; Senior
        Centre uses cookies and similar technologies on this website.
      </p>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          What are cookies?
        </h2>
        <p className="mt-2">
          Cookies are small text files placed on your device when you
          visit a website. They help the site function properly and can
          be used to remember your preferences or understand how the
          site is used.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          How we use cookies
        </h2>
        <p className="mt-2">Our website may use the following types of cookies:</p>
        <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc marker:text-forest">
          <li>
            <strong className="text-ink">Essential cookies</strong> —
            required for the website to function correctly, such as
            remembering your progress through a form.
          </li>
          <li>
            <strong className="text-ink">Analytics cookies</strong> — if
            enabled, help us understand how visitors use the site (for
            example, which pages are visited most) so we can improve it.
            We do not currently use analytics cookies, but may introduce
            them in the future.
          </li>
          <li>
            <strong className="text-ink">Third-party cookies</strong> —
            our donation processor may set its own cookies when you make
            a donation. These are governed by that provider&rsquo;s own
            cookie and privacy policies, not this one.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Managing cookies
        </h2>
        <p className="mt-2">
          Most web browsers let you control cookies through their
          settings, including blocking or deleting them. Disabling
          essential cookies may affect the functionality of parts of
          this website, such as donation or contact forms.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Changes to this policy
        </h2>
        <p className="mt-2">
          We may update this policy as our use of cookies changes. The
          date at the top of this page reflects the most recent
          revision.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Contact us
        </h2>
        <p className="mt-2">
          Questions about this policy can be directed to our office. See
          our{" "}
          <a href="/contact" className="text-navy underline">
            Contact Us
          </a>{" "}
          page for details.
        </p>
      </div>

    </LegalLayout>
  );
}
