import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import PhotoCarousel from "@/components/PhotoCarousel";
import { programs, languages } from "@/lib/site-data";

const aboutPhotos = [
  {
    src: "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?q=80&w=900&auto=format&fit=crop",
    alt: "Community members gathered together at a group learning session",
  },
  {
    src: "https://images.unsplash.com/photo-1721309688736-db2669a282f7?q=80&w=900&auto=format&fit=crop",
    alt: "Two seniors walking together outdoors",
  },
];

export default function Home() {
  return (
    <div className="snap-y snap-proximity">
      <div className="snap-start">
        <HeroSlider />
      </div>

      {/* About preview */}
      <section className="snap-start bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div className="order-2 md:order-1">
            <PhotoCarousel photos={aboutPhotos} aspect="aspect-[4/3]" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
              About Daryeel
            </h2>
            <p className="mt-4 text-ink/70">
              Daryeel Community &amp; Senior Centre is a non-profit
              community and social services organization dedicated to
              supporting individuals, families, and communities through
              compassionate, inclusive, and culturally responsive
              services.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-forest" />
                <span className="text-ink/75">
                  Committed to building vibrant, socially integrated, and
                  united communities.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span className="text-ink/75">
                  Providing equitable and inclusive services to every
                  community member.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-maple" />
                <span className="text-ink/75">
                  Dedicated to empowering individuals through advocacy and
                  education.
                </span>
              </li>
            </ul>
            <Link
              href="/about"
              className="mt-6 inline-block rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-dark"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="snap-start mx-auto max-w-7xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
          Programs &amp; Services
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className="group flex flex-col rounded-lg border border-navy/10 p-6 transition hover:border-navy/30 hover:shadow-sm"
            >
              <h3 className="font-display text-lg font-semibold text-navy">
                {program.name}
              </h3>
              <p className="mt-2 text-base text-ink/65">
                {program.shortDescription}
              </p>
              <span className="mt-4 text-base font-bold text-forest group-hover:underline">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="snap-start bg-paper-warm">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <p className="text-base font-bold text-forest">
                Language access
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-navy">
                Services in the languages our community speaks
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-navy/20 bg-white px-4 py-2 text-sm font-medium text-navy"
                >
                  {lang}
                </span>
              ))}
              <span className="rounded-full border border-navy/20 bg-white px-4 py-2 text-sm font-medium text-navy">
                + call to request your language
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Events & News */}
      <section className="snap-start mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-base font-bold text-forest">
                  Stay Connected
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-navy">
                  Upcoming Events
                </h2>
              </div>
              <Link
                href="/events"
                className="hidden text-base font-bold text-forest hover:underline sm:inline"
              >
                See all &rarr;
              </Link>
            </div>
            <div className="mt-6 flex flex-col divide-y divide-navy/10 rounded-lg border border-navy/10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <p className="font-display text-base font-semibold text-navy">
                      [Event name to be added]
                    </p>
                    <p className="text-sm text-ink/60">
                      [Date] &middot; [Location]
                    </p>
                  </div>
                  <span className="w-fit shrink-0 rounded-full bg-paper px-3 py-1 text-xs font-medium text-ink/60">
                    Coming soon
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/events"
              className="mt-4 inline-block text-base font-bold text-forest hover:underline sm:hidden"
            >
              See all events &rarr;
            </Link>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-base font-bold text-forest">
                  Stay Connected
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-navy">
                  Latest News
                </h2>
              </div>
              <Link
                href="/news"
                className="hidden text-base font-bold text-forest hover:underline sm:inline"
              >
                See all &rarr;
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[1, 2].map((i) => (
                <div key={i} className="rounded-lg border border-navy/10 p-5">
                  <p className="text-xs font-medium text-forest">
                    [Category]
                  </p>
                  <p className="mt-2 font-display text-base font-semibold text-navy">
                    [Article title to be added]
                  </p>
                  <p className="mt-2 text-sm text-ink/60">
                    [Short summary to be added.]
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/news"
              className="mt-4 inline-block text-base font-bold text-forest hover:underline sm:hidden"
            >
              See all news &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Get involved CTA */}
      <section className="snap-start bg-blue text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Get involved with Daryeel
            </h2>
            <p className="mt-3 max-w-[50ch] text-white/80">
              Whether you want to volunteer your time, become a member of
              our centre, or support our work with a donation, there is a
              place for you here.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-end">
            <Link
              href="/volunteer"
              className="rounded-md bg-white/15 px-5 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/50 transition hover:bg-white/25"
            >
              Volunteer
            </Link>
            <Link
              href="/become-a-member"
              className="rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-blue transition hover:bg-white/90"
            >
              Become a Member
            </Link>
            <Link
              href="/donate"
              className="rounded-md bg-maple px-5 py-3 text-center text-sm font-semibold transition hover:bg-maple-dark"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
