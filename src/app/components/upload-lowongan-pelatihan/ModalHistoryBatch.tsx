"use client";
import React from "react";
import { Batch } from "@/types/pelatihan";

const isFinished = (endISO: string) => {
  if (!endISO) return false;
  const now = new Date();
  const end = new Date(endISO);
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return end.getTime() < startOfToday;
};

type Props = {
  open: boolean;
  onClose: () => void;
  batches: Batch[];
};

export default function ModalHistoryBatch({ open, onClose, batches }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-[90%] max-w-[760px] rounded-2xl bg-white p-5 md:p-6 ring-1 ring-gray-200 shadow-xl">
        <h3 className="text-center font-semibold mb-4">History Batch Pelatihan</h3>

        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            <table className="w-full text-xs">
              <thead className="bg-[#0F67B1] text-white">
                <tr>
                  {["NO", "NAMA BATCH", "PERIODE", "STATUS"].map((h, i, arr) => (
                    <th
                      key={h}
                      className={`px-4 py-3 text-left font-semibold ${
                        i === 0 ? "rounded-tl-lg" : ""
                      } ${i === arr.length - 1 ? "rounded-tr-lg" : ""}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {batches.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-4 py-8 text-center text-gray-500 bg-white">
                      Belum ada batch yang dibuat.
                    </td>
                  </tr>
                ) : (
                  batches.map((b, i) => (
                    <tr key={i} className="border-t border-gray-100">
                      <td className="px-4 py-3">{i + 1}</td>
                      <td className="px-4 py-3">{b.name}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {b.start || "-"} &nbsp;–&nbsp; {b.end || "-"}
                      </td>
                      <td className="px-4 py-3">
                        {isFinished(b.end || "") ? (
                          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 text-red-700 px-3 py-1">
                            <span className="w-2 h-2 rounded-full bg-red-700" />
                            Selesai
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-3 py-1">
                            <span className="w-2 h-2 rounded-full bg-green-700" />
                            Berjalan
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#0F67B1] text-white hover:bg-[#0d5692]"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
