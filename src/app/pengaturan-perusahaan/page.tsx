"use client";
import { useState, useEffect } from "react";
import ProfileHeader from "@/app/components/pengaturan-profil/data-akun/ProfileHeader";
import ProfileAvatar from "@/app/components/pengaturan-profil/data-akun/ProfileAvatar";
import TampilProfil from "@/app/components/pengaturan-profil/data-akun/TampilProfil";

type Role = "sekolah" | "perusahaan" | "lpk" | "siswa";

export default function ProfilePage() {
  const [role, setRole] = useState<Role>("perusahaan");
  const [form, setForm] = useState({
    nama_perusahaan: "Fitinline",
    profilePic: "",
    bidang_usaha: "Teknologi",
    deskripsi_usaha: "Perusahaan yang bergerak di bidang teknologi",
    email: "fitinline@gmail.com",
    phone: "0821345566",
    website: "fitinline.com",
    address: "Gamping",
    penanggung_jawab: "Lele",
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
            form.nama_perusahaan
          }
        />
      </div>

      <TampilProfil form={form} handleChange={handleChange} />
    </div>
  );
}
