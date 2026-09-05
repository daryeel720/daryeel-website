import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Client Policy" };

export default function ClientPolicyPage() {
  return (
    <LegalLayout title="Client Policy" updated="September 2026">
      <p>
        This Client Policy outlines what clients of Daryeel Community
        &amp; Senior Centre can expect from our staff and programs, and
        the responsibilities we ask clients to uphold in return. It
        applies to everyone accessing Housing, Seniors, Settlement,
        Youth, Newcomer Community, or Employment services.
      </p>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Our commitment to clients
        </h2>
        <p className="mt-2">Daryeel is committed to providing services that are:</p>
        <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc marker:text-forest">
          <li>
            <strong className="text-ink">Free and accessible</strong> —
            our core services are provided at no cost, regardless of
            immigration status, income, or ability to pay.
          </li>
          <li>
            <strong className="text-ink">Culturally responsive</strong>{" "}
            — delivered by staff who reflect the languages and
            communities we serve, currently including English and
            Somali.
          </li>
          <li>
            <strong className="text-ink">Non-discriminatory</strong> —
            open to all, without discrimination based on race, ethnicity,
            religion, gender, sexual orientation, disability, age, or
            immigration status.
          </li>
          <li>
            <strong className="text-ink">Respectful and confidential</strong>{" "}
            — delivered with dignity, and with your information kept
            confidential as described in our{" "}
            <a href="/privacy-policy" className="text-navy underline">
              Privacy Policy
            </a>
            .
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Client rights
        </h2>
        <p className="mt-2">As a client of Daryeel, you have the right to:</p>
        <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc marker:text-forest">
          <li>Be treated with respect, dignity, and fairness.</li>
          <li>
            Receive services in a language you are comfortable with,
            wherever possible.
          </li>
          <li>
            Understand what information is being collected about you and
            why.
          </li>
          <li>Decline a service or withdraw consent at any time.</li>
          <li>Raise a concern or complaint without fear of losing access to services.</li>
        </ul>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Client responsibilities
        </h2>
        <p className="mt-2">To help us serve you and other clients well, we ask that you:</p>
        <ul className="mt-3 flex flex-col gap-2 pl-5 list-disc marker:text-forest">
          <li>
            Provide accurate information during intake and case
            management.
          </li>
          <li>
            Treat Daryeel staff, volunteers, and other clients with
            respect.
          </li>
          <li>
            Attend scheduled appointments or notify us in advance if you
            are unable to.
          </li>
          <li>
            Let us know about any changes to your contact information or
            circumstances that affect your services.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Confidentiality
        </h2>
        <p className="mt-2">
          Information you share with our staff during intake, case
          management, or counselling is kept confidential and is only
          shared with your consent, except where disclosure is required
          by law.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Feedback and complaints
        </h2>
        <p className="mt-2">
          If you are not satisfied with a service you received, or wish
          to share feedback, please contact our office directly. We take
          client feedback seriously and use it to improve our programs.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Contact us
        </h2>
        <p className="mt-2">
          Questions about this policy, or to share feedback, can be
          directed to our office. See our{" "}
          <a href="/contact" className="text-navy underline">
            Contact Us
          </a>{" "}
          page for details.
        </p>
      </div>

    </LegalLayout>
  );
}
