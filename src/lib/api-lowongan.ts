import axios from "axios";
const BASE_URL = "http://localhost:8000/api/lowongan";

export async function TampilAllLowongan() {
  const res = await axios.get(`${BASE_URL}/all-lowongan`);
  return res.data;
}