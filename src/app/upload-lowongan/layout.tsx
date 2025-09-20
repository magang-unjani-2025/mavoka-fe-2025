//"use client";

//import { useRouter, usePathname, useSearchParams } from "next/navigation";
//import { useMemo } from "react";
//import Link from "next/link";
//import DashboardLayout2 from "@/app/components/dashboard/DashboardLayout2";
//import ToggleTabs from "@/app/components/dashboard/toggleTab";

//import TableDraftLowongan from "@/app/components/upload-lowongan-pelatihan/TableDraftLowongan";
//import TableLowonganTerpasang from "@/app/components/upload-lowongan-pelatihan/TableLowonganTerpasang";
////import LowonganBaru from "@/app/components/upload-lowongan-pelatihan/LowonganBaru";
////import { dummyLowongan } from "@/app/data/dummyLowongan";
//import 

//const tabs = [
//  { text: "Draft", value: "draft" },
//  { text: "Lowongan Terpasang", value: "terpasang" },
//] as const;

//type TabType = (typeof tabs)[number]["value"];

//export default function UploadLowonganLayout() {
//  const router = useRouter();
//  const pathname = usePathname();
//  const searchParams = useSearchParams();
//  const isLowonganBaruPage = pathname === "/upload-lowongan/lowongan-baru";

//  const currentTab: TabType = useMemo(() => {
//    const q = (searchParams.get("tab") || "draft").toLowerCase();
//    return q === "terpasang" ? "terpasang" : "draft";
//  }, [searchParams]);

//  const handleChange = (next: TabType) => {
//    const params = new URLSearchParams(searchParams.toString());
//    params.set("tab", next);
//    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
//  };

//  return (
//    <DashboardLayout2
//      role="perusahaan"
//      user={{
//        fullName: "Kepala Perusahaan",
//        orgName: "Perusahaan XYZ",
//        profilePic: "",
//      }}
//    >
//      {isLowonganBaruPage ? (
//        <div className="p-6">
//          <LowonganBaru role="perusahaan" />
//        </div>
//      ) : (
//        <div className="flex flex-col h-full p-6">
//          <h3 className="mb-5">Lowongan Perusahaan</h3>

//          <div className="flex items-center justify-between  shrink-0">
//            <div className="h-10 flex items-center">
//              <ToggleTabs<TabType>
//                tabs={tabs}
//                value={currentTab}
//                onChange={handleChange}
//              />
//            </div>

//            <Link
//              href="/upload-lowongan/lowongan-baru"
//              className="h-10 inline-flex items-center px-4 rounded-lg bg-[#0F67B1] text-white font-medium hover:bg-[#0d5692] transition"
//            >
//              + Buat Lowongan Baru
//            </Link>
//          </div>

//          <div className="flex-1 overflow-y-auto p-6 mt-5 bg-white h-full">
//            {currentTab === "draft" ? (
//              <TableDraftLowongan role="perusahaan" data={dummyLowongan} />
//            ) : (
//              <TableLowonganTerpasang role="perusahaan" />
//            )}
//          </div>
//        </div>
//      )}
//    </DashboardLayout2>
//  );
//}

"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import Link from "next/link";
import DashboardLayout2 from "@/app/components/dashboard/DashboardLayout2";
import ToggleTabs from "@/app/components/dashboard/toggleTab";

import TableDraftLowongan from "@/app/components/upload-lowongan-pelatihan/TableDraftLowongan";
import TableLowonganTerpasang from "@/app/components/upload-lowongan-pelatihan/TableLowonganTerpasang";
import LowonganFormView from "@/app/components/upload-lowongan-pelatihan/LowonganFormView";

import {
  dummyLowonganDraft,
  dummyLowonganTerpasang,
} from "@/app/data/dummyLowongan";
import type { Lowongan, StatusLowongan } from "@/types/lowongan";

const tabs = [
  { text: "Draft", value: "draft" },
  { text: "Lowongan Terpasang", value: "terpasang" },
] as const;

type TabType = (typeof tabs)[number]["value"];

export default function UploadLowonganLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isLowonganBaruPage = pathname === "/upload-lowongan/lowongan-baru";

  // state dummy biar bisa nambah lewat form
  const [draft, setDraft] = useState<Lowongan[]>(dummyLowonganDraft);
  const [terpasang, setTerpasang] = useState<
    (Lowongan & { status: StatusLowongan })[]
  >(dummyLowonganTerpasang);

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
    <DashboardLayout2
      role="perusahaan"
      user={{
        fullName: "Kepala Perusahaan",
        orgName: "Perusahaan XYZ",
        profilePic: "",
      }}
    >
      {isLowonganBaruPage ? (
        <div className="p-6">
          <LowonganFormView
  mode="create"
  onSaveDraft={(payload) => {
    setDraft((prev) => [payload, ...prev]);
  }}
  onUnggah={(payload) => {
    setTerpasang((prev) => [
      { ...payload, status: "Aktif" as const },
      ...prev,
    ]);
    // langsung alihkan ke tab terpasang
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
              <ToggleTabs<TabType>
                tabs={tabs}
                value={currentTab}
                onChange={handleChange}
              />
            </div>

            <Link
              href="/upload-lowongan/lowongan-baru"
              className="h-10 inline-flex items-center px-4 rounded-lg bg-[#0F67B1] text-white font-medium hover:bg-[#0d5692] transition"
            >
              + Buat Lowongan Baru
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto p-6 mt-5 bg-white h-full">
            {currentTab === "draft" ? (
              <TableDraftLowongan
                initialData={draft}
                onDetail={(id) => console.log("detail draft", id)}
                onEdit={(id) => console.log("edit draft", id)}
              />
            ) : (
              <TableLowonganTerpasang
                initialData={terpasang}
                onDetail={(id) => console.log("detail terpasang", id)}
                onEdit={(id) => console.log("edit terpasang", id)}
                onToggleStatus={(id, next) =>
                  setTerpasang((prev) =>
                    prev.map((l) =>
                      l.id === id ? { ...l, status: next } : l
                    )
                  )
                }
              />
            )}
          </div>
        </div>
      )}
    </DashboardLayout2>
  );
}
