"use client";

import Image from "next/image";
import { ElementType } from "react";
import { Container } from "@/app/components/Container";

type HeroBannerProps = {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  as?: ElementType;
  className?: string;
  priority?: boolean;
  /** Geser fokus crop gambar kalau perlu, mis. "50% 35%", "center", "left" */
  objectPosition?: string;
};

export function HeroBanner({
  title,
  imageSrc,
  imageAlt = "",
  as: Tag = "section",
  className = "",
  priority = true,
  objectPosition = "center",
}: HeroBannerProps) {
  return (
    <Tag
      className={[
        "relative w-full overflow-hidden isolate",
        "h-[200px] tablet:h-[240px] desktop:h-[268px]", "mt-[42px]",
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

      <div className="absolute inset-0 bg-[#0F67B1]/35" aria-hidden />

      <Container className="absolute inset-0">
        <div className="grid h-full place-items-center">
          <h1 className="text-center tracking-tight text-white">
            {title}
          </h1>
        </div>
      </Container>
    </Tag>
  );
}
