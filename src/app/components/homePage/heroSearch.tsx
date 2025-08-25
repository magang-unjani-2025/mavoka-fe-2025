"use client";

import Image from "next/image";
import { ElementType, FormEvent, useState } from "react";
import { Container } from "@/app/components/Container";
import { BiSearchAlt } from "react-icons/bi";

type HeroSearchProps = {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  as?: ElementType;
  className?: string;
  priority?: boolean;
  objectPosition?: string; // contoh: "50% 35%", "center", "left"
  placeholder?: string;
  defaultQuery?: string;
  onSearch: (q: string) => void;
};

export default function HeroSearch({
  title,
  imageSrc,
  imageAlt = "",
  as: Tag = "section",
  className = "",
  priority = true,
  objectPosition = "center",
  placeholder = "Cari...",
  defaultQuery = "",
  onSearch,
}: HeroSearchProps) {
  const [q, setQ] = useState(defaultQuery);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(q.trim());
  };

  return (
    <Tag
      className={[
        "relative w-full overflow-hidden isolate",
        "h-[200px] tablet:h-[240px] desktop:h-[268px]",
        "mt-[42px]",
        className,
      ].join(" ")}
    >
      {/* Background image (fill) */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F67B1]/35" aria-hidden />

      {/* Title + Search */}
      <Container className="absolute inset-0">
        <div className="grid h-full place-items-center">
          <div className="flex flex-col items-center gap-4 w-full">
            <h1 className="text-center tracking-tight text-white font-semibold text-[20px] tablet:text-[24px] desktop:text-[28px]">
              {title}
            </h1>

            <form
              onSubmit={handleSubmit}
              role="search"
              aria-label={`Pencarian ${title}`}
              className="w-full max-w-[760px]"
            >
              <div className="flex items-stretch rounded-[8px] bg-white p-2 shadow-md">
                <label htmlFor="hero-search-input" className="sr-only">
                  {placeholder}
                </label>
                <input
                  id="hero-search-input"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder={placeholder}
                  className="flex-1 rounded-[8px] border border-gray-300 px-4 py-2 text-sm text-gray-900 outline-none
                 focus:border-[#0F67B1] focus:ring-1 focus:ring-[#0F67B1] placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  aria-label="Cari"
                  className="ml-2 flex items-center justify-center rounded-lg bg-[#0F67B1] px-4 py-2 text-white hover:bg-opacity-70 transition"
                >
                  <BiSearchAlt size={24} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Tag>
  );
}
