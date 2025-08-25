export type Lpk = {
  id: number | string;
  name: string;              // nama_lembaga
  address: string;           // alamat
  website?: string | null;   // web_lembaga
  logoUrl?: string | null;   // logo_lembaga / logo_url
  coverUrl?: string | null;  // cover_url (kalau ada)
  slug?: string;             // opsional untuk detail route
};

// (opsional) tipe mentah dari API
export type LpkRaw = {
  id: number | string;
  nama_lembaga?: string;
  alamat?: string;
  web_lembaga?: string | null;
  logo_lembaga?: string | null;
  logo_url?: string | null;
  cover_url?: string | null;
  slug?: string;
};
