"use client";

import { useState, ChangeEvent } from "react";
import { IoArrowBack } from "react-icons/io5";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";

interface LowonganData {
  id: number;
  posisi: string;
  deskripsi: string;
  kuota: number;
  capaian: string;
  status: "Aktif" | "Tidak";
}

export default function LowonganBaru() {
  const [formData, setFormData] = useState({
    posisi: "",
    deskripsi: "",
    kuota: "",
    tanggalPenutupan: "",
    lokasi: "",
    persyaratan: "",
    keuntungan: "",
  });

  const [drafts, setDrafts] = useState<LowonganData[]>([]);
  const [unggah, setUnggah] = useState<LowonganData[]>([]);

  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (action: "draft" | "unggah") => {
    const newItem: LowonganData = {
      id: Date.now(),
      posisi: formData.posisi,
      deskripsi: formData.deskripsi,
      kuota: Number(formData.kuota),
      capaian: formData.keuntungan || "-",
      status: action === "unggah" ? "Aktif" : "Tidak",
    };

    if (action === "draft") {
      setDrafts((prev) => [...prev, newItem]);
      setModalMsg("Data lowongan magang yang Anda inputkan berhasil disimpan ke draft");
    } else {
      setUnggah((prev) => [...prev, newItem]);
      setModalMsg("Data lowongan magang yang Anda inputkan berhasil diunggah");
    }

    setShowModal(true);

    setFormData({
      posisi: "",
      deskripsi: "",
      kuota: "",
      tanggalPenutupan: "",
      lokasi: "",
      persyaratan: "",
      keuntungan: "",
    });
  };

  return (
    <div className="w-full">
      <button
        onClick={() => history.back()}
        className="flex items-center gap-1 text-xl font-semibold mb-6 py-0 px-0 shadow-none bg-none"
      >
        <IoArrowBack className="text-xl" />
        Kembali
      </button>

      <div className="w-full bg-white p-8 rounded-lg">
        <h3 className="font-semibold mb-1">Data Lowongan</h3>
        <p className="mb-6">
          Pastikan informasi data lowongan terisi dengan benar.
        </p>
        <hr className="border-t border-gray-300 mb-6" />

        <form className="space-y-3">
          <div>
            <label className="block font-semibold">Posisi</label>
            <input
              type="text"
              name="posisi"
              value={formData.posisi}
              onChange={handleChange}
              placeholder="Masukkan posisi..."
              className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#858585] font-medium"
            />
          </div>

          <div>
            <label className="block font-semibold">Deskripsi</label>
            <textarea
              name="deskripsi"
              value={formData.deskripsi}
              onChange={handleChange}
              placeholder="Masukkan deskripsi"
              rows={3}
              className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#858585] font-medium"
            />
          </div>

          <div>
            <label className="block font-semibold">Jumlah Kuota</label>
            <input
              type="number"
              name="kuota"
              value={formData.kuota}
              onChange={handleChange}
              placeholder="Masukkan kuota"
              className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#858585] font-medium"
            />
          </div>

          <div>
            <label className="block font-semibold">Tanggal Penutupan</label>
            <input
              type="date"
              name="tanggalPenutupan"
              value={formData.tanggalPenutupan}
              onChange={handleChange}
              className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#858585] font-medium"
            />
          </div>

          <div>
            <label className="block font-semibold">Lokasi Penempatan</label>
            <input
              type="text"
              name="lokasi"
              value={formData.lokasi}
              onChange={handleChange}
              placeholder="Masukkan lokasi..."
              className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#858585] font-medium"
            />
          </div>

          <div>
            <label className="block font-semibold">Persyaratan</label>
            <textarea
              name="persyaratan"
              value={formData.persyaratan}
              onChange={handleChange}
              placeholder="Masukkan persyaratan..."
              rows={3}
              className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#858585] font-medium"
            />
          </div>

          <div>
            <label className="block font-semibold">Keuntungan</label>
            <textarea
              name="keuntungan"
              value={formData.keuntungan}
              onChange={handleChange}
              placeholder="Masukkan keuntungan..."
              rows={3}
              className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#858585] font-medium"
            />
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={() => handleSave("draft")}
              className="border border-[#0F67B1] bg-white text-[#0F67B1] hover:bg-gray-100 transition"
            >
              Simpan
            </button>
            <button
              type="button"
              onClick={() => handleSave("unggah")}
              className="bg-[#0F67B1] text-white hover:bg-[#0c599b] transition"
            >
              Unggah
            </button>
          </div>
        </form>
      </div>
      <SuccessModal
        open={showModal}
        title="Berhasil"
        message={modalMsg}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
