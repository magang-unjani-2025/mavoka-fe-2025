"use client";

import { useMemo, useState, ChangeEvent, FormEvent } from "react";
import { IoArrowBack } from "react-icons/io5";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";
import type { Lowongan } from "@/types/lowongan";

export type LowonganFormMode =
  | "create"
  | "edit-draft"
  | "edit-terpasang"
  | "detail";

type ActionType = "draft" | "unggah" | "save";

type Props = {
  mode: LowonganFormMode;
  initial?: Partial<Lowongan>;
  onBack?: () => void;

  onSaveDraft?: (payload: Lowongan) => void;
  onUnggah?: (payload: Lowongan) => void;
  onSave?: (payload: Lowongan) => void;

  /** tampilkan popup hanya untuk aksi tertentu (default: none) */
  successFor?: ActionType[];
  /** pesan popup (jika ditampilkan) */
  successMessage?: string;
  /** dipanggil ketika popup ditutup */
  onSuccessClose?: (action: ActionType) => void;
};

// ====== Utils konversi antara textarea <-> array<string> ======
const textToArray = (s: string) =>
  s.split(/\r?\n|;/).map((x) => x.trim()).filter(Boolean);

const arrayToText = (arr?: string[]) => (arr && arr.length ? arr.join("\n") : "");

// ====== Nilai kosong untuk inisialisasi ======
const emptyForm = {
  posisi: "",
  deskripsi: "",
  kuota: "",
  tanggalTutup: "",
  mulaiMagang: "",
  selesaiMagang: "",
  lokasi: "",
  tugas: "",
  persyaratan: "",
  keuntungan: "",
};

export default function LowonganFormView({
  mode,
  initial,
  onBack,
  onSaveDraft,
  onUnggah,
  onSave,
  successFor = [],            // default: tidak ada popup
  successMessage,
  onSuccessClose,
}: Props) {
  // state UI form (pakai string agar mudah diketik)
  const [form, setForm] = useState({
    posisi: initial?.posisi ?? emptyForm.posisi,
    deskripsi: initial?.deskripsi ?? emptyForm.deskripsi,
    kuota: String(initial?.kuota ?? emptyForm.kuota),
    tanggalTutup: initial?.tanggalTutup ?? emptyForm.tanggalTutup,
    mulaiMagang: initial?.mulaiMagang ?? emptyForm.mulaiMagang,
    selesaiMagang: initial?.selesaiMagang ?? emptyForm.selesaiMagang,
    lokasi: initial?.lokasi ?? emptyForm.lokasi,
    tugas: arrayToText(initial?.tugas),
    persyaratan: arrayToText(initial?.persyaratan),
    keuntungan: arrayToText(initial?.keuntungan),
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [lastAction, setLastAction] = useState<ActionType | null>(null);

  const readOnly = mode === "detail";
  const canShowDraft = mode === "create";
  const canShowUnggah = mode === "create" || mode === "edit-draft";
  const canShowSimpan = mode === "edit-draft" || mode === "edit-terpasang";

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // bangun payload Lowongan dari state form
  const buildPayload = (): Lowongan => ({
    id: typeof initial?.id === "number" ? initial!.id : Date.now(),
    posisi: form.posisi.trim(),
    deskripsi: form.deskripsi.trim(),
    kuota: Number(form.kuota || 0),
    tanggalTutup: form.tanggalTutup,
    mulaiMagang: form.mulaiMagang,
    selesaiMagang: form.selesaiMagang,
    lokasi: form.lokasi.trim(),
    tugas: textToArray(form.tugas),
    persyaratan: textToArray(form.persyaratan),
    keuntungan: textToArray(form.keuntungan),
    // status tidak dikelola di form (hanya di tabel Terpasang)
  });

    const trigger = (action: ActionType, fn?: (p: Lowongan) => void) => {
    const payload = buildPayload();
    fn?.(payload);
    setLastAction(action);
    if (successMessage && successFor.includes(action)) {
      setShowSuccess(true);
    }
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  const subtitle = "Pastikan informasi data lowongan terisi dengan benar.";

 const footerButtons = useMemo(() => {
    if (readOnly) return null;
    return (
      <div className="flex justify-end gap-2 mt-6">
        {canShowDraft && (
          <button
            type="button"
            onClick={() => trigger("draft", onSaveDraft)}
            className="border border-[#0F67B1] bg-white text-[#0F67B1] px-4 py-2 rounded hover:bg-gray-100"
          >
            Simpan Draft
          </button>
        )}

        {canShowSimpan && (
          <button
            type="button"
            onClick={() => trigger("save", onSave)}
            className="border border-[#0F67B1] bg-white text-[#0F67B1] px-4 py-2 rounded hover:bg-gray-100"
          >
            Simpan
          </button>
        )}

        {canShowUnggah && (
          <button
            type="button"
            onClick={() => trigger("unggah", onUnggah)}
            className="bg-[#0F67B1] text-white px-4 py-2 rounded hover:bg-[#0c599b]"
          >
            Unggah
          </button>
        )}
      </div>
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readOnly, canShowDraft, canShowUnggah, canShowSimpan, onSaveDraft, onUnggah, onSave, successFor, successMessage, form]);


  return (
    <div className="w-full">
      {/* Tombol kembali (atas) */}
      <button
        onClick={onBack ?? (() => history.back())}
        className="flex items-center gap-1 text-xl font-semibold mb-6 py-0 px-0 shadow-none bg-none"
      >
        <IoArrowBack className="text-xl" />
        Kembali
      </button>

      {/* Card Form */}
      <div className="w-full bg-white p-6 rounded-lg">
        <h3 className="font-semibold text-lg mb-1">Data Lowongan</h3>
        <p className="mb-6 text-sm text-gray-600">{subtitle}</p>
        <hr className="border-t border-gray-300 mb-6" />

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Posisi */}
          <div>
            <label className="block font-semibold">Posisi</label>
            <input
              type="text"
              name="posisi"
              value={form.posisi}
              onChange={onChange}
              readOnly={readOnly}
              placeholder="Masukkan posisi..."
              className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#3a3a3a] disabled:bg-gray-100"
            />
          </div>

          {/* Deskripsi */}
          <div>
            <label className="block font-semibold">Deskripsi</label>
            <textarea
              name="deskripsi"
              value={form.deskripsi}
              onChange={onChange}
              readOnly={readOnly}
              placeholder="Masukkan Deskripsi..."
              rows={4}
              className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#3a3a3a] disabled:bg-gray-100"
            />
          </div>

          {/* Jumlah Kuota */}
          <div>
            <label className="block font-semibold">Jumlah Kuota</label>
            <input
              type="number"
              name="kuota"
              value={form.kuota}
              onChange={onChange}
              readOnly={readOnly}
              placeholder="Masukkan kuota..."
              className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#3a3a3a] disabled:bg-gray-100"
            />
          </div>

          {/* Tanggal Penutupan */}
          <div>
            <label className="block font-semibold">Tanggal Penutupan Lowongan</label>
            <input
              type="date"
              name="tanggalTutup"
              value={form.tanggalTutup}
              onChange={onChange}
              readOnly={readOnly}
              className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#3a3a3a] disabled:bg-gray-100"
            />
          </div>

          {/* Periode Magang */}
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Periode Mulai Magang</label>
              <input
                type="date"
                name="mulaiMagang"
                value={form.mulaiMagang}
                onChange={onChange}
                readOnly={readOnly}
                className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#3a3a3a] disabled:bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-semibold">Periode Selesai Magang</label>
              <input
                type="date"
                name="selesaiMagang"
                value={form.selesaiMagang}
                onChange={onChange}
                readOnly={readOnly}
                className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#3a3a3a] disabled:bg-gray-100"
              />
            </div>
          </div>

          {/* Lokasi Penempatan */}
          <div>
            <label className="block font-semibold">Lokasi Penempatan</label>
            <input
              type="text"
              name="lokasi"
              value={form.lokasi}
              onChange={onChange}
              readOnly={readOnly}
              placeholder="Masukkan Lokasi..."
              className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#3a3a3a] disabled:bg-gray-100"
            />
          </div>

          {/* Tugas & Tanggung Jawab */}
          <div>
            <label className="block font-semibold">Tugas & Tanggung Jawab</label>
            <textarea
              name="tugas"
              value={form.tugas}
              onChange={onChange}
              readOnly={readOnly}
              placeholder="Masukkan tugas dan tanggungjawab... (pisahkan baris/semicolon)"
              rows={4}
              className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#3a3a3a] disabled:bg-gray-100"
            />
          </div>

          {/* Persyaratan */}
          <div>
            <label className="block font-semibold">Persyaratan</label>
            <textarea
              name="persyaratan"
              value={form.persyaratan}
              onChange={onChange}
              readOnly={readOnly}
              placeholder="Masukkan persyaratan... (pisahkan baris/semicolon)"
              rows={4}
              className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#3a3a3a] disabled:bg-gray-100"
            />
          </div>

          {/* Keuntungan */}
          <div>
            <label className="block font-semibold">Keuntungan</label>
            <textarea
              name="keuntungan"
              value={form.keuntungan}
              onChange={onChange}
              readOnly={readOnly}
              placeholder="Masukkan keuntungan... (pisahkan baris/semicolon)"
              rows={4}
              className="mt-1 w-full rounded border px-3 py-2 text-sm text-[#3a3a3a] disabled:bg-gray-100"
            />
          </div>

          {/* Tombol footer */}
          {footerButtons}
        </form>
      </div>

      {/* Success popup (opsional) */}
     <SuccessModal
        open={showSuccess}
        title="Berhasil"
        message={successMessage ?? "Perubahan berhasil disimpan"}
        onClose={() => {
          setShowSuccess(false);
          if (lastAction) onSuccessClose?.(lastAction);
        }}
      />
    </div>
  );
}
