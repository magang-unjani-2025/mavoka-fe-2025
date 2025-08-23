"use client"

import HeaderHome from "../components/homePage/headerHomepage";
import { SearchLowonganBar } from "@/app/components/homePage/cari-lowongan/SearchLowonganBar";
import CariLowonganResult from "../components/homePage/cari-lowongan/cariLowongan";
import Footer from "../components/homePage/footer";

export default function CariLowonganPage() {
  return (
    <>
      <HeaderHome />
      <section className="py-5 text-center">
        <h2>
          Temukan Tempat Magang <br /> Impianmu di sini
        </h2>
      </section>
      <SearchLowonganBar />
      <CariLowonganResult />
      <Footer />
      {/* Card-card lowongan nanti di sini */}
    </>
  );
}
