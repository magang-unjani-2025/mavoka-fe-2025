"use client";

import { Card } from "flowbite-react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Pemagang", value: 99.76 },
  { name: "Pelamar", value: 0.24 },
];

const COLORS = ["#2D9CDB", "#E5E7EB"]; 

export function TotalPresentasePemagang() {
  return (
    <>
      <h3 className="text-lg font-semibold text-center mb-2">
        Total Pemagang MAVOKA
      </h3>

      <div className="flex items-center justify-center">
        <PieChart width={160} height={160}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            stroke="none"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>

          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-black font-bold text-lg"
          >
            99,76%
          </text>
        </PieChart>

        <div className="ml-4 space-y-2 text-sm">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-sm bg-gray-200 mr-2"></span>
            Jumlah Pelamar
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-sm bg-[#2D9CDB] mr-2"></span>
            Pemagang
          </div>
        </div>
      </div>

      <p className="text-center text-red-500 font-medium mt-2">
        Presentase Total
      </p>
    </>
  );
}
