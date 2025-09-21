export type Company = {
  id: number;
  username: string;
  email: string;
  status_verifikasi: string;
  tanggal_verifikasi: string;
  nama_perusahaan: string;
  bidang_usaha: string;
  web_perusahaan?: string | null;
  deskripsi_usaha?: string | null;
  alamat: string;
  kontak?: string | null;
  logo_perusahaan?: string | null;
  penanggung_jawab?: string | null;
  otp?: string | null;
  otp_expired_at?: string | null;
  created_at: string;
  updated_at: string;
};

export type StatusLowongan = "Aktif" | "Nonaktif";

/**
 * Lowongan versi client (sudah dirapikan untuk frontend)
 */
export interface Lowongan {
  id: number;
  perusahaan_id: number;
  judul_lowongan: string;
  posisi: string;
  deskripsi: string;
  kuota: number;
  lokasi_penempatan: string;

  persyaratan: string[];  // dari backend string → diparse ke array
  keuntungan: string[];   // dari backend string → diparse ke array
  tugas: string[];        // dari backend string → diparse ke array

  mulaiMagang?: string | null;   // periode_awal
  selesaiMagang?: string | null; // periode_akhir
  deadline_lamaran: string;

  created_at: string;
  updated_at: string;
  status: StatusLowongan;

  perusahaan?: Company; // optional, tergantung endpoint include relasi atau nggak
}

/**
 * Mapper: ubah response API (raw) jadi Lowongan versi client
 */
export function mapApiLowonganToClient(apiData: any): Lowongan {
  return {
    id: apiData.id,
    perusahaan_id: apiData.perusahaan_id,
    judul_lowongan: apiData.judul_lowongan,
    posisi: apiData.posisi,
    deskripsi: apiData.deskripsi,
    kuota: apiData.kuota,
    lokasi_penempatan: apiData.lokasi_penempatan,

    persyaratan: apiData.persyaratan ? apiData.persyaratan.split("\n") : [],
    keuntungan: apiData.benefit ? apiData.benefit.split("\n") : [],
    tugas: apiData.tugas_tanggung_jawab
      ? apiData.tugas_tanggung_jawab.split("\n")
      : [],

    mulaiMagang: apiData.periode_awal,
    selesaiMagang: apiData.periode_akhir,
    deadline_lamaran: apiData.deadline_lamaran,

    created_at: apiData.created_at,
    updated_at: apiData.updated_at,
    status: apiData.status === "buka" ? "Aktif" : "Nonaktif",

    perusahaan: apiData.perusahaan,
  };
}

/**
 * Payload ringan untuk create/update dari Form
 */
export type CreateLowonganPayload = {
  perusahaan_id: number;
  judul_lowongan: string;
  posisi: string;
  deskripsi: string;
  kuota: number;
  lokasi_penempatan: string;
  deadline_lamaran: string; // YYYY-MM-DD
  mulaiMagang?: string;      // YYYY-MM-DD
  selesaiMagang?: string;    // YYYY-MM-DD
  tugas: string[];
  persyaratan: string[];
  keuntungan: string[];
};
