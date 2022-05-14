<script>
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";

  let title = "Header";
</script>

<header>
  <a use:link use:active="{'/'}" href="/">Home</a>
  <a use:link use:active="{'/about'}" href="/about">About</a>
  <h1>{title}</h1>
</header>

<style lang="scss">
  h1 {
    color: orange;
  }

  header :global(a.active) {
    color: red;
  }
</style>
