"use client";

import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  logo?: string;
  bgImage?: string;
  subtitle?: string; 
}

export default function DetailHeader({
  name,
  logo,
  bgImage = "/img/GAMBAR-PERUSAHAAN.png",
  subtitle,
}: Props) {
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
        <div className="-mt-14 mb-4 w-[90px] h-[90px] rounded-md bg-white shadow flex items-center justify-center">
          <Image
            src={logo || "/img/sejarah-mavoka.png"}
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
