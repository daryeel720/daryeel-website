import type { Metadata } from "next";
import ProgramLayout from "@/components/ProgramLayout";

export const metadata: Metadata = { title: "Youth Programs" };

export default function YouthPage() {
  return (
    <ProgramLayout
      eyebrow="Programs & Services"
      title="Youth Programs"
      intro="Support and referrals for young people in our community, including connections to mental health resources."
      placeholder
      sections={[
        {
          heading: "What we offer",
          paragraphs: [
            "Daryeel supports young people in our community through referrals and connections to services, including mental health referrals. Full program details for our Youth Programs are being finalized — contact us directly to learn about current offerings and how to get involved.",
          ],
        },
      ]}
    />
  );
}
