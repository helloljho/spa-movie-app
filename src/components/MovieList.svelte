<script>
  import { moives, loading, message } from "~/store/movie";
  import MovieCard from "~/components/MovieCard.svelte";
  import Loader from "~/components/Loader.svelte";
</script>

<div class="movie-list" class:no-result={!$moives.length}>
  {#if $loading}
    <Loader />
  {/if}
  <div class="message">
    {$message}
  </div>
  <div class="movies">
    {#each $moives as movie (movie.imdbID)}
      <MovieCard {movie} />
    {/each}
  </div>
</div>

<style lang="scss">
  .movie-list {
    margin-top: 30px;
    padding: 10px;
    background-color: $color--area;
    border-radius: 4px;
    text-align: center;
    &.no-result {
      padding: 70px 0;
    }
    .message {
      color: $color--primary;
      font-size: 20px;
      text-align: center;
    }
    .movies {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
