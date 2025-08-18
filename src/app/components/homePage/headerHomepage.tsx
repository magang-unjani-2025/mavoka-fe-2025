//// src/components/home/HeaderHome.tsx
//import Image from "next/image";
//import Link from "next/link";
//import { useRouter } from "next/navigation";

//export default function HeaderHome() {
//  const router = useRouter();

//  return (
//    <header className="w-full bg-white shadow-md">
//      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-10 lg:px-[70px] py-0">
//        {/* Logo */}
//        <div className="flex items-center space-x-2">
//          <Image
//            src="/img/logo-fit-academy.png"
//            alt="Logo"
//            width={55}
//            height={56}
//            className="mt-3 mb-3"
//          />
//          <div className="flex items-center h-[56px]">
//            <Image
//              src="/img/logo-mavoka.png"
//              alt="Mavoka"
//              width={125}
//              height={38}
//            />
//          </div>
//        </div>

//        {/* Menu Desktop */}
//        <nav className="lg:flex space-x-5 font-medium text-sm font-poppins">
//          <Link
//            href="/"
//            className="hover:text-blue-600 transition-colors duration-200"
//          >
//            Beranda
//          </Link>
//          <Link
//            href="/tentang"
//            className="hover:text-blue-600 transition-colors duration-200"
//          >
//            Tentang MAVOKA
//          </Link>
//          <Link
//            href="/lowongan"
//            className="hover:text-blue-600 transition-colors duration-200"
//          >
//            Cari Lowongan
//          </Link>
//          <Link
//            href="/perusahaan"
//            className="hover:text-blue-600 transition-colors duration-200"
//          >
//            Perusahaan
//          </Link>
//          <Link
//            href="/pelatihan"
//            className="hover:text-blue-600 transition-colors duration-200"
//          >
//            Lembaga Pelatihan
//          </Link>
//          <Link
//            href="/sekolah"
//            className="hover:text-blue-600 transition-colors duration-200"
//          >
//            Sekolah
//          </Link>
//        </nav>

//        {/* Tombol Desktop */}
//        <div className="lg:flex items-center space-x-1.5">
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
//      </div>
//    </header>
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

  // Tutup dropdown saat pindah halaman
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 tablet:px-10 desktop:px-[70px] py-0 h-16">
        {/* Logo */}
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
          <Link href="/" className="hover:text-blue-600 transition-colors duration-200">Beranda</Link>
          <Link href="/tentang" className="hover:text-blue-600 transition-colors duration-200">Tentang MAVOKA</Link>
          <Link href="/lowongan" className="hover:text-blue-600 transition-colors duration-200">Cari Lowongan</Link>
          <Link href="/perusahaan" className="hover:text-blue-600 transition-colors duration-200">Perusahaan</Link>
          <Link href="/pelatihan" className="hover:text-blue-600 transition-colors duration-200">Lembaga Pelatihan</Link>
          <Link href="/sekolah" className="hover:text-blue-600 transition-colors duration-200">Sekolah</Link>
        </nav>

        {/* Tombol Desktop (DESAIN ASLI – tidak diubah) */}
        <div className="hidden desktop:flex items-center space-x-1.5">
          <button
            onClick={() => router.push("/login")}
            className="bg-[#0F67B1] text-white hover:bg-opacity-70 transition"
          >
            Masuk
          </button>
          <div className="w-[1.5px] h-7 bg-black" />
          <button
            onClick={() => router.push("/registrasi")}
            className="border hover:bg-gray-100 border-[#0F67B1] text-[#0F67B1]"
          >
            Daftar
          </button>
        </div>

        {/* Area kanan untuk tablet & mobile */}
        <div className="flex items-center gap-3 desktop:hidden">
          {/* Tablet: tampilkan tombol (DESAIN ASLI) */}
          <div className="hidden tablet:flex items-center space-x-1.5">
            <button
              onClick={() => router.push("/login")}
              className="bg-[#0F67B1] text-white hover:bg-opacity-70 transition"
            >
              Masuk
            </button>
            <div className="w-[1.5px] h-7 bg-black" />
            <button
              onClick={() => router.push("/registrasi")}
              className="border hover:bg-gray-100 border-[#0F67B1] text-[#0F67B1]"
            >
              Daftar
            </button>
          </div>

          {/* Hamburger (dibesarkan) */}
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

      {/* Dropdown untuk tablet & mobile */}
      <div className={`desktop:hidden ${open ? "block" : "hidden"} border-t border-black/10 bg-white shadow-sm`}>
        <div className="mx-auto max-w-screen-xl px-4 tablet:px-10 desktop:px-[70px] py-3">
          <div className="flex flex-col gap-2 py-2 text-sm font-medium font-poppins">
            <Link href="/" className="rounded-lg px-2 py-2 hover:bg-slate-50">Beranda</Link>
            <Link href="/tentang" className="rounded-lg px-2 py-2 hover:bg-slate-50">Tentang MAVOKA</Link>
            <Link href="/lowongan" className="rounded-lg px-2 py-2 hover:bg-slate-50">Cari Lowongan</Link>
            <Link href="/perusahaan" className="rounded-lg px-2 py-2 hover:bg-slate-50">Perusahaan</Link>
            <Link href="/pelatihan" className="rounded-lg px-2 py-2 hover:bg-slate-50">Lembaga Pelatihan</Link>
            <Link href="/sekolah" className="rounded-lg px-2 py-2 hover:bg-slate-50">Sekolah</Link>

            {/* Mobile: tombol muncul di dropdown (DESAIN ASLI) */}
            <div className="mt-2 flex gap-2 tablet:hidden">
              <button
                onClick={() => router.push("/login")}
                className="bg-[#0F67B1] text-white hover:bg-opacity-70 transition w-full"
              >
                Masuk
              </button>
              <button
                onClick={() => router.push("/registrasi")}
                className="border hover:bg-gray-100 border-[#0F67B1] text-[#0F67B1] w-full"
              >
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/** Hamburger lebih besar (26px) + animasi */
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
