"use client";

import HeaderHome from "@/app/components/homePage/headerHomepage";
import Footer from "@/app/components/homePage/footer";
import LpkList from "@/app/components/homePage/listLpk/lpkList";

export default function LpkPage() {
  return (
    <>
      <HeaderHome />
      <LpkList />
      <Footer />
    </>
  );
}
