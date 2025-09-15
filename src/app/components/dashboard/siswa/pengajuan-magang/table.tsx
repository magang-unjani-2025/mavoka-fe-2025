"use client";
import React from "react";
import { BiSolidFilePdf } from "react-icons/bi";

export type ApplicationStatus =
  | "lamar"
  | "wawancara"
  | "penawaran"
  | "diterima"
  | "ditolak";

export type Application = {
  id: string;
  posisi: string;
  perusahaan: string;
  penempatan: string;
  cvUrl?: string;
  transkripUrl?: string;
  status: ApplicationStatus;
};

type Props = {
  data: Application[];
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
};

export default function StudentApplicationsTable({
  data,
  onAccept,
  onReject,
}: Props) {
  const headers = [
    "NO",
    "POSISI",
    "PERUSAHAAN",
    "PENEMPATAN",
    "CV",
    "TRANSKRIP",
    "STATUS LAMARAN",
    "AKSI",
  ];
  const colClasses = [
    "w-12", // no
    "w-56", // posisi
    "w-64", // perusahaan
    "w-64", // penempatan
    "w-16", // cv
    "w-20", // transkrip
    "w-36 whitespace-nowrap", // status
    "w-52 whitespace-nowrap", // aksi
  ];

  return (
    <div className="bg-white rounded-md p-4 shadow">
      {/* wrapper scrollable */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[900px] table-fixed border-collapse">
          <thead>
            <tr className="text-center text-white">
              {headers.map((h, i) => (
                <th
                  key={h}
                  className={`bg-[#0F67B1] px-4 py-3 text-xs font-bold ${colClasses[i]} ${
                    i === 0 ? "rounded-tl-[5px]" : ""
                  } ${i === headers.length - 1 ? "rounded-tr-[5px]" : ""}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((a, idx) => (
              <tr
                key={a.id}
                className="border-b text-xs text-center hover:bg-gray-50 last:border-b-0"
              >
                <td className="px-4 py-4">{idx + 1}</td>
                <td className="px-4 py-4">{a.posisi}</td>
                <td className="px-4 py-4">{a.perusahaan}</td>
                <td className="px-4 py-4">{a.penempatan}</td>
                <td className="px-4 py-4 text-center">
                  {a.cvUrl ? (
                    <PdfButton url={a.cvUrl} title="Lihat CV" />
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
                <td className="px-4 py-4 text-center">
                  {a.transkripUrl ? (
                    <PdfButton url={a.transkripUrl} title="Lihat Transkrip" />
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
                <td className="px-4 py-4 text-center whitespace-nowrap">
                  <StatusChip status={a.status} />
                </td>
                <td className="px-4 py-4 text-center">
                  <ActionButtons
                    status={a.status}
                    id={a.id}
                    onAccept={onAccept}
                    onReject={onReject}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusChip({ status }: { status: ApplicationStatus }) {
  const map: Record<ApplicationStatus, string> = {
    lamar: "bg-gray-100 text-gray-700",
    wawancara: "bg-yellow-100 text-yellow-800",
    penawaran: "bg-blue-100 text-blue-700",
    diterima: "bg-green-100 text-green-700",
    ditolak: "bg-red-100 text-red-700",
  };
  const label: Record<ApplicationStatus, string> = {
    lamar: "Lamar",
    wawancara: "Wawancara",
    penawaran: "Penawaran",
    diterima: "Diterima",
    ditolak: "Ditolak",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${map[status]}`}
    >
      ● {label[status]}
    </span>
  );
}

function PdfButton({ url, title }: { url: string; title: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={title}
      className="inline-flex h-8 w-8 items-center justify-center bg-transparent"
    >
      <BiSolidFilePdf size={22} style={{ color: "rgb(220, 38, 38)" }} />
    </a>
  );
}

function ActionButtons({
  status,
  id,
  onAccept,
  onReject,
}: {
  status: ApplicationStatus;
  id: string;
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
}) {
  if (status === "penawaran") {
    return (
      <div className="flex justify-center gap-2 whitespace-nowrap">
        <Btn color="green" onClick={() => onAccept(id)}>
          Terima
        </Btn>
        <Btn color="red" onClick={() => onReject(id)}>
          Tolak
        </Btn>
      </div>
    );
  }
  return <div className="text-gray-400">—</div>;
}

function Btn({
  children,
  color,
  onClick,
}: {
  children: React.ReactNode;
  color: "green" | "red";
  onClick: () => void;
}) {
  const colorMap = {
    green: "bg-green-600 hover:brightness-110",
    red: "bg-red-600 hover:brightness-110",
  };
  return (
    <button
      className={`inline-flex h-9 w-24 items-center justify-center rounded-md text-xs font-semibold text-white ${colorMap[color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
