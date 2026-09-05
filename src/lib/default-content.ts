import type { Slide } from "@/components/HeroSlider";

export const defaultHeroSlides: Slide[] = [
  {
    eyebrow: "Daryeel Community & Senior Centre",
    title: "Building stronger, healthier communities together",
    description:
      "Supporting seniors, youth, families, and newcomers through advocacy, community support, and programs that reduce barriers across Toronto.",
    ctaLabel: "Learn About Us",
    ctaHref: "/about",
    background: "bg-forest-dark",
  },
  {
    eyebrow: "Housing Services",
    title: "Keeping families stably housed",
    description:
      "Eviction prevention, Rent Bank applications, and Rent Geared to Income support, with advocacy and case management every step of the way.",
    ctaLabel: "Explore Housing Services",
    ctaHref: "/programs/housing",
    background: "bg-navy",
  },
  {
    eyebrow: "Seniors Program",
    title: "Reducing isolation for seniors 55+",
    description:
      "Culturally responsive activities, ESL classes, food access, and home visits that help seniors stay connected to their community.",
    ctaLabel: "Explore Seniors Program",
    ctaHref: "/programs/seniors",
    background: "bg-maple-dark",
  },
  {
    eyebrow: "Settlement Services",
    title: "Support in the language you're most comfortable in",
    description:
      "Intake, interpretation, form filling, and monthly workshops for newcomers, refugees, and immigrants — in English and Somali.",
    ctaLabel: "Explore Settlement Services",
    ctaHref: "/programs/settlement",
    background: "bg-blue",
  },
  {
    eyebrow: "Get Involved",
    title: "There's a place for you at Daryeel",
    description:
      "Volunteer your time, become a member, or support our work with a donation — every bit of support strengthens our community.",
    ctaLabel: "See How to Get Involved",
    ctaHref: "/volunteer",
    background: "bg-maple",
  },
];

export const defaultAboutPhotos = [
  {
    src: "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?q=80&w=1200&auto=format&fit=crop",
    alt: "Community members gathered together at a group learning session",
  },
  {
    src: "https://images.unsplash.com/photo-1721309688736-db2669a282f7?q=80&w=1200&auto=format&fit=crop",
    alt: "Two seniors walking together outdoors",
  },
];
