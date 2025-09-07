import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8000",
  timeout: 15000,
  withCredentials: false,
});


export default api;
