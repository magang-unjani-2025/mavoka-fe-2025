"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "@/app/components/Container";
import HeroSearch from "@/app/components/homePage/heroSearch";
import Pagination from "@/app/components/homePage/pagination";
import LpkCard from "./lpkCard";
import { useResponsivePerPage, PER_PAGE } from "@/app/components/homePage/pageResponsive";
import { TampilAlllpk } from "@/lib/api-lpk";
import type { Lpk } from "@/types/lpk";

export default function LpkList() {
  const [data, setData] = useState<Lpk[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const sp = useSearchParams();
  const router = useRouter();

  const q = sp.get("q")?.trim() ?? "";
  const currentPage = Math.max(1, Number(sp.get("page") ?? 1) || 1);

  // Items per page: desktop 12 (3x4), tablet 6 (2x3), mobile 6 (1x6)
  const itemsPerPage = useResponsivePerPage(PER_PAGE.lpk);

  useEffect(() => {
    let active = true;
    setLoading(true);

    TampilAlllpk()
      .then((payload: any) => {
        if (!active) return;

        const rows: any[] = payload?.data ?? payload ?? [];

        const normalizeUrl = (v?: string | null) => {
          if (!v) return null;
          const t = String(v).trim();
          if (!t) return null;
          return /^https?:\/\//i.test(t) ? t : `https://${t}`;
        };

        const mapped: Lpk[] = rows.map((r: any) => ({
          id: r.id,
          name: r.nama_lembaga ?? "LPK",
          address: r.alamat ?? "-",
          website: normalizeUrl(r.web_lembaga ?? null),
          logoUrl: r.logo_lembaga ?? r.logo_url ?? "/assets/img/placeholder-logo.png",
          // belum ada di API → placeholder; kalau nanti ada r.cover_url tinggal ganti
          coverUrl: r.cover_url ?? "/assets/img/placeholder-cover.jpg",
          slug: r.slug,
        }));

        setData(mapped);
        setErr(null);
      })
      .catch((e: any) => setErr(e?.message ?? "Gagal memuat data"))
      .finally(() => setLoading(false));

    return () => {
      active = false;
    };
  }, []);

  // Filter lokal (nama / alamat / website)
  const filtered = useMemo(() => {
    if (!q) return data;
    const s = q.toLowerCase();
    return data.filter((d) =>
      [d.name, d.address, d.web_lembaga ?? ""].some((v) => v.toLowerCase().includes(s))
    );
  }, [data, q]);

  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);

  const paged = useMemo(() => {
    const start = (safePage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, safePage, itemsPerPage]);

  const handleSearch = useCallback(
    (query: string) => {
      const params = new URLSearchParams(sp?.toString());
      query ? params.set("q", query) : params.delete("q");
      params.set("page", "1");
      router.push(`?${params.toString()}`, { scroll: true });
    },
    [router, sp]
  );

  const onPageChange = useCallback(
    (page: number) => {
      const params = new URLSearchParams(sp?.toString());
      params.set("page", String(page));
      router.push(`?${params.toString()}`, { scroll: true });
    },
    [router, sp]
  );

  return (
    <main className="pb-12">
      <HeroSearch
        title="LPK"
        imageSrc="/img/lembaga_latihan.png"
        imageAlt="LPK"
        placeholder="Cari Lembaga Pelatihan…"
        objectPosition="50% 40%"
        defaultQuery={q}
        onSearch={handleSearch}
      />

      <Container as="section" className="mt-8">
        <p className="sr-only" aria-live="polite">
          {loading ? "Memuat data…" : `${totalItems} LPK ditemukan`}
        </p>

        {loading && (
          <div className="grid gap-5 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
            {Array.from({ length: itemsPerPage }).map((_, i) => (
              <div
                key={i}
                className="h-[260px] rounded-[8px] border border-[#D6DDEB] bg-gray-100 animate-pulse"
              />
            ))}
          </div>
        )}

        {!loading && err && <p className="text-red-600">Terjadi kesalahan: {err}</p>}

        {!loading && !err && (
          <>
            {totalItems === 0 ? (
              <p className="text-gray-600">Tidak ada LPK yang cocok dengan pencarian.</p>
            ) : (
              <>
                <div className="grid gap-5 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
                  {paged.map((c) => (
                    <LpkCard key={c.id} data={c} />
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <Pagination
                    currentPage={safePage}
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    onPageChange={onPageChange}
                  />
                </div>
              </>
            )}
          </>
        )}
      </Container>
    </main>
  );
}
