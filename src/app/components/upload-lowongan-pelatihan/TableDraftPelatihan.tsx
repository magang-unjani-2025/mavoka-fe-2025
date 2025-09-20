//"use client";

//import React, { useMemo, useState } from "react";
//import Link from "next/link";
//import { BiEdit } from "react-icons/bi";
//import { BsTrash } from "react-icons/bs";
//import Pagination from "@/app/components/dashboard/Pagination";
//import { dataLpkUnggah } from "@/app/data/dataLpkUnggah";
//import { Pelatihan } from "@/types/pelatihan";

//type Props = {
//  initialData?: Pelatihan[];
//  onDetail?: (id: number) => void;
//  onEdit?: (id: number) => void;
//  onDelete?: (id: number) => void;
//};

//export default function TableDraftPelatihan({
//  initialData,
//  onDetail,
//  onEdit,
//  onDelete,
//}: Props) {
//  const [rows, setRows] = useState<Pelatihan[]>(initialData ?? dataLpkUnggah);
//  const [perPage, setPerPage] = useState(10);
//  const [page, setPage] = useState(1);

//  const totalPages = Math.max(1, Math.ceil(rows.length / perPage));
//  const start = (page - 1) * perPage;

//  const current = useMemo(
//    () => rows.slice(start, start + perPage),
//    [rows, start, perPage]
//  );

//  const handleDelete = (id: number) => {
//    setRows((prev) => prev.filter((r) => r.id !== id));
//    onDelete?.(id);
//  };

//  return (
//    <div className="rounded-xl">
//      {/* full-bleed horizontal scroll supaya kolom kanan tidak kepotong */}
//      <div className="-mx-6 overflow-x-auto">
//        <div className="min-w-[1400px] px-6">
//          <table className="w-full text-xs">
//            <thead className="bg-[#0F67B1] text-white">
//              <tr>
//                {[
//                  "NO",
//                  "NAMA PELATIHAN",
//                  "DESKRIPSI",
//                  "KATEGORI",
//                  "CAPAIAN PEMBELAJARAN",
//                  "DETAIL",
//                  "AKSI",
//                ].map((h, i, arr) => (
//                  <th
//                    key={h}
//                    className={`px-4 py-3 font-semibold ${
//                      i === 0 ? "rounded-tl-lg" : ""
//                    } ${i === arr.length - 1 ? "rounded-tr-lg" : ""} ${
//                      h === "DETAIL"
//                        ? "w-[120px] text-center"
//                        : h === "AKSI"
//                        ? "w-[140px] text-center"
//                        : "text-center"
//                    }`}
//                  >
//                    {h}
//                  </th>
//                ))}
//              </tr>
//            </thead>

//            <tbody>
//              {current.length === 0 ? (
//                <tr>
//                  <td
//                    colSpan={7}
//                    className="px-4 py-10 text-center text-gray-500 bg-white"
//                  >
//                    Belum ada draft pelatihan. Klik <b>Tambah</b> untuk menambah data.
//                  </td>
//                </tr>
//              ) : (
//                current.map((item, idx) => (
//                  <tr
//                    key={item.id}
//                    className="border-t border-gray-100 align-center text-xs hover:bg-gray-50"
//                  >
//                    <td className="px-4 py-3 text-gray-800 whitespace-nowrap">
//                      {start + idx + 1}
//                    </td>

//                    <td className="px-4 py-3 text-gray-800">
//                      <span className="font-medium">{item.namaPelatihan}</span>
//                    </td>

//                    <td className="px-4 py-3 text-gray-800 max-w-[320px]">
//                      <p className="truncate text-xs">{item.deskripsi}</p>
//                    </td>

//                    <td className="px-4 py-3 text-gray-800 whitespace-nowrap">
//                      {item.kategori}
//                    </td>

//                    <td className="px-4 py-3 text-gray-800 max-w-[320px]">
//                      <p className="truncate text-xs">{item.capaian}</p>
//                    </td>

//                    {/* DETAIL */}
//                    <td className="px-4 py-3 text-center">
//                      {onDetail ? (
//                        <button
//                          onClick={() => onDetail(item.id)}
//                          className="inline-flex items-center justify-center h-9 w-[100px] rounded-[5px] bg-[#0F67B1] text-white font-medium shadow-none hover:bg-[#0c599b] transition text-sm"
//                        >
//                          Detail
//                        </button>
//                      ) : (
//                        <Link
//                          href={`/upload-pelatihan/detail/${item.id}`}
//                          className="inline-flex items-center justify-center h-9 w-[100px] rounded-[5px] bg-[#0F67B1] text-white font-medium shadow-none hover:bg-[#0c599b] transition text-sm"
//                        >
//                          Detail
//                        </Link>
//                      )}
//                    </td>

//                    {/* AKSI */}
//                    <td>
//                      <div className="flex justify-center items-center gap-3">
//                        {onEdit ? (
//                          <button
//                            aria-label="Edit"
//                            onClick={() => onEdit(item.id)}
//                            className="text-[#0F67B1] hover:opacity-80 shadow-none"
//                            title="Edit"
//                          >
//                            <BiEdit size={18} />
//                          </button>
//                        ) : (
//                          <Link
//  aria-label="Edit"
//  href={`/upload-pelatihan/edit/draft/${item.id}`}
//  className="text-[#0F67B1] hover:opacity-80 shadow-none"
//  title="Edit"
//>
//  <BiEdit size={18} />
//</Link>

//                        )}

//                        <button
//                          aria-label="Hapus"
//                          onClick={() => handleDelete(item.id)}
//                          className="text-red-600 hover:opacity-80 shadow-none"
//                          title="Hapus"
//                        >
//                          <BsTrash size={16} />
//                        </button>
//                      </div>
//                    </td>
//                  </tr>
//                ))
//              )}
//            </tbody>
//          </table>
//        </div>
//      </div>

//      <Pagination
//        page={page}
//        totalPages={totalPages}
//        onPageChange={(p) => setPage(p)}
//        perPage={perPage}
//        onPerPageChange={(n) => {
//          setPerPage(n);
//          setPage(1);
//        }}
//        perPageOptions={[5, 10, 20]}
//      />
//    </div>
//  );
//}


"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import Pagination from "@/app/components/dashboard/Pagination";
import { Pelatihan } from "@/types/pelatihan";
import { getPelatihanSaya, deletePelatihan } from "@/lib/api-pelatihan";

type Props = {
  initialData?: Pelatihan[];
  onDetail?: (id: number) => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
};

export default function TableDraftPelatihan({
  initialData,
  onDetail,
  onEdit,
  onDelete,
}: Props) {
  const [rows, setRows] = useState<Pelatihan[]>(initialData ?? []);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState<string | null>(null);

  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);

useEffect(() => {
  (async () => {
    try {
      const all = await getPelatihanSaya();
      // Draft = history_batch null/undefined (bukan array)
      const drafts = all.filter((r) => !Array.isArray(r.historyBatch));
      setRows(drafts);
    } catch (e: any) {
      setError(e?.response?.data?.message || "Gagal memuat data");
    } finally {
      setLoading(false);
    }
  })();
}, []);


  const totalPages = Math.max(1, Math.ceil(rows.length / perPage));
  const start = (page - 1) * perPage;

  const current = useMemo(
    () => rows.slice(start, start + perPage),
    [rows, start, perPage]
  );

  const handleDelete = async (id: number) => {
    const ok = window.confirm("Yakin ingin menghapus pelatihan ini?");
    if (!ok) return;

    try {
      await deletePelatihan(id);
      setRows((prev) => prev.filter((r) => r.id !== id));
      onDelete?.(id);
    } catch (e: any) {
      alert(e?.response?.data?.message || "Gagal menghapus");
    }
  };

  return (
    <div className="rounded-xl">
      {/* full-bleed horizontal scroll supaya kolom kanan tidak kepotong */}
      <div className="-mx-6 overflow-x-auto">
        <div className="min-w-[1400px] px-6">
          <table className="w-full text-xs">
            <thead className="bg-[#0F67B1] text-white">
              <tr>
                {[
                  "NO",
                  "NAMA PELATIHAN",
                  "DESKRIPSI",
                  "KATEGORI",
                  "CAPAIAN PEMBELAJARAN",
                  "DETAIL",
                  "AKSI",
                ].map((h, i, arr) => (
                  <th
                    key={h}
                    className={`px-4 py-3 font-semibold ${
                      i === 0 ? "rounded-tl-lg" : ""
                    } ${i === arr.length - 1 ? "rounded-tr-lg" : ""} ${
                      h === "DETAIL"
                        ? "w-[120px] text-center"
                        : h === "AKSI"
                        ? "w-[140px] text-center"
                        : "text-center"
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center bg-white">
                    Memuat…
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center bg-white text-red-600">
                    {error}
                  </td>
                </tr>
              ) : current.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-10 text-center text-gray-500 bg-white"
                  >
                    Belum ada draft pelatihan. Klik <b>Tambah</b> untuk menambah data.
                  </td>
                </tr>
              ) : (
                current.map((item, idx) => (
                  <tr
                    key={item.id}
                    className="border-t border-gray-100 align-center text-xs hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 text-gray-800 whitespace-nowrap">
                      {start + idx + 1}
                    </td>

                    <td className="px-4 py-3 text-gray-800">
                      <span className="font-medium">{item.namaPelatihan}</span>
                    </td>

                    <td className="px-4 py-3 text-gray-800 max-w-[320px]">
                      <p className="truncate text-xs">{item.deskripsi}</p>
                    </td>

                    <td className="px-4 py-3 text-gray-800 whitespace-nowrap">
                      {item.kategori}
                    </td>

                    <td className="px-4 py-3 text-gray-800 max-w-[320px]">
                      <p className="truncate text-xs">{item.capaian}</p>
                    </td>

                    {/* DETAIL */}
                    <td className="px-4 py-3 text-center">
                      {onDetail ? (
                        <button
                          onClick={() => onDetail(item.id)}
                          className="inline-flex items-center justify-center h-9 w-[100px] rounded-[5px] bg-[#0F67B1] text-white font-medium shadow-none hover:bg-[#0c599b] transition text-sm"
                        >
                          Detail
                        </button>
                      ) : (
                        <Link
                          href={`/upload-pelatihan/detail/${item.id}`}
                          className="inline-flex items-center justify-center h-9 w-[100px] rounded-[5px] bg-[#0F67B1] text-white font-medium shadow-none hover:bg-[#0c599b] transition text-sm"
                        >
                          Detail
                        </Link>
                      )}
                    </td>

                    {/* AKSI */}
                    <td>
                      <div className="flex justify-center items-center gap-3">
                        {onEdit ? (
                          <button
                            aria-label="Edit"
                            onClick={() => onEdit(item.id)}
                            className="text-[#0F67B1] hover:opacity-80 shadow-none"
                            title="Edit"
                          >
                            <BiEdit size={18} />
                          </button>
                        ) : (
                          <Link
                            aria-label="Edit"
                            href={`/upload-pelatihan/edit/draft/${item.id}`}
                            className="text-[#0F67B1] hover:opacity-80 shadow-none"
                            title="Edit"
                          >
                            <BiEdit size={18} />
                          </Link>
                        )}

                        <button
                          aria-label="Hapus"
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 hover:opacity-80 shadow-none"
                          title="Hapus"
                        >
                          <BsTrash size={16} />
                        </button>
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
    </div>
  );
}
