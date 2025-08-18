"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import * as React from "react";

type TopNavbarProps = {
  variant: "siswa" | "welcome";
  /** Nama lengkap (untuk avatar initials & varian siswa) */
  fullName?: string;
  /** Nama sekolah / LPK / perusahaan (juga dipakai sbg subjudul varian siswa) */
  orgName?: string;
  /** URL foto profil (opsional) */
  profilePic?: string | null;
  /** Link ke halaman pengaturan/profil */
  settingsHref: string;
  /** Ada notifikasi? munculkan dot hijau */
  hasNotification?: boolean;
  /** Klik bell */
  onBellClick?: () => void;
  /** Optional className override */
  className?: string;
};

function getInitials(name?: string) {
  if (!name) return "U";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? "U";
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function Avatar({
  name,
  src,
  size = 36,
}: { name?: string; src?: string | null; size?: number }) {
  const style = `w-9 h-9`;
  if (src) {
    return (
      <Image
        src={src}
        alt={name ? `${name} avatar` : "User avatar"}
        width={size}
        height={size}
        className="rounded-full border object-cover"
      />
    );
  }
  return (
    <div className={`${style} rounded-full border flex items-center justify-center bg-gray-200 text-gray-700 font-semibold`}>
      {getInitials(name)}
    </div>
  );
}

export default function TopNavbar({
  variant,
  fullName,
  orgName,
  profilePic,
  settingsHref,
  hasNotification = true,
  onBellClick,
  className = "",
}: TopNavbarProps) {
  return (
    <div className={`flex items-center justify-between px-6 py-4 border-b bg-white shadow-xl ${className}`}>
      {/* Left area */}
      {variant === "siswa" ? (
        <div className="min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{fullName}</h3>
          <small className="text-sm text-gray-500 truncate">{orgName}</small>
        </div>
      ) : (
        <div className="min-w-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#0F67B1]">
            SELAMAT DATANG
          </h1>
          <p className="text-sm text-gray-500">
            Hi, {orgName}. Selamat datang kembali di MAVOKA!
          </p>
        </div>
      )}

      {/* Right actions */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onBellClick}
          className="relative rounded-none shadow-none p-0"
          aria-label="Notifikasi"
        >
          <FaBell className="w-6 h-6 text-[#0F67B1]" />
          {hasNotification && (
            <span className="absolute top-1 right-0 block w-2 h-2 bg-[#28A745] rounded-full" />
          )}
        </button>

        <div className="w-px h-10 bg-gray-300" />

        <Link href={settingsHref} aria-label="Buka pengaturan profil">
          <div className="relative w-9 h-9">
            <Avatar name={fullName} src={profilePic ?? undefined} />
            <div className="absolute -bottom-1 -right-2">
              <RiPencilLine className="text-black w-4 h-4" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}


