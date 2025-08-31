export const ROLES = ["perusahaan", "lpk", "sekolah", "siswa"] as const;
export type RoleKey = typeof ROLES[number];

export type RoleMeta = {
  title: string;
  intro: string;
  heroImg: string;
};

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

