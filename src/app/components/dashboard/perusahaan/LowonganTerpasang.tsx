"use client";
import React from "react";
import { IoFilterSharp } from "react-icons/io5";

interface LowonganTerpasangProps {
  className?: string;
}

type Lowongan = {
  nama: string;
  posisi: string;
  kuota: number;
  pelamar: number;
  status: "Aktif" | "Nonaktif";
};

export default function LowonganTerpasang({
  className,
}: LowonganTerpasangProps) {
  const data: Lowongan[] = [
    {
      nama: "Administrasi Perkantoran",
      posisi: "Staff Administrasi",
      kuota: 7,
      pelamar: 12,
      status: "Aktif",
    },
    {
      nama: "Customer Service Assistant",
      posisi: "Staff Operasional",
      kuota: 5,
      pelamar: 4,
      status: "Aktif",
    },
    {
      nama: "Digital Banking Support",
      posisi: "Staff Operasional",
      kuota: 8,
      pelamar: 7,
      status: "Aktif",
    },
  ];

  return (
    <div className={`bg-white rounded-lg p-4 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">Lowongan Terpasang</h3>
        <button className="flex items-center gap-1 px-3 py-1 text-sm border border-[#0F67B1] text-[#0F67B1] hover:bg-blue-50 shadow-none">
          <span>Aktif</span>
          <IoFilterSharp />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-black">
          <thead className="text-[#858585] border-b">
            <tr>
              <th className="py-3 px-2">Nama Lowongan</th>
              <th className="py-3 px-2">Posisi</th>
              <th className="py-3 px-2">Kuota</th>
              <th className="py-3 px-2">Pelamar</th>
              <th className="py-3 px-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-b">
                <td className="py-3 px-2">{row.nama}</td>
                <td className="py-3 px-2">{row.posisi}</td>
                <td className="py-3 px-2">{row.kuota}</td>
                <td className="py-3 px-2">{row.pelamar}</td>
                <td className="py-3 px-2">
                  <span className="px-3 py-1 rounded-md bg-green-100 text-green-700 text-xs font-medium">
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-right mt-3">
        <a href="#" className="text-sm text-[#0F67B1]">
          Lihat Semua →
        </a>
      </div>
    </div>
  );
}
