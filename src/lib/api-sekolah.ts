import axios from "axios";
const BASE_URL = "http://localhost:8000/api/sekolah";

export async function TampilAllSekolah() {
  const res = await axios.get(`${BASE_URL}/all-sekolah`);
  return res.data;
}