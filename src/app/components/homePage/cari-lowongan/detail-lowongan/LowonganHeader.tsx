"use client";

import React from "react";

interface Props {
  name: string;
  logo?: string;
  bgImage?: string;
  subtitle?: string;
}

export default function LowonganHeader({
  name,
  subtitle,
}: Props) {
  return (
    <header className="relative rounded-2xl overflow-hidden border bg-white">
      <div className="relative bg-white flex flex-col items-center p-6">
        <h1 className="font-bold text-[#0F67B1] text-center">
          {name || "-"}
        </h1>
        {subtitle && (
          <h3 className="font-bold text-center mt-3">{subtitle}</h3>
        )}
      </div>
    </header>
  );
}
