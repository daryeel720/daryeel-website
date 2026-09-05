import type { Metadata } from "next";
import ProgramLayout from "@/components/ProgramLayout";

export const metadata: Metadata = { title: "Housing Services" };

export default function HousingPage() {
  return (
    <ProgramLayout
      eyebrow="Programs & Services"
      title="Housing Services"
      intro="Support with housing help programs, Rent Bank applications, Rent Geared to Income applications, advocacy, and ongoing case management."
      intakeLine="416-653-5400 ext. 1306"
      sections={[
        {
          heading: "What we do",
          bullets: [
            "Eviction prevention",
            "Help with housing searches",
            "Assist with Rent Geared to Income (RGI) housing applications",
            "Crisis referral to shelters",
            "Client advocacy and ongoing case management",
            "Ontario Electricity Support Program (OESP)",
            "Referral to the Housing Stabilization Fund (HSF) in collaboration with Ontario Works",
            "Housing resources — information and referrals",
          ],
        },
        {
          heading: "Housing Help Centre",
          paragraphs: [
            "Our Housing Help Centre is one of eight centres in Toronto that provides a broad range of housing assistance and serves as an access point for applications to Toronto Community Housing. Our housing workers help low-income people find and keep stable housing.",
          ],
        },
        {
          heading: "Rent Bank Program",
          paragraphs: [
            "Our Rent Bank Program provides information and support to low income households to help stabilize their housing and prevent eviction and homelessness. Services include access to interest-free loans to pay arrears in rent, as well as mediation and counselling.",
          ],
        },
      ]}
    />
  );
}
