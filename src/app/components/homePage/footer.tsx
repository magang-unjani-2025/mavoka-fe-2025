"use client";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-[24px]">
      {/* Bagian utama */}
      <div className="bg-[#D9ECFB]">
        <div className="max-w-7xl mx-auto px-[70px] py-4 flex flex-col lg:flex-row justify-between gap-10">
          
          {/* Kolom Logo + Deskripsi */}
          <div className="max-w-[420px] ">
            <div className="flex items-center gap-2">
              <Image
                src="/img/logo-fit-academy.png"
                alt="FitAcademy"
                width={55}
                height={56}
              />
              <Image
                src="/img/logo-mavoka.png"
                alt="Mavoka"
                width={125}
                height={38}
                className="-mt-2"
              />
            </div>

            <p className="text-black text-sm mb-4">
              MAVOKA platform pemagangan terintegrasi untuk siswa SMK di seluruh
              Indonesia.
            </p>

            {/* Ikon Sosial Media */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="p-2 rounded-full bg-[#2B78BA] hover:bg-blue-500 transition-colors"
                >
                  <Icon className="text-white" size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-black font-semibold mt-9 mb-6">Quick link</h3>
            <ul className="space-y-2 text-black text-sm">
              <li><a href="#">Beranda</a></li>
              <li><a href="#">Tentang MAVOKA</a></li>
              <li><a href="#">Cari lowongan</a></li>
              <li><a href="#">Perusahaan</a></li>
              <li><a href="#">Lembaga Pelatihan</a></li>
              <li><a href="#">Sekolah</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-black font-semibold mt-9 mb-6">Help</h3>
            <ul className="space-y-2 text-black text-sm">
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Alamat */}
          <div className="max-w-[220px]">
            <h3 className="text-black font-semibold mt-9 mb-6">Alamat Kami</h3>
            <p className="text-black text-sm">
              Jl. Kembang Baru No.10 55281<br />
              Maguwoharjo<br />
              Daerah Istimewa Yogyakarta
            </p>
          </div>
        </div>
      </div>

      {/* Bagian copyright */}
      <div
        className="text-white text-sm py-3 text-center"
        style={{
          background: "linear-gradient(135deg, #52E5E7 2%, #130CB7 98%)",
        }}
      >
        © Copyright 2025, All Rights Reserved by Fitinline
      </div>
    </footer>
  );
}
