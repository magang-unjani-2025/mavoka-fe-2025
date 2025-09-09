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
  web_sekolah?: string | null;
  email?: string | null;
  npsn?: string | null;
  logoUrl?: string | null;
  slug?: string;
  jurusan?: Jurusan[];
};
