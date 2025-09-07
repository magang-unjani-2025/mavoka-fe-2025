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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" onKeyDown={(e) => e.key === "Escape" && onClose()}>
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl ring-1 ring-blue-600/30">
        <h3 className="mb-4 text-center text-xl font-semibold">Informasi Pelaksanaan Interview</h3>

        <div className="mb-3">
          <label className="mb-1 block text-sm text-gray-700">Link Zoom</label>
          <input
            type="url"
            value={zoomLink}
            onChange={(e) => setZoomLink(e.target.value)}
            placeholder="https://us06web.zoom.us/j/..."
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none"
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-sm text-gray-700">Waktu</label>
          <input
            type="text"
            value={waktuText}
            onChange={(e) => setWaktuText(e.target.value)}
            placeholder="13.00 - 14.00"
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="mb-1 block text-sm text-gray-700">Tanggal</label>
          <input
            type="date"
            value={tanggalISO}
            onChange={(e) => setTanggalISO(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none"
          />
        </div>

        <div className="flex items-center justify-end gap-3">
          <button className="rounded-md border px-4 py-2" onClick={onClose}>Batal</button>
          <button
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
            disabled={!zoomLink || !waktuText || !tanggalISO}
            onClick={async () => {
              const payload: InterviewPayload = { zoomLink, waktuText, tanggalISO };
              await onSubmit(payload);
            }}
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}
