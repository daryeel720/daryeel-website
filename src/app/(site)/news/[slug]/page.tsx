import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import PageHero from "@/components/PageHero";
import { safeFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { newsPostBySlugQuery } from "@/sanity/lib/queries";

type NewsPost = {
  title: string;
  category?: string;
  summary?: string;
  body?: PortableTextBlock[];
  image?: Parameters<typeof urlFor>[0];
  publishedAt?: string;
};

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await safeFetch<NewsPost>(newsPostBySlugQuery, { slug });
  return { title: post?.title ?? "News" };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await safeFetch<NewsPost>(newsPostBySlugQuery, { slug });

  if (!post) notFound();

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-CA", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <>
      <PageHero
        eyebrow={post.category || "News"}
        title={post.title}
        description={publishedDate ?? undefined}
      />
      <div className="mx-auto max-w-3xl px-5 py-14 md:py-20">
        {post.image && (
          <div className="relative mb-10 aspect-video overflow-hidden rounded-xl">
            <Image
              src={urlFor(post.image).width(1200).url()}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        {post.body ? (
          <div className="prose-daryeel flex flex-col gap-4 text-lg text-ink/80">
            <PortableText value={post.body} />
          </div>
        ) : (
          post.summary && <p className="text-lg text-ink/80">{post.summary}</p>
        )}
      </div>
    </>
  );
}
