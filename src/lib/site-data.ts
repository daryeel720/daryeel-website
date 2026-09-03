export type Program = {
  slug: string;
  name: string;
  shortDescription: string;
  intakeLine?: string;
  status: "full" | "partial";
};

export const programs: Program[] = [
  {
    slug: "housing",
    name: "Housing Services",
    shortDescription:
      "Eviction prevention, Rent Bank applications, RGI housing support, and ongoing case management.",
    intakeLine: "416-653-5400 ext. 1306",
    status: "full",
  },
  {
    slug: "seniors",
    name: "Seniors Program",
    shortDescription:
      "Culturally responsive programming for seniors 55+, reducing isolation and building connection.",
    status: "full",
  },
  {
    slug: "settlement",
    name: "Settlement Services",
    shortDescription:
      "Intake, interpretation, form filling, and referrals for newcomers, refugees, and immigrants.",
    status: "full",
  },
  {
    slug: "youth",
    name: "Youth Programs",
    shortDescription:
      "Support and referrals for young people in our community, including mental health referrals.",
    status: "partial",
  },
  {
    slug: "newcomers",
    name: "Newcomer Community Services",
    shortDescription:
      "Community Connections and Welcoming Communities programs that build bridges between newcomers and host communities.",
    intakeLine: "416-745-0062 ext. 279",
    status: "full",
  },
  {
    slug: "employment",
    name: "Employment Services",
    shortDescription:
      "Resume building, mock interviews, job search skills, career counselling, and networking support.",
    status: "full",
  },
];

export const mainNav = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Board of Directors", href: "/board-of-directors" },
      { label: "Our Team", href: "/team" },
    ],
  },
  {
    label: "Programs & Services",
    href: "/programs",
    children: programs.map((p) => ({
      label: p.name,
      href: `/programs/${p.slug}`,
    })),
  },
  {
    label: "Get Involved",
    href: "/volunteer",
    children: [
      { label: "Become a Member", href: "/become-a-member" },
      { label: "Donate", href: "/donate" },
      { label: "Volunteer", href: "/volunteer" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "News", href: "/news" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLinks = {
  programs: programs.map((p) => ({
    label: p.name,
    href: `/programs/${p.slug}`,
  })),
  getInvolved: [
    { label: "Become a Member", href: "/become-a-member" },
    { label: "Donate", href: "/donate" },
    { label: "Volunteer", href: "/volunteer" },
  ],
  organization: [
    { label: "About Us", href: "/about" },
    { label: "Board of Directors", href: "/board-of-directors" },
    { label: "Our Team", href: "/team" },
    { label: "Events", href: "/events" },
    { label: "News", href: "/news" },
    { label: "FAQ", href: "/faq" },
  ],
  policies: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Client Policy", href: "/client-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

// PLACEHOLDER — replace with real details before launch.
export const contact = {
  phone: "+1 437-607-0223",
  fax: "[FAX NUMBER — OPTIONAL]",
  email: "info@daryeelcentre.ca",
  addressLine1: "1987 Kipling Ave. Unit 3",
  addressLine2: "Toronto, ON  M9W 4J4",
  hours: "Monday – Friday, 9:00 AM – 5:00 PM",
  socials: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    x: "#",
  },
};

export const values = [
  {
    name: "Equity",
    text: "We work to identify and remove barriers that contribute to discrimination and exclusion, and promote equitable access to services and opportunities.",
  },
  {
    name: "Inclusion & Belonging",
    text: "We create spaces where everyone feels welcomed, valued, heard, and respected, and encourage participation from every background.",
  },
  {
    name: "Cultural Responsiveness",
    text: "We design and deliver programs that are culturally relevant, accessible, and responsive to the unique needs of different communities.",
  },
  {
    name: "Compassion & Care",
    text: "We approach our work with empathy, kindness, and understanding, creating safe spaces where people feel comfortable seeking support.",
  },
  {
    name: "Empowerment",
    text: "We support individuals to recognize their strengths, make informed decisions, and participate actively in matters that affect their lives.",
  },
  {
    name: "Accessibility",
    text: "We work to reduce physical, financial, linguistic, cultural, and technological barriers that prevent people from participating fully.",
  },
  {
    name: "Accountability",
    text: "We conduct our work with integrity, transparency, and responsible stewardship of resources, and continuously evaluate our programs against community needs.",
  },
  {
    name: "Community Engagement",
    text: "We listen to and learn from the communities we serve, engaging them in identifying priorities and shaping programs.",
  },
];

export const languages = ["English", "Somali"];
