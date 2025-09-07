"use client";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";

export default function NonaktifkanLowonganButton() {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleNonaktifkan = async () => {

    setOpenConfirm(false);
    setOpenSuccess(true);
  };

  return (
    <>
      <button
        onClick={() => setOpenConfirm(true)}
        className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
      >
        Nonaktifkan
      </button>

      {/* Modal konfirmasi */}
      <ConfirmModal
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        onConfirm={handleNonaktifkan}
        message="Apakah Anda yakin ingin menonaktifkan lowongan ini?"
      />

      {/* Modal sukses */}
      <SuccessModal
        open={openSuccess}
        title="Berhasil"
        message="Lowongan berhasil dinonaktifkan!"
        primaryText="Tutup"
        onClose={() => setOpenSuccess(false)}
      />
    </>
  );
}
