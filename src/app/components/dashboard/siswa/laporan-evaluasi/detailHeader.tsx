"use client";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function DetailHeader({
  weekNumber,
  isDone,
  onFill,
}: {
  weekNumber: number;
  isDone: boolean;
  onFill: () => void;
}) {
  return (
    <div className="mb-4">
      {/* Baris 1: Kembali */}
      <div className="mb-2">
        <Link
          href="/dashboard-siswa/laporan-evaluasi"
          className="inline-flex items-center gap-2 text-gray-800 hover:text-[#0F67B1]"
          aria-label="Kembali"
        >
          <IoIosArrowRoundBack className="text-current" size={25} />
          <span className="text-xl font-semibold">Kembali</span>
        </Link>
      </div>

      {/* Baris 2: Judul + Isi Laporan */}
      <div className="flex items-center justify-between">
        <h2 className=" text-gray-900">
          Detail Minggu {weekNumber}
        </h2>

        <button
          onClick={onFill}
          disabled={isDone}
          className={[
            "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium",
            "border",
            isDone
              ? "border-gray-300 text-gray-400 bg-gray-50 cursor-not-allowed"
              : "border-[#0F67B1] text-[#0F67B1] hover:bg-blue-50",
          ].join(" ")}
        >
          <span className="text-base">＋</span>
          <span>Isi Laporan</span>
        </button>
      </div>
    </div>
  );
}
