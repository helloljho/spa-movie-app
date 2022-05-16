import axios from "axios";
import { writable, get } from "svelte/store";
import { unionBy } from "lodash";

export const moives = writable([]);
export const loading = writable(false);
export const theMovie = writable({});
export const message = writable("Search for the movie title!");

export async function searchMovies(payload) {
  if (get(loading)) return;
  loading.set(true);

  let total = 0;
  try {
    const res = await fetchMovie({ ...payload, page: 1 });
    const { Search, totalResults } = res.data;
    total = totalResults;
    moives.set(Search);
  } catch (msg) {
    moives.set([]);
    message.set(msg);
    loading.set(false);
    return;
  }

  const pageLength = Math.ceil(total / 10);

  if (pageLength > 1) {
    for (let page = 2; page <= pageLength; page += 1) {
      if (page > payload.number / 10) break;
      const res = fetchMovie(...payload, page);
      const { Search } = res.data;
      moives.update(($movies) => unionBy($movies, Search, "imdbID"));
    }
  }
  loading.set(false);
  message.set("");
}

export async function searchMovieWithId(id) {
  if (get(loading)) return;
  loading.set(true);

  const res = await fetchMovie({ id });

  theMovie.set(res.data);
  console.log(res);

  loading.set(false);
  message.set("");
}

function fetchMovie(payload) {
  const { title, type, year, page, id } = payload;

  const url = id
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`;

  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
      if (res.data.Error) {
        reject(res.data.Error);
      }
      resolve(res);
    } catch (error) {
      console.log(error.response.status);
      reject(error.message);
    }
  });
}
