import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
API_BASE_URL = `${API_BASE_URL}/api/lowongan`;

export async function TampilAllLowongan() {
  const res = await axios.get(`${API_BASE_URL}/all-lowongan`);
  return res.data;
}
