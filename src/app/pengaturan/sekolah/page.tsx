"use client";
import { useState } from "react";
import SekolahHeader from "@/app/components/dashboard/siswa/pengaturan/sekolah/SekolahHeader";
import SekolahView from "@/app/components/dashboard/siswa/pengaturan/sekolah/SekolahView";

export default function SekolahPage() {
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    username: "Lisa Mariana Aja",
    password: "Lisa12345",
    fullName: "Lisa Mariana Treynggar Amsori",
    profilePic: "",
    email: "Lisaaja@gmail.com",
    gender: "Perempuan",
    birthDate: "2025-07-12",
    phone: "0821345566",
    address: "Gamping",
    city: "Bojonggede",
    province: "Jawa Bagian Barat",
    schoolName: "SMK Negeri 1 Yogyakarta",
    nisn: "1234567890",
    kelas: "12",
    jurusan: "Rekayasa Perangkat Lunak",
    tahunAjaran: "2024/2025",
  });

  return (
    <>
      <SekolahHeader />
      {!isEditing && <SekolahView form={form} />}
    </>
  );
}
