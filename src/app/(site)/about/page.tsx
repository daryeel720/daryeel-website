import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import PhotoCarousel from "@/components/PhotoCarousel";
import { values, contact, languages, programs } from "@/lib/site-data";
import { defaultAboutPhotos } from "@/lib/default-content";
import { safeFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { aboutPageQuery } from "@/sanity/lib/queries";

type SanityAboutPage = {
  images?: { asset?: unknown; alt?: string }[];
};

export const metadata: Metadata = { title: "About Us" };

export default async function AboutPage() {
  const sanityAbout = await safeFetch<SanityAboutPage>(aboutPageQuery);
  const aboutPhotos =
    sanityAbout?.images && sanityAbout.images.length > 0
      ? sanityAbout.images.map((img) => ({
          src: urlFor(img).width(1200).url(),
          alt: img.alt || "Daryeel community photo",
        }))
      : defaultAboutPhotos;

  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Welcome to Daryeel Community & Senior Centre"
        description="Daryeel Community & Senior Centre is a non-profit community and social services organization dedicated to supporting individuals, families, and communities through compassionate, inclusive, and culturally responsive services."
      />

      <div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr]">
          <div className="flex flex-col gap-6 text-lg text-ink/75">
            <PhotoCarousel photos={aboutPhotos} aspect="aspect-video" />
            <p>
              The organization works to strengthen the well-being of
              vulnerable and underserved populations, including seniors,
              youth, families, newcomers, and individuals facing social,
              economic, or settlement challenges.
            </p>
            <p>
              Daryeel provides advocacy, community support, education,
              referral services, and programs designed to reduce
              barriers, promote inclusion, and improve access to
              essential resources. By working collaboratively with
              community partners, service providers, and volunteers,
              Daryeel helps individuals navigate challenges, build
              independence, and achieve greater stability and quality of
              life.
            </p>
            <p>
              At the heart of Daryeel is a commitment to dignity,
              respect, equity, and belonging. The organization
              recognizes the unique strengths and experiences of every
              individual and strives to create a welcoming environment
              where people feel supported, valued, and empowered to
              participate fully in their communities. Through advocacy,
              collaboration, and community engagement, Daryeel Community
              &amp; Senior Centre aims to build stronger, healthier, and
              more connected communities.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl bg-paper p-6">
              <p className="font-display text-3xl font-bold text-navy">
                {programs.length}
              </p>
              <p className="text-sm text-ink/60">
                core programs &amp; services
              </p>
            </div>
            <div className="rounded-xl bg-paper p-6">
              <p className="font-display text-3xl font-bold text-navy">
                {languages.length}+
              </p>
              <p className="text-sm text-ink/60">languages spoken by staff</p>
            </div>
            <div className="rounded-xl bg-navy p-6 text-white">
              <p className="text-sm font-semibold text-white/70">
                Get in touch
              </p>
              <p className="mt-2 text-sm text-white/85">
                {contact.addressLine1}
                <br />
                {contact.addressLine2}
              </p>
              <a
                href={`tel:${contact.phone}`}
                className="mt-2 block text-sm font-semibold hover:underline"
              >
                {contact.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="animate-fade-in-up overflow-hidden rounded-xl text-white">
            <div className="relative aspect-[16/10]">
              <Image
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=900&auto=format&fit=crop"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="animate-panel-cycle-dark p-6 md:p-8">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="animate-icon-pulse h-7 w-7 md:h-10 md:w-10">
                <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.8.9.8 1.5v.1h5.4v-.1c0-.6.3-1.1.8-1.5A6 6 0 0 0 12 3Z" stroke="#ffffffdd" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2 className="animate-text-shimmer mt-2 font-display text-xl font-semibold md:mt-3 md:text-3xl">
                Vision
              </h2>
              <p className="mt-2 max-w-[80ch] text-sm text-white/85 md:mt-3 md:text-lg">
                Empowered, connected, and inclusive communities where
                everyone has the opportunity to belong, thrive, and
                contribute through equity, compassion, and collaboration.
              </p>
            </div>
          </div>

          <div
            className="animate-fade-in-up overflow-hidden rounded-xl border border-navy/10"
            style={{ animationDelay: "150ms" }}
          >
            <div className="relative aspect-[16/10]">
              <Image
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=900&auto=format&fit=crop"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="animate-panel-cycle-light p-6 md:p-8">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7 text-navy md:h-10 md:w-10">
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <h2 className="mt-2 font-display text-xl font-semibold text-navy md:mt-3 md:text-3xl">
                Mission
              </h2>
              <p className="mt-2 max-w-[80ch] text-sm text-ink/70 md:mt-3 md:text-lg">
                Daryeel Community &amp; Senior Centre is committed to
                empowering seniors, youth, families, newcomers, and other
                vulnerable communities through inclusive programs, advocacy,
                and community support. We work to remove barriers, promote
                equity, and strengthen communities by helping people achieve
                stability, independence, and a sense of belonging.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-paper-warm">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
            Our Core Values
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
            {values.map((v, i) => (
              <div key={v.name} className="flex gap-4">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white ${
                    ["bg-navy", "bg-forest", "bg-maple", "bg-blue"][i % 4]
                  }`}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-navy">
                    {v.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink/65">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
