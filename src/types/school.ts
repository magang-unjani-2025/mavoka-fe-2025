export type Jurusan = {
  id: number;
  sekolah_id: number;
  nama_jurusan: string;
};

export type School = {
  id: number | string;
  name: string;
  address: string;
  type?: string | null;
  website?: string | null;  // konsisten pakai 'website'
  email?: string | null;
  npsn?: string | null;
  logoUrl?: string | null;  // opsional, bisa null
  slug?: string;
  jurusan?: Jurusan[];
};
