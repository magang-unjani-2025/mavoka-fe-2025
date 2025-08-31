
"use client";
import { useState } from "react";
import AkunHeader from "@/app/components/dashboard/siswa/pengaturan/akun/AkunHeader";
import AkunView from "@/app/components/dashboard/siswa/pengaturan/akun/AkunView";
import ChangePasswordFlow from "@/app/components/dashboard/siswa/pengaturan/akun/ChangePasswordFlow";

export default function AkunPage() {
  const [activeTab, setActiveTab] = useState("akun");
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    username: "SMK Negeri 1 Yogyakarta",
    email: "smk1yogyakarta@gmail.com",
    password: "smk12345",
  });

  return (
    <>
      {activeTab === "akun" && (
        <>
          <AkunHeader />
          {!isEditing && (
            <AkunView
              form={form}
              setForm={setForm}
              onChangePassword={() => setIsEditing(true)}
            />
          )}
          {isEditing && (
            <ChangePasswordFlow onCancel={() => setIsEditing(false)} />
          )}
        </>
      )}
    </>
  );
}
