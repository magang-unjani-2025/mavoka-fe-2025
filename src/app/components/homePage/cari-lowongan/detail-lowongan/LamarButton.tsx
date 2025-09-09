"use client";
import { useState } from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";

export default function LamarButton() {
  const [open, setOpen] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [transkripFile, setTranskripFile] = useState<File | null>(null);
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    setOpenSuccess(true);
  };

  return (
    <>
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => setOpen(true)}
          className="bg-[#0F67B1] text-white hover:bg-[#0c599b] flex items-center gap-2 px-4 py-2 rounded"
        >
          <IoPaperPlaneOutline size={20} />
          Lamar Sekarang
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="border-4 border-[#0F67B1] bg-white shadow-xl p-6 rounded-2xl w-full max-w-md">
            <h2 className="text-center font-bold text-lg mb-6">
              Lamar Magang
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-semibold">CV</label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setCvFile(e.target.files?.[0] ?? null)}
                  className="w-full border rounded px-2 py-1"
                  required
                />
                <p className="text-sm text-gray-500">
                  Hanya mendukung file dengan format .PDF
                </p>
              </div>

              <div>
                <label className="block mb-1 font-semibold">
                  Transkrip Akademik
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) =>
                    setTranskripFile(e.target.files?.[0] ?? null)
                  }
                  className="w-full border rounded px-2 py-1"
                  required
                />
                <p className="text-sm text-gray-500">
                  Hanya mendukung file dengan format .PDF
                </p>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-[5px] border border-[#0F67B1] text-[#0F67B1] hover:bg-gray-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-[5px] bg-[#0F67B1] text-white hover:bg-[#0c599b]"
                >
                  Unggah
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <SuccessModal
        open={openSuccess}
        title="Berhasil"
        message="Lamaran Anda berhasil diunggah!"
        onClose={() => {
          setOpenSuccess(false);
        }}
      />
    </>
  );
}
