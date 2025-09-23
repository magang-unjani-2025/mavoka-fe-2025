//"use client";
//import { useState, useCallback } from "react";
//import HeaderBar from "@/app/components/dashboard/siswa/laporan-evaluasi/headerBar";
//import WeekCard from "@/app/components/dashboard/siswa/laporan-evaluasi/weekCard";
//import {
//  ReportProvider,
//  useReport,
//} from "@/app/components/dashboard/siswa/laporan-evaluasi/reportProvider";
//import AddWeekModal from "@/app/components/dashboard/siswa/laporan-evaluasi/addWeekModal";

//function PageInner() {
//  const { state, addWeek } = useReport();
//  const [open, setOpen] = useState(false);

//  const nextNumber = (state.weeks?.length ?? 0) + 1;

//  const handleCreate = useCallback(() => {
//    addWeek();        // tetap pakai service yang ada
//    setOpen(false);   // tutup modal
//  }, [addWeek]);

//  return (
//    <div>
//      <HeaderBar onAdd={() => setOpen(true)} />

//      <div className="space-y-4">
//        {state.weeks.map((w) => (
//          <WeekCard key={w.id} week={w} />
//        ))}
//      </div>

//      <AddWeekModal
//        open={open}
//        nextNumber={nextNumber}
//        onCancel={() => setOpen(false)}
//        onCreate={handleCreate}
//      />
//    </div>
//  );
//}

//export default function Page() {
//  return (
//    <ReportProvider>
//      <PageInner />
//    </ReportProvider>
//  );
//}

//"use client";
//import HeaderBar from "@/app/components/dashboard/siswa/laporan-evaluasi/headerBar";
//import WeekCard from "@/app/components/dashboard/siswa/laporan-evaluasi/weekCard";
//import { useReport } from "@/app/components/dashboard/siswa/laporan-evaluasi/reportProvider";

//export default function Page() {
//  const { state, addWeek } = useReport();
//  return (
//    <div className="p-6">
//      <HeaderBar onAdd={addWeek} />
//      <div className="space-y-4">
//        {state.weeks.map((w) => (
//          <WeekCard key={w.id} week={w} />
//        ))}
//      </div>
//    </div>
//  );
//}

"use client";

import { useEffect, useState } from "react";
import HeaderBar from "@/app/components/dashboard/siswa/laporan-evaluasi/headerBar";
import WeekCard from "@/app/components/dashboard/siswa/laporan-evaluasi/weekCard";
import { useReport } from "@/app/components/dashboard/siswa/laporan-evaluasi/reportProvider";

type HeaderInfo = {
  position: string | null;
  company: string | null;
  periodStart: string | Date | null;
  periodEnd: string | Date | null;
};

export default function Page() {
  const { state, addWeek } = useReport();

  // loading state untuk skeleton
  const [isLoading, setIsLoading] = useState(true);

  // sementara: data header pakai mock/null dulu
  const [header, setHeader] = useState<HeaderInfo>({
    position: null,        // ex: "Administrasi Perkantoran"
    company: null,         // ex: "PT. Bank Mandiri tbk (Persero)"
    periodStart: null,     // ex: "2026-07-01"
    periodEnd: null,       // ex: "2026-08-31"
  });

  useEffect(() => {
    // simulasi fetch; ganti ke real fetch saat endpoint siap
    const t = setTimeout(() => {
      // kalau mau demo pakai data contoh, isi di sini:
       setHeader({
         position: "Administrasi Perkantoran",
         company: "PT. Bank Mandiri tbk (Persero)",
         periodStart: "2026-07-01",
         periodEnd: "2026-08-31",
       });
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="p-6">
      <HeaderBar
        isLoading={isLoading}
        onAdd={addWeek}
        position={header.position}
        company={header.company}
        periodStart={header.periodStart}
        periodEnd={header.periodEnd}
      />

      <div className="space-y-4">
        {state.weeks.map((w) => (
          <WeekCard key={w.id} week={w} />
        ))}
      </div>
    </div>
  );
}

