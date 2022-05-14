<script>
  import Router from "svelte-spa-router";
  import Header from "~/components/Header.svelte";
  import routes from "~/routes";
  let name = "";
</script>

<Header />
<Router routes="{routes}" />

<style lang="scss">
  h1 {
    color: blue;
    font-size: 18px;
  }
</style>
