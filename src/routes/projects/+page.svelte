<script lang="ts">
  import type { PageData } from "./$types";
  import selfy from "$lib/images/selfy.png";
  import ProjectCard from "$lib/components/projects/ProjectCard.svelte";
  import { fade } from "svelte/transition";

  export let data: PageData;
  let sideProjects = data.posts.filter((post) => post.type === "side-project");
  let workProjects = data.posts.filter((post) => post.type === "work-project");
</script>

<div
  transition:fade={{ duration: 200 }}
  class=" flex flex-col space-y-16 py-8 pb-16"
>
  <div class="space-y-4">
    <div class=" brightness-150 contrast-150 font-semibold text-3xl">
      <span class=" text-primary mr-1">/</span>projects
    </div>
    <p>Check out some of my proudest projects!!</p>
  </div>

  <div class=" flex flex-col space-y-6">
    <div class=" brightness-125 contrast-125 font-semibold text-3xl">
      <span class=" text-primary mr-1">#</span>side-projects
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {#each sideProjects as post, index}
        <ProjectCard slug={post.name} delay={index * 300} />
      {/each}
    </div>
  </div>

  <div class=" flex flex-col space-y-6">
    <div class=" brightness-125 contrast-125 font-semibold text-3xl">
      <span class=" text-primary mr-1">#</span>work-projects
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {#each workProjects as post, index}
        <ProjectCard slug={post.name} delay={index * 300} />
      {/each}
    </div>
  </div>
</div>
