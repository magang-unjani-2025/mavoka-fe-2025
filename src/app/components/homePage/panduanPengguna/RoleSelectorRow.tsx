// app/faq/components/RoleSelectorRow.tsx
"use client";

import { Container } from "@/app/components/Container";
import { useMemo } from "react";
import { RoleDetailsBlock } from "./RoleDetailsBlock";

type RoleKey = "perusahaan" | "lpk" | "sekolah" | "siswa";

export function RoleSelectorRow({
  selectedRole,
  onSelectRole,
  title = "Panduan Pengguna",
}: {
  selectedRole: string | null;
  onSelectRole: (role: RoleKey | null) => void;
  title?: string;
}) {
  const roles = useMemo(
    () => [
      { key: "perusahaan" as RoleKey, label: "Perusahaan" },
      { key: "lpk" as RoleKey, label: "Lembaga Pelatihan" },
      { key: "sekolah" as RoleKey, label: "Sekolah" },
      { key: "siswa" as RoleKey, label: "Siswa" },
    ],
    []
  );

  const handleClick = (key: RoleKey) =>
    onSelectRole(selectedRole === key ? null : key);

  return (
    <section className="py-8">
      <Container className="max-w-content">
        <h3 className="mb-4 text-center font-semibold text-[#0F67B1]">
          {title}
        </h3>

        <div className="flex flex-col gap-3">
          {roles.map(({ key, label }) => {
            const active = selectedRole === key;

            // ── item TIDAK aktif: hanya bar putih
            if (!active) {
              return (
                <button
                  key={key}
                  onClick={() => handleClick(key)}
                  className="flex w-full items-center justify-between rounded-lg border border-[#E3E5EA] bg-white px-4 py-3 text-left text-sm font-medium shadow-none transition-colors hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-black/10"
                >
                  <span>{label}</span>
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              );
            }

            // ── item AKTIF: OUTER PUTIH yang menyambung dengan bar + isi
            return (
              <div
                key={key}
                className="rounded-lg border border-[#E3E5EA] bg-white"
              >
                {/* bar role di dalam kotak putih yang sama */}
                <button
                  onClick={() => handleClick(key)}
                  className="flex w-full items-center justify-between rounded-t-lg bg-white px-4 py-3 text-left text-sm font-medium border-b border-[#E3E5EA] focus:outline-none"
                >
                  <span>{label}</span>
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path d="M7 14l5-5 5 5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>

                {/* lapisan: abu → kartu putih isi */}
                <div className="p-3">
                  <div className="rounded-lg bg-[#EEF0F4] p-4">
                    <div className="rounded-lg border border-[#E3E5EA] bg-white">
                      <RoleDetailsBlock roleKey={key} embedded />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
