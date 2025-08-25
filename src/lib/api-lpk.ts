import axios from "axios";

const BASE_URL = "http://localhost:8000/api/user/show-akun";

export async function TampilAlllpk() {
  const res = await axios.get(`${BASE_URL}/lpk`);
  return res.data; // langsung return hasil dari backend
}
