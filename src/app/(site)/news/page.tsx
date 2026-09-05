import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { safeFetch } from "@/sanity/lib/client";
import { newsPostsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = { title: "News" };

type SanityNewsPost = {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  summary?: string;
};

export default async function NewsPage() {
  const posts = await safeFetch<SanityNewsPost[]>(newsPostsQuery);
  const hasPosts = posts && posts.length > 0;

  return (
    <>
      <PageHero
        eyebrow="Stay Connected"
        title="News & Updates"
        description="Stories, program updates, and announcements from Daryeel Community & Senior Centre."
      />
      <div className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        {!hasPosts && (
          <div className="rounded-lg border border-gold/40 bg-gold/10 px-5 py-4 text-sm text-ink/80">
            News posts will appear here as they are published.
          </div>
        )}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {(hasPosts ? posts! : [1, 2, 3, 4]).map((item, i) => {
            const post = typeof item === "object" ? (item as SanityNewsPost) : null;
            const content = (
              <>
                <p className="text-xs font-medium text-forest">
                  {post ? post.category || "News" : "[Category]"}
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-navy">
                  {post ? post.title : "[Article title to be added]"}
                </p>
                <p className="mt-2 text-sm text-ink/60">
                  {post
                    ? post.summary
                    : "[Short summary to be added once posts are written.]"}
                </p>
              </>
            );
            return post ? (
              <Link
                key={post._id}
                href={`/news/${post.slug}`}
                className="rounded-lg border border-navy/10 p-6 transition hover:border-navy/30 hover:shadow-sm"
              >
                {content}
              </Link>
            ) : (
              <div key={i} className="rounded-lg border border-navy/10 p-6">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
