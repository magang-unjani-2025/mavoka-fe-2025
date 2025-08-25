"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "@/app/components/Container";
import HeroSearch from "@/app/components/homePage/heroSearch";
import Pagination from "@/app/components/homePage/pagination";
import SchoolCard from "@/app/components/homePage/listSekolah/schoolCard";
import { TampilAllSekolah } from "@/lib/api-sekolah";
import { useResponsivePerPage, PER_PAGE } from "@/app/components/homePage/pageResponsive";

export type School = {
  id: number | string;
  name: string;
  address: string;
  type?: string | null;
  website?: string | null;
  logoUrl: string;
  slug?: string;
};

export default function SchoolList() {
  const [data, setData] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const sp = useSearchParams();
  const router = useRouter();

  const q = sp.get("q")?.trim() ?? "";
  const currentPage = Math.max(1, Number(sp.get("page") ?? 1) || 1);

  // Items per page: desktop 10 (2x5), tablet 6 (2x3), mobile 6 (1x6)
  const itemsPerPage = useResponsivePerPage(PER_PAGE.sekolah);

  useEffect(() => {
    let active = true;
    setLoading(true);

    TampilAllSekolah()
      .then((payload: any) => {
        if (!active) return;

        const rows: any[] = payload?.data ?? payload ?? [];

        const normalizeUrl = (v?: string | null) => {
          if (!v) return null;
          const trimmed = String(v).trim();
          if (!trimmed) return null;
          return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
        };

        const mapped: School[] = rows.map((r: any) => ({
          id: r.id,
          name: r.nama_sekolah ?? "Sekolah",
          address: r.alamat ?? "-",
          // jenis sekolah belum ada di payload contoh; fallback ke field yang mungkin ada
          type: r.jenis_smk ?? r.jenis_sekolah ?? r.status_verifikasi ?? null,
          website: normalizeUrl(r.web_sekolah ?? null),
          // logo & slug opsional kalau backend sediakan
          logoUrl: r.logo_url ?? r.logo ?? "/assets/img/placeholder-logo.png",
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

  // Filter lokal berdasar query string (?q=)
  const filtered = useMemo(() => {
    if (!q) return data;
    const s = q.toLowerCase();
    return data.filter((d) =>
      [d.name, d.address, d.type ?? "", d.website ?? ""].some((v) =>
        v.toLowerCase().includes(s)
      )
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
        title="Sekolah"
        imageSrc="/img/GAMBAR-PERUSAHAAN.png"
        imageAlt="Sekolah"
        placeholder="Cari nama, alamat, jenis, atau website…"
        objectPosition="50% 40%"
        defaultQuery={q}
        onSearch={handleSearch}
      />

      <Container as="section" className="mt-8">
        <p className="sr-only" aria-live="polite">
          {loading ? "Memuat data…" : `${totalItems} sekolah ditemukan`}
        </p>

        {/* Loading skeleton */}
        {loading && (
          <div className="grid gap-5 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-2">
            {Array.from({ length: itemsPerPage }).map((_, i) => (
              <div
                key={i}
                className="h-[156px] rounded-[8px] border border-[#D6DDEB] bg-gray-100 animate-pulse"
              />
            ))}
          </div>
        )}

        {!loading && err && (
          <p className="text-red-600">Terjadi kesalahan: {err}</p>
        )}

        {!loading && !err && (
          <>
            {totalItems === 0 ? (
              <p className="text-gray-600">
                Tidak ada sekolah yang cocok dengan pencarian.
              </p>
            ) : (
              <>
                {/* Grid: mobile 1, tablet 2, desktop 2 */}
                <div className="grid gap-5 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-2">
                  {paged.map((s) => (
                    <SchoolCard key={s.id} data={s} />
                  ))}
                </div>

                {/* Pagination */}
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
