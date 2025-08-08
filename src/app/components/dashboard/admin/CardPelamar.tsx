import { Card } from "flowbite-react";

export function CardPelamar() {
  return (
    <Card className="max-w-sm">
      <div className="p-2 space-y-1">
        <h3 className="text-base">Total Siswa Pelamar Saat Ini</h3>
        <h2 className="font-bold tracking-tight text-gray-900 dark:text-white">
          855
        </h2>
        <p className="font-normal text-[#B2ABBD] dark:text-gray-400">Siswa</p>
      </div>
    </Card>
  );
}
