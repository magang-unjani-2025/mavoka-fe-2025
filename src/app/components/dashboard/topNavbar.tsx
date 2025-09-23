"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import { Menu } from "lucide-react";
import * as React from "react";

type TopNavbarProps = {
  variant: "siswa" | "welcome";
  fullName?: string;
  orgName?: string;
  profilePic?: string | null;
  settingsHref: string;
  hasNotification?: boolean;
  onBellClick?: () => void;
  className?: string;
  onMobileOpen?: () => void;
};

type AnyUser = Record<string, any>;

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

// ——— helpers: derive nama/org berdasar role dengan fallback ———
function deriveFullName(user: AnyUser | null, role?: string) {
  const r = (role ?? "").toLowerCase();
  const u = user || {};
  switch (r) {
    case "siswa":
      return u.nama_lengkap ?? u.name ?? u.username ?? "Siswa";
    case "sekolah":
      return u.nama_kepala_sekolah ?? u.penanggung_jawab ?? u.name ?? u.username ?? "Pengguna Sekolah";
    case "perusahaan":
      return u.penanggung_jawab ?? u.pic ?? u.name ?? u.username ?? "Pengguna Perusahaan";
    case "lpk":
      return u.penanggung_jawab ?? u.name ?? u.username ?? "Pengguna LPK";
    case "admin":
      return u.name ?? u.username ?? "Admin";
    default:
      return u.name ?? u.username ?? "Pengguna";
  }
}

function deriveOrgName(user: AnyUser | null, role?: string) {
  const r = (role ?? "").toLowerCase();
  const u = user || {};
  switch (r) {
    case "siswa":
      return u.sekolah?.nama ?? u.nama_sekolah ?? "Siswa";
    case "sekolah":
      return u.nama_sekolah ?? u.orgName ?? u.nama_instansi ?? u.sekolah?.nama ?? "Sekolah";
    case "perusahaan":
      return u.nama_perusahaan ?? u.company?.nama_perusahaan ?? "Perusahaan";
    case "lpk":
      return u.nama_lpk ?? u.nama_lembaga ?? u.lembaga?.nama ?? "Lembaga Pelatihan";
    case "admin":
      return "Administrator";
    default:
      return u.orgName ?? "MAVOKA";
  }
}

function deriveAvatar(user: AnyUser | null, profilePic?: string | null) {
  const u = user || {};
  return profilePic ?? u.avatar ?? u.foto ?? null;
}

export default function TopNavbar({
  variant,
  fullName,
  orgName,
  profilePic,
  settingsHref = "/pengaturan",
  hasNotification = true,
  onBellClick,
  className = "",
  onMobileOpen,
}: TopNavbarProps) {
  const [loadedUser, setLoadedUser] = React.useState<AnyUser | null>(null);
  const [loadedRole, setLoadedRole] = React.useState<string | null>(null);

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      const r = localStorage.getItem("role");
      if (raw) setLoadedUser(JSON.parse(raw));
      if (r) setLoadedRole(r);
    } catch {}
  }, []);

  // Jika props tidak disediakan, fallback ke data dari localStorage
  const displayFullName = fullName ?? deriveFullName(loadedUser, loadedRole ?? undefined);
  const displayOrgName = orgName ?? deriveOrgName(loadedUser, loadedRole ?? undefined);
  const displayAvatar = deriveAvatar(loadedUser, profilePic ?? null);

  return (
    <div className={`flex items-center justify-between px-6 py-4 border-b bg-white shadow-xl ${className}`}>
      {/* Left area + hamburger (mobile only) */}
      {variant === "siswa" ? (
        <div className="min-w-0 flex items-center gap-2">
          <button
            type="button"
            onClick={onMobileOpen}
            className="-ml-2 p-2 rounded-md hover:bg-gray-100 sm:hidden"
            aria-label="Open sidebar"
          >
            <Menu size={22} />
          </button>
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">{displayFullName}</h3>
            <small className="text-sm text-gray-500 truncate">{displayOrgName}</small>
          </div>
        </div>
      ) : (
        <div className="min-w-0 flex items-center gap-3">
          {/* hamburger mobile */}
          <button
            type="button"
            onClick={onMobileOpen}
            className="-ml-2 p-2 rounded-md hover:bg-gray-100 sm:hidden"
            aria-label="Open sidebar"
          >
            <Menu size={22} />
          </button>

          <div>
            <h1 className="text-xl md:text-3xl font-extrabold tracking-tight text-[#0F67B1]">
              SELAMAT DATANG
            </h1>
            <p className="text-sm text-gray-500">
              Hi, {displayOrgName}. Selamat datang kembali di MAVOKA!
            </p>
          </div>
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
            <Avatar name={displayFullName} src={displayAvatar ?? undefined} />
            <div className="absolute -bottom-1 -right-2">
              <RiPencilLine className="text-black w-4 h-4" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
