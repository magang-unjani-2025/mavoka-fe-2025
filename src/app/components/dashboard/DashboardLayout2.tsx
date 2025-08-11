"use client";

import { useState } from "react";
import TopNavbar from "./siswa/TopNavbar";
import Sidebar from "./sidebar";

export default function DashboardLayout2({
  children,
  role,
}: {
  children: React.ReactNode;
  role: "perusahaan" | "lpk" | "sekolah" | "siswa";
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar role={role} isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNavbar />
        <main className="flex-1 bg-gray-50 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
