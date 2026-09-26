import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

/** Published posts, newest first. Drafts show up in `astro dev` only. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function readingMinutes(body: string | undefined) {
  const words = (body ?? "")
    .replace(/```[\s\S]*?```/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

export function toLite(p: Post) {
  return {
    id: p.id,
    title: p.data.title,
    description: p.data.description,
    date: isoDate(p.data.pubDate),
    minutes: readingMinutes(p.body),
    tags: p.data.tags,
  };
}
