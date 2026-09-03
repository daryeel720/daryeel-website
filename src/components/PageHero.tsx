export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-navy/10 bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
        {eyebrow && (
          <p className="text-base font-bold text-forest">{eyebrow}</p>
        )}
        <h1 className="mt-2 max-w-[22ch] font-display text-4xl font-semibold text-navy md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-[62ch] text-lg text-ink/70">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
