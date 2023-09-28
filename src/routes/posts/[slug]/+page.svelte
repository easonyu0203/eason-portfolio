<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { PageData } from "../$types";

  export let data: PageData;
  console.log(data);
</script>

<article class="prose m-auto py-12 max-w-2xl">
  <h1>{data.info.title}</h1>
  <p class="text-gray-500">
    {data.info.date} by Eason
  </p>
  <span>Skills: </span>
  <span class="space-x-2">
    {#each data.info.tags as tag}
      <div class="badge badge-secondary">{tag}</div>
    {/each}
  </span>
  <hr class="my-8" />
  <div class="flex justify-around w-full not-prose">
    {#each data.info.links as link, index}
      <div class=" flex flex-col items-center justify-center space-y-2">
        <a href={link.link} target="_blank">
          <button class="btn btn-circle btn-outline"
            ><Icon icon="mdi:{link.icon}" width="32" /></button
          >
        </a>

        <h5>{link.title}</h5>
      </div>
      {#if index !== data.info.links.length - 1}
        <div class="divider divider-horizontal" />
      {/if}
    {/each}
  </div>

  <hr class="mt-8" />
  {@html data.content}
  <hr />
  <div class=" not-prose flex items-center justify-center">
    <a href="/projects"
      ><button class="btn btn-primary btn-lg">Checkout more project</button></a
    >
  </div>
</article>
