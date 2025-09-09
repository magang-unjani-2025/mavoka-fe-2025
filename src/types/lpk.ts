export type Lpk = {
  id: number | string;
  name: string;              // nama_lembaga
  address: string;           // alamat
  web_lembaga?: string | null;   // web_lembaga
  bidang_pelatihan?: string | null;   // bidang_pelatihan
  deskripsi_lembaga?: string | null;   // deskripsi_lembaga
  logoUrl?: string | null;   // logo_lembaga / logo_url
  coverUrl?: string | null;  // cover_url (kalau ada)
  slug?: string;
  email?: string;
};

// (opsional) tipe mentah dari API
export type LpkRaw = {
  id: number | string;
  nama_lembaga?: string;
  alamat?: string;
  web_lembaga?: string | null;
  bidang_pelatihan?: string | null;
  deskripsi_lembaga?: string | null; 
  logo_lembaga?: string | null;
  logo_url?: string | null;
  cover_url?: string | null;
  slug?: string;
  email?: string;
};
