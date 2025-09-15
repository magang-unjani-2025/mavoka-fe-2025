"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { reportService } from "@/services/laporan-siswa";
import type { ReportState } from "@/types/laporan-siswa";

// ... existing imports & types
type Ctx = {
  state: ReportState;
  addWeek: () => void;
  addLog: (weekId: string, log: any) => void;
  finalizeWeek: (weekId: string, days: 5 | 6 | 7) => void;
  setCoverPhoto: (weekId: string, url: string) => void; // <— NEW
};

const ReportCtx = createContext<Ctx | null>(null);

export function ReportProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ReportState>({ weeks: [] });
  useEffect(() => setState(reportService.getState()), []);

  const addWeek = () => setState(reportService.addWeek());
  const addLog = (weekId: string, log: any) => setState(reportService.addLog(weekId, log));
  const finalizeWeek = (weekId: string, days: 5 | 6 | 7) =>
    setState(reportService.finalizeWeek(weekId, days));

  const setCoverPhoto = (weekId: string, url: string) =>
    setState((prev) => ({
      ...prev,
      weeks: prev.weeks.map((w: any) =>
        w.id === weekId ? { ...w, coverPhotoUrl: url } : w
      ),
    }));

  return (
    <ReportCtx.Provider value={{ state, addWeek, addLog, finalizeWeek, setCoverPhoto }}>
      {children}
    </ReportCtx.Provider>
  );
}


export function useReport() {
  const ctx = useContext(ReportCtx);
  if (!ctx) throw new Error("useReport must be used within ReportProvider");
  return ctx;
}
