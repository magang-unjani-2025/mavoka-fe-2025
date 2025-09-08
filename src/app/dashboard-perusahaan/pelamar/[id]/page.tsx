//"use client";

//import React, { useEffect, useState } from "react";
//import { useParams, useRouter, useSearchParams } from "next/navigation";
//import { fetchApplicantById } from "@/lib/mock-pelamar";
//import type { Applicant } from "@/types/pelamar";
//import DashboardLayout2 from "@/app/components/dashboard/DashboardLayout2";

//export default function PelamarDetailPage() {
//  const { id } = useParams<{ id: string }>();
//  const router = useRouter();
//  const search = useSearchParams();

//  const [data, setData] = useState<Applicant | null>(null);
//  const [loading, setLoading] = useState(true);

//  const backHref = (() => {
//    const qs = search.toString();
//    return qs ? `/dashboard-perusahaan/pelamar?${qs}` : `/dashboard-perusahaan/pelamar`;
//  })();

//  useEffect(() => {
//    (async () => {
//      setLoading(true);
//      const res = await fetchApplicantById(String(id));
//      setData(res ?? null);
//      setLoading(false);
//    })();
//  }, [id]);

//  return (
//    <DashboardLayout2>
//    <div className="w-full">
//      {/* Back */}
//      <button
//        onClick={() => router.push(backHref)}
//        className="mb-3 inline-flex items-center shadow-none gap-2 text-gray-700 hover:underline"
//      >
//        <span className="text-lg">←</span> Kembali
//      </button>

//      {/* Card putih */}
//      <div className="rounded-2xl border border-gray-200 bg-white p-6">
//        <h1 className="mb-6 text-xl font-semibold">Detail Data Pelamar</h1>

//        {loading ? (
//          <div className="text-gray-500">Memuat detail…</div>
//        ) : !data ? (
//          <div className="text-red-600">Data pelamar tidak ditemukan.</div>
//        ) : (
//          <div className="space-y-5">
//            {/* Field Group */}
//            <Field label="Nama Siswa" value={data.nama} />
//            <Field label="Posisi" value={data.posisi} />
//            <Field label="Asal Sekolah" value={data.asalSekolah} />
//            <Field label="Jurusan" value={data.jurusan} />
//            <Field label="Email" value={data.email} />

//            {/* CV */}
//            <div className="space-y-2">
//              <Label>CV</Label>
//              <PdfRow
//                fileUrl={data.cvUrl}
//                fileName={data.cvUrl ? extractName(data.cvUrl) : "Tidak ada berkas"}
//              />
//            </div>

//            {/* Transkrip */}
//            <div className="space-y-2">
//              <Label>Transkrip</Label>
//              <PdfRow
//                fileUrl={data.transkripUrl}
//                fileName={data.transkripUrl ? extractName(data.transkripUrl) : "Tidak ada berkas"}
//              />
//            </div>
//          </div>
//        )}
//      </div>
//    </div>
//    </DashboardLayout2>
//  );
//}

///* ---------- Small UI helpers (inline, no extra files) ---------- */

//function Label({ children }: { children: React.ReactNode }) {
//  return <div className="text-sm font-medium text-gray-700">{children}</div>;
//}

//function Field({ label, value }: { label: string; value?: string }) {
//  return (
//    <div className="space-y-1">
//      <Label>{label}</Label>
//      <input
//        disabled
//        value={value ?? ""}
//        className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-900"
//      />
//    </div>
//  );
//}

//function PdfRow({
//  fileUrl,
//  fileName,
//}: {
//  fileUrl?: string;
//  fileName: string;
//}) {
//  const clickable = !!fileUrl;
//  return (
//    <button
//      type="button"
//      disabled={!clickable}
//      onClick={() => fileUrl && window.open(fileUrl, "_blank")}
//      className={`flex w-full items-center gap-3 rounded-md border border-gray-300 px-3 py-2 text-left ${
//        clickable ? "hover:bg-gray-50" : "opacity-50"
//      }`}
//    >
//      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-red-600 text-[10px] font-bold text-white">
//        PDF
//      </div>
//      <span className="truncate text-sm text-gray-800">{fileName}</span>
//    </button>
//  );
//}

//function extractName(url: string) {
//  try {
//    const clean = url.split("?")[0];
//    return decodeURIComponent(clean.split("/").pop() || "dokumen.pdf");
//  } catch {
//    return "dokumen.pdf";
//  }
//}
