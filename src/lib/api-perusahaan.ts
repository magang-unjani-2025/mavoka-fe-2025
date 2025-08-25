import axios from "axios";
import { Company } from "../types/company";

type RawCompany = {
  id: number | string;
  nama_perusahaan?: string;
  name?: string;
  alamat?: string;
  address?: string;
  logo?: string;
  logo_url?: string;
  slug?: string;
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8000",
  timeout: 15000,
});

export async function getAllPerusahaan(): Promise<Company[]> {
  const { data } = await api.get<{ data?: RawCompany[] }>(
    "/api/user/show-akun/perusahaan"
  );

  const rows: RawCompany[] = (data as any)?.data ?? (data as any) ?? [];

  return rows.map<Company>((r) => ({
    id: r.id,
    name: r.nama_perusahaan ?? r.name ?? "Perusahaan",
    address: r.alamat ?? r.address ?? "-",
    logoUrl: r.logo_url ?? r.logo ?? "/assets/img/placeholder-logo.png",
    slug: r.slug,
  }));
}
