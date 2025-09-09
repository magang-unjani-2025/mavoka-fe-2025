"use client";

import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  HiOutlineMapPin,
  HiOutlineBuildingLibrary,
  HiOutlineLink,
} from "react-icons/hi2";
import { School } from "@/types/school";

type Props = { data: School };

export default function SchoolCard({ data }: Props) {
  const router = useRouter();

  const goDetail = useCallback(() => {
    router.push(data.slug ? `/sekolah/${data.slug}` : `/sekolah/${data.id}`);
  }, [router, data.slug, data.id]);

  const openWebsite = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (data.web_sekolah)
        window.open(data.web_sekolah, "_blank", "noopener,noreferrer");
    },
    [data.web_sekolah]
  );

  return (
    <article
      className="rounded-[8px] border border-[#D6DDEB] bg-white 
                 shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
                 hover:shadow-[0_6px_8px_rgba(0,0,0,0.28)]
                 transition overflow-hidden"
    >
      <div className="flex">
        {/* LEFT: Logo, bg putih */}
        <div className="w-[120px] tablet:w-[140px] desktop:w-[160px] bg-white p-4 grid place-items-center">
          <div className="relative h-[80px] w-[80px] desktop:h-[96px] desktop:w-[96px]">
            <Image
              src={data.logoUrl}
              alt={`${data.name} logo`}
              fill
              className="object-contain"
              sizes="96px"
            />
          </div>
        </div>

        {/* RIGHT: Konten, bg F7F6FA */}
        <div className="flex-1 bg-[#F7F6FA] p-4 relative">
          <h3 className="text-[#0F67B1] font-extrabold leading-snug line-clamp-2">
            {data.name}
          </h3>

          {/* Alamat */}
          <div className="mt-4 flex items-start gap-2 text-[#94A3B8]">
            <span className="mt-[2px] text-[#94A3B8]" aria-hidden>
              <HiOutlineMapPin size={18} />
            </span>
            <p className="text-[13px] leading-relaxed line-clamp-2 flex-1">
              {data.address}
            </p>
          </div>

          {/* Jenis SMK */}
          {data.type && (
            <div className="mt-2 flex items-center gap-2 text-[#94A3B8]">
              <span className="text-[#94A3B8]" aria-hidden>
                <HiOutlineBuildingLibrary size={18} />
              </span>
              <span className="text-[13px]">{data.type}</span>
            </div>
          )}

          {/* web_sekolah */}
          {/* web_sekolah */}
          {data.web_sekolah && (
            <div className="mt-2 flex items-start gap-2 text-[#94A3B8]">
              <span className="mt-[2px]" aria-hidden>
                <HiOutlineLink size={18} />
              </span>
              <a
                href={data.web_sekolah}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#94A3B8] hover:underline truncate max-w-[240px]"
              >
                {data.web_sekolah}
              </a>
            </div>
          )}

          {/* Button Detail pojok kanan-bawah */}
          <div className="mt-2 flex justify-end">
            <button
              type="button"
              onClick={goDetail}
              className="rounded-full bg-[#0F67B1] px-5 py-2 text-white text-[12px] font-extrabold
                         hover:bg-[#0D5796] focus:outline-none focus:ring-2 focus:ring-[#0F67B1]/50"
              aria-label={`Lihat detail ${data.name}`}
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
