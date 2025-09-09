export type Job = {
  id: number;
  judul_lowongan: string;
  posisi: string;
  kuota: number;
  lokasi_penempatan: string;
  deadline_lamaran: string;
  perusahaan: {
    nama_perusahaan: string;
    logo_perusahaan: string | null;
  };
};

export type Company = {
  id: number | string;
  name: string;
  address: string;
  logoUrl?: string | null;
  slug?: string;
  description?: string;
  email?: string;
  contact?: string;
  web?: string;
  totalLowongan?: number;
  jobs?: Job[];
};
