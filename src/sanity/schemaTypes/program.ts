import { defineField, defineType } from "sanity";

export default defineType({
  name: "program",
  title: "Program",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Program Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: { source: "name" },
      description: "This becomes the web address, e.g. /programs/housing",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description (shown on cards)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "heroImage",
      title: "Program Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "intro",
      title: "Intro paragraph (shown at the top of the page)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "intakeLine",
      title: "Intake phone line (optional)",
      type: "string",
    }),
    defineField({
      name: "isPlaceholder",
      title: "Show 'more info coming soon' notice",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "section",
          fields: [
            { name: "heading", title: "Section Heading", type: "string" },
            {
              name: "paragraphs",
              title: "Paragraphs",
              type: "array",
              of: [{ type: "text", rows: 3 }],
            },
            {
              name: "bullets",
              title: "Bullet Points",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
          preview: { select: { title: "heading" } },
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Order (in Programs & Services menu)",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "shortDescription", media: "heroImage" },
  },
});
