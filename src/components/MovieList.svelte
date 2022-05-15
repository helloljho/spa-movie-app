<script>
  import { moives } from "~/store/movie";
</script>

<div class="movie-list">
  <div class="movie">
    {#each $moives as movie (movie.imdbID)}
      {movie.Title}
    {/each}
  </div>
</div>
