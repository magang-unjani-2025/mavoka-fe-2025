"use client";

import HeaderHome from "@/app/components/homePage/headerHomepage";
import { HeroBanner } from "@/app/components/homePage/tentang-kami/heroBanner";
import { TentangMavokaSection } from "@/app/components/homePage/tentang-kami/textTentang";
import { CardGrid } from "@/app/components/homePage/tentang-kami/infoCardSection";
import { SejarahMavoka } from "../components/homePage/tentang-kami/sejarah";
import { VisiMisi } from "../components/homePage/tentang-kami/visiMisi";
import { CaraMendaftar } from "@/app/components/homePage/tentang-kami/caraMendaftar";
import { FAQ } from "@/app/components/homePage/tentang-kami/faq";
import Footer from "@/app/components/homePage/footer";

export default function TentangMavokaPage() {
  return (
    <>
      <HeaderHome />
      <main>
        <HeroBanner
          title="Tentang MAVOKA"
          imageSrc="/img/hero-tentang-mavoka.png"
          imageAlt="Siswa-siswi sedang belajar bersama"
        />

        <TentangMavokaSection />
        <hr className="border-gray-300 max-w-[1000px] mx-auto" />
        <CardGrid />
        <hr className="border-gray-300 max-w-[1000px] mx-auto" />
        <SejarahMavoka />
        <hr className="border-gray-300 max-w-[1000px] mx-auto" />
        <VisiMisi />
        <hr className="border-gray-300 max-w-[1000px] mx-auto" />
        <CaraMendaftar />
        <hr className="border-gray-300 max-w-[1000px] mx-auto" />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
