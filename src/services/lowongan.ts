import api from "@/lib/axios";
import { Lowongan, mapApiLowonganToClient } from "@/types/lowongan";

/**
 * Ambil lowongan berdasarkan ID
 */
export async function getLowonganById(
  id: string | number
): Promise<Lowongan | null> {
  try {
    const res = await api.get(`/api/lowongan/show-lowongan/${id}`);

    // response bisa berbentuk { data: {...} } atau langsung object
    const payload = res.data?.data ?? res.data ?? null;
    if (!payload) return null;

    // mapping ke versi client
    return mapApiLowonganToClient(payload);
  } catch (err) {
    console.error("getLowonganById error:", err);
    return null;
  }
}
