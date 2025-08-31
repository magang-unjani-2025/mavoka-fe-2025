export const ROLES = ["perusahaan", "lpk", "sekolah", "siswa"] as const;
export type RoleKey = typeof ROLES[number];

export type RoleMeta = {
  title: string;
  intro: string;
  heroImg: string;
};

export const roleMeta: Record<RoleKey, RoleMeta> = {
  perusahaan: {
    title: "Panduan Perusahaan",
    intro: "Langkah-langkah menggunakan platform sebagai Perusahaan.",
    heroImg: "/img/GAMBAR-PERUSAHAAN.png",
  },
  lpk: {
    title: "Panduan Lembaga Pelatihan",
    intro: "Panduan untuk LPK.",
    heroImg: "/img/GAMBAR-PERUSAHAAN.png",
  },
  sekolah: {
    title: "Panduan Sekolah",
    intro: "Panduan untuk pihak Sekolah.",
    heroImg: "/img/GAMBAR-PERUSAHAAN.png",
  },
  siswa: {
    title: "Panduan Siswa",
    intro: "Panduan untuk Siswa/Pencari.",
    heroImg: "/img/GAMBAR-PERUSAHAAN.png",
  },
};

export function getRoleMeta(role: RoleKey): RoleMeta | undefined {
  return roleMeta[role];
}
