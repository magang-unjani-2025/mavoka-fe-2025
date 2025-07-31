"use client";
import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="text-white mt-[24px]"
      style={{
        background: "linear-gradient(135deg, #52E5E7 2%, #130CB7 98%)",
      }}
    >

      <div className="max-w-7xl mx-auto px-[70px] py-10">

        <div className="flex border-b border-white/30 pb-6">

          <div className="w-[420px] mt-11">
            <div className="flex items-center gap-2">
              <Image
                src="/img/logo-fit-academy.png"
                alt="FitAcademy"
                width={55}
                height={56}
              />
              <div className="flex items-center h-[56px]">
                <Image
                  src="/img/logo-mavoka.png"
                  alt="Mavoka"
                  width={125}
                  height={38}
                  className="-mt-2"
                />
              </div>
            </div>
            <h3 className="font-medium text-[#FFFFFF] mt-[33px]">
              MAVOKA platform pemagangan terintegrasi untuk siswa SMK di seluruh
              Indonesia.
            </h3>
          </div>

          {/* Quick Links */}
          <div className="ml-[271px] w-[200px]">
            <h2 className="mb-3 font-semibold">Quick Link</h2>
            <ul className="space-y-2 text-lg font-normal">
              <li>
                <a href="#" className="hover:underline">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tentang MAVOKA
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cari Lowongan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Perusahaan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lembaga Pelatihan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sekolah
                </a>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="ml-[90px]">
            <h2 className="mb-3 font-semibold">Help</h2>
            <ul className="space-y-2 text-lg font-normal">
              <li>
                <a href="#" className="hover:underline">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <h3 className="mb-4 md:mb-0 font-normal">
            © Copyright 2025, All Rights Reserved by Fitinline
          </h3>
         <div className="flex gap-4 text-lg">
  <a
    href="#"
    className="p-2 rounded-full bg-[#2B78BA] hover:bg-blue-500 transition-colors"
  >
    <Facebook className="text-white" />
  </a>
  <a
    href="#"
    className="p-2 rounded-full bg-[#2B78BA] hover:bg-blue-500 transition-colors"
  >
    <Twitter className="text-white" />
  </a>
  <a
    href="#"
    className="p-2 rounded-full bg-[#2B78BA] hover:bg-blue-500 transition-colors"
  >
    <Instagram className="text-white" />
  </a>
</div>

        </div>
      </div>
    </footer>
  );
}
