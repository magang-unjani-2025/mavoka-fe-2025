import axios from "axios";
const BASE_URL = "http://localhost:8000/api/user";

export async function verifyOtp({
  email,
  role,
  otp,
}: {
  email: string;
  role: string;
  otp: string;
}) {
  const res = await axios.post(`${BASE_URL}/verify-otp/${role}`, {
    email,
    otp,
  });
  return res.data;
}
