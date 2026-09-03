import PageHero from "@/components/PageHero";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero title={title} />
      <div className="mx-auto max-w-3xl px-5 py-14 md:py-20">
        <p className="text-sm text-ink/50">Last updated: {updated}</p>
        <div className="prose-legal mt-8 flex flex-col gap-6 text-ink/75">
          {children}
        </div>
      </div>
    </>
  );
}
