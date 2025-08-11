//"use client";

//import { useState } from "react";
//import TopNavbar from "./topNavbar";
//import Sidebar from "./sidebar";

//export default function DashboardLayout2({
//  children,
//  role,
//}: {
//  children: React.ReactNode;
//  role: "perusahaan" | "lpk" | "sekolah" | "siswa";
//}) {
//  const [isOpen, setIsOpen] = useState(true);

//  return (
//    <div className="flex h-screen overflow-hidden">
//      <Sidebar role={role} isOpen={isOpen} setIsOpen={setIsOpen} />

//      <div className="flex flex-col flex-1 overflow-hidden">
//        <TopNavbar />
//        <main className="flex-1 bg-gray-50 overflow-hidden">
//          {children}
//        </main>
//      </div>
//    </div>
//  );
//}

"use client";

import { useState, useMemo } from "react";
import TopNavbar from "./topNavbar";
import Sidebar from "./sidebar";

type Role = "perusahaan" | "lpk" | "sekolah" | "siswa";

type UserBrief = {
  fullName: string;
  orgName?: string;
  profilePic?: string;
};

export default function DashboardLayout2({
  children,
  role,
  user, // <- boleh undefined
}: {
  children: React.ReactNode;
  role: Role;
  user?: UserBrief;
}) {
  const [isOpen, setIsOpen] = useState(true);

  // ✅ SELALU pakai safeUser, jangan refer langsung user.fullName
  const safeUser = useMemo<UserBrief>(() => {
    return {
      fullName: user?.fullName ?? "Pengguna",
      orgName:
        user?.orgName ??
        (role === "siswa" ? "Sekolah Anda" : role.toUpperCase()),
      profilePic: user?.profilePic ?? "",
    };
  }, [user, role]);

  const variant = role === "siswa" ? "siswa" : "welcome";
  const settingsHref =
    role === "siswa"
      ? "/pengaturan"
      : role === "sekolah"
      ? "/pengaturan"
      : role === "lpk"
      ? "/dashboard-lpk/pengaturan"
      : "/dashboard-perusahaan/pengaturan";

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar role={role} isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNavbar
          variant={variant}
          fullName={safeUser.fullName}
          orgName={safeUser.orgName}
          profilePic={safeUser.profilePic}
          settingsHref={settingsHref}
          hasNotification
        />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}

