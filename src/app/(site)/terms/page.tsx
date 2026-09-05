import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="September 2026">
      <p>
        These Terms &amp; Conditions govern your use of the Daryeel
        Community &amp; Senior Centre website. By using this site, you
        agree to the terms below. If you do not agree, please do not use
        this website.
      </p>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Use of this website
        </h2>
        <p className="mt-2">
          This website provides information about Daryeel&rsquo;s
          programs, services, membership, volunteering, and donation
          options. You agree to use this site only for lawful purposes
          and not to interfere with its normal operation, attempt to
          gain unauthorized access to any part of it, or submit false or
          misleading information through our forms.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Program eligibility and services
        </h2>
        <p className="mt-2">
          Descriptions of our programs and services on this website are
          provided for general information. Eligibility for specific
          programs, and the availability of services, is determined by
          Daryeel staff and may depend on factors such as location,
          language, and program capacity.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Donations and payments
        </h2>
        <p className="mt-2">
          Donations made through this website are processed by a
          third-party payment provider. By making a donation, you agree
          to that provider&rsquo;s applicable terms. Daryeel is a
          non-profit organization; charitable tax receipts, where
          applicable, will be issued in accordance with Canada Revenue
          Agency requirements.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Membership and volunteering
        </h2>
        <p className="mt-2">
          Submitting a membership or volunteer inquiry through this
          website does not guarantee acceptance. Daryeel reviews
          applications and will follow up directly regarding next steps.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Content and intellectual property
        </h2>
        <p className="mt-2">
          The text, logo, and design of this website belong to Daryeel
          Community &amp; Senior Centre, except where otherwise noted.
          You may not reproduce or distribute this content for
          commercial purposes without our permission.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          External links
        </h2>
        <p className="mt-2">
          This website may link to third-party websites, such as our
          donation processor or partner organizations. We are not
          responsible for the content or privacy practices of those
          external sites.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Limitation of liability
        </h2>
        <p className="mt-2">
          This website and its content are provided &ldquo;as
          is&rdquo; without warranties of any kind. Daryeel is not
          liable for any damages arising from your use of this website,
          to the extent permitted by law.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Changes to these terms
        </h2>
        <p className="mt-2">
          We may update these terms from time to time. Continued use of
          this website after changes are posted means you accept the
          revised terms.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-navy">
          Contact us
        </h2>
        <p className="mt-2">
          Questions about these terms can be directed to our office. See
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
