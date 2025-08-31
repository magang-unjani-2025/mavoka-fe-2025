"use client";
import { useState } from "react";
import ProfileHeader from "@/app/components/dashboard/sekolah/pengaturan/data-sekolah/ProfileHeader";
import ProfileAvatar from "@/app/components/dashboard/sekolah/pengaturan/data-sekolah/ProfileAvatar";
import TampilProfil from "@/app/components/dashboard/sekolah/pengaturan/data-sekolah/TampilProfil";

export default function ProfilePage() {
  const [form, setForm] = useState({
    nama_sekolah: "SMK Negeri 1 Yogyakarta",
    npsn: "20404180",
    email: "smk1yogyakarta@yahoo.com",
    phone: "(0274) 512148",
    website: "https://mail.smk1yogyayess.sch.id",
    address:
      "Jl. Kemetiran Kidul 35, Kecamatan Gedongtengen, Kota Yogyakarta, D.I. Yogyakarta.",
    profilePic: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <ProfileHeader onEdit={() => console.log("edit header")} />

      <div className="flex justify-center mb-6">
        <ProfileAvatar src={form.profilePic} name={form.nama_sekolah} />
      </div>

      <TampilProfil form={form} handleChange={handleChange} />
    </div>
  );
}
