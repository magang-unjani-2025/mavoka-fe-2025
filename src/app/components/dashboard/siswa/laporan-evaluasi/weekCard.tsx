"use client";
import Link from "next/link";
import Image from "next/image";
import type { WeekReport } from "@/types/laporan-siswa";
import ProgressDots from "./progres";

export default function WeekCard({ week }: { week: WeekReport }) {
  const filled = week.logs.length;
  const total = week.status === "done" && week.targetDays ? week.targetDays : 7;

  const hasCover = week.status === "done" && !!week.coverPhotoUrl;
  const cover = hasCover
    ? (week.coverPhotoUrl as string)
    : "/images/report-default.jpg";

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="space-y-2">
        {/* Baris 1: foto + judul */}
        <div className="flex items-center gap-3">
          <div
            className={[
              "relative h-9 w-9 md:h-10 md:w-10 overflow-hidden rounded-md bg-gray-50",
              hasCover ? "" : "ring-1 ring-gray-300", // bingkai hanya saat default
            ].join(" ")}
          >
            <Image src={cover} alt="cover" fill className="object-cover" />
          </div>
          <div className="font-semibold text-xl text-gray-900">
            Minggu {week.number}
          </div>
        </div>

        {/* Baris 2: progres (kiri) + tombol (kanan) */}
        <div className="flex items-end gap-2 sm:gap-1">
          <div className="flex-1 pt-1">
            {" "}
            {/* <- pt-1 opsional untuk offset halus */}
            <ProgressDots filled={filled} total={total} />
          </div>

          <Link
            href={`/dashboard-siswa/laporan-evaluasi/${week.id}`}
            className="self-end rounded-lg bg-[#0F67B1] px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
