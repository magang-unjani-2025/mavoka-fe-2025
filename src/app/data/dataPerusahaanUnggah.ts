export interface LowonganPerusahaan {
  id: number;
  posisi: string;
  deskripsi: string;
  kuota: number;
  capaian: string;
  status: "Aktif" | "Tidak";
}

export const dataPerusahaanUnggah: LowonganPerusahaan[] = [
  {
    id: 1,
    posisi: "Frontend Developer",
    deskripsi: "Membangun UI aplikasi berbasis React dan Tailwind",
    kuota: 2,
    capaian: "Menguasai React, Next.js, dan Tailwind CSS",
    status: "Aktif",
  },
  {
    id: 2,
    posisi: "Backend Developer",
    deskripsi: "Membangun API dengan Laravel dan PostgreSQL",
    kuota: 3,
    capaian: "Mampu mengembangkan REST API dan autentikasi JWT",
    status: "Tidak",
  },
  {
    id: 3,
    posisi: "UI/UX Designer",
    deskripsi: "Merancang wireframe, prototype, dan flow aplikasi",
    kuota: 2,
    capaian: "Menguasai Figma dan prinsip desain",
    status: "Aktif",
  },
  {
    id: 4,
    posisi: "Mobile Developer",
    deskripsi: "Membuat aplikasi Android/iOS dengan Flutter",
    kuota: 4,
    capaian: "Deploy aplikasi ke Play Store",
    status: "Aktif",
  },
  {
    id: 5,
    posisi: "Data Analyst",
    deskripsi: "Analisis data bisnis dengan Python dan Power BI",
    kuota: 2,
    capaian: "Mampu membuat dashboard interaktif",
    status: "Tidak",
  },
  {
    id: 6,
    posisi: "DevOps Engineer",
    deskripsi: "Membangun pipeline CI/CD dan manajemen server",
    kuota: 1,
    capaian: "Menguasai Docker, Kubernetes",
    status: "Aktif",
  },
  {
    id: 7,
    posisi: "QA Tester",
    deskripsi: "Membuat test case dan regression test",
    kuota: 3,
    capaian: "Menguasai tools testing otomatis",
    status: "Aktif",
  },
  {
    id: 8,
    posisi: "Project Manager",
    deskripsi: "Mengatur timeline dan komunikasi antar tim",
    kuota: 1,
    capaian: "Mampu menyusun Gantt Chart",
    status: "Tidak",
  },
  {
    id: 9,
    posisi: "Cloud Engineer",
    deskripsi: "Deploy aplikasi ke AWS dan GCP",
    kuota: 2,
    capaian: "Menguasai konfigurasi Kubernetes cluster",
    status: "Aktif",
  },
  {
    id: 10,
    posisi: "AI Engineer",
    deskripsi: "Membangun model Machine Learning untuk prediksi",
    kuota: 2,
    capaian: "Mampu membuat model klasifikasi sederhana",
    status: "Tidak",
  },
  {
    id: 11,
    posisi: "Cyber Security Analyst",
    deskripsi: "Melakukan audit keamanan sistem aplikasi",
    kuota: 1,
    capaian: "Menguasai penetration testing",
    status: "Aktif",
  },
  {
    id: 12,
    posisi: "Business Analyst",
    deskripsi: "Mengumpulkan kebutuhan pengguna dan bisnis",
    kuota: 2,
    capaian: "Mampu membuat dokumen BRD",
    status: "Aktif",
  },
  {
    id: 13,
    posisi: "Database Administrator",
    deskripsi: "Mengelola database MySQL & PostgreSQL",
    kuota: 1,
    capaian: "Optimasi query dan indexing",
    status: "Tidak",
  },
  {
    id: 14,
    posisi: "Content Writer",
    deskripsi: "Menulis artikel blog dan konten SEO",
    kuota: 3,
    capaian: "Mampu menulis artikel SEO friendly",
    status: "Aktif",
  },
  {
    id: 15,
    posisi: "Network Engineer",
    deskripsi: "Mengatur infrastruktur jaringan perusahaan",
    kuota: 1,
    capaian: "Mampu merancang topologi jaringan stabil",
    status: "Aktif",
  },
];
