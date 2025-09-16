// data/dummyApplications.ts
import { Application } from "@/app/components/dashboard/siswa/pengajuan-magang/table";

export const dummyApplications: Application[] = [
  {
    id: "1",
    posisi: "Frontend Developer",
    perusahaan: "PT Teknologi Nusantara",
    penempatan: "Jakarta",
    cvUrl: "/dummy/cv1.pdf",
    transkripUrl: "/dummy/transkrip1.pdf",
    status: "lamar",
  },
  {
    id: "2",
    posisi: "UI/UX Designer",
    perusahaan: "Creative Studio",
    penempatan: "Bandung",
    cvUrl: "/dummy/cv2.pdf",
    transkripUrl: undefined,
    status: "wawancara",
  },
  {
    id: "3",
    posisi: "Backend Engineer",
    perusahaan: "Digital Solution",
    penempatan: "Surabaya",
    cvUrl: "/dummy/cv3.pdf",
    transkripUrl: "/dummy/transkrip3.pdf",
    status: "penawaran",
  },
  {
    id: "4",
    posisi: "Mobile Developer",
    perusahaan: "Startup App",
    penempatan: "Yogyakarta",
    cvUrl: undefined,
    transkripUrl: undefined,
    status: "diterima",
  },
  {
    id: "5",
    posisi: "Data Analyst",
    perusahaan: "Big Data Corp",
    penempatan: "Semarang",
    cvUrl: "/dummy/cv5.pdf",
    transkripUrl: "/dummy/transkrip5.pdf",
    status: "ditolak",
  },
];
