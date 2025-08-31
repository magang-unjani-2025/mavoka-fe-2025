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

export const lpkGuide: GuideData[] = [
  {
    title: "1. Cara mengupload pelatihan",
    steps: [
      {
        id: "step-1",
        title: "Klik menu upload pelatihan",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-2",
        title: "Klik simbol plus untuk menambahkan pelatihan",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-3",
        title: "Silahkan isi form kebutuhan untuk pelatihan",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-4",
        title: "Klik simpan jika ingin memasukkan dalam draft",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-5",
        title: "Klik terbitkan jika ingin langsung menerbitkan pelatihan",
        images: ["/img/cara-daftar/cara-1.png"],
      },
    ],
  },
  {
    title: "2. .............",
    steps: [
    //  {
    //    id: "step-1",
    //    title: "Klik menu lamaran",
    //    image: "/img/cara-daftar/cara-1.png",
    //  },
    //  {
    //    id: "step-2",
    //    title: "Pilih filter lowongan lalu klik lihat daftar pelamar",
    //    image: "/img/cara-daftar/cara-1.png",
    //  },
    //  {
    //    id: "step-3",
    //    title: "Klik terima jika diterima",
    //    image: "/img/cara-daftar/cara-1.png",
    //  },
    //  {
    //    id: "step-4",
    //    title: "Klik tolak jika siswa ditolak",
    //    image: "/img/cara-daftar/cara-1.png",
    //  },
    ],
  },
];
