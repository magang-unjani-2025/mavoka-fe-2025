"use client";
import { useState } from "react";
import ProfileHeader from "@/app/components/dashboard/perusahaan/pengaturan/data-perusahaan/ProfileHeader";
import ProfileAvatar from "@/app/components/pengaturan-profil/data-akun/ProfileAvatar";
import ProfileView from "@/app/components/dashboard/perusahaan/pengaturan/data-perusahaan/ProfileView";
import ProfileForm from "@/app/components/dashboard/perusahaan/pengaturan/data-perusahaan/ProfileForm";
import DashboardLayout2 from "@/app/components/dashboard/DashboardLayout2";

export default function DataPerusahaanPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    nama_perusahaan: "Fitinline",
    profilePic: "",
    email: "fitinline@gmail.com",
    bidang_usaha: "Teknologi",
    deskripsi_perusahaan: "Perusahaan yang bergerak di bidang teknologi",
    phone: "0821345566",
    address: "Gamping",
    city: "Sleman",
    province: "Daerah Istimewa Yogyakarta",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ProfileHeader onEdit={() => setIsEditing(true)} />
      <ProfileAvatar src={form.profilePic} name={form.nama_perusahaan} />

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
