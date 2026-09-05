import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="September 2026">
      <p>
        Daryeel Community &amp; Senior Centre (&ldquo;Daryeel,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is
        committed to protecting the privacy of the individuals we serve,
        including clients, members, donors, volunteers, and visitors to
        our website. This policy explains what information we collect,
        how we use it, and the choices you have.
      </p>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Information we collect
        </h2>
        <p className="mt-2">
          Depending on how you interact with Daryeel, we may collect:
        </p>
        <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc marker:text-forest">
          <li>
            Contact information such as your name, phone number, mailing
            address, and email address.
          </li>
          <li>
            Program intake information relevant to the services you
            request, such as household details, immigration or
            settlement status, and language preference.
          </li>
          <li>
            Membership information provided when you apply to become a
            member.
          </li>
          <li>
            Donation information, including payment details processed
            through our donation platform, and the amount and date of
            your gift for tax receipt purposes.
          </li>
          <li>
            Information you submit through our contact form, such as
            your name, email address, and message.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          How we use your information
        </h2>
        <p className="mt-2">We use the information we collect to:</p>
        <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc marker:text-forest">
          <li>
            Deliver our programs and services, including Housing,
            Seniors, Settlement, Youth, Newcomer Community, and
            Employment services.
          </li>
          <li>Process membership applications and donations.</li>
          <li>
            Respond to questions submitted through our contact form or
            by phone and email.
          </li>
          <li>
            Communicate program updates, events, and news to clients,
            members, and donors who have asked to receive them.
          </li>
          <li>
            Meet reporting requirements to our funders, where required,
            using de-identified or aggregate information wherever
            possible.
          </li>
        </ul>
        <p className="mt-3">
          We do not sell personal information, and we do not share it
          with third parties for their own marketing purposes.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Confidentiality of client information
        </h2>
        <p className="mt-2">
          Information shared with our staff during intake, case
          management, or counselling is kept confidential and is only
          shared with your consent, except where disclosure is required
          by law (for example, where there is a risk of serious harm to
          you or another person, as required under Ontario law).
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          How we protect your information
        </h2>
        <p className="mt-2">
          We take reasonable administrative and technical steps to
          protect personal information against loss, misuse, and
          unauthorized access. Donation payments are processed by a
          third-party payment provider and are not stored on our
          servers.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Your choices
        </h2>
        <p className="mt-2">
          You may ask to see the personal information we hold about you,
          request a correction, or ask us to stop sending you
          communications at any time by contacting us using the details
          below.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Changes to this policy
        </h2>
        <p className="mt-2">
          We may update this policy from time to time. The date at the
          top of this page reflects the most recent revision.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Contact us about privacy
        </h2>
        <p className="mt-2">
          Questions or requests about this policy can be directed to our
          office. See our{" "}
          <a href="/contact" className="text-navy underline">
            Contact Us
          </a>{" "}
          page for details.
        </p>
      </div>

    </LegalLayout>
  );
}
