//"use client";

//import Image from "next/image";
//import Link from "next/link";
//import { useRouter, usePathname } from "next/navigation";
//import { useEffect, useState } from "react";

//export default function HeaderHome() {
//  const router = useRouter();
//  const pathname = usePathname();
//  const [open, setOpen] = useState(false);

//  useEffect(() => {
//    setOpen(false);
//  }, [pathname]);

//  function navLink(path: string, label: string) {
//    const isActive =
//      path === "/"
//        ? pathname === "/" // khusus beranda exact match
//        : pathname.startsWith(path); // selain itu, aktif juga kalau sub-route

//    return (
//      <Link
//        href={path}
//        className={`transition-colors duration-200 ${
//          isActive ? "text-[#0F67B1]" : "hover:text-[#0F67B1]"
//        }`}
//      >
//        {label}
//      </Link>
//    );
//  }

//  return (
//    <header className="w-full bg-white shadow-md sticky top-0 z-50">
//      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 tablet:px-10 desktop:px-[70px] py-0 h-16">
//        <Link href="/" className="flex items-center gap-2">
//          <Image
//            src="/img/logo-fit-academy.png"
//            alt="Logo"
//            width={55}
//            height={56}
//            className="mt-3 mb-3"
//            priority
//          />
//          <div className="flex items-center h-[56px]">
//            <Image
//              src="/img/logo-mavoka.png"
//              alt="Mavoka"
//              width={125}
//              height={38}
//              priority
//            />
//          </div>
//        </Link>

//        {/* Menu Desktop */}
//        <nav className="hidden desktop:flex space-x-5 font-medium text-sm font-poppins">
//          {navLink("/", "Beranda")}
//          {navLink("/tentang-mavoka", "Tentang MAVOKA")}
//          {navLink("/lowongan", "Cari Lowongan")}
//          {navLink("/list-perusahaan", "Perusahaan")}
//          {navLink("/lpk", "Lembaga Pelatihan")}
//          {navLink("/sekolah", "Sekolah")}
//        </nav>

//        <div className="hidden desktop:flex items-center space-x-1.5">
//          <button
//            onClick={() => router.push("/login")}
//            className="bg-[#0F67B1] text-white hover:bg-opacity-70 transition"
//          >
//            Masuk
//          </button>
//          <div className="w-[1.5px] h-7 bg-black" />
//          <button
//            onClick={() => router.push("/registrasi")}
//            className="border hover:bg-gray-100 border-[#0F67B1] text-[#0F67B1]"
//          >
//            Daftar
//          </button>
//        </div>

//        {/* Area kanan untuk tablet & mobile */}
//        <div className="flex items-center gap-3 desktop:hidden">
//          {/* Tablet: tampilkan tombol (DESAIN ASLI) */}
//          <div className="hidden tablet:flex items-center space-x-1.5">
//            <button
//              onClick={() => router.push("/login")}
//              className="bg-[#0F67B1] text-white hover:bg-opacity-70 transition"
//            >
//              Masuk
//            </button>
//            <div className="w-[1.5px] h-7 bg-black" />
//            <button
//              onClick={() => router.push("/registrasi")}
//              className="border hover:bg-gray-100 border-[#0F67B1] text-[#0F67B1]"
//            >
//              Daftar
//            </button>
//          </div>

//          {/* Hamburger (dibesarkan) */}
//          <button
//            aria-label="Toggle menu"
//            aria-expanded={open}
//            onClick={() => setOpen((s) => !s)}
//            className="shadow-none inline-flex items-center justify-center h-12 w-12"
//          >
//            <Hamburger open={open} />
//          </button>
//        </div>
//      </div>

//      {/* Dropdown untuk tablet & mobile */}
//      <div
//        className={`desktop:hidden ${
//          open ? "block" : "hidden"
//        } border-t border-black/10 bg-white shadow-sm`}
//      >
//        <div className="mx-auto max-w-screen-xl px-4 tablet:px-10 desktop:px-[70px] py-3">
//          <div className="flex flex-col gap-2 py-2 text-sm font-medium font-poppins">
//            <Link
//              href="/"
//              className={`rounded-lg px-2 py-2 ${
//                pathname === "/" ? "text-[#0F67B1]" : "hover:bg-slate-50"
//              }`}
//            >
//              Beranda
//            </Link>

//            <Link
//              href="/tentang-mavoka"
//              className={`rounded-lg px-2 py-2 ${
//                pathname.startsWith("/tentang")
//                  ? "text-[#0F67B1]"
//                  : "hover:bg-slate-50"
//              }`}
//            >
//              Tentang MAVOKA
//            </Link>

//            <Link
//              href="/lowongan"
//              className="rounded-lg px-2 py-2 hover:bg-slate-50"
//            >
//              Cari Lowongan
//            </Link>
//            <Link
//              href="/list-perusahaan"
//              className="rounded-lg px-2 py-2 hover:bg-slate-50"
//            >
//              Perusahaan
//            </Link>
//            <Link
//              href="/lpk"
//              className="rounded-lg px-2 py-2 hover:bg-slate-50"
//            >
//              Lembaga Pelatihan
//            </Link>
//            <Link
//              href="/sekolah"
//              className="rounded-lg px-2 py-2 hover:bg-slate-50"
//            >
//              Sekolah
//            </Link>

//            {/* Mobile: tombol muncul di dropdown (DESAIN ASLI) */}
//            <div className="mt-2 flex gap-2 tablet:hidden">
//              <button
//                onClick={() => router.push("/login")}
//                className="bg-[#0F67B1] text-white hover:bg-opacity-70 transition w-full"
//              >
//                Masuk
//              </button>
//              <button
//                onClick={() => router.push("/registrasi")}
//                className="border hover:bg-gray-100 border-[#0F67B1] text-[#0F67B1] w-full"
//              >
//                Daftar
//              </button>
//            </div>
//          </div>
//        </div>
//      </div>
//    </header>
//  );
//}

///** Hamburger lebih besar (26px) + animasi */
//function Hamburger({ open }: { open: boolean }) {
//  return (
//    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
//      <rect
//        x="3"
//        y={open ? "11" : "6"}
//        width="18"
//        height="2.4"
//        rx="1.2"
//        className="transition-all"
//        transform={open ? "rotate(45 12 12)" : undefined}
//      />
//      <rect
//        x="3"
//        y="11"
//        width="18"
//        height="2.4"
//        rx="1.2"
//        className={`transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
//      />
//      <rect
//        x="3"
//        y={open ? "11" : "16"}
//        width="18"
//        height="2.4"
//        rx="1.2"
//        className="transition-all"
//        transform={open ? "rotate(-45 12 12)" : undefined}
//      />
//    </svg>
//  );
//}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeaderHome() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function navLink(path: string, label: string) {
    const isActive =
      path === "/" ? pathname === "/" : pathname.startsWith(path);

    return (
      <Link
        href={path}
        className={`transition-colors duration-200 ${
          isActive ? "text-[#0F67B1]" : "hover:text-[#0F67B1]"
        }`}
      >
        {label}
      </Link>
    );
  }

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 tablet:px-10 desktop:px-[70px] h-16">
        <Link href="/" className="flex items-center gap-2">
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

        {/* Menu Desktop */}
        <nav className="hidden desktop:flex space-x-5 font-medium text-sm font-poppins">
          {navLink("/", "Beranda")}
          {navLink("/tentang-mavoka", "Tentang MAVOKA")}
          {navLink("/lowongan", "Cari Lowongan")}
          {navLink("/list-perusahaan", "Perusahaan")}
          {navLink("/lpk", "Lembaga Pelatihan")}
          {navLink("/sekolah", "Sekolah")}
        </nav>

        {/* Buttons Desktop */}
        <div className="hidden desktop:flex items-center space-x-1.5">
          <button
            onClick={() => router.push("/login")}
            className="bg-[#0F67B1] text-white hover:bg-opacity-70 transition px-4 py-2 rounded-md"
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
        </div>

        {/* Hamburger tablet & mobile */}
        <div className="flex items-center gap-3 desktop:hidden">
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="shadow-none inline-flex items-center justify-center h-12 w-12"
          >
            <Hamburger open={open} />
          </button>
        </div>
      </div>

      {/* ===== Dropdown (tanpa blur/hitam) ===== */}
      <div
        className={`desktop:hidden ${
          open ? "fixed inset-x-0 top-16 z-50" : "hidden"
        }`}
      >
        <div className="bg-white shadow-xl border-t border-black/10">
          <div className="mx-auto max-w-screen-xl px-4 tablet:px-10 desktop:px-[70px] py-4 max-h-[calc(100vh-4rem)] overflow-auto">
            <div className="flex flex-col gap-2 py-2 text-sm font-medium font-poppins">
              <Link
                href="/"
                className={`rounded-lg px-2 py-2 ${
                  pathname === "/" ? "text-[#0F67B1]" : "hover:bg-slate-50"
                }`}
              >
                Beranda
              </Link>

              <Link
                href="/tentang-mavoka"
                className={`rounded-lg px-2 py-2 ${
                  pathname.startsWith("/tentang")
                    ? "text-[#0F67B1]"
                    : "hover:bg-slate-50"
                }`}
              >
                Tentang MAVOKA
              </Link>

              <Link
                href="/lowongan"
                className="rounded-lg px-2 py-2 hover:bg-slate-50"
              >
                Cari Lowongan
              </Link>
              <Link
                href="/list-perusahaan"
                className="rounded-lg px-2 py-2 hover:bg-slate-50"
              >
                Perusahaan
              </Link>
              <Link
                href="/lpk"
                className="rounded-lg px-2 py-2 hover:bg-slate-50"
              >
                Lembaga Pelatihan
              </Link>
              <Link
                href="/sekolah"
                className="rounded-lg px-2 py-2 hover:bg-slate-50"
              >
                Sekolah
              </Link>

              {/* Tombol login/daftar */}
              <div className="mt-3 flex flex-col gap-3">
                <button
                  onClick={() => router.push("/login")}
                  className="w-full h-10 rounded-md bg-[#0F67B1] text-white hover:bg-opacity-80 transition"
                >
                  Masuk
                </button>
                <button
                  onClick={() => router.push("/registrasi")}
                  className="w-full h-10 rounded-md border border-[#0F67B1] text-[#0F67B1] hover:bg-gray-50 transition"
                >
                  Daftar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
