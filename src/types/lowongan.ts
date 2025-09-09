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

export type Lowongan = {
  id: number;
  perusahaan_id: number;
  judul_lowongan: string;
  deskripsi: string;
  posisi: string;
  kuota: number;
  lokasi_penempatan: string;
  persyaratan: string;
  benefit?: string | null;
  status: "buka" | "tutup" | string;
  deadline_lamaran: string;
  created_at: string;
  updated_at: string;
  perusahaan: Company;
};
