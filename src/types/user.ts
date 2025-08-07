export interface RegisterSekolah {
  username: string;
  email: string;
  password: string;
  nama_sekolah: string;
  npsn: string;
  web_sekolah: string;
}

export interface RegisterSiswa {
  username: string;
  email: string;
  password: string;
  nisn: string;
  nama_sekolah: string;
}

export interface RegisterPerusahaan {
  username: string;
  email: string;
  password: string;
  nama_perusahaan: string;
  bidang_usaha: string;
  web_perusahaan: string;
}

export interface RegisterLembaga {
  username: string;
  email: string;
  password: string;
  nama_lembaga: string;
  bidang_pelatihan: string;
  web_lembaga: string;
}

export interface Login {
  username: string;
  password: string;
  role: string;
}
