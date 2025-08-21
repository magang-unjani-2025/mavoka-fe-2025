"use client";
import React from "react";

interface LembagaPelatihanProps {
  className?: string;
}

type Lembaga = {
  nama: string;
  kelas: number;
  logo: string;
};

export default function LembagaPelatihan({ className }: LembagaPelatihanProps) {
  const data: Lembaga[] = [
    { nama: "PT BPR Kredit Mandiri Indonesia", kelas: 1, logo: "/img/perusahaan/bpr.png" },
    { nama: "Lembaga Pengembangan Perbankan Indonesia (LPPI)", kelas: 5, logo: "/img/perusahaan/lppi.png" },
    { nama: "Politeknik Negeri Bandung", kelas: 2, logo: "/img/perusahaan/politeknik.webp" },
    { nama: "Anchorage Indonesia", kelas: 4, logo: "/img/perusahaan/anchorage.png" },
  ];

  return (
    <div className="bg-white rounded-lg p-4 ${className}`}">
      <h3 className="font-semibold text-gray-900 mb-3">Lembaga Pelatihan</h3>

      <div className="space-y-3">
        {data.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={item.logo} alt={item.nama} className="w-8 h-8 rounded-full text-xs object-cover" />
              <div>
                <p className="font-semibold text-gray-900">{item.nama}</p>
                <p className="text-xs text-gray-500">{item.kelas} kelas</p>
              </div>
            </div>
            <span className="text-gray-400">›</span>
          </div>
        ))}
      </div>

      <div className="text-right mt-3">
        <a href="#" className="text-sm text-[#0F67B1]">
          Lihat Semua →
        </a>
      </div>
    </div>
  );
}
