import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("About Page Content")
        .child(
          S.document().schemaType("aboutPage").documentId("aboutPage")
        ),
      S.divider(),
      S.documentTypeListItem("heroSlide").title("Homepage Banner Slides"),
      S.documentTypeListItem("program").title("Programs"),
      S.documentTypeListItem("event").title("Events"),
      S.documentTypeListItem("newsPost").title("News Posts"),
      S.divider(),
      S.documentTypeListItem("boardMember").title("Board Members"),
      S.documentTypeListItem("teamMember").title("Team Members"),
    ]);
