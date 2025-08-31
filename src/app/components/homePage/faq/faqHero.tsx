"use client";

import Image from "next/image";
import { ElementType } from "react";
import { Container } from "@/app/components/Container";

type HeroFaqProps = {
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  as?: ElementType;
  className?: string;
  priority?: boolean;
  /** Geser fokus crop gambar kalau perlu, mis. "50% 35%", "center", "left" */
  objectPosition?: string;
};

export function HeroFaq({
  title = "Panduan & FAQ",
  imageSrc = "/images/faq-hero.jpg",
  imageAlt = "FAQ hero background",
  as: Tag = "section",
  className = "",
  priority = true,
  objectPosition = "center",
}: HeroFaqProps) {
  return (
    <Tag
      className={[
        "relative w-full overflow-hidden isolate",
        // tinggi sesuai request: desktop 268px, tetap responsif di bawahnya
        "h-[200px] tablet:h-[240px] desktop:h-[268px]",
        "mt-[42px]",
        className,
      ].join(" ")}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition }}
      />

      {/* overlay agar teks kontras & terbaca di semua gambar */}
      <div className="absolute inset-0 bg-black/35" aria-hidden />

      <Container className="absolute inset-0">
        <div className="grid h-full place-items-center">
          <h1 className="text-white tracking-tight text-center ">
            {title}
          </h1>
        </div>
      </Container>
    </Tag>
  );
}
