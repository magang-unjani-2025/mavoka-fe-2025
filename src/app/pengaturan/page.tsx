"use client";
import { useState } from "react";
import ProfileHeader from "@/app/components/dashboard/siswa/pengaturan/data-diri/ProfileHeader";
import ProfileAvatar from "@/app/components/dashboard/siswa/pengaturan/data-diri/ProfileAvatar";
import ProfileView from "@/app/components/dashboard/siswa/pengaturan/data-diri/ProfileView";
import ProfileForm from "@/app/components/dashboard/siswa/pengaturan/data-diri/ProfileForm";
import DashboardLayout2 from "@/app/components/dashboard/DashboardLayout2";

export default function DataDiriPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    fullName: "Lisa Mariana Treynggar Amsori",
    profilePic: "",
    email: "Lisaaja@gmail.com",
    gender: "Perempuan",
    birthDate: "2025-07-12",
    phone: "0821345566",
    address: "Gamping",
    city: "Bojonggede",
    province: "Jawa Bagian Barat",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ProfileHeader onEdit={() => setIsEditing(true)} />
      <ProfileAvatar src={form.profilePic} name={form.fullName} />

      {!isEditing && <ProfileView form={form} />}

      {isEditing && (
        <>
          <ProfileForm form={form} handleChange={handleChange} />
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-100"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 rounded bg-[#0F67B1] text-white hover:opacity-70"
            >
              Simpan
            </button>
          </div>
        </>
      )}
    </>
  );
}
