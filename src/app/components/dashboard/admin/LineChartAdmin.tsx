"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useEffect, useState } from "react";
import {
  StatistikPerusahaanBulanan,
  StatistikLpkBulanan,
  StatistikSekolahBulanan,
  StatistikSiswaBulanan,
} from "@/lib/api-statistik";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

type MonthlyData = {
  month: string; // dari API: "1", "2", ..., "12"
  year: number; // kalau tidak ada, bisa pakai dari prop luar
  total: number;
};

type ChartData = {
  name: string; // bisa bulan atau tahun
  perusahaan: number;
  lembaga: number;
  sekolah: number;
  siswa: number;
};

export default function LineChartAdmin() {
  const [data, setData] = useState<ChartData[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [xAxisType, setXAxisType] = useState<"month" | "year">("month");

  const currentYear = new Date().getFullYear();
  const availableYears = Array.from(
    { length: 5 },
    (_, i) => currentYear - i
  ).reverse();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [perusahaanRaw, lembagaRaw, sekolahRaw, siswaRaw] =
          await Promise.all([
            StatistikPerusahaanBulanan(),
            StatistikLpkBulanan(),
            StatistikSekolahBulanan(),
            StatistikSiswaBulanan(),
          ]);

        const injectYear = (raw: any) =>
          raw.data.map((d: any) => ({
            ...d,
            year: parseInt(raw.year),
          }));

        const perusahaan = injectYear(perusahaanRaw);
        const lembaga = injectYear(lembagaRaw);
        const sekolah = injectYear(sekolahRaw);
        const siswa = injectYear(siswaRaw);

        if (xAxisType === "month") {
          const filterByYear = (arr: MonthlyData[]) =>
            arr.filter((d) => d.year === selectedYear);

          const getValue = (arr: MonthlyData[], monthIndex: number) =>
            filterByYear(arr).find((d) => parseInt(d.month) === monthIndex + 1)
              ?.total || 0;

          const mergedData: ChartData[] = months.map((bulan, index) => ({
            name: bulan,
            perusahaan: getValue(perusahaan, index),
            lembaga: getValue(lembaga, index),
            sekolah: getValue(sekolah, index),
            siswa: getValue(siswa, index),
          }));

          setData(mergedData);
        } else {
          const groupByYear = (arr: MonthlyData[]) => {
            const map = new Map<number, number>();
            arr.forEach(({ year, total }) => {
              map.set(year, (map.get(year) || 0) + total);
            });
            return map;
          };

          const perusahaanByYear = groupByYear(perusahaan);
          const lembagaByYear = groupByYear(lembaga);
          const sekolahByYear = groupByYear(sekolah);
          const siswaByYear = groupByYear(siswa);

          const allYears = Array.from(
            new Set([
              ...perusahaan.map((d: { year: number }) => d.year),
              ...lembaga.map((d: { year: number }) => d.year),
              ...sekolah.map((d: { year: number }) => d.year),
              ...siswa.map((d: { year: number }) => d.year),
            ])
          ).sort();

          const mergedData: ChartData[] = allYears.map((year) => ({
            name: year.toString(),
            perusahaan: perusahaanByYear.get(year) || 0,
            lembaga: lembagaByYear.get(year) || 0,
            sekolah: sekolahByYear.get(year) || 0,
            siswa: siswaByYear.get(year) || 0,
          }));

          setData(mergedData);
        }
      } catch (err) {
        console.error("Gagal ambil data chart", err);
      }
    };

    fetchData();
  }, [selectedYear, xAxisType]);

  return (
    <div className="rounded-lg border p-4 shadow-sm bg-white">
      <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
        <h2 className="text-lg font-semibold">Statistik Pendaftaran</h2>

        <div className="flex gap-2">
          <select
            className="border px-3 py-1 rounded-md text-sm text-[#0F67B1] border-[#0F67B1]"
            value={xAxisType}
            onChange={(e) => setXAxisType(e.target.value as "month" | "year")}
          >
            <option value="month">Per Bulan</option>
            <option value="year">Per Tahun</option>
          </select>

          {xAxisType === "month" && (
            <select
              className="border px-3 py-1 rounded-md text-sm text-[#0F67B1] border-[#0F67B1]"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
            >
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" vertical horizontal />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" align="right" />
          <Line
            type="monotone"
            dataKey="perusahaan"
            stroke="#FFC107"
            strokeWidth={2}
            dot={false}
            name="Perusahaan"
          />
          <Line
            type="monotone"
            dataKey="lembaga"
            stroke="#FF7043"
            strokeWidth={2}
            dot={false}
            name="Lembaga Pelatihan"
          />
          <Line
            type="monotone"
            dataKey="sekolah"
            stroke="#4CAF50"
            strokeWidth={2}
            dot={false}
            name="Sekolah"
          />
          <Line
            type="monotone"
            dataKey="siswa"
            stroke="#0F67B1"
            strokeWidth={2}
            dot={false}
            name="Siswa SMK"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
