<script lang="ts">
  import Hero from "$lib/components/home/Hero.svelte";
  import { fade } from "svelte/transition";
</script>

<div
  in:fade={{ duration: 200, delay: 100 }}
  out:fade={{ duration: 100 }}
  class=" flex min-h-[100vh] max-w-[100vw] flex-col justify-start"
>
  <Hero />
</div>
