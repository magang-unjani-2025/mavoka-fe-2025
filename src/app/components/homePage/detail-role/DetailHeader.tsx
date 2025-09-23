"use client";

import Image from "next/image";
import React, { useMemo } from "react";

interface Props {
  name: string;
  logo?: string | null; // bisa null
  bgImage?: string;
  subtitle?: string; 
}

export default function DetailHeader({
  name,
  logo,
  bgImage = "/img/GAMBAR-PERUSAHAAN.png",
  subtitle,
}: Props) {
  // Normalisasi logo: jika relatif (tidak mulai http), gabungkan dengan BASE_URL
  const normalizedLogo = useMemo(() => {
    if (!logo) return "/img/sejarah-mavoka.png";
    if (/^https?:\/\//i.test(logo)) return logo; // already absolute
    const base = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || "";
    return `${base}/${logo.replace(/^\//,'')}`;
  }, [logo]);

  return (
    <header className="relative rounded-2xl overflow-hidden border bg-white">
      <div className="h-56 w-full relative">
        <Image
          src={bgImage}
          alt={`${name} background`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative bg-white flex flex-col items-center p-6">
        <div className="-mt-14 mb-4 w-[90px] h-[90px] rounded-md bg-white shadow flex items-center justify-center overflow-hidden">
          <Image
            src={normalizedLogo}
            alt={name}
            width={80}
            height={80}
            className="object-contain rounded"
          />
        </div>
        <h1 className="text-xl font-bold text-[#0F67B1] text-center">
          {name || "-"}
        </h1>
        {subtitle && (
          <p className="text-sm text-gray-500 text-center mt-1">{subtitle}</p>
        )}
      </div>
    </header>
  );
}
