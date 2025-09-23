"use client";
import React from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
};

export default function ModalConfirmDelete({
  open,
  onClose,
  onConfirm,
  title = "Hapus Pelatihan",
  message = "Yakin Anda ingin menghapus pelatihan ini?",
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-[90%] max-w-[420px] rounded-2xl bg-white p-5 md:p-6 ring-1 ring-gray-200 shadow-xl">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{message}</p>

        <div className="mt-5 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Tidak
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            Ya
          </button>
        </div>
      </div>
    </div>
  );
}
