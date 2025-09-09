"use client";
import { useState } from "react";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (tanggal: string) => void;
};

export default function FormAktifkanModal({ open, onClose, onSubmit }: Props) {
  const [tanggal, setTanggal] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleSubmit = () => {
    onSubmit(tanggal);
    setOpenSuccess(true);
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="border-4 border-[#0F67B1] bg-white shadow-xl p-6 rounded-2xl w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Pengaktifan Lowongan
            </h2>

            <label className="block mb-3 text-sm font-semibold">Tanggal</label>
            <input
              type="date"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-4 text-gray-500 text-xs"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-[5px] border border-[#0F67B1] text-[#0F67B1] hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-[5px] bg-[#0F67B1] text-white hover:bg-[#0c599b]"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      <SuccessModal
        open={openSuccess}
        title="Berhasil"
        message="Informasi pengaktifan lowongan berhasil diunggah!"
        onClose={() => {
          setOpenSuccess(false);
        }}
      />
    </>
  );
}
