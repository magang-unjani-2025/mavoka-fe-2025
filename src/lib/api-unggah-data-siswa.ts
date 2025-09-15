//import axios from "axios";
//import { UploadSiswaSinglePayload } from "@/types/unggah-data-siswa";

//const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/sekolah`;
//// Atau hardcode seperti file lainmu:
//// const API_BASE_URL = "http://localhost:8000/api/sekolah";

//export const uploadSiswaSingle = (data: UploadSiswaSinglePayload) => {
//  return axios.post(`${API_BASE_URL}/upload-siswa-single`, data);
//};

//// bulk via excel (.xlsx) — param `fileKey` sesuaikan jika backend tidak pakai "file"
//export const uploadSiswaBulk = (file: File, sekolah_id: number, fileKey = "file") => {
//  const fd = new FormData();
//  fd.append(fileKey, file);
//  fd.append("sekolah_id", String(sekolah_id));
//  return axios.post(`${API_BASE_URL}/upload-siswa-bulk`, fd, {
//    headers: { "Content-Type": "multipart/form-data" },
//  });
//};

// lib/api-sekolah-upload.ts
import axios from "axios";
import type { UploadSiswaSinglePayload } from "@/types/unggah-data-siswa";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/sekolah`;

/** Bulk upload via .xlsx */
export const uploadSiswaBulk = (file: File, sekolah_id: number) => {
  const fd = new FormData();

  // Kirim keduanya untuk kompatibilitas (pilih salah satu di server)
  fd.append("excel", file);
  fd.append("file", file);

  fd.append("sekolah_id", String(sekolah_id));

  // Sertakan auth kalau route diproteksi
  const token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  const headers: Record<string, string> = {
    Accept: "application/json",
    // biarkan axios yg set Content-Type multipart boundary
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  return axios.post(`${API_BASE_URL}/upload-siswa-bulk`, fd, { headers });
};

/** Single (manual) upload */
export const uploadSiswaSingle = (data: UploadSiswaSinglePayload) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  const headers: Record<string, string> = { Accept: "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;

  return axios.post(`${API_BASE_URL}/upload-siswa-single`, data, { headers });
};
