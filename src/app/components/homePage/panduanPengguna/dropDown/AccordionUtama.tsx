"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { GuideData, RoleKey } from "@/types/panduan";
import { AccordionSub } from "./AccordionSub";

export function AccordionUtama({ data, role }: { data: GuideData[]; role: RoleKey }) {
  // ⬇️ jangan auto-open apa pun
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIdx(prev => (prev === i ? null : i));

  if (!data?.length) return null;

  return (
    <div className="flex flex-col gap-3">
      {data.map((guide, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between rounded-lg border border-[#E3E5EA] bg-white px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-black/10"
            >
              <span>{guide.title}</span>
              {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            {isOpen && (
              <div className="mt-3 rounded-lg border border-[#E3E5EA] bg-white p-4">
                {/* baru render sub+gambar saat MAIN diklik */}
                <AccordionSub role={role} steps={guide.steps} variant="expanded" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
