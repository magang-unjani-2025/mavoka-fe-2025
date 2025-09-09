"use client";
import { useState, useEffect } from "react";
import ProfileHeader from "@/app/components/pengaturan-profil/data-akun/ProfileHeader";
import ProfileAvatar from "@/app/components/pengaturan-profil/data-akun/ProfileAvatar";
import TampilProfil from "@/app/components/pengaturan-profil/data-akun/TampilProfil";

type Role = "sekolah" | "perusahaan" | "lpk" | "siswa";

export default function ProfilePage() {
  const [role, setRole] = useState<Role>("sekolah");
  const [form, setForm] = useState({
    nama_sekolah: "SMK Negeri 1 Yogyakarta",
    npsn: "20404180",
    email: "smk1yogyakarta@gmail.com",
    phone: "08123456789",
    website: "https://mail.smk1yogyayess.sch.id",
    address:
      "Jl. Kemetiran Kidul 35, Kecamatan Gedongtengen, Kota Yogyakarta, D.I. Yogyakarta.",
    profilePic: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        if (parsed.role) setRole(parsed.role as Role);
      } catch (e) {
        console.error("Gagal parse user:", e);
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <ProfileHeader role={role} />

      <div className="flex justify-center mb-6">
        <ProfileAvatar
          src={form.profilePic}
          name={
            form.nama_sekolah
          }
        />
      </div>

      <TampilProfil form={form} handleChange={handleChange} />
    </div>
  );
}
