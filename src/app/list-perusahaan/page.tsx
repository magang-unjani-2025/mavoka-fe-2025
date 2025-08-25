"use client";

import { useRouter } from "next/navigation";
import HeaderHome from "@/app/components/homePage/headerHomepage";
import PerusahaanList from "@/app/components/homePage/listPerusahaan/companyList";
import "aos/dist/aos.css";
import Footer from "../components/homePage/footer";
import { Suspense } from 'react';

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <HeaderHome />
      <main>
	<Suspense fallback={<div>Loading...</div>}>
       	  <PerusahaanList />
	</Suspense>
      </main>
      <Footer />

    </>
  );
}
