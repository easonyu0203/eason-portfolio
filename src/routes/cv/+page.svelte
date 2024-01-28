<script lang="ts">
  import { fade } from "svelte/transition";
</script>

<div
  in:fade={{ duration: 200, delay: 100 }}
  out:fade={{ duration: 100 }}
  class=" flex flex-col space-y-16 py-8 pb-16"
>
  <div class="space-y-4">
    <div class=" brightness-150 contrast-150 font-semibold text-3xl">
      <span class=" text-primary mr-1">/</span>Curriculum Vitae
    </div>

    <iframe
      src="/CV.pdf"
      style="width: 100%; height: 1200px;"
      frameborder={1}
      title="Curriculum Vitae"
    >
      This browser does not support PDFs. Please download the PDF to view it:
      <a href="/CV.pdf">Download PDF</a>.
    </iframe>
  </div>
</div>
