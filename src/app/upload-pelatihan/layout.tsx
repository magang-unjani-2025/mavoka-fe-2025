"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardLayout2 from "@/app/components/dashboard/DashboardLayout2";

export default function UploadPelatihanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const tabs = [
    { href: "/upload-pelatihan", label: "Draft" },
    { href: "/upload-pelatihan/pelatihan-terpasang", label: "Pelatihan Terpasang" },
  ];

  const isPelatihanBaruPage = pathname === "/upload-pelatihan/pelatihan-baru";

  return (
    <DashboardLayout2
      role="lpk"
      user={{
        fullName: "Kepala LPK",
        orgName: "LPK XYZ",
        profilePic: "",
      }}
    >
      {isPelatihanBaruPage ? (
        <div className="p-6">{children}</div>
      ) : (
        <div className="flex flex-col h-full p-4">
          <h3 className="mb-5">Data Pelatihan Magang</h3>

          <div className="flex items-center justify-between bg-white shrink-0">
            <div className="flex border-b border-gray-300">
              {tabs.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`px-4 py-2 font-semibold ${
                    pathname === tab.href
                      ? "border-b-2 border-[#0F67B1] text-[#0F67B1] bg-[#0F67B1]/5"
                      : "text-gray-600 hover:text-[#0F67B1]"
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
            </div>

            <Link
              href="/upload-Pelatihan/Pelatihan-baru"
              className="px-4 py-2 rounded-lg bg-[#0F67B1] text-white font-medium hover:bg-[#0d5692] transition"
            >
              + Buat Pelatihan Baru
            </Link>
          </div>

          <div className="flex-1 overflow-y-auto p-6 mt-5 bg-white h-full">
            {children}
          </div>
        </div>
      )}
    </DashboardLayout2>
  );
}
