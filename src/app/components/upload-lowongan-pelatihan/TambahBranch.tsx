"use client";
import { useState } from "react";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";

type FormData = {
  batch: string;
  mulai: string;
  selesai: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
};

export default function TambahBranch({ open, onClose, onSubmit }: Props) {
  const [form, setForm] = useState<FormData>({
    batch: "",
    mulai: "",
    selesai: "",
  });
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(form);
    setOpenSuccess(true);
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="border-4 border-[#0F67B1] bg-white shadow-xl p-6 rounded-2xl w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Periode Pelatihan Magang
            </h2>

            <label className="block mb-2 text-sm font-semibold">Batch</label>
            <input
              type="text"
              name="batch"
              value={form.batch}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mb-4 text-gray-500 text-xs"
            />

            <label className="block mb-2 text-sm font-semibold">Mulai</label>
            <input
              type="date"
              name="mulai"
              value={form.mulai}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mb-4 text-gray-500 text-xs"
            />

            <label className="block mb-2 text-sm font-semibold">Selesai</label>
            <input
              type="date"
              name="selesai"
              value={form.selesai}
              onChange={handleChange}
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
        message="Branch berhasil ditambahkan!"
        onClose={() => setOpenSuccess(false)}
      />
    </>
  );
}
