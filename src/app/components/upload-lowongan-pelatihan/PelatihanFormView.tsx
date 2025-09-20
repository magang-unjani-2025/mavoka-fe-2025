//"use client";

//import { useState } from "react";
//import { useRouter } from "next/navigation";
//import { FiArrowLeft } from "react-icons/fi";
//import { PelatihanFormValues } from "@/types/pelatihan";

//export default function PelatihanForm({
//  onSaveDraft,
//  onPublish,
//  defaultValues,
//}: {
//  onSaveDraft: (data: PelatihanFormValues) => void | Promise<void>;
//  onPublish: (data: PelatihanFormValues) => void | Promise<void>;
//  defaultValues?: Partial<PelatihanFormValues>;
//}) {
//  const router = useRouter();
//  const [values, setValues] = useState<PelatihanFormValues>({
//    namaPelatihan: defaultValues?.namaPelatihan || "",
//    deskripsi: defaultValues?.deskripsi || "",
//    kategori: defaultValues?.kategori || "",
//    capaian: defaultValues?.capaian?.length ? defaultValues!.capaian : [""],
//  });

//  const setField =
//    (k: keyof PelatihanFormValues) =>
//    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
//      setValues((v) => ({ ...v, [k]: e.target.value }));

//  const setCapaian = (i: number, val: string) =>
//    setValues((v) => {
//      const next = [...v.capaian];
//      next[i] = val;
//      return { ...v, capaian: next };
//    });

//  const addCapaian = () => setValues((v) => ({ ...v, capaian: [...v.capaian, ""] }));
//  const removeCapaian = (i: number) =>
//    setValues((v) => ({ ...v, capaian: v.capaian.filter((_, idx) => idx !== i) }));

//  const disabledPublish =
//    !values.namaPelatihan.trim() ||
//    !values.deskripsi.trim() ||
//    !values.kategori.trim() ||
//    values.capaian.every((c) => !c.trim());

//  return (
//    <div className="space-y-5">
//      <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-[#0F67B1] hover:opacity-80">
//        <FiArrowLeft /> <span>Kembali</span>
//      </button>

//      <h2 className="text-xl font-semibold">Unggah Pelatihan Magang</h2>

//      <div className="rounded-xl bg-white p-5 md:p-6 shadow-sm ring-1 ring-gray-200">
//        <div className="mb-4">
//          <h3 className="text-base font-semibold">Data Pelatihan</h3>
//          <p className="text-sm text-gray-600">Pastikan informasi data pelatihan terisi dengan benar.</p>
//          <div className="mt-3 h-px w-full bg-gray-200" />
//        </div>

//        <div className="space-y-4">
//          <div>
//            <label className="block text-sm mb-1">Nama Pelatihan</label>
//            <input
//              value={values.namaPelatihan}
//              onChange={setField("namaPelatihan")}
//              placeholder="Masukkan pelatihan..."
//              className="w-full rounded-lg border border-gray-300 px-3 py-2"
//            />
//          </div>

//          <div>
//            <label className="block text-sm mb-1">Deskripsi</label>
//            <textarea
//              value={values.deskripsi}
//              onChange={setField("deskripsi")}
//              placeholder="Masukkan Deskripsi"
//              rows={4}
//              className="w-full rounded-lg border border-gray-300 px-3 py-2"
//            />
//          </div>

//          <div>
//            <label className="block text-sm mb-1">Kategori</label>
//            <input
//              value={values.kategori}
//              onChange={setField("kategori")}
//              placeholder="Masukkan kategori..."
//              className="w-full rounded-lg border border-gray-300 px-3 py-2"
//            />
//          </div>

//          <div>
//            <div className="flex items-center justify-between">
//              <label className="block text-sm mb-1">Capaian Pembelajaran</label>
//              <button
//                type="button"
//                onClick={addCapaian}
//                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50"
//              >
//                <span className="text-base leading-none">+</span>
//                <span>Tambah Capaian Pembelajaran</span>
//              </button>
//            </div>

//            <div className="mt-2 space-y-2">
//              {values.capaian.map((c, i) => (
//                <div key={i} className="flex items-center gap-2">
//                  <input
//                    value={c}
//                    onChange={(e) => setCapaian(i, e.target.value)}
//                    placeholder="Masukkan capaian..."
//                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
//                  />
//                  {values.capaian.length > 1 && (
//                    <button
//                      type="button"
//                      onClick={() => removeCapaian(i)}
//                      className="shrink-0 rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
//                      title="Hapus baris"
//                    >
//                      Hapus
//                    </button>
//                  )}
//                </div>
//              ))}
//            </div>
//          </div>
//        </div>

//        <div className="mt-6 flex items-center justify-end gap-2">
//          <button
//            onClick={() => onSaveDraft(values)}
//            className="px-4 py-2 rounded-lg border border-[#0F67B1] text-[#0F67B1] hover:bg-[#0F67B1]/5"
//          >
//            Simpan
//          </button>
//          <button
//            onClick={() => onPublish(values)}
//            disabled={disabledPublish}
//            className="px-4 py-2 rounded-lg bg-[#0F67B1] text-white hover:bg-[#0d5692] disabled:opacity-50"
//          >
//            Unggah
//          </button>
//        </div>
//      </div>
//    </div>
//  );
//}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { PelatihanFormValues } from "@/types/pelatihan";

type Mode = "create" | "detail" | "editDraft" | "editPublished";

type Props = {
  mode: Mode;
  title?: string;
  initial?: Partial<PelatihanFormValues>;
  // create + editDraft
  onSaveDraft?: (v: PelatihanFormValues) => void | Promise<void>;
  onPublish?: (v: PelatihanFormValues) => void | Promise<void>;
  // editPublished
  onSave?: (v: PelatihanFormValues) => void | Promise<void>;
};

export default function PelatihanFormView({
  mode,
  title,
  initial,
  onSaveDraft,
  onPublish,
  onSave,
}: Props) {
  const router = useRouter();
  const readOnly = mode === "detail";

  const [values, setValues] = useState<PelatihanFormValues>({
    namaPelatihan: initial?.namaPelatihan || "",
    deskripsi: initial?.deskripsi || "",
    kategori: initial?.kategori || "",
    capaian: initial?.capaian?.length ? [...initial.capaian] : [""],
  });

  const setField =
    (k: keyof PelatihanFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [k]: e.target.value }));

  const setCapaian = (i: number, val: string) =>
    setValues((v) => {
      const next = [...v.capaian];
      next[i] = val;
      return { ...v, capaian: next };
    });

  const addCapaian = () =>
    setValues((v) => ({ ...v, capaian: [...v.capaian, ""] }));

  const removeCapaian = (i: number) =>
    setValues((v) => ({
      ...v,
      capaian: v.capaian.filter((_, idx) => idx !== i),
    }));

  const canSubmit =
    values.namaPelatihan.trim() &&
    values.deskripsi.trim() &&
    values.kategori.trim() &&
    values.capaian.some((c) => c.trim());

  const defaultTitle =
    mode === "create"
      ? "Unggah Pelatihan Magang"
      : mode === "editDraft"
      ? "Ubah Draft Pelatihan"
      : mode === "editPublished"
      ? "Ubah Data Pelatihan"
      : "Detail Data Pelatihan";

  // util class untuk field (input/textarea)
  const fieldCls = (extra = "") =>
    [
      "w-full rounded-lg border border-gray-300 text-[#858585] p-4",
      readOnly ? "bg-gray-100 text-[#858585]" : "",
      // fokus: border & ring biru
      !readOnly &&
        "focus:outline-none focus:ring-2 focus:ring-[#0F67B1]/30 focus:border-[#0F67B1]",
      extra,
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <div className="space-y-4">
      {/* Kembali */}
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-black hover:opacity-80 shadow-none"
      >
        <FiArrowLeft /> <span className="text-xl font-semibold">Kembali</span>
      </button>

      <h3 className="font-semibold">{title || defaultTitle}</h3>

      <div className="rounded-xl bg-white p-5 md:p-6 shadow-sm ">
        <div className="mb-4">
          <h3 className="font-bold">Data Pelatihan</h3>
          <p className="text-black">
            Pastikan informasi data pelatihan terisi dengan benar.
          </p>
        <div className="mt-3 h-px w-full bg-[#E3E3E3]" />
        </div>

        <div className="space-y-4">
          {/* Nama Pelatihan */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Nama Pelatihan
            </label>
            <input
              value={values.namaPelatihan}
              onChange={setField("namaPelatihan")}
              readOnly={readOnly}
              disabled={readOnly}
              placeholder="Masukkan pelatihan..."
              className={fieldCls()}
            />
          </div>

          {/* Deskripsi */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Deskripsi
            </label>
            <textarea
              value={values.deskripsi}
              onChange={setField("deskripsi")}
              readOnly={readOnly}
              disabled={readOnly}
              rows={4}
              placeholder="Masukkan Deskripsi"
              className={fieldCls("text-sm")}
            />
          </div>

          {/* Kategori */}
          <div>
            <label className="block text-sm font-semibold mb-1 ">
              Kategori
            </label>
            <input
              value={values.kategori}
              onChange={setField("kategori")}
              readOnly={readOnly}
              disabled={readOnly}
              placeholder="Masukkan kategori..."
              className={fieldCls()}
            />
          </div>

{/* Capaian */}
<div>
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
    <label className="block text-sm font-semibold">
      Capaian Pembelajaran
    </label>
    {!readOnly && (
      <button
        type="button"
        onClick={addCapaian}
        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50"
      >
        <span className="text-base leading-none">+</span>
        <span>Tambah Capaian Pembelajaran</span>
      </button>
    )}
  </div>

  <div className="mt-2 space-y-2">
    {values.capaian.map((c, i) => (
      <div key={i} className="flex items-center gap-2">
        <input
          value={c}
          onChange={(e) => setCapaian(i, e.target.value)}
          readOnly={readOnly}
          disabled={readOnly}
          placeholder="Masukkan capaian..."
          className={fieldCls()}
        />
        {!readOnly && values.capaian.length > 1 && (
          <button
            type="button"
            onClick={() => removeCapaian(i)}
            className="shrink-0 rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
            title="Hapus baris"
          >
            Hapus
          </button>
        )}
      </div>
    ))}
  </div>
</div>


        </div>

        {/* Actions */}
        {!readOnly && (
          <div className="mt-6 flex items-center justify-end gap-2">
            {mode === "create" || mode === "editDraft" ? (
              <>
                <button
                  onClick={() => onSaveDraft?.(values)}
                  className="px-4 py-2 rounded-lg border border-[#0F67B1] text-[#0F67B1] hover:bg-[#0F67B1]/5"
                >
                  Simpan
                </button>
                <button
                  onClick={() => onPublish?.(values)}
                  disabled={!canSubmit}
                  className="px-4 py-2 rounded-lg bg-[#0F67B1] text-white hover:bg-[#0d5692] disabled:opacity-50"
                >
                  Unggah
                </button>
              </>
            ) : null}

            {mode === "editPublished" ? (
              <button
                onClick={() => onSave?.(values)}
                disabled={!canSubmit}
                className="px-4 py-2 rounded-lg bg-[#0F67B1] text-white hover:bg-[#0d5692] disabled:opacity-50"
              >
                Simpan
              </button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
