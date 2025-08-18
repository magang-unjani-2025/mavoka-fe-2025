//"use client"; // tambahkan ini di baris paling atas

//import { useState } from "react";
//import Sidebar from "./sidebar";

//export default function DashboardLayout({
//  children,
//  role,
//}: {
//  children: React.ReactNode;
//  role: "admin" | "perusahaan" | "lpk" | "sekolah" | "siswa";
//}) {
//  const [isOpen, setIsOpen] = useState(true);

//  return (
//    <div className="flex h-screen overflow-hidden">
//      <Sidebar role={role} isOpen={isOpen} setIsOpen={setIsOpen} />
//      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">{children}</main>
//    </div>
//  );
//}

"use client";
import { useState } from "react";
import Sidebar from "./sidebar";

export default function DashboardLayout({
  children,
  role,
}: {
  children: React.ReactNode;
  role: "admin" | "perusahaan" | "lpk" | "sekolah" | "siswa";
}) {
  const [isOpen, setIsOpen] = useState(true);          // desktop/tablet
  const [mobileOpen, setMobileOpen] = useState(false); // mobile

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        role={role}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        mobileOpen={mobileOpen}           // ⬅️ tambahkan
        setMobileOpen={setMobileOpen}     // ⬅️ tambahkan
      />
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">{children}</main>
    </div>
  );
}
