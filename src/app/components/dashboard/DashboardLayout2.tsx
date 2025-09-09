"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import TopNavbar from "./topNavbar";
import Sidebar from "./sidebar";

type Role = "siswa" | "sekolah" | "lpk" | "perusahaan";

type UserBrief = {
  fullName: string;
  orgName?: string;
  profilePic?: string;
};

function deriveRoleFromPath(path: string): Role | undefined {
  if (path.includes("/dashboard-siswa")) return "siswa";
  if (path.includes("/dashboard-sekolah")) return "sekolah";
  if (path.includes("/dashboard-lpk")) return "lpk";
  if (path.includes("/dashboard-perusahaan")) return "perusahaan";
  return undefined;
}

function buildSettingsHref(role: Role) {
  switch (role) {
    case "siswa":
      return "/pengaturan";
    case "sekolah":
      return "/pengaturan-sekolah";
    case "lpk":
      return "/pengaturan-lpk";
    case "perusahaan":
      return "/pengaturan-perusahaan";
  }
}

export default function DashboardLayout2({
  children,
  role: roleProp,
  user: userProp,
}: {
  children: React.ReactNode;
  role?: Role;
  user?: UserBrief;
}) {
  const pathname = usePathname();

  const role = (roleProp ?? deriveRoleFromPath(pathname) ?? "siswa") as Role;

  useEffect(() => {
    if (userProp) {
      try {
        localStorage.setItem("currentUser", JSON.stringify(userProp));
      } catch {}
    }
  }, [userProp]);

  const [hydratedUser, setHydratedUser] = useState<UserBrief | undefined>(
    undefined
  );
  useEffect(() => {
    if (!userProp) {
      try {
        const raw = localStorage.getItem("currentUser");
        if (raw) setHydratedUser(JSON.parse(raw));
      } catch {}
    }
  }, [userProp]);
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

  const [isOpen, setIsOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        />
        <main className="flex-1 overflow-y-auto p-2 bg-gray-50">
          {children}
        </main>
        {/* <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="w-full p-6 bg-white rounded-xl shadow-md">
            {children}
          </div>
        </main> */}
      </div>
    </div>
  );
}
