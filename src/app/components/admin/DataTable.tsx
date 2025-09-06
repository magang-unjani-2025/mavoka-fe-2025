"use client";

import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

export type RoleType = "Lembaga Pelatihan" | "Sekolah" | "Perusahaan" | "Siswa";

interface TableData {
  col1: string;
  col2: string;
  col3?: string;
  col4?: string;
  col5?: string;
  status?: string;
  year?: string;
}

interface DataTableProps {
  role: RoleType;
}

const dataByRole: Record<RoleType, TableData[]> = {
  "Lembaga Pelatihan": [
    {
      col1: "Bank Mandiri KC Yogyakarta",
      col2: "Inkajkt@inka.Co.id",
      col3: "Kategori LP",
      col4: "Operator Produksi",
      col5: "5",
      year: "2025",
    },
    {
      col1: "Grand Mercure Solo Baru",
      col2: "gm@hotel.com",
      col3: "Hotel Training",
      col4: "Tata Boga",
      col5: "3",
      year: "2025",
    },
    {
      col1: "Bank Mandiri KC Yogyakarta",
      col2: "Inkajkt@inka.Co.id",
      col3: "Kategori LP",
      col4: "Operator Produksi",
      col5: "5",
      year: "2025",
    },
    {
      col1: "Grand Mercure Solo Baru",
      col2: "gm@hotel.com",
      col3: "Hotel Training",
      col4: "Tata Boga",
      col5: "3",
      year: "2026",
    },
    {
      col1: "Bank Mandiri KC Yogyakarta",
      col2: "Inkajkt@inka.Co.id",
      col3: "Kategori LP",
      col4: "Operator Produksi",
      col5: "5",
      year: "2026",
    },
    {
      col1: "Grand Mercure Solo Baru",
      col2: "gm@hotel.com",
      col3: "Hotel Training",
      col4: "Tata Boga",
      col5: "3",
      year: "2026",
    },
    {
      col1: "Bank Mandiri KC Yogyakarta",
      col2: "Inkajkt@inka.Co.id",
      col3: "Kategori LP",
      col4: "Operator Produksi",
      col5: "5",
      year: "2027",
    },
    {
      col1: "Grand Mercure Solo Baru",
      col2: "gm@hotel.com",
      col3: "Hotel Training",
      col4: "Tata Boga",
      col5: "3",
      year: "2027",
    },
    {
      col1: "Bank Mandiri KC Yogyakarta",
      col2: "Inkajkt@inka.Co.id",
      col3: "Kategori LP",
      col4: "Operator Produksi",
      col5: "5",
      year: "2027",
    },
    {
      col1: "Grand Mercure Solo Baru",
      col2: "gm@hotel.com",
      col3: "Hotel Training",
      col4: "Tata Boga",
      col5: "3",
      year: "2027",
    },
    {
      col1: "Bank Mandiri KC Yogyakarta",
      col2: "Inkajkt@inka.Co.id",
      col3: "Kategori LP",
      col4: "Operator Produksi",
      col5: "5",
      year: "2027",
    },
    {
      col1: "Grand Mercure Solo Baru",
      col2: "gm@hotel.com",
      col3: "Hotel Training",
      col4: "Tata Boga",
      col5: "3",
      year: "2027",
    },
    {
      col1: "Bank Mandiri KC Yogyakarta",
      col2: "Inkajkt@inka.Co.id",
      col3: "Kategori LP",
      col4: "Operator Produksi",
      col5: "5",
      year: "2027",
    },
    {
      col1: "Grand Mercure Solo Baru",
      col2: "gm@hotel.com",
      col3: "Hotel Training",
      col4: "Tata Boga",
      col5: "3",
      year: "2027",
    },
  ],
  Sekolah: [
    {
      col1: "SMKN 1 Yogyakarta",
      col2: "smkn1@gmail.com",
      col3: "987654321",
      col4: "120",
      year: "2025",
    },
    {
      col1: "SMAN 5 Jakarta",
      col2: "sman5@gmail.com",
      col3: "123456789",
      col4: "98",

      year: "2025",
    },
    {
      col1: "SMKN 1 Yogyakarta",
      col2: "smkn1@gmail.com",
      col3: "987654321",
      col4: "120",
      year: "2025",
    },
    {
      col1: "SMAN 5 Jakarta",
      col2: "sman5@gmail.com",
      col3: "123456789",
      col4: "98",
      year: "2025",
    },
    {
      col1: "SMKN 1 Yogyakarta",
      col2: "smkn1@gmail.com",
      col3: "987654321",
      col4: "120",
      year: "2025",
    },
    {
      col1: "SMAN 5 Jakarta",
      col2: "sman5@gmail.com",
      col3: "123456789",
      col4: "98",
      year: "2025",
    },
    {
      col1: "SMKN 1 Yogyakarta",
      col2: "smkn1@gmail.com",
      col3: "987654321",
      col4: "120",
      year: "2026",
    },
    {
      col1: "SMAN 5 Jakarta",
      col2: "sman5@gmail.com",
      col3: "123456789",
      col4: "98",
      year: "2026",
    },
    {
      col1: "SMKN 1 Yogyakarta",
      col2: "smkn1@gmail.com",
      col3: "987654321",
      col4: "120",
      year: "2026",
    },
    {
      col1: "SMAN 5 Jakarta",
      col2: "sman5@gmail.com",
      col3: "123456789",
      col4: "98",
      year: "2026",
    },
    {
      col1: "SMKN 1 Yogyakarta",
      col2: "smkn1@gmail.com",
      col3: "987654321",
      col4: "120",
      year: "2027",
    },
    {
      col1: "SMAN 5 Jakarta",
      col2: "sman5@gmail.com",
      col3: "123456789",
      col4: "98",
      year: "2027",
    },
    {
      col1: "SMKN 1 Yogyakarta",
      col2: "smkn1@gmail.com",
      col3: "987654321",
      col4: "120",
      year: "2027",
    },
    {
      col1: "SMAN 5 Jakarta",
      col2: "sman5@gmail.com",
      col3: "123456789",
      col4: "98",
      year: "2027",
    },
    {
      col1: "SMKN 1 Yogyakarta",
      col2: "smkn1@gmail.com",
      col3: "987654321",
      col4: "120",
      year: "2027",
    },
    {
      col1: "SMAN 5 Jakarta",
      col2: "sman5@gmail.com",
      col3: "123456789",
      col4: "98",
      year: "2027",
    },
    {
      col1: "SMKN 1 Yogyakarta",
      col2: "smkn1@gmail.com",
      col3: "987654321",
      col4: "120",
      year: "2027",
    },
    {
      col1: "SMAN 5 Jakarta",
      col2: "sman5@gmail.com",
      col3: "123456789",
      col4: "98",
      year: "2027",
    },
  ],
  Perusahaan: [
    {
      col1: "PT INKA",
      col2: "contact@inka.co.id",
      col3: "Transportasi",
      col4: "Administrasi Perkantoran",
      col5: "10",
      year: "2025",
    },
    {
      col1: "Bank Mandiri",
      col2: "mandiri@bank.co.id",
      col3: "Perbankan",
      col4: "Junior IT Support",
      col5: "4",
      year: "2025",
    },
    {
      col1: "PT INKA",
      col2: "contact@inka.co.id",
      col3: "Transportasi",
      col4: "Administras",
      col5: "10",
      year: "2025",
    },
    {
      col1: "Bank Mandiri",
      col2: "mandiri@bank.co.id",
      col3: "Perbankan",
      col4: "Junior IT Support",
      col5: "4",
      year: "2025",
    },
    {
      col1: "PT INKA",
      col2: "contact@inka.co.id",
      col3: "Transportasi",
      col4: "Administras",
      col5: "10",
      year: "2025",
    },
    {
      col1: "Bank Mandiri",
      col2: "mandiri@bank.co.id",
      col3: "Perbankan",
      col4: "Junior IT Support",
      col5: "4",
      year: "2026",
    },
    {
      col1: "PT INKA",
      col2: "contact@inka.co.id",
      col3: "Transportasi",
      col4: "Administras",
      col5: "10",
      year: "2026",
    },
    {
      col1: "Bank Mandiri",
      col2: "mandiri@bank.co.id",
      col3: "Perbankan",
      col4: "Junior IT Support",
      col5: "4",
      year: "2026",
    },
    {
      col1: "PT INKA",
      col2: "contact@inka.co.id",
      col3: "Transportasi",
      col4: "Administras",
      col5: "10",
      year: "2026",
    },
    {
      col1: "Bank Mandiri",
      col2: "mandiri@bank.co.id",
      col3: "Perbankan",
      col4: "Junior IT Support",
      col5: "4",
      year: "2027",
    },
    {
      col1: "PT INKA",
      col2: "contact@inka.co.id",
      col3: "Transportasi",
      col4: "Administras",
      col5: "10",
      year: "2027",
    },
    {
      col1: "Bank Mandiri",
      col2: "mandiri@bank.co.id",
      col3: "Perbankan",
      col4: "Junior IT Support",
      col5: "4",
      year: "2027",
    },
    {
      col1: "PT INKA",
      col2: "contact@inka.co.id",
      col3: "Transportasi",
      col4: "Administras",
      col5: "10",
      year: "2027",
    },
    {
      col1: "Bank Mandiri",
      col2: "mandiri@bank.co.id",
      col3: "Perbankan",
      col4: "Junior IT Support",
      col5: "4",
      year: "2027",
    },
    {
      col1: "PT INKA",
      col2: "contact@inka.co.id",
      col3: "Transportasi",
      col4: "Administras",
      col5: "10",
      year: "2027",
    },
    {
      col1: "Bank Mandiri",
      col2: "mandiri@bank.co.id",
      col3: "Perbankan",
      col4: "Junior IT Support",
      col5: "4",
      year: "2027",
    },
  ],
  Siswa: [
    {
      col1: "Andi Pratama",
      col2: "andi@gmail.com",
      col3: "RPL",
      status: "Terdaftar",
      year: "2025",
    },
    {
      col1: "Budi Santoso",
      col2: "budi@gmail.com",
      col3: "Multimedia",
      status: "Terdaftar",
      year: "2025",
    },
    {
      col1: "Andi Pratama",
      col2: "andi@gmail.com",
      col3: "RPL",
      status: "Terdaftar",
      year: "2025",
    },
    {
      col1: "Budi Santoso",
      col2: "budi@gmail.com",
      col3: "Multimedia",
      status: "Terdaftar",
      year: "2025",
    },
    {
      col1: "Andi Pratama",
      col2: "andi@gmail.com",
      col3: "RPL",
      status: "Terdaftar",
      year: "2026",
    },
    {
      col1: "Budi Santoso",
      col2: "budi@gmail.com",
      col3: "Multimedia",
      status: "Terdaftar",
      year: "2026",
    },
    {
      col1: "Andi Pratama",
      col2: "andi@gmail.com",
      col3: "RPL",
      status: "Terdaftar",
      year: "2026",
    },
    {
      col1: "Budi Santoso",
      col2: "budi@gmail.com",
      col3: "Multimedia",
      status: "Terdaftar",
      year: "2026",
    },
    {
      col1: "Andi Pratama",
      col2: "andi@gmail.com",
      col3: "RPL",
      status: "Terdaftar",
      year: "2027",
    },
    {
      col1: "Budi Santoso",
      col2: "budi@gmail.com",
      col3: "Multimedia",
      status: "Terdaftar",
      year: "2027",
    },
    {
      col1: "Andi Pratama",
      col2: "andi@gmail.com",
      col3: "RPL",
      status: "Pelamar",
      year: "2027",
    },
    {
      col1: "Budi Santoso",
      col2: "budi@gmail.com",
      col3: "Multimedia",
      status: "Pemagang",
      year: "2027",
    },
    {
      col1: "Budi Santoso",
      col2: "budi@gmail.com",
      col3: "Multimedia",
      status: "Pemagang",
      year: "2027",
    },
    {
      col1: "Budi Santoso",
      col2: "budi@gmail.com",
      col3: "Multimedia",
      status: "Pemagang",
      year: "2027",
    },
  ],
};

const columnsByRole: Record<RoleType, string[]> = {
  "Lembaga Pelatihan": [
    "NO",
    "NAMA LEMBAGA PELATIHAN",
    "EMAIL",
    "KATEGORI",
    "PELATIHAN TERPASANG",
    "JUMLAH PEMAGANG TERDAFTAR",
  ],
  Perusahaan: [
    "NO",
    "NAMA PERUSAHAAN",
    "EMAIL",
    "BIDANG USAHA",
    "LOWONGAN MAGANG",
    "JUMLAH PEMAGANG TERDAFTAR",
  ],
  Sekolah: ["NO", "NAMA SEKOLAH", "EMAIL", "NPSN", "JUMLAH SISWA"],
  Siswa: ["NO", "NAMA SISWA", "EMAIL", "JURUSAN"],
};

const titleByRole: Record<RoleType, string> = {
  "Lembaga Pelatihan": "Data Lembaga Pelatihan Terdaftar",
  Perusahaan: "Data Perusahaan Terdaftar",
  Sekolah: "Data Sekolah Terdaftar",
  Siswa: "Data Siswa Terdaftar",
};

export default function DataTable({ role }: DataTableProps) {
  const router = useRouter();
  const [currentRole, setCurrentRole] = useState<RoleType>(role);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Siswa");
  const [selectedYear, setSelectedYear] = useState<string>("");

  useEffect(() => {
    setCurrentRole(role);
    setCurrentPage(1);

    if (role === "Siswa") {
      setActiveTab("Terdaftar");
    }
  }, [role]);

  const rawData = dataByRole[currentRole];
  const filteredData = rawData.filter((item) => {
    const matchStatus =
      currentRole === "Siswa" && activeTab !== "Terdaftar"
        ? item.status === activeTab
        : true;

    const matchYear = !selectedYear || item.year === selectedYear;

    return matchStatus && matchYear;
  });

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  return (
    <>
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <IoArrowBack
          className="text-xl cursor-pointer"
          onClick={() => router.back()}
        />
        {selectedYear
          ? `${titleByRole[role]} ${selectedYear}`
          : titleByRole[role]}
      </h2>

      {role === "Siswa" && (
        <div className="flex gap-2 mb-4 border-b border-gray-300">
          {["Terdaftar", "Pelamar", "Pemagang"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
              }}
              className={`rounded-none shadow-none font-semibold ${
                activeTab === tab
                  ? "border-b-2 border-[#0F67B1] text-[#0F67B1] bg-[#0F67B1]/5"
                  : "text-gray-600 hover:text-[#0F67B1]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      <div className="p-6 bg-white rounded-xl shadow-md">
        <div className="overflow-auto rounded-xl border border-gray-200">
          <table className="w-full border-collapse overflow-auto">
            <thead>
              <tr className="bg-[#0F67B1] text-white text-xs font-bold text-center">
                {columnsByRole[role].map((col) => (
                  <th key={col} className="px-4 py-3">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentData.length > 0 ? (
                currentData.map((item, index) => (
                  <tr
                    key={startIndex + index}
                    className="hover:bg-gray-50 text-xs text-center"
                  >
                    <td className="px-4 py-2 border-t">{index + 1}</td>

                    <td className="px-4 py-2 border-t text-left">
                      {item.col1}
                    </td>
                    <td className="px-4 py-2 border-t underline">
                      {item.col2}
                    </td>
                    <td className="px-4 py-2 border-t">{item.col3}</td>
                    {role !== "Siswa" && (
                      <>
                        <td className="px-4 py-2 border-t">{item.col4}</td>
                        {role !== "Sekolah" && (
                          <td className="px-4 py-2 border-t">{item.col5}</td>
                        )}
                      </>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columnsByRole[role].length}
                    className="text-center py-4 text-gray-500"
                  >
                    Tidak ada data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="py-2 px-3 flex items-center gap-4 mt-4 text-xs rounded-b-xl justify-end">
          <div className="flex items-center gap-2">
            <span>Rows per page:</span>
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded px-2 py-1 text-xs text-gray-700"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
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
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-800 hover:bg-gray-200"
                }`}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
