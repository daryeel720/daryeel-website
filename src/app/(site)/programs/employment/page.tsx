import type { Metadata } from "next";
import ProgramLayout from "@/components/ProgramLayout";

export const metadata: Metadata = { title: "Employment Services" };

export default function EmploymentPage() {
  return (
    <ProgramLayout
      eyebrow="Programs & Services"
      title="Employment Related Services"
      intro="Employment services for newcomers, immigrants, and youth, delivered in partnership with Employment Ontario, the Career Foundation, COSTI, and other employment organizations."
      sections={[
        {
          heading: "What we offer",
          paragraphs: [
            "In partnership with Employment Ontario, the Career Foundation, COSTI, and other employment organizations, we provide employment related services to enhance employability and access to job preparation, including:",
          ],
          bullets: [
            "Resume building",
            "Mock interviews and interview skills",
            "Job search skills",
            "Career counselling and networking services",
          ],
        },
        {
          heading: "Job fairs and volunteering",
          paragraphs: [
            "We provide and collect information on job fairs and refer clients accordingly, and we offer volunteering opportunities so clients can gain Canadian work experience.",
          ],
        },
      ]}
    />
  );
}
