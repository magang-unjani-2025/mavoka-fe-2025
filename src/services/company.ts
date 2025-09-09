import axios from "axios";
import { Company } from "@/types/company";

type RawCompany = {
  id?: number | string;
  nama_perusahaan?: string;
  name?: string;
  alamat?: string;
  address?: string;
  deskripsi_usaha?: string;
  logo_perusahaan?: string | null;
  logo_url?: string | null;
  slug?: string;
  email?: string;
  kontak?: string;
  web_perusahaan?: string;
};

type RawLowongan = {
  id: number;
  perusahaan_id: number;
  status: string;
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8000",
  timeout: 15000,
});

function extractCompanyPayload(res: any): RawCompany | undefined {
  if (!res) return undefined;
  const payload = res.data ?? res;
  if (!payload) return undefined;

  if (Array.isArray(payload)) return payload[0];
  if (Array.isArray(payload.data)) return payload.data[0];
  if (payload.data && typeof payload.data === "object" && !Array.isArray(payload.data)) return payload.data;
  return payload;
}

function extractArrayPayload<T>(res: any): T[] {
  if (!res) return [];
  const payload = res.data ?? res;
  if (!payload) return [];
  if (Array.isArray(payload)) return payload as T[];
  if (Array.isArray(payload.data)) return payload.data as T[];
  if (Array.isArray(payload.data?.data)) return payload.data.data as T[]; // extra nesting
  return [];
}

export async function getCompanyById(id: string | number): Promise<Company | null> {
  try {
    const res = await api.get(`/api/user/perusahaan/${id}`);
    const r = extractCompanyPayload(res) as RawCompany | undefined;
    if (!r) return null;

    const lowRes = await api.get("/api/lowongan/all-lowongan");
    const lowongan = extractArrayPayload<RawLowongan>(lowRes);

    const totalLowongan = lowongan.filter(
      (l) => String(l.perusahaan_id) === String(r.id ?? id) && l.status === "buka"
    ).length;

    const logo = r.logo_perusahaan ?? r.logo_url ?? undefined;

    const company: Company = {
      id: r.id ?? id,
      name: r.nama_perusahaan ?? r.name ?? "Perusahaan",
      address: r.alamat ?? r.address ?? "-",
      logoUrl: logo ?? null,
      slug: r.slug,
      description: r.deskripsi_usaha ?? "-",
      email: r.email ?? "-",
      contact: r.kontak ?? "-",
      web: r.web_perusahaan ?? undefined,
      totalLowongan,
    };

    return company;
  } catch (err) {
    console.error("getCompanyById error:", err);
    return null;
  }
}
