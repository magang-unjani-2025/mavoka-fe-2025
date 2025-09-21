"use client";
import { PiBookBookmarkFill } from "react-icons/pi";

interface Props {
  tugas?: string[]; // ⬅️ ubah jadi array
}

export default function Tugas({ tugas = [] }: Props) {
  return (
    <div className="mt-10 bg-white rounded-xl border p-6">
      <div className="flex items-center gap-2 mb-4">
        <PiBookBookmarkFill className="text-[#0F67B1] text-xl" />
        <h2 className="font-bold text-lg">Tugas & Tanggung Jawab</h2>
      </div>
      {tugas.length > 0 ? (
        <ul className="list-disc pl-5 space-y-1">
          {tugas.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>-</p>
      )}
    </div>
  );
}
