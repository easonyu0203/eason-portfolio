<script lang="ts">
  import { fly } from "svelte/transition";

  export let slug: string;
  export let delay: number;

  let info = fetch(`/posts/${slug}/index.json`).then((r) =>
    r.json()
  ) as Promise<ProjectInfoData>;
</script>

{#await info}
  <div>place holder</div>
{:then data}
  <a
    transition:fly={{ x: 300, duration: 600, delay }}
    href={`/projects/${slug}`}
    class="card hover:scale-105 duration-200 bg-base-100 shadow-xl border-primary-content border-opacity-50 border-[1px] rounded-none"
  >
    <figure class=" max-h-60">
      <img src={data.thumbnail} alt="thumbnail" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {data.title}
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <p>{data.intro}</p>
      <div class="card-actions justify-end">
        {#each data.tags as tag, index}
          {#if index <= 2}
            <div class="badge badge-outline">{tag}</div>
          {/if}
        {/each}
      </div>
    </div>
  </a>
{/await}
