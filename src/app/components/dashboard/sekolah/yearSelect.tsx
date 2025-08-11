"use client";

import * as React from "react";

type Props = {
  years: number[];
  value: number;
  onChange: (year: number) => void;
};

export default function YearSelect({ years, value, onChange }: Props) {
  return (
    <select
      className="h-8 rounded-md border border-slate-200 bg-white px-2 text-sm outline-none hover:bg-slate-50 focus:ring-2 focus:ring-sky-400"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      aria-label="Pilih tahun"
    >
      {years.map((y) => (
        <option key={y} value={y}>{y}</option>
      ))}
    </select>
  );
}
