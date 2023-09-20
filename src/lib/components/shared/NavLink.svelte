<script lang="ts">
  import { page } from "$app/stores";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  export let href: string = "";
  const underlineValue = tweened(0, {
    duration: 300,
    easing: cubicOut,
  });
  let isCurrentPage = false;

  $: if ($page.url.pathname === href) {
    console.log($page.url.pathname);
    underlineValue.set(1);
    isCurrentPage = true;
  } else {
    underlineValue.set(0);
    isCurrentPage = false;
  }
</script>

<a
  {href}
  class=" text-lg relative"
  on:mouseenter={() => !isCurrentPage && underlineValue.set(1)}
  on:mouseleave={() => !isCurrentPage && underlineValue.set(0)}
>
  <span
    class={` text-primary text-xl font-semibold ${
      isCurrentPage ? " font-extrabold" : ""
    }`}>#</span
  >
  <span class={`${isCurrentPage ? "font-bold" : ""}`}>
    <slot />
  </span>
  <div class={`absolute bottom-[4px] left-0 w-full h-1 `}>
    <div
      class=" mx-3 h-full bg-primary rounded-full"
      style="transform: scaleX({$underlineValue});"
    />
  </div>
</a>
