"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import HeaderHome from "@/app/components/homePage/headerHomepage";
import HeroSection from "@/app/components/homePage/heroSection";
import JobList from "@/app/components/homePage/jobList";
import CompanyList from "@/app/components/homePage/companyList";
import StatsSection from "@/app/components/homePage/grafik";
import TrainingCarousel from "@/app/components/homePage/lpkScroll";
import SmkLogoMarquee from "./components/homePage/smkScroll";
import Footer from "./components/homePage/footer";
import StatsSectionWrapper from "@/app/components/homePage/StatSectionWraper";

import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <HeaderHome />
      <HeroSection />
      <JobList />

      <hr className="border-gray-300 my-5 mt-10 max-w-[1120px] mx-auto" />
      <StatsSectionWrapper />

      <hr className="border-gray-300 my-5 mb-10 max-w-[1120px] mx-auto" />

      <CompanyList />
      <TrainingCarousel />

      <hr className="border-gray-300" />

      <SmkLogoMarquee />
      <Footer />

      {/* Initialize AOS after the components are rendered */}
      {/* Komponen berikutnya: JobList, CompanySection, dst */}
    </>
  );
}
