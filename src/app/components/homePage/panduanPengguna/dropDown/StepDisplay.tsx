"use client";

import Image from "next/image";
import type { RoleKey } from "@/types/panduan";

type Props = {
  role: RoleKey;
  stepId?: string;
  imageSrc?: string;
};

export function StepDisplay({ imageSrc }: Props) {
  if (!imageSrc) return null;

  return (
    <div className="w-full">
      <Image
        src={imageSrc}
        alt="Step illustration"
        width={800}
        height={600}
        className="mx-auto h-auto w-full max-w-[600px] rounded-lg object-contain"
      />
    </div>
  );
}
