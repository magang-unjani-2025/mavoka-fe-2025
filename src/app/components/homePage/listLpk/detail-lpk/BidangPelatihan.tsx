"use client";
import { PiBookBookmarkFill } from "react-icons/pi";

interface Props {
  bidang_pelatihan?: string | null;
}

export default function BidangPelatihan({ bidang_pelatihan = "-" }: Props) {
  return (
    <div className="mt-10 bg-white rounded-xl border p-6">
      <div className="flex items-center gap-2 mb-4">
        <PiBookBookmarkFill className="text-[#0F67B1] text-xl" />
        <h2 className="font-bold text-lg">Bidang Pelatihan</h2>
      </div>
      <p>{bidang_pelatihan}</p>
    </div>
  );
}
