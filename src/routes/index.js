import Home from "~/routes/Home.svelte";
import About from "~/routes/About.svelte";
import Movie from "~/routes/Movie.svelte";

export default {
  "/": Home,
  "/about": About,
  "/movie/:id": Movie,
};
