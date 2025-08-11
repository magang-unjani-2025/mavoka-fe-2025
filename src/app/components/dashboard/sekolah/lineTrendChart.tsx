"use client";

import * as React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import type { MonthlyStat } from "./type";

type Props = {
  data: MonthlyStat[];
  height?: number;
};

const tickStyle = { fontSize: 12, fill: "currentColor", opacity: 0.65 };

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs shadow-md">
      <div className="font-semibold">{label}</div>
      <div className="mt-1 space-y-0.5">
        {payload.map((p: any) => (
          <div key={p.dataKey} className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: p.color }}
            />
            <span>{p.name}:</span>
            <span className="font-medium">{p.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function LineTrendChart({ data, height = 340 }: Props) {
  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, bottom: 0, left: 0 }}
        >
          <CartesianGrid
            stroke="currentColor"
            strokeOpacity={0.15}
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tick={tickStyle}
            tickMargin={8}
            axisLine={false}
          />
          <YAxis tick={tickStyle} tickMargin={8} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="aktif"
            name="Pemagang Aktif"
            stroke="#22c55e"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="pelamarAktif"
            name="Pelamar Aktif"
            stroke="#3b82f6"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="terdaftar"
            name="Terdaftar"
            stroke="#FCC43E"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="terkendala"
            name="Terkendala"
            stroke="#b91c1c"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
