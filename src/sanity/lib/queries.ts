export const heroSlidesQuery = `*[_type == "heroSlide"] | order(order asc) {
  _id,
  eyebrow,
  title,
  description,
  image,
  ctaLabel,
  ctaHref
}`;

export const aboutPageQuery = `*[_type == "aboutPage"][0] {
  introText,
  images,
  visionImage,
  missionImage
}`;

export const programsQuery = `*[_type == "program"] | order(order asc) {
  _id,
  name,
  "slug": slug.current,
  shortDescription,
  heroImage,
  intro,
  intakeLine,
  isPlaceholder,
  sections
}`;

export const programBySlugQuery = `*[_type == "program" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  shortDescription,
  heroImage,
  intro,
  intakeLine,
  isPlaceholder,
  sections
}`;

export const eventsQuery = `*[_type == "event"] | order(date asc) {
  _id,
  title,
  date,
  location,
  description,
  image
}`;

export const newsPostsQuery = `*[_type == "newsPost"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  summary,
  image,
  publishedAt
}`;

export const newsPostBySlugQuery = `*[_type == "newsPost" && slug.current == $slug][0] {
  _id,
  title,
  category,
  summary,
  body,
  image,
  publishedAt
}`;

export const boardMembersQuery = `*[_type == "boardMember"] | order(order asc) {
  _id,
  name,
  role,
  photo
}`;

export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  photo
}`;
