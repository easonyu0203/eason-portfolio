<script lang="ts">
  import NavBar from "$lib/components/shared/NavBar.svelte";
  import "../app.css";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Noto+Sans+TC:wght@100;200;300;400&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div data-theme="dark" class=" container m-auto my-2">
  <NavBar />
  <slot />
</div>

<style>
  :root {
    font-family: "Inconsolata", monospace;
    --font-mono: "Inconsolata", monospace;
    --font-sans: "Noto Sans TC", sans-serif;
  }
</style>
