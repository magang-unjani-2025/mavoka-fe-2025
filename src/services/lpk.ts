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

    let logo = r.logo_url ?? r.logo_lembaga ?? null;
    if (logo && !/^https?:\/\//i.test(logo)) {
      const base = process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:8000';
      logo = base.replace(/\/$/, '') + '/' + logo.replace(/^\//,'');
    }

    const lpk: Lpk = {
      id: r.id ?? id,
      name: r.nama_lembaga ?? "Lembaga Pelatihan",
      address: r.alamat ?? "-",
      web_lembaga: r.web_lembaga ?? null,
      email: r.email ?? "-",
      deskripsi_lembaga: r.deskripsi_lembaga ?? null,
      bidang_pelatihan: r.bidang_pelatihan ?? null,
      logoUrl: logo,
      coverUrl: r.cover_url ?? null,
      slug: r.slug,
    };

    return lpk;
  } catch (err) {
    console.error("getLpkById error:", err);
    return null;
  }
}

// Ambil semua LPK (ringkas) dari endpoint publik /api/lpk/all
export async function getAllLpk(): Promise<Lpk[]> {
  try {
    const res = await api.get('/api/lpk/all');
    const payload = res.data ?? res;
    let arr: any[] = [];
    if (Array.isArray(payload)) arr = payload;
    else if (Array.isArray(payload.data)) arr = payload.data;
    else if (Array.isArray(payload.data?.data)) arr = payload.data.data; // kemungkinan paginated

    const base = (process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:8000').replace(/\/$/, '');
    return arr.map(item => {
      let logo = item.logo_url || item.logo_lembaga || null;
      if (logo && !/^https?:\/\//i.test(logo)) {
        logo = base + '/' + String(logo).replace(/^\//,'');
      }
      const mapped: Lpk = {
        id: item.id,
        name: item.nama_lembaga ?? 'Lembaga Pelatihan',
        address: item.alamat ?? '-',
        bidang_pelatihan: item.bidang_pelatihan ?? null,
        logoUrl: logo,
        slug: item.slug,
        web_lembaga: item.web_lembaga ?? null,
        deskripsi_lembaga: item.deskripsi_lembaga ?? null,
        email: item.email ?? undefined,
      };
      return mapped;
    });
  } catch (e) {
    console.error('[getAllLpk] error', e);
    return [];
  }
}
