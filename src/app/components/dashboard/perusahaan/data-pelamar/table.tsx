"use client";
import React from "react";
import { useRouter } from "next/navigation";
import type { Applicant, ApplicantStatus } from "@/types/pelamar";
import { BiSolidFilePdf } from "react-icons/bi";

type Props = {
  data: Applicant[];
  onInterviewClick: (a: Applicant) => void;
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  buildDetailHref?: (id: string) => string;
};

export default function Table({ data, onInterviewClick, onAccept, onReject, buildDetailHref }: Props) {
  const router = useRouter();

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1400px] table-auto border-separate border-spacing-y-3">
        <thead>
          <tr className="bg-blue-700 text-left text-white">
            {["NO","NAMA SISWA","POSISI","ASAL SEKOLAH","JURUSAN","EMAIL","CV","TRANSKRIP NILAI","DETAIL","STATUS","AKSI"]
              .map((h, i) => <th key={i} className="px-4 py-3 text-sm font-semibold">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((a, idx) => (
            <tr key={a.id} className="rounded-lg bg-white shadow-sm">
              <td className="px-4 py-4 text-sm text-gray-700">{idx + 1}</td>
              <td className="px-4 py-4 text-sm capitalize">{a.nama}</td>
              <td className="px-4 py-4 text-sm capitalize">{a.posisi}</td>
              <td className="px-4 py-4 text-sm">{a.asalSekolah}</td>
              <td className="px-4 py-4 text-sm">{a.jurusan}</td>
              <td className="px-4 py-4 text-sm break-words">{a.email}</td>

              <td className="px-4 py-4">
                <PdfButton title="Lihat CV" url={a.cvUrl} />
              </td>
              <td className="px-4 py-4">
                <PdfButton title="Lihat Transkrip" url={a.transkripUrl} />
              </td>

              <td className="px-4 py-4">
                <button
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  onClick={() => {
                    const href = buildDetailHref
                      ? buildDetailHref(a.id)
                      : `/dashboard-perusahaan/pelamar/${a.id}`;
                    router.push(href);
                  }}
                >
                  Detail
                </button>
              </td>

              <td className="px-4 py-4"><StatusChip status={a.status} /></td>

              <td className="px-4 py-4">
                <ActionButtons
                  applicant={a}
                  onInterviewClick={onInterviewClick}
                  onAccept={onAccept}
                  onReject={onReject}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ======= sub-komponen lokal (disatukan di file ini) ======= */

function StatusChip({ status }: { status: ApplicantStatus }) {
  const map: Record<ApplicantStatus, string> = {
    lamar: "bg-gray-100 text-gray-700",
    wawancara: "bg-yellow-100 text-yellow-800",
    diterima: "bg-green-100 text-green-700",
    ditolak: "bg-red-100 text-red-700",
  };
  const label: Record<ApplicantStatus, string> = {
    lamar: "Lamar", wawancara: "Interview", diterima: "Diterima", ditolak: "Ditolak",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${map[status]}`}>
      ● {label[status]}
    </span>
  );
}

function PdfButton({ url, title = "Buka PDF" }: { url?: string; title?: string }) {
  const clickable = !!url;
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      disabled={!clickable}
      onClick={() => url && window.open(url, "_blank")}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-red-50 active:scale-95 ${
        clickable ? "" : "opacity-50"
      }`}
    >
      <BiSolidFilePdf size={22} className="text-red-600" />
    </button>
  );
}

function ActionButtons({
  applicant, onInterviewClick, onAccept, onReject,
}: {
  applicant: Applicant;
  onInterviewClick: (a: Applicant) => void;
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
}) {
  const s = applicant.status;
  const Btn = ({
    children, color, onClick,
  }: { children: React.ReactNode; color: "green" | "red"; onClick: () => void }) => (
    <button
      className={`rounded-md px-3 py-2 text-sm text-white hover:brightness-110 ${
        color === "green" ? "bg-green-600" : "bg-red-600"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );

  if (s === "lamar") {
    return (
      <div className="flex gap-2">
        <Btn color="green" onClick={() => onInterviewClick(applicant)}>Interview</Btn>
        <Btn color="red" onClick={() => onReject(applicant.id)}>Tolak</Btn>
      </div>
    );
  }
  if (s === "wawancara") {
    return (
      <div className="flex gap-2">
        <Btn color="green" onClick={() => onAccept(applicant.id)}>Terima</Btn>
        <Btn color="red" onClick={() => onReject(applicant.id)}>Tolak</Btn>
      </div>
    );
  }
  return <div className="text-gray-400">—</div>;
}
