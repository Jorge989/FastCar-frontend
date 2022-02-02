import axios from "axios";

const api = axios.create({
  baseURL: "https://api.imgbb.com/1",
});
export default api;
