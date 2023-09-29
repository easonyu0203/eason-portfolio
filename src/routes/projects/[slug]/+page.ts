import type { PageLoad } from "./$types";
import { marked } from "marked";

export const load: PageLoad = async ({ fetch, params: { slug } }) => {
  const [contentRes, infoRes] = await Promise.all([
    fetch(`/posts/${slug}/index.md`),
    fetch(`/posts/${slug}/index.json`),
  ]);

  const content = marked(await contentRes.text());
  const info = (await infoRes.json()) as ProjectInfoData;
  const data = { content, info };

  return data;
};
