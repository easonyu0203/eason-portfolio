<script lang="ts">
  import Hero from "$lib/components/home/Hero.svelte";
  import { fade } from "svelte/transition";
</script>

<div
  transition:fade={{ duration: 200 }}
  class=" flex min-h-[100vh] max-w-[100vw] flex-col justify-start"
>
  <Hero />
</div>
