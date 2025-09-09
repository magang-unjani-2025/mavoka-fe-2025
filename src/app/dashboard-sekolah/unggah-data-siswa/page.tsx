"use client";

import { useState } from "react";
import DashboardLayout2 from "@/app/components/dashboard/DashboardLayout2";
import ToggleTabs from "@/app/components/dashboard/toggleTab";
import UploadExcel from "@/app/components/dashboard/sekolah/unggah-data/uploadExcel";
import UploadManual from "@/app/components/dashboard/sekolah/unggah-data/uploadManual";

const tabs = [
  { text: "Dengan File", value: "excel" },
  { text: "Manual", value: "manual" },
] as const;

type Mode = (typeof tabs)[number]["value"];

export default function UnggahDataSiswa() {
  const [mode, setMode] = useState<Mode>("excel");

  return (
    <DashboardLayout2>
      {/* Wrapper tinggi penuh sisa <main> */}
      <div className="flex h-full min-h-0 flex-col">
        {/* Toggle: statis, tidak ikut scroll */}
        <div className="mb-6 shrink-0">
          <ToggleTabs<typeof mode>
            tabs={tabs}
            value={mode}
            onChange={setMode}
          />
        </div>

        {/* Panel putih: hanya bagian ini yang scroll */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <div className="h-full overflow-y-auto rounded-xl bg-[#FFFFFF] shadow-sm">
            <div className="p-6">
              {mode === "excel" ? <UploadExcel /> : <UploadManual />}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout2>
  );
}
