import axios from "axios";

const BASE_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=3d51167eb524a4a6677d5da53d0da68b&&language=pt-BR";

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});

export default API;
