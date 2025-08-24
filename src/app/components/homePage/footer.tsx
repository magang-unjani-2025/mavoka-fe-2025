"use client";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="">
      {/* Bagian utama */}
      <div className="bg-[#D9ECFB]">
        <div className="mx-auto w-full max-w-[1440px] py-8 tablet:py-10 desktop:py-12 px-4 tablet:px-10 desktop:px-[70px]">
          
          {/* DESKTOP: flex kiri-kanan. MOBILE/TABLET: stack */}
          <div className="flex flex-col desktop:flex-row desktop:items-start desktop:justify-between gap-10">
            
            {/* Logo + Deskripsi (center di mobile/tablet, kiri di desktop) */}
            <div className="max-w-[520px] text-center tablet:mx-auto desktop:text-left">
              <div className="flex items-center justify-center desktop:justify-start gap-2">
                <Image src="/img/logo-fit-academy.png" alt="FitAcademy" width={55} height={56} />
                <Image src="/img/logo-mavoka.png" alt="Mavoka" width={125} height={38} className="-mt-2" />
              </div>

              <p className="text-black text-sm mt-4 mb-6">
                MAVOKA platform pemagangan terintegrasi untuk siswa SMK di seluruh Indonesia.
              </p>

              {/* Ikon Sosial */}
              <div className="flex justify-center desktop:justify-start gap-3">
                {[
                  { Icon: Facebook, href: "#" },
                  { Icon: Linkedin, href: "#" },
                  { Icon: Instagram, href: "#" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="p-2 rounded-full bg-[#2B78BA] hover:bg-blue-500 transition-colors"
                    aria-label={`Sosial ${i}`}
                  >
                    <Icon className="text-white" size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link & Alamat */}
            <div className="w-full desktop:flex-1 desktop:max-w-[720px] desktop:justify-end desktop:flex">
              <div className="w-full desktop:w-auto">
                {/* 
                  Mobile: 2 kolom (Quick link & Help), Alamat turun (full) 
                  Tablet: 3 kolom sejajar
                  Desktop: 3 kolom rapat di kanan
                */}
                <div className="grid grid-cols-2 tablet:grid-cols-3 gap-8 desktop:gap-12 text-left desktop:justify-items-end">
                  
                  {/* Quick link */}
                  <div>
                    <h3 className="text-black font-semibold mb-4 tablet:mb-6">Quick link</h3>
                    <ul className="space-y-2 text-black text-sm">
                      <li><a href="/">Beranda</a></li>
                      <li><a href="/tentang-mavoka">Tentang MAVOKA</a></li>
                      <li><a href="#">Cari lowongan</a></li>
                      <li><a href="#">Perusahaan</a></li>
                      <li><a href="#">Lembaga Pelatihan</a></li>
                      <li><a href="#">Sekolah</a></li>
                    </ul>
                  </div>

                  {/* Help */}
                  <div>
                    <h3 className="text-black font-semibold mb-4 tablet:mb-6">Help</h3>
                    <ul className="space-y-2 text-black text-sm">
                      <li><a href="customer-support">Customer Support</a></li>
                      <li><a href="privacy-policy">Privacy Policy</a></li>
                      <li><a href="faq">FAQ</a></li>
                    </ul>
                  </div>

                  {/* Alamat: full width di mobile (col-span-2), sejajar di tablet/desktop */}
                  <div className="col-span-2 tablet:col-span-1 max-w-[320px]">
                    <h3 className="text-black font-semibold mb-4 tablet:mb-6">Alamat Kami</h3>
                    <p className="text-black text-sm">
                      Jl. Kembang Baru No.10 55281<br />
                      Maguwoharjo<br />
                      Daerah Istimewa Yogyakarta
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="text-white text-sm py-3 text-center"
        style={{ background: "linear-gradient(135deg, #52E5E7 2%, #130CB7 98%)" }}
      >
        © Copyright 2025, All Rights Reserved by Fitinline
      </div>
    </footer>
  );
}
