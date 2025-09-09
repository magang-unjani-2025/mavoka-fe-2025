"use client";

import * as React from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message?: string;
};

export default function ConfirmModal({
  open,
  onClose,
  onConfirm,
  message = "Apakah Anda yakin?",
}: Props) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          className="w-full max-w-md rounded-2xl border-4 border-[#0F67B1] bg-white shadow-xl"
        >
          <div className="p-8 text-center">
            <p>{message}</p>

            <div className="mt-8 flex items-center justify-center gap-5">
              <button
                onClick={onClose}
                className="flex items-center justify-center px-5 py-2 rounded-md border border-[#0F67B1] text-[#0F67B1] font-semibold transition hover:bg-[#0F67B1]/10"
              >
                Tidak
              </button>
              <button
                onClick={onConfirm}
                className="flex items-center justify-center px-5 py-2 rounded-md bg-[#0F67B1] text-white font-semibold hover:bg-[#0c599b] transition"
              >
                Ya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
