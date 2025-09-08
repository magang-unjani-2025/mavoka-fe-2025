"use client";
import React, { useEffect, useState } from "react";
import type { Applicant, InterviewPayload } from "@/types/pelamar";

type Props = {
  open: boolean;
  onClose: () => void;
  applicant?: Applicant | null;
  onSubmit: (payload: InterviewPayload) => Promise<void> | void;
};

export default function InterviewModal({ open, onClose, applicant, onSubmit }: Props) {
  const [zoomLink, setZoomLink] = useState("");
  const [waktuText, setWaktuText] = useState("");
  const [tanggalISO, setTanggalISO] = useState("");

  useEffect(() => {
    if (open) {
      setZoomLink("");
      setWaktuText("");
      setTanggalISO("");
    }
  }, [open]);

  if (!open || !applicant) return null;

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-[2px] p-4"
      onClick={handleOverlayClick}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-lg rounded-[22px] border-2 border-[#0F67B1] bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
        <h3 className="mb-5 text-center text-xl font-semibold text-gray-900">
          Informasi Pelaksanaan Interview
        </h3>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-gray-700">Link Zoom</label>
            <input
              type="url"
              value={zoomLink}
              onChange={(e) => setZoomLink(e.target.value)}
              placeholder="Masukkan link Zoom"
              className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#0F67B1] focus:ring-1 focus:ring-[#0F67B1]"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-700">Waktu</label>
            <input
              type="text"
              value={waktuText}
              onChange={(e) => setWaktuText(e.target.value)}
              placeholder="Masukkan waktu interview, mis. 13.00 - 14.00"
              className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#0F67B1] focus:ring-1 focus:ring-[#0F67B1]"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-700">Tanggal</label>
            <input
              type="date"
              value={tanggalISO}
              onChange={(e) => setTanggalISO(e.target.value)}
              className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm text-gray-900 outline-none focus:border-[#0F67B1] focus:ring-1 focus:ring-[#0F67B1]"
            />
          </div>
        </div>

        {/* Footer: tombol KANAN semua */}
        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="h-10 rounded-[10px] border-2 border-[#0F67B1] px-5 text-sm font-medium text-[#0F67B1] hover:bg-blue-50 active:scale-[.99]"
          >
            Batal
          </button>
          <button
            type="button"
            disabled={!zoomLink || !waktuText || !tanggalISO}
            onClick={async () => {
              const payload: InterviewPayload = { zoomLink, waktuText, tanggalISO };
              await onSubmit(payload);
            }}
            className="h-10 rounded-[10px] bg-[#0F67B1] px-5 text-sm font-medium text-white hover:brightness-110 disabled:opacity-50 active:scale-[.99]"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}
