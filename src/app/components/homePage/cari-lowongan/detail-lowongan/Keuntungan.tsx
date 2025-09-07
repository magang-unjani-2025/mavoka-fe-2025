"use client";
import { BsJournalBookmarkFill } from "react-icons/bs";

interface Props {
  benefit?: string | null;
}

export default function Keuntungan({ benefit = "-" }: Props) {
  return (
    <div className="mt-10 bg-white rounded-xl border p-6">
      <div className="flex items-center gap-2 mb-4">
        <BsJournalBookmarkFill className="text-[#0F67B1] text-xl" />
        <h2 className="font-bold text-lg">Keuntungan</h2>
      </div>
      <p>{benefit}</p>
    </div>
  );
}
