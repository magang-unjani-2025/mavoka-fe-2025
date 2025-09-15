//// types/siswa.ts

//// nilai yang umum dipakai di form/backend
//export type JenisKelamin = "L" | "P";
//export type StatusVerifikasi = "sudah" | "belum";

//// field minimal yang diisi di form & template excel
//export interface SiswaInputMinimal {
//  nama_lengkap: string;
//  nisn: string;
//  kelas: string;
//  nama_jurusan: string;
//  tahun_ajaran: string;
//  email: string;
//}

//// payload lengkap sesuai rules backend (nullable di backend tetap opsional di sini)
//export interface UploadSiswaSinglePayload extends SiswaInputMinimal {
//  sekolah_id: number;

//  username?: string | null;
//  password?: string | null;
//  tanggal_lahir?: string | null;     // "YYYY-MM-DD"
//  jenis_kelamin?: JenisKelamin | "" | null;
//  alamat?: string | null;
//  kontak?: string | null;
//  status_verifikasi?: StatusVerifikasi | null;
//  tanggal_verifikasi?: string | null; // "YYYY-MM-DD"
//}

//// (opsional) bentuk respons umum dari API Laravel
//export type ApiErrorBag = Record<string, string[]>;
//export interface ApiErrorResponse {
//  message: string;
//  errors?: ApiErrorBag;
//}


// types/siswa.ts

export type JenisKelamin = "L" | "P";
export type StatusVerifikasi = "sudah" | "belum";

/** Field minimal yang kalian isi di form & template */
export interface SiswaInputMinimal {
  nama_lengkap: string;
  nisn: string;
  kelas: string;
  nama_jurusan: string;
  tahun_ajaran: string;
  email: string;
}

/** Payload lengkap untuk endpoint upload-siswa-single */
export interface UploadSiswaSinglePayload extends SiswaInputMinimal {
  sekolah_id: number;

  username?: string | null;
  password?: string | null;
  tanggal_lahir?: string | null;        // "YYYY-MM-DD"
  jenis_kelamin?: JenisKelamin | "" | null;
  alamat?: string | null;
  kontak?: string | null;
  status_verifikasi?: StatusVerifikasi | null;
  tanggal_verifikasi?: string | null;   // "YYYY-MM-DD"
}

/** (opsional) bentuk error Laravel */
export type ApiErrorBag = Record<string, string[]>;
export interface ApiErrorResponse {
  message?: string;
  errors?: ApiErrorBag;
}
