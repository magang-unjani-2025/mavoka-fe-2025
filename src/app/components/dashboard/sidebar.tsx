"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Home, Users, FileText, LogOut, Menu } from "lucide-react";
import { useState } from "react";

type MenuItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

type SidebarProps = {
  role: "admin" | "perusahaan" | "lpk" | "sekolah" | "siswa";
};

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const handleLogout = () => {
    router.push("/login");
  };

  const menus: Record<typeof role, MenuItem[]> = {
    admin: [
      { name: "Dashboard", href: "/dashboard-admin", icon: <Home size={20} /> },
      { name: "Kelola Akun Pengguna", href: "/dashboard-admin/users", icon: <Users size={20} /> },
      { name: "Generate Laporan Umum", href: "/dashboard-admin/reports", icon: <FileText size={20} /> },
    ],
    perusahaan: [
      { name: "Dashboard", href: "/dashboard-perusahaan", icon: <Home size={20} /> },
      { name: "Lowongan", href: "/dashboard-perusahaan/jobs", icon: <FileText size={20} /> },
      { name: "Pelamar", href: "/dashboard-perusahaan/applicants", icon: <Users size={20} /> },
    ],
    lpk: [
      { name: "Dashboard", href: "/dashboard-lpk", icon: <Home size={20} /> },
      { name: "Program Pelatihan", href: "/dashboard-lpk/programs", icon: <FileText size={20} /> },
    ],
    sekolah: [
      { name: "Dashboard", href: "/dashboard-sekolah", icon: <Home size={20} /> },
      { name: "Data Siswa", href: "/dashboard-sekolah/students", icon: <Users size={20} /> },
    ],
    siswa: [
      { name: "Dashboard", href: "/dashboard-siswa", icon: <Home size={20} /> },
      { name: "Lowongan Saya", href: "/dashboard-siswa/applied", icon: <FileText size={20} /> },
    ],
  };

  return (
    <aside
      className={`bg-white border-r flex flex-col justify-between min-h-screen transition-all duration-300 ${
        isOpen ? "w-56" : "w-20"
      }`}
    >
      <div>
        {/* Bagian toggle + logo */}
        <div className="flex flex-col items-center border-b py-3 ">
          {/* Toggle di atas logo */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <Image
            src="/img/logo-mavoka.png"
            alt="Mavoka"
            width={isOpen ? 120 : 40}
            height={40}
            className="transition-all duration-300"
          />
        </div>

        {/* Menu */}
        <nav className="mt-4">
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
        </nav>
      </div>

      {/* Logout */}
      <div className="flex justify-center p-3">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-[#0F67B1] text-white px-3 py-1.5 rounded-md hover:bg-blue-700 text-sm"
        >
          <LogOut size={16} />
          {isOpen && "Logout"}
        </button>
      </div>
    </aside>
  );
}
