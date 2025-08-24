"use client";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";

export default function ContactInfoCard() {
  return (
    <div className="bg-[#0F67B1] text-white rounded-xl p-6 w-full lg:w-1/2 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Informasi Kontak</h2>
      <p className="mb-4 text-gray-200">Klik kontak untuk memulai obrolan langsung!</p>
      <ul className="space-y-3">
        <li className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
            <BsFillTelephoneFill className="text-[#0F67B1]" />
          </div>
          <a href="tel:+6281252696896" className="underline">+62 812-5269-6896</a>
        </li>
        <li className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
            <GoMail className="text-[#0F67B1]" />
          </div>
          <a href="mailto:mavoka@gmail.com">mavoka@gmail.com</a>
        </li>
        <li className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
            <FaFacebookF className="text-[#0F67B1]" />
          </div>
          <span>@fitacademy.id</span>
        </li>
        <li className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
            <FaInstagram className="text-[#0F67B1]" />
          </div>
          <span className="underline">@fitacademy_id</span>
        </li>
        <li className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
            <FaLinkedin className="text-[#0F67B1]" />
          </div>
          <span className="underline">Fitacademy_id</span>
        </li>
        <li className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
            <IoLocationOutline className="text-[#0F67B1]" />
          </div>
          <span className="underline">Jl. Kembang Baru No.10, Maguwoharjo, Sleman</span>
        </li>
      </ul>
    </div>
  );
}
