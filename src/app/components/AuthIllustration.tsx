"use client";

import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

export default function AuthIllustration() {
  const router = useRouter();

  return (
    <>
      <div className="lg:hidden w-full flex items-center justify-between px-4 py-4">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-[#0F67B1] hover:underline shadow-none"
        >
          <IoArrowBack size={20} />
          <span>Kembali</span>
        </button>
      </div>

      <div className="lg:hidden w-full flex items-center justify-center py-4">
        <img
          src="/img/logo-mavoka.png"
          alt="Mavoka"
          className="object-contain max-w-[260px] w-[60%] h-auto"
        />
      </div>

      <div className="hidden lg:flex w-1/2 bg-white items-center justify-center p-6 relative">
        <button
          onClick={() => router.push("/")}
          className="absolute top-6 left-6 flex items-center gap-2 text-[#0F67B1] hover:underline shadow-none"
        >
          <IoArrowBack size={22} />
          <span>Kembali</span>
        </button>

        <img
          src="/img/login&register.png"
          alt="Magang Vokasi"
          className="object-contain w-[739px] h-[708px] max-w-full max-h-[90vh]"
        />
      </div>
    </>
  );
}
