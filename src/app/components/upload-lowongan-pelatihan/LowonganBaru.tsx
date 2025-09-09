"use client";

import { useState, ChangeEvent } from "react";
import { IoArrowBack } from "react-icons/io5";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";

type Role = "perusahaan" | "lpk";

interface LowonganData {
  id: number;
  posisi: string;
  deskripsi: string;
  kuota: number;
  capaian: string;
  status: "Aktif" | "Tidak";
}

interface PelatihanData {
  id: number;
  namaPelatihan: string;
  deskripsi: string;
  kategori: string;
  capaian: string[];
}

export default function LowonganBaru({ role }: { role: Role }) {
  // --- state perusahaan
  const [formData, setFormData] = useState({
    posisi: "",
    deskripsi: "",
    kuota: "",
    tanggalPenutupan: "",
    lokasi: "",
    persyaratan: "",
    keuntungan: "",
  });

  // --- state lpk
  const [pelatihan, setPelatihan] = useState({
    namaPelatihan: "",
    deskripsi: "",
    kategori: "",
    capaian: [""],
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  // handle perusahaan
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle lpk
  const handlePelatihanChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPelatihan((prev) => ({ ...prev, [name]: value }));
  };

  const handleCapaianChange = (index: number, value: string) => {
    const updated = [...pelatihan.capaian];
    updated[index] = value;
    setPelatihan((prev) => ({ ...prev, capaian: updated }));
  };

  const addCapaian = () => {
    setPelatihan((prev) => ({ ...prev, capaian: [...prev.capaian, ""] }));
  };

  // save
  const handleSave = (action: "draft" | "unggah") => {
    if (role === "perusahaan") {
      const newItem: LowonganData = {
        id: Date.now(),
        posisi: formData.posisi,
        deskripsi: formData.deskripsi,
        kuota: Number(formData.kuota),
        capaian: formData.keuntungan || "-",
        status: action === "unggah" ? "Aktif" : "Tidak",
      };
      setModalMsg(
        action === "draft"
          ? "Data lowongan magang berhasil disimpan ke draft"
          : "Data lowongan magang berhasil diunggah"
      );
      console.log("Save perusahaan:", newItem);
    } else {
      const newItem: PelatihanData = {
        id: Date.now(),
        namaPelatihan: pelatihan.namaPelatihan,
        deskripsi: pelatihan.deskripsi,
        kategori: pelatihan.kategori,
        capaian: pelatihan.capaian,
      };
      setModalMsg(
        action === "draft"
          ? "Data pelatihan berhasil disimpan ke draft"
          : "Data pelatihan berhasil diunggah"
      );
      console.log("Save LPK:", newItem);
    }

    setShowModal(true);
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

      <div className="w-full bg-white p-4 rounded-lg">
        <h3 className="font-semibold mb-1">
          {role === "perusahaan" ? "Data Lowongan" : "Data Pelatihan"}
        </h3>
        <p className="mb-6">
          {role === "perusahaan"
            ? "Pastikan informasi data lowongan terisi dengan benar."
            : "Pastikan informasi data pelatihan terisi dengan benar."}
        </p>
        <hr className="border-t border-gray-300 mb-6" />

        <form className="space-y-3">
          {role === "perusahaan" ? (
            <>
              {/* --- form perusahaan --- */}
              <div>
                <label className="block font-semibold">Posisi</label>
                <input
                  type="text"
                  name="posisi"
                  value={formData.posisi}
                  onChange={handleChange}
                  placeholder="Masukkan posisi..."
                  className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#858585]"
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
                  className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#858585]"
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
                  className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#858585]"
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
            </>
          ) : (
            <>
              {/* --- form lpk --- */}
              <div>
                <label className="block font-semibold">Nama Pelatihan</label>
                <input
                  type="text"
                  name="namaPelatihan"
                  value={pelatihan.namaPelatihan}
                  onChange={handlePelatihanChange}
                  placeholder="Masukkan nama pelatihan..."
                  className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#858585]"
                />
              </div>
              <div>
                <label className="block font-semibold">Deskripsi</label>
                <textarea
                  name="deskripsi"
                  value={pelatihan.deskripsi}
                  onChange={handlePelatihanChange}
                  placeholder="Masukkan deskripsi pelatihan"
                  rows={4}
                  className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#858585]"
                />
              </div>
              <div>
                <label className="block font-semibold">Kategori</label>
                <input
                  type="text"
                  name="kategori"
                  value={pelatihan.kategori}
                  onChange={handlePelatihanChange}
                  placeholder="Masukkan kategori..."
                  className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#858585]"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Capaian Pembelajaran
                </label>
                {pelatihan.capaian.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 mt-1">
                    <input
                      type="text"
                      value={c}
                      onChange={(e) => handleCapaianChange(i, e.target.value)}
                      placeholder="Masukkan capaian..."
                      className="flex-1 rounded border px-3 py-2 text-sm text-[#858585]"
                    />
                    {i === pelatihan.capaian.length - 1 && (
                      <button
                        type="button"
                        onClick={addCapaian}
                        className="bg-none shadow-none font-semibold"
                      >
                        + Tambah Capaian Pembelajaran
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={() => handleSave("draft")}
              className="border border-[#0F67B1] bg-white text-[#0F67B1] px-4 py-2 rounded hover:bg-gray-100"
            >
              Simpan Draft
            </button>
            <button
              type="button"
              onClick={() => handleSave("unggah")}
              className="bg-[#0F67B1] text-white px-4 py-2 rounded hover:bg-[#0c599b]"
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
