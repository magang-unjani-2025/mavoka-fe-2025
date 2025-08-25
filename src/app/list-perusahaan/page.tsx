"use client";

import { useRouter } from "next/navigation";
import HeaderHome from "@/app/components/homePage/headerHomepage";
import PerusahaanList from "@/app/components/homePage/listPerusahaan/companyList";
import "aos/dist/aos.css";
import Footer from "../components/homePage/footer";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <HeaderHome />
      <main>
        <PerusahaanList />
      </main>
      <Footer />

    </>
  );
}
