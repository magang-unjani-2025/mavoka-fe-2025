// components/dashboard/siswa/laporan-evaluasi/detailHeader.tsx
"use client";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function DetailHeader({
  weekNumber,
  isDone,
  weekId,
}: {
  weekNumber: number;
  isDone: boolean;
  weekId: string;
}) {
  return (
    <div className="mb-4">
      <div className="mb-2">
        <Link href="/dashboard-siswa/laporan-evaluasi" className="inline-flex items-center gap-2 text-gray-800 hover:text-[#0F67B1]">
          <IoIosArrowRoundBack size={25} />
          <span className="text-xl font-semibold">Kembali</span>
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-gray-900">Detail Minggu {weekNumber}</h2>

        {!isDone ? (
          <Link
            href={`/dashboard-siswa/laporan-evaluasi/${weekId}/isi`}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium border border-[#0F67B1] text-[#0F67B1] hover:bg-blue-50"
          >
            <span className="text-base">＋</span>
            <span>Isi Laporan</span>
          </Link>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium border border-gray-300 text-gray-400 bg-gray-50 cursor-not-allowed">
            <span className="text-base">＋</span>
            <span>Isi Laporan</span>
          </span>
        )}
      </div>
    </div>
  );
}
