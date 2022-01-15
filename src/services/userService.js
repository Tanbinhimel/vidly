import http from "./httpService";
import config from "../config.json";


const { apiEndPoint } = config;
const userApiEndPoint = apiEndPoint + "/users";

export function register(user) {
  return http.post(userApiEndPoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
