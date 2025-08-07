import axios from "axios";
const BASE_URL = "http://localhost:8000/api/user/show-akun";

export async function TampilAllPerusahaan() {
  const res = await axios.get(`${BASE_URL}/perusahaan`);
  return res.data;
}