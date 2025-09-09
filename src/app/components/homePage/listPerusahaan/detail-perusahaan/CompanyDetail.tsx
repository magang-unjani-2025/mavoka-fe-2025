"use client";

interface Props {
  totalLowongan?: number;
}

export default function CompanyDetail({ totalLowongan = 0 }: Props) {
  return (
    <div className="mt-10 text-center bg-white rounded-xl border p-6">
      <h3 className="mt-2 text-[#0F67B1]">{totalLowongan}</h3>
      <p>Lowongan Aktif</p>
    </div>
  );
}
