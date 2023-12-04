<script>
  import FilledLogo from "$lib/svgs/FilledLogo.svelte";
  import Logo from "$lib/svgs/Logo.svelte";
  import NavLink from "./NavLink.svelte";
</script>

<div class="navbar sticky z-30 bg-base-100">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost normal-case text-xl space-x-2">
      <div class=" w-6 h-6">
        <FilledLogo />
      </div>
      <div class=" normal-case text-xl">Eason</div>
    </a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><NavLink href="/">Home</NavLink></li>
      <li><NavLink href="/projects">Projects</NavLink></li>
      <!-- <li><NavLink href="/achievements">Achievements</NavLink></li>
      <li><NavLink href="/stories">Stories</NavLink></li>
      <li><NavLink href="/experiences">Experiences</NavLink></li> -->
      <li />
    </ul>
  </div>
</div>
