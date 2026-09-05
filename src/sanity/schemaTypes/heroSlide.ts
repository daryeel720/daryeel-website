import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroSlide",
  title: "Homepage Banner Slide",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Small label above the title",
      type: "string",
      description: "e.g. 'Housing Services' or 'Seniors Program'",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Banner Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ctaLabel",
      title: "Button Text",
      type: "string",
      initialValue: "Learn More",
    }),
    defineField({
      name: "ctaHref",
      title: "Button Link",
      type: "string",
      description: "e.g. /programs/housing",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers show first",
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
    select: { title: "title", subtitle: "eyebrow", media: "image" },
  },
});
