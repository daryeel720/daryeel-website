import type { Metadata } from "next";
import ProgramLayout from "@/components/ProgramLayout";

export const metadata: Metadata = { title: "Seniors Program" };

export default function SeniorsPage() {
  return (
    <ProgramLayout
      eyebrow="Programs & Services"
      title="Seniors Program"
      intro="Culturally responsive activities, social opportunities, and support in seniors' preferred languages for our community members aged 55 and up."
      sections={[
        {
          heading: "Reducing isolation, building connection",
          paragraphs: [
            "Across communities in Canada, there is a growing need for accessible resources and services to support the rapidly increasing senior population. Within African communities, many seniors from diverse cultural and linguistic backgrounds face barriers to accessing community support, social activities, and essential resources. Financial challenges, language barriers, and limited social opportunities can contribute to increased isolation among immigrant and ethno-cultural seniors.",
            "Social isolation can negatively affect seniors' emotional well-being, self-esteem, and sense of belonging. Our Ethno-Cultural Seniors' Program creates a welcoming environment where seniors can connect with others, participate in meaningful activities, develop new skills, and maintain their cultural traditions — while also encouraging seniors from different backgrounds to learn from one another.",
          ],
        },
        {
          heading: "Program segments for seniors 55+",
          bullets: [
            "Exercise",
            "Services navigation and ongoing case management",
            "ESL classes",
            "Access to food program",
            "Assistance completing forms",
            "Interpretation and translation services",
            "Outreach program",
            "Home visits to remove barriers to accessing services",
          ],
        },
      ]}
    />
  );
}
