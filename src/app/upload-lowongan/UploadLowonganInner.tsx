"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import Link from "next/link";
import DashboardLayout2 from "@/app/components/dashboard/DashboardLayout2";
import ToggleTabs from "@/app/components/dashboard/toggleTab";

import TableDraftLowongan from "@/app/components/upload-lowongan-pelatihan/TableDraftLowongan";
import TableLowonganTerpasang from "@/app/components/upload-lowongan-pelatihan/TableLowonganTerpasang";
import LowonganFormView from "@/app/components/upload-lowongan-pelatihan/LowonganFormView";

const tabs = [
  { text: "Draft", value: "draft" },
  { text: "Lowongan Terpasang", value: "terpasang" },
] as const;

type TabType = (typeof tabs)[number]["value"];

type UploadLowonganLayoutProps = {
  view?: string;
};

export default function UploadLowonganInner({ view }: UploadLowonganLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Cek token perusahaan (hanya logging, nanti bisa dipakai API)
  useEffect(() => {
    const actor = localStorage.getItem("actor");
    const token =
      localStorage.getItem("access_token_perusahaan") ||
      localStorage.getItem("access_token");
    console.log("👤 actor:", actor);
    console.log("🔑 token_perusahaan:", token ? token.slice(0, 20) + "..." : null);
  }, []);

  const isLowonganBaruPage = pathname === "/upload-lowongan/lowongan-baru";

  const currentTab: TabType = useMemo(() => {
    const q = (searchParams.get("tab") || "draft").toLowerCase();
    return q === "terpasang" ? "terpasang" : "draft";
  }, [searchParams]);

  const handleChange = (next: TabType) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", next);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <DashboardLayout2 role="perusahaan">
      {isLowonganBaruPage ? (
        <div className="p-6">
          <LowonganFormView
            mode="create"
            onSaveDraft={() => {}}
            onUnggah={() => {
              router.replace("/upload-lowongan?tab=terpasang");
            }}
            successMessage="Lowongan berhasil diunggah."
          />
        </div>
      ) : (
        <div className="flex flex-col h-full p-6">
          <h3 className="mb-5">Lowongan Perusahaan</h3>

          <div className="flex items-center justify-between">
            <div className="h-10 flex items-center">
              <ToggleTabs<TabType> tabs={tabs} value={currentTab} onChange={handleChange} />
            </div>

            <Link
              href="/upload-lowongan/lowongan-baru"
              className="h-10 inline-flex items-center px-4 rounded-lg bg-[#0F67B1] text-white font-medium hover:bg-[#0d5692] transition"
            >
              Lowongan Baru
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto p-6 mt-5 bg-white h-full rounded-xl">
            {currentTab === "draft" ? <TableDraftLowongan /> : <TableLowonganTerpasang />}
          </div>
        </div>
      )}
    </DashboardLayout2>
  );
}
