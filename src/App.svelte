<script>
  import Router from "svelte-spa-router";
  import Header from "~/components/Header.svelte";
  let name = "";
</script>

<main>
  <Header />
  <h1>Hello {name}!</h1>
  <div></div>

  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>

<style lang="scss">
  h1 {
    color: blue;
    font-size: 18px;
  }
</style>
