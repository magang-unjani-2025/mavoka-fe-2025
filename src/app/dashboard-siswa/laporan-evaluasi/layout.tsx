"use client";

import React from "react";
import { ReportProvider } from "@/app/components/dashboard/siswa/laporan-evaluasi/reportProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ReportProvider>{children}</ReportProvider>;
}
