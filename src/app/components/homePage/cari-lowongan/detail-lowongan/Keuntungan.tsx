"use client";
import { BsJournalBookmarkFill } from "react-icons/bs";

interface Props {
  benefit?: string[]; // ⬅️ ubah jadi array
}

export default function Keuntungan({ benefit = [] }: Props) {
  return (
    <div className="mt-10 bg-white rounded-xl border p-6">
      <div className="flex items-center gap-2 mb-4">
        <BsJournalBookmarkFill className="text-[#0F67B1] text-xl" />
        <h2 className="font-bold text-lg">Keuntungan</h2>
      </div>
      {benefit.length > 0 ? (
        <ul className="list-disc pl-5 space-y-1">
          {benefit.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>-</p>
      )}
    </div>
  );
}
