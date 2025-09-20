//"use client";
//import React, { useState } from "react";
//import { FaRegEdit } from "react-icons/fa";
//import ConfirmModal from "./ConfirmModal";
//import FormAktifkanModal from "./FormAktifkanModal";
//import TambahBranch from "./TambahBranch";
//import SuccessModal from "@/app/components/registrasi/PopupBerhasil";
//import {
//  dataPerusahaanUnggah,
//  LowonganPerusahaan,
//} from "@/app/data/dataPerusahaanUnggah";
//import { dataLpkUnggah, LowonganLpk } from "@/app/data/dataLpkUnggah";
//import Pagination from "@/app/components/dashboard/Pagination";

//type Role = "perusahaan" | "lpk";

//export default function TableLowonganTerpasang({ role }: { role: Role }) {
//  const [data, setData] = useState<(LowonganPerusahaan | LowonganLpk)[]>(
//    role === "perusahaan" ? dataPerusahaanUnggah : dataLpkUnggah
//  );

//  const [rowsPerPage, setRowsPerPage] = useState(5);
//  const [currentPage, setCurrentPage] = useState(1);

//  const totalPages = Math.ceil(data.length / rowsPerPage);
//  const startIndex = (currentPage - 1) * rowsPerPage;

//  const sortedData =
//    role === "perusahaan"
//      ? [...(data as LowonganPerusahaan[])].sort((a, b) => {
//          if (a.status === "Aktif" && b.status !== "Aktif") return -1;
//          if (a.status !== "Aktif" && b.status === "Aktif") return 1;
//          return 0;
//        })
//      : data;

//  const currentData = sortedData.slice(startIndex, startIndex + rowsPerPage);

//  const [showConfirm, setShowConfirm] = useState(false);
//  const [showFormAktifkan, setShowFormAktifkan] = useState(false);
//  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
//  const [actionType, setActionType] = useState<
//    "Aktifkan" | "Nonaktifkan" | null
//  >(null);
//  const [showSuccess, setShowSuccess] = useState(false);
//  const [successMessage, setSuccessMessage] = useState("");

//  const [showTambahBranch, setShowTambahBranch] = useState(false);

//  const handleAktifkan = (index: number) => {
//    if (role === "perusahaan") {
//      const updated = [...(data as LowonganPerusahaan[])];
//      updated[startIndex + index].status = "Aktif";
//      setData(updated as any);
//    }
//  };

//  const handleNonaktifkan = (index: number) => {
//    if (role === "perusahaan") {
//      const updated = [...(data as LowonganPerusahaan[])];
//      updated[startIndex + index].status = "Tidak";
//      setData(updated as any);
//    }
//  };

//  return (
//    <div>
//      <div className="overflow-auto rounded-xl border border-gray-200">
//        <table className="w-full border-collapse">
//          <thead>
//            <tr className="bg-[#0F67B1] text-white text-center text-xs font-bold">
//              <th className="px-4 py-3">NO</th>
//              {role === "perusahaan" ? (
//                <>
//                  <th className="px-4 py-3">POSISI</th>
//                  <th className="px-4 py-3">DESKRIPSI</th>
//                  <th className="px-4 py-3">KUOTA</th>
//                  <th className="px-4 py-3">CAPAIAN PEMBELAJARAN</th>
//                  <th className="px-4 py-3">STATUS</th>
//                  <th className="px-4 py-3">AKSI STATUS</th>
//                </>
//              ) : (
//                <>
//                  <th className="px-4 py-3">NAMA PELATIHAN</th>
//                  <th className="px-4 py-3">DESKRIPSI</th>
//                  <th className="px-4 py-3">KATEGORI</th>
//                  <th className="px-4 py-3">CAPAIAN PEMBELAJARAN</th>
//                  <th className="px-4 py-3">BATCH</th>
//                </>
//              )}
//              <th className="px-4 py-3">DETAIL</th>
//              <th className="px-4 py-3">AKSI</th>
//            </tr>
//          </thead>
//          <tbody>
//            {currentData.map((item: any, index: number) => (
//              <tr
//                key={item.id}
//                className="hover:bg-gray-50 text-xs text-center"
//              >
//                <td className="px-4 py-2 border-t">{startIndex + index + 1}</td>

//                {role === "perusahaan" ? (
//                  <>
//                    <td className="px-4 py-2 border-t text-left">
//                      {item.posisi}
//                    </td>
//                    <td className="px-4 py-2 border-t text-left">
//                      {item.deskripsi}
//                    </td>
//                    <td className="px-4 py-2 border-t">{item.kuota}</td>
//                    <td className="px-4 py-2 border-t text-left">
//                      {item.capaian}
//                    </td>
//                    <td className="px-4 py-2 border-t">
//                      <span
//                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full whitespace-nowrap ${
//                          item.status === "Aktif"
//                            ? "bg-green-200 text-green-800"
//                            : "bg-red-200 text-red-800"
//                        }`}
//                      >
//                        <span
//                          className={`w-2 h-2 rounded-full ${
//                            item.status === "Aktif"
//                              ? "bg-green-800"
//                              : "bg-red-800"
//                          }`}
//                        ></span>
//                        {item.status}
//                      </span>
//                    </td>
//                    <td className="px-4 py-2 border-t text-center">
//                      {item.status === "Aktif" ? (
//                        <button
//                          onClick={() => {
//                            setSelectedIndex(index);
//                            setActionType("Nonaktifkan");
//                            setShowConfirm(true);
//                          }}
//                          className="px-2 py-1 rounded-[5px] bg-red-700 text-white hover:bg-red-800 transition"
//                        >
//                          Nonaktifkan
//                        </button>
//                      ) : (
//                        <button
//                          onClick={() => {
//                            setSelectedIndex(index);
//                            setActionType("Aktifkan");
//                            setShowConfirm(true);
//                          }}
//                          className="px-2 py-1 rounded-[5px] bg-green-600 text-white hover:bg-green-700 transition"
//                        >
//                          Aktifkan
//                        </button>
//                      )}
//                    </td>
//                  </>
//                ) : (
//                  <>
//                    <td className="px-4 py-2 border-t text-left">
//                      {item.namaPelatihan}
//                    </td>
//                    <td className="px-4 py-2 border-t text-left">
//                      {item.deskripsi}
//                    </td>
//                    <td className="px-4 py-2 border-t">{item.kategori}</td>
//                    <td className="px-4 py-2 border-t text-left">
//                      {item.capaian}
//                    </td>
//                    <td className="px-4 py-2 border-t">
//                      <button
//                        onClick={() => setShowTambahBranch(true)}
//                        className="px-2 py-1 rounded-[5px] bg-[#0F67B1] text-white hover:bg-[#0c599b] transition"
//                      >
//                        + Tambah Batch
//                      </button>
//                    </td>
//                  </>
//                )}

//                {/* Detail & Aksi umum */}
//                <td className="px-4 py-2 border-t">
//                  <button className="px-3 py-1 rounded-full bg-[#0F67B1] text-white hover:bg-[#0c599b] transition">
//                    Detail
//                  </button>
//                </td>
//                <td className="px-4 py-2 border-t flex justify-center">
//                  <button className="flex items-center text-[#0F67B1] shadow-none border-none">
//                    <FaRegEdit />
//                  </button>
//                </td>
//              </tr>
//            ))}
//          </tbody>
//        </table>
//      </div>

//      {/* ✅ Ganti dengan komponen Pagination */}
//      <Pagination
//        page={currentPage}
//        totalPages={totalPages}
//        onPageChange={(p) => setCurrentPage(p)}
//        perPage={rowsPerPage}
//        onPerPageChange={(n) => {
//          setRowsPerPage(n);
//          setCurrentPage(1);
//        }}
//        perPageOptions={[5, 10, 20]}
//      />

//      {/* Modal bagian perusahaan */}
//      {role === "perusahaan" && (
//        <>
//          <ConfirmModal
//            open={showConfirm}
//            onClose={() => setShowConfirm(false)}
//            message={
//              actionType === "Nonaktifkan"
//                ? "Apakah Anda yakin ingin menonaktifkan lowongan ini?"
//                : "Apakah Anda yakin ingin mengaktifkan lowongan ini?"
//            }
//            onConfirm={() => {
//              if (selectedIndex !== null) {
//                if (actionType === "Nonaktifkan") {
//                  handleNonaktifkan(selectedIndex);
//                  setSuccessMessage("Lowongan berhasil dinonaktifkan!");
//                  setShowSuccess(true);
//                } else if (actionType === "Aktifkan") {
//                  setShowFormAktifkan(true);
//                }
//              }
//              setShowConfirm(false);
//            }}
//          />

//          <SuccessModal
//            open={showSuccess}
//            title="Berhasil"
//            message={successMessage}
//            onClose={() => setShowSuccess(false)}
//          />

//          <FormAktifkanModal
//            open={showFormAktifkan}
//            onClose={() => setShowFormAktifkan(false)}
//            onSubmit={(formData) => {
//              if (selectedIndex !== null) {
//                handleAktifkan(selectedIndex);
//              }
//              setShowFormAktifkan(false);
//            }}
//          />
//        </>
//      )}

//      {/* Modal bagian lpk */}
//      {role === "lpk" && (
//        <TambahBranch
//          open={showTambahBranch}
//          onClose={() => setShowTambahBranch(false)}
//          onSubmit={(data) => {
//            console.log("Data batch baru:", data);
//            setShowTambahBranch(false);
//          }}
//        />
//      )}
//    </div>
//  );
//}

"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import Pagination from "@/app/components/dashboard/Pagination";
import ConfirmModal from "./ConfirmModal";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";

// ====== Type dummy (sesuaikan dengan milikmu) ======
export type StatusLowongan = "Aktif" | "Nonaktif";
export interface LowonganPerusahaan {
  id: number;
  posisi: string;
  deskripsi: string;
  kuota: number;
  tanggalTutup?: string;
  mulaiMagang?: string;
  selesaiMagang?: string;
  lokasi?: string;
  tugas?: string[] | string;
  persyaratan?: string[] | string;
  keuntungan?: string[] | string;
  status: StatusLowongan;
}

// ====== Helper ringkas teks list ======
const toArray = (v: unknown): string[] =>
  Array.isArray(v) ? v : typeof v === "string" && v.trim() ? [v] : [];
const summarize = (v: unknown, max = 2) => {
  const arr = toArray(v);
  return arr.length <= max
    ? arr.join(", ")
    : `${arr.slice(0, max).join(", ")} +${arr.length - max} lainnya`;
};
const dash = (v?: string | number) => (v ? String(v) : "-");

type Props = {
  initialData: LowonganPerusahaan[];          // kirim array dummy di page
  onDetail?: (id: number) => void;
  onEdit?: (id: number) => void;
  onToggleStatus?: (id: number, next: StatusLowongan) => void; // optional callback ke parent
};

export default function TableLowonganTerpasang({
  initialData,
  onDetail,
  onEdit,
  onToggleStatus,
}: Props) {
  // state lokal (tanpa endpoint)
  const [rows, setRows] = useState<LowonganPerusahaan[]>(
    Array.isArray(initialData) ? [...initialData] : []
  );

  // sort: Aktif di atas
  const sorted = useMemo(
    () =>
      [...rows].sort((a, b) =>
        a.status === b.status ? 0 : a.status === "Aktif" ? -1 : 1
      ),
    [rows]
  );

  // pagination
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(sorted.length / perPage));
  const start = (page - 1) * perPage;
  const current = useMemo(
    () => sorted.slice(start, start + perPage),
    [sorted, start, perPage]
  );

  // modal konfirmasi & sukses
  const [confirm, setConfirm] = useState<{ open: boolean; id?: number }>({
    open: false,
  });
  const [success, setSuccess] = useState<{ open: boolean; msg: string }>({
    open: false,
    msg: "",
  });

  const nextStatus = (s: StatusLowongan): StatusLowongan =>
    s === "Aktif" ? "Nonaktif" : "Aktif";

  const toggleNow = (id: number) => {
    setRows((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, status: nextStatus(r.status) } : r
      )
    );
    const row = rows.find((r) => r.id === id);
    const after = row ? nextStatus(row.status) : "Aktif";
    setSuccess({ open: true, msg: `Status berhasil diubah menjadi ${after}.` });
    onToggleStatus?.(id, after);
  };

  return (
    <div className="rounded-xl">
      {/* Full-bleed horizontal scroll */}
      <div className="-mx-6 overflow-x-auto">
        <div className="min-w-[2300px] px-6">
          <table className="w-full text-xs">
            <thead className="bg-[#0F67B1] text-white">
              <tr>
                {[
                  "NO",
                  "POSISI",
                  "DESKRIPSI",
                  "KUOTA",
                  "TANGGAL PENUTUPAN",
                  "PERIODE MULAI MAGANG",
                  "PERIODE SELESAI MAGANG",
                  "LOKASI PENEMPATAN",
                  "TUGAS & TANGGUNG JAWAB",
                  "PERSYARATAN",
                  "KEUNTUNGAN",
                  "STATUS",
                  "AKSI",
                ].map((h, i, arr) => (
                  <th
                    key={h}
                    className={`px-4 py-3 font-semibold text-center ${
                      i === 0 ? "rounded-tl-lg" : ""
                    } ${i === arr.length - 1 ? "rounded-tr-lg" : ""}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {current.length === 0 ? (
                <tr>
                  <td
                    colSpan={13}
                    className="px-4 py-10 text-center text-gray-500 bg-white"
                  >
                    Belum ada lowongan terpasang.
                  </td>
                </tr>
              ) : (
                current.map((item, idx) => (
                  <tr
                    key={item.id}
                    className="border-t border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 text-center whitespace-nowrap">
                      {start + idx + 1}
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-medium">{item.posisi}</span>
                    </td>
                    <td className="px-4 py-3 max-w-[360px]">
                      <p className="truncate">{item.deskripsi}</p>
                    </td>
                    <td className="px-4 py-3 text-center whitespace-nowrap">
                      {dash(item.kuota)}
                    </td>
                    <td className="px-4 py-3 text-center whitespace-nowrap">
                      {dash(item.tanggalTutup)}
                    </td>
                    <td className="px-4 py-3 text-center whitespace-nowrap">
                      {dash(item.mulaiMagang)}
                    </td>
                    <td className="px-4 py-3 text-center whitespace-nowrap">
                      {dash(item.selesaiMagang)}
                    </td>
                    <td className="px-4 py-3">{dash(item.lokasi)}</td>
                    <td className="px-4 py-3 max-w-[320px]">
                      <p className="truncate">{summarize(item.tugas)}</p>
                    </td>
                    <td className="px-4 py-3 max-w-[320px]">
                      <p className="truncate">{summarize(item.persyaratan)}</p>
                    </td>
                    <td className="px-4 py-3 max-w-[320px]">
                      <p className="truncate">{summarize(item.keuntungan)}</p>
                    </td>

                    {/* STATUS */}
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-block px-2 py-1 rounded text-[11px] font-semibold ${
                          item.status === "Aktif"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    {/* AKSI = Toggle + Detail + Edit */}
                    <td className="px-4 py-3">
                      <div className="flex justify-center items-center gap-3">
                        {/* Toggle status */}
                        <button
                          onClick={() => setConfirm({ open: true, id: item.id })}
                          className="inline-flex h-8 px-3 items-center rounded-[5px] bg-white border border-gray-300 hover:bg-gray-50"
                          title={
                            item.status === "Aktif" ? "Nonaktifkan" : "Aktifkan"
                          }
                        >
                          {item.status === "Aktif" ? "Nonaktifkan" : "Aktifkan"}
                        </button>

                        {/* Detail */}
                        {onDetail ? (
                          <button
                            onClick={() => onDetail(item.id)}
                            className="inline-flex h-8 px-3 items-center rounded-[5px] bg-[#0F67B1] text-white text-xs font-medium hover:bg-[#0c599b]"
                          >
                            Detail
                          </button>
                        ) : (
                          <Link
                            href={`/upload-lowongan/detail/${item.id}`}
                            className="inline-flex h-8 px-3 items-center rounded-[5px] bg-[#0F67B1] text-white text-xs font-medium hover:bg-[#0c599b]"
                          >
                            Detail
                          </Link>
                        )}

                        {/* Edit */}
                        {onEdit ? (
                          <button
                            aria-label="Edit"
                            onClick={() => onEdit(item.id)}
                            className="text-[#0F67B1] hover:opacity-80"
                            title="Edit"
                          >
                            <BiEdit size={18} />
                          </button>
                        ) : (
                          <Link
                            aria-label="Edit"
                            href={`/upload-lowongan/edit/terpasang/${item.id}`}
                            className="text-[#0F67B1] hover:opacity-80"
                            title="Edit"
                          >
                            <BiEdit size={18} />
                          </Link>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        perPage={perPage}
        onPerPageChange={(n) => {
          setPerPage(n);
          setPage(1);
        }}
        perPageOptions={[5, 10, 20]}
      />

      {/* Konfirmasi toggle */}
      <ConfirmModal
        open={confirm.open}
        onClose={() => setConfirm({ open: false })}
        message="Yakin ingin mengubah status lowongan ini?"
        onConfirm={() => {
          if (confirm.id != null) toggleNow(confirm.id);
          setConfirm({ open: false });
        }}
      />

      <SuccessModal
        open={success.open}
        title="Berhasil"
        message={success.msg}
        onClose={() => setSuccess({ open: false, msg: "" })}
      />
    </div>
  );
}
