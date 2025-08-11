"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Home, Users, FileText, LogOut, Menu } from "lucide-react";
import { HiOutlineBriefcase, HiOutlineBookOpen } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import * as React from "react";
import ConfirmLogoutDialog from "./popupLogout";

type MenuItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

type SidebarProps = {
  role: "admin" | "perusahaan" | "lpk" | "sekolah" | "siswa";
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ role, isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [logoutOpen, setLogoutOpen] = React.useState(false);

  const handleLogout = () => {
    router.push("/login");
  };

  const menus: Record<typeof role, MenuItem[]> = {
    admin: [
      { name: "Dashboard", href: "/dashboard-admin", icon: <Home size={20} /> },
      {
        name: "Kelola Akun",
        href: "/dashboard-admin/users",
        icon: <Users size={20} />,
      },
      {
        name: "Laporan Umum",
        href: "/dashboard-admin/reports",
        icon: <FileText size={20} />,
      },
    ],
    perusahaan: [
      {
        name: "Dashboard",
        href: "/dashboard-perusahaan",
        icon: <Home size={20} />,
      },
      {
        name: "Lowongan",
        href: "/dashboard-perusahaan/jobs",
        icon: <FileText size={20} />,
      },
      {
        name: "Pelamar",
        href: "/dashboard-perusahaan/applicants",
        icon: <Users size={20} />,
      },
    ],
    lpk: [
      { name: "Dashboard", href: "/dashboard-lpk", icon: <Home size={20} /> },
      {
        name: "Program Pelatihan",
        href: "/dashboard-lpk/programs",
        icon: <FileText size={20} />,
      },
    ],
    sekolah: [
      {
        name: "Dashboard",
        href: "/dashboard-sekolah",
        icon: <Home size={20} />,
      },
      {
        name: "Unggah Data Siswa",
        href: "/dashboard-sekolah/unggah-data",
        icon: <Users size={20} />,
      },
      {
        name: "Status Lamaran",
        href: "/dashboard-sekolah/status-lamaran",
        icon: <FileText size={20} />,
      },
      {
        name: "Laporan Evaluasi",
        href: "/dashboard-sekolah/laporan-evaluasi",
        icon: <FileText size={20} />,
      },
      {
        name: "Pengaturan",
        href: "/dashboard-sekolah/pengaturan",
        icon: <MdOutlineSettings size={20} />,
      },
    ],
    siswa: [
      { name: "Dashboard", href: "/dashboard-siswa", icon: <Home size={20} /> },
      {
        name: "Pengajuan Magang",
        href: "/pengajuan-magang",
        icon: <HiOutlineBriefcase size={20} />,
      },
      {
        name: "Pelaksanaan Magang",
        href: "/pelaksanaan-magang",
        icon: <HiOutlineBookOpen size={20} />,
      },
      {
        name: "Pengaturan",
        href: "/pengaturan/data-diri",
        icon: <MdOutlineSettings size={20} />,
      },
    ],
  };

  return (
    <aside
      className={`bg-white border-r flex flex-col min-h-screen transition-all duration-300 overflow-hidden ${
        isOpen ? "w-60" : "w-20"
      }`}
    >
      {/* Header */}
      <div
        className={`flex flex-col border-b py-3 transition-all duration-300 ${
          isOpen ? "items-end px-4 mr-5" : "items-center mr-5 px-4"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mr-auto hover:bg-gray-100 rounded-none shadow-none p-0"
          aria-label="Toggle sidebar"
        >
          <Menu size={22} />
        </button>

        <Image
          src={isOpen ? "/img/logo-mavoka.png" : "/img/logo-m.png"}
          alt="Mavoka"
          width={isOpen ? 150 : 30}
          height={40}
          className="transition-all duration-300"
          priority
        />
      </div>

      {/* Nav */}
      <nav className="mt-6 flex-1 flex flex-col space-y-3">
        {menus[role].map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div className="relative flex items-center">
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0F67B1] rounded-r-md" />
                )}
                <div
                  className={`flex items-center gap-2 px-3 py-2 ml-2 transition rounded-l-md w-full ${
                    isActive
                      ? "bg-[#0F67B1] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  {isOpen && (
                    <span className="text-sm font-medium whitespace-nowrap">
                      {item.name}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}

        <button
          type="button"
          onClick={() => setLogoutOpen(true)}
          className="shadow-none relative flex items-center gap-2 px-3 py-2 ml-2 rounded-l-md text-[#BA0000] hover:bg-[#F3F4F6] transition"
        >
          <LogOut size={20} />
          {isOpen && (
            <span className="text-sm font-medium whitespace-nowrap">Keluar</span>
          )}
        </button>
      </nav>
      <ConfirmLogoutDialog
        open={logoutOpen}
        onClose={() => setLogoutOpen(false)}
        onConfirm={() => {
          setLogoutOpen(false);
          handleLogout();
        }}
      />
    </aside>
  );
}
