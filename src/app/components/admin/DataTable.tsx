"use client";

import React, { useState, useEffect } from "react";

export type RoleType = "Lembaga Pelatihan" | "Sekolah" | "Perusahaan" | "Siswa";

interface TableData {
  no: number;
  col1: string;
  col2: string;
  col3?: string;
  col4?: string;
  col5?: string;
  status?: string;
}

interface DataTableProps {
  role: RoleType;
}

const dataByRole: Record<RoleType, TableData[]> = {
  "Lembaga Pelatihan": [
    { no: 1, col1: "Bank Mandiri KC Yogyakarta", col2: "Inkajkt@inka.Co.id", col3: "Deskripsi LP", col4: "Administrasi", col5: "5" },
    { no: 2, col1: "Grand Mercure Solo Baru", col2: "gm@hotel.com", col3: "Hotel Training", col4: "Tata Boga", col5: "3" },
    { no: 3, col1: "Bank Mandiri KC Yogyakarta", col2: "Inkajkt@inka.Co.id", col3: "Deskripsi LP", col4: "Administrasi", col5: "5" },
    { no: 4, col1: "Grand Mercure Solo Baru", col2: "gm@hotel.com", col3: "Hotel Training", col4: "Tata Boga", col5: "3" },
    { no: 5, col1: "Bank Mandiri KC Yogyakarta", col2: "Inkajkt@inka.Co.id", col3: "Deskripsi LP", col4: "Administrasi", col5: "5" },
    { no: 6, col1: "Grand Mercure Solo Baru", col2: "gm@hotel.com", col3: "Hotel Training", col4: "Tata Boga", col5: "3" },
    { no: 7, col1: "Bank Mandiri KC Yogyakarta", col2: "Inkajkt@inka.Co.id", col3: "Deskripsi LP", col4: "Administrasi", col5: "5" },
    { no: 8, col1: "Grand Mercure Solo Baru", col2: "gm@hotel.com", col3: "Hotel Training", col4: "Tata Boga", col5: "3" },
    { no: 9, col1: "Bank Mandiri KC Yogyakarta", col2: "Inkajkt@inka.Co.id", col3: "Deskripsi LP", col4: "Administrasi", col5: "5" },
    { no: 10, col1: "Grand Mercure Solo Baru", col2: "gm@hotel.com", col3: "Hotel Training", col4: "Tata Boga", col5: "3" },
    { no: 11, col1: "Bank Mandiri KC Yogyakarta", col2: "Inkajkt@inka.Co.id", col3: "Deskripsi LP", col4: "Administrasi", col5: "5" },
    { no: 12, col1: "Grand Mercure Solo Baru", col2: "gm@hotel.com", col3: "Hotel Training", col4: "Tata Boga", col5: "3" },
    { no: 13, col1: "Bank Mandiri KC Yogyakarta", col2: "Inkajkt@inka.Co.id", col3: "Deskripsi LP", col4: "Administrasi", col5: "5" },
    { no: 14, col1: "Grand Mercure Solo Baru", col2: "gm@hotel.com", col3: "Hotel Training", col4: "Tata Boga", col5: "3" },
  ],
  Sekolah: [
    { no: 1, col1: "SMKN 1 Yogyakarta", col2: "smkn1@gmail.com", col3: "Yogyakarta", col4: "120" },
    { no: 2, col1: "SMAN 5 Jakarta", col2: "sman5@gmail.com", col3: "Jakarta", col4: "98" },
    { no: 3, col1: "SMKN 1 Yogyakarta", col2: "smkn1@gmail.com", col3: "Yogyakarta", col4: "120" },
    { no: 4, col1: "SMAN 5 Jakarta", col2: "sman5@gmail.com", col3: "Jakarta", col4: "98" },
    { no: 5, col1: "SMKN 1 Yogyakarta", col2: "smkn1@gmail.com", col3: "Yogyakarta", col4: "120" },
    { no: 6, col1: "SMAN 5 Jakarta", col2: "sman5@gmail.com", col3: "Jakarta", col4: "98" },
    { no: 7, col1: "SMKN 1 Yogyakarta", col2: "smkn1@gmail.com", col3: "Yogyakarta", col4: "120" },
    { no: 8, col1: "SMAN 5 Jakarta", col2: "sman5@gmail.com", col3: "Jakarta", col4: "98" },
    { no: 9, col1: "SMKN 1 Yogyakarta", col2: "smkn1@gmail.com", col3: "Yogyakarta", col4: "120" },
    { no: 10, col1: "SMAN 5 Jakarta", col2: "sman5@gmail.com", col3: "Jakarta", col4: "98" },
    { no: 11, col1: "SMKN 1 Yogyakarta", col2: "smkn1@gmail.com", col3: "Yogyakarta", col4: "120" },
    { no: 12, col1: "SMAN 5 Jakarta", col2: "sman5@gmail.com", col3: "Jakarta", col4: "98" },
    { no: 13, col1: "SMKN 1 Yogyakarta", col2: "smkn1@gmail.com", col3: "Yogyakarta", col4: "120" },
    { no: 14, col1: "SMAN 5 Jakarta", col2: "sman5@gmail.com", col3: "Jakarta", col4: "98" },
    { no: 15, col1: "SMKN 1 Yogyakarta", col2: "smkn1@gmail.com", col3: "Yogyakarta", col4: "120" },
    { no: 16, col1: "SMAN 5 Jakarta", col2: "sman5@gmail.com", col3: "Jakarta", col4: "98" },
    { no: 17, col1: "SMKN 1 Yogyakarta", col2: "smkn1@gmail.com", col3: "Yogyakarta", col4: "120" },
    { no: 18, col1: "SMAN 5 Jakarta", col2: "sman5@gmail.com", col3: "Jakarta", col4: "98" },
  ],
  Perusahaan: [
    { no: 1, col1: "PT INKA", col2: "contact@inka.co.id", col3: "Transportasi", col4: "5 posisi", col5: "10" },
    { no: 2, col1: "Bank Mandiri", col2: "mandiri@bank.co.id", col3: "Perbankan", col4: "2 posisi", col5: "4" },
    { no: 3, col1: "PT INKA", col2: "contact@inka.co.id", col3: "Transportasi", col4: "5 posisi", col5: "10" },
    { no: 4, col1: "Bank Mandiri", col2: "mandiri@bank.co.id", col3: "Perbankan", col4: "2 posisi", col5: "4" },
    { no: 5, col1: "PT INKA", col2: "contact@inka.co.id", col3: "Transportasi", col4: "5 posisi", col5: "10" },
    { no: 6, col1: "Bank Mandiri", col2: "mandiri@bank.co.id", col3: "Perbankan", col4: "2 posisi", col5: "4" },
    { no: 7, col1: "PT INKA", col2: "contact@inka.co.id", col3: "Transportasi", col4: "5 posisi", col5: "10" },
    { no: 8, col1: "Bank Mandiri", col2: "mandiri@bank.co.id", col3: "Perbankan", col4: "2 posisi", col5: "4" },
    { no: 9, col1: "PT INKA", col2: "contact@inka.co.id", col3: "Transportasi", col4: "5 posisi", col5: "10" },
    { no: 10, col1: "Bank Mandiri", col2: "mandiri@bank.co.id", col3: "Perbankan", col4: "2 posisi", col5: "4" },
    { no: 11, col1: "PT INKA", col2: "contact@inka.co.id", col3: "Transportasi", col4: "5 posisi", col5: "10" },
    { no: 12, col1: "Bank Mandiri", col2: "mandiri@bank.co.id", col3: "Perbankan", col4: "2 posisi", col5: "4" },
    { no: 13, col1: "PT INKA", col2: "contact@inka.co.id", col3: "Transportasi", col4: "5 posisi", col5: "10" },
    { no: 14, col1: "Bank Mandiri", col2: "mandiri@bank.co.id", col3: "Perbankan", col4: "2 posisi", col5: "4" },
    { no: 15, col1: "PT INKA", col2: "contact@inka.co.id", col3: "Transportasi", col4: "5 posisi", col5: "10" },
    { no: 16, col1: "Bank Mandiri", col2: "mandiri@bank.co.id", col3: "Perbankan", col4: "2 posisi", col5: "4" },
  ],
  Siswa: [
    { no: 1, col1: "Andi Pratama", col2: "andi@gmail.com", col3: "RPL", status: "Terdaftar" },
    { no: 2, col1: "Budi Santoso", col2: "budi@gmail.com", col3: "Multimedia", status: "Terdaftar" },
    { no: 3, col1: "Andi Pratama", col2: "andi@gmail.com", col3: "RPL", status: "Terdaftar" },
    { no: 4, col1: "Budi Santoso", col2: "budi@gmail.com", col3: "Multimedia", status: "Terdaftar" },
    { no: 5, col1: "Andi Pratama", col2: "andi@gmail.com", col3: "RPL", status: "Terdaftar" },
    { no: 6, col1: "Budi Santoso", col2: "budi@gmail.com", col3: "Multimedia", status: "Terdaftar" },
    { no: 7, col1: "Andi Pratama", col2: "andi@gmail.com", col3: "RPL", status: "Terdaftar" },
    { no: 8, col1: "Budi Santoso", col2: "budi@gmail.com", col3: "Multimedia", status: "Terdaftar" },
    { no: 9, col1: "Andi Pratama", col2: "andi@gmail.com", col3: "RPL", status: "Terdaftar" },
    { no: 10, col1: "Budi Santoso", col2: "budi@gmail.com", col3: "Multimedia", status: "Terdaftar" },
    { no: 11, col1: "Andi Pratama", col2: "andi@gmail.com", col3: "RPL", status: "Pelamar" },
    { no: 12, col1: "Budi Santoso", col2: "budi@gmail.com", col3: "Multimedia", status: "Pemagang" },
    { no: 13, col1: "Budi Santoso", col2: "budi@gmail.com", col3: "Multimedia", status: "Pemagang" },
    { no: 14, col1: "Budi Santoso", col2: "budi@gmail.com", col3: "Multimedia", status: "Pemagang" },
  ],
};

const columnsByRole: Record<RoleType, string[]> = {
  "Lembaga Pelatihan": ["No", "Nama Lembaga Pelatihan", "Email", "Deskripsi", "Kelas", "Jumlah Pemagang"],
  Perusahaan: ["No", "Nama Perusahaan", "Email", "Deskripsi", "Lowongan Magang", "Jumlah Pemagang"],
  Sekolah: ["No", "Nama Sekolah", "Email", "Deskripsi", "Jumlah Siswa"],
  Siswa: ["No", "Nama Siswa", "Email", "Jurusan"],
};

const titleByRole: Record<RoleType, string> = {
  "Lembaga Pelatihan": "Data Lembaga Pelatihan Terdaftar",
  Perusahaan: "Data Perusahaan Terdaftar",
  Sekolah: "Data Sekolah Terdaftar",
  Siswa: "Data Siswa Terdaftar",
};

export default function DataTable({ role }: DataTableProps) {
  const [currentRole, setCurrentRole] = useState<RoleType>(role);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Siswa");

useEffect(() => {
  setCurrentRole(role);
  setCurrentPage(1);

  if (role === "Siswa") {
    setActiveTab("Terdaftar"); 
  }
}, [role]);

  const rawData = dataByRole[currentRole];
  const filteredData =
    currentRole === "Siswa" && activeTab !== "Terdaftar"
      ? rawData.filter((item) => item.status === activeTab)
      : rawData;

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  return (
    <>
      <h2 className="text-xl font-bold mb-4">{titleByRole[role]}</h2>

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
                activeTab === tab ? "border-b-2 border-[#0F67B1] text-[#0F67B1] bg-[#0F67B1]/5" : "text-gray-600 hover:text-[#0F67B1]"
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
              <tr className="bg-[#0F67B1] text-white text-left text-xs font-bold">
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
                  <tr key={item.no} className="hover:bg-gray-50 text-xs">
                    <td className="px-4 py-2 border-t">{startIndex + index + 1}</td>
                    <td className="px-4 py-2 border-t">{item.col1}</td>
                    <td className="px-4 py-2 border-t underline">{item.col2}</td>
                    <td className="px-4 py-2 border-t">{item.col3}</td>
                    {role !== "Siswa" && (
                      <>
                        <td className="px-4 py-2 border-t">{item.col4}</td>
                        {role !== "Sekolah" && <td className="px-4 py-2 border-t">{item.col5}</td>}
                      </>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columnsByRole[role].length} className="text-center py-4 text-gray-500">
                    Tidak ada data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="py-2 px-3 flex items-center gap-4 mt-4 text-xs text-white bg-[#0F67B1] rounded-b-xl justify-end">
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
              {startIndex + 1}-{Math.min(startIndex + rowsPerPage, filteredData.length)} of {filteredData.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={`px-2 py-1 rounded bg-white ${
                  currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-800 hover:bg-gray-200"
                }`}
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-2 py-1 rounded bg-white ${
                  currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-800 hover:bg-gray-200"
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