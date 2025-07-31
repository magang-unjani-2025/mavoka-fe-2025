// src/components/home/HeaderHome.tsx
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeaderHome() {
  const router = useRouter();

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-10 lg:px-[70px] py-0">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/img/logo-fit-academy.png"
            alt="Logo"
            width={55}
            height={56}
            className="mt-3 mb-3"
          />
          <div className="flex items-center h-[56px]">
            <Image
              src="/img/logo-mavoka.png"
              alt="Mavoka"
              width={125}
              height={38}
            />
          </div>
        </div>

        {/* Menu Desktop */}
        <nav className="lg:flex space-x-5 font-medium text-sm font-poppins">
          <Link
            href="/"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Beranda
          </Link>
          <Link
            href="/tentang"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Tentang MAVOKA
          </Link>
          <Link
            href="/lowongan"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Cari Lowongan
          </Link>
          <Link
            href="/perusahaan"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Perusahaan
          </Link>
          <Link
            href="/pelatihan"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Lembaga Pelatihan
          </Link>
          <Link
            href="/sekolah"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Sekolah
          </Link>
        </nav>

        {/* Tombol Desktop */}
        <div className=" lg:flex space-x-1.5 font-poppins text-sm">
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-2 rounded-[8px] bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Masuk
          </button>

          <div className="w-px h-10 bg-gray-300" />

          <button
            onClick={() => router.push("/registrasi")}
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-[8px]"
          >
            Daftar
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        {/*<div className="lg:hidden">*/}
        {/* TODO: Tambahkan logic hamburger (state + menu) */}
        {/*<button>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>*/}
        {/*</div>*/}
      </div>
    </header>
  );
}
