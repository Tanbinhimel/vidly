import http from "./httpService";
import config from "../config.json";

const { apiEndPoint } = config;
const movieApiEndPoint = apiEndPoint + "/movies";

function movieUrl(id) {
  return `${movieApiEndPoint}/${id}`;
}

export function getMovies() {
  return http.get(movieApiEndPoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  const body = { ...movie };
  delete body._id;

  if (!movie._id) {
    return http.post(movieApiEndPoint, body);
  } else {
    return http.put(movieUrl(movie._id), body);
  }
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
