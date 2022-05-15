<script>
  import Router from "svelte-spa-router";
  import Header from "~/components/Header.svelte";
  import Footer from "./components/Footer.svelte";

  import routes from "~/routes";
  let name = "";
</script>

<Header />
<Router {routes} />
<Footer />
