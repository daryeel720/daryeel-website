import type { Metadata } from "next";
import ProgramLayout from "@/components/ProgramLayout";

export const metadata: Metadata = { title: "Newcomer Community Services" };

export default function NewcomersPage() {
  return (
    <ProgramLayout
      eyebrow="Programs & Services"
      title="Newcomer Community Services"
      intro="Community Connections and Welcoming Communities programs that build bridges between newcomers and host communities across Toronto."
      intakeLine="416-745-0062 ext. 279"
      sections={[
        {
          heading: "Community Connections — Welcoming Communities",
          paragraphs: [
            "Our Community Connections and Welcoming Communities programs build bridges between newcomers and host communities, creating meaningful relationships and understanding between newcomers and Canadians. We foster a welcoming environment, enhance a sense of belonging and social unity, promote civic engagement, build leadership skills, and develop cross-cultural understanding.",
            "The program brings together newcomers to Canada and established community residents for friendship, sharing, and learning. There are two ways to join our program: as a newcomer, or as a volunteer.",
          ],
        },
        {
          heading: "Community outreach and awareness",
          paragraphs: [
            "We regularly conduct outreach in the community, schools, businesses, associations, and faith groups to raise awareness of the needs of newcomers and the services we provide and that are available in the community.",
            "If you would like to invite us to a function or event, please contact our Community Engagement Worker.",
          ],
        },
      ]}
    />
  );
}
