import http from "./httpService";
import config from "../config.json";

const { apiEndPoint } = config;
const genreApiEndPoint = apiEndPoint + "/genres";

export function getGenres() {
  const genres = http.get(genreApiEndPoint);
  return genres;
}
