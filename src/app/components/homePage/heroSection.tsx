"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"; 

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="w-full px-[70px] py-2.5 lg:py-2.5 font-family">
      <div
        className="min-h-[500px] grid grid-cols-1 lg:grid-cols-2 items-center
        rounded-tl-[48px] rounded-bl-[48px] rounded-tr-[48px] rounded-br-[300px]
        overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #52E5E7 2%, #130CB7 98%)",
        }}
      >
        {/* Konten */}
        {/*<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 lg:px-16 py-10">*/}
        <div className="text-white space-y-5 px-6 lg:px-16 py-10">
          <div className="text-2xl lg:text-5xl-custom font-bold leading-tight" data-aos="fade-up">
            MAGANG <br /> VOKASI SMK
          </div>
          <p className="text-small lg:text-small max-w-md">
            Tempatnya siswa SMK memulai karir dan membangun pengalaman. Ayo
            mulai bangun koneksimu, buka peluang, siapkan masa depan.
          </p>

            <Link
              href="/tentang"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold text-sm px-[26px] py-[12px] rounded-[6px] hover:bg-gray-100 transition shadow-md"
            >
              Tentang MAVOKA 
              <ArrowRight size={24} />
            </Link>
          </div>

          {/* Gambar Karakter */}
          <div className="left-50 px-10 py-50">
          <Image
            src="/img/hero-section-logo.png"
            alt="Karakter SMK"
            width={758}
            height={601}
            className="md:max-w-[540px] lg:max-w-[540px]"
            priority
          />
        </div>
        {/*</div>*/}

      </div>

      <div className="text-center max-w-none mx-auto mt-6">
      <h1 className=" text-[#292D32]" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        Temukan Tempat Magang Impianmu di Sini
      </h1>
      <p className="text-gray-700 mt-2">
        MAVOKA bekerja sama dengan berbagai perusahaan terpercaya untuk mendukung perjalanan magang siswa SMK.
        <br />
        Temukan tempat terbaik untuk belajar langsung dari dunia industri.
      </p>
    </div>
    </section>
  );
};

export default HeroSection;
