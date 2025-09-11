"use client";

import * as React from "react";
import LineTrendChart from "./lineTrendChart";
import YearSelect from "./yearSelect";
import type { YearlyData } from "./type";

type Props = {
  title?: string;
  datasets: YearlyData[];
  defaultYear?: number;
};

export default function LineChartCard({
  title = "Data Siswa Pemagang",
  datasets,
  defaultYear,
}: Props) {
  const years = React.useMemo(
    () => datasets.map((d) => d.year).sort((a, b) => a - b),
    [datasets]
  );
  const initial = defaultYear ?? years[years.length - 1];
  const [year, setYear] = React.useState<number>(initial);
  const current = datasets.find((d) => d.year === year) ?? datasets[0];

  const legendItems = [
  { label: "Pemagang Aktif", color: "#28A745" }, // hijau
  { label: "Pelamar Aktif", color: "#347AE2" }, // biru
  { label: "Terdaftar", color: "#FFCC00" },     // kuning
  { label: "Terkendala", color: "#BA0000" },    // merah
];


  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold tracking-tight">
          {title}
        </h2>

        <div className="flex flex-wrap items-center gap-4">
          {/* Legend */}
          <ul className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            {legendItems.map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>

          {/* Year select */}
          <YearSelect years={years} value={year} onChange={setYear} />
        </div>
      </div>

      {/* Chart */}
      <div className="mt-4 rounded-xl border border-slate-100 p-2">
        <LineTrendChart data={current.points} />
      </div>
    </section>
  );
}
