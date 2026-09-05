import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page Content",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Internal title (not shown on site)",
      type: "string",
      initialValue: "About Page Content",
      readOnly: true,
    }),
    defineField({
      name: "introText",
      title: "Introduction paragraphs",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "images",
      title: "About Photos (used in the rotating photo display)",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Description (for accessibility)",
              type: "string",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(2),
      description: "Add up to 2 photos — they will fade between each other.",
    }),
  ],
  preview: {
    select: { media: "images.0" },
    prepare({ media }) {
      return { title: "About Page Content", media };
    },
  },
});
