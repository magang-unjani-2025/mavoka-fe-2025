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

export const siswaGuide: GuideData[] = [
  {
    title: "1. Cara mendaftar akun",
    steps: [
      {
        id: "step-1",
        title: "Buat akun dengan masuk ke landing page klik “daftar”",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-2",
        title: "Isi form pendaftaran lalu klik daftar",
        images: ["/img/cara-daftar/cara-2.png"],
      },
      {
        id: "step-3",
        title: "Lihat email OTP terkirim jika tidak terdapat pesan masuk dilahkan periksa di spam",
        images: ["/img/cara-daftar/cara-3-1.png", "/img/cara-daftar/cara-3-2.png"],
      },
      {
        id: "step-4",
        title: "Masukkan OTP lalu klik kirim",
        images: ["/img/cara-daftar/cara-4.png"],
      },
      {
        id: "step-5",
        title: "Pastikan sudah mendapatkan email pendaftaran akun berhasil",
        images: ["/img/cara-daftar/cara-5.png"],
      },
            {
        id: "step-6",
        title: "Tunggu email verifikasi akun untuk dapat login ke akun anda",
        images: ["/img/cara-daftar/cara-6.png"],
      },
    ],
  },
  {
    title: "2. Cara melihat dan melamar",
    steps: [
      {
        id: "step-1",
        title: "Klik menu pendaftaran magang",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-2",
        title: "Klik lowongan tersedia",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-3",
        title: "Cari dan pilih lowongan",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-4",
        title: "Klik lamar",
        images: ["/img/cara-daftar/cara-1.png"],
      },
            {
        id: "step-5",
        title: "pop up masukkan cv",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-6",
        title: "Upload CV lalu klik lamar",
        images: ["/img/cara-daftar/cara-1.png"],
      },
    ],
  },
  {
    title: "3. Cara melihat` status lamaran",
    steps: [
      {
        id: "step-1",
        title: "Klik menu lowongan magang pada fitur pendaftaran magang",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-2",
        title:
          "Lihat status magang",
        images: ["/img/cara-daftar/cara-1.png"],
      },
    ],
  },
  {
    title: "4. Cara mengunggah laporan harian dan mingguan",
    steps: [
      {
        id: "step-1",
        title: "Klik menu laporan magang",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-2",
        title: "Pilih salah satu card mingguan",
        images: ["/img/cara-daftar/cara-1.png"],
      },
            {
        id: "step-3",
        title: "muncul ZIP dan tombol unduh",
        images: ["/img/cara-daftar/cara-1.png"],
      },
      {
        id: "step-4",
        title: "muncul ZIP dan tombol unduh",
        images: ["/img/cara-daftar/cara-1.png"],
      },
    ],
  },
];
