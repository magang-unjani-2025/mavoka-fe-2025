"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useMemo,useState } from "react";
import { useReport } from "@/app/components/dashboard/siswa/laporan-evaluasi/reportProvider";
import DetailHeader from "@/app/components/dashboard/siswa/laporan-evaluasi/detailHeader";
import LogsTable, { DetailLog } from "@/app/components/dashboard/siswa/laporan-evaluasi/logsTable";

export default function WeekDetailPage() {
  const { weekID } = useParams<{ weekID: string }>();
  const router = useRouter();
  const { state, finalizeWeek, setCoverPhoto } = useReport() as any;

  const week = useMemo(
    () => state.weeks.find((w: any) => w.id === weekID),
    [state.weeks, weekID]
  );

  if (!week) {
    return (
      <div className="p-4">
        <button onClick={() => router.push("/dashboard-siswa/laporan-evaluasi")} className="text-[#0F67B1] hover:underline">
          ← Kembali
        </button>
        <p className="mt-3 text-gray-700">Minggu tidak ditemukan.</p>
      </div>
    );
  }

  const isDone = week.status === "done";

  const logs: DetailLog[] = (week.logs as any[]).map((l) => ({
    date: l.date,
    activity: l.activity ?? l.title ?? l.content,
    output: l.output,
    obstacle: l.obstacle,
    solution: l.solution,
  }));

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!/image\/(jpeg|png)/.test(file.type)) {
      alert("Format tidak didukung. Gunakan .jpg atau .png");
      return;
    }
    const url = URL.createObjectURL(file);
    setCoverPhoto(week.id, url);
  };

  return (
    <div className="px-4 md:px-6">
      <DetailHeader
        weekNumber={week.number}
        isDone={isDone}
        onFill={() => {
          if (isDone) return;
          alert("Form isi laporan akan dibuat setelah tampilan detail selesai.");
        }}
      />

      <LogsTable logs={logs} />

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Foto kegiatan */}
        <div>
          <div className="mb-2 text-sm font-semibold text-gray-900">Foto Kegiatan</div>

          {week.coverPhotoUrl ? (
            <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image src={week.coverPhotoUrl} alt="Foto kegiatan" fill className="object-cover" />
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-end gap-3">
                <input
                  type="file"
                  accept="image/png,image/jpeg"
                  onChange={onUpload}
                  className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm"
                />
                <button
                  className="rounded-lg bg-[#0F67B1] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
                  onClick={() => {}}
                >
                  Unggah
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500">Hanya mendukung file dengan format .jpg dan .png</p>
            </div>
          )}
        </div>

        {/* Evaluasi perusahaan */}
        <div>
          <div className="mb-2 text-sm font-semibold text-gray-900">Evaluasi Perusahaan</div>
          <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
            <textarea
              className="h-48 w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none"
              placeholder="Menunggu evaluasi dari perusahaan…"
              value={week.companyEvaluation ?? ""}
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Tombol selesai – hilang otomatis setelah done */}
      {!isDone && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => {
              // langsung finalize, tetap stay di halaman
              finalizeWeek(week.id, 7);
            }}
            className="rounded-lg bg-[#0F67B1] px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
          >
            Selesai
          </button>
        </div>
      )}
    </div>
  );
}
