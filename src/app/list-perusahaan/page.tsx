"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import HeaderHome from "@/app/components/homePage/headerHomepage";
import SearchBar from "@/app/components/homePage/listPerusahaan/SearchBar";

import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <HeaderHome />
      <SearchBar onSearch={(value: string) => {
        // Handle the search value here, e.g., navigate or filter
        console.log("Search value:", value);
      }} />

    </>
  );
}
