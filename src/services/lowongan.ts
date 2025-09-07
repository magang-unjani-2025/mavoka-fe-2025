import api from "@/lib/axios";
import { Lowongan, Company } from "@/types/lowongan";

export type LowonganRaw = {
  id?: number;
  perusahaan_id?: number;
  judul_lowongan?: string;
  deskripsi?: string;
  posisi?: string;
  kuota?: number;
  lokasi_penempatan?: string;
  persyaratan?: string;
  benefit?: string | null;
  status?: string;
  deadline_lamaran?: string;
  created_at?: string;
  updated_at?: string;
  perusahaan?: {
    id?: number;
    username?: string;
    email?: string;
    status_verifikasi?: string;
    tanggal_verifikasi?: string;
    nama_perusahaan?: string;
    bidang_usaha?: string;
    web_perusahaan?: string | null;
    deskripsi_usaha?: string | null;
    alamat?: string;
    kontak?: string | null;
    logo_perusahaan?: string | null;
    penanggung_jawab?: string | null;
    otp?: string | null;
    otp_expired_at?: string | null;
    created_at?: string;
    updated_at?: string;
  };
};

function extractLowonganPayload(res: any): LowonganRaw | undefined {
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

export async function getLowonganById(id: string | number): Promise<Lowongan | null> {
  try {
    const res = await api.get(`/api/lowongan/show-lowongan/${id}`);
    const r = extractLowonganPayload(res) as LowonganRaw | undefined;
    if (!r) return null;

    const lowongan: Lowongan = {
      id: r.id ?? 0,
      perusahaan_id: r.perusahaan_id ?? 0,
      judul_lowongan: r.judul_lowongan ?? "-",
      deskripsi: r.deskripsi ?? "-",
      posisi: r.posisi ?? "-",
      kuota: r.kuota ?? 0,
      lokasi_penempatan: r.lokasi_penempatan ?? "-",
      persyaratan: r.persyaratan ?? "-",
      benefit: r.benefit ?? null,
      status: r.status ?? "tutup",
      deadline_lamaran: r.deadline_lamaran ?? "",
      created_at: r.created_at ?? "",
      updated_at: r.updated_at ?? "",
      perusahaan: {
        id: r.perusahaan?.id ?? 0,
        username: r.perusahaan?.username ?? "",
        email: r.perusahaan?.email ?? "",
        status_verifikasi: r.perusahaan?.status_verifikasi ?? "",
        tanggal_verifikasi: r.perusahaan?.tanggal_verifikasi ?? "",
        nama_perusahaan: r.perusahaan?.nama_perusahaan ?? "-",
        bidang_usaha: r.perusahaan?.bidang_usaha ?? "-",
        web_perusahaan: r.perusahaan?.web_perusahaan ?? null,
        deskripsi_usaha: r.perusahaan?.deskripsi_usaha ?? null,
        alamat: r.perusahaan?.alamat ?? "-",
        kontak: r.perusahaan?.kontak ?? null,
        logo_perusahaan: r.perusahaan?.logo_perusahaan ?? null,
        penanggung_jawab: r.perusahaan?.penanggung_jawab ?? null,
        otp: r.perusahaan?.otp ?? null,
        otp_expired_at: r.perusahaan?.otp_expired_at ?? null,
        created_at: r.perusahaan?.created_at ?? "",
        updated_at: r.perusahaan?.updated_at ?? "",
      },
    };

    return lowongan;
  } catch (err) {
    console.error("getLowonganById error:", err);
    return null;
  }
}
