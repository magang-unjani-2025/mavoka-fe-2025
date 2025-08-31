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

//"use client";

//import { useState, useMemo } from "react";
//import TopNavbar from "./topNavbar";
//import Sidebar from "./sidebar";

//type Role = "perusahaan" | "lpk" | "sekolah" | "siswa";
//type UserBrief = {
//  fullName: string;
//  orgName?: string;
//  profilePic?: string;
//};

//export default function DashboardLayout2({
//  children,
//  role,
//  user,
//}: {
//  children: React.ReactNode;
//  role: Role;
//  user?: UserBrief;
//}) {
//  const [isOpen, setIsOpen] = useState(true);          // desktop/tablet
//  const [mobileOpen, setMobileOpen] = useState(false); // mobile drawer

//  const safeUser = useMemo<UserBrief>(() => {
//    return {
//      fullName: user?.fullName ?? "Pengguna",
//      orgName:
//        user?.orgName ??
//        (role === "siswa" ? "Sekolah Anda" : role.toUpperCase()),
//      profilePic: user?.profilePic ?? "",
//    };
//  }, [user, role]);

//  const variant = role === "siswa" ? "siswa" : "welcome";
//  const settingsHref =
//    role === "siswa"
//      ? "/pengaturan"
//      : role === "sekolah"
//      ? "/pengaturan"
//      : role === "lpk"
//      ? "/pengaturan"
//      : "/dashboard-perusahaan/pengaturan";

//  return (
//    <div className="flex h-screen overflow-hidden">
      
//      {/* Sidebar terima mobileOpen */}
//      <Sidebar
//        role={role}
//        isOpen={isOpen}
//        setIsOpen={setIsOpen}
//        mobileOpen={mobileOpen}
//        setMobileOpen={setMobileOpen}
//      />

//      <div className="flex flex-col flex-1 overflow-hidden">
//        <TopNavbar
//          variant={variant}
//          fullName={safeUser.fullName}
//          orgName={safeUser.orgName}
//          profilePic={safeUser.profilePic}
//          settingsHref={settingsHref}
//          hasNotification
//          //onOpenSidebar={() => setMobileOpen(true)} // buka drawer mobile
//        />
//        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">{children}</main>
//      </div>
//    </div>
//  );
//}

// components/dashboard/DashboardLayout2.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import TopNavbar from "./topNavbar";   // ← pastikan file kecil: components/dashboard/topNavbar.tsx
import Sidebar from "./sidebar";       // ← sesuaikan path/props Sidebar milikmu

type Role = "siswa" | "sekolah" | "lpk" | "perusahaan";

type UserBrief = {
  fullName: string;
  orgName?: string;
  profilePic?: string;
};

// --- Helper: deteksi role dari path (sesuaikan dengan struktur rute kamu)
function deriveRoleFromPath(path: string): Role | undefined {
  if (path.includes("/dashboard-siswa")) return "siswa";
  if (path.includes("/dashboard-sekolah")) return "sekolah";
  if (path.includes("/dashboard-lpk")) return "lpk";
  if (path.includes("/dashboard-perusahaan")) return "perusahaan";
  return undefined;
}

// --- Helper: mapping href pengaturan per role (perhatikan tanda hubung!)
function buildSettingsHref(role: Role) {
  switch (role) {
    case "siswa":
      return "/dashboard-siswa/pengaturan/data-diri";
    case "sekolah":
      return "/dashboard-sekolah/pengaturan/profil";
    case "lpk":
      return "/dashboard-lpk/pengaturan/profil";
    case "perusahaan":
      return "/dashboard-perusahaan/pengaturan/profil";
  }
}

export default function DashboardLayout2({
  children,
  role: roleProp,
  user: userProp,
}: {
  children: React.ReactNode;
  role?: Role;         // opsional: bisa auto dari URL
  user?: UserBrief;    // opsional: bisa hydrate dari localStorage
}) {
  const pathname = usePathname();

  // Tentukan role prioritas: props > URL > default
  const role = (roleProp ?? deriveRoleFromPath(pathname) ?? "siswa") as Role;

  // Simpan user ke localStorage jika dikirim via props (agar halaman lain bisa mewarisi)
  useEffect(() => {
    if (userProp) {
      try {
        localStorage.setItem("currentUser", JSON.stringify(userProp));
      } catch {}
    }
  }, [userProp]);

  // Hydrate user dari localStorage saat user tidak dipass
  const [hydratedUser, setHydratedUser] = useState<UserBrief | undefined>(undefined);
  useEffect(() => {
    if (!userProp) {
      try {
        const raw = localStorage.getItem("currentUser");
        if (raw) setHydratedUser(JSON.parse(raw));
      } catch {}
    }
  }, [userProp]);

  // Sumber user: props → localStorage → fallback
  const safeUser = useMemo<UserBrief>(() => {
    const src = userProp ?? hydratedUser;
    if (src) {
      return {
        fullName: src.fullName,
        orgName: src.orgName,
        profilePic: src.profilePic ?? "",
      };
    }
    return {
      fullName: role === "siswa" ? "Siswa" : "Pengguna",
      orgName: role === "siswa" ? "Sekolah Anda" : role.toUpperCase(),
      profilePic: "",
    };
  }, [userProp, hydratedUser, role]);

  const variant = role === "siswa" ? "siswa" : "welcome";
  const settingsHref = buildSettingsHref(role);

  // Sidebar state (sesuaikan dengan logika milikmu)
  const [isOpen, setIsOpen] = useState(true);          // desktop/tablet
  const [mobileOpen, setMobileOpen] = useState(false); // mobile drawer

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        role={role}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNavbar
          variant={variant}
          fullName={safeUser.fullName}
          orgName={safeUser.orgName}
          profilePic={safeUser.profilePic}
          settingsHref={settingsHref}
          hasNotification
          // onBellClick={() => ...}
        />

        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
