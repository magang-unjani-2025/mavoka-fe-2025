"use client";

import { useMemo, useState, ChangeEvent, FormEvent } from "react";
import { IoArrowBack } from "react-icons/io5";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";
import type { Lowongan, CreateLowonganPayload } from "@/types/lowongan";

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

onSaveDraft?: (payload: CreateLowonganPayload, id?: number) => void;
  onUnggah?: (payload: CreateLowonganPayload, id?: number) => void;
  onSave?: (payload: CreateLowonganPayload, id?: number) => void;

  successFor?: ActionType[];
  successMessage?: string;
  onSuccessClose?: (action: ActionType) => void;
};

const textToArray = (s: string) =>
  s.split(/\r?\n|;/).map((x) => x.trim()).filter(Boolean);

const arrayToText = (arr?: string[]) => (arr && arr.length ? arr.join("\n") : "");

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
  successFor = [],            
  successMessage,
  onSuccessClose,
}: Props) {
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

    const buildPayload = (): CreateLowonganPayload => ({
    perusahaan_id: initial?.perusahaan_id ?? 0,
    judul_lowongan: form.posisi.trim(),
    posisi: form.posisi.trim(),
    deskripsi: form.deskripsi.trim(),
    kuota: Number(form.kuota || 0),
    lokasi_penempatan: form.lokasi.trim(),
    deadline_lamaran: form.tanggalTutup,
    mulaiMagang: form.mulaiMagang,
    selesaiMagang: form.selesaiMagang,
    tugas: textToArray(form.tugas),
    persyaratan: textToArray(form.persyaratan),
    keuntungan: textToArray(form.keuntungan),
  });

  const trigger = (
    action: ActionType,
    fn?: (p: CreateLowonganPayload, id?: number) => void
  ) => {
    const payload = buildPayload();
    const id = typeof initial?.id === "number" ? initial!.id : undefined;
    fn?.(payload, id);
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
  }, [readOnly, canShowDraft, canShowUnggah, canShowSimpan, onSaveDraft, onUnggah, onSave, successFor, successMessage, form]);


  return (
    <div className="w-full">
      <button
        onClick={onBack ?? (() => history.back())}
        className="flex items-center gap-1 text-xl font-semibold mb-6 py-0 px-0 shadow-none bg-none"
      >
        <IoArrowBack className="text-xl" />
        Kembali
      </button>

      <div className="w-full bg-white p-6 rounded-lg">
        <h3 className="font-semibold text-lg mb-1">Data Lowongan</h3>
        <p className="mb-6 text-sm text-gray-600">{subtitle}</p>
        <hr className="border-t border-gray-300 mb-6" />

        <form className="space-y-4" onSubmit={handleSubmit}>
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

          {footerButtons}
        </form>
      </div>

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
