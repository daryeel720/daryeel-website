import type { Metadata } from "next";
import ProgramLayout from "@/components/ProgramLayout";

export const metadata: Metadata = { title: "Settlement Services" };

export default function SettlementPage() {
  return (
    <ProgramLayout
      eyebrow="Programs & Services"
      title="Settlement Services"
      intro="Support for newcomers, refugees, and immigrants in their settlement process, helping them navigate and access resources available in the community."
      sections={[
        {
          heading: "Intake assessment and referrals",
          paragraphs: [
            "Our Needs Assessment and Referral service helps newcomers access the programs and services they need to settle in their community. We assess needs across a broad spectrum of settlement areas, help newcomers make informed settlement-related decisions, and identify their short and long-term settlement goals.",
          ],
        },
        {
          heading: "Services include",
          bullets: [
            "Information and orientation — service brochures and referrals based on your needs assessment",
            "Interpretation and translation — linguistic support to facilitate communication with service providers",
            "Form filling — assistance with work permit applications, PR applications, PR cards, Canada Child Benefit, and Ontario birth certificates",
            "Referral to community resources — guidance to local services and support networks",
          ],
        },
        {
          heading: "Monthly workshops",
          paragraphs: [
            "Based on newcomers' needs, our settlement counsellors conduct monthly workshops on the following topics:",
          ],
          bullets: [
            "Community resources, education, and employment",
            "Civic engagement",
            "Finance",
            "Health and wellness",
            "Housing",
            "The legal system",
            "Violence prevention",
            "Mental health groups",
          ],
        },
        {
          heading: "Available languages",
          paragraphs: [
            "Our staff speak English and Somali. Please call our office and request the language of your choice.",
          ],
        },
      ]}
    />
  );
}
