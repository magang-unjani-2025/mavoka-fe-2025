"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { HiUser } from "react-icons/hi";
import { Container } from "@/app/components/Container"; // ✅ pakai Container
import { getAllLpk } from "@/services/lpk";

// (Optional) Breakpoint util retained if needed in future – removed usage for smoother marquee

export default function TrainingCarousel() {
  const [items, setItems] = useState<
    {
      id: string | number;
      name: string;
      logo?: string | null;
      bidang?: string | null;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Build marquee list (duplicate 3x for seamless loop)
  const marqueeItems = useMemo(() => {
    if (!items.length) return [] as typeof items;
    return [...items, ...items, ...items];
  }, [items]);

  // Dynamic animation duration: slower when more items; clamp 35s - 80s
  const animationDuration = useMemo(() => {
    if (!items.length) return 40;
    const base = items.length * 5; // 5s per unique item
    return Math.max(35, Math.min(80, base));
  }, [items.length]);

  // Fetch data LPK sekali saat mount
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const list = await getAllLpk();
        const mapped = list.map((l) => ({
          id: l.id,
          name: l.name,
          logo: l.logoUrl ?? null,
          bidang: l.bidang_pelatihan ?? null,
        }));
        setItems(mapped);
        if (mapped.length === 0) setError("Belum ada data lembaga pelatihan");
      } catch (e: any) {
        console.error("[TrainingCarousel] fetch error", e);
        setError("Gagal memuat data");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Continuous marquee: no manual touch logic needed

  return (
    <section className="py-8 overflow-x-hidden">
      <Container className="text-center">
        <h2 className="text-xl font-semibold mb-2">Lembaga Pelatihan</h2>
        <p className="text-sm text-gray-600 mb-8">MAVOKA bekerja sama dengan berbagai lembaga pelatihan</p>
      </Container>

      {/* Full-bleed marquee wrapper (extends to viewport width without horizontal scroll) */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden">
        {loading && (
          <div className="flex gap-6 justify-center py-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="rounded-full border-2 border-dashed border-[#0F67B1] w-[90px] h-[90px] animate-pulse" />
            ))}
          </div>
        )}
        {!loading && error && (
          <p className="text-sm text-center text-gray-500 italic py-4">{error}</p>
        )}
        {!loading && !error && items.length === 0 && (
          <p className="text-sm text-center text-gray-500 italic py-4">Belum ada lembaga terdaftar</p>
        )}
        {!loading && !error && items.length > 0 && (
          <div className="relative select-none" style={{ padding: '4px 0' }}>
            {/* Track uses extra side padding so logos tidak terpotong keras di tepi viewport */}
            <div
              className="flex gap-10 pl-32 pr-32 animate-lpk-marquee hover:[animation-play-state:paused] will-change-transform"
              style={{ animationDuration: `${animationDuration}s` }}
            >
              {marqueeItems.map((m, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className="relative rounded-full border-2 border-[#0F67B1] overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                    style={{ width: 90, height: 90 }}
                  >
                    {m.logo ? (
                      <Image
                        src={m.logo}
                        alt={m.name}
                        fill
                        sizes="90px"
                        className="object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <HiUser className="w-10 h-10 text-black" />
                      </div>
                    )}
                  </div>
                  <p className="mt-2 text-xs font-medium w-24 text-center truncate" title={m.name}>{m.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes lpk-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-lpk-marquee {
          width: max-content;
          animation: lpk-marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
