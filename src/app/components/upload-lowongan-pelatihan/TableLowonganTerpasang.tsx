"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import Pagination from "@/app/components/dashboard/Pagination";
import ConfirmModal from "./ConfirmModal";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";
import { getLowonganPerusahaan } from "@/lib/api-lowongan";
import { Lowongan, StatusLowongan } from "@/types/lowongan";

export default function TableLowonganTerpasang() {
  const [rows, setRows] = useState<Lowongan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const [confirm, setConfirm] = useState<{ open: boolean; id?: number }>({
    open: false,
  });
  const [success, setSuccess] = useState<{ open: boolean; msg: string }>({
    open: false,
    msg: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await getLowonganPerusahaan();
        setRows(data);
      } catch (e: any) {
        setError(e?.response?.data?.message || "Gagal memuat data");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const totalPages = Math.max(1, Math.ceil(rows.length / perPage));
  const startIndex = (page - 1) * perPage;

  const current = useMemo(
    () => rows.slice(startIndex, startIndex + perPage),
    [rows, startIndex, perPage]
  );

  const nextStatus = (s: StatusLowongan): StatusLowongan =>
    s === "Aktif" ? "Nonaktif" : "Aktif";

  const toggleNow = (id: number) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: nextStatus(r.status) } : r))
    );
    const row = rows.find((r) => r.id === id);
    const after = row ? nextStatus(row.status) : "Aktif";
    setSuccess({ open: true, msg: `Status berhasil diubah menjadi ${after}.` });
  };

  const toArray = (v: string[] | string | undefined | null): string[] =>
    Array.isArray(v) ? v : typeof v === "string" && v.trim() ? [v] : [];

  const summarize = (v: string[] | string | undefined, max = 2) => {
    const arr = toArray(v);
    return arr.length <= max
      ? arr.join(", ")
      : `${arr.slice(0, max).join(", ")} +${arr.length - max} lainnya`;
  };

  const dash = (v?: string | number | null) => (v ? String(v) : "-");

  // ===== Header: padding kecil + 4 kolom jadi 2 baris =====
  const headerCells: { key: string; node: React.ReactNode }[] = [
    { key: "NO", node: "NO" },
    { key: "POSISI", node: "POSISI" },
    { key: "DESKRIPSI", node: "DESKRIPSI" },
    { key: "KUOTA", node: "KUOTA" },
    {
      key: "TANGGAL PENUTUPAN",
      node: (
        <>
          <span className="block">TANGGAL</span>
          <span className="block">PENUTUPAN</span>
        </>
      ),
    },
    {
      key: "PERIODE MULAI MAGANG",
      node: (
        <>
          <span className="block">PERIODE MULAI</span>
          <span className="block">MAGANG</span>
        </>
      ),
    },
    {
      key: "PERIODE SELESAI MAGANG",
      node: (
        <>
          <span className="block">PERIODE SELESAI</span>
          <span className="block">MAGANG</span>
        </>
      ),
    },
    { key: "LOKASI PENEMPATAN", node: "LOKASI PENEMPATAN" },
    {
      key: "TUGAS & TANGGUNG JAWAB",
      node: (
        <>
          <span className="block">TUGAS &amp; TANGGUNG</span>
          <span className="block">JAWAB</span>
        </>
      ),
    },
    { key: "PERSYARATAN", node: "PERSYARATAN" },
    { key: "KEUNTUNGAN", node: "KEUNTUNGAN" },
    { key: "STATUS", node: "STATUS" },
    { key: "AKSI", node: "AKSI" },
  ];

  return (
    <div className="rounded-xl">
      <div className="-mx-6 overflow-x-auto">
        <div className="min-w-[2300px] px-6">
          <table className="w-full text-xs">
            <thead className="bg-[#0F67B1] text-white">
              <tr>
                {headerCells.map((h, i, arr) => (
                  <th
                    key={h.key}
                    className={[
                      "px-3 py-1.5",               // lebih mepet atas-bawah
                      "text-[11px] leading-tight", // font & line-height rapat
                      "font-semibold text-center align-middle",
                      i === 0 ? "rounded-tl-lg" : "",
                      i === arr.length - 1 ? "rounded-tr-lg" : "",
                    ].join(" ")}
                  >
                    {h.node}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={13} className="px-4 py-10 text-center bg-white">
                    Memuat…
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={13} className="px-4 py-10 text-center bg-white text-red-600">
                    {error}
                  </td>
                </tr>
              ) : current.length === 0 ? (
                <tr>
                  <td colSpan={13} className="px-4 py-10 text-center text-gray-500 bg-white">
                    Belum ada lowongan terpasang.
                  </td>
                </tr>
              ) : (
                current.map((item, idx) => (
                  <tr key={item.id} className="border-t border-gray-100 hover:bg-gray-50">
                    {/* body padding diseragamkan agar match header */}
                    <td className="px-3 py-2 text-center whitespace-nowrap">
                      {startIndex + idx + 1}
                    </td>
                    <td className="px-3 py-2">
                      <span className="font-medium">{item.posisi}</span>
                    </td>
                    <td className="px-3 py-2 max-w-[360px]">
                      <p className="truncate">{item.deskripsi}</p>
                    </td>
                    <td className="px-3 py-2 text-center whitespace-nowrap">
                      {dash(item.kuota)}
                    </td>
                    <td className="px-3 py-2 text-center whitespace-nowrap">
                      {dash(item.deadline_lamaran)}
                    </td>
                    <td className="px-3 py-2 text-center whitespace-nowrap">
                      {dash(item.mulaiMagang)}
                    </td>
                    <td className="px-3 py-2 text-center whitespace-nowrap">
                      {dash(item.selesaiMagang)}
                    </td>
                    <td className="px-3 py-2">{dash(item.lokasi_penempatan)}</td>
                    <td className="px-3 py-2 max-w-[320px]">
                      <p className="truncate">{summarize(item.tugas)}</p>
                    </td>
                    <td className="px-3 py-2 max-w-[320px]">
                      <p className="truncate">{summarize(item.persyaratan)}</p>
                    </td>
                    <td className="px-3 py-2 max-w-[320px]">
                      <p className="truncate">{summarize(item.keuntungan)}</p>
                    </td>

                    {/* STATUS */}
                    <td className="px-3 py-2 text-center">
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

                    {/* AKSI */}
                    <td className="px-3 py-2">
                      <div className="flex justify-center items-center gap-3">
                        <button
                          onClick={() => setConfirm({ open: true, id: item.id })}
                          className="inline-flex h-8 px-3 items-center rounded-[5px] bg-white border border-gray-300 hover:bg-gray-50"
                          title={item.status === "Aktif" ? "Nonaktifkan" : "Aktifkan"}
                        >
                          {item.status === "Aktif" ? "Nonaktifkan" : "Aktifkan"}
                        </button>

                        <Link
                          href={`/upload-lowongan/detail/${item.id}`}
                          className="inline-flex h-8 px-3 items-center rounded-[5px] bg-[#0F67B1] text-white text-xs font-medium hover:bg-[#0c599b] transition"
                        >
                          Detail
                        </Link>

                        <Link
                          aria-label="Edit"
                          href={`/upload-lowongan/edit/terpasang/${item.id}`}
                          className="text-[#0F67B1] hover:opacity-80"
                          title="Edit"
                        >
                          <BiEdit size={18} />
                        </Link>
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
        onPageChange={(p) => setPage(p)}
        perPage={perPage}
        onPerPageChange={(n) => {
          setPerPage(n);
          setPage(1);
        }}
        perPageOptions={[5, 10, 20]}
      />

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
