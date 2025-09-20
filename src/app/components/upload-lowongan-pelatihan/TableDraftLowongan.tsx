"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import Pagination from "@/app/components/dashboard/Pagination";
import { Lowongan } from "@/types/lowongan";


type Props = {
  initialData?: Lowongan[];
  onDetail?: (id: number) => void;
  onEdit?: (id: number) => void;
};

const toArray = (v: unknown): string[] =>
  Array.isArray(v) ? v : typeof v === "string" && v.trim() ? [v] : [];
const summarize = (v: unknown, max = 2) => {
  const arr = toArray(v);
  return arr.length <= max ? arr.join(", ") : `${arr.slice(0, max).join(", ")} +${arr.length - max} lainnya`;
};

export default function TableDraftLowongan({ initialData, onDetail, onEdit }: Props) {
  const data: Lowongan[] = Array.isArray(initialData) ? initialData : [];

  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(data.length / perPage));
  const start = (page - 1) * perPage;
  const current = useMemo(() => data.slice(start, start + perPage), [data, start, perPage]);

  return (
    <div className="rounded-xl">
      <div className="-mx-6 overflow-x-auto">
        <div className="min-w-[1900px] px-6">
          <table className="w-full text-xs">
            <thead className="bg-[#0F67B1] text-white">
              <tr>
                {[
                  "NO","POSISI","DESKRIPSI","KUOTA","TANGGAL PENUTUPAN",
                  "PERIODE MULAI MAGANG","PERIODE SELESAI MAGANG","LOKASI PENEMPATAN",
                  "TUGAS & TANGGUNG JAWAB","PERSYARATAN","KEUNTUNGAN","AKSI",
                ].map((h, i, arr) => (
                  <th
                    key={h}
                    className={`px-4 py-3 font-semibold ${
                      i === 0 ? "rounded-tl-lg" : ""
                    } ${i === arr.length - 1 ? "rounded-tr-lg" : ""} text-center`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {current.length === 0 ? (
                <tr>
                  <td colSpan={12} className="px-4 py-10 text-center text-gray-500 bg-white">
                    Belum ada draft lowongan. Klik <b>Buat Lowongan Baru</b> untuk menambah data.
                  </td>
                </tr>
              ) : (
                current.map((item, idx) => (
                  <tr key={item.id} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-center">{start + idx + 1}</td>
                    <td className="px-4 py-3 font-medium">{item.posisi}</td>
                    <td className="px-4 py-3 max-w-[360px] truncate">{item.deskripsi}</td>
                    <td className="px-4 py-3 text-center">{item.kuota}</td>
                    <td className="px-4 py-3 text-center">{item.tanggalTutup}</td>
                    <td className="px-4 py-3 text-center">{item.mulaiMagang}</td>
                    <td className="px-4 py-3 text-center">{item.selesaiMagang}</td>
                    <td className="px-4 py-3">{item.lokasi}</td>
                    <td className="px-4 py-3 max-w-[320px] truncate">{summarize(item.tugas)}</td>
                    <td className="px-4 py-3 max-w-[320px] truncate">{summarize(item.persyaratan)}</td>
                    <td className="px-4 py-3 max-w-[320px] truncate">{summarize(item.keuntungan)}</td>

                    {/* AKSI */}
                    <td className="px-4 py-3">
                      <div className="flex justify-center items-center gap-3">
                        {/* Detail */}
                        {onDetail ? (
                          <button
                            onClick={() => onDetail(item.id)}
                            className="inline-flex items-center justify-center h-8 px-3 rounded-[5px] bg-[#0F67B1] text-white text-xs font-medium hover:bg-[#0c599b] transition"
                          >
                            Detail
                          </button>
                        ) : (
                          <Link
                            href={`/upload-lowongan/detail/${item.id}`}
                            className="inline-flex items-center justify-center h-8 px-3 rounded-[5px] bg-[#0F67B1] text-white text-xs font-medium hover:bg-[#0c599b] transition"
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
                          >
                            <BiEdit size={18} />
                          </button>
                        ) : (
                          <Link
                            href={`/upload-lowongan/edit/draft/${item.id}`}
                            className="text-[#0F67B1] hover:opacity-80"
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
        onPerPageChange={(n) => { setPerPage(n); setPage(1); }}
        perPageOptions={[5, 10, 20]}
      />
    </div>
  );
}
