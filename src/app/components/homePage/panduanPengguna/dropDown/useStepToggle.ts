import { useState } from "react";

/**
 * Hook untuk mengelola ID step yang sedang aktif.
 * Digunakan pada AccordionSub untuk menampilkan konten step ke samping.
 */
export function useStepToggle() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return {
    activeId,
    toggle,
  };
}
