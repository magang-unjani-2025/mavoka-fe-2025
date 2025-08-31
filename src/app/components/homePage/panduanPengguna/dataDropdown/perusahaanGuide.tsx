export type Step = {
  id: string;
  title: string;
  images: string[];
  description?: string;
};

export type GuideData = {
  title: string;
  steps: Step[];
};

export const perusahaanGuide: GuideData[] = [
  {
    title: "1. Cara memposting lowongan magang",
    steps: [
      {
        id: "step-1",
        title: "Klik menu posting lowongan magang",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-2",
        title: "Klik simbol plus untuk menambahkan lowongan",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-3",
        title: "Silahkan isi form kebutuhan untuk lowongan magang",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-4",
        title: "Klik simpan jika ingin memasukkan dalam draft",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-5",
        title: "Klik terbitkan jika ingin langsung menerbitkan lowongan",
        images: ["/img/cara-daftar/cara-1.png"],
      },
    ],
  },
  {
    title: "2. Cara menentukan status lamaran",
    steps: [
      {
        id: "step-1",
        title: "Klik menu lamaran",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-2",
        title: "Pilih filter lowongan lalu klik lihat daftar pelamar",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-3",
        title: "Klik terima jika diterima",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-4",
        title: "Klik tolak jika siswa ditolak",
        images: ["/img/cara-daftar/cara-1.png"],
      },
    ],
  },
  {
    title: "3. Cara memberikan evaluasi pemagang",
    steps: [
      {
        id: "step-1",
        title: "Klik menu monitoring",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-2",
        title:
          "Pada menu laporan mingguan siswa magang terdapat tempat untuk memasukkan evaluasi dari perusahaan",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-3",
        title: "Klik simpan evaluasi jika sudah selesai",
        images: ["/img/cara-daftar/cara-1.png"],
      },
    ],
  },
  {
    title: "4. Cara menerbitkan sertifikat",
    steps: [
      {
        id: "step-1",
        title: "Klik menu monitoring",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-2",
        title: "Klik tombol terbitkan semua sertifikasi",
        images: ["/img/cara-daftar/cara-1.png"],
      },
    ],
  },
];
