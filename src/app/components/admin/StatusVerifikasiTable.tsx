"use client";

import React, { useState } from "react";

interface UserData {
  no: number;
  tanggal: string;
  username: string;
  email: string;
  link: string;
  role: string;
  label: string;
}

const initialData: UserData[] = [
  {
    no: 1,
    tanggal: "14/07/2026",
    username: "Inkaofficial",
    email: "Inkajkt@inka.co.id",
    link: "https://www.inka.co.id",
    role: "Perusahaan",
    label: "Belum",
  },
  {
    no: 2,
    tanggal: "14/07/2026",
    username: "Mandiri Tbk",
    email: "Mandiricare@bankmandiri.co.id",
    link: "https://www.bankmandiri.co.id",
    role: "Perusahaan",
    label: "Belum",
  },
  {
    no: 3,
    tanggal: "14/07/2026",
    username: "SMKN1Yogyakarta",
    email: "smknegerilyogya@gmail.com",
    link: "https://smkn1yogya.sch.id",
    role: "Sekolah",
    label: "Belum",
  },
  {
    no: 4,
    tanggal: "13/07/2026",
    username: "SMKN1Yogyakarta",
    email: "smknegerilyogya@gmail.com",
    link: "https://smkpirijogya.sch.id",
    role: "Sekolah",
    label: "Sudah",
  },
  {
    no: 5,
    tanggal: "13/07/2026",
    username: "SMKN1Yogyakarta",
    email: "smknegerilyogya@gmail.com",
    link: "https://smkpirijogya.sch.id",
    role: "Sekolah",
    label: "Sudah",
  },
  {
    no: 6,
    tanggal: "13/07/2026",
    username: "SMKN1Yogyakarta",
    email: "smknegerilyogya@gmail.com",
    link: "https://smkpirijogya.sch.id",
    role: "Sekolah",
    label: "Sudah",
  },
  {
    no: 7,
    tanggal: "13/07/2026",
    username: "SMKN1Yogyakarta",
    email: "smknegerilyogya@gmail.com",
    link: "https://smkpirijogya.sch.id",
    role: "Sekolah",
    label: "Sudah",
  },
  {
    no: 8,
    tanggal: "13/07/2026",
    username: "SMKN1Yogyakarta",
    email: "smknegerilyogya@gmail.com",
    link: "https://smkpirijogya.sch.id",
    role: "Lembaga Pelatihan",
    label: "Sudah",
  },
  {
    no: 9,
    tanggal: "13/07/2026",
    username: "SMKN1Yogyakarta",
    email: "smknegerilyogya@gmail.com",
    link: "https://smkpirijogya.sch.id",
    role: "Lembaga Pelatihan",
    label: "Sudah",
  },
  {
    no: 10,
    tanggal: "13/07/2026",
    username: "SMKN1Yogyakarta",
    email: "smknegerilyogya@gmail.com",
    link: "https://smkpirijogya.sch.id",
    role: "Lembaga Pelatihan",
    label: "Sudah",
  },
  {
    no: 14,
    tanggal: "13/07/2026",
    username: "SMKN1Yogyakarta",
    email: "smknegerilyogya@gmail.com",
    link: "https://smkpirijogya.sch.id",
    role: "Sekolah",
    label: "Sudah",
  },
  {
    no: 15,
    tanggal: "13/07/2026",
    username: "SMKN1Yogyakarta",
    email: "smknegerilyogya@gmail.com",
    link: "https://smkpirijogya.sch.id",
    role: "Sekolah",
    label: "Sudah",
  },
];

export default function StatusVerifikasiTable() {
  const [roleFilter, setRoleFilter] = useState("Semua");
  const [labelFilter, setLabelFilter] = useState("Semua");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = initialData.filter((item) => {
    return (
      (roleFilter === "Semua" || item.role === roleFilter) &&
      (labelFilter === "Semua" || item.label === labelFilter)
    );
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex gap-4 mb-4">
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="text-sm border border-gray-300 rounded-lg px-3 py-2 text-gray-700"
        >
          <option value="Semua">Role: Semua</option>
          <option value="Perusahaan">Perusahaan</option>
          <option value="Lembaga Pelatihan">Lembaga Pelatihan</option>
          <option value="Sekolah">Sekolah</option>
        </select>

        <select
          value={labelFilter}
          onChange={(e) => setLabelFilter(e.target.value)}
          className="text-sm border border-gray-300 rounded-lg px-3 py-2 text-gray-700"
        >
          <option value="Semua">Label: Semua</option>
          <option value="Belum">Belum</option>
          <option value="Sudah">Sudah</option>
        </select>
      </div>

      <div className="overflow-auto rounded-xl border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0F67B1] text-white text-center text-xs font-bold">
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3">Tanggal</th>
              <th className="px-4 py-3">Username</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Link Website</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Label</th>
              <th className="px-4 py-2 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.no} className="hover:bg-gray-50 text-xs text-center">
                <td className="px-4 py-2 border-t">{item.no}</td>
                <td className="px-4 py-2 border-t">{item.tanggal}</td>
                <td className="px-4 py-2 border-t text-left">{item.username}</td>
                <td className="px-4 py-2 border-t text-left">{item.email}</td>
                <td className="px-4 py-2 border-t">
                  <a
                    className="text-xs underline"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.link}
                  </a>
                </td>
                <td className="px-4 py-2 border-t">{item.role}</td>
                <td className="px-4 py-2 border-t">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.label === "Belum"
                        ? "bg-[#FFE0E0] text-[#D30000]"
                        : "bg-[#CDFFCD] text-[#007F00]"
                    }`}
                  >
                    {item.label}
                  </span>
                </td>
                <td className="px-4 py-2 border-t text-center">
                  {item.label === "Belum" ? (
                    <div className="flex gap-2 justify-center">
                      <button
                        className="px-3 py-1 rounded-lg bg-[#28A745] text-white hover:bg-green-500 transition"
                        onClick={() =>
                          console.log(`Verifikasi: ${item.username}`)
                        }
                      >
                        Verifikasi
                      </button>
                      <button
                        className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                        onClick={() => console.log(`Tolak: ${item.username}`)}
                      >
                        Tolak
                      </button>
                    </div>
                  ) : (
                    <button
                      disabled
                      className="px-3 py-1 rounded-lg bg-gray-300 text-gray-500 cursor-not-allowed"
                    >
                      Sudah
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="py-2 px-3 flex items-center gap-4 mt-4 text-xs text-white bg-[#0F67B1] rounded-b-xl justify-end">
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
            {startIndex + 1}-
            {Math.min(startIndex + rowsPerPage, filteredData.length)} of{" "}
            {filteredData.length}
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
