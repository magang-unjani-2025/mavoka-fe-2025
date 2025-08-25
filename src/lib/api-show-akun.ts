import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
API_BASE_URL = `${API_BASE_URL}/api/user/show-akun`;

export async function TampilAllPerusahaan() {
  const res = await axios.get(`${API_BASE_URL}/perusahaan`);
  return res.data;
}
