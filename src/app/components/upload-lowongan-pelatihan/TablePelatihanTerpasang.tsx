"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FaHistory } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import Pagination from "@/app/components/dashboard/Pagination";
import { Pelatihan, Batch } from "@/types/pelatihan";
import ModalTambahBatch from "./ModalTambahBatch";
import ModalHistoryBatch from "./ModalHistoryBatch";
import ModalConfirmDelete from "./ModalConfirmDelete";
import { getPelatihanSaya, deletePelatihan } from "@/lib/api-pelatihan";

export default function TablePelatihanTerpasang() {
  const [rows, setRows] = useState<Pelatihan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showAddBatch, setShowAddBatch] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

useEffect(() => {
  (async () => {
    try {
      const all = await getPelatihanSaya();
      const published = all.filter((r) => Array.isArray(r.historyBatch));
      setRows(published);
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

  const selectedPel = selectedId ? rows.find((r) => r.id === selectedId) : undefined;
  const selectedBatches: Batch[] = selectedPel?.batches ?? [];
  const nextBatchName = `Batch ${selectedBatches.length + 1}`;

  const openAddBatch = (id: number) => {
    setSelectedId(id);
    setShowAddBatch(true);
  };
  const openHistory = (id: number) => {
    setSelectedId(id);
    setShowHistory(true);
  };
  const openDelete = (id: number) => {
    setSelectedId(id);
    setShowDelete(true);
  };

  const confirmDelete = async () => {
    if (!selectedId) return;
    try {
      await deletePelatihan(selectedId);
      setRows((prev) => prev.filter((r) => r.id !== selectedId));
      setShowDelete(false);
    } catch (e: any) {
      alert(e?.response?.data?.message || "Gagal menghapus");
    }
  };

  return (
    <div className="rounded-xl">
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
                  "BATCH",
                  "DETAIL",
                  "AKSI",
                ].map((h, i, arr) => (
                  <th
                    key={i}
                    className={`px-4 py-3 font-semibold text-center ${
                      i === 0 ? "rounded-tl-lg" : ""
                    } ${i === arr.length - 1 ? "rounded-tr-lg" : ""} ${
                      h === "BATCH"
                        ? "w-[170px] text-center"
                        : h === "DETAIL"
                        ? "w-[120px] text-center"
                        : h === "AKSI"
                        ? "w-[140px] text-center"
                        : "text-left"
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
                  <td colSpan={8} className="px-4 py-10 text-center bg-white">
                    Memuat…
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center bg-white text-red-600">
                    {error}
                  </td>
                </tr>
              ) : current.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-gray-500 bg-white">
                    Belum ada pelatihan terpasang.
                  </td>
                </tr>
              ) : (
                current.map((item, idx) => (
                  <tr
                    key={item.id}
                    className="border-t border-gray-100 align-top text-xs hover:bg-gray-50"
                  >
                    <td className="px-4 py-3 text-gray-800 whitespace-nowrap">
                      {startIndex + idx + 1}
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

                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => openAddBatch(item.id)}
                        className="inline-flex items-center justify-center h-9 w-[140px] rounded-[5px] bg-[#0F67B1] text-white font-medium shadow-md hover:bg-[#0c599b] transition text-sm"
                      >
                        Tambah Batch
                      </button>
                    </td>

                    <td className="px-4 py-3 text-center">
                      <Link
                        href={`/upload-pelatihan/detail/${item.id}`}
                        className="inline-flex items-center justify-center h-9 w-[100px] rounded-[5px] bg-[#0F67B1] text-white font-medium shadow-md hover:bg-[#0c599b] transition text-sm"
                      >
                        Detail
                      </Link>
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex justify-center items-center gap-3">
                        <button
                          aria-label="History Batch"
                          onClick={() => openHistory(item.id)}
                          className="text-[#0F67B1] hover:opacity-80 shadow-none"
                          title="History Batch"
                        >
                          <FaHistory size={16} />
                        </button>

                        <Link
                          aria-label="Edit"
                          href={`/upload-pelatihan/edit/published/${item.id}`}
                          className="text-[#0F67B1] hover:opacity-80 shadow-none"
                          title="Edit"
                        >
                          <BiEdit size={18} />
                        </Link>

                        <button
                          aria-label="Hapus"
                          onClick={() => openDelete(item.id)}
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

      <ModalTambahBatch
        open={showAddBatch && selectedId !== null}
        onClose={() => setShowAddBatch(false)}
        nextBatchName={nextBatchName}
        onSave={async ({ start, end }) => {
          console.warn("TODO: panggil endpoint tambah batch untuk pelatihan", selectedId, {
            start,
            end,
          });
          setShowAddBatch(false);
        }}
      />

      <ModalHistoryBatch
        open={showHistory && selectedId !== null}
        onClose={() => setShowHistory(false)}
        batches={selectedBatches}
      />

      <ModalConfirmDelete
        open={showDelete && selectedId !== null}
        onClose={() => setShowDelete(false)}
        onConfirm={confirmDelete}
        title="Hapus Pelatihan"
        message="Yakin Anda ingin menghapus pelatihan ini?"
      />
    </div>
  );
}
