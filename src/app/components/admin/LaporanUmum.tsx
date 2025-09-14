"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaRegFileExcel, FaRegFilePdf } from "react-icons/fa";
import PreviewModal from "./PreviewModal";

const data = [
  { no: 1, name: "Data Perusahaan Terdaftar", role: "perusahaan" },
  { no: 2, name: "Data Lembaga Pelatihan Terdaftar", role: "lembaga pelatihan" },
  { no: 3, name: "Data Sekolah Terdaftar", role: "sekolah" },
  { no: 4, name: "Data Siswa Terdaftar", role: "siswa" },
];

type Siswa = { nama: string; email: string; sekolah: string };
type Sekolah = { nama: string; alamat: string; telepon: string };
type Perusahaan = { nama: string; bidang: string; telepon: string };
type Lembaga = { nama: string; email: string; telepon: string };

type RoleData = Siswa | Sekolah | Perusahaan | Lembaga;

const dataByRole: Record<string, RoleData[]> = {
  Siswa: [
    { nama: "Andi", email: "andi@mail.com", sekolah: "SMAN 1" },
    { nama: "Budi", email: "budi@mail.com", sekolah: "SMK 2" },
  ],
  Sekolah: [
    { nama: "SMAN 1", alamat: "Jl. Merdeka", telepon: "021-123456" },
    { nama: "SMK 2", alamat: "Jl. Sudirman", telepon: "021-654321" },
  ],
  Perusahaan: [
    { nama: "PT Maju", bidang: "Teknologi", telepon: "021-987654" },
    { nama: "CV Sejahtera", bidang: "Konstruksi", telepon: "021-321987" },
  ],
  "Lembaga Pelatihan": [
    { nama: "LPK A", email: "lpk@mail.com", telepon: "021-111222" },
    { nama: "LPK B", email: "lpkb@mail.com", telepon: "021-333444" },
  ],
};

const headersByRole: Record<string, string[]> = {
  Siswa: ["Nama", "Email", "Sekolah"],
  Sekolah: ["Nama Sekolah", "Alamat", "Telepon"],
  Perusahaan: ["Nama Perusahaan", "Bidang", "Telepon"],
  "Lembaga Pelatihan": ["Nama Lembaga", "Email", "Telepon"],
};

export default function LaporanUmum() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [filteredData, setFilteredData] = useState<RoleData[]>([]);

  const handleOpenModal = (role: string) => {
    setSelectedRole(role);
    setFilteredData(dataByRole[role] || []);
    setIsModalOpen(true);
  };

  return (
    <>
      <h2 className="text-lg font-bold mb-4">Data Pengguna</h2>
      <div className="p-6 bg-white rounded-xl shadow-md">
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#0F67B1] text-white text-center text-sm font-bold">
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Data</th>
                <th className="px-4 py-3">Download</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.no} className="hover:bg-gray-100 text-sm">
                  <td
                    className="px-4 py-2 border-t text-center cursor-pointer"
                    onClick={() => router.push(`/laporan-umum/${item.role}`)}
                  >
                    {item.no}
                  </td>
                  <td
                    className="px-4 py-2 border-t cursor-pointer  hover:underline"
                    onClick={() => router.push(`/laporan-umum/${item.role}`)}
                  >
                    {item.name}
                  </td>
                  <td className="px-4 py-2 border-t text-center">
                    <div className="flex justify-center items-center gap-2">
                      <button
                        className="bg-[#CDFFCD] hover:bg-green-200 text-[#007F00] border border-[#007F00] px-3 py-1 rounded text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenModal(item.role);
                        }}
                      >
                        <FaRegFileExcel className="inline mr-1" />
                        Ekspor Excel
                      </button>
                      <button
                        className="bg-[#FFE0E0] hover:bg-red-200 text-[#D30000] border border-[#D30000] px-3 py-1 rounded text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log("Ekspor PDF:", item.role);
                        }}
                      >
                        <FaRegFilePdf className="inline mr-1" />
                        Ekspor PDF
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <PreviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Preview Laporan - ${selectedRole}`}
        data={filteredData}
        headers={headersByRole[selectedRole] || []}
        role={selectedRole}
        onExportExcel={() => console.log("Ekspor Excel")}
        onExportPDF={() => console.log("Ekspor PDF")}
      />
    </>
  );
}
