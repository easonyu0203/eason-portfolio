<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class=" flex flex-col space-y-16 pt-8">
  <div class="space-y-2">
    <div class=" brightness-150 contrast-150 font-semibold text-3xl">
      <span class=" text-primary mr-1">/</span>projects
    </div>
    <div>Some of my proudest projects</div>
  </div>

  <div>
    <div class=" brightness-125 contrast-125 font-semibold text-3xl">
      <span class=" text-primary mr-1">#</span>side-projects
    </div>

    <div
      class="card w-96 bg-base-100 shadow-xl border-primary-content border-opacity-50 border-[1px] rounded-none"
    >
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          Shoes!
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">Fashion</div>
          <div class="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  </div>
</div>
