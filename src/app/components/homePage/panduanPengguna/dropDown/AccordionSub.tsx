//"use client";

//import { useEffect, useState } from "react";
//import {
//  ChevronDown,
//  ChevronUp,
//  ChevronLeft,
//  ChevronRight,
//} from "lucide-react";
//import { Step } from "@/types/panduan";
//import StepDisplay from "./StepDisplay";

//interface Props {
//  steps: Step[];
//  activeStepId: string | null;
//  onSelectStep: (id: string | null) => void; // boleh null
//}

//export default function AccordionSub({
//  steps,
//  activeStepId,
//  onSelectStep,
//}: Props) {
//  const [openId, setOpenId] = useState<string | null>(null);

//  // 🔐 Sinkronkan ke parent SETELAH render, bukan saat render/handler berjalan
//  useEffect(() => {
//    onSelectStep(openId ?? null);
//    // eslint-disable-next-line react-hooks/exhaustive-deps
//  }, [openId]);

//  const toggle = (id: string) => {
//    setOpenId((prev) => (prev === id ? null : id)); // klik ulang → tutup
//  };

//  return (
//    <div className="space-y-2">
//      {steps.map((step) => {
//        const isActive = openId === step.id;
//        return (
//          <div key={step.id}>
//            <button
//              onClick={() => toggle(step.id)}
//              aria-expanded={isActive}
//              className="
//    group w-full px-4 py-3 text-left
//    bg-white flex items-start justify-between
//    border border-gray-200 hover:bg-gray-50
//    rounded-none
//  "
//            >
//              {/* TEKS */}
//              <span
//                className="
//      flex-1 text-sm text-[#111827]
//      mobile:whitespace-normal mobile:break-words mobile:leading-snug
//      tablet:whitespace-normal tablet:break-words tablet:leading-snug
//      desktop:whitespace-normal desktop:break-words desktop:leading-snug
//    "
//              >
//                • {step.title}
//              </span>

//              {/* IKON mobile/tablet */}
//              <span className="desktop:hidden ml-3 shrink-0 self-start">
//                {isActive ? (
//                  <ChevronUp className="w-4 h-4 text-[#1F63AE]" />
//                ) : (
//                  <ChevronDown className="w-4 h-4 text-gray-500" />
//                )}
//              </span>

//              {/* IKON desktop */}
//              <span className="hidden desktop:block ml-3 shrink-0 self-start">
//                {isActive ? (
//                  <ChevronLeft className="w-4 h-4 text-[#1F63AE]" />
//                ) : (
//                  <ChevronRight className="w-4 h-4 text-gray-500" />
//                )}
//              </span>
//            </button>

//            {/* MOBILE/TABLET: tampilkan konten di bawah item yang aktif */}
//            {isActive && (
//              <div className="desktop:hidden mt-2">
//                <StepDisplay activeId={openId} stepList={steps} />
//              </div>
//            )}
//          </div>
//        );
//      })}
//    </div>
//  );
//}

"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { StepDisplay } from "./StepDisplay";
import type { RoleKey, Step } from "@/types/panduan";

type Props = {
  role: RoleKey;
  steps?: Step[];
  mode?: "inline" | "side";                // tetap ada untuk kompatibilitas
  variant?: "accordion" | "expanded";      // NEW
  children?: React.ReactNode;
};

export function AccordionSub({
  role,
  steps = [],
  mode = "inline",
  variant = "accordion",
  children,
}: Props) {
  // ======= VARIAN EXPANDED: SEMUA STEP TERBUKA =======
  if (variant === "expanded") {
    return (
      <div className="space-y-3">
        {steps.map((s, idx) => (
          <div key={s.id} className="rounded-lg border border-black/10 bg-white">
            <div className="px-4 py-3 text-sm font-medium">
              {idx + 1}. {s.title}
            </div>

            {s.description && (
              <div className="px-4 pb-2 text-sm leading-relaxed text-black/80">
                {s.description}
              </div>
            )}

            <div className="rounded-b-lg bg-[#F3F4F6] p-4">
              {children ?? (
                <StepDisplay role={role} imageSrc={s.images?.[0]} />
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // ======= VARIAN DEFAULT: DROPDOWN (jika masih dibutuhkan di tempat lain) =======
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId(prev => (prev === id ? null : id));

  return (
    <div className="divide-y divide-black/10 rounded-xl border border-black/10 bg-white">
      {steps.map((s, idx) => {
        const isOpen = openId === s.id;
        return (
          <div key={s.id} className="p-4">
            <button
              type="button"
              onClick={() => toggle(s.id)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="font-medium">
                {idx + 1}. {s.title}
              </span>
              {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>

            {isOpen && (
              <div className="mt-3 space-y-3">
                {s.description && (
                  <p className="text-sm leading-relaxed text-black/80">
                    {s.description}
                  </p>
                )}
                <div className="rounded-xl bg-[#F3F4F6] p-4">
                  {children ?? <StepDisplay role={role} imageSrc={s.images?.[0]} />}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
