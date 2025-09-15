"use client";

import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  nextNumber: number;
  onCancel: () => void;
  onCreate: () => void;
};

export default function AddWeekModal({
  open,
  nextNumber,
  onCancel,
  onCreate,
}: Props) {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (open) btnRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
      if (e.key === "Enter") onCreate();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onCancel, onCreate]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onCancel}
      />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-[520px] rounded-2xl border-2 border-[#0F67B1] bg-white p-6 shadow-xl">
          <h3 className="text-center text-gray-900">
            Tambah Minggu
          </h3>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Minggu
            </label>
            <input
              aria-label="Nama minggu"
              value={`Minggu ${nextNumber}`}
              readOnly
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="mt-6 flex items-center justify-end gap-2">
            <button
              onClick={onCancel}
              className="rounded-lg border border-[#0F67B1] bg-white px-4 py-2 text-sm font-medium text-[#0F67B1] hover:bg-gray-50"
            >
              Batal
            </button>
            <button
              ref={btnRef}
              onClick={onCreate}
              className="rounded-lg bg-[#0F67B1] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
            >
              Buat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
