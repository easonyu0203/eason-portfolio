<script lang="ts">
  import selfy from "$lib/images/selfy.png";
  import Icon from "@iconify/svelte";
</script>

<div
  class=" flex flex-col w-full items-center justify-start xl:flex-row xl:items-center xl:justify-around"
>
  <div class=" max-w-md flex">
    <div
      class=" border-primary-content opacity-50 border-r-2 flex flex-col space-y-4 px-2 justify-end"
    >
      <a
        href="https://github.com/easonyu0203"
        target="_blank"
        class="btn btn-square btn-ghost"
      >
        <Icon width="48" icon="ri:github-fill" />
      </a>
      <a
        href="https://www.linkedin.com/in/ethan0203/"
        target="_blank"
        class="btn btn-square btn-ghost"
      >
        <Icon width="48" icon="mdi:linkedin" />
      </a>
      <a
        href="https://www.instagram.com/easonyu43/"
        target="_blank"
        class="btn btn-square btn-ghost"
      >
        <Icon width="48" icon="ri:instagram-fill" />
      </a>
    </div>
    <div>
      <img src={selfy} alt="selfy" />
      <div
        class="border-primary-content flex items-center p-2 space-x-2 opacity-50 border-2 border-l-0"
      >
        <div class=" w-4 h-4 bg-secondary" />
        <div>
          Currently working on <span class=" text-primary-content font-bold"
            >Portfolio</span
          >
        </div>
      </div>
    </div>
  </div>

  <div class=" flex flex-col justify-center min-h-[calc(100vh-4rem)]">
    <h1
      class=" font-black text-\[clamp\(2rem\,6vw\,4\.2rem\)\] text-5xl text-primary-content max-w-xl brightness-150 contrast-150"
    >
      Eason is a <span class=" font-bold text-primary opacity-90"
        >Software Developer</span
      >
      specialize in
      <span class=" font-bold text-secondary opacity-90">Machine Learning</span>
      and
      <span class=" font-bold text-secondary opacity-90"
        >Web/App Developement</span
      >
    </h1>

    <div class=" text-lg mt-8">
      I make my idea come true using the tools I learned
    </div>

    <a href="/projects">
      <button
        class=" mt-8 btn btn-outline btn-primary text-lg rounded-none border-2 brightness-150 contrast-150"
        >Checkout my works!!</button
      >
    </a>
  </div>
</div>
