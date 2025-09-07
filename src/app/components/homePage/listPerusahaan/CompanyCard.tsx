"use client";

import Image from "next/image";
import { HiOutlineMapPin } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Company } from "@/types/company";

const LOGO_H = 72;

type Props = { data: Company };

export default function CompanyCard({ data }: Props) {
  const router = useRouter();
  const goDetail = useCallback(() => {
    router.push(
      data.slug ? `/list-perusahaan/${data.slug}` : `/list-perusahaan/${data.id}`
    );
  }, [router, data.slug, data.id]);

  return (
    <article className="rounded-[2px] border border-gray-200 bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]  hover:shadow-[0_6px_8px_rgba(0,0,0,0.3)] transition overflow-hidden flex flex-col">
      {/* Logo tengah atas */}
      <div className="relative grid place-items-center px-4 pt-6 pb-4">
        <div className="relative w-full" style={{ height: LOGO_H }}>
          <Image
            src={data.logoUrl}
            alt={`${data.name} logo`}
            fill
            className="object-contain"
            sizes="(min-width:1024px) 30vw, (min-width:744px) 45vw, 90vw"
          />
        </div>
      </div>

      {/* Garis pemisah */}
      <hr className="border-t border-[#D6DDEB]" />

      {/* Nama + alamat + tombol */}
      <div className="p-4 flex-1">
        <h2 className="text-[#0F67B1] leading-snug line-clamp-2">
          {data.name}
        </h2>

        <div className="mt-3 flex items-start gap-3">
          <span className="mt-1 text-[#94A3B8]" aria-hidden>
            <HiOutlineMapPin size={18} />
          </span>

          <p className=" text-[#B7B7B7] leading-relaxed line-clamp-2 flex-1">
            {data.address}
          </p>

          <button
            type="button"
            onClick={goDetail}
            className="ml-3 shrink-0 rounded-full bg-[#0F67B1] hover:bg-opacity-70 px-4 py-2 text-white text-[12px] font-extrabold"
            aria-label={`Lihat detail ${data.name}`}
          >
            Detail
          </button>
        </div>
      </div>
    </article>
  );
}
