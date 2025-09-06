"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Home, Users, FileText, LogOut, Menu, X } from "lucide-react";
import {
  HiOutlineBriefcase,
  HiOutlineBookOpen,
  HiOutlineDocumentAdd,
  HiOutlineClipboardList,
} from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { LuNotepadText } from "react-icons/lu";
import * as React from "react";
import ConfirmLogoutDialog from "./popupLogout";
import { useMedia } from "./useMedia";

type MenuItem = { name: string; href: string; icon: React.ReactNode };

type SidebarProps = {
  role: "admin" | "perusahaan" | "lpk" | "sekolah" | "siswa";
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ role, isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [logoutOpen, setLogoutOpen] = React.useState(false);

  const isDesktop = useMedia("(min-width:1280px)");
  const isTablet = useMedia("(min-width:744px) and (max-width:1279.98px)");
  const isMobile = useMedia("(max-width:743.98px)");

  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (isDesktop) return;
    if (isTablet) {
      setIsOpen(false);
      setMobileOpen(false);
      return;
    }
    if (isMobile) {
      setMobileOpen(false);
    }
  }, [isDesktop, isTablet, isMobile]);

  const menus: Record<typeof role, MenuItem[]> = {
    admin: [
      { name: "Dashboard", href: "/dashboard-admin", icon: <Home size={20} /> },
      {
        name: "Kelola Akun",
        href: "/kelola-akun",
        icon: <Users size={20} />,
      },
      {
        name: "Laporan Umum",
        href: "/laporan-umum",
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
        name: "Upload Lowongan",
        href: "/upload-lowongan",
        icon: <FileText size={20} />,
      },
      {
        name: "Pelamar",
        href: "/applicants",
        icon: <Users size={20} />,
      },
      {
        name: "Monitoring",
        href: "/monitoring",
        icon: <LuNotepadText size={20} />,
      },
      {
        name: "Pengaturan",
        href: "/pengaturan-perusahaan",
        icon: <MdOutlineSettings size={20} />,
      },
    ],
    lpk: [
      { name: "Beranda", href: "/dashboard-lpk", icon: <Home size={20} /> },
      {
        name: "Upload Pelatihan",
        href: "/upload-pelatihan",
        icon: <HiOutlineDocumentAdd size={20} />,
      },
      {
        name: "Penilaian Siswa",
        href: "/penilaian",
        icon: <HiOutlineClipboardList size={20} />,
      },
      {
        name: "Pengaturan",
        href: "/pengaturan-lpk",
        icon: <MdOutlineSettings size={20} />,
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
        href: "/pengaturan-sekolah",
        icon: <MdOutlineSettings size={20} />,
      },
    ],
    siswa: [
      { name: "Dashboard", href: "/dashboard-siswa", icon: <Home size={20} /> },
      {
        name: "Pengajuan Magang",
        href: "/dashboard-siswa/pengajuan-magang",
        icon: <HiOutlineBriefcase size={20} />,
      },
      {
        name: "Pelaksanaan Magang",
        href: "/pelaksanaan-magang",
        icon: <HiOutlineBookOpen size={20} />,
      },
      {
        name: "Pengaturan",
        href: "/pengaturan",
        icon: <MdOutlineSettings size={20} />,
      },
    ],
  };

  const handleLogout = () => router.push("/login");

  React.useEffect(() => {
    if (isMobile) setMobileOpen(false);
    if (isTablet) setIsOpen(false);
  }, [pathname]);

  const renderMenuList = () => (
    <nav className="mt-6 flex-1 flex flex-col space-y-3">
      {menus[role].map((item) => {
        let isActive = false;

        if (item.href === "/pengaturan-sekolah") {
          isActive = pathname.startsWith("/pengaturan-sekolah");
        } else if (item.href === "/pengaturan") {
          isActive = pathname.startsWith("/pengaturan");
        } else if (item.href === "/laporan-umum") {
          isActive = pathname.startsWith("/laporan-umum");
        } else if (item.href === "/pengaturan-perusahaan") {
          isActive = pathname.startsWith("/pengaturan-perusahaan");
        } else if (item.href === "/upload-lowongan") {
          isActive = pathname.startsWith("/upload-lowongan");
        } else if (item.href === "/upload-pelatihan") {
          isActive = pathname.startsWith("/upload-pelatihan");
        } else {
          isActive = pathname === item.href;
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => {
              if (isMobile) setMobileOpen(false);
              if (isTablet) setIsOpen(false);
            }}
          >
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
                {(isDesktop && isOpen) ||
                (isTablet && isOpen) ||
                (isMobile && mobileOpen) ? (
                  <span className="text-sm font-medium whitespace-nowrap">
                    {item.name}
                  </span>
                ) : null}
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
        {(isDesktop && isOpen) ||
        (isTablet && isOpen) ||
        (isMobile && mobileOpen) ? (
          <span className="text-sm font-medium whitespace-nowrap">Keluar</span>
        ) : null}
      </button>
    </nav>
  );

  const Header = ({ onToggle }: { onToggle: () => void }) => (
    <div
      className={`
    flex flex-col border-b py-3 transition-all duration-300 h-[84px]
    ${isDesktop && isOpen ? "items-end px-4 mr-5" : "justify-center mr-5 px-4"}
  `}
    >
      <button
        onClick={onToggle}
        className="mr-auto hover:bg-gray-100 rounded-none shadow-none p-0"
        aria-label="Toggle sidebar"
      >
        <Menu size={22} />
      </button>

      {(isDesktop && isOpen) ||
      (isTablet && isOpen) ||
      (isMobile && mobileOpen) ? (
        <Image
          src="/img/logo-mavoka.png"
          alt="Mavoka"
          width={150}
          height={40}
          className="transition-all duration-300"
          priority
        />
      ) : null}
    </div>
  );

  return (
    <>
      <aside
        className={[
          "bg-white border-r flex flex-col min-h-screen transition-all duration-300 overflow-hidden",
          isDesktop ? (isOpen ? "w-60" : "w-20") : "",
          isTablet ? (isOpen ? "w-60" : "w-20") : "",
          isMobile ? "hidden" : "",
        ].join(" ")}
      >
        <Header
          onToggle={() =>
            isTablet ? setIsOpen((v) => !v) : setIsOpen((v) => !v)
          }
        />
        {renderMenuList()}
      </aside>

      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed z-40 top-4 left-4 rounded-md p-2 bg-white/90 backdrop-blur border shadow sm:hidden"
        aria-label="Open sidebar"
      >
        <Menu size={22} />
      </button>

      {isMobile && (
        <>
          <div
            className={`fixed inset-0 z-40 bg-black/30 transition-opacity ${
              mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setMobileOpen(false)}
          />
          <aside
            className={`fixed z-50 top-0 left-0 h-full bg-white border-r w-60 transform transition-transform duration-300 ${
              mobileOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b py-3 px-4">
              <Image
                src="/img/logo-mavoka.png"
                alt="Mavoka"
                width={120}
                height={40}
                priority
              />
            </div>
            {renderMenuList()}
          </aside>
        </>
      )}

      {logoutOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"></div>
      )}

      <ConfirmLogoutDialog
        open={logoutOpen}
        onClose={() => setLogoutOpen(false)}
        onConfirm={() => {
          setLogoutOpen(false);
          handleLogout();
        }}
      />
    </>
  );
}
