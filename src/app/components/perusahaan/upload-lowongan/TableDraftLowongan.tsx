"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import ConfirmModal from "./ConfirmModal";
import FormAktifkanModal from "./FormAktifkanModal";
import SuccessModal from "@/app/components/registrasi/PopupBerhasil";

interface LowonganData {
  id: number;
  posisi: string;
  deskripsi: string;
  kuota: number;
  capaian: string;
  status: "Aktif" | "Tidak";
}

const initialData: LowonganData[] = [
  {
    id: 1,
    posisi: "Frontend Developer",
    deskripsi: "Membangun UI aplikasi berbasis React dan Tailwind",
    kuota: 2,
    capaian: "Menguasai React, Next.js, dan Tailwind CSS",
    status: "Aktif",
  },
  {
    id: 2,
    posisi: "Backend Developer",
    deskripsi: "Membangun API dengan Laravel dan PostgreSQL",
    kuota: 3,
    capaian: "Mampu mengembangkan REST API dan autentikasi JWT",
    status: "Tidak",
  },
  {
    id: 3,
    posisi: "UI/UX Designer",
    deskripsi: "Membuat wireframe, prototype, dan user flow",
    kuota: 1,
    capaian: "Menguasai Figma dan prinsip desain usability",
    status: "Aktif",
  },
  {
    id: 4,
    posisi: "Frontend Engineer",
    deskripsi: "Membangun UI aplikasi berbasis React dan Tailwind",
    kuota: 2,
    capaian: "Menguasai React, Next.js, dan Tailwind CSS",
    status: "Aktif",
  },
  {
    id: 5,
    posisi: "Backend Engineer",
    deskripsi: "Membangun API dengan Laravel dan PostgreSQL",
    kuota: 3,
    capaian: "Mampu mengembangkan REST API dan autentikasi JWT",
    status: "Tidak",
  },
  {
    id: 6,
    posisi: "Data Analyst",
    deskripsi: "Membuat wireframe, prototype, dan user flow",
    kuota: 1,
    capaian: "Menguasai Figma dan prinsip desain usability",
    status: "Tidak",
  },
  {
    id: 7,
    posisi: "Data Scientist",
    deskripsi: "Membangun UI aplikasi berbasis React dan Tailwind",
    kuota: 2,
    capaian: "Menguasai React, Next.js, dan Tailwind CSS",
    status: "Tidak",
  },
  {
    id: 8,
    posisi: "Fullstack Developer",
    deskripsi: "Membangun API dengan Laravel dan PostgreSQL",
    kuota: 3,
    capaian: "Mampu mengembangkan REST API dan autentikasi JWT",
    status: "Tidak",
  },
  {
    id: 9,
    posisi: "System Analyst",
    deskripsi: "Membuat wireframe, prototype, dan user flow",
    kuota: 1,
    capaian: "Menguasai Figma dan prinsip desain usability",
    status: "Aktif",
  },
  {
    id: 10,
    posisi: "Project Manager",
    deskripsi: "Membangun UI aplikasi berbasis React dan Tailwind",
    kuota: 2,
    capaian: "Menguasai React, Next.js, dan Tailwind CSS",
    status: "Aktif",
  },
];

export default function TableDraftLowongan() {
  const [data, setData] = useState(initialData);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = [...data].sort((a, b) => {
    if (a.status === b.status) return 0;
    return a.status === "Aktif" ? -1 : 1;
  });

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = sortedData.slice(startIndex, startIndex + rowsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleAktifkan = (index: number) => {
    const updated = [...data];
    updated[startIndex + index].status = "Aktif";
    setData(updated);
  };

  const handleNonaktifkan = (index: number) => {
    const updated = [...data];
    updated[startIndex + index].status = "Tidak";
    setData(updated);
  };

  const [showConfirm, setShowConfirm] = useState(false);
  const [showFormAktifkan, setShowFormAktifkan] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [actionType, setActionType] = useState<
    "Aktifkan" | "Nonaktifkan" | null
  >(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <div>
      <div className="overflow-auto rounded-xl border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0F67B1] text-white text-center text-xs font-bold">
              <th className="px-4 py-3">NO</th>
              <th className="px-4 py-3">POSISI</th>
              <th className="px-4 py-3">DESKRIPSI</th>
              <th className="px-4 py-3">KUOTA</th>
              <th className="px-4 py-3">CAPAIAN PEMBELAJARAN</th>
              <th className="px-4 py-3">DETAIL</th>
              <th className="px-4 py-3">AKSI</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 text-xs text-center">
                <td className="px-4 py-2 border-t">{startIndex + index + 1}</td>
                <td className="px-4 py-2 border-t text-left">{item.posisi}</td>
                <td className="px-4 py-2 border-t text-left">
                  {item.deskripsi}
                </td>
                <td className="px-4 py-2 border-t">{item.kuota}</td>
                <td className="px-4 py-2 border-t text-left">{item.capaian}</td>
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
            {startIndex + 1}-{Math.min(startIndex + rowsPerPage, data.length)}{" "}
            of {data.length}
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
        <ConfirmModal
          open={showConfirm}
          onClose={() => setShowConfirm(false)}
          message={
            actionType === "Nonaktifkan"
              ? "Apakah Anda yakin ingin menonaktifkan lowongan ini?"
              : "Apakah Anda yakin ingin mengaktifkan lowongan ini?"
          }
          onConfirm={() => {
            if (selectedIndex !== null) {
              if (actionType === "Nonaktifkan") {
                handleNonaktifkan(selectedIndex);
                setSuccessMessage("Lowongan berhasil dinonaktifkan!");
                setShowSuccess(true);
              } else if (actionType === "Aktifkan") {
                setShowFormAktifkan(true);
              }
            }
            setShowConfirm(false);
          }}
        />

        <SuccessModal
          open={showSuccess}
          title="Berhasil"
          message={successMessage}
          onClose={() => setShowSuccess(false)}
        />

        <FormAktifkanModal
          open={showFormAktifkan}
          onClose={() => setShowFormAktifkan(false)}
          onSubmit={(formData) => {
            if (selectedIndex !== null) {
              handleAktifkan(selectedIndex);
            }
            setShowFormAktifkan(false);
          }}
        />
      </div>
    </div>
  );
}
