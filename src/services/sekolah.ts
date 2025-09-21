import api from "@/lib/axios";
import { School, Jurusan } from "@/types/school";

export type SchoolRaw = {
  id?: number | string;
  nama_sekolah?: string;
  alamat?: string;
  jenis?: string | null;
  web_sekolah?: string | null;
  email?: string | null;
  npsn?: string | null;
  logo_sekolah?: string | null;
  logo_url?: string | null;
  slug?: string;
  jurusan?: { id: number; sekolah_id: number; nama_jurusan: string }[];
};

function extractSchoolPayload(res: any): SchoolRaw | undefined {
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

export async function getSchoolById(id: string | number): Promise<School | null> {
  try {
    const res = await api.get(`/api/user/sekolah/${id}`);
    const r = extractSchoolPayload(res) as SchoolRaw | undefined;
    if (!r) return null;

    const school: School = {
  id: r.id ?? id,
  name: r.nama_sekolah ?? "Sekolah",
  address: r.alamat ?? "-",
  type: r.jenis ?? null,
  website: r.web_sekolah ?? null,
  email: r.email ?? null,
  npsn: r.npsn ?? null,
  logoUrl: r.logo_sekolah ?? r.logo_url ?? null,
  slug: r.slug,
  jurusan: r.jurusan ?? [],
};

    return school;
  } catch (err) {
    console.error("getSchoolById error:", err);
    return null;
  }
}
