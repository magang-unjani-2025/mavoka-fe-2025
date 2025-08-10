"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";

export default function TopNavbar() {
  const fullName = "Lisa Mariana Treynggar Amsori";
  const schoolName = "SMK Negeri 1 Yogyakarta";
  const profilePic = "";

  const getInitials = (name: string) => {
    const parts = name.trim().split(" ");
    if (parts.length === 1) {
      return parts[0][0].toUpperCase();
    }
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-xl">
        <div>
          <h3 className="font-semibold text-gray-900">{fullName}</h3>
          <small className="text-sm text-gray-500">{schoolName}</small>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative">
            <FaBell className="w-6 h-6 text-[#0F67B1]" />
            <span className="absolute top-1 right-0 block w-2 h-2 bg-[#28A745] rounded-full"></span>
          </button>

          <div className="w-px h-10 bg-gray-300"></div>

          <Link href="/dashboard-siswa/pengaturan" passHref>
            <div className="relative w-9 h-9">
              {profilePic ? (
                <Image
                  src={profilePic}
                  alt="Profile"
                  fill
                  className="rounded-full border cursor-pointer object-cover"
                />
              ) : (
                <div className="w-9 h-9 rounded-full border flex items-center justify-center bg-gray-200 text-gray-700 font-semibold cursor-pointer">
                  {getInitials(fullName)}
                </div>
              )}

              <div className="absolute -bottom-1 -right-2">
                <RiPencilLine className="text-black w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
