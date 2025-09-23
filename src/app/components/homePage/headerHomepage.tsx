"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Container } from "@/app/components/Container";
import { HiUser } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import ConfirmLogoutDialog from "@/app/components/dashboard/popupLogout";

type User = {
  id: number | string;
  username: string;
  email: string;
  role?: string;
  name: string;
  avatar: string;
};

export default function HeaderHome() {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const storedUser =
      typeof window !== "undefined" ? localStorage.getItem("user") : null;
    const storedRole =
      typeof window !== "undefined" ? localStorage.getItem("role") : null;
    if (token && storedUser) setUser(JSON.parse(storedUser));
    if (storedRole) setRole(storedRole);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function navLink(path: string, label: string) {
    const isActive =
      path === "/" ? pathname === "/" : pathname.startsWith(path);
    return (
      <Link
        href={path}
        prefetch={false}
        className={`transition-colors duration-200 ${
          isActive ? "text-[#0F67B1]" : "hover:text-[#0F67B1]"
        }`}
      >
        {label}
      </Link>
    );
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    setUser(null);
    setRole(null);
    setOpen(false);
    setDropdownOpen(false);
    setMobileProfileOpen(false);
    setConfirmOpen(false);
    router.push("/");
  }

  function getDashboardPath(r?: string) {
    const role = (r ?? "").toLowerCase();
    switch (role) {
      case "siswa":
        return "/dashboard-siswa";
      case "sekolah":
        return "/dashboard-sekolah";
      case "perusahaan":
        return "/dashboard-perusahaan";
      case "lpk":
        return "/dashboard-lpk";
      case "admin":
        return "/dashboard-admin";
      default:
        return "/";
    }
  }

  const effectiveRole = (role ?? user?.role ?? "").toLowerCase();

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <Container className="flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image
            src="/img/logo-fit-academy.png"
            alt="Logo"
            width={55}
            height={56}
            className="mt-3 mb-3"
            priority
          />
          <div className="flex items-center h-[56px]">
            <Image
              src="/img/logo-mavoka.png"
              alt="Mavoka"
              width={125}
              height={38}
              priority
            />
          </div>
        </Link>

        <nav className="hidden desktop:flex space-x-5 font-medium text-sm font-poppins">
          {navLink("/", "Beranda")}
          {navLink("/tentang-mavoka", "Tentang MAVOKA")}
          {navLink("/lowongan", "Cari Lowongan")}
          {navLink("/list-perusahaan", "Perusahaan")}
          {navLink("/lpk", "Lembaga Pelatihan")}
          {navLink("/sekolah", "Sekolah")}
        </nav>

        <div className="hidden desktop:flex items-center space-x-3">
          {!user ? (
            <>
              <button
                onClick={() => router.push("/login")}
                className="bg-[#0F67B1] text-white hover:bg-opacity-70 transition px-4 py-2 rounded-md "
              >
                Masuk
              </button>
              <div className="w-[1.5px] h-7 bg-black" />
              <button
                onClick={() => router.push("/registrasi")}
                className="border hover:bg-gray-100 border-[#0F67B1] text-[#0F67B1] px-4 py-2 rounded-md"
              >
                Daftar
              </button>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((s) => !s)}
                className="flex items-center gap-3 py-1.5 px-2 shadow-none border rounded-md"
                aria-haspopup="menu"
                aria-expanded={dropdownOpen}
              >
                {user.avatar && user.avatar.trim() !== "" ? (
                  <Image
                    src={user.avatar}
                    alt={user.name || "Avatar"}
                    width={35}
                    height={35}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
                    <HiUser className="text-xl" />
                  </div>
                )}
                <IoChevronDown
                  className={`transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-56 p-2 bg-white border rounded-md shadow-lg z-50"
                >
                  <Link
                    href={getDashboardPath(effectiveRole)}
                    prefetch={false}
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg"
                  >
                    <LuLayoutPanelLeft className="text-[18px]" />
                    <span>Dashboard</span>
                  </Link>

                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      setConfirmOpen(true);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg shadow-none text-[#BA0000]"
                  >
                    <IoIosLogOut className="text-[18px]" />
                    <span>Keluar</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center desktop:hidden">
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="shadow-none inline-flex items-center justify-center h-12 w-12"
          >
            <Hamburger open={open} />
          </button>
        </div>
      </Container>

      <div
        className={`desktop:hidden ${
          open ? "fixed inset-x-0 top-16 z-50" : "hidden"
        }`}
      >
        <div className="bg-white shadow-xl border-t border-black/10">
          <Container className="py-4 max-h-[calc(100vh-4rem)] overflow-auto">
            <div className="flex flex-col gap-2 py-2 text-sm font-medium font-poppins">
              <Link
                href="/"
                prefetch={false}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-2 ${
                  pathname === "/" ? "text-[#0F67B1]" : "hover:bg-gray-100"
                }`}
              >
                Beranda
              </Link>
              <Link
                href="/tentang-mavoka"
                prefetch={false}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-2 ${
                  pathname.startsWith("/tentang")
                    ? "text-[#0F67B1]"
                    : "hover:bg-gray-100"
                }`}
              >
                Tentang MAVOKA
              </Link>
              <Link
                href="/lowongan"
                prefetch={false}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-2 ${
                  pathname.startsWith("/lowongan")
                    ? "text-[#0F67B1]"
                    : "hover:bg-gray-100"
                }`}
              >
                Cari Lowongan
              </Link>
              <Link
                href="/list-perusahaan"
                prefetch={false}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-2 ${
                  pathname.startsWith("/list-perusahaan")
                    ? "text-[#0F67B1]"
                    : "hover:bg-gray-100"
                }`}
              >
                Perusahaan
              </Link>
              <Link
                href="/lpk"
                prefetch={false}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-2 ${
                  pathname.startsWith("/lpk")
                    ? "text-[#0F67B1]"
                    : "hover:bg-gray-100"
                }`}
              >
                Lembaga Pelatihan
              </Link>
              <Link
                href="/sekolah"
                prefetch={false}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-2 ${
                  pathname.startsWith("/sekolah")
                    ? "text-[#0F67B1]"
                    : "hover:bg-gray-100"
                }`}
              >
                Sekolah
              </Link>

              {/* Auth area (mobile) */}
              <div className="mt-3 flex flex-col gap-3">
                {!user ? (
                  <>
                    <button
                      onClick={() => {
                        setOpen(false);
                        router.push("/login");
                      }}
                      className="w-full h-10 rounded-md bg-[#0F67B1] text-white hover:bg-opacity-80 transition"
                    >
                      Masuk
                    </button>
                    <button
                      onClick={() => {
                        setOpen(false);
                        router.push("/registrasi");
                      }}
                      className="w-full h-10 rounded-md border border-[#0F67B1] text-[#0F67B1] hover:bg-gray-50 transition"
                    >
                      Daftar
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col gap-2">
                    {/* Mobile profile dropdown header (avatar + chevron, tanpa nama) */}
                    <button
                      onClick={() => setMobileProfileOpen((s) => !s)}
                      className="w-full flex items-center justify-between px-3 py-2 border rounded-md shadow-none"
                      aria-expanded={mobileProfileOpen}
                      aria-controls="mobile-profile-menu"
                    >
                      <div className="flex items-center gap-3">
                        {user.avatar && user.avatar.trim() !== "" ? (
                          <Image
                            src={user.avatar}
                            alt={user.name || "Avatar"}
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
                            <HiUser className="text-xl" />
                          </div>
                        )}
                      </div>
                      <IoChevronDown
                        className={`transition-transform ${
                          mobileProfileOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileProfileOpen && (
                      <div
                        id="mobile-profile-menu"
                        className="mt-1 overflow-hidden rounded-md border"
                      >
                        <button
                          onClick={() => {
                            setOpen(false);
                            setMobileProfileOpen(false);
                            router.push(getDashboardPath(effectiveRole));
                          }}
                          className="w-full flex items-center gap-2 px-4 py-2 text-left text-sm hover:bg-gray-100 shadow-none"
                        >
                          <LuLayoutPanelLeft className="text-[18px]" />
                          <span>Dashboard</span>
                        </button>

                        <button
                          onClick={() => {
                            setMobileProfileOpen(false);
                            setConfirmOpen(true);
                          }}
                          className="w-full flex items-center gap-2 px-4 py-2 text-left text-sm hover:bg-gray-100 text-[#BA0000] shadow-none"
                        >
                          <IoIosLogOut className="text-[18px]" />
                          <span>Keluar</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Confirm Logout Dialog (reusable) */}
      <ConfirmLogoutDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleLogout}
      />
    </header>
  );
}

/** Hamburger 26px + animasi */
function Hamburger({ open }: { open: boolean }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y={open ? "11" : "6"}
        width="18"
        height="2.4"
        rx="1.2"
        className="transition-all"
        transform={open ? "rotate(45 12 12)" : undefined}
      />
      <rect
        x="3"
        y="11"
        width="18"
        height="2.4"
        rx="1.2"
        className={`transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
      />
      <rect
        x="3"
        y={open ? "11" : "16"}
        width="18"
        height="2.4"
        rx="1.2"
        className="transition-all"
        transform={open ? "rotate(-45 12 12)" : undefined}
      />
    </svg>
  );
}
