"use client";
import React from "react";
import type { ApplicantStatus, Position } from "@/types/pelamar";

type Props = {
  positions: Position[];
  posisiId: string;
  status: ApplicantStatus | "";
  onChangePosisi: (id: string) => void;
  onChangeStatus: (s: ApplicantStatus | "") => void;
};

export default function Filter({ positions, posisiId, status, onChangePosisi, onChangeStatus }: Props) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2">
        <label className="w-14 text-sm text-gray-600">Posisi</label>
        <select
          className="h-10 min-w-[200px] rounded-md border border-gray-300 px-3 outline-none"
          value={posisiId}
          onChange={(e) => onChangePosisi(e.target.value)}
        >
          <option value="">Pilih Posisi</option>
          {positions.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label className="w-14 text-sm text-gray-600">Status</label>
        <select
          className="h-10 min-w-[200px] rounded-md border border-gray-300 px-3 outline-none"
          value={status}
          onChange={(e) => onChangeStatus(e.target.value as ApplicantStatus | "")}
        >
          <option value="">Pilih Status</option>
          <option value="lamar">Lamar</option>
          <option value="wawancara">Wawancara</option>
          <option value="diterima">Diterima</option>
          <option value="ditolak">Ditolak</option>
        </select>
      </div>
    </div>
  );
}
