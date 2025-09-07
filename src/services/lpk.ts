import api from "@/lib/axios";
import { Lpk, LpkRaw } from "@/types/lpk";

function extractLpkPayload(res: any): LpkRaw | undefined {
  if (!res) return undefined;
  const payload = res.data ?? res;
  if (!payload) return undefined;

  if (Array.isArray(payload)) return payload[0];
  if (Array.isArray(payload.data)) return payload.data[0];
  if (payload.data && typeof payload.data === "object" && !Array.isArray(payload.data)) {
    return payload.data;
  }
  return payload;
}

export async function getLpkById(id: string): Promise<Lpk | null> {
  try {
    const res = await api.get(`/api/user/lpk/${id}`);
    const r = extractLpkPayload(res) as LpkRaw | undefined;
    if (!r) return null;

    const lpk: Lpk = {
      id: r.id ?? id,
      name: r.nama_lembaga ?? "Lembaga Pelatihan",
      address: r.alamat ?? "-",
      web_lembaga: r.web_lembaga ?? null,
      email: r.email ?? "-",
      deskripsi_lembaga: r.deskripsi_lembaga ?? null,
      bidang_pelatihan: r.bidang_pelatihan ?? null,
      logoUrl: r.logo_lembaga ?? r.logo_url ?? null,
      coverUrl: r.cover_url ?? null,
      slug: r.slug,
    };

    return lpk;
  } catch (err) {
    console.error("getLpkById error:", err);
    return null;
  }
}
