import HeaderHome from "@/app/components/homePage/headerHomepage";
import Footer from "@/app/components/homePage/footer";
import { HeroFaq } from "@/app/components/homePage/faq/faqHero";
import { notFound } from "next/navigation";

import { ROLES, RoleKey, roleMeta } from "@/app/components/homePage/panduanPengguna/roleMeta"; // pastikan path sesuai
import PerusahaanContent from "@/app/components/homePage/panduanPengguna/perusahaan/content";
import LpkContent from "@/app/components/homePage/panduanPengguna/lpk/content";
import SekolahContent from "@/app/components/homePage/panduanPengguna/sekolah/content";
import SiswaContent from "@/app/components/homePage/panduanPengguna/siswa/content";

const CONTENT_MAP: Record<RoleKey, React.ComponentType> = {
  perusahaan: PerusahaanContent,
  lpk: LpkContent,
  sekolah: SekolahContent,
  siswa: SiswaContent,
};

export const dynamicParams = false;
export function generateStaticParams() {
  return ROLES.map((role) => ({ role }));
}

export default function RoleGuidePage({ params }: { params: { role: string } }) {
  const key = params.role as RoleKey;
  const meta = roleMeta[key];
  if (!meta) notFound();

  const Content = CONTENT_MAP[key];

  return (
    <>
      <HeaderHome />

      {/* Hero sesuai permintaan (pakai HeroFaq + image) */}
      <HeroFaq
        title="FAQ"
        imageSrc={meta.heroImg}
      />

      {/* Render konten berdasarkan role */}
      <Content />

      <Footer />
    </>
  );
}
