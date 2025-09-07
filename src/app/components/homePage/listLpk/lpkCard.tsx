"use client";

import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { HiOutlineMapPin, HiOutlineLink } from "react-icons/hi2";
import { Lpk } from "@/types/lpk";

type Props = { data: Lpk };

export default function LpkCard({ data }: Props) {
  const router = useRouter();

  const goDetail = useCallback(() => {
    router.push(data.slug ? `/lpk/${data.slug}` : `/lpk/${data.id}`);
  }, [router, data.slug, data.id]);

  const websiteHost = data.web_lembaga?.replace(/^https?:\/\//i, "");

  return (
    <article
      className="rounded-[8px] border border-[#D6DDEB] bg-white 
                 shadow-[0_4px_4px_rgba(0,0,0,0.25)]
                 hover:shadow-[0_6px_8px_rgba(0,0,0,0.28)]
                 transition overflow-hidden flex flex-col"
    >
      <div className="relative w-full">
        <div className="relative mx-auto w-[370px] h-[72px] bg-gray-100 overflow-hidden">
          {data.coverUrl && (
            <Image
              src={data.coverUrl ?? null}
              alt={`${data.name} cover`}
              fill
              className="object-cover"
              sizes="370px"
            />
          )}
        </div>

        {/* logo bulat di tengah: pakai inset-x-0 + justify-center */}
        <div className="absolute -bottom-7 inset-x-0 flex justify-center">
          <div
            className="h-[64px] w-[64px] rounded-full bg-white grid place-items-center
                    border border-[#E5E7EB] shadow-[0_2px_4px_rgba(0,0,0,0.15)] overflow-hidden"
          >
            {data.logoUrl && (
              <div className="relative h-[56px] w-[56px]">
                <Image
                  src={data.logoUrl ?? null}
                  alt={`${data.name} logo`}
                  fill
                  className="object-contain"
                  sizes="56px"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="pt-9 px-4 pb-4">
        <h3 className="text-[#0F67B1] font-extrabold leading-snug line-clamp-2">
          {data.name}
        </h3>

        {/* Alamat */}
        <div className="mt-3 flex items-start gap-2 text-[#94A3B8]">
          <span className="mt-[2px]" aria-hidden>
            <HiOutlineMapPin size={18} />
          </span>
          <p className="text-[13px] leading-relaxed text-[#94A3B8] line-clamp-2">
            {data.address}
          </p>
        </div>

        {/* Website */}
        {data.web_lembaga && (
          <div className="mt-2 flex items-start gap-2 text-[#94A3B8]">
            <span className="mt-[2px]" aria-hidden>
              <HiOutlineLink size={18} />
            </span>
            <a
              href={data.web_lembaga}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[#94A3B8] hover:underline truncate max-w-[260px]"
            >
              {websiteHost}
            </a>
          </div>
        )}

        {/* Separator */}
        <hr className="mt-4 border-t border-[#D6DDEB]" />

        {/* Tombol Detail di tengah */}
        <div className="mt-3 flex justify-center">
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
    </article>
  );
}
