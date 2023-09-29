import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
  const res = await fetch("/posts/list.json");
  const list = (await res.json()) as {
    name: string;
    type: "side-project" | "work-project";
  }[];
  return { posts: list };
}) satisfies PageLoad;
