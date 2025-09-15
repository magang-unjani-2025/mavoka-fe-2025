import axios from "axios";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000"}/api/user/show-akun`;

export async function TampilAlllpk() {
  const res = await axios.get(`${API_BASE_URL}/lpk`);
  return res.data; // langsung return hasil dari backend
}
