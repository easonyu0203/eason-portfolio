import type { PageLoad } from "./$types";
import { marked } from "marked";

interface InfoData {
  title: string;
  links: { title: string; links: string; icon: string }[];
  date: string;
  tags: string[];
}

export const load: PageLoad = async ({ fetch, params: { slug } }) => {
  const [contentRes, infoRes] = await Promise.all([
    fetch(`/posts/${slug}/index.md`),
    fetch(`/posts/${slug}/index.json`),
  ]);

  const content = marked(await contentRes.text());
  const info = (await infoRes.json()) as InfoData;

  return { content, info };
};
