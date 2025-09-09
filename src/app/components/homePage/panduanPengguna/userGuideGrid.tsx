//"use client";
//import Link from "next/link";
//import { Container } from "@/app/components/Container";
//import type { RoleKey } from "@/types/panduan";

//const roles: Array<{ key: RoleKey; label: string }> = [
//  { key: "perusahaan", label: "Perusahaan" },
//  { key: "sekolah", label: "Sekolah" },
//  { key: "lpk", label: "Lembaga Pelatihan" },
//  { key: "siswa", label: "Siswa" },
//];

//export function UserGuidesGrid() {
//  return (
//    <section className="py-8">
//      <Container>
//        <h3 className="text-center font-semibold text-[#0F67B1] mb-4">
//          Panduan Pengguna
//        </h3>

//        {/* mobile: 1 kolom; tablet & desktop: 2 kolom */}
//        <div className="grid gap-4 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-2">
//          {roles.map((r) => (
//            <Link
//              key={r.key}
//              href={`/panduan-pengguna/${r.key}`}
//              className="group flex items-center justify-between rounded-lg border border-black/10 bg-white px-4 py-3 transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0F67B1]">
//              <span className="truncate">{r.label}</span>
//              <svg viewBox="0 0 24 24" className="size-5 shrink-0">
//                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
//              </svg>
//            </Link>
//          ))}
//        </div>
//      </Container>
//    </section>
//  );
//}
