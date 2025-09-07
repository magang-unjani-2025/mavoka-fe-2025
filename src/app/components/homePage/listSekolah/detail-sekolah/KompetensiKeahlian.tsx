"use client";
import { PiBookBookmarkFill } from "react-icons/pi";

interface Props {
  jurusan?: { id: number; nama_jurusan: string }[];
}

export default function KompetensiKeahlian({ jurusan = [] }: Props) {
  return (
    <div className="mt-10 bg-white rounded-xl border p-6">
      <div className="flex items-center gap-2 mb-4">
        <PiBookBookmarkFill className="text-[#0F67B1] text-xl" />
        <h2 className="font-bold text-lg">Kompetensi Keahlian</h2>
      </div>

      {jurusan.length > 0 ? (
        <ul className="list-disc list-inside space-y-1">
          {jurusan.map((j) => (
            <li className="text-sm" key={j.id}>{j.nama_jurusan}</li>
          ))}
        </ul>
      ) : (
        <p>-</p>
      )}
    </div>
  );
}
