"use client";
import { useState, useEffect } from "react";
import ProfileHeader from "@/app/components/pengaturan-profil/data-akun/ProfileHeader";
import ProfileAvatar from "@/app/components/pengaturan-profil/data-akun/ProfileAvatar";
import TampilProfil from "@/app/components/pengaturan-profil/data-akun/TampilProfil";

type Role = "sekolah" | "perusahaan" | "lpk" | "siswa";

export default function DataLpkPage() {
  const [role, setRole] = useState<Role>("lpk");
  const [form, setForm] = useState({
    nama_lembaga: "Fitacademy x Fitinline",
    profilePic: "",
    bidang_pelatihan: "Teknologi",
    deskripsi_lembaga: "Lembaga pelatihan yang bergerak di bidang teknologi",
    email: "fitacademy@gmail.com",
    phone: "08111144445555",
    website: "fitacademy.com",
    address: "Maguwo",
    akreditasi: "Baik Sekali",
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
            form.nama_lembaga
          }
        />
      </div>

      <TampilProfil form={form} handleChange={handleChange} />
    </div>
  );
}
