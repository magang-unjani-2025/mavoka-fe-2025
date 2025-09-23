
"use client";
import { useState } from "react";
import AkunHeader from "@/app/components/pengaturan-profil/akun/AkunHeader";
import AkunView from "@/app/components/pengaturan-profil/akun/AkunView";
import ChangePasswordFlow from "@/app/components/pengaturan-profil/akun/ChangePasswordFlow";

export default function AkunLpkPage() {
  const [activeTab, setActiveTab] = useState("akun");
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    username: "Fitacademy x Fitinline",
    email: "fitacademy@gmail.com",
    password: "Fitacademy12345",
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
