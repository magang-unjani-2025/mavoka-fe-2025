//import type {} from "@/app/components/upload-lowongan-pelatihan/TableDraftLowongan";

//export const dummyLowongan = [
//  {
//    id: 1,
//    posisi: "Frontend Developer",
//    deskripsi: "Membangun UI aplikasi dengan React & Tailwind",
//    kuota: 2,
//    capaian: "Menguasai React, Next.js",
//    status: "Aktif" as const,
//  },
//  {
//    id: 2,
//    posisi: "Backend Developer",
//    deskripsi: "Membangun API dengan Laravel & PostgreSQL",
//    kuota: 3,
//    capaian: "Autentikasi JWT, REST API",
//    status: "Tidak" as const,
//  },
//  {
//    id: 3,
//    posisi: "UI/UX Designer",
//    deskripsi: "Membuat wireframe dan prototype aplikasi",
//    kuota: 2,
//    capaian: "Figma, Design Thinking",
//    status: "Aktif" as const,
//  },
//  {
//    id: 4,
//    posisi: "Mobile Developer",
//    deskripsi: "Membangun aplikasi mobile dengan Flutter",
//    kuota: 4,
//    capaian: "Deploy ke Play Store",
//    status: "Aktif" as const,
//  },
//  {
//    id: 5,
//    posisi: "Data Analyst",
//    deskripsi: "Analisis data bisnis menggunakan Python",
//    kuota: 2,
//    capaian: "Dashboard interaktif dengan Power BI",
//    status: "Tidak" as const,
//  },
//  {
//    id: 6,
//    posisi: "DevOps Engineer",
//    deskripsi: "Setup CI/CD pipeline untuk deployment otomatis",
//    kuota: 1,
//    capaian: "Docker, GitHub Actions",
//    status: "Aktif" as const,
//  },
//  {
//    id: 7,
//    posisi: "QA Tester",
//    deskripsi: "Membuat test case dan menjalankan regression test",
//    kuota: 3,
//    capaian: "Dokumentasi hasil testing",
//    status: "Aktif" as const,
//  },
//  {
//    id: 8,
//    posisi: "Project Manager",
//    deskripsi: "Mengatur timeline dan komunikasi antar tim",
//    kuota: 1,
//    capaian: "Menyusun Gantt Chart",
//    status: "Tidak" as const,
//  },
//  {
//    id: 9,
//    posisi: "Cloud Engineer",
//    deskripsi: "Deploy aplikasi di AWS & GCP",
//    kuota: 2,
//    capaian: "Konfigurasi Kubernetes cluster",
//    status: "Aktif" as const,
//  },
//  {
//    id: 10,
//    posisi: "AI Engineer",
//    deskripsi: "Membangun model machine learning untuk prediksi",
//    kuota: 2,
//    capaian: "Model klasifikasi & regresi",
//    status: "Tidak" as const,
//  },
//  {
//    id: 11,
//    posisi: "Cyber Security Analyst",
//    deskripsi: "Audit keamanan sistem aplikasi",
//    kuota: 1,
//    capaian: "Laporan analisis kerentanan",
//    status: "Aktif" as const,
//  },
//  {
//    id: 12,
//    posisi: "Business Analyst",
//    deskripsi: "Menganalisis kebutuhan pengguna",
//    kuota: 2,
//    capaian: "Dokumen BRD & Use Case",
//    status: "Aktif" as const,
//  },
//  {
//    id: 13,
//    posisi: "Database Administrator",
//    deskripsi: "Mengelola database MySQL & PostgreSQL",
//    kuota: 1,
//    capaian: "Optimasi query database",
//    status: "Tidak" as const,
//  },
//  {
//    id: 14,
//    posisi: "Content Writer",
//    deskripsi: "Menulis artikel blog dan konten media sosial",
//    kuota: 3,
//    capaian: "Artikel SEO friendly",
//    status: "Aktif" as const,
//  },
//  {
//    id: 15,
//    posisi: "Network Engineer",
//    deskripsi: "Mengatur infrastruktur jaringan perusahaan",
//    kuota: 1,
//    capaian: "Topologi jaringan stabil",
//    status: "Aktif" as const,
//  },
//];

// app/data/dummyLowongan.ts
import type { Lowongan, StatusLowongan } from "@/types/lowongan";

/** Ini raw dummy dari versi lama (biar gampang difollow) */
const raw = [
  { id: 1,  posisi: "Frontend Developer", deskripsi: "Membangun UI aplikasi dengan React & Tailwind", kuota: 2,  capaian: "Menguasai React, Next.js",                 status: "Aktif"   as const },
  { id: 2,  posisi: "Backend Developer",  deskripsi: "Membangun API dengan Laravel & PostgreSQL",    kuota: 3,  capaian: "Autentikasi JWT, REST API",             status: "Tidak"   as const },
  { id: 3,  posisi: "UI/UX Designer",     deskripsi: "Membuat wireframe dan prototype aplikasi",     kuota: 2,  capaian: "Figma, Design Thinking",               status: "Aktif"   as const },
  { id: 4,  posisi: "Mobile Developer",   deskripsi: "Membangun aplikasi mobile dengan Flutter",     kuota: 4,  capaian: "Deploy ke Play Store",                 status: "Aktif"   as const },
  { id: 5,  posisi: "Data Analyst",       deskripsi: "Analisis data bisnis menggunakan Python",      kuota: 2,  capaian: "Dashboard interaktif dengan Power BI", status: "Tidak"   as const },
  { id: 6,  posisi: "DevOps Engineer",    deskripsi: "Setup CI/CD pipeline untuk deployment otomatis",kuota: 1, capaian: "Docker, GitHub Actions",               status: "Aktif"   as const },
  { id: 7,  posisi: "QA Tester",          deskripsi: "Membuat test case dan menjalankan regression test",kuota: 3,capaian: "Dokumentasi hasil testing",          status: "Aktif"   as const },
  { id: 8,  posisi: "Project Manager",    deskripsi: "Mengatur timeline dan komunikasi antar tim",   kuota: 1,  capaian: "Menyusun Gantt Chart",                 status: "Tidak"   as const },
  { id: 9,  posisi: "Cloud Engineer",     deskripsi: "Deploy aplikasi di AWS & GCP",                 kuota: 2,  capaian: "Konfigurasi Kubernetes cluster",       status: "Aktif"   as const },
  { id: 10, posisi: "AI Engineer",        deskripsi: "Membangun model machine learning untuk prediksi",kuota: 2,capaian: "Model klasifikasi & regresi",         status: "Tidak"   as const },
  { id: 11, posisi: "Cyber Security Analyst", deskripsi: "Audit keamanan sistem aplikasi",           kuota: 1,  capaian: "Laporan analisis kerentanan",          status: "Aktif"   as const },
  { id: 12, posisi: "Business Analyst",   deskripsi: "Menganalisis kebutuhan pengguna",              kuota: 2,  capaian: "Dokumen BRD & Use Case",               status: "Aktif"   as const },
  { id: 13, posisi: "Database Administrator", deskripsi: "Mengelola database MySQL & PostgreSQL",   kuota: 1,  capaian: "Optimasi query database",              status: "Tidak"   as const },
  { id: 14, posisi: "Content Writer",     deskripsi: "Menulis artikel blog dan konten media sosial", kuota: 3,  capaian: "Artikel SEO friendly",                 status: "Aktif"   as const },
  { id: 15, posisi: "Network Engineer",   deskripsi: "Mengatur infrastruktur jaringan perusahaan",   kuota: 1,  capaian: "Topologi jaringan stabil",             status: "Aktif"   as const },
];

/** Adapter → ubah ke Lowongan (tanggal/lokasi kosong, list jadi array) */
const adaptToLowongan = (r: typeof raw[number]): Lowongan => ({
  id: r.id,
  posisi: r.posisi,
  deskripsi: r.deskripsi,
  kuota: r.kuota,
  tanggalTutup: "",          // nanti isi dari form/API
  mulaiMagang: "",
  selesaiMagang: "",
  lokasi: "",
  tugas: [],                 // nanti diisi
  persyaratan: [],
  keuntungan: r.capaian ? [r.capaian] : [],
});

/** Untuk tabel DRAFT (tanpa status) */
export const dummyLowonganDraft: Lowongan[] = raw.map(adaptToLowongan);

/** Untuk tabel TERPASANG (dengan status Aktif/Nonaktif) */
export const dummyLowonganTerpasang: (Lowongan & { status: StatusLowongan })[] =
  raw.map((r) => ({
    ...adaptToLowongan(r),
    status: r.status === "Aktif" ? "Aktif" : "Nonaktif",
  }));
