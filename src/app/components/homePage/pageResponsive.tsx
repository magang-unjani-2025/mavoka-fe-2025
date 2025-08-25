"use client";

import { useEffect, useState } from "react";

/** Konfigurasi jumlah item per halaman per breakpoint */
export type PerPageConfig = {
  mobile: number;  // < 744px
  tablet: number;  // 744–1023.98px
  desktop: number; // ≥ 1024px
};

/** Preset global untuk halaman-halaman list */
export const PER_PAGE: Record<"perusahaan" | "lpk" | "sekolah", PerPageConfig> = {
  perusahaan: { desktop: 12, tablet: 6, mobile: 6 }, // 3x4, 2x3, 1x6
  lpk:        { desktop: 12, tablet: 6, mobile: 6 }, // 3x4, 2x3, 1x6
  sekolah:    { desktop:  8, tablet: 6, mobile: 6 }, // 2x4, 2x3, 1x6
};

export function useResponsivePerPage(config: PerPageConfig) {
  const [perPage, setPerPage] = useState<number>(config.desktop);

  useEffect(() => {
    const mqTablet  = window.matchMedia("(min-width: 744px) and (max-width: 1023.98px)");
    const mqDesktop = window.matchMedia("(min-width: 1024px)");

    const compute = () => {
      if (mqDesktop.matches) setPerPage(config.desktop);
      else if (mqTablet.matches) setPerPage(config.tablet);
      else setPerPage(config.mobile);
    };

    compute();
    mqTablet.addEventListener("change", compute);
    mqDesktop.addEventListener("change", compute);
    return () => {
      mqTablet.removeEventListener("change", compute);
      mqDesktop.removeEventListener("change", compute);
    };
  }, [config.desktop, config.tablet, config.mobile]);

  return perPage;
}
