"use client";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

interface DataItem {
  id: number;
  posisi?: string; 
  namaPelatihan?: string;
  deskripsi: string;
  kuota?: number; 
  kategori?: string;
  capaian: string;
  status: "Aktif" | "Tidak";
}

type Props = {
  role: "perusahaan" | "lpk";
  data: DataItem[];
};

export default function TableDraftLowongan({ role, data }: Props) {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = [...data].sort((a, b) =>
    a.status === b.status ? 0 : a.status === "Aktif" ? -1 : 1
  );

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = sortedData.slice(startIndex, startIndex + rowsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="mb-10">
      <div className="overflow-auto rounded-xl border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0F67B1] text-white text-center text-xs font-bold">
              <th className="px-4 py-3">NO</th>
              <th className="px-4 py-3">
                {role === "perusahaan" ? "POSISI" : "NAMA PELATIHAN"}
              </th>
              <th className="px-4 py-3">DESKRIPSI</th>

              {role === "perusahaan" ? (
                <th className="px-4 py-3">KUOTA</th>
              ) : (
                <th className="px-4 py-3">KATEGORI</th>
              )}

              <th className="px-4 py-3">CAPAIAN PEMBELAJARAN</th>

              {role === "perusahaan" && (
                <th className="px-4 py-3">STATUS</th>
              )}

              {role === "perusahaan" && (
                <th className="px-4 py-3">AKSI STATUS</th>
              )}

              <th className="px-4 py-3">DETAIL</th>
              <th className="px-4 py-3">AKSI</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 text-xs text-center">
                <td className="px-4 py-2 border-t">{startIndex + index + 1}</td>
                <td className="px-4 py-2 border-t text-left">
                  {role === "perusahaan" ? item.posisi : item.namaPelatihan}
                </td>
                <td className="px-4 py-2 border-t text-left">
                  {item.deskripsi}
                </td>

                {role === "perusahaan" ? (
                  <td className="px-4 py-2 border-t">{item.kuota}</td>
                ) : (
                  <td className="px-4 py-2 border-t">{item.kategori}</td>
                )}

                <td className="px-4 py-2 border-t text-left">{item.capaian}</td>

                {role === "perusahaan" && (
                  <td className="px-4 py-2 border-t text-center"></td>
                )}
                {role === "perusahaan" && (
                  <td className="px-4 py-2 border-t text-center"></td>
                )}

                <td className="px-4 py-2 border-t">
                  <button className="px-3 py-1 rounded-full bg-[#0F67B1] text-white hover:bg-[#0c599b] transition">
                    Detail
                  </button>
                </td>
                <td className="px-4 py-2 border-t flex justify-center">
                  <button className="flex items-center text-[#0F67B1] shadow-none border-none">
                    <FaRegEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="py-2 px-3 flex items-center gap-4 mt-2 text-xs rounded-b-xl justify-end">
        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="text-xs border border-gray-300 rounded px-2 py-1 text-gray-700"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span>
            {startIndex + 1}-{Math.min(startIndex + rowsPerPage, data.length)} of{" "}
            {data.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-2 py-1 rounded bg-white ${
                currentPage === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-2 py-1 rounded bg-white ${
                currentPage === totalPages
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

