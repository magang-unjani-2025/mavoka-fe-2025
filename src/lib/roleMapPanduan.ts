// lib/roleMap.ts
import type { RoleKey, GuideData } from "@/types/panduan";

// ⬇️ sesuaikan path sesuai project-mu
import { perusahaanGuide } from "@/app/components/homePage/panduanPengguna/dataDropdown/perusahaanGuide";
import { sekolahGuide } from "@/app/components/homePage/panduanPengguna/dataDropdown/sekolahGuide";
import { siswaGuide } from "@/app/components/homePage/panduanPengguna/dataDropdown/siswaGuide";
 import { lpkGuide } from "@/app/components/homePage/panduanPengguna/dataDropdown/lpkGuide";

const cache: Partial<Record<RoleKey, GuideData[]>> = {};

export function getRoleGuides(role: RoleKey): GuideData[] {
  if (cache[role]) return cache[role]!;

  let raw: any;
  switch (role) {
    case "perusahaan":
      raw = perusahaanGuide;
      break;
    case "sekolah":
      raw = sekolahGuide;
      break;
    case "siswa":
      raw = siswaGuide;
      break;
     case "lpk":
       raw = lpkGuide;
       break;
    default:
      raw = [];
  }

  // Pastikan hasilnya array of GuideData
  const guides: GuideData[] = Array.isArray(raw)
    ? raw
    : Array.isArray(raw?.default)
    ? raw.default
    : [];

  cache[role] = guides;
  return guides;
}
