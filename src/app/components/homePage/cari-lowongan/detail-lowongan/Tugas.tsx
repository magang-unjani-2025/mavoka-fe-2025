"use client";
import { PiBookBookmarkFill } from "react-icons/pi";

interface Props {
  tugas?: string | null;
}

export default function Tugas({ tugas = "-" }: Props) {
  return (
    <div className="mt-10 bg-white rounded-xl border p-6">
      <div className="flex items-center gap-2 mb-4">
        <PiBookBookmarkFill className="text-[#0F67B1] text-xl" />
        <h2 className="font-bold text-lg">Tugas & Tanggung Jawab</h2>
      </div>
      <p>{tugas}</p>
    </div>
  );
}
