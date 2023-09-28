<script lang="ts">
  import type { PageData } from "./$types";
  import selfy from "$lib/images/selfy.png";
  import ProjectCard from "$lib/components/projects/ProjectCard.svelte";

  export let data: PageData;
</script>

<div class=" flex flex-col space-y-16 pt-8">
  <div class="space-y-2">
    <div class=" brightness-150 contrast-150 font-semibold text-3xl">
      <span class=" text-primary mr-1">/</span>projects
    </div>
    <div>Some of my proudest projects</div>
  </div>

  <div class=" flex flex-col space-y-6">
    <div class=" brightness-125 contrast-125 font-semibold text-3xl">
      <span class=" text-primary mr-1">#</span>side-projects
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {#each data.posts as post}
        <ProjectCard slug={post.name} />
        <ProjectCard slug={post.name} />
        <ProjectCard slug={post.name} />
        <ProjectCard slug={post.name} />
        <ProjectCard slug={post.name} />
      {/each}
    </div>
  </div>
</div>
