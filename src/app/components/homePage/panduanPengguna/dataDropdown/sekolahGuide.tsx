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

export const sekolahGuide: GuideData[] = [
  {
    title: "1. Cara mengupload data siswa",
    steps: [
      {
        id: "step-1",
        title: "Klik menu unggah data siswa",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-2",
        title: "pilih file lalu klik tombol upload",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-3",
        title: "Tunggu konfirmasi berhasil",
        images: ["/img/cara-daftar/cara-1.png"],
      }
    ],
  },
  {
    title: "2. Cara melihat dan memberikan evaluasi laporan siswa",
    steps: [
      {
        id: "step-1",
        title: "Klik menu monitoring",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-2",
        title: "Pada menu laporan mingguan siswa magang terdapat tempat untuk memasukkan evaluasi dari sekolah",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-3",
        title: "Klik simpan evaluasi jika sudah selesai",
        images: ["/img/cara-daftar/cara-1.png"],
      }
    ],
  },
];
