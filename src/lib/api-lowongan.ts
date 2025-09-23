import axios from "axios";
import { mapApiLowonganToClient, Lowongan } from "@/types/lowongan";

const API_BASE_URL =
  `${process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000"}/api/lowongan`;

export async function TampilAllLowongan() {
  const res = await axios.get(`${API_BASE_URL}/all-lowongan`);
  const payload = res.data;
  // Backend sekarang bisa kirim {data: [...]} atau langsung array lama
  const list = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.data)
      ? payload.data
      : [];
  return list;
}

export async function getLowonganPerusahaan(): Promise<Lowongan[]> {
  const token = localStorage.getItem("access_token_perusahaan");
  const res = await axios.get(`${API_BASE_URL}/lowongan-perusahaan`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  // mapping supaya frontend dapat versi rapih
  return res.data.map((item: any) => mapApiLowonganToClient(item));
}