"use client";
import { PiStudent } from "react-icons/pi";

type Props = { persyaratan?: string[] | null };

export default function Persyaratan({ persyaratan = [] }: Props) {
  return (
    <div className="mt-10 bg-white rounded-xl border p-6">
      <div className="flex items-center gap-2 mb-4">
        <PiStudent className="text-[#0F67B1] text-xl" />
        <h2 className="font-bold text-lg">Persyaratan</h2>
      </div>
      <p>{persyaratan}</p>
    </div>
  );
}
