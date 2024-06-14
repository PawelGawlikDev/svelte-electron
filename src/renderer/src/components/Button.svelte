<script>
  export let rounded = true
</script>

<button
  class="border-[3px] border-solid p-5 bg-white outline-none {rounded ? 'rounded-3xl' : ''}"
  class:rounded
  on:click
>
  <slot />
</button>
