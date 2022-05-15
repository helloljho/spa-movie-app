import axios from "axios";
import { writable, get } from "svelte/store";
import { unionBy } from "lodash";

export const moives = writable([]);

export async function searchMovies(payload) {
  const { title, type, year, number } = payload;

  const res = await axios.get(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}`
  );

  const { Search, totalResults } = res.data;
  moives.set(Search);

  const pageLength = Math.ceil(totalResults / 10);

  if (pageLength > 1) {
    for (let page = 2; page <= pageLength; page += 1) {
      if (page > number / 10) break;
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
      );
      const { Search } = res.data;
      moives.update(($movies) => unionBy($movies, Search, "imdbID"));
    }
  }
  console.log(get(moives));
}
